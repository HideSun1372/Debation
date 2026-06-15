import { useEffect, useRef, useState, useCallback } from "react";
import { getWsUrl } from "@/lib/api-config";

export type WsMessage =
  | { type: "speech"; debateId: string; content: string; speechId: string; speechName: string; role: "user" | "opponent" }
  | { type: "opponent-joined"; debateId: string; username: string }
  | { type: "opponent-left"; debateId: string }
  | { type: "error"; message: string };

interface UseDebateWebSocketOptions {
  debateId: string | null;
  onSpeech?: (msg: { content: string; speechId: string; speechName: string; role: "user" | "opponent" }) => void;
  onOpponentJoined?: (username: string) => void;
  onOpponentLeft?: () => void;
  onError?: (message: string) => void;
}

export function useDebateWebSocket({
  debateId,
  onSpeech,
  onOpponentJoined,
  onOpponentLeft,
  onError,
}: UseDebateWebSocketOptions) {
  const wsRef = useRef<WebSocket | null>(null);
  const [connected, setConnected] = useState(false);
  const [opponentOnline, setOpponentOnline] = useState(false);
  const callbacksRef = useRef({ onSpeech, onOpponentJoined, onOpponentLeft, onError });
  callbacksRef.current = { onSpeech, onOpponentJoined, onOpponentLeft, onError };

  const sendSpeech = useCallback((content: string, speechId: string, speechName: string, role: "user" | "opponent") => {
    const ws = wsRef.current;
    if (!ws || ws.readyState !== WebSocket.OPEN || !debateId) return;
    ws.send(JSON.stringify({
      type: "speech",
      debateId,
      content,
      speechId,
      speechName,
      role,
    }));
  }, [debateId]);

  useEffect(() => {
    if (!debateId) return;

    const baseUrl = getWsUrl();
    const url = `${baseUrl}/ws`;
    const ws = new WebSocket(url);
    wsRef.current = ws;

    ws.onopen = () => {
      setConnected(true);
      ws.send(JSON.stringify({ type: "join-debate", debateId }));
    };

    ws.onmessage = (event) => {
      try {
        const msg = JSON.parse(event.data) as WsMessage;
        const cbs = callbacksRef.current;
        switch (msg.type) {
          case "speech":
            cbs.onSpeech?.({
              content: msg.content,
              speechId: msg.speechId,
              speechName: msg.speechName,
              role: msg.role,
            });
            break;
          case "opponent-joined":
            setOpponentOnline(true);
            cbs.onOpponentJoined?.(msg.username);
            break;
          case "opponent-left":
            setOpponentOnline(false);
            cbs.onOpponentLeft?.();
            break;
          case "error":
            cbs.onError?.(msg.message);
            break;
        }
      } catch {
        // ignore parse errors
      }
    };

    ws.onclose = () => {
      setConnected(false);
      setOpponentOnline(false);
    };

    ws.onerror = () => {
      callbacksRef.current.onError?.("WebSocket connection failed");
    };

    return () => {
      ws.close();
      wsRef.current = null;
      setConnected(false);
      setOpponentOnline(false);
    };
  }, [debateId]);

  return { connected, opponentOnline, sendSpeech };
}
