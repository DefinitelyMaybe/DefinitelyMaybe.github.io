// Cache first then network
const CACHE = 'lava-cache';

self.addEventListener('install', e => {
  console.log('The service worker is being installed.');

  e.waitUntil(precache());
});
 
self.addEventListener('fetch', e => {
  e.respondWith(
    caches.match(e.request).then( res => {
      return res || fetch(e.request).then( Netres => {
        caches.open(CACHE).then( cache => {
          console.log(Netres);
          cache.put(e.request, Netres)
        })
      })
    })
  )
});
 
function precache() {
  return caches.open(CACHE).then(function (cache) {
    return cache.addAll(['./main.html', './style.css', 'Lava.png', './src/PlayerControls.js',
      './src/deps.js', './src/helpers.js', './src/main.js', 'mainfest.json', 'sw.js'])
  });
}

function fromCache(request) {
  return caches.open(CACHE).then( (cache) => {
    return cache.match(request).then( (matching) => {
      return matching || Promise.reject(`no-match for: ${request.url}`);
    });
  });
}

async function FromNetwork(request) {
  return fetch(request).then( res => {
    console.log(res);
  })
}