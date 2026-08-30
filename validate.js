// Validates every data file: schema, id uniqueness, answer indices in range.
// Run: node validate.js
const fs = require("fs");
const path = require("path");

global.window = {};
const dataDir = path.join(__dirname, "data");
const files = fs.readdirSync(dataDir).filter(f => f.endsWith(".js"));
let errors = [];

for (const f of files) {
  try { require(path.join(dataDir, f)); }
  catch (e) { errors.push(`${f}: SYNTAX ERROR — ${e.message}`); }
}

const ids = new Set();
let total = 0;

for (const t of window.QUIZ_DATA || []) {
  if (!t.topic || !t.slug || !Array.isArray(t.questions)) {
    errors.push(`topic block malformed: ${JSON.stringify(t).slice(0, 80)}`);
    continue;
  }
  for (const q of t.questions) {
    total++;
    const tag = `${t.slug}/${q.id}`;
    if (!q.id || ids.has(q.id)) errors.push(`${tag}: missing or duplicate id`);
    ids.add(q.id);
    if (!["mcq", "sata"].includes(q.type)) errors.push(`${tag}: bad type ${q.type}`);
    if (!q.stem || !q.rationale) errors.push(`${tag}: missing stem/rationale`);
    if (!Array.isArray(q.options) || q.options.length < 4) errors.push(`${tag}: <4 options`);
    if (!Array.isArray(q.answer) || q.answer.length === 0) errors.push(`${tag}: empty answer`);
    else {
      for (const a of q.answer) {
        if (!Number.isInteger(a) || a < 0 || a >= q.options.length) errors.push(`${tag}: answer index ${a} out of range`);
      }
      if (q.type === "mcq" && q.answer.length !== 1) errors.push(`${tag}: mcq must have 1 answer`);
      if (q.type === "sata" && q.answer.length < 2) errors.push(`${tag}: sata needs 2+ answers`);
    }
    const banned = /\ball of the above\b|\bnone of the above\b|\bboth [a-d] and\b/i;
    for (const o of q.options) {
      if (banned.test(o)) errors.push(`${tag}: position-dependent option "${o}"`);
    }
  }
}

let caseSteps = 0;
for (const c of window.CASE_DATA || []) {
  if (!c.id || !c.title || !c.intro || !Array.isArray(c.steps) || c.steps.length < 3) {
    errors.push(`case ${c.id || "?"}: malformed or <3 steps`);
    continue;
  }
  for (const [i, s] of c.steps.entries()) {
    caseSteps++;
    const tag = `${c.id} step ${i + 1}`;
    if (!s.stem || !s.rationale) errors.push(`${tag}: missing stem/rationale`);
    if (!Array.isArray(s.options) || s.options.length < 4) errors.push(`${tag}: <4 options`);
    if (!Array.isArray(s.answer) || s.answer.length === 0) errors.push(`${tag}: empty answer`);
    else for (const a of s.answer) {
      if (!Number.isInteger(a) || a < 0 || a >= s.options.length) errors.push(`${tag}: answer index ${a} out of range`);
    }
  }
}

console.log(`${(window.QUIZ_DATA || []).length} topics, ${total} questions, ${(window.CASE_DATA || []).length} cases (${caseSteps} steps)`);
if (errors.length) { console.log("ERRORS:"); errors.forEach(e => console.log(" - " + e)); process.exit(1); }
console.log("All checks passed.");
