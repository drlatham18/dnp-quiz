const vm = require('node:vm');
const fs = require('node:fs');
const assert = require('node:assert/strict');
const nodes = new Map();
function node() {
  return {children:[], style:{}, dataset:{}, classList:{add(){},remove(){},toggle(){}},
    appendChild(n){this.children.push(n);}, remove(){},
    insertAdjacentElement(_,n){nodes.set(n.id,n);}};
}
const document = {getElementById(id){if(!nodes.has(id)) nodes.set(id,node()); return nodes.get(id);}, createElement:node};
let saved = '{}', alerts = [];
const context = {document, window:{scrollTo(){}}, console,
  localStorage:{getItem(){return saved;},setItem(_,v){saved=v;}},alert(s){alerts.push(s);}};
vm.createContext(context);
for(const f of fs.readdirSync('data').filter(f=>f.endsWith('.js'))) vm.runInContext(fs.readFileSync('data/'+f,'utf8'),context);
vm.runInContext(fs.readFileSync('app.js','utf8'),context);
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
