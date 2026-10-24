// Disposable synthetic reviewer data only; no private approvals or real notes.
const fs=require('node:fs'),vm=require('node:vm'),assert=require('node:assert/strict');
class Node{constructor(tag='div',text=''){this.tag=tag;this.textContent=text;this.children=[];this.dataset={};this.value='';this.hidden=false;}append(...n){this.children.push(...n);}setAttribute(k,v){this[k]=v;}click(){this.onclick?.();}all(tag){return this.children.flatMap(n=>[...(n.tag===tag?[n]:[]),...n.all(tag)]);}}
const hash='a'.repeat(64),key='nursing-review-notes-'+hash;
const lesson=JSON.parse(fs.readFileSync('assessment/catalog.json','utf8')).lessons.find(l=>l.id==='heart-s3');
async function boot(seed){const storage={[key]:JSON.stringify(seed)},nodes=new Map(),downloads=[];let writes=0;
const get=id=>{if(!nodes.has(id))nodes.set(id,new Node());return nodes.get(id);};
const data={'review-manifest.json':{contentHash:hash},'assessment/catalog.json':{lessons:[lesson],tutorials:[{id:'intro',group:'Synthetic tutorial',paragraphs:[],questions:[]}]},'assessment/media-sources.json':{},'expansion.json':{packs:[]}};
const ctx={document:{getElementById:get,createElement:tag=>new Node(tag)},window:{},location:{hash:''},localStorage:{getItem:k=>storage[k]||null,setItem(k,v){writes++;storage[k]=v;},removeItem:k=>delete storage[k]},fetch:async url=>({ok:true,json:async()=>data[url]}),Blob:class{constructor(parts){downloads.push(JSON.parse(parts.join('')));}},URL:{createObjectURL:()=> 'blob:synthetic',revokeObjectURL(){}},setTimeout:()=>{},confirm:()=>false};
vm.runInNewContext(fs.readFileSync('review.js','utf8'),ctx);await new Promise(setImmediate);assert.equal(get('review-error').textContent,'','Review fixture unexpectedly failed');
const item=get('review-list').children[0],selects=item.all('select'),ta=item.all('textarea')[0];return{selects,ta,nodes,get,downloads,read:()=>JSON.parse(storage[key]),writes:()=>writes};}
(async()=>{
const old={schemaVersion:1,contentHash:'b'.repeat(64),exportedAt:'legacy synthetic timestamp',reviewerReference:'SYNTHETIC',items:{intro:{decision:'recommended',checks:{accuracy:true,mediaFidelity:false,normalAbnormalDistinction:true,nursingImplications:false},notes:'Existing synthetic note',futureField:'retain'}}};
const u=await boot(old);assert.equal(u.writes(),0);assert.deepEqual(u.read(),old);assert.equal(u.selects.length,5);
const controls=u.selects.slice(1);for(const s of controls){assert.equal(s.value,'not-reviewed');assert.deepEqual(s.children.map(n=>n.textContent),['Not reviewed','Yes','Needs changes']);}
assert.equal(u.selects[0]['aria-label'],'Overall reviewer recommendation (not release approval)');for(const s of controls)assert(s['aria-label']?.endsWith('?'));
const card=u.get('review-list').children[1],sections=card.all('section');assert.deepEqual(sections.map(n=>n.id),lesson.teaching.map(t=>'review-'+t.id));for(let i=0;i<sections.length;i++){assert.deepEqual(sections[i].all('p').map(n=>n.textContent),lesson.teaching[i].paragraphs);}
assert.equal(card.all('a').filter(n=>n.href?.startsWith('#review-')).length,lesson.questions.reduce((n,q)=>n+q.teachingRefs.length,0));
for(const q of lesson.questions)assert(card.all('h4').some(n=>n.textContent.includes(q.stem)));
for(const turn of lesson.dialogue.segments)assert(card.all('p').some(n=>n.textContent===turn.text));
assert(card.children.findIndex(n=>n.tag==='label')>card.children.findIndex(n=>n.textContent==='Check each question against its teaching'));
u.ta.value='Edited synthetic note';u.ta.oninput();assert.deepEqual(u.read().items.intro.checks,old.items.intro.checks);assert.equal(u.read().items.intro.responses,undefined);assert.equal(u.read().items.intro.futureField,'retain');
controls[0].value='yes';controls[0].onchange();controls[1].value='needs-changes';controls[1].onchange();const row=u.read().items.intro;assert.deepEqual(row.responses,{accuracy:'yes',mediaFidelity:'needs-changes'});assert.deepEqual(row.checks,old.items.intro.checks);assert.equal(row.decision,'recommended');
const r=await boot(u.read());assert.equal(r.selects[1].value,'yes');assert.equal(r.selects[2].value,'needs-changes');assert.equal(r.selects[3].value,'not-reviewed');
u.get('export-review').onclick();const exported=u.downloads[0];assert.equal(exported.schemaVersion,2);assert.equal(exported.contentHash,hash);assert.notEqual(exported.exportedAt,old.exportedAt);assert.deepEqual(exported.items.intro.responses,row.responses);assert.deepEqual(exported.items.intro.checks,old.items.intro.checks);assert.match(exported.notice,/cannot unlock release/);
console.log('Reviewer questions preserve legacy data; teaching, dialogue and question maps precede prompts; reserved export metadata cannot be overwritten by legacy notes');
})().catch(e=>{console.error(e);process.exitCode=1});
