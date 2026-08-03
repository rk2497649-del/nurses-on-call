const CACHE_NAME = "nurses-on-calls-v1";

self.addEventListener("install", function(event) {
  event.waitUntil(
    caches.open(CACHE_NAME)
  );
});

self.addEventListener("fetch", function(event) {
  event.respondWith(
    caches.match(event.request)
      .then(function(response) {
        return response || fetch(event.request);
      })
  );
});
