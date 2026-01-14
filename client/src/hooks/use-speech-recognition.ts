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
  const recognitionRef = useRef<ISpeechRecognition | null>(null);
  const silenceTimerRef = useRef<NodeJS.Timeout | null>(null);
  const transcriptRef = useRef("");
  const interimTranscriptRef = useRef("");
  const hasSpokenRef = useRef(false);
  const retryCountRef = useRef(0);
  const maxRetries = 2;

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
      // Include both finalized transcript and any interim text that hasn't been finalized yet
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

  useEffect(() => {
    if (!isSupported) return;

    const SpeechRecognitionClass = window.SpeechRecognition || window.webkitSpeechRecognition;
    const recognition = new SpeechRecognitionClass();

    recognition.continuous = true;
    recognition.interimResults = true;
    recognition.lang = "en-US";

    recognition.onstart = () => {
      setIsListening(true);
      setError(null);
      hasSpokenRef.current = false;
      retryCountRef.current = 0; // Reset retry count on successful start
    };

    recognition.onresult = (event: ISpeechRecognitionEvent) => {
      let interim = "";
      let final = "";

      for (let i = event.resultIndex; i < event.results.length; i++) {
        const result = event.results[i];
        const transcriptText = result[0].transcript;

        if (result.isFinal) {
          final += transcriptText + " ";
        } else {
          interim += transcriptText;
        }
      }

      if (final || interim) {
        hasSpokenRef.current = true;
        setIsSpeaking(true);
      }

      if (final) {
        setTranscript((prev) => {
          const newTranscript = prev + final;
          transcriptRef.current = newTranscript;
          return newTranscript;
        });
        // Clear interim ref when text is finalized
        interimTranscriptRef.current = "";
      }
      setInterimTranscript(interim);
      interimTranscriptRef.current = interim;
      
      if (autoMode) {
        resetSilenceTimer();
      }
    };

    recognition.onerror = (event: ISpeechRecognitionErrorEvent) => {
      console.error("Speech recognition error:", event.error);
      clearSilenceTimer();
      
      // Network errors are often transient - auto-retry with limit
      if ((event.error === "network" || event.error === "aborted") && retryCountRef.current < maxRetries) {
        retryCountRef.current++;
        setIsListening(false);
        setIsSpeaking(false);
        // Auto-retry after 1s for transient errors
        setTimeout(() => {
          if (recognitionRef.current) {
            try {
              recognitionRef.current.start();
            } catch (e) {
              console.error("Failed to restart after network error:", e);
              setError("Microphone connection failed. Click 'Start Speaking' to retry.");
            }
          }
        }, 1000);
        return;
      }
      
      if (event.error !== "no-speech") {
        // Provide user-friendly error messages
        if (event.error === "network") {
          setError("Microphone connection lost. Click 'Start Speaking' to retry.");
        } else {
          setError(event.error);
        }
      }
      setIsListening(false);
      setIsSpeaking(false);
    };

    recognition.onend = () => {
      clearSilenceTimer();
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

    return () => {
      clearSilenceTimer();
      recognition.abort();
    };
  }, [isSupported, autoMode, resetSilenceTimer, clearSilenceTimer]);

  const startListening = useCallback(() => {
    if (recognitionRef.current && !isListening) {
      setTranscript("");
      setInterimTranscript("");
      transcriptRef.current = "";
      hasSpokenRef.current = false;
      setError(null);
      try {
        recognitionRef.current.start();
      } catch (e) {
        console.error("Failed to start speech recognition:", e);
      }
    }
  }, [isListening]);

  const stopListening = useCallback(() => {
    clearSilenceTimer();
    if (recognitionRef.current && isListening) {
      recognitionRef.current.stop();
    }
  }, [isListening, clearSilenceTimer]);

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
    error,
  };
}
