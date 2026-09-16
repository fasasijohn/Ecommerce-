import axios from 'axios';

export const appBasePath = import.meta.env.BASE_URL || '/';
export const apiBaseUrl = (import.meta.env.VITE_API_BASE_URL || '').replace(/\/$/, '');

axios.defaults.baseURL = apiBaseUrl;

export function publicAsset(path) {
  const cleanPath = path.startsWith('/') ? path.slice(1) : path;
  return `${appBasePath}${cleanPath}`;
}
