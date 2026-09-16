(function(){'use strict';const $=id=>document.getElementById(id),API='https://nursing-learning-companion.drlatham.chatgpt.site';
fetch(API+'/api/daily').then(r=>{if(!r.ok)throw Error();return r.json()}).then(d=>{
 const q=d.question;$('daily-title').textContent=d.title;$('daily-stem').textContent=q.stem;
 const labels={foundation:'Foundation',core:'Applied',applied:'Applied',advanced:'Challenge',challenge:'Challenge'};
 $('daily-difficulty').textContent=labels[q.difficulty]||'Applied';$('daily-difficulty').title='Editorial estimate; not learner-calibrated';
 $('daily-credit').textContent=d.date+' (UTC) · '+(q.origin==='community'?'Contributed by '+q.author:'Editorial question')+' · Free today';
 $('daily-start').disabled=false;$('daily-start').onclick=()=>window.startNursingQuestion(q);
}).catch(()=>{$('daily-stem').textContent='Connect to the internet to get today’s question. Your downloaded practice library still works.';$('daily-credit').textContent='Daily question unavailable';});})();
