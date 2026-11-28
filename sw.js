// منصة التميز — عامل خدمة بسيط (يمرّر الطلبات للشبكة دائماً حتى تصل التحديثات فوراً)
self.addEventListener('install', e => self.skipWaiting());
self.addEventListener('activate', e => e.waitUntil(self.clients.claim()));
self.addEventListener('fetch', () => {});
