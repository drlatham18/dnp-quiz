const VERSION="nursing-7208da53b417",FILES=["./app.js","./curriculum.js","./icons/icon-1024.png","./icons/icon-192.png","./icons/icon-512.png","./icons/icon.svg","./index.html","./library.js","./manifest.webmanifest","./privacy.html","./register-sw.js","./style.css","./support.html"];
self.addEventListener('install',e=>e.waitUntil(caches.open(VERSION).then(c=>c.addAll(FILES)).then(()=>self.skipWaiting())));
self.addEventListener('activate',e=>e.waitUntil(caches.keys().then(keys=>Promise.all(keys.filter(k=>k.startsWith('nursing-')&&k!==VERSION).map(k=>caches.delete(k)))).then(()=>self.clients.claim())));
self.addEventListener('fetch',e=>{const u=new URL(e.request.url);if(e.request.method!=='GET'||u.origin!==location.origin)return;
if(e.request.mode==='navigate'){e.respondWith(fetch(e.request).catch(()=>caches.match(new URL('./index.html',self.registration.scope))));return;}
e.respondWith(caches.match(e.request).then(hit=>hit||fetch(e.request)));});