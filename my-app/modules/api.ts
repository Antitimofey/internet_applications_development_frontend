// src/services/api.ts

// Определяем, запущены ли мы в Tauri
const isTauri = typeof window !== 'undefined' && '__TAURI__' in window;

// Важно: в Tauri build режиме proxy Vite не работает, 
// поэтому нужно использовать прямой URL к Django
const BASE_URL = isTauri 
  ? 'http://localhost:8000'  // Для Tauri (и dev, и build) напрямую к Django
  : '/api';                  // Для dev через Vite proxy

async function apiRequest<T>(
  path: string,
  options: RequestInit = {},
  queryParams?: Record<string, string | number>
): Promise<T> {
  let url = `${BASE_URL}${path}`;

  if (queryParams) {
    const params = new URLSearchParams();
    Object.entries(queryParams).forEach(([k, v]) => params.append(k, String(v)));
    url += `?${params}`;
  }

  console.log('[API]', isTauri ? '(Tauri)' : '(Dev)', options.method || 'GET', url);

  try {
    const response = await fetch(url, {
      ...options,
      headers: {
        'Content-Type': 'application/json',
        ...options.headers,
      },
      credentials: 'include',
    });

    if (!response.ok) {
      const text = await response.text();
      console.error('[API ERROR]', response.status, text);
      throw new Error(`HTTP ${response.status}: ${text}`);
    }

    return response.json() as T;
  } catch (error) {
    console.error('[API Fetch Error]', error);
    throw error;
  }
}

export const apiGet = <T>(path: string, params?: Record<string, any>) =>
  apiRequest<T>(path, { method: 'GET' }, params);