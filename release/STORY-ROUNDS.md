# Story rounds — September 16, 2026

The owner requested Routine, Silly and Outrageous versions of serious scenario questions. The first release contains three concepts and nine narratives. These are optional narrative preferences, not a psychological learning-style assessment or a proven memory intervention. The core library remains 160 questions; rewritten narratives are not counted as extra questions.

Each concept owns one stable ID, objective, difficulty, option set, correct answer, rationale and source list. Only title and narrative change. Missed-question review follows the concept across styles. Standard quizzes, daily questions and existing progress remain available.

## Editorial decisions

- Identity mismatch: pause the disputed medication; use two approved identifiers and clarify promptly through available clinical escalation. Familiarity, room number and a plausible dose do not resolve the mismatch. No medication dosing advice is added.
- Suspicious candy order: clarify conflicting diet instructions and uncertain authorship. NPO/candy cannot be presumed harmless. A suspicious entry is not proof the patient forged it. Do not teach a nurse to rewrite the order independently.
- Spiritual-care request: this is a separate rights/safety objective, so it has its own Routine and Silly versions alongside the owner's Outrageous concept. Support safe spiritual care while addressing smoke, monitoring and consent. A sleeping patient is not automatically consenting or incapable; a POA is not blanket authority. Avoid treating new neurological changes as benign by default.
- Humor comes from absurd paperwork, props and logistics. Patient vulnerability and religious identity are not the teaching joke. The ordinary clinical rationale appears after every style.

Primary source checks: Joint Commission's two-identifier FAQ (updated April 2026); AHRQ TeamSTEPPS SBAR; CMS hospital conditions/representative guidance; HHS religious nondiscrimination/visitation guidance; NFPA open-flame safety. Direct links are included with each concept. Source checks are AI-assisted and do not establish independent nurse-educator approval. Qualified review and learner feedback remain required before paid/comprehensive claims.

Before expansion, reviewers should check clinical equivalence of the three versions, plausible distractors, tone, clarity and local-policy dependencies. Add new concepts in reviewed batches; never generate clinical variations at runtime without review. No API expense is required for these authored stories.

Verification: `node test-stories.cjs` covers all nine variants, shared answer/rationale, shuffled scoring, same-ID missed review and retries. Build/release checks include stories.js in offline/native assets. Browser evidence is recorded separately from unit checks and store release status.
