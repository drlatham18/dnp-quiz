const fs=require('node:fs'),assert=require('node:assert/strict');global.window={};require('../library.js');require('../curriculum.js');
const qs=window.QUIZ_DATA.flatMap(t=>t.questions);
assert.equal(qs.length,64);for(const q of qs){assert.equal(q.reviewStatus,'source-checked');assert(q.sources.length);assert(q.rationale);}
for(const f of ['dist/index.html','dist/library.js','dist/sw.js','dist/privacy.html','dist/support.html'])assert(fs.existsSync(f),f);
assert(!fs.existsSync('dist/data'),'Draft clinical questions must not be bundled');
assert.equal(fs.readFileSync('sw.js','utf8'),fs.readFileSync('dist/sw.js','utf8'));
console.log(JSON.stringify({edition:'free-study',questions:qs.length,technicalChecksPassed:true,externalChecks:['Public shell identity','Public quiz and saved progress','Offline reload'],notClaimed:['Independent nursing educator certification','Complete nursing curriculum','Clinical or exam readiness','Native store approval']},null,2));
