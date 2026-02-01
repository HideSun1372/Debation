import { useState, useRef, useCallback, useEffect } from "react";

// State machine states for speech recognition
type RecognitionState =
  | "idle"           // Not listening, ready to start
  | "starting"       // Called start(), waiting for onstart
  | "listening"      // Active and listening
  | "stopping"       // Called stop(), waiting for onend
  | "error";         // Error state, needs reset

interface UseSpeechRecognitionOptions {
  silenceTimeout?: number;
  onSpeechEnd?: (transcript: string) => void;
  autoMode?: boolean;
  startupTimeout?: number; // How long to wait for microphone to start
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

interface ISpeechRecognition extends EventTarget {
  continuous: boolean;
  interimResults: boolean;
  lang: string;
  onstart: (() => void) | null;
  onresult: ((event: ISpeechRecognitionEvent) => void) | null;
  onerror: ((event: ISpeechRecognitionErrorEvent) => void) | null;
  onend: (() => void) | null;
  onspeechend: (() => void) | null;
  onaudiostart: (() => void) | null;
  start: () => void;
  stop: () => void;
  abort: () => void;
}

interface ISpeechRecognitionEvent {
  resultIndex: number;
  results: ISpeechRecognitionResultList;
}

interface ISpeechRecognitionResultList {
  length: number;
  [index: number]: ISpeechRecognitionResult;
}

interface ISpeechRecognitionResult {
  isFinal: boolean;
  [index: number]: ISpeechRecognitionAlternative;
}

interface ISpeechRecognitionAlternative {
  transcript: string;
  confidence: number;
}

interface ISpeechRecognitionErrorEvent {
  error: string;
  message?: string;
}

declare global {
  interface Window {
    webkitSpeechRecognition: new () => ISpeechRecognition;
    SpeechRecognition: new () => ISpeechRecognition;
  }
}

export function useSpeechRecognition(options: UseSpeechRecognitionOptions = {}): UseSpeechRecognitionReturn {
  const {
    silenceTimeout = 1500,
    onSpeechEnd,
    autoMode = false,
    startupTimeout = 3000 // 3 second timeout for microphone to start
  } = options;

  // Core state
  const [state, setState] = useState<RecognitionState>("idle");
  const [isSpeaking, setIsSpeaking] = useState(false);
  const [transcript, setTranscript] = useState("");
  const [interimTranscript, setInterimTranscript] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [isReady, setIsReady] = useState(false);

  // Refs for mutable state
  const recognitionRef = useRef<ISpeechRecognition | null>(null);
  const silenceTimerRef = useRef<NodeJS.Timeout | null>(null);
  const startupTimerRef = useRef<NodeJS.Timeout | null>(null);
  const transcriptRef = useRef("");
  const interimTranscriptRef = useRef("");
  const hasSpokenRef = useRef(false);
  const stateRef = useRef<RecognitionState>("idle");
  const instanceIdRef = useRef(0);
  const lastStartAttemptRef = useRef(0);
  const networkRetryCountRef = useRef(0);
  const maxNetworkRetries = 3;

  // Keep stateRef in sync
  useEffect(() => {
    stateRef.current = state;
  }, [state]);

  const isSupported = typeof window !== "undefined" &&
    ("webkitSpeechRecognition" in window || "SpeechRecognition" in window);

  // Cleanup all timers
  const clearAllTimers = useCallback(() => {
    if (silenceTimerRef.current) {
      clearTimeout(silenceTimerRef.current);
      silenceTimerRef.current = null;
    }
    if (startupTimerRef.current) {
      clearTimeout(startupTimerRef.current);
      startupTimerRef.current = null;
    }
  }, []);

  // Handle silence timeout - user stopped speaking
  const handleSilenceTimeout = useCallback(() => {
    if (autoMode && hasSpokenRef.current && stateRef.current === "listening") {
      const fullTranscript = (transcriptRef.current + " " + interimTranscriptRef.current).trim();
      if (fullTranscript) {
        console.log("[SpeechRecognition] Silence timeout - submitting transcript");
        if (recognitionRef.current) {
          try {
            recognitionRef.current.stop();
          } catch (e) {
            // Ignore
          }
        }
        setState("stopping");
        if (onSpeechEnd) {
          onSpeechEnd(fullTranscript);
        }
      }
    }
  }, [autoMode, onSpeechEnd]);

  // Reset silence timer when user speaks
  const resetSilenceTimer = useCallback(() => {
    if (silenceTimerRef.current) {
      clearTimeout(silenceTimerRef.current);
      silenceTimerRef.current = null;
    }
    if (autoMode && hasSpokenRef.current) {
      silenceTimerRef.current = setTimeout(handleSilenceTimeout, silenceTimeout);
    }
  }, [autoMode, silenceTimeout, handleSilenceTimeout]);

  // Handle startup timeout - microphone didn't start in time
  const handleStartupTimeout = useCallback(() => {
    if (stateRef.current === "starting") {
      console.error("[SpeechRecognition] Startup timeout - microphone failed to start within", startupTimeout, "ms");

      // Abort any pending recognition
      if (recognitionRef.current) {
        try {
          recognitionRef.current.abort();
        } catch (e) {
          // Ignore abort errors
        }
      }

      setError("microphone-timeout");
      setState("error");
    }
  }, [startupTimeout]);

  // Create a fresh recognition instance
  const createRecognitionInstance = useCallback(() => {
    if (!isSupported) return null;

    const currentInstanceId = ++instanceIdRef.current;
    console.log("[SpeechRecognition] Creating instance", currentInstanceId);

    const SpeechRecognitionClass = window.SpeechRecognition || window.webkitSpeechRecognition;
    const recognition = new SpeechRecognitionClass();

    recognition.continuous = true;
    recognition.interimResults = true;
    recognition.lang = "en-US";

    recognition.onstart = () => {
      // Only process if this is still the current instance
      if (instanceIdRef.current !== currentInstanceId) {
        console.log("[SpeechRecognition] Ignoring onstart from old instance");
        return;
      }

      console.log("[SpeechRecognition] Started successfully");

      // Clear startup timeout - we started successfully
      if (startupTimerRef.current) {
        clearTimeout(startupTimerRef.current);
        startupTimerRef.current = null;
      }

      // Reset network retry counter on successful start
      networkRetryCountRef.current = 0;

      setState("listening");
      setError(null);
      hasSpokenRef.current = false;
    };

    recognition.onaudiostart = () => {
      console.log("[SpeechRecognition] Audio started - microphone is active");
    };

    recognition.onresult = (event: ISpeechRecognitionEvent) => {
      if (instanceIdRef.current !== currentInstanceId) return;

      let finalTranscript = "";
      let currentInterim = "";

      for (let i = event.resultIndex; i < event.results.length; i++) {
        const result = event.results[i];
        if (result.isFinal) {
          finalTranscript += result[0].transcript;
        } else {
          currentInterim += result[0].transcript;
        }
      }

      if (finalTranscript) {
        hasSpokenRef.current = true;
        setIsSpeaking(true);
        setTranscript((prev) => {
          const newTranscript = (prev + " " + finalTranscript).trim();
          transcriptRef.current = newTranscript;
          return newTranscript;
        });
        resetSilenceTimer();
      }

      if (currentInterim) {
        hasSpokenRef.current = true;
        setIsSpeaking(true);
        setInterimTranscript(currentInterim);
        interimTranscriptRef.current = currentInterim;
        resetSilenceTimer();
      } else {
        setInterimTranscript("");
        interimTranscriptRef.current = "";
      }
    };

    recognition.onerror = (event: ISpeechRecognitionErrorEvent) => {
      if (instanceIdRef.current !== currentInstanceId) {
        console.log("[SpeechRecognition] Ignoring error from old instance:", event.error);
        return;
      }

      console.error("[SpeechRecognition] Error:", event.error, event.message || "");

      // Clear all timers on error
      clearAllTimers();

      // Handle "no-speech" - this is not a real error, just continue
      if (event.error === "no-speech") {
        return;
      }

      // Handle "aborted" - this is usually triggered by us, don't overwrite existing errors
      if (event.error === "aborted") {
        // Only set error state if we don't already have one
        if (!error) {
          setState("idle");
        }
        return;
      }

      // Map error types to user-friendly errors
      let errorType: string;
      switch (event.error) {
        case "not-allowed":
        case "permission-denied":
          errorType = "not-allowed";
          break;
        case "network":
          // Auto-retry on network errors up to maxNetworkRetries times
          if (networkRetryCountRef.current < maxNetworkRetries) {
            networkRetryCountRef.current++;
            console.log(`[SpeechRecognition] Network error, retrying (${networkRetryCountRef.current}/${maxNetworkRetries})...`);

            // Create fresh instance and retry after backoff
            const backoffMs = Math.min(1000 * Math.pow(2, networkRetryCountRef.current - 1), 4000);
            setTimeout(() => {
              if (stateRef.current === "error" || stateRef.current === "idle") {
                recognitionRef.current = createRecognitionInstance();
                setState("starting");
                try {
                  recognitionRef.current?.start();
                } catch (e) {
                  console.error("[SpeechRecognition] Retry failed:", e);
                  setError("network-error");
                  setState("error");
                }
              }
            }, backoffMs);

            setState("idle"); // Temporarily idle while retrying
            return;
          }
          errorType = "network-error";
          break;
        case "audio-capture":
          errorType = "no-microphone";
          break;
        case "service-not-allowed":
          errorType = "service-not-allowed";
          break;
        default:
          errorType = event.error || "unknown-error";
      }

      setError(errorType);
      setState("error");
      setIsSpeaking(false);
    };

    recognition.onend = () => {
      if (instanceIdRef.current !== currentInstanceId) {
        console.log("[SpeechRecognition] Ignoring onend from old instance");
        return;
      }

      console.log("[SpeechRecognition] Ended");

      // Clear all timers
      clearAllTimers();

      // Finalize any interim transcript
      setInterimTranscript((prevInterim) => {
        if (prevInterim.trim()) {
          setTranscript((prevTranscript) => {
            const newTranscript = (prevTranscript + " " + prevInterim).trim();
            transcriptRef.current = newTranscript;
            return newTranscript;
          });
        }
        return "";
      });

      setIsSpeaking(false);

      // Only transition to idle if we're not already in error state
      if (stateRef.current !== "error") {
        setState("idle");
      }
    };

    return recognition;
  }, [isSupported, autoMode, resetSilenceTimer, clearAllTimers, error]);

  // Initialize recognition on mount
  useEffect(() => {
    if (!isSupported) return;

    recognitionRef.current = createRecognitionInstance();
    setIsReady(true);

    return () => {
      clearAllTimers();
      if (recognitionRef.current) {
        try {
          recognitionRef.current.abort();
        } catch (e) {
          // Ignore
        }
        recognitionRef.current = null;
      }
    };
  }, [isSupported, createRecognitionInstance, clearAllTimers]);

  // Start listening
  const startListening = useCallback(() => {
    // Debounce rapid start attempts
    const now = Date.now();
    if (now - lastStartAttemptRef.current < 300) {
      console.log("[SpeechRecognition] Debouncing start attempt");
      return;
    }
    lastStartAttemptRef.current = now;

    // Only start from idle or error states
    if (stateRef.current !== "idle" && stateRef.current !== "error") {
      console.log("[SpeechRecognition] Cannot start - current state:", stateRef.current);
      return;
    }

    console.log("[SpeechRecognition] Starting...");

    // Clear any previous error
    setError(null);

    // Reset transcript
    setTranscript("");
    setInterimTranscript("");
    transcriptRef.current = "";
    interimTranscriptRef.current = "";
    hasSpokenRef.current = false;

    // Create fresh instance if needed (after errors, the old one might be broken)
    if (!recognitionRef.current || stateRef.current === "error") {
      recognitionRef.current = createRecognitionInstance();
    }

    if (!recognitionRef.current) {
      setError("not-supported");
      setState("error");
      return;
    }

    // Set starting state
    setState("starting");

    // Set startup timeout - if onstart doesn't fire within this time, fail
    clearAllTimers();
    startupTimerRef.current = setTimeout(handleStartupTimeout, startupTimeout);

    try {
      recognitionRef.current.start();
    } catch (e: unknown) {
      console.error("[SpeechRecognition] Failed to start:", e);
      clearAllTimers();

      const errorMessage = e instanceof Error ? e.message : String(e);

      // Handle "already started" case
      if (errorMessage.includes("already started")) {
        console.log("[SpeechRecognition] Already started, treating as listening");
        setState("listening");
        return;
      }

      // Create fresh instance for next attempt
      recognitionRef.current = createRecognitionInstance();
      setError("start-failed");
      setState("error");
    }
  }, [createRecognitionInstance, clearAllTimers, handleStartupTimeout, startupTimeout]);

  // Stop listening
  const stopListening = useCallback(() => {
    console.log("[SpeechRecognition] Stopping...");

    clearAllTimers();

    if (recognitionRef.current && (stateRef.current === "listening" || stateRef.current === "starting")) {
      setState("stopping");
      try {
        recognitionRef.current.stop();
      } catch (e) {
        console.error("[SpeechRecognition] Error stopping:", e);
        setState("idle");
      }
    } else {
      setState("idle");
    }
  }, [clearAllTimers]);

  // Reset transcript
  const resetTranscript = useCallback(() => {
    setTranscript("");
    setInterimTranscript("");
    transcriptRef.current = "";
    interimTranscriptRef.current = "";
    hasSpokenRef.current = false;
  }, []);

  // Reset error state - allows retry
  const resetError = useCallback(() => {
    if (stateRef.current === "error") {
      setError(null);
      setState("idle");
      // Create fresh instance
      recognitionRef.current = createRecognitionInstance();
    }
  }, [createRecognitionInstance]);

  // Derived state for backward compatibility
  const isListening = state === "listening";

  return {
    isListening,
    isSpeaking,
    transcript,
    interimTranscript,
    startListening,
    stopListening,
    resetTranscript,
    resetError,
    isSupported,
    isReady,
    error,
    state,
  };
}
