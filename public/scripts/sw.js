var CACHE_NAME = 'axa-eskin-traveel-v1';

var urlsToCache = [
  '/',
  '/stylesheets/style.css',
  '/script/main.js'
];

self.addEventListener('install', function(event) {
  // Perform install steps
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(function(cache) {
        console.log('Opened cache');
        return cache.addAll(urlsToCache);
      })
  );
});