# Free study release — September 16, 2026

The public library contains 160 source-linked questions. The September 16 expansion
adds 96 original scenarios in infection prevention, injection and catheter safety,
communication and access, epidemiology, risk comparisons, measurement, and study appraisal.
RN, BSN, MSN/NP and DNP paths select relevant parts of this library. Advanced
paths share research and systems material; they are not full degree curricula.
The free app provides shuffled quizzes, rationales, source links, missed-item
practice, local progress, export/deletion and offline study after a first load.

## Content check and limits

The source and consistency check was AI-assisted. No nursing educator approval,
CE credit, clinical decision support, licensure preparation completeness or
exam-readiness claim is made. Clinical prescribing, diagnostic and procedure
questions and eight unfolding cases remain draft source files and are excluded
from the public app entrypoint and all built distribution bundles. The reviewed
library is explicit in library.js; expanding it requires item-specific checking.

Corrected research claims include IRB exemption/determination nuance, missing-data
bias, p-value interpretation, confounding and run-chart chronology/causality.
The legacy transfusion bank overstates deterministic thresholds and confuses
cardiac-surgery and preexisting-cardiovascular-disease thresholds. It is not
included in the released library.

Primary sources are linked in curriculum.js and beside each answer. Original
questions paraphrase educational concepts; source links do not imply endorsement.
Run npm test, npm run build and npm run check:release. Verify production against
release.json and sw.js, complete a quiz and reload progress. Store distribution
still requires signed native builds and device acceptance; the free PWA is an
independent usable release.

## Community release

CSV/JSON uploads are parsed locally and previewed before the user submits each
question. A separate hosted service stores pending questions privately. Reviewer
authentication, explicit source/answer/originality checks, estimated difficulty,
and a publication date are required before an item can become the free daily
question. An original editorial question fills dates without community approval.
Receipts authorize status and content withdrawal. The archive enforces active
server-side membership; no paid subscriptions are on sale yet.
