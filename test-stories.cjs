const vm=require('node:vm'),fs=require('node:fs'),assert=require('node:assert/strict');
const nodes=new Map(),storage=new Map();
function element(){let html='';return {children:[],style:{},dataset:{},classList:{add(){},remove(){},toggle(){}},setAttribute(){},appendChild(n){this.children.push(n)},remove(){},insertAdjacentElement(_,n){nodes.set(n.id,n)},get innerHTML(){return this.textContent === undefined ? html : String(this.textContent).replaceAll('&','&amp;').replaceAll('<','&lt;').replaceAll('>','&gt;')},set innerHTML(v){html=v;this.children=[]}}}
const context={document:{getElementById(id){if(!nodes.has(id))nodes.set(id,element());return nodes.get(id)},createElement:element},window:{scrollTo(){}},localStorage:{getItem:k=>storage.get(k)||null,setItem:(k,v)=>storage.set(k,v)},console};
vm.createContext(context);for(const name of ['library.js','curriculum.js','stories.js','app.js'])vm.runInContext(fs.readFileSync(name,'utf8'),context);
const stories=context.window.NURSING_STORIES;
assert.equal(new Set(stories.map(q=>q.id)).size,3);
const baseCount=context.window.QUIZ_DATA.flatMap(t=>t.questions).length;
assert.equal(baseCount,160,'Narrative variants must not inflate the core bank count');
for(const style of ['routine','silly','outrageous']){
 nodes.get('story-style').onchange({target:{value:style}});
 for(let i=0;i<stories.length;i++){
  const q=stories[i];assert.deepEqual(Object.keys(q.stories[style]).sort(),['text','title'],'Variant must not override the answer or rationale');
  nodes.get('story-rounds').children[i].onclick();
  assert(nodes.get('q-stem').textContent.includes(q.stories[style].text));
  assert(nodes.get('q-meta').textContent.includes(style));
  assert.equal(nodes.get('q-objective').textContent,q.objective);
  const answer=nodes.get('q-options').children.find(n=>n.innerHTML.includes(q.options[q.answer[0]]));assert(answer);answer.onclick();nodes.get('submit-btn').onclick();
  assert.equal(nodes.get('feedback-verdict').textContent,'✅ Correct');
  assert.equal(nodes.get('feedback-rationale').textContent,q.rationale);
  assert.equal(nodes.get('feedback-takeaway').textContent,q.takeaway);
  nodes.get('next-btn').onclick();assert.equal(nodes.get('result-score').textContent,'100%');nodes.get('home-btn').onclick();
 }
}
// Missed concept survives style changes and remains reviewable; retry cannot create an empty quiz.
const q=stories[0];nodes.get('story-rounds').children[0].onclick();
nodes.get('q-options').children.find(n=>n.innerHTML.includes(q.options[1])).onclick();nodes.get('submit-btn').onclick();nodes.get('next-btn').onclick();
assert(JSON.parse(storage.get('dnpquiz-missed-v1'))[q.id]);
nodes.get('retry-missed-btn').onclick();assert(nodes.get('q-stem').textContent.includes(q.stories.outrageous.text));
nodes.get('quit-btn').onclick();nodes.get('story-style').onchange({target:{value:'routine'}});nodes.get('review-missed-btn').onclick();nodes.get('missed-choices').children[0].onclick();
assert(nodes.get('q-stem').textContent.includes(q.stories.routine.text));
nodes.get('q-options').children.find(n=>n.innerHTML.includes(q.options[0])).onclick();nodes.get('submit-btn').onclick();assert(!JSON.parse(storage.get('dnpquiz-missed-v1'))[q.id]);
assert.equal(nodes.get('story-style').value,'routine');
console.log('Nine narratives: shuffled-answer scoring, shared reasoning, same-ID missed review, retry and 160-question count passed.');
