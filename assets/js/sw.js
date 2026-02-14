const CACHE_NAME = 'stef-cv-v1';
const ASSETS = [
  '/',
  '/index.html',
  '/assets/images/Stef300x300-modified.webp',
  '/assets/js/site-optimization.js'
];

// Installatie: Sla de belangrijkste bestanden op in de cache
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(ASSETS);
    })
  );
});

// Fetch: Serveer vanuit cache, update op de achtergrond (Stale-while-revalidate)
self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request).then((cachedResponse) => {
      const fetchPromise = fetch(event.request).then((networkResponse) => {
        caches.open(CACHE_NAME).then((cache) => {
          cache.put(event.request, networkResponse.clone());
        });
        return networkResponse;
      });
      return cachedResponse || fetchPromise;
    })
  );
});