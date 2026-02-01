import { useState, useRef, useCallback, useEffect } from "react";

interface UseSpeechSynthesisOptions {
    voice?: string; // Voice name to use
    rate?: number; // Speech rate (0.1 to 10, default 1)
    pitch?: number; // Speech pitch (0 to 2, default 1)
    onStart?: () => void;
    onEnd?: () => void;
    onError?: (error: string) => void;
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
    const {
        voice: preferredVoice,
        rate = 1,
        pitch = 1,
        onStart,
        onEnd,
        onError,
    } = options;

    const [isSpeaking, setIsSpeaking] = useState(false);
    const [isPaused, setIsPaused] = useState(false);
    const [availableVoices, setAvailableVoices] = useState<SpeechSynthesisVoice[]>([]);
    const [currentVoice, setCurrentVoice] = useState<SpeechSynthesisVoice | null>(null);

    const utteranceRef = useRef<SpeechSynthesisUtterance | null>(null);
    const onStartRef = useRef(onStart);
    const onEndRef = useRef(onEnd);
    const onErrorRef = useRef(onError);

    // Keep refs updated
    useEffect(() => {
        onStartRef.current = onStart;
        onEndRef.current = onEnd;
        onErrorRef.current = onError;
    }, [onStart, onEnd, onError]);

    const isSupported = typeof window !== "undefined" && "speechSynthesis" in window;

    // Load available voices
    useEffect(() => {
        if (!isSupported) return;

        const loadVoices = () => {
            const voices = window.speechSynthesis.getVoices();
            setAvailableVoices(voices);

            // Set default voice - prefer English voices
            if (voices.length > 0 && !currentVoice) {
                // Try to find a good English voice
                const englishVoice = voices.find(
                    (v) => v.lang.startsWith("en") && v.name.includes("Google")
                ) || voices.find(
                    (v) => v.lang.startsWith("en") && !v.localService
                ) || voices.find(
                    (v) => v.lang.startsWith("en")
                ) || voices[0];

                setCurrentVoice(englishVoice);
            }
        };

        // Load immediately
        loadVoices();

        // Chrome loads voices asynchronously
        window.speechSynthesis.addEventListener("voiceschanged", loadVoices);

        return () => {
            window.speechSynthesis.removeEventListener("voiceschanged", loadVoices);
        };
    }, [isSupported, currentVoice]);

    // Set voice by name
    const setVoice = useCallback((voiceName: string) => {
        const voice = availableVoices.find((v) => v.name === voiceName);
        if (voice) {
            setCurrentVoice(voice);
        }
    }, [availableVoices]);

    // Apply preferred voice when it changes
    useEffect(() => {
        if (preferredVoice && availableVoices.length > 0) {
            setVoice(preferredVoice);
        }
    }, [preferredVoice, availableVoices, setVoice]);

    // Speak text
    const speak = useCallback((text: string) => {
        if (!isSupported || !text.trim()) return;

        // Cancel any ongoing speech
        window.speechSynthesis.cancel();

        const utterance = new SpeechSynthesisUtterance(text);
        utteranceRef.current = utterance;

        // Apply settings
        if (currentVoice) {
            utterance.voice = currentVoice;
        }
        utterance.rate = rate;
        utterance.pitch = pitch;

        // Event handlers
        utterance.onstart = () => {
            setIsSpeaking(true);
            setIsPaused(false);
            onStartRef.current?.();
        };

        utterance.onend = () => {
            setIsSpeaking(false);
            setIsPaused(false);
            utteranceRef.current = null;
            onEndRef.current?.();
        };

        utterance.onerror = (event) => {
            // Ignore "interrupted" errors - these happen when we cancel intentionally
            if (event.error === "interrupted") return;

            console.error("[SpeechSynthesis] Error:", event.error);
            setIsSpeaking(false);
            setIsPaused(false);
            onErrorRef.current?.(event.error);
        };

        utterance.onpause = () => {
            setIsPaused(true);
        };

        utterance.onresume = () => {
            setIsPaused(false);
        };

        // Start speaking
        window.speechSynthesis.speak(utterance);
    }, [isSupported, currentVoice, rate, pitch]);

    // Stop speaking
    const stop = useCallback(() => {
        if (!isSupported) return;
        window.speechSynthesis.cancel();
        setIsSpeaking(false);
        setIsPaused(false);
    }, [isSupported]);

    // Pause speaking
    const pause = useCallback(() => {
        if (!isSupported || !isSpeaking) return;
        window.speechSynthesis.pause();
    }, [isSupported, isSpeaking]);

    // Resume speaking
    const resume = useCallback(() => {
        if (!isSupported || !isPaused) return;
        window.speechSynthesis.resume();
    }, [isSupported, isPaused]);

    // Cleanup on unmount
    useEffect(() => {
        return () => {
            if (isSupported) {
                window.speechSynthesis.cancel();
            }
        };
    }, [isSupported]);

    return {
        speak,
        stop,
        pause,
        resume,
        isSpeaking,
        isPaused,
        isSupported,
        availableVoices,
        currentVoice,
        setVoice,
    };
}
