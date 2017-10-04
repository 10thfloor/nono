var filesToCache = [
  "index.html",
  "index.css",
  "index.js",
  "Styles/reset.css",
  "Pages/Todo/Todo.css",
  "Pages/Layout/Layout.css",
  "Pages/Home/Home.css"
];

var staticCacheName = "nono-cache-v1";

self.addEventListener("install", function(event) {
  console.log("Attempting to install service worker and cache static assets");
  event.waitUntil(
    caches.open(staticCacheName).then(function(cache) {
      return cache.addAll(filesToCache);
    })
  );
});

self.addEventListener("activate", function(event) {
  console.log("Activating new service worker...");

  var cacheWhitelist = [staticCacheName];

  event.waitUntil(
    caches.keys().then(function(cacheNames) {
      return Promise.all(
        cacheNames.map(function(cacheName) {
          if (cacheWhitelist.indexOf(cacheName) === -1) {
            return caches.delete(cacheName);
          }
        })
      );
    })
  );
});

self.addEventListener("fetch", function(event) {
  event.respondWith(
    caches
      .match(event.request)
      .then(function(response) {
        if (response) {
          return response;
        }
        return fetch(event.request);
      })
      .then(function(response) {
        // TODO 5 - Respond with custom 404 page

        return caches.open(staticCacheName).then(function(cache) {
          if (event.request.url.indexOf("test") < 0) {
            cache.put(event.request.url, response.clone());
          }
          return response;
        });
      })
      .catch(function(error) {
        // TODO 6 - Respond with custom offline page
      })
  );
});
