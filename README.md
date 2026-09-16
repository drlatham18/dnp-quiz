# Nursing Learning Companion

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

Community contributions: CSV/JSON import, editable preview, private review queue,
receipt-based status and withdrawal, and a free daily question. The archive requires
a server-side subscription; checkout is disabled until payment integration is verified.
The community service lives in the separate nursing-community project.

Development: npm ci; npm test; npm run build; npm run check:release.
The build generates dist/ and the checked-in sw.js used by GitHub Pages. Native
source projects are in android/ and ios/; npm run sync:mobile updates their assets.
Native project generation does not mean store approval or device QA is complete.
