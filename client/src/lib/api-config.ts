/**
 * Base URL for API requests.
 * Production: https://debation.onrender.com
 * Development: empty string (same-origin)
 */
export const API_BASE_URL =
  import.meta.env.PROD ? "https://debation.onrender.com" : "";

/**
 * Build full API URL from a path (e.g. "/api/auth/user").
 */
export function apiUrl(path: string): string {
  return `${API_BASE_URL}${path.startsWith("/") ? path : `/${path}`}`;
}
