# Assessment Lab and topic-pack review

## Standing authorization

The owner authorized `https://drlatham18.github.io/dnp-quiz/` as the testing environment on September 20, 2026. The preview may contain conspicuously labeled, unapproved teaching content. This is a public URL, not an authenticated clinical environment. No patient information, credentials, reviewer identities, or private review notes may be committed.

Any release somewhere else, including a native app, requires the owner's explicit verification that three distinct trained nurses approved the exact material/version. Automated tests and AI source checks are not nurse approvals. Any changed content, media, explanation, scoring, or presentation invalidates the recorded version.

## Content inventory

- 160 existing source-linked practice questions, preserved.
- 14 topic summaries built around the existing bank.
- 4 expansion packs containing 80 new original draft questions with rationales and distractor explanations.
- 30 paired Assessment Lab lessons and 90 comparison-practice prompts.
- Heart and lung sounds: published HLS-CMDS clinical-manikin recordings, with upstream normalization disclosed. They are simulations, not patient recordings.
- Skin: original simplified vector diagrams in three illustrative tones, not clinical photographs or a clinically calibrated skin-tone atlas.
- Imaging: source-attributed clinical images, with context/acquisition differences disclosed. These are different individuals, not before/after studies.
- Reports: original synthetic examples with units and illustrative intervals; no patient data.

## Review procedure

1. Visit `/review.html` on the preview. Download the review inventory and retain its SHA-256 content fingerprint.
2. Each trained nurse independently reviews the exact normal/abnormal pair, provenance, media processing, teaching text, answer/distractor logic, nursing scope, and limitations. Include patient-population applicability, ambiguous normal variants, tone diversity and whether the sample is representative.
3. Record changes or recommendations in the browser review workspace and export the notes. Notes remain local until exported. The webpage cannot verify training, collect official signatures, or approve a release.
4. Resolve all concerns and regenerate the content fingerprint. Material revisions require renewed review of the new version. Do not reuse a stale review file.
5. The owner verifies reviewer training/identity and all three approvals for the final fingerprint, then authorizes external release. Only then place the private attestation file in `review-private/approvals.json` (ignored by Git).

The attestation contains `contentHash`, three `nurses` entries (`reviewerId`, `trainedNurse`, `decision`, `contentHash`, `reviewedAt`, `evidenceReference`, and checks for `accuracy`, `mediaFidelity`, `normalAbnormalDistinction`, `nursingImplications`), and `ownerVerification` (`verified`, `contentHash`, `verifiedAt`, `evidenceReference`). Evidence references point to privately retained approvals; do not put licenses, legal names or documents on the public website. An exported browser recommendation is not an attestation.

`npm run build:preview` builds the authorized GitHub preview. `npm run build`, mobile sync and the Android publish workflow require the private owner-verification gate. The gate validates review records and exact version binding; it cannot independently authenticate a person's professional training. Only the owner can make that verification.

## Clinical review priorities

The first 30 lessons are learning prototypes, not competency certification. Review the clinical fidelity of every recording and image, schematic wound depth/appearance, laboratory contexts and escalation wording. Add multiple authentic examples and matched demographic/scan controls before using recognition accuracy as evidence of skill. Do not infer a valve diagnosis from a murmur or a clinical diagnosis from an isolated image. Do not equate an apparently normal recording/image with an exclusion of disease.

Future collections in the agreed backlog: ECGs, circulation/perfusion, neuro/function, additional wound/skin conditions, expanded CT/MRI/ultrasound, maternal/newborn, pediatric and critical-care assessment. The first version does not claim that all of these future collections are populated.
