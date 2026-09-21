/* External distribution requires owner verification of three trained nurses on this exact version. */
const fs=require('node:fs'),path=require('node:path'),crypto=require('node:crypto');
const ROOT=path.resolve(__dirname,'..');
const CONTENT=['library.js','curriculum.js','stories.js','study-packs.js','expansion.js','assessment/catalog.json','assessment/media-sources.json','assessment.js','study-hub.js','app.js','assessment.css','index.html','assessment.html','review.html','review.js','study-state.js','register-sw.js','style.css','review-policy.json','tools/prepare-preview.cjs','tools/build.cjs','tools/release-gate.cjs'];
function manifest(root=ROOT){
 const files=CONTENT.slice();
 function walk(dir){for(const e of fs.readdirSync(path.join(root,dir),{withFileTypes:true})){const f=dir+'/'+e.name;if(e.isDirectory())walk(f);else files.push(f);}}
 walk('assessment/media');if(fs.existsSync(path.join(root,'expansion.json')))files.push('expansion.json');
 const entries=files.sort().map(file=>({file,sha256:crypto.createHash('sha256').update(fs.readFileSync(path.join(root,file))).digest('hex')}));
 return {schemaVersion:1,contentHash:crypto.createHash('sha256').update(JSON.stringify(entries)).digest('hex'),requiredTrainedNurses:3,ownerVerificationRequired:true,files:entries};
}
function validateApprovals(approval,hash){
 const errors=[];
 if(!approval||approval.contentHash!==hash)errors.push('Approvals must match the exact current content hash.');
 const owner=approval?.ownerVerification;
 if(owner?.verified!==true||owner?.contentHash!==hash||!owner?.evidenceReference||!Number.isFinite(Date.parse(owner?.verifiedAt)))errors.push('Owner verification of all three trained-nurse approvals is missing.');
 const reviews=approval?.nurses||[];
 const valid=reviews.filter(r=>r && typeof r.reviewerId==='string' && r.reviewerId.trim() && r.trainedNurse===true && r.decision==='approved' && r.contentHash===hash && r.evidenceReference && Number.isFinite(Date.parse(r.reviewedAt)) && ['accuracy','mediaFidelity','normalAbnormalDistinction','nursingImplications'].every(k=>r.checks?.[k]===true));
 if(new Set(valid.map(r=>r.reviewerId.trim().toLowerCase())).size<3)errors.push('Three distinct trained nurses must approve accuracy, media fidelity, distinctions and nursing implications.');
 if(reviews.some(r=>r.decision==='changes-requested'))errors.push('A reviewer has unresolved changes requested.');
 return errors;
}
function assertExternalRelease(root=ROOT){
 const current=manifest(root);let approvals;
 try{approvals=JSON.parse(fs.readFileSync(path.join(root,'review-private/approvals.json'),'utf8'));}catch(_){}
 const errors=validateApprovals(approvals,current.contentHash);
 if(errors.length)throw Error('RELEASE BLOCKED: '+errors.join(' ')+' GitHub testing preview remains allowed.');
 return current;
}
module.exports={manifest,validateApprovals,assertExternalRelease};
if(require.main===module){try{const m=assertExternalRelease();console.log('External release approval gate passed for '+m.contentHash);}catch(e){console.error(e.message);process.exitCode=1;}}
