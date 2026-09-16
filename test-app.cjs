const vm = require('node:vm');
const fs = require('node:fs');
const assert = require('node:assert/strict');
const nodes = new Map();
function node() {
  return {children:[], style:{}, dataset:{}, classList:{add(){},remove(){},toggle(){}},
    setAttribute(){}, appendChild(n){this.children.push(n);}, remove(){},
    insertAdjacentElement(_,n){nodes.set(n.id,n);}};
}
const document = {getElementById(id){if(!nodes.has(id)) nodes.set(id,node()); return nodes.get(id);}, createElement:node};
let saved = '{}', alerts = [];
const context = {document, window:{scrollTo(){}}, console,
  localStorage:{getItem(){return saved;},setItem(_,v){saved=v;}},alert(s){alerts.push(s);}};
vm.createContext(context);
for(const f of fs.readdirSync('data').filter(f=>f.endsWith('.js'))) vm.runInContext(fs.readFileSync('data/'+f,'utf8'),context);
vm.runInContext(fs.readFileSync('curriculum.js','utf8'),context);
vm.runInContext(fs.readFileSync('app.js','utf8'),context);
assert.equal(nodes.get('learning-track').value,'rn');
assert.equal(nodes.get('start-case-btn').hidden,true);
nodes.get('learning-track').onchange({target:{value:'np'}});
assert.equal(nodes.get('start-case-btn').hidden,true);
// Preserve regression coverage for the retained draft case engine.
context.window.NURSING_CURRICULUM.tracks.find(t=>t.id==='np').caseAccess=true;
nodes.get('learning-track').onchange({target:{value:'np'}});
assert.equal(nodes.get('start-case-btn').hidden,false);
nodes.get('select-none').onclick();
nodes.get('start-btn').onclick();
assert.equal(alerts.length,1);
nodes.get('select-all').onclick();
nodes.get('start-btn').onclick();
assert.equal(nodes.get('screen-quiz').hidden,false);
const cs=context.window.CASE_DATA[0];
saved=JSON.stringify({[cs.id+'-step1']:true});
nodes.get('home-btn').onclick();
assert.equal(nodes.get('review-missed-btn').hidden,false);
nodes.get('review-missed-btn').onclick();
const choices=nodes.get('missed-choices').children;
assert.equal(choices.length,1);
choices[0].onclick();
assert.equal(nodes.get('case-intro').textContent,cs.intro);
assert.equal(nodes.get('q-stem').textContent,cs.steps[0].stem);
nodes.get('retry-missed-btn').onclick();
assert.equal(nodes.get('q-stem').textContent,cs.steps[0].stem);
saved='{"removed-id":true}';
nodes.get('home-btn').onclick();
assert.equal(nodes.get('review-missed-btn').hidden,true);
console.log('Topic selection, missed-case review, case retry, and stale IDs passed');
// A community question uses the real quiz flow and source objects.
nodes.get('q-options').children=[];
context.window.startNursingQuestion({id:'community-test',topic:'Community learning',difficulty:'challenge',type:'mcq',stem:'A source-linked community study question for the UI flow.',options:['Correct','Incorrect','Also incorrect'],answer:[0],rationale:'The explanation appears after submitting the answer.',sources:[{title:'CDC source',url:'https://www.cdc.gov/infection-control/hcp/basics/standard-precautions.html'}]});
assert.equal(nodes.get('q-stem').textContent,'A source-linked community study question for the UI flow.');
assert(nodes.get('q-meta').textContent.includes('Challenge'));
nodes.get('q-options').children[0].onclick();
nodes.get('submit-btn').onclick();
assert.equal(nodes.get('feedback-sources').children.at(-1).href,'https://www.cdc.gov/infection-control/hcp/basics/standard-precautions.html');
assert.equal(nodes.get('feedback-rationale').textContent,'The explanation appears after submitting the answer.');
console.log('Daily community question, difficulty, answer flow, and external source feedback passed');
