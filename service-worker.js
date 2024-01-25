const cacheName = 'timePWA-v1';
const filesToCache = [
    '/demo-pwa01/',
    '/demo-pwa01/index.html',
    '/demo-pwa01/styles.css',
    '/demo-pwa01/script.js',
    '/demo-pwa01/manifest.json',
    '/demo-pwa01/icon.png'
];

self.addEventListener('install', event => {
    event.waitUntil(
        caches.open(cacheName).then(cache => {
            return cache.addAll(filesToCache);
        })
    );
});

self.addEventListener('fetch', event => {
    event.respondWith(
        caches.match(event.request).then(response => {
            return response || fetch(event.request);
        })
    );
});

