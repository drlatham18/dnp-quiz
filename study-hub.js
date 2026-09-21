(function(){'use strict';
  var $=function(id){return document.getElementById(id);}, engine=window.NursingStudy, state=window.NursingStudyState;
  function el(tag,text,className){var n=document.createElement(tag);if(text)n.textContent=text;if(className)n.className=className;return n;}
  function button(text,action,cls){var b=el('button',text,cls||'big-btn secondary');b.onclick=action;return b;}
  function entries(id){return engine.entries().filter(function(e){return e.slug===id;});}
  function openPack(pack){
    var panel=$('pack-detail');panel.replaceChildren();panel.hidden=false;
    panel.append(el('p','Topic pack · Read, then practice','q-meta'),el('h2',pack.title));panel.querySelector('h2').id='pack-title';
    panel.append(el('p','Teaching summary awaiting nurse review. Existing practice questions retain their source links.','hint'));
    var list=el('ul');pack.objectives.forEach(function(o){list.append(el('li',o));});panel.append(list,el('h3','The idea'),el('p',pack.lesson),el('h3','Work through an example'),el('p',pack.example),el('h3','A common mistake'),el('p',pack.pitfall));
    var sourceIds=new Set();entries(pack.id).forEach(function(e){e.q.sources.forEach(function(s){if(typeof s==='string')sourceIds.add(s);});});
    var sources=el('div',null,'row-links');sourceIds.forEach(function(id){var s=window.NURSING_CURRICULUM.sources[id];if(!s)return;var a=el('a',s.title);a.href=s.url;a.target='_blank';a.rel='noopener noreferrer';sources.append(a);});panel.append(el('h3','Read the sources'),sources);
    var qs=entries(pack.id), h=state.read(localStorage), due=state.due(h,qs.map(function(e){return e.q.id;}),Date.now());
    panel.append(button('Practice '+Math.min(10,qs.length)+' questions',function(){engine.start(qs);},'big-btn'));
    panel.append(button('Practice all '+qs.length+' questions',function(){engine.start(qs,{limit:0});}));
    if(due.length)panel.append(button('Review '+due.length+' due questions',function(){engine.start(qs.filter(function(e){return due.includes(e.q.id);}),{limit:0,fresh:false});}));
    panel.append(button('Back to topic packs',function(){panel.hidden=true;$('pack-library').scrollIntoView({block:'start'});}));
    panel.scrollIntoView({block:'start'});panel.focus({preventScroll:true});
  }
  window.renderNursingHub=function(){
    var h=state.read(localStorage),qs=engine.entries(),ids=qs.map(function(e){return e.q.id;}), stats=state.stats(h,ids), due=state.due(h,ids,Date.now());
    $('study-status').textContent=stats.seen+' of '+stats.total+' questions explored · '+due.length+' due for another look. Progress is saved on this device.';
    $('resume-study').hidden=!engine.saved();$('due-study').hidden=!due.length;$('due-study').textContent='Review '+due.length+' due questions';
    $('due-study').onclick=function(){engine.start(qs.filter(function(e){return due.includes(e.q.id);}),{limit:10,fresh:false});};
    var term=$('pack-search').value.toLowerCase().trim(),slugs=new Set(qs.map(function(e){return e.slug;})), packs=window.NURSING_PACKS.filter(function(p){return slugs.has(p.id)&&(!term||(p.title+' '+p.objectives.join(' ')+' '+p.lesson).toLowerCase().includes(term));});
    $('pack-list').replaceChildren();$('pack-count').textContent=packs.length+' topic packs in this learning path';
    packs.forEach(function(pack){var pqs=entries(pack.id),s=state.stats(h,pqs.map(function(e){return e.q.id;})),card=el('article',null,'pack-card');
      card.append(el('h3',pack.title),el('p',pack.objectives[0]+'.','hint'),el('p',pqs.length+' questions · '+s.seen+' explored · '+s.correct+' most recently correct','hint'));
      var bar=el('progress');bar.max=pqs.length;bar.value=s.seen;bar.setAttribute('aria-label',pack.title+' questions explored');card.append(bar,button('Open pack →',function(){openPack(pack);},'link-btn'));$('pack-list').append(card);
    });
    if(!packs.length)$('pack-list').append(el('p','No packs match. Try a broader topic.','hint'));
  };
  $('quick-start').onclick=function(){engine.start(engine.entries());};$('resume-study').onclick=engine.resume;$('pack-search').oninput=window.renderNursingHub;
  window.renderNursingHub();
})();
