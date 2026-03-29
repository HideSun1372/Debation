import { useState, useRef, useCallback, useEffect } from "react";

interface UseSpeechSynthesisOptions {
    onStart?: () => void;
    onEnd?: () => void;
    onError?: (error: string) => void;
    // rate/pitch are accepted for API compatibility but not used with Camb.ai
    rate?: number;
    pitch?: number;
    voice?: string;
}

interface UseSpeechSynthesisReturn {
    speak: (text: string) => void;
    stop: () => void;
    pause: () => void;
    resume: () => void;
    isSpeaking: boolean;
    isPaused: boolean;
    isSupported: boolean;
    availableVoices: SpeechSynthesisVoice[];
    currentVoice: SpeechSynthesisVoice | null;
    setVoice: (voiceName: string) => void;
}

export function useSpeechSynthesis(
    options: UseSpeechSynthesisOptions = {}
): UseSpeechSynthesisReturn {
    const { onStart, onEnd, onError } = options;

    const [isSpeaking, setIsSpeaking] = useState(false);
    const [isPaused, setIsPaused] = useState(false);

    const audioRef = useRef<HTMLAudioElement | null>(null);
    const audioBlobUrlRef = useRef<string | null>(null);
    const onStartRef = useRef(onStart);
    const onEndRef = useRef(onEnd);
    const onErrorRef = useRef(onError);

    useEffect(() => {
        onStartRef.current = onStart;
        onEndRef.current = onEnd;
        onErrorRef.current = onError;
    }, [onStart, onEnd, onError]);

    const cleanupAudio = useCallback(() => {
        if (audioRef.current) {
            audioRef.current.pause();
            audioRef.current.onended = null;
            audioRef.current.onerror = null;
            if (audioRef.current.parentNode) {
                audioRef.current.parentNode.removeChild(audioRef.current);
            }
            audioRef.current = null;
        }
        if (audioBlobUrlRef.current) {
            URL.revokeObjectURL(audioBlobUrlRef.current);
            audioBlobUrlRef.current = null;
        }
    }, []);

    const stop = useCallback(() => {
        cleanupAudio();
        setIsSpeaking(false);
        setIsPaused(false);
    }, [cleanupAudio]);

    const speak = useCallback(async (text: string) => {
        if (!text.trim()) return;

        // Cancel any ongoing speech
        stop();

        try {
            console.log("[TTS] Starting TTS for text:", text.substring(0, 50) + "...");
            const res = await fetch("/api/tts/stream", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                credentials: "include",
                body: JSON.stringify({ text }),
            });

            console.log("[TTS] Response status:", res.status);

            if (!res.ok) {
                const errorText = await res.text();
                throw new Error(`TTS request failed: ${res.status} - ${errorText}`);
            }

            const blob = await res.blob();
            console.log("[TTS] Received blob, size:", blob.size);
            const url = URL.createObjectURL(blob);
            audioBlobUrlRef.current = url;

            // Create audio element in DOM with explicit type
            const audio = document.createElement("audio");
            audio.style.display = "none"; // Hide but keep in DOM
            audio.crossOrigin = "anonymous";
            document.body.appendChild(audio);

            // Set source AFTER adding to DOM
            audio.src = url;

            audioRef.current = audio;

            audio.onloadedmetadata = () => {
                console.log("[TTS] Audio metadata loaded, duration:", audio.duration);
            };

            audio.oncanplaythrough = () => {
                console.log("[TTS] Audio can play through");
            };

            audio.onended = () => {
                console.log("[TTS] Audio playback ended");
                cleanupAudio();
                setIsSpeaking(false);
                setIsPaused(false);
                onEndRef.current?.();
            };

            audio.onerror = (e) => {
                const errMsg = `Audio playback error: ${audio.error?.message || "unknown"}`;
                console.error("[TTS] audio.onerror:", errMsg, audio.error);
                cleanupAudio();
                setIsSpeaking(false);
                setIsPaused(false);
                onErrorRef.current?.(errMsg);
            };

            console.log("[TTS] Playing audio, src:", url, "blob size:", blob.size);
            try {
                const playPromise = audio.play();
                if (playPromise !== undefined) {
                    await playPromise.catch((err: any) => {
                        console.error("[TTS] play() promise rejected:", err.message, err.name);
                        throw err;
                    });
                    console.log("[TTS] Audio.play() succeeded");
                    // Fire onStart only now — when audio is actually playing
                    setIsSpeaking(true);
                    onStartRef.current?.();
                }
            } catch (playErr: any) {
                console.error("[TTS] Audio.play() threw error:", playErr.message, playErr.name);
                throw playErr;
            }
        } catch (err: any) {
            console.error("[TTS] Error:", err.message);
            cleanupAudio();
            setIsSpeaking(false);
            setIsPaused(false);
            onErrorRef.current?.(err.message || "TTS failed");
        }
    }, [stop, cleanupAudio]);

    const pause = useCallback(() => {
        if (audioRef.current && isSpeaking) {
            audioRef.current.pause();
            setIsPaused(true);
        }
    }, [isSpeaking]);

    const resume = useCallback(() => {
        if (audioRef.current && isPaused) {
            audioRef.current.play();
            setIsPaused(false);
        }
    }, [isPaused]);

    useEffect(() => {
        return () => { cleanupAudio(); };
    }, [cleanupAudio]);

    const getPlaybackInfo = useCallback(() => ({
        currentTime: audioRef.current?.currentTime ?? 0,
        duration: audioRef.current?.duration ?? 0,
    }), []);

    return {
        speak,
        stop,
        pause,
        resume,
        isSpeaking,
        isPaused,
        isSupported: true,
        getPlaybackInfo,
        // Kept for API compatibility — Camb.ai handles voice selection server-side
        availableVoices: [],
        currentVoice: null,
        setVoice: () => {},
    };
}
