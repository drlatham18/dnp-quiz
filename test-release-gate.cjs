const assert=require('node:assert/strict'),fs=require('node:fs');
const {manifest,validateApprovals,assertExternalRelease}=require('./tools/release-gate.cjs');
const hash=manifest().contentHash;
for(const file of ['privacy.html','community-terms.html','daily.js','community.js'])assert(manifest().files.some(f=>f.file===file),'Review fingerprint must cover '+file);
// In-memory test fixtures only. These are NOT real reviews or release authorizations.
const a={contentHash:hash,ownerVerification:{verified:true,contentHash:hash,verifiedAt:'2026-09-21T00:00:00Z',evidenceReference:'TEST FIXTURE ONLY'},nurses:[1,2,3].map(n=>({reviewerId:'TEST-'+n,trainedNurse:true,decision:'approved',contentHash:hash,evidenceReference:'TEST FIXTURE ONLY',reviewedAt:'2026-09-21T00:00:00Z',checks:{accuracy:true,mediaFidelity:true,normalAbnormalDistinction:true,nursingImplications:true}}))};
assert.deepEqual(validateApprovals(a,hash),[]);
assert(validateApprovals(null,hash).length);
assert(validateApprovals({...a,ownerVerification:{verified:false}},hash).length);
assert(validateApprovals({...a,nurses:a.nurses.slice(0,2)},hash).length);
assert(validateApprovals({...a,nurses:[a.nurses[0],a.nurses[0],a.nurses[0]]},hash).length);
assert(validateApprovals({...a,nurses:a.nurses.map(n=>({...n,trainedNurse:false}))},hash).length);
assert(validateApprovals(a,'changed-content-hash').length);
assert(validateApprovals({...a,nurses:[...a.nurses,{decision:'changes-requested'}]},hash).length);
assert(validateApprovals({...a,nurses:a.nurses.map(n=>({...n,checks:{...n.checks,mediaFidelity:false}}))},hash).length);
assert.throws(()=>assertExternalRelease(),/RELEASE BLOCKED/);
const source=fs.readFileSync('tools/build.cjs','utf8');assert(source.indexOf('gate.assertExternalRelease()')<source.indexOf('fs.rmSync'));
assert(fs.readFileSync('.github/workflows/publish-android.yml','utf8').includes('node tools/release-gate.cjs'));
console.log('Missing, duplicate, untrained, partial, stale and unresolved approvals block external release; owner verification required');
