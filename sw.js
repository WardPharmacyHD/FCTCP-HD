// Bumped version to v5 to force mobile devices to purge stale cached JS/HTML
const CACHE_NAME = 'cp3-portal-v5';
const ASSETS_TO_CACHE = [
  './',
  './index.html',
  './manifest.json',
  'https://cdn.tailwindcss.com',
  'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css',
  'https://cdn.jsdelivr.net/npm/xlsx@0.18.5/dist/xlsx.full.min.js'
];

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => cache.addAll(ASSETS_TO_CACHE))
  );
  self.skipWaiting();
});

self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((keys) =>
      Promise.all(
        keys.map((key) => {
          if (key !== CACHE_NAME) return caches.delete(key);
        })
      )
    )
  );
  self.clients.claim();
});

self.addEventListener('fetch', (event) => {
  // 1. DO NOT INTERCEPT non-GET requests (POST, PUT, DELETE).
  // Cache Storage API throws a fatal error if you try to cache POST requests!
  if (event.request.method !== 'GET') {
    return;
  }

  // 2. DO NOT INTERCEPT Google Apps Script / Google Sheets API requests & redirects
  if (
    event.request.url.includes('script.google.com') ||
    event.request.url.includes('google.com') ||
    event.request.url.includes('googleusercontent.com')
  ) {
    return;
  }

  // 3. Network-First Strategy with Cache Fallback for static assets
  event.respondWith(
    fetch(event.request)
      .then((networkResponse) => {
        if (
          networkResponse &&
          networkResponse.status === 200 &&
          networkResponse.type === 'basic' &&
          event.request.method === 'GET'
        ) {
          const responseToCache = networkResponse.clone();
          caches.open(CACHE_NAME).then((cache) => {
            cache.put(event.request, responseToCache);
          });
        }
        return networkResponse;
      })
      .catch(() => {
        return caches.match(event.request);
      })
  );
});
