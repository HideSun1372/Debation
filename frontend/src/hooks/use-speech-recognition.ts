import { useState, useRef, useCallback, useEffect } from "react";

type RecognitionState =
  | "idle"          // Ready to start
  | "starting"      // Requesting microphone
  | "listening"     // Recording audio
  | "transcribing"  // Uploaded audio, waiting for Camb.ai result
  | "stopping"      // Stopping recording
  | "error";

interface UseSpeechRecognitionOptions {
    silenceTimeout?: number;
    onSpeechEnd?: (transcript: string) => void;
    autoMode?: boolean;
    startupTimeout?: number;
}

interface UseSpeechRecognitionReturn {
    isListening: boolean;
    transcript: string;
    interimTranscript: string;
    startListening: () => void;
    stopListening: () => void;
    resetTranscript: () => void;
    resetError: () => void;
    isSupported: boolean;
    isReady: boolean;
    error: string | null;
    isSpeaking: boolean;
    state: RecognitionState;
}

export function useSpeechRecognition(options: UseSpeechRecognitionOptions = {}): UseSpeechRecognitionReturn {
    const {
        silenceTimeout = 1500,
        onSpeechEnd,
        autoMode = false,
    } = options;

    const [state, setState] = useState<RecognitionState>("idle");
    const [transcript, setTranscript] = useState("");
    const [isSpeaking, setIsSpeaking] = useState(false);
    const [error, setError] = useState<string | null>(null);

    const stateRef = useRef<RecognitionState>("idle");
    const mediaRecorderRef = useRef<MediaRecorder | null>(null);
    const audioChunksRef = useRef<Blob[]>([]);
    const streamRef = useRef<MediaStream | null>(null);
    const audioContextRef = useRef<AudioContext | null>(null);
    const silenceCheckRef = useRef<ReturnType<typeof setInterval> | null>(null);
    const silenceSinceRef = useRef<number | null>(null);
    const hasSpokenRef = useRef(false);
    const onSpeechEndRef = useRef(onSpeechEnd);
    const lastStartAttemptRef = useRef(0);

    useEffect(() => {
        stateRef.current = state;
    }, [state]);

    useEffect(() => {
        onSpeechEndRef.current = onSpeechEnd;
    }, [onSpeechEnd]);

    const isSupported =
        typeof window !== "undefined" &&
        typeof navigator.mediaDevices?.getUserMedia === "function" &&
        typeof MediaRecorder !== "undefined";

    const cleanup = useCallback(() => {
        if (silenceCheckRef.current) {
            clearInterval(silenceCheckRef.current);
            silenceCheckRef.current = null;
        }
        if (mediaRecorderRef.current && mediaRecorderRef.current.state !== "inactive") {
            try { mediaRecorderRef.current.stop(); } catch { /* ignore */ }
        }
        mediaRecorderRef.current = null;
        if (streamRef.current) {
            streamRef.current.getTracks().forEach(t => t.stop());
            streamRef.current = null;
        }
        if (audioContextRef.current) {
            audioContextRef.current.close().catch(() => {});
            audioContextRef.current = null;
        }
        silenceSinceRef.current = null;
        hasSpokenRef.current = false;
    }, []);

    const transcribeBlob = useCallback(async (blob: Blob) => {
        console.log("[STT] transcribeBlob called with blob size:", blob.size);
        if (!blob.size) {
            console.log("[STT] Blob is empty, returning to idle");
            setState("idle");
            return;
        }

        setState("transcribing");

        try {
            const formData = new FormData();
            formData.append("audio", blob, "audio.webm");

            console.log("[STT] Uploading to /api/transcribe...");
            const res = await fetch("/api/transcribe", {
                method: "POST",
                credentials: "include",
                body: formData,
            });

            console.log("[STT] Transcribe response status:", res.status);

            if (!res.ok) {
                const data = await res.json().catch(() => ({}));
                throw new Error(data.error || `Transcription failed: ${res.status}`);
            }

            const { transcript: text } = await res.json() as { transcript: string };
            console.log("[STT] Transcription complete:", text);
            setTranscript(text);
            setState("idle");

            if (text.trim()) {
                console.log("[STT] Calling onSpeechEnd callback");
                onSpeechEndRef.current?.(text);
            }
        } catch (err: any) {
            console.error("[STT] Transcription error:", err.message);
            setError("transcription-failed");
            setState("error");
        }
    }, []);

    const stopListening = useCallback(() => {
        if (stateRef.current !== "listening" && stateRef.current !== "starting") return;

        setState("stopping");

        if (silenceCheckRef.current) {
            clearInterval(silenceCheckRef.current);
            silenceCheckRef.current = null;
        }
        if (audioContextRef.current) {
            audioContextRef.current.close().catch(() => {});
            audioContextRef.current = null;
        }
        if (streamRef.current) {
            streamRef.current.getTracks().forEach(t => t.stop());
            streamRef.current = null;
        }

        if (mediaRecorderRef.current && mediaRecorderRef.current.state !== "inactive") {
            // onstop will fire and call transcribeBlob
            mediaRecorderRef.current.stop();
        } else {
            setState("idle");
        }
    }, []);

    const startListening = useCallback(async () => {
        console.log("[STT] startListening called, supported:", isSupported);
        if (!isSupported) {
            console.error("[STT] Speech recognition not supported");
            setError("not-supported");
            setState("error");
            return;
        }

        // Debounce rapid starts
        const now = Date.now();
        if (now - lastStartAttemptRef.current < 300) {
            console.log("[STT] Debounced (too soon after last start)");
            return;
        }
        lastStartAttemptRef.current = now;

        if (stateRef.current !== "idle" && stateRef.current !== "error") {
            console.log("[STT] Not starting - current state is:", stateRef.current);
            return;
        }

        console.log("[STT] Starting listening...");
        cleanup();
        setError(null);
        setTranscript("");
        hasSpokenRef.current = false;
        setState("starting");

        try {
            console.log("[STT] Requesting microphone access...");
            const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
            console.log("[STT] Got microphone stream");
            streamRef.current = stream;

            // Silence detection via Web Audio API analyser
            const audioContext = new AudioContext();
            audioContextRef.current = audioContext;
            const source = audioContext.createMediaStreamSource(stream);
            const analyser = audioContext.createAnalyser();
            analyser.fftSize = 512;
            source.connect(analyser);
            const dataArray = new Float32Array(analyser.fftSize);
            const silenceRmsThreshold = 0.01;

            // Choose best supported MIME type
            const mimeType = MediaRecorder.isTypeSupported("audio/mp4")
                ? "audio/mp4"
                : MediaRecorder.isTypeSupported("audio/webm;codecs=opus")
                ? "audio/webm;codecs=opus"
                : "audio/webm";
            console.log("[STT] Using MIME type:", mimeType);

            const recorder = new MediaRecorder(stream, { mimeType });
            mediaRecorderRef.current = recorder;
            audioChunksRef.current = [];

            recorder.ondataavailable = (e) => {
                if (e.data.size > 0) audioChunksRef.current.push(e.data);
            };

            recorder.onstop = () => {
                console.log("[STT] Recording stopped, got", audioChunksRef.current.length, "chunks");
                const blob = new Blob(audioChunksRef.current, { type: mimeType });
                console.log("[STT] Blob size:", blob.size);
                audioChunksRef.current = [];
                if (hasSpokenRef.current) {
                    console.log("[STT] User spoke, transcribing...");
                    transcribeBlob(blob);
                } else {
                    console.log("[STT] No speech detected, returning to idle");
                    setState("idle");
                }
            };

            recorder.start(100); // 100ms chunks
            console.log("[STT] Recording started");
            setState("listening");

            // Poll analyser for silence detection
            silenceCheckRef.current = setInterval(() => {
                if (stateRef.current !== "listening") return;

                analyser.getFloatTimeDomainData(dataArray);
                const rms = Math.sqrt(
                    dataArray.reduce((sum, v) => sum + v * v, 0) / dataArray.length
                );
                const speaking = rms > silenceRmsThreshold;
                setIsSpeaking(speaking);

                if (speaking) {
                    hasSpokenRef.current = true;
                    silenceSinceRef.current = null;
                } else if (hasSpokenRef.current) {
                    if (!silenceSinceRef.current) {
                        silenceSinceRef.current = Date.now();
                    } else if (autoMode && Date.now() - silenceSinceRef.current >= silenceTimeout) {
                        stopListening();
                    }
                }
            }, 100);

        } catch (err: any) {
            console.error("[STT] Start error:", err.message);
            cleanup();
            const msg = err.name === "NotAllowedError" || err.name === "PermissionDeniedError"
                ? "not-allowed"
                : err.name === "NotFoundError"
                ? "no-microphone"
                : "start-failed";
            setError(msg);
            setState("error");
        }
    }, [isSupported, cleanup, transcribeBlob, stopListening, autoMode, silenceTimeout]);

    const resetTranscript = useCallback(() => {
        setTranscript("");
        hasSpokenRef.current = false;
    }, []);

    const resetError = useCallback(() => {
        if (stateRef.current === "error") {
            setError(null);
            setState("idle");
        }
    }, []);

    useEffect(() => {
        return () => { cleanup(); };
    }, [cleanup]);

    return {
        isListening: state === "listening",
        isSpeaking,
        transcript,
        interimTranscript: state === "transcribing" ? "Transcribing your speech..." : "",
        startListening,
        stopListening,
        resetTranscript,
        resetError,
        isSupported,
        isReady: isSupported,
        error,
        state,
    };
}
