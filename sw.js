// Minimal service worker required for PWA installation criteria
self.addEventListener('fetch', (event) => {
  event.respondWith(fetch(event.request));
});