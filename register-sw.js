if ('serviceWorker' in navigator && !globalThis.Capacitor?.isNativePlatform()) { navigator.serviceWorker.register('./sw.js').catch(() => {}); }
