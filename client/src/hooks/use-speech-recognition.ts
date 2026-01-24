import { useState, useRef, useCallback, useEffect } from "react";

interface UseSpeechRecognitionOptions {
  silenceTimeout?: number;
  onSpeechEnd?: (transcript: string) => void;
  autoMode?: boolean;
}

interface UseSpeechRecognitionReturn {
  isListening: boolean;
  transcript: string;
  interimTranscript: string;
  startListening: () => void;
  stopListening: () => void;
  resetTranscript: () => void;
  isSupported: boolean;
  isReady: boolean;
  error: string | null;
  isSpeaking: boolean;
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
}

declare global {
  interface Window {
    webkitSpeechRecognition: new () => ISpeechRecognition;
    SpeechRecognition: new () => ISpeechRecognition;
  }
}

export function useSpeechRecognition(options: UseSpeechRecognitionOptions = {}): UseSpeechRecognitionReturn {
  const { silenceTimeout = 1500, onSpeechEnd, autoMode = false } = options;
  
  const [isListening, setIsListening] = useState(false);
  const [isSpeaking, setIsSpeaking] = useState(false);
  const [transcript, setTranscript] = useState("");
  const [interimTranscript, setInterimTranscript] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [instanceKey, setInstanceKey] = useState(0); // Trigger recreation
  const [isReady, setIsReady] = useState(false);
  
  const recognitionRef = useRef<ISpeechRecognition | null>(null);
  const silenceTimerRef = useRef<NodeJS.Timeout | null>(null);
  const startupTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  const transcriptRef = useRef("");
  const interimTranscriptRef = useRef("");
  const hasSpokenRef = useRef(false);
  const isStartingRef = useRef(false);
  const lastStartAttemptRef = useRef(0);
  
  // Clear startup timeout
  const clearStartupTimeout = useCallback(() => {
    if (startupTimeoutRef.current) {
      clearTimeout(startupTimeoutRef.current);
      startupTimeoutRef.current = null;
    }
  }, []);

  const isSupported = typeof window !== "undefined" && 
    ("webkitSpeechRecognition" in window || "SpeechRecognition" in window);

  const clearSilenceTimer = useCallback(() => {
    if (silenceTimerRef.current) {
      clearTimeout(silenceTimerRef.current);
      silenceTimerRef.current = null;
    }
  }, []);

  const handleSilenceTimeout = useCallback(() => {
    if (autoMode && hasSpokenRef.current) {
      const fullTranscript = (transcriptRef.current + " " + interimTranscriptRef.current).trim();
      if (fullTranscript) {
        if (recognitionRef.current) {
          recognitionRef.current.stop();
        }
        if (onSpeechEnd) {
          onSpeechEnd(fullTranscript);
        }
      }
    }
  }, [autoMode, onSpeechEnd]);

  const resetSilenceTimer = useCallback(() => {
    clearSilenceTimer();
    if (autoMode && hasSpokenRef.current) {
      silenceTimerRef.current = setTimeout(handleSilenceTimeout, silenceTimeout);
    }
  }, [autoMode, silenceTimeout, clearSilenceTimer, handleSilenceTimeout]);

  // Recreate recognition instance - called after network errors
  const recreateInstance = useCallback(() => {
    console.log("Recreating recognition instance");
    if (recognitionRef.current) {
      try {
        recognitionRef.current.onstart = null;
        recognitionRef.current.onresult = null;
        recognitionRef.current.onerror = null;
        recognitionRef.current.onend = null;
        recognitionRef.current.onspeechend = null;
        recognitionRef.current.abort();
      } catch (e) {
        // Ignore abort errors
      }
      recognitionRef.current = null;
    }
    // Trigger useEffect to create new instance
    setInstanceKey(k => k + 1);
  }, []);

  // Create/recreate the recognition instance
  useEffect(() => {
    if (!isSupported) return;

    const SpeechRecognitionClass = window.SpeechRecognition || window.webkitSpeechRecognition;
    const recognition = new SpeechRecognitionClass();

    recognition.continuous = true;
    recognition.interimResults = true;
    recognition.lang = "en-US";

    recognition.onstart = () => {
      console.log("Speech recognition started");
      clearStartupTimeout();
      setIsListening(true);
      isStartingRef.current = false;
      setError(null);
      hasSpokenRef.current = false;
    };

    recognition.onresult = (event: ISpeechRecognitionEvent) => {
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
      console.error("Speech recognition error:", event.error);
      clearSilenceTimer();
      clearStartupTimeout();
      
      if (event.error === "no-speech") {
        // Just continue listening if no speech detected
        return;
      }

      setIsListening(false);
      setIsSpeaking(false);
      isStartingRef.current = false;
      
      if (event.error !== "aborted" && event.error !== "network") {
        setError(event.error);
      }
    };

    recognition.onend = () => {
      console.log("Speech recognition onend event");
      isStartingRef.current = false;
      clearSilenceTimer();
      clearStartupTimeout();
      
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
      setIsListening(false);
      setIsSpeaking(false);
    };

    recognitionRef.current = recognition;
    setIsReady(true);

    return () => {
      setIsReady(false);
      clearSilenceTimer();
      clearStartupTimeout();
      try {
        recognition.abort();
      } catch (e) {
        // Ignore
      }
    };
  }, [isSupported, autoMode, instanceKey, resetSilenceTimer, clearSilenceTimer, clearStartupTimeout, recreateInstance]);

  const startListening = useCallback(() => {
    const now = Date.now();
    if (now - lastStartAttemptRef.current < 500) return;
    lastStartAttemptRef.current = now;

    if (!recognitionRef.current) {
      // Recreate instance if it doesn't exist
      const SpeechRecognitionClass = window.SpeechRecognition || window.webkitSpeechRecognition;
      if (SpeechRecognitionClass) {
        setInstanceKey(k => k + 1);
      }
      return;
    }
    
    if (!isListening && !isStartingRef.current) {
      isStartingRef.current = true;
      setTranscript("");
      setInterimTranscript("");
      transcriptRef.current = "";
      interimTranscriptRef.current = "";
      hasSpokenRef.current = false;
      setError(null);
      
      // Set a timeout to detect if microphone fails to start (onstart never fires)
      clearStartupTimeout();
      startupTimeoutRef.current = setTimeout(() => {
        if (isStartingRef.current) {
          console.error("Microphone startup timeout - onstart never fired");
          isStartingRef.current = false;
          setError("microphone-timeout");
          try {
            recognitionRef.current?.abort();
          } catch (e) {
            // Ignore abort errors
          }
          recreateInstance();
        }
      }, 5000);
      
      try {
        recognitionRef.current.start();
      } catch (e: unknown) {
        clearStartupTimeout();
        isStartingRef.current = false;
        const errorMessage = e instanceof Error ? e.message : String(e);
        console.error("Failed to start speech recognition:", errorMessage);
        // If it's an "already started" error, we're actually listening
        if (errorMessage.includes("already started")) {
          isStartingRef.current = false;
          setIsListening(true);
          return;
        }
        // For other errors, recreate the instance for next attempt
        setError("start-failed");
        recreateInstance();
      }
    }
  }, [isListening, recreateInstance, clearStartupTimeout]);

  const stopListening = useCallback(() => {
    clearSilenceTimer();
    clearStartupTimeout();
    if (recognitionRef.current && isListening) {
      recognitionRef.current.stop();
    }
  }, [isListening, clearSilenceTimer, clearStartupTimeout]);

  const resetTranscript = useCallback(() => {
    setTranscript("");
    setInterimTranscript("");
    transcriptRef.current = "";
    interimTranscriptRef.current = "";
    hasSpokenRef.current = false;
  }, []);

  return {
    isListening,
    isSpeaking,
    transcript,
    interimTranscript,
    startListening,
    stopListening,
    resetTranscript,
    isSupported,
    isReady,
    error,
  };
}
