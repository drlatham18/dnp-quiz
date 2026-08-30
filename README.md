# DNP Quiz Coach 🩺

A doctoral-level nurse practitioner study app. Static site, no accounts, no backend — works on any phone or computer.

**Live:** https://drlatham18.github.io/dnp-quiz/

## Features

- **11 topics, 200+ board-style questions** — pharmacology, pathophysiology, health assessment, clinical management, EBP/research, biostats/epi, policy, informatics, leadership/QI, ethics, population health
- **Search anything** — type "heart failure" or "ANOVA" and the quiz pulls only matching questions
- **Practice mode** (instant rationale after each answer) or **Exam mode** (graded at the end)
- **Unfolding case studies** — experiential, multi-step patient scenarios that evolve as you answer
- **Missed-question tracking** — the app remembers what you got wrong (on your device) and offers a review deck
- Select-all-that-apply and single-answer formats, shuffled every time

## Adding topics

Ask Claude to add a topic — each topic is one file in `data/` following the format in any existing file, plus one `<script>` line in `index.html`. Push to `main` and Pages redeploys automatically.

## Accuracy note

Questions were AI-generated against major current guidelines (ACC/AHA, ADA, GOLD, USPSTF, etc.) and are for study practice only. Always verify against your course materials and current guidelines — flag any question that looks off and it can be fixed in minutes.
