# Nursing testing-site usability candidate

Prepared on 2026-10-24. This branch is a review candidate, not a deployed or clinically approved release.

## Learning flow

- Learn: one Start studying action, choose a learning path and topic, then read a focused lesson.
- Lesson: one primary short practice action, back to the topic library, and next-topic navigation.
- Practice: quick ten-question session, resume an unfinished session, and collapsed advanced controls. Existing answer explanations, sources, scores and progress remain available.
- Assessment: locked comparisons explicitly require the category introduction. The URL identifies the introduction and intended lesson; mandatory safety checks remain in place.
- Feedback: a separate website-usability draft with copy/share controls. It has no submission inbox. Clinical review remains a separate workflow.

The optional daily endpoint returned HTTP 401 during verification. The interface explains this service limitation and directs learners to working local practice rather than incorrectly claiming the device is offline.

## Preservation and verification

The question banks, lesson catalog, original sound samples and clinical review logic were not edited. Existing progress and review-note storage keys remain intact. An unfinished session from an earlier presentation fingerprint can resume only when every saved question still matches current wording, answer text, rationale and sources. Changed questions reject continuation without deleting the old record. Prior clinical notes are never converted to approval of this presentation fingerprint.

Verification completed: full npm test suite, preview build and release checks; isolated headless Chrome at 320, 390 and 768 pixels; topic selection, eight-question practice/scoring/rationale, lesson back/next/browser-back, repeated main navigation, keyboard skip/focus, explicit assessment prerequisite routing, feedback draft restoration, mocked copy success/failure and cancelled sharing. No feedback was transmitted. Synthetic progress compatibility checks preserved storage byte-for-byte and rejected a changed rationale.

Limits: responsive emulation is not physical-device or screen-reader certification. Copy/share requires the tester to choose the recipient; no feedback backend was created. The existing three-trained-nurse and owner-verification gate still blocks external clinical/native release. All 30 lessons were not independently clinically re-reviewed in this usability pass.

## Publication approval required

Review this draft's exact head and CI. After explicit owner approval, make the PR ready and merge the approved commit into main; the existing GitHub Pages workflow publishes the testing site. Then verify the live release fingerprint and learning/feedback paths. Do not deploy from this branch, submit a native release, or treat this draft as clinical signoff.
