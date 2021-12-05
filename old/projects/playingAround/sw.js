// Cache first then network and cache networked resources
const CACHE = 'lava-cache';

self.addEventListener('install', e => {
  console.log('The service worker is being installed.');

  e.waitUntil(precache());
});
 
self.addEventListener('fetch', e => {
  e.respondWith(
    caches.open(CACHE).then( cache => {
      return cache.match(e.request).then( res => {
        return res || fetch(e.request).then( netRes => {
          cache.put(e.request, netRes.clone())
          return netRes
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
