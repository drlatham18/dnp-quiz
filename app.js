/* DNP Quiz Coach — plain JS, no dependencies. */
(function () {
  "use strict";

  var BANK = window.QUIZ_DATA || [];
  var CASES = window.CASE_DATA || [];
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
    BANK.forEach(function (t) {
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
    BANK.forEach(function (t) {
      var n = searchTerm
        ? t.questions.filter(function (q) {
            return matchesSearch({ q: q, topic: t.topic }, searchTerm);
          }).length
        : t.questions.length;
      var btn = document.createElement("button");
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
    $("bank-stats").textContent = total + " questions · " + BANK.length + " topics · " + CASES.length + " case studies";
  }

  function updateMissedBtn() {
    var missed = getMissed();
    var ids = allQuestions().map(function (e) { return e.q.id; });
    CASES.forEach(function (cs) {
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
      return {
        id: e.q.id,
        topic: e.topic,
        type: e.q.type,
        stem: e.q.stem,
        options: order.map(function (i) { return e.q.options[i]; }),
        answer: e.q.answer.map(function (a) { return order.indexOf(a); }),
        rationale: e.q.rationale,
        picked: [],
        submitted: false,
        correct: null
      };
    });
  }

  function startQuiz(entries, opts) {
    var items = buildItems(shuffle(entries));
    if (opts.limit && items.length > opts.limit) items = items.slice(0, opts.limit);
    quiz = { items: items, idx: 0, mode: opts.mode, isCase: false };
    show("screen-quiz");
    $("case-intro-card").hidden = true;
    renderQuestion();
  }

  function startCases() {
    if (!CASES.length) return;
    startCase(shuffle(CASES)[0]);
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
    $("q-meta").textContent = it.topic + (it.type === "sata" ? "  ·  SELECT ALL THAT APPLY" : "");
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
      $("feedback-rationale").textContent = it.rationale;
      $("next-btn").hidden = false;
      $("next-btn").textContent = quiz.idx + 1 < quiz.items.length ? "Next →" : "See results";
    } else {
      next();
    }
  }

  function next() {
    if (quiz.idx + 1 < quiz.items.length) {
      quiz.idx++;
      renderQuestion();
    } else {
      showResults();
    }
  }

  // ---------- results ----------
  function showResults() {
    var items = quiz.items;
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

    show("screen-results");
    updateMissedBtn();
  }

  // ---------- navigation ----------
  function show(id) {
    ["screen-home", "screen-quiz", "screen-results"].forEach(function (s) {
      $(s).hidden = s !== id;
    });
    window.scrollTo(0, 0);
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
    BANK.forEach(function (t) { selectedTopics[t.slug] = true; });
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

  $("review-missed-btn").onclick = function () {
    var missed = getMissed();
    var qs = allQuestions().filter(function (e) { return missed[e.q.id]; });
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
    CASES.forEach(function (cs) {
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
    var qs = allQuestions().filter(function (e) { return badIds[e.q.id]; });
    startQuiz(qs, { limit: 0, mode: quiz.mode });
  };

  $("submit-btn").onclick = submit;
  $("next-btn").onclick = next;
  $("quit-btn").onclick = function () { show("screen-home"); updateMissedBtn(); };
  $("home-btn").onclick = function () { show("screen-home"); updateMissedBtn(); };

  // ---------- boot ----------
  updateBankStats();
  renderTopics();
  updateMissedBtn();
})();
