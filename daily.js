(function(){'use strict';const $=id=>document.getElementById(id),API='https://nursing-learning-companion.drlatham.chatgpt.site';let started=false;
function load(){if(started)return;started=true;fetch(API+'/api/daily').then(r=>{if(!r.ok)throw Object.assign(new Error('Daily service unavailable'),{status:r.status});return r.json();}).then(d=>{
 const q=d.question;$('daily-title').textContent=d.title;$('daily-stem').textContent=q.stem;
 const labels={foundation:'Foundation',core:'Applied',applied:'Applied',advanced:'Challenge',challenge:'Challenge'};
 $('daily-difficulty').textContent=labels[q.difficulty]||'Applied';$('daily-difficulty').title='Editorial estimate; not learner-calibrated';
 $('daily-credit').textContent=d.date+' (UTC) · '+(q.origin==='community'?'Contributed by '+q.author:'Editorial question')+' · Free today';
 $('daily-start').disabled=false;$('daily-start').onclick=()=>window.startNursingQuestion(q);
}).catch(e=>{$('daily-stem').textContent=e.status===401||e.status===403?'The optional daily-question service currently requires access that this preview does not provide.':'The optional daily-question service is unavailable. Topic practice still works; this does not mean your device is offline.';$('daily-credit').textContent='Use the local practice library instead. No sign-in is required for topic practice.';});}
const more=$('more-practice');if(more)more.addEventListener('toggle',()=>{if(more.open)load();});else load();})();
