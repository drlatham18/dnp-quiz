const assert=require('node:assert/strict'),fs=require('node:fs'); global.window={};
require('./library.js');require('./curriculum.js');
const slugs=new Set(window.QUIZ_DATA.map(t=>t.slug));
for(const t of window.NURSING_CURRICULUM.tracks){assert(t.topics.length);for(const s of t.topics)assert(slugs.has(s),t.id+': '+s); for(const id of t.sources)assert(window.NURSING_CURRICULUM.sources[id]);}
assert.equal(window.NURSING_CURRICULUM.tracks.find(t=>t.id==='rn').caseAccess,false);
assert.equal(window.NURSING_CURRICULUM.tracks.find(t=>t.id==='np').caseAccess,false);
assert(!window.NURSING_CURRICULUM.tracks.find(t=>t.id==='dnp').topics.includes('procedures'));
console.log('Track coverage, sources, and advanced-case separation passed');

const qs=window.QUIZ_DATA.flatMap(t=>t.questions);assert.equal(qs.length,160);assert.equal(window.CASE_DATA.length,0);
for(const q of qs){assert.equal(q.reviewStatus,'source-checked');assert(q.sources.length);for(const id of q.sources)assert(window.NURSING_CURRICULUM.sources[id],q.id+': '+id);assert(q.answer.length);for(const i of q.answer)assert(q.options[i]);}
assert(!fs.readFileSync('index.html','utf8').includes('src="data/'));
console.log('Public library: 160 source-linked questions; clinical drafts excluded');
