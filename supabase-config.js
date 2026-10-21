/**
 * reautoconnect — Supabase Client Configuration
 * Connected to project: lhgdbnhezhfzqjokvuuk
 */

const LOCAL_STORAGE_KEY_URL = 'reauto_supabase_url';
const LOCAL_STORAGE_KEY_KEY = 'reauto_supabase_key';

export const defaultSupabaseConfig = {
  url: 'https://lhgdbnhezhfzqjokvuuk.supabase.co',
  anonKey: 'sb_publishable_WCBCKHoC_U2FpHomntrz7A_49LfdZcc'
};

export function getSupabaseCredentials() {
  const customUrl = typeof window !== 'undefined' ? localStorage.getItem(LOCAL_STORAGE_KEY_URL) : null;
  const customKey = typeof window !== 'undefined' ? localStorage.getItem(LOCAL_STORAGE_KEY_KEY) : null;
  
  const url = customUrl || (typeof window !== 'undefined' && window.__SUPABASE_URL__) || defaultSupabaseConfig.url;
  const anonKey = customKey || (typeof window !== 'undefined' && window.__SUPABASE_ANON_KEY__) || defaultSupabaseConfig.anonKey;

  const isConfigured = Boolean(
    url && 
    anonKey && 
    !url.includes('xyzcompany') && 
    !anonKey.includes('placeholder') &&
    url.startsWith('https://')
  );

  return { url, anonKey, isConfigured };
}

export function saveSupabaseCredentials(url, anonKey) {
  if (url) localStorage.setItem(LOCAL_STORAGE_KEY_URL, url.trim().replace(/\/$/, ''));
  if (anonKey) localStorage.setItem(LOCAL_STORAGE_KEY_KEY, anonKey.trim());
}

export function clearSupabaseCredentials() {
  localStorage.removeItem(LOCAL_STORAGE_KEY_URL);
  localStorage.removeItem(LOCAL_STORAGE_KEY_KEY);
}
