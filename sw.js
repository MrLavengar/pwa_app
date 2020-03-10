const cacheName = "cache"
const assets = [
    "/",
    "/index.html",
    "/ws.js",
    "/manifest.json",
    "/style.css",
    "/icons/icon-72x72.png",
    "/images/bmx.jpg",
    "/images/miejski.jpg",
    "/images/szosowy.jpg"
]

self.addEventListener('install', event => {
    event.waitUntil(
        caches.open(cacheName)
        .then(cache => {
            cache.addAll(assets)
        })
    )
})

self.addEventListener("fetch", fetchEvent => {
    fetchEvent.respondWith(
        caches.match(fetchEvent.request).then(res => {
            return res || fetch(fetchEvent.request)
        })
    )
})