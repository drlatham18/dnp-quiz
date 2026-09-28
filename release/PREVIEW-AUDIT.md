# Preview preparation audit — September 28, 2026

This record separates technical/source checks from clinical and legal approval. Neither is granted here. The only authorized development publication remains the GitHub Pages preview.

## Completed

- Retired the root Android APK/checksum from the current branch and removed APK/checksum assets from GitHub Releases v1.0.0 and v1.1.0. Verified local backups were retained before deletion. Tags and history remain; this does not revoke previously downloaded copies or erase historical Git objects. The release check now rejects native installers in the root `downloads` directory during preview builds.
- Extended the review fingerprint to include privacy, contribution terms and the static community/daily integration files. Remote daily content itself remains outside the fingerprint.
- Added the complete 240-question study bank to the downloadable reviewer inventory, alongside 30 assessment lessons / 90 clinical questions, five introductions / 15 understanding questions, 18 topic summaries, media metadata and the exact content manifest. The expansion section duplicates its 80 questions from the complete bank; these are not 80 additional questions.
- Fixed keyboard focus after advancing a lab question or finishing a quiz. Headless Chromium verified Enter/Tab operation and focus on the next question heading. Narrow-screen reflow at 200% text size passed. Existing live checks cover mobile layout, audio playback, offline access and category prerequisites. This is a targeted accessibility check, not a complete WCAG or screen-reader audit.
- Checked all 67 media registry entries: 23 manikin audio files, 11 clinical images, 21 original illustrations and 12 synthetic reports. All 55 file checksums match the registry. All 11 clinical-image license declarations match their Commons source records; see [MEDIA-AUDIT.json](MEDIA-AUDIT.json). One rate-limited API lookup was verified using the source file page instead.
- Rechecked the [audio dataset's source](https://zenodo.org/records/20027993): manikin origin, attribution and upstream normalization are disclosed. Clinical fidelity and whether each sound is representative remain nurse-review questions.
- [CC BY-SA conditions](https://creativecommons.org/licenses/by-sa/4.0/) require appropriate attribution, license links, change disclosure and share-alike for adaptations. Existing asset records retain these labels; no new media transformations were performed. This metadata check is not a legal chain-of-title, consent or de-identification certification.

## Existing community-service audit

The local source at commit `ec28ad41e04153e18c0c32b61c0005b03b322646` matches Sites saved version 2. Its deployment status is succeeded, dated September 16, 2026. No changes were deployed to that service during this audit. No real submissions, reviewer identities, private receipts, production database rows or environment secrets were inspected.

Seven local service tests passed. Read-only browser requests to the existing public service returned: health 200, unauthenticated reviewer queue 401, unauthenticated paid archive 402. Initial command-line requests received an edge 403; actual browser requests reached the application. These observations verify the checked endpoints, not the entire service's security.

| Behavior | Source/test evidence | Remaining limit |
| --- | --- | --- |
| Submission | Server validates size, allowed fields, answer indices, source URLs and three consent flags; data starts pending. | Identifier-pattern checks catch selected patterns, not all PHI. Moderation must handle accidental sensitive submissions. |
| Receipt access | Random 32-byte receipt, stored as a hash; receipt required to read or withdraw that submission. | Operational key handling and recovery processes need review. |
| Withdrawal | Application database body becomes `{}` and review note becomes null; status, timestamps and some review metadata remain. | Backups, hosting logs and saved reader copies are not verified as deleted by this operation. |
| Retention | Daily IP-derived hash rate-limit records expire after two days and are cleared on later submissions. Submission records have no scheduled expiry. | Provider logs/backups and an owner-selected submission-retention policy remain unresolved. Privacy wording was corrected to disclose the lack of automatic expiry. |
| Publication | An authenticated editorial reviewer can approve and schedule a question. | This is **not** the three-distinct-nurse, owner-verified gate. Do not treat editorial approval as release authorization. |
| Version boundary | Static repository materials have a SHA-256 review fingerprint. | The remotely changing daily question is outside that static fingerprint. Freeze/snapshot it into a reviewed release or extend the approval model before broader distribution. |
| Payments | Checkout is disabled and the archive requires server-side membership. | Billing, subscriptions and native SDK/provider behavior were not audited or enabled. |

## Work still required before broader release

1. Three independent trained-nurse reviews of the final content and media, with all corrections resolved and the owner verifying the exact final fingerprint. No reviews are claimed.
2. Owner decision on keeping community submissions/dynamic daily content at launch. If retained, engineering must bind publication to the approved version and three-nurse policy; the current service must not be assumed to satisfy that gate. Deployment outside GitHub requires destination authorization.
3. Confirm the business entity, intended jurisdictions/audience and launch model. Use [REGULATORY-REVIEW.md](REGULATORY-REVIEW.md) for counsel's applicability review, including terms, privacy and professional-scope questions.
4. Verify hosting/vendor retention, deletion, logs, incident handling and contracts. Source code alone cannot settle operational claims.
5. Human screen-reader and listening/visual learning checks, including whether alternatives provide an appropriate accessible learning experience. Targeted browser tests do not establish auditory/visual clinical competence.

See [OWNER-TODO.md](OWNER-TODO.md) for the owner's concrete actions and the division of responsibility. No new native build or external clinical release is authorized by this record.
