const assert=require('node:assert/strict'),fs=require('node:fs'),vm=require('node:vm'),crypto=require('node:crypto');
const state=require('./study-state.js');
let h={version:2,items:{}},now=1000;state.record(h,'q',false,now);assert.equal(h.items.q.due,601000);assert.deepEqual(state.due(h,['q'],601000),['q']);
state.record(h,'q',true,now);assert.equal(h.items.q.due,now+86400000);state.record(h,'q',true,now);assert.equal(h.items.q.due,now+3*86400000);assert.equal(state.stats(h,['q','other']).seen,1);
for(const bad of ['null','[]','{"version":2,"items":null}','not json'])assert.deepEqual(state.read({getItem(){return bad;}}),{version:2,items:{}});
const ctx={window:{}};vm.createContext(ctx);for(const file of ['library.js','curriculum.js','study-packs.js','expansion.js'])vm.runInContext(fs.readFileSync(file,'utf8'),ctx);
const bank=ctx.window.QUIZ_DATA,qs=bank.flatMap(t=>t.questions),packs=ctx.window.NURSING_PACKS;
assert.equal(qs.length,240);assert.equal(new Set(qs.map(q=>q.id)).size,240);assert.equal(packs.length,18);
for(const p of packs){assert(bank.some(t=>t.slug===p.id));assert(p.objectives.length>=3);assert(p.lesson&&p.example&&p.pitfall);}
const expansion=JSON.parse(fs.readFileSync('expansion.json'));assert.equal(expansion.packs.length,4);
for(const p of expansion.packs){assert.equal(p.questions.length,20);for(const q of p.questions){assert.equal(q.reviewStatus,'draft: three-nurse review pending');assert.equal(q.distractorExplanations.length,q.options.length-1);assert(q.rationale);assert(q.source.startsWith('https://'));assert(q.answer.every(n=>n>=0&&n<q.options.length));assert.equal(JSON.stringify(qs.find(x=>x.id===q.id)),JSON.stringify(q));}}
const catalog=JSON.parse(fs.readFileSync('assessment/catalog.json')),media=JSON.parse(fs.readFileSync('assessment/media-sources.json'));
assert.equal(catalog.lessons.length,30);assert.equal(new Set(catalog.lessons.map(l=>l.id)).size,30);assert.equal(catalog.reviewedByNurses,0);
for(const l of catalog.lessons){assert.equal(l.status,'awaiting-three-nurse-review');assert.equal(l.questions.length,3);assert.notEqual(l.normal,l.abnormal);for(const id of [l.normal,l.abnormal,...Object.values(l.tones||{}).flatMap(t=>[t.normal,t.abnormal])])assert(media[id],l.id+': missing '+id);for(const q of l.questions){assert(q.options[q.answer]);assert(q.rationale);}}
for(const a of Object.values(media)){assert(a.source.startsWith('https://'));assert(a.license&&a.creator&&a.description&&a.transformations);assert.equal(a.reviewStatus,'pending');if(a.path){assert(a.path.startsWith('assessment/media/'));const bytes=fs.readFileSync(a.path);assert(bytes.length>100);assert.equal(crypto.createHash('sha256').update(bytes).digest('hex'),a.sha256);if(a.path.endsWith('.wav')){assert.equal(bytes.toString('ascii',0,4),'RIFF');assert.equal(bytes.toString('ascii',8,12),'WAVE');}}}
console.log('240 unique practice questions, 18 packs, spaced review, 30 paired lessons and media integrity passed');
