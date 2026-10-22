// Disposable synthetic reviewer data only; no private approvals or real notes.
const fs=require('node:fs'),vm=require('node:vm'),assert=require('node:assert/strict');
class Node{constructor(tag='div',text=''){this.tag=tag;this.textContent=text;this.children=[];this.dataset={};this.value='';this.hidden=false;}append(...n){this.children.push(...n);}click(){this.onclick?.();}all(tag){return this.children.flatMap(n=>[...(n.tag===tag?[n]:[]),...n.all(tag)]);}}
const hash='a'.repeat(64),key='nursing-review-notes-'+hash;
async function boot(seed){const storage={[key]:JSON.stringify(seed)},nodes=new Map(),downloads=[];let writes=0;
const get=id=>{if(!nodes.has(id))nodes.set(id,new Node());return nodes.get(id);};
const data={'review-manifest.json':{contentHash:hash},'assessment/catalog.json':{lessons:[],tutorials:[{id:'intro',group:'Synthetic tutorial',paragraphs:[],questions:[]}]},'assessment/media-sources.json':{},'expansion.json':{packs:[]}};
const ctx={document:{getElementById:get,createElement:tag=>new Node(tag)},window:{},location:{hash:''},localStorage:{getItem:k=>storage[k]||null,setItem(k,v){writes++;storage[k]=v;},removeItem:k=>delete storage[k]},fetch:async url=>({ok:true,json:async()=>data[url]}),Blob:class{constructor(parts){downloads.push(JSON.parse(parts.join('')));}},URL:{createObjectURL:()=> 'blob:synthetic',revokeObjectURL(){}},setTimeout:()=>{},confirm:()=>false};
vm.runInNewContext(fs.readFileSync('review.js','utf8'),ctx);await new Promise(setImmediate);assert.equal(get('review-error').textContent,'','Review fixture unexpectedly failed');
const item=get('review-list').children[0],selects=item.all('select'),ta=item.all('textarea')[0];return{selects,ta,nodes,get,downloads,read:()=>JSON.parse(storage[key]),writes:()=>writes};}
(async()=>{
const old={reviewerReference:'SYNTHETIC',items:{intro:{decision:'recommended',checks:{accuracy:true,mediaFidelity:false,normalAbnormalDistinction:true,nursingImplications:false},notes:'Existing synthetic note',futureField:'retain'}}};
const u=await boot(old);assert.equal(u.writes(),0);assert.deepEqual(u.read(),old);assert.equal(u.selects.length,5);
const controls=u.selects.slice(1);for(const s of controls){assert.equal(s.value,'not-reviewed');assert.deepEqual(s.children.map(n=>n.textContent),['Not reviewed','Yes','Needs changes']);}
u.ta.value='Edited synthetic note';u.ta.oninput();assert.deepEqual(u.read().items.intro.checks,old.items.intro.checks);assert.equal(u.read().items.intro.responses,undefined);assert.equal(u.read().items.intro.futureField,'retain');
controls[0].value='yes';controls[0].onchange();controls[1].value='needs-changes';controls[1].onchange();const row=u.read().items.intro;assert.deepEqual(row.responses,{accuracy:'yes',mediaFidelity:'needs-changes'});assert.deepEqual(row.checks,old.items.intro.checks);assert.equal(row.decision,'recommended');
const r=await boot(u.read());assert.equal(r.selects[1].value,'yes');assert.equal(r.selects[2].value,'needs-changes');assert.equal(r.selects[3].value,'not-reviewed');
u.get('export-review').onclick();const exported=u.downloads[0];assert.equal(exported.schemaVersion,2);assert.deepEqual(exported.items.intro.responses,row.responses);assert.deepEqual(exported.items.intro.checks,old.items.intro.checks);assert.match(exported.notice,/cannot unlock release/);
console.log('Reviewer questions preserve legacy data, require explicit responses, retain unknown fields, persist and export schema2 without granting approval');
})().catch(e=>{console.error(e);process.exitCode=1});
