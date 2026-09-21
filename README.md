# Nursing Learning Companion

The GitHub Pages URL is the owner-authorized **testing preview**. It now includes 18 topic packs, 240 practice questions (160 existing + 80 draft), and a 30-lesson Assessment Lab. New content has **zero verified nurse approvals** and is not for patient-care decisions.

- [Study hub](https://drlatham18.github.io/dnp-quiz/)
- [Assessment Lab](https://drlatham18.github.io/dnp-quiz/assessment.html)
- [Review workspace](https://drlatham18.github.io/dnp-quiz/review.html)

External release requires the owner to verify three distinct trained nurses approved the exact content fingerprint. See [review procedure](release/ASSESSMENT-REVIEW.md). No API keys or paid services are required for this preview. Review notes remain local to the reviewer’s browser until exported; they are never uploaded automatically.

Free, offline-capable nursing study practice with RN, BSN, MSN/NP and DNP paths.

Use the app: https://drlatham18.github.io/dnp-quiz/

160 source-linked practice questions cover hand hygiene, patient teaching,
communication, statistics, evidence appraisal and quality improvement. Quiz
options shuffle, practice and exam modes explain answers, and missed questions
can be retried. Progress stays on the device and can be exported or cleared.
After the first online load, the app supports offline study. Add it to the home
screen from your browser to launch it like an app.

This is a focused study library, not a complete nursing curriculum, independent
educator certification, CE credit or clinical decision support. No account,
payment or patient information is required. See release/READINESS.md for content
scope, review method and limits. The larger clinical bank in data/ is draft source
and is not loaded by the public app or packaged in mobile builds.

Story rounds: three fictional safety concepts each have Routine, Silly and Outrageous narratives. The answer, rationale and concept ID stay the same across styles. These are narrative preferences, not a validated learning-style assessment. Independent educator review is pending; see release/STORY-ROUNDS.md.

Community contributions: CSV/JSON import, editable preview, private review queue,
receipt-based status and withdrawal, and a free daily question. The archive requires
a server-side subscription; checkout is disabled until payment integration is verified.
The community service lives in the separate nursing-community project.

Development: npm ci; npm test; npm run build:preview; npm run check:release.
`npm run build` and `npm run sync:mobile` intentionally block without private owner-verified nurse approvals. Do not bypass this gate. Edit `expansion.json` as the source of new question packs; the build regenerates `expansion.js`.
The build generates dist/ and the checked-in sw.js used by GitHub Pages. Native
source projects are in android/ and ios/; npm run sync:mobile updates their assets.
Native project generation does not mean store approval or device QA is complete.
