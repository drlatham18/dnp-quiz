# Apple-first release path

User preference, September 15, 2026: choose iOS first where it shortens release.
Google's new-personal-account gate requires at least 12 opted-in testers for
14 consecutive days before applying for production. Apple's documented submission
path has no equivalent minimum tester-duration rule. TestFlight remains useful
for device QA; App Review and acceptance are separate.

Sources checked:
- https://support.google.com/googleplay/android-developer/answer/14151465
- https://developer.apple.com/documentation/xcode/distributing-your-app-for-beta-testing-and-releases
- https://developer.apple.com/support/compare-memberships/
- https://developer.apple.com/app-store/review/guidelines/

Prioritize the prepared iOS project once Apple account enrollment is confirmed.
This Mac has Command Line Tools but no full Xcode and no valid signing identity.
Apple Developer enrollment costs $99/year where applicable; no purchase was made.
Build an archive, test real iPhone installation and privacy behavior, then upload
through the owner's App Store Connect team. App review approval is not guaranteed.
The Android shell is retained so Google testing can proceed independently.
