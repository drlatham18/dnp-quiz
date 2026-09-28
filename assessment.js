(function(){'use strict';
  var $=function(id){return document.getElementById(id);}, catalog, media, current;
  function el(tag,text,cls){var n=document.createElement(tag);if(text)n.textContent=text;if(cls)n.className=cls;return n;}
  function link(text,url){var a=el('a',text);a.href=url;a.target='_blank';a.rel='noopener noreferrer';return a;}
  function btn(text,action,cls){var b=el('button',text,cls||'big-btn secondary');b.onclick=action;return b;}
  function history(){try{return JSON.parse(localStorage.getItem('nursing-lab-progress-v1')||'{}');}catch(_){return {};}}
  var tutorialMemory={};
  function tutorialFor(group){return catalog.tutorials.find(function(t){return t.group===group;});}
  function tutorialPassed(t){
    var saved=tutorialMemory[t.id];
    try{saved=JSON.parse(localStorage.getItem('nursing-lab-tutorials-v1')||'{}')[t.id]||saved;}catch(_){}
    return !!saved&&saved.content===JSON.stringify(t);
  }
  function saveTutorial(t){
    var record={content:JSON.stringify(t),completedAt:new Date().toISOString()};tutorialMemory[t.id]=record;
    try{var saved=JSON.parse(localStorage.getItem('nursing-lab-tutorials-v1')||'{}');if(!saved||typeof saved!=='object'||Array.isArray(saved))saved={};saved[t.id]=record;localStorage.setItem('nursing-lab-tutorials-v1',JSON.stringify(saved));}catch(_){}
  }
  function tutorial(t,panel,continueId){
    panel.append(el('p',t.group+' · Required first lesson','q-meta'),el('h2',t.title));
    t.paragraphs.forEach(function(p){panel.append(el('p',p));});
    panel.append(el('p','Answer all 3 questions correctly to unlock this category. Completion is saved in this browser; changed tutorial content requires a new check.','hint'));
    practice(t,panel,function(right,block){
      if(right!==t.questions.length){block.append(el('h3','Review the limits and try again'),el('p',right+' / '+t.questions.length+' correct. This category remains locked until all answers are correct.'),btn('Retry understanding check',function(){block.remove();tutorialQuiz();}));return;}
      saveTutorial(t);block.append(el('h3','Understanding check complete'),el('p','3 / 3 correct. You may now study this category. This is not clinical certification.'),btn('Continue to comparison',function(){if(location.hash==='#'+continueId)open(continueId);else location.hash=continueId;}));
    });
    function tutorialQuiz(){panel.replaceChildren();panel.append(btn('← All comparisons',function(){location.hash='';},'link-btn'));tutorial(t,panel,continueId);}
  }
  function sample(id,label){
    var asset=media[id],card=el('section',null,'sample');card.append(el('h3',label));
    if(!asset){card.append(el('p','This source is unavailable. This lesson cannot be released.','hint'));return card;}
    card.append(el('span',asset.origin,'badge'));
    if(asset.kind==='audio'){
      var player=el('audio');player.controls=true;player.preload='metadata';player.src=asset.path;player.setAttribute('aria-label',label+' recording');
      player.onplay=function(){document.querySelectorAll('audio').forEach(function(other){if(other!==player)other.pause();});};
      player.onerror=function(){card.append(el('p','Audio could not load. Check your connection or use the source link.','hint'));};
      card.append(player,el('p','Listen at a comfortable volume. Playback is at the recorded speed.','hint'));
      var loop=btn('Loop this recording',function(){player.loop=!player.loop;loop.textContent=player.loop?'Loop on — turn off':'Loop this recording';loop.setAttribute('aria-pressed',String(player.loop));},'link-btn');loop.setAttribute('aria-pressed','false');card.append(loop);
    } else if(asset.kind==='image'){
      var img=el('img');img.src=asset.path;img.alt=asset.description;img.loading='lazy';card.append(img,link('Open full-size image',asset.path));
    } else if(asset.kind==='report'){
      var table=el('table',null,'report-table');table.append(el('caption','Synthetic teaching report'));
      asset.rows.forEach(function(row){var tr=el('tr'),th=el('th',row[0]);th.scope='row';tr.append(th,el('td',row[1]));table.append(tr);});card.append(table);
    }
    card.append(el('p',asset.description,'hint'));
    var provenance=el('details');provenance.append(el('summary','Source, rights and processing'),el('p',asset.creator),el('p',asset.license),el('p',asset.transformations),link('View source',asset.source));if(asset.licenseUrl)provenance.append(el('p'),link('License terms',asset.licenseUrl));card.append(provenance);return card;
  }
  function practice(lesson,host,onComplete){
    var block=el('section',null,'practice-block'),index=0,right=0;
    function render(){block.replaceChildren();
      if(index>=lesson.questions.length){if(onComplete){onComplete(right,block);return;}block.append(el('h3','Comparison practice complete'),el('p',right+' / '+lesson.questions.length+' correct in this draft exercise. This is not a competency assessment.'));
        try{var h=history();h[lesson.id]={completedAt:new Date().toISOString(),correct:right,total:lesson.questions.length};localStorage.setItem('nursing-lab-progress-v1',JSON.stringify(h));}catch(_){}
        var group=catalog.lessons.filter(function(l){return l.group===lesson.group;}),at=group.findIndex(function(l){return l.id===lesson.id;}),next=group[(at+1)%group.length];
        block.append(btn('Next comparison: '+next.title,function(){location.hash=next.id;},'big-btn'));return;}
      var q=lesson.questions[index],options=q.options.map(function(text,i){return {text:text,index:i};}).sort(function(){return Math.random()-.5;});
      block.append(el('p','Practice '+(index+1)+' of '+lesson.questions.length,'q-meta'),el('h3',q.stem));var answered=false;
      options.forEach(function(o){var b=btn(o.text,function(){if(answered)return;answered=true;var correct=o.index===q.answer;if(correct)right++;
        block.querySelectorAll('button').forEach(function(x){x.disabled=true;});b.classList.add(correct?'correct':'wrong');
        var feedback=el('div',null,'lesson-feedback');feedback.setAttribute('role','status');feedback.append(el('p',correct?'Correct.':'Review this. Best answer: '+q.options[q.answer]),el('p',q.rationale));
        block.append(feedback,btn(index+1===lesson.questions.length?'Finish practice':'Next question',function(){index++;render();var heading=block.querySelector('h3');heading.tabIndex=-1;heading.focus();},'big-btn'));
      },'opt');block.append(b);});
    }render();host.append(block);
  }
  function open(id){
    var intro=catalog.tutorials.find(function(t){return t.id===id;}),lesson=catalog.lessons.find(function(l){return l.id===id;});if(!lesson&&!intro)return;current=id;
    var panel=$('lab-detail');panel.replaceChildren();panel.hidden=false;$('lab-list').hidden=true;document.querySelector('.lab-toolbar').hidden=true;
    panel.append(btn('← All comparisons',function(){location.hash='';},'link-btn'));
    var required=intro||tutorialFor(lesson.group);
    if(intro||!tutorialPassed(required)){
      tutorial(required,panel,lesson?lesson.id:catalog.lessons.find(function(l){return l.group===required.group;}).id);
      panel.scrollIntoView({block:'start'});panel.focus({preventScroll:true});return;
    }
    panel.append(el('p',lesson.group+' · Draft comparison','q-meta'),el('h2',lesson.title),el('p','0 / 3 nurse approvals verified · Testing only','badge'));
    panel.append(btn('Review category introduction',function(){location.hash=required.id;},'link-btn'));
    var compare=el('div',null,'compare-grid');function pairs(tone){compare.replaceChildren();var pair=lesson.tones&&lesson.tones[tone]||lesson;compare.append(sample(pair.normal,'Normal / expected reference'),sample(pair.abnormal,'Changed / abnormal example'));}
    if(lesson.tones){var label=el('label','Illustration tone'),select=el('select');['light','medium','deep'].forEach(function(t){var o=el('option',t[0].toUpperCase()+t.slice(1));o.value=t;select.append(o);});select.value='medium';select.onchange=function(){pairs(select.value);};label.append(select);panel.append(label);}
    pairs('medium');panel.append(compare);
    var details=el('details');details.open=true;details.append(el('summary','What to notice and why it matters'),el('h3','Notice the difference'),el('p',lesson.notice),el('p',lesson.difference,'learning-note'),el('h3','Context and limits'),el('p',lesson.context),el('h3','Connect to nursing assessment'),el('p',lesson.nursingAction));panel.append(details);
    var refs=el('div',null,'row-links');lesson.sources.forEach(function(s){refs.append(link(s.title,s.url));});panel.append(refs);
    practice(lesson,panel);panel.append(btn('Back to comparisons',function(){location.hash='';}),link('Review this lesson','review.html#'+lesson.id));
    panel.scrollIntoView({block:'start'});panel.focus({preventScroll:true});
  }
  function render(){
    var query=$('lab-search').value.trim().toLowerCase(),group=$('lab-group').value,type=$('lab-type').value,h=history();
    var list=catalog.lessons.filter(function(l){return (!group||l.group===group)&&(!type||media[l.normal]&&media[l.normal].kind===type)&&(!query||(l.title+' '+l.group+' '+l.notice+' '+l.difference).toLowerCase().includes(query));});
    $('lab-list').replaceChildren();$('lab-count').textContent=list.length+' comparison lessons · all awaiting nurse review';
    catalog.tutorials.filter(function(t){return list.some(function(l){return l.group===t.group;});}).forEach(function(t){var tile=el('article',null,'card tutorial-tile');tile.append(el('p',t.group+' · First lesson','q-meta'),el('h2',t.title),el('p',tutorialPassed(t)?'Understanding check complete in this browser.':'Required before opening comparisons in this category.','hint'),btn(tutorialPassed(t)?'Review introduction':'Start introduction',function(){location.hash=t.id;},'link-btn'));$('lab-list').append(tile);});
    list.forEach(function(l){var kind=media[l.normal]&&media[l.normal].kind,tile=el('article',null,'card lab-tile');tile.append(el('span',kind==='audio'?'♫':kind==='report'?'≡':'◈','media-mark'),el('p',l.group,'q-meta'),el('h2',l.title),el('p',kind==='audio'?'Listen to a paired reference and changed sound.':kind==='report'?'Compare values, units, context and trends.':'Explore the paired images and their context.','hint'),el('span',h[l.id]?'Practiced · review pending':'Draft · review pending','badge'),btn('Open comparison →',function(){if(location.hash==='#'+l.id)open(l.id);else location.hash=l.id;},'link-btn'));$('lab-list').append(tile);});
    if(!list.length)$('lab-list').append(el('p','No comparisons match. Try another term or collection.','card'));
  }
  Promise.all([fetch('assessment/catalog.json').then(function(r){if(!r.ok)throw Error();return r.json();}),fetch('assessment/media-sources.json').then(function(r){if(!r.ok)throw Error();return r.json();})]).then(function(data){catalog=data[0];media=data[1];new Set(catalog.lessons.map(function(l){return l.group;})).forEach(function(g){var o=el('option',g);o.value=g;$('lab-group').append(o);});$('lab-search').oninput=render;$('lab-group').onchange=render;$('lab-type').onchange=render;render();if(location.hash)open(decodeURIComponent(location.hash.slice(1)));window.addEventListener('hashchange',function(){if(location.hash)open(decodeURIComponent(location.hash.slice(1)));else{$('lab-detail').hidden=true;$('lab-list').hidden=false;document.querySelector('.lab-toolbar').hidden=false;document.querySelector('.lab-toolbar').scrollIntoView({block:'start'});}render();});}).catch(function(){$('lab-error').hidden=false;$('lab-error').textContent='The lesson library could not load. Please reconnect and reload; no assessment result is available.';$('lab-count').textContent='Library unavailable';});
})();
