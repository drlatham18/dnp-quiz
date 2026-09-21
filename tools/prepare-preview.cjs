const fs=require('node:fs'),path=require('node:path');
const root=path.resolve(__dirname,'..'),data=JSON.parse(fs.readFileSync(path.join(root,'expansion.json'),'utf8'));
const source=`/* Draft topic packs for the authorized GitHub testing preview. Generated from expansion.json. */
(function(){ const packs=${JSON.stringify(data.packs)};
packs.forEach(p=>{window.QUIZ_DATA.push({topic:p.title+" · draft",slug:p.id,questions:p.questions});p.tracks.forEach(id=>window.NURSING_CURRICULUM.tracks.find(t=>t.id===id).topics.push(p.id));window.NURSING_PACKS.push({id:p.id,title:p.title+" · draft",objectives:["Apply the concept in a complete scenario","Explain why alternative choices do not fit","Connect the decision to its primary source"],lesson:"Work through twenty original situations in this topic. These questions are drafts prepared for independent nurse review.",example:p.questions[0].stem+" "+p.questions[0].rationale,pitfall:p.questions[0].distractorExplanations[0],reviewStatus:p.status,revision:1});});})();
`;
fs.writeFileSync(path.join(root,'expansion.js'),source);
