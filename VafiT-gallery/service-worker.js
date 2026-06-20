const CACHE_NAME = 'vafit-gallery-v2';
const ASSETS = [
  './',
  './index.html',
  './style.css',
  './app.js',
  './manifest.json',
  '../assets/images/AFA0870E-F586-4406-8BAA-0A7944120AA3.png',
  '../assets/images/50F62985-1E64-4F1B-934A-64A8C4DC98CB.png'
];

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => cache.addAll(ASSETS)).then(() => self.skipWaiting())
  );
});

self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((keys) => Promise.all(keys.filter((key) => key !== CACHE_NAME).map((key) => caches.delete(key))))
  );
  self.clients.claim();
});

self.addEventListener('fetch', (event) => {
  if (event.request.method !== 'GET') return;
  event.respondWith(caches.match(event.request).then((resp) => resp || fetch(event.request).catch(() => caches.match('./index.html'))));
});
