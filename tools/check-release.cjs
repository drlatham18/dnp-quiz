const fs=require('node:fs'),assert=require('node:assert/strict'),gate=require('./release-gate.cjs');
global.window={};require('../library.js');require('../curriculum.js');
const qs=window.QUIZ_DATA.flatMap(t=>t.questions);assert.equal(qs.length,160);
for(const q of qs){assert.equal(q.reviewStatus,'source-checked');assert(q.sources.length);assert(q.rationale);}
for(const f of ['dist/index.html','dist/library.js','dist/sw.js','dist/assessment.html','dist/review.html','dist/expansion.json','dist/review-manifest.json'])assert(fs.existsSync(f),f);
for(const name of ['data','review-private','work','.git','.env'])assert(!fs.existsSync('dist/'+name),'Private or unreleased source must not be bundled: '+name);
assert.equal(fs.readFileSync('sw.js','utf8'),fs.readFileSync('dist/sw.js','utf8'));
const release=JSON.parse(fs.readFileSync('dist/release.json'));assert.equal(release.contentHash,gate.manifest().contentHash);assert.equal(JSON.parse(fs.readFileSync('dist/review-manifest.json')).contentHash,release.contentHash);
assert.equal(release.questions,240);assert.equal(release.existingQuestions,160);
assert.equal(release.testingDestination,'https://drlatham18.github.io/dnp-quiz/');
if(release.edition!=='testing-preview')gate.assertExternalRelease();
console.log(JSON.stringify({edition:release.edition,existingQuestions:160,draftQuestions:80,assessmentLessons:30,nurseApprovalsVerified:0,externalRelease:'blocked pending owner verification',technicalChecksPassed:true},null,2));
