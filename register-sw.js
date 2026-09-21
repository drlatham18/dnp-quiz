if ('serviceWorker' in navigator && !globalThis.Capacitor?.isNativePlatform()) {
  const hadController=!!navigator.serviceWorker.controller;
  let reloading=false;
  navigator.serviceWorker.addEventListener('controllerchange',()=>{
    if(hadController&&!reloading){reloading=true;location.reload();}
  });
  navigator.serviceWorker.register('./sw.js').catch(() => {});
}
