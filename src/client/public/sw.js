CACHE_NAME = 'bsa-v1';
FILES_TO_CACHE = [
	'/',
	'/?utm_source=pwa',
	'/offline',
	'/404',
	'/about',
	'/brands',
	'/faq',
	'/contacts',
	'/resources/app.css',
	'/js/main.js',
	'/js/pages/index.js',
	'/js/pages/about.js',
	'/js/pages/brands.js',
	'/js/pages/faq.js',
	'/js/pages/contacts.js',
	'/js/pages/offline.js',
	'/js/pages/404.js'
];
OFFLINE_PAGE_URL = '/offline';
NETWORK_PAGES = [];

self.addEventListener('install', function (event) {
  event.waitUntil(
    caches.open(CACHE_NAME).then(function (cache) {
      return cache.addAll(FILES_TO_CACHE);
    }),
  );
});


self.addEventListener('activate', function (event) {
  event.waitUntil(
    caches.keys().then(function (cacheNames) {
      return Promise.all(
        cacheNames
          .filter(function (CACHE_NAME) {
            // Return true if you want to remove this cache,
            // but remember that caches are shared across
            // the whole origin
          })
          .map(function (CACHE_NAME) {
            return caches.delete(CACHE_NAME);
          }),
      );
    }),
  );
  return self.clients.claim();
});


self.addEventListener('fetch', function (event) {
  const url = new URL(event.request.url);

  //if (event.request.mode === 'navigate') console.log(decodeURI(url.pathname));
  if (url.origin == location.origin && NETWORK_PAGES.includes(decodeURI(url.pathname))) {
    event.respondWith(
      fetch(event.request).catch(error => caches.match(OFFLINE_PAGE_URL))
    );
  } else {
    event.respondWith(
      caches.open(CACHE_NAME).then(function (cache) {
        return cache.match(event.request).then(function (response) {
          var fetchPromise = fetch(event.request).then(function (networkResponse) {
            if(event.request.method == 'GET' && url.protocol == 'https:') cache.put(event.request, networkResponse.clone());
            return networkResponse;
          });
          return response || fetchPromise;
        });
      })
      .catch(function(e) {
        return caches.open(CACHE_NAME).then(function(cache) {
          return cache.match(OFFLINE_PAGE_URL);
        });
      }),
    );
  }
});

