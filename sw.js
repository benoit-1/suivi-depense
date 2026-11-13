/* Suivi pellets : fonctionne hors connexion. L'application est relue sur internet à chaque ouverture
   (les mises à jour arrivent tout de suite) ; sans réseau, la dernière version gardée est utilisée. */
const CACHE = 'suivi-pellets-v60';
const FICHIERS = ['./', 'index.html', 'manifest.webmanifest', 'icon-192.png', 'icon-512.png', 'apple-touch-icon.png'];
self.addEventListener('install', e => { e.waitUntil(caches.open(CACHE).then(c => c.addAll(FICHIERS)).then(() => self.skipWaiting())); });
self.addEventListener('activate', e => { e.waitUntil(caches.keys().then(k => Promise.all(k.filter(n => n !== CACHE).map(n => caches.delete(n)))).then(() => self.clients.claim())); });
self.addEventListener('fetch', e => {
  const u = new URL(e.request.url);
  if (e.request.method !== 'GET' || u.origin !== location.origin || u.pathname.endsWith('.mp4')) return; // GitHub, météo, compteur : jamais en cache
  e.respondWith(fetch(e.request).then(r => { if (r.ok) { const copie = r.clone(); caches.open(CACHE).then(c => c.put(u.origin + u.pathname, copie)); } return r; })
    .catch(() => caches.match(e.request, {ignoreSearch: true}).then(r => r || caches.match('index.html'))));
});
