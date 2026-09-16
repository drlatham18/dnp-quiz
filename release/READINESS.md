# Free study release — September 15, 2026

The public library contains 64 source-linked questions: 24 RN foundation,
20 statistics, 12 evidence appraisal and 8 quality improvement questions.
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
