const fs=require('node:fs'), path=require('node:path'), crypto=require('node:crypto');
const root=path.resolve(__dirname,'..'), out=path.join(root,'dist');
fs.rmSync(out,{recursive:true,force:true}); fs.mkdirSync(out,{recursive:true});
for(const name of ['index.html','stories.js','app.js','style.css','curriculum.js','register-sw.js','library.js','manifest.webmanifest','privacy.html','support.html','icons','daily.js','community.html','community.js','community-import.js','community.css','community-terms.html','archive.html','question-template.csv']) fs.cpSync(path.join(root,name),path.join(out,name),{recursive:true});
const files=[];
function walk(dir){for(const e of fs.readdirSync(dir,{withFileTypes:true})){const f=path.join(dir,e.name);if(e.isDirectory())walk(f);else files.push('./'+path.relative(out,f).split(path.sep).join('/'));}}
walk(out);files.sort(); const hash=crypto.createHash('sha256');for(const f of files) hash.update(fs.readFileSync(path.join(out,f)));
const version='nursing-'+hash.digest('hex').slice(0,12);
fs.writeFileSync(path.join(out,'sw.js'),`const VERSION=${JSON.stringify(version)},FILES=${JSON.stringify(files)};
self.addEventListener('install',e=>e.waitUntil(caches.open(VERSION).then(c=>c.addAll(FILES)).then(()=>self.skipWaiting())));
self.addEventListener('activate',e=>e.waitUntil(caches.keys().then(keys=>Promise.all(keys.filter(k=>k.startsWith('nursing-')&&k!==VERSION).map(k=>caches.delete(k)))).then(()=>self.clients.claim())));
self.addEventListener('fetch',e=>{const u=new URL(e.request.url);if(e.request.method!=='GET'||u.origin!==location.origin)return;
if(e.request.mode==='navigate'){e.respondWith(fetch(e.request).catch(()=>caches.match(new URL('./index.html',self.registration.scope))));return;}
e.respondWith(caches.match(e.request).then(hit=>hit||fetch(e.request)));});`);
fs.copyFileSync(path.join(out,'sw.js'), path.join(root,'sw.js'));
fs.writeFileSync(path.join(root,'release.json'),JSON.stringify({version,edition:'free-study',questions:(()=>{global.window={};require('../library.js');return window.QUIZ_DATA.reduce((n,t)=>n+t.questions.length,0)})()},null,2));
fs.copyFileSync(path.join(root,'release.json'),path.join(out,'release.json'));
console.log('Built '+version+' with '+files.length+' offline assets');
