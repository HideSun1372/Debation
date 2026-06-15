/**
 * Base URL for API requests.
 * Set VITE_API_BASE_URL in .env to override (e.g. http://localhost:5000, https://debation.onrender.com).
 * Default: empty string (same-origin, uses relative paths like /api/auth/user)
 */
function getApiBaseUrl(): string {
  const env = import.meta.env.VITE_API_BASE_URL;
  if (env && typeof env === "string") return env.replace(/\/$/, "");
  return "";
}

export const API_BASE_URL = getApiBaseUrl();

/**
 * Derive WebSocket URL from an HTTP URL (http->ws, https->wss).
 */
function httpToWsUrl(httpUrl: string): string {
  try {
    const url = new URL(httpUrl);
    const wsProtocol = url.protocol === "https:" ? "wss:" : "ws:";
    const port = url.port || (url.protocol === "https:" ? "443" : "80");
    return `${wsProtocol}//${url.hostname}${port && port !== "80" && port !== "443" ? `:${port}` : ""}`;
  } catch {
    return "";
  }
}

/**
 * WebSocket base URL (ws/wss).
 * Set VITE_WS_BASE_URL in .env to override, or it is derived from VITE_API_BASE_URL.
 */
export function getWsUrl(): string {
  const envWs = import.meta.env.VITE_WS_BASE_URL;
  if (envWs && typeof envWs === "string") return envWs.replace(/\/$/, "");
  const apiBase = getApiBaseUrl();
  if (apiBase) return httpToWsUrl(apiBase);
  const { protocol, hostname, port } = window.location;
  const wsProtocol = protocol === "https:" ? "wss:" : "ws:";
  const wsPort = port || (protocol === "https:" ? "443" : "80");
  return `${wsProtocol}//${hostname}${port ? `:${wsPort}` : ""}`;
}

/**
 * Build full API URL from a path (e.g. "/api/auth/user").
 */
export function apiUrl(path: string): string {
  return `${API_BASE_URL}${path.startsWith("/") ? path : `/${path}`}`;
}
