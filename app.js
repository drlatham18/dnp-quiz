/* Nursing Learning Companion — plain JS, no dependencies. */
(function () {
  "use strict";

  var BANK = window.QUIZ_DATA || [];
  var CASES = window.CASE_DATA || [];
  var STORIES = window.NURSING_STORIES || [];
  var storyStyle = 'routine';
  try { storyStyle = localStorage.getItem('nursing-story-style-v1') || 'routine'; } catch (e) {}
  if (['routine','silly','outrageous'].indexOf(storyStyle) === -1) storyStyle = 'routine';
  var CURRICULUM = window.NURSING_CURRICULUM;
  var TRACKS = CURRICULUM.tracks;
  var trackId = 'rn';
  try { trackId = localStorage.getItem('nursing-track-v1') || 'rn'; } catch (e) {}
  if (!TRACKS.some(function(t) { return t.id === trackId; })) trackId = 'rn';
  function currentTrack() { return TRACKS.find(function(t) { return t.id === trackId; }); }
  function activeTopics() { return BANK.filter(function(t) { return currentTrack().topics.indexOf(t.slug) !== -1; }); }
  function activeCases() { return currentTrack().caseAccess ? CASES : []; }
  var LS_KEY = "dnpquiz-missed-v1";

  var $ = function (id) { return document.getElementById(id); };

  // ---------- state ----------
  var settings = { length: "10", mode: "practice" };
  var selectedTopics = {};   // slug -> true
  BANK.forEach(function (t) { selectedTopics[t.slug] = true; });
  var searchTerm = "";
  var quiz = null;           // active quiz state

  // ---------- helpers ----------
  function allQuestions() {
    var out = [];
    activeTopics().forEach(function (t) {
      t.questions.forEach(function (q) {
        out.push({ q: q, topic: t.topic, slug: t.slug });
      });
    });
    return out;
  }

  function shuffle(arr) {
    var a = arr.slice();
    for (var i = a.length - 1; i > 0; i--) {
      var j = Math.floor(Math.random() * (i + 1));
      var tmp = a[i]; a[i] = a[j]; a[j] = tmp;
    }
    return a;
  }

  function storyEntries() { return STORIES.map(function(q) { return {q:q,topic:q.topic,slug:'story-rounds'}; }); }
  function reviewQuestions() { return allQuestions().concat(storyEntries()); }

  function sameSet(a, b) {
    if (a.length !== b.length) return false;
    var s = {};
    a.forEach(function (x) { s[x] = true; });
    return b.every(function (x) { return s[x]; });
  }

  function getMissed() {
    try { return JSON.parse(localStorage.getItem(LS_KEY)) || {}; }
    catch (e) { return {}; }
  }
  function saveMissed(m) {
    try { localStorage.setItem(LS_KEY, JSON.stringify(m)); } catch (e) {}
  }

  function matchesSearch(entry, term) {
    if (!term) return true;
    var hay = (entry.topic + " " + entry.q.stem + " " + entry.q.rationale + " " +
      entry.q.options.join(" ")).toLowerCase();
    return term.toLowerCase().split(/\s+/).every(function (w) {
      return hay.indexOf(w) !== -1;
    });
  }

  // ---------- home screen ----------
  function renderTopics() {
    var list = $("topic-list");
    list.innerHTML = "";
    activeTopics().forEach(function (t) {
      var n = searchTerm
        ? t.questions.filter(function (q) {
            return matchesSearch({ q: q, topic: t.topic }, searchTerm);
          }).length
        : t.questions.length;
      var btn = document.createElement("button");
      btn.setAttribute("aria-pressed", String(!!selectedTopics[t.slug]));
      btn.className = "chip" + (selectedTopics[t.slug] ? " on" : "");
      btn.innerHTML = t.topic + ' <span class="count">· ' + n + "</span>";
      if (searchTerm && n === 0) btn.style.opacity = ".35";
      btn.onclick = function () {
        selectedTopics[t.slug] = !selectedTopics[t.slug];
        renderTopics();
      };
      list.appendChild(btn);
    });
    updateSearchHint();
  }

  function updateSearchHint() {
    var hint = $("search-hint");
    if (!searchTerm) { hint.textContent = ""; return; }
    var n = allQuestions().filter(function (e) { return matchesSearch(e, searchTerm); }).length;
    hint.textContent = n
      ? n + " matching question" + (n === 1 ? "" : "s") + " — quiz will use only these."
      : "No matches — try a broader term.";
  }

  function pool() {
    var qs = allQuestions().filter(function (e) { return selectedTopics[e.slug]; });
    if (searchTerm) {
      qs = qs.filter(function (e) { return matchesSearch(e, searchTerm); });
    }
    return qs;
  }

  function updateBankStats() {
    var total = allQuestions().length;
    $("bank-stats").textContent = total + " questions · " + activeTopics().length + " topics · " + activeCases().length + " case studies";
  }

  function updateMissedBtn() {
    var missed = getMissed();
    var ids = reviewQuestions().map(function (e) { return e.q.id; });
    activeCases().forEach(function (cs) {
      cs.steps.forEach(function (_, i) { ids.push(cs.id + "-step" + (i + 1)); });
    });
    ids = ids.filter(function (id) { return missed[id]; });
    var btn = $("review-missed-btn");
    if (ids.length) {
      btn.hidden = false;
      btn.textContent = "📌 Review " + ids.length + " previously missed question" + (ids.length === 1 ? "" : "s");
    } else {
      btn.hidden = true;
    }
  }

  // ---------- quiz engine ----------
  function buildItems(entries) {
    // shuffle option order per question, remap answers
    return entries.map(function (e) {
      var order = shuffle(e.q.options.map(function (_, i) { return i; }));
      var story = e.q.stories && e.q.stories[storyStyle];
      return {
        id: e.q.id,
        topic: e.topic,
        type: e.q.type,
        stem: story ? story.title + '\n\n' + story.text : e.q.stem,
        storyStyle: story ? storyStyle : null,
        objective: e.q.objective || '',
        takeaway: e.q.takeaway || '',
        options: order.map(function (i) { return e.q.options[i]; }),
        answer: e.q.answer.map(function (a) { return order.indexOf(a); }),
        rationale: e.q.rationale,
        distractorExplanations: e.q.distractorExplanations || [],
        sources: e.q.sources || [],
        difficulty: e.q.difficulty || null,
        picked: [],
        submitted: false,
        correct: null
      };
    });
  }

  function startQuiz(entries, opts) {
    var ordered = shuffle(entries);
    if (window.NursingStudyState && opts.fresh) {
      var history = window.NursingStudyState.read(localStorage).items;
      ordered.sort(function(a,b) { return ((history[a.q.id] || {}).lastSeen || 0) - ((history[b.q.id] || {}).lastSeen || 0); });
    }
    var items = buildItems(ordered);
    if (opts.limit && items.length > opts.limit) items = items.slice(0, opts.limit);
    quiz = { items: items, entries: entries, idx: 0, mode: opts.mode, isCase: false };
    saveSession();
    show("screen-quiz");
    $("case-intro-card").hidden = true;
    renderQuestion();
  }

  window.startNursingQuestion = function(q) {
    startQuiz([{q:q,topic:q.topic || 'Daily practice',slug:'community'}], {mode:'practice',limit:1});
  };

  function startCases() {
    if (!activeCases().length) return;
    startCase(shuffle(activeCases())[0]);
  }

  function startCase(cs) {
    var items = cs.steps.map(function (s, i) {
      var order = shuffle(s.options.map(function (_, k) { return k; }));
      return {
        id: cs.id + "-step" + (i + 1),
        topic: cs.title,
        type: s.answer.length > 1 ? "sata" : "mcq",
        stem: s.stem,
        update: s.update || "",
        options: order.map(function (k) { return s.options[k]; }),
        answer: s.answer.map(function (a) { return order.indexOf(a); }),
        rationale: s.rationale,
        picked: [],
        submitted: false,
        correct: null
      };
    });
    quiz = { items: items, idx: 0, mode: "practice", isCase: true, caseObj: cs };
    show("screen-quiz");
    $("case-intro-card").hidden = false;
    $("case-title").textContent = "🧪 " + cs.title;
    $("case-intro").textContent = cs.intro;
    renderQuestion();
  }

  function renderQuestion() {
    var it = quiz.items[quiz.idx];
    var n = quiz.items.length;
    $("progress-bar").style.width = ((quiz.idx) / n * 100) + "%";
    $("progress-text").textContent = (quiz.idx + 1) + " / " + n;
    var difficulty = {foundation:"Foundation",core:"Applied",applied:"Applied",advanced:"Challenge",challenge:"Challenge"}[it.difficulty];
    $("q-meta").textContent = it.topic + (difficulty ? " · " + difficulty : "") + (it.storyStyle ? ' · ' + it.storyStyle + ' story' : '') + (it.type === "sata" ? "  ·  SELECT ALL THAT APPLY" : "");
    $('q-objective').hidden = !it.objective;
    $('q-objective').textContent = it.objective || '';
    var upd = $("q-update");
    if (it.update) { upd.hidden = false; upd.textContent = it.update; }
    else { upd.hidden = true; }
    $("q-stem").textContent = it.stem;

    var wrap = $("q-options");
    wrap.innerHTML = "";
    it.options.forEach(function (opt, i) {
      var b = document.createElement("button");
      b.className = "opt";
      b.innerHTML = '<span class="letter">' + String.fromCharCode(65 + i) + "</span><span>" + escapeHtml(opt) + "</span>";
      b.onclick = function () { pick(i); };
      wrap.appendChild(b);
    });

    $("submit-btn").hidden = false;
    $("submit-btn").disabled = true;
    $("feedback").hidden = true;
    $("next-btn").hidden = true;
    window.scrollTo(0, 0);
  }

  function escapeHtml(s) {
    var d = document.createElement("div");
    d.textContent = s;
    return d.innerHTML;
  }

  function pick(i) {
    var it = quiz.items[quiz.idx];
    if (it.submitted) return;
    if (it.type === "sata") {
      var at = it.picked.indexOf(i);
      if (at === -1) it.picked.push(i); else it.picked.splice(at, 1);
    } else {
      it.picked = [i];
    }
    var opts = $("q-options").children;
    for (var k = 0; k < opts.length; k++) {
      opts[k].classList.toggle("picked", it.picked.indexOf(k) !== -1);
    }
    $("submit-btn").disabled = it.picked.length === 0;
  }

  function submit() {
    var it = quiz.items[quiz.idx];
    if (it.submitted || !it.picked.length) return;
    it.submitted = true;
    it.correct = sameSet(it.picked, it.answer);

    var missed = getMissed();
    if (it.correct) delete missed[it.id];
    else missed[it.id] = true;
    saveMissed(missed);
    if (window.NursingStudyState) {
      try { var history=window.NursingStudyState.read(localStorage); window.NursingStudyState.record(history,it.id,it.correct,Date.now()); localStorage.setItem(window.NursingStudyState.key,JSON.stringify(history)); } catch(e) {}
    }
    saveSession();

    if (quiz.mode === "practice") {
      var opts = $("q-options").children;
      for (var k = 0; k < opts.length; k++) {
        opts[k].disabled = true;
        if (it.answer.indexOf(k) !== -1) opts[k].classList.add("correct");
        else if (it.picked.indexOf(k) !== -1) opts[k].classList.add("wrong");
      }
      $("submit-btn").hidden = true;
      var fb = $("feedback");
      fb.hidden = false;
      var v = $("feedback-verdict");
      v.textContent = it.correct ? "✅ Correct" : "❌ Not quite";
      v.className = "verdict " + (it.correct ? "good" : "bad");
      $("feedback-rationale").textContent = it.rationale + ((it.distractorExplanations || []).length ? " Why the alternatives do not fit: " + it.distractorExplanations.join(" ") : "");
      $('feedback-takeaway').hidden = !it.takeaway;
      $('feedback-takeaway').textContent = it.takeaway || '';
      $("feedback-sources").innerHTML = "";
      (it.sources || []).forEach(function(id) {
        var source = typeof id === 'object' ? id : CURRICULUM.sources[id]; if (!source || typeof source.url !== 'string' || !/^https:\/\//.test(source.url)) return;
        var link = document.createElement('a'); link.href = source.url; link.textContent = source.title; link.target = '_blank'; link.rel = 'noopener noreferrer'; $('feedback-sources').appendChild(link);
      });
      $("next-btn").hidden = false;
      $("next-btn").textContent = quiz.idx + 1 < quiz.items.length ? "Next →" : "See results";
    } else {
      next();
    }
  }

  function next() {
    if (quiz.idx + 1 < quiz.items.length) {
      quiz.idx++;
      saveSession();
      renderQuestion();
    } else {
      showResults();
    }
  }

  // ---------- results ----------
  function showResults() {
    var items = quiz.items;
    try { localStorage.removeItem('nursing-session-v1'); } catch(e) {}
    if (!quiz.recorded) { recordProgress(items); quiz.recorded = true; }
    var right = items.filter(function (i) { return i.correct; }).length;
    var pct = Math.round(right / items.length * 100);
    $("result-emoji").textContent = pct >= 90 ? "🏆" : pct >= 75 ? "🎉" : pct >= 60 ? "💪" : "📚";
    $("result-score").textContent = pct + "%";
    $("result-line").textContent = right + " of " + items.length + " correct" +
      (pct >= 90 ? " — outstanding." : pct >= 75 ? " — solid work." : pct >= 60 ? " — getting there." : " — review the rationales below.");

    // per-topic
    var byTopic = {};
    items.forEach(function (i) {
      byTopic[i.topic] = byTopic[i.topic] || { r: 0, n: 0 };
      byTopic[i.topic].n++;
      if (i.correct) byTopic[i.topic].r++;
    });
    var bd = $("topic-breakdown");
    bd.innerHTML = "";
    Object.keys(byTopic).sort().forEach(function (t) {
      var s = byTopic[t];
      var row = document.createElement("div");
      row.className = "topic-row";
      row.innerHTML = "<span>" + escapeHtml(t) + "</span><span class='pct'>" +
        s.r + "/" + s.n + " · " + Math.round(s.r / s.n * 100) + "%</span>";
      bd.appendChild(row);
    });
    $("topic-breakdown-card").hidden = Object.keys(byTopic).length < 2 && !quiz.isCase;

    // missed review
    var missedItems = items.filter(function (i) { return !i.correct; });
    var mc = $("missed-card");
    var ml = $("missed-list");
    ml.innerHTML = "";
    if (missedItems.length) {
      mc.hidden = false;
      missedItems.forEach(function (i) {
        var d = document.createElement("div");
        d.className = "missed-item";
        var ans = i.answer.map(function (a) { return i.options[a]; }).join("; ");
        d.innerHTML = "<div class='m-stem'>" + escapeHtml(i.stem) + "</div>" +
          "<div class='m-ans'>✔ " + escapeHtml(ans) + "</div>" +
          "<div class='m-rat'>" + escapeHtml(i.rationale) + "</div>";
        ml.appendChild(d);
      });
    } else {
      mc.hidden = true;
    }
    $("retry-missed-btn").hidden = missedItems.length === 0;
    $("retry-missed-btn").textContent = quiz.isCase ? "Retry this case in order" : "Retry missed questions";

    var continueBtn = $('continue-study');
    if (continueBtn) {
      continueBtn.onclick = function() {
        var entries = quiz.entries || allQuestions();
        if (entries.length <= 1) {
          var match = { 'story-patient-identification':'rn-teamwork', 'story-order-verification':'rn-teamwork', 'story-safe-spiritual-care':'rn-equity' }[items[0].id];
          entries = allQuestions().filter(function(e) { return match ? e.slug === match : e.topic === items[0].topic; });
          if (!entries.length) entries = allQuestions();
        }
        startQuiz(entries, {limit:10, mode:'practice',fresh:true});
      };
    }
    show("screen-results");
    updateMissedBtn();
  }

  // ---------- navigation ----------
  function show(id) {
    ["screen-home", "screen-quiz", "screen-results"].forEach(function (s) {
      $(s).hidden = s !== id;
    });
    window.scrollTo(0, 0);
    if (id === 'screen-home' && window.renderNursingHub) window.renderNursingHub();
  }

  // ---------- wire up ----------
  function segWire(segId, key) {
    var seg = $(segId);
    Array.prototype.forEach.call(seg.children, function (b) {
      b.onclick = function () {
        Array.prototype.forEach.call(seg.children, function (x) { x.classList.remove("on"); });
        b.classList.add("on");
        settings[key] = b.dataset.val;
      };
    });
  }
  segWire("seg-length", "length");
  segWire("seg-mode", "mode");

  $("topic-search").oninput = function (e) {
    searchTerm = e.target.value.trim();
    renderTopics();
  };
  $("select-all").onclick = function () {
    activeTopics().forEach(function (t) { selectedTopics[t.slug] = true; });
    renderTopics();
  };
  $("select-none").onclick = function () {
    selectedTopics = {};
    renderTopics();
  };

  $("start-btn").onclick = function () {
    var qs = pool();
    if (!qs.length) { alert("No questions match — clear the search or pick a topic."); return; }
    var limit = settings.length === "all" ? 0 : parseInt(settings.length, 10);
    startQuiz(qs, { limit: limit, mode: settings.mode });
  };

  $("start-case-btn").onclick = startCases;

  function renderStories() {
    var list = $('story-rounds'); list.innerHTML = '';
    STORIES.forEach(function(q) {
      var b = document.createElement('button'); b.className = 'big-btn secondary';
      b.textContent = q.stories[storyStyle].title;
      b.onclick = function() { startQuiz([{q:q,topic:q.topic,slug:'story-rounds'}],{mode:'practice',limit:1}); };
      list.appendChild(b);
    });
  }
  $('story-style').value = storyStyle;
  $('story-style').onchange = function(e) {
    if (['routine','silly','outrageous'].indexOf(e.target.value) === -1) return;
    storyStyle = e.target.value;
    try { localStorage.setItem('nursing-story-style-v1',storyStyle); } catch (e) {}
    renderStories();
  };
  renderStories();

  $("review-missed-btn").onclick = function () {
    var missed = getMissed();
    var qs = reviewQuestions().filter(function (e) { return missed[e.q.id]; });
    var old = $("missed-choices");
    if (old) old.remove();
    var choices = document.createElement("div");
    choices.id = "missed-choices";
    function choice(label, action) {
      var button = document.createElement("button");
      button.textContent = label;
      button.onclick = function () { choices.remove(); action(); };
      choices.appendChild(button);
    }
    if (qs.length) choice("Review " + qs.length + " standalone questions", function () {
      startQuiz(qs, { limit: 0, mode: "practice" });
    });
    activeCases().forEach(function (cs) {
      if (cs.steps.some(function (_, i) { return missed[cs.id + "-step" + (i + 1)]; })) {
        choice("Review case: " + cs.title, function () { startCase(cs); });
      }
    });
    $("review-missed-btn").insertAdjacentElement("afterend", choices);
    updateMissedBtn();
  };

  $("retry-missed-btn").onclick = function () {
    if (quiz.isCase) { startCase(quiz.caseObj); return; }
    var badIds = {};
    quiz.items.forEach(function (i) { if (!i.correct) badIds[i.id] = true; });
    var qs = (quiz.entries || reviewQuestions()).filter(function (e) { return badIds[e.q.id]; });
    if (!qs.length) { show('screen-home'); updateMissedBtn(); return; }
    startQuiz(qs, { limit: 0, mode: quiz.mode });
  };

  $("submit-btn").onclick = submit;
  $("next-btn").onclick = next;
  $("quit-btn").onclick = function () { show("screen-home"); updateMissedBtn(); };
  $("home-btn").onclick = function () { show("screen-home"); updateMissedBtn(); };

  function progress() {
    try { var p = JSON.parse(localStorage.getItem('nursing-progress-v1') || '{}'); return p && typeof p === 'object' && !Array.isArray(p) ? p : {}; } catch (e) { return {}; }
  }
  function recordProgress(items) {
    var p = progress(); var row = p[trackId] || {sessions:0, answered:0, correct:0};
    row.sessions++; row.answered += items.length; row.correct += items.filter(function(i) { return i.correct; }).length;
    row.lastStudied = new Date().toISOString(); p[trackId] = row;
    try { localStorage.setItem('nursing-progress-v1', JSON.stringify(p)); } catch (e) {}
    renderProgress();
  }
  function renderProgress() {
    var p = progress()[trackId];
    $('learning-progress').textContent = p ? p.sessions + ' sessions · ' + p.answered + ' questions practiced · ' + Math.round(p.correct / p.answered * 100) + '% practice accuracy' : 'Your study progress stays on this device.';
  }
  function renderTrack() {
    $('track-description').textContent = currentTrack().name + ' · ' + allQuestions().length + ' questions available in this testing preview.';
    $('start-case-btn').hidden = !currentTrack().caseAccess;
    $('track-sources').innerHTML = '';
    currentTrack().sources.forEach(function(id) {
      var source = CURRICULUM.sources[id]; var link = document.createElement('a');
      link.textContent = source.title; link.href = source.url; link.target = '_blank'; link.rel = 'noopener noreferrer';
      $('track-sources').appendChild(link);
    });
    var old = $('missed-choices'); if (old) old.remove();
    renderTopics(); updateBankStats(); updateMissedBtn(); renderProgress();
    if (window.renderNursingHub) window.renderNursingHub();
  }
  TRACKS.forEach(function(t) { var o = document.createElement('option'); o.value = t.id; o.textContent = t.name; $('learning-track').appendChild(o); });
  $('learning-track').value = trackId;
  $('learning-track').onchange = function(e) {
    trackId = e.target.value; selectedTopics = {}; activeTopics().forEach(function(t) { selectedTopics[t.slug] = true; });
    searchTerm = ''; $('topic-search').value = '';
    try { localStorage.setItem('nursing-track-v1', trackId); } catch (e) {}
    renderTrack();
  };
  $('export-progress').onclick = function() {
    var blob = new Blob([JSON.stringify({version:1, exportedAt:new Date().toISOString(), progress:progress(), missed:getMissed(), study:window.NursingStudyState ? window.NursingStudyState.read(localStorage) : null}, null, 2)], {type:'application/json'});
    var url = URL.createObjectURL(blob); var a = document.createElement('a'); a.href = url; a.download = 'nursing-study-progress.json'; a.click(); setTimeout(function() { URL.revokeObjectURL(url); }, 1000);
  };
  $('clear-progress').onclick = function() {
    if (!confirm('Clear your saved practice results and missed questions on this device?')) return;
    try { localStorage.removeItem('nursing-progress-v1'); localStorage.removeItem(LS_KEY); localStorage.removeItem('nursing-study-v2'); localStorage.removeItem('nursing-session-v1'); localStorage.removeItem('nursing-lab-progress-v1'); localStorage.removeItem('nursing-lab-tutorials-v1'); } catch (e) {}
    renderProgress(); updateMissedBtn();
    if (window.renderNursingHub) window.renderNursingHub();
  };
  function saveSession() {
    if (!window.NursingStudyState || !quiz || quiz.isCase) return;
    try { localStorage.setItem('nursing-session-v1',JSON.stringify({version:1,contentHash:window.NURSING_BUILD ? window.NURSING_BUILD.contentHash : 'legacy',track:trackId,quiz:quiz})); } catch(e) {}
  }
  function session() {
    try {
      var s=JSON.parse(localStorage.getItem('nursing-session-v1') || 'null');
      var ids=allQuestions().concat(storyEntries()).map(function(e){return e.q.id;});
      if (!s || s.version!==1 || s.contentHash!==(window.NURSING_BUILD ? window.NURSING_BUILD.contentHash : 'legacy') || s.track!==trackId || !s.quiz || !Array.isArray(s.quiz.items) || !s.quiz.items.length || !Number.isInteger(s.quiz.idx) || s.quiz.idx<0 || s.quiz.idx>=s.quiz.items.length || !['practice','exam'].includes(s.quiz.mode)) return null;
      if (!s.quiz.items.every(function(i){return ids.includes(i.id) && typeof i.stem==='string' && Array.isArray(i.options) && i.options.every(function(o){return typeof o==='string';}) && Array.isArray(i.answer) && i.answer.every(function(n){return Number.isInteger(n) && n>=0 && n<i.options.length;}) && Array.isArray(i.picked);})) return null;
      // Rebuild the continuation pool from current source, not saved user input.
      s.quiz.entries=allQuestions().filter(function(e){return (s.quiz.entries||[]).some(function(old){return old.q && old.q.id===e.q.id;});});
      return s;
    } catch(e) { return null; }
  }
  window.NursingStudy = {
    entries:allQuestions,
    track:function(){return trackId;},
    start:function(entries,opts){if(entries.length)startQuiz(entries,Object.assign({limit:10,mode:'practice',fresh:true},opts));},
    saved:session,
    resume:function(){var s=session();if(!s)return;quiz=s.quiz;show('screen-quiz');$('case-intro-card').hidden=true;if(quiz.items[quiz.idx].submitted)next();else renderQuestion();}
  };
  renderTrack();
  // ---------- boot ----------
  updateBankStats();
  renderTopics();
  updateMissedBtn();
})();
