const assert=require('node:assert/strict'),fs=require('node:fs'),vm=require('node:vm');
const source=fs.readFileSync('assessment.js','utf8'),original=JSON.parse(fs.readFileSync('assessment/catalog.json')),media=JSON.parse(fs.readFileSync('assessment/media-sources.json'));
class Element {
 constructor(tag='div'){this.tagName=tag;this.children=[];this.className='';this.value='';this._text='';this.hidden=false;this.classList={add:c=>this.className+=' '+c};}
 set textContent(v){this._text=v;} get textContent(){return this._text+this.children.map(c=>c.textContent).join(' ');}
 append(...nodes){nodes.forEach(n=>{n.parent=this;this.children.push(n);});} replaceChildren(...nodes){this.children=[];this._text='';this.append(...nodes);}
 remove(){this.parent.children=this.parent.children.filter(n=>n!==this);} setAttribute(){} scrollIntoView(){} focus(){}
 querySelectorAll(s){return this.children.flatMap(n=>[...(s==='button'?n.tagName==='button':n.className.split(' ').includes(s.slice(1)))?[n]:[],...n.querySelectorAll(s)]);}
}
async function boot(catalog=original,saved={},deny=false){
 const nodes=new Map(),events={},get=id=>{if(!nodes.has(id))nodes.set(id,new Element());return nodes.get(id);};
 const document={getElementById:get,createElement:t=>new Element(t),querySelector:s=>get(s),querySelectorAll:()=>[]};
 const context={document,location:{hash:'#heart-s3'},window:{addEventListener:(n,f)=>events[n]=f},localStorage:{getItem:k=>{if(deny)throw Error('blocked');return saved[k]||null;},setItem:(k,v)=>{if(deny)throw Error('blocked');saved[k]=v;}},fetch:async url=>({ok:true,json:async()=>url.includes('catalog')?catalog:media})};
 vm.runInNewContext(source,context);await new Promise(setImmediate);
 const panel=get('lab-detail');assert(!get('lab-error').textContent,'Unexpected load failure');
 return {panel,saved,go(id){context.location.hash='#'+id;events.hashchange();},buttons:()=>panel.querySelectorAll('button'),click(text){const b=panel.querySelectorAll('button').find(b=>b.textContent===text);assert(b,'Missing button: '+text);b.onclick();},options:()=>panel.querySelectorAll('.opt')};
}
async function answer(u,q,choice=q.answer){
 assert(!u.panel.querySelectorAll('.lesson-feedback').length,'Feedback must remain hidden before submission');
 const b=u.options().find(b=>b.textContent===q.options[choice]);assert(b);b.onclick();b.onclick();
 assert(u.options().every(b=>b.disabled),'Answer must lock after submission');
 const feedback=u.panel.querySelectorAll('.lesson-feedback')[0].textContent;
 assert(feedback.includes(q.rationale));if(choice!==q.answer)assert(feedback.includes(q.options[q.answer]));
 u.click(u.buttons().some(b=>b.textContent==='Finish practice')?'Finish practice':'Next question');
}
(async()=>{
 assert.equal(original.tutorials.length,5);
 assert.deepEqual(new Set(original.tutorials.map(t=>t.group)),new Set(original.lessons.map(l=>l.group)));
 assert.equal(new Set(original.tutorials.map(t=>t.id)).size,5);
 const stems=new Set();for(const l of original.lessons){assert.equal(l.revision,2);for(const q of l.questions){assert.equal(q.options.length,4);assert.equal(new Set(q.options).size,4);assert(Number.isInteger(q.answer)&&q.answer>=0&&q.answer<4);assert(!stems.has(q.stem));stems.add(q.stem);}}
 const u=await boot();assert(u.panel.textContent.includes('Required first lesson'));assert.equal(u.panel.querySelectorAll('.sample').length,0);
 const heart=original.tutorials.find(t=>t.group==='Heart sounds');
 for(const q of heart.questions)await answer(u,q,(q.answer+1)%q.options.length);
 assert(u.panel.textContent.includes('0 / 3 correct'));assert(!u.saved['nursing-lab-tutorials-v1']);
 u.go('heart-s4');assert(u.panel.textContent.includes('Required first lesson'));
 for(const t of original.tutorials){u.go(t.id);for(const q of t.questions)await answer(u,q);assert(u.panel.textContent.includes('3 / 3 correct'));}
 // Every displayed choice is selected once across four sessions per lesson. Correct-index
 // scoring and feedback must survive randomized display order and repeated click callbacks.
 for(const l of original.lessons)for(let choice=0;choice<4;choice++){
  u.go(l.id);assert.equal(u.panel.querySelectorAll('.sample').length,2);let expected=0;
  for(const q of l.questions){if(choice===q.answer)expected++;await answer(u,q,choice);}
  assert(u.panel.textContent.includes(expected+' / 3 correct in this draft exercise.'));
 }
 const reload=await boot(original,u.saved);assert.equal(reload.panel.querySelectorAll('.sample').length,2);
 const changed=structuredClone(original);changed.tutorials[0].paragraphs[0]+=' Updated instruction.';
 const stale=await boot(changed,u.saved);assert(stale.panel.textContent.includes('Required first lesson'));
 const corrupt=await boot(original,{'nursing-lab-tutorials-v1':'null'});assert(corrupt.panel.textContent.includes('Required first lesson'));
 const blocked=await boot(original,{},true);for(const q of heart.questions)await answer(blocked,q);blocked.click('Continue to comparison');assert.equal(blocked.panel.querySelectorAll('.sample').length,2);
 blocked.go('lung-wheeze');assert(blocked.panel.textContent.includes('Required first lesson'));
 console.log('Five category gates, direct links, retries, persistence, changed-content recheck, blocked storage and all 360 clinical answer selections passed');
})().catch(e=>{console.error(e);process.exitCode=1;});
