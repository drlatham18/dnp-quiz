window.QUIZ_DATA = window.QUIZ_DATA || [];
window.QUIZ_DATA.push({
  topic: "Clinical Management",
  slug: "clinmgmt",
  questions: [
    {
      id: "clinmgmt-001",
      type: "mcq",
      stem: "A 52-year-old Black man without diabetes, chronic kidney disease, or heart failure has confirmed office blood pressures averaging 148/94 mm Hg despite 3 months of lifestyle modification. Per ACC/AHA guidance, which initial pharmacologic strategy is most appropriate?",
      options: ["Start two agents from complementary classes, such as a thiazide diuretic plus a calcium channel blocker", "Start lisinopril alone and reassess in 6 months", "Start metoprolol tartrate as monotherapy", "Continue lifestyle modification alone for another 6 months"],
      answer: [0],
      rationale: "His average blood pressure is stage 2 (at least 20/10 mm Hg above goal), which warrants initiating two first-line agents, and thiazides or calcium channel blockers are the preferred initial classes for Black adults without CKD or heart failure. ACE inhibitor monotherapy is the tempting distractor, but it is both a single agent for stage 2 disease and, on average, less effective as initial monotherapy in this population; beta-blockers are not first-line for uncomplicated hypertension.",
      difficulty: "core"
    },
    {
      id: "clinmgmt-002",
      type: "mcq",
      stem: "A 61-year-old woman with hypertension has an eGFR of 48 and a urine albumin-creatinine ratio of 420 mg/g. Her current regimen is amlodipine alone, with blood pressure 142/88. Which change offers the greatest renal protection?",
      options: ["Add an ACE inhibitor or angiotensin receptor blocker and titrate to the maximally tolerated dose", "Add hydrochlorothiazide", "Switch amlodipine to diltiazem", "Add an ACE inhibitor and an angiotensin receptor blocker together"],
      answer: [0],
      rationale: "In CKD with severely increased albuminuria, renin-angiotensin system blockade slows progression and is guideline-recommended regardless of which other agents are in place. Adding a thiazide would help pressure but provides no comparable antiproteinuric benefit, and combining an ACE inhibitor with an ARB is contraindicated in routine practice because it increases hyperkalemia and acute kidney injury without improving outcomes.",
      difficulty: "core"
    },
    {
      id: "clinmgmt-003",
      type: "mcq",
      stem: "A 58-year-old man with type 2 diabetes (A1c 7.1 percent on metformin) had a myocardial infarction last year. His eGFR is 74. Per current ADA standards, what is the most appropriate next step in his diabetes regimen?",
      options: ["Add a GLP-1 receptor agonist or SGLT2 inhibitor with proven cardiovascular benefit, independent of his A1c", "Make no change because his A1c is below 7.5 percent", "Add basal insulin to further lower his A1c", "Add a sulfonylurea because it is the least expensive option"],
      answer: [0],
      rationale: "For patients with established atherosclerotic cardiovascular disease, ADA standards recommend an agent with demonstrated cardiovascular outcome benefit, a GLP-1 receptor agonist or SGLT2 inhibitor, regardless of glycemic control or metformin use. Making no change is the tempting choice because his A1c is at goal, but the indication here is cardiovascular risk reduction, not glucose lowering, so an acceptable A1c does not remove the recommendation.",
      difficulty: "core"
    },
    {
      id: "clinmgmt-004",
      type: "mcq",
      stem: "A 70-year-old woman with type 2 diabetes on metformin 1000 mg twice daily has a gradual decline in kidney function; today her eGFR is 27, confirmed on repeat testing. What is the correct action regarding metformin?",
      options: ["Discontinue metformin because the eGFR is below 30", "Continue the current dose since she has tolerated it for years", "Reduce the dose by half and continue indefinitely at any eGFR", "Switch to twice-weekly dosing"],
      answer: [0],
      rationale: "Metformin is contraindicated once eGFR falls below 30 because of accumulating lactic acidosis risk, so it should be stopped and replaced with an agent appropriate for advanced CKD. Halving the dose is the tempting middle ground and is reasonable in the 30 to 45 range, but below 30 the drug should be discontinued rather than dose-reduced.",
      difficulty: "core"
    },
    {
      id: "clinmgmt-005",
      type: "sata",
      stem: "A 66-year-old man has newly diagnosed heart failure with an ejection fraction of 30 percent, blood pressure 124/76, potassium 4.2, and eGFR 58. Which drug classes belong in his guideline-directed medical therapy? Select all that apply.",
      options: ["An angiotensin receptor-neprilysin inhibitor (or ACE inhibitor or ARB)", "An evidence-based beta-blocker such as carvedilol, bisoprolol, or metoprolol succinate", "A mineralocorticoid receptor antagonist such as spironolactone", "An SGLT2 inhibitor such as dapagliflozin", "A dihydropyridine calcium channel blocker such as amlodipine", "An alpha-blocker such as doxazosin"],
      answer: [0, 1, 2, 3],
      rationale: "The four pillars of HFrEF therapy are renin-angiotensin blockade (preferably ARNI), an evidence-based beta-blocker, a mineralocorticoid receptor antagonist, and an SGLT2 inhibitor, each with independent mortality benefit. Amlodipine is the tempting distractor because it is safe in HFrEF for blood pressure control, but it confers no heart failure outcome benefit and is not part of GDMT, while alpha-blockers have been associated with worse heart failure outcomes.",
      difficulty: "core"
    },
    {
      id: "clinmgmt-006",
      type: "mcq",
      stem: "A 59-year-old woman with HFrEF (ejection fraction 32 percent) is euvolemic on lisinopril and furosemide. You plan to add a beta-blocker. Which principle should guide your prescribing?",
      options: ["Use carvedilol, bisoprolol, or metoprolol succinate, starting low and titrating slowly to target doses", "Use metoprolol tartrate because immediate-release dosing allows faster titration", "Start the beta-blocker at the full target dose to achieve mortality benefit immediately", "Avoid beta-blockers entirely until the ejection fraction normalizes"],
      answer: [0],
      rationale: "Only carvedilol, bisoprolol, and metoprolol succinate have randomized trial mortality evidence in HFrEF, and they must be started low in a stable, euvolemic patient and up-titrated every 2 weeks or more as tolerated. Metoprolol tartrate is the classic trap because it sounds interchangeable with succinate, but the short-acting formulation was not the preparation proven to reduce mortality in HFrEF trials.",
      difficulty: "advanced"
    },
    {
      id: "clinmgmt-007",
      type: "mcq",
      stem: "A 67-year-old man with COPD (FEV1 48 percent predicted) had two moderate exacerbations in the past year despite a LAMA alone. His blood eosinophil count is 380 cells per microliter. Per GOLD strategy, what is the most appropriate escalation?",
      options: ["Escalate to combination therapy that includes an inhaled corticosteroid along with LABA and LAMA, given his exacerbations and elevated eosinophils", "Add a short-acting beta-agonist scheduled four times daily", "Start chronic oral prednisone", "Add theophylline as the preferred next step"],
      answer: [0],
      rationale: "In a patient with repeated exacerbations despite long-acting bronchodilation, a blood eosinophil count of 300 or more predicts inhaled corticosteroid responsiveness, supporting escalation to triple therapy. Scheduled short-acting bronchodilators add no protection against exacerbations on top of long-acting agents, and chronic systemic steroids are avoided in stable COPD because harms outweigh benefit.",
      difficulty: "advanced"
    },
    {
      id: "clinmgmt-008",
      type: "mcq",
      stem: "A 28-year-old woman with asthma uses albuterol alone about three times weekly and was treated for an exacerbation 4 months ago. Following the GINA preferred track, what is the best regimen change?",
      options: ["Replace as-needed albuterol with as-needed low-dose inhaled corticosteroid-formoterol", "Continue albuterol alone since her symptoms are only intermittent", "Start a daily leukotriene receptor antagonist with as-needed albuterol", "Start a long-acting muscarinic antagonist as monotherapy"],
      answer: [0],
      rationale: "GINA no longer recommends short-acting beta-agonist-only treatment at any step because it leaves airway inflammation untreated and is associated with increased exacerbation and mortality risk; the preferred approach uses ICS-formoterol as the reliever so every symptom-driven dose delivers anti-inflammatory therapy. Continuing albuterol alone is the tempting status quo option, but her symptom frequency and recent exacerbation both mark her as undertreated.",
      difficulty: "core"
    },
    {
      id: "clinmgmt-009",
      type: "mcq",
      stem: "A healthy 34-year-old nonpregnant woman has dysuria, frequency, and urgency without fever, flank pain, or vaginal symptoms. Her eGFR is normal and she has no antibiotic allergies. Which regimen is a preferred first-line choice for her acute uncomplicated cystitis?",
      options: ["Nitrofurantoin monohydrate-macrocrystals for 5 days", "Ciprofloxacin for 7 days", "Amoxicillin for 10 days", "Azithromycin as a single dose"],
      answer: [0],
      rationale: "Nitrofurantoin for 5 days is a first-line IDSA option for uncomplicated cystitis, along with trimethoprim-sulfamethoxazole for 3 days and single-dose fosfomycin. Ciprofloxacin is the tempting distractor because it is highly effective, but fluoroquinolones are reserved for more serious infections given their collateral resistance and toxicity risks, and amoxicillin is not recommended empirically because of high E. coli resistance.",
      difficulty: "core"
    },
    {
      id: "clinmgmt-010",
      type: "mcq",
      stem: "A 45-year-old man with no chronic illnesses, no recent antibiotic use, and reliable follow-up is diagnosed with community-acquired pneumonia appropriate for outpatient care. Which empiric regimen aligns with ATS/IDSA guidance for a healthy outpatient?",
      options: ["High-dose amoxicillin or doxycycline", "Levofloxacin reserved as first-line for all outpatients", "Trimethoprim-sulfamethoxazole", "Cephalexin"],
      answer: [0],
      rationale: "For outpatients without comorbidities or risk factors for resistant organisms, amoxicillin or doxycycline monotherapy is recommended; macrolide monotherapy is conditional on low local pneumococcal resistance, which is uncommon in the United States. Levofloxacin is the tempting broad choice, but respiratory fluoroquinolones are reserved for patients with comorbidities or as an alternative, and cephalexin lacks adequate atypical and pneumococcal coverage positioning in CAP guidance.",
      difficulty: "advanced"
    },
    {
      id: "clinmgmt-011",
      type: "mcq",
      stem: "A 50-year-old woman has 2 days of spreading warmth, erythema, and tenderness of the lower leg without any abscess, fluctuance, or drainage. She is afebrile with stable vital signs and no MRSA risk factors. Which oral therapy is most appropriate?",
      options: ["Cephalexin targeting streptococci", "Trimethoprim-sulfamethoxazole alone", "Vancomycin intravenously", "Metronidazole"],
      answer: [0],
      rationale: "Nonpurulent cellulitis is overwhelmingly caused by beta-hemolytic streptococci, so a first-generation cephalosporin such as cephalexin is appropriate for mild disease. Trimethoprim-sulfamethoxazole is the tempting choice because of MRSA concern, but it has comparatively weak streptococcal reliability and MRSA coverage is indicated for purulent infections or specific risk factors, neither of which she has; intravenous therapy is unnecessary without systemic toxicity.",
      difficulty: "core"
    },
    {
      id: "clinmgmt-012",
      type: "mcq",
      stem: "A 26-year-old man has 2 days of sore throat, fever of 38.4 C, tonsillar exudates, tender anterior cervical nodes, and no cough. What is the most appropriate management approach?",
      options: ["Perform a rapid antigen test for group A streptococcus and treat with penicillin or amoxicillin only if testing is positive", "Treat empirically with amoxicillin based on the clinical score alone", "Treat empirically with azithromycin because it requires fewer doses", "Prescribe no testing and no antibiotics because adult pharyngitis is always viral"],
      answer: [0],
      rationale: "Even with a high Centor score, IDSA recommends microbiologic confirmation before antibiotics in adults because clinical features cannot reliably separate streptococcal from viral pharyngitis, and penicillin or amoxicillin remains first-line with no documented group A strep resistance. Empiric treatment on the score alone is the tempting shortcut, but it drives substantial unnecessary antibiotic exposure, and azithromycin is reserved for true penicillin allergy given macrolide resistance.",
      difficulty: "core"
    },
    {
      id: "clinmgmt-013",
      type: "mcq",
      stem: "A 66-year-old man had an ischemic stroke 6 months ago. He is not on lipid therapy; his LDL is 128 mg/dL and he has no contraindications to statins. Which regimen does ACC/AHA guidance support?",
      options: ["High-intensity statin therapy such as atorvastatin 40 to 80 mg daily", "Moderate-intensity statin therapy only if his 10-year risk score exceeds 20 percent", "Low-intensity statin to minimize side effects", "Fibrate monotherapy targeting triglycerides"],
      answer: [0],
      rationale: "An ischemic stroke is clinical ASCVD, so he warrants high-intensity statin therapy for secondary prevention without any need for risk calculation. Waiting on a 10-year risk score is the tempting error because risk calculators drive primary prevention decisions only; once ASCVD is established, the calculator no longer applies and high-intensity therapy is indicated for patients 75 and younger.",
      difficulty: "core"
    },
    {
      id: "clinmgmt-014",
      type: "sata",
      stem: "You are reviewing charts to identify patients with clear guideline-based indications for statin therapy. Which patients qualify as statin-benefit groups under ACC/AHA cholesterol guidance? Select all that apply.",
      options: ["A 58-year-old with chronic stable angina and prior coronary stenting", "A 44-year-old with an LDL cholesterol of 205 mg/dL", "A 55-year-old with type 2 diabetes and an LDL of 130 mg/dL", "A 62-year-old with no diabetes, LDL 140 mg/dL, and a 10-year ASCVD risk of 12 percent after risk discussion", "A 35-year-old with no risk factors and an LDL of 105 mg/dL", "An 80-year-old started solely because age alone mandates a statin"],
      answer: [0, 1, 2, 3],
      rationale: "The statin-benefit groups are clinical ASCVD, LDL of 190 or higher, diabetes in adults aged 40 to 75, and primary prevention patients aged 40 to 75 with elevated LDL and a 10-year risk of 7.5 percent or higher after a clinician-patient risk discussion. A young adult with LDL 105 and no risk factors has no indication, and advanced age by itself is not an automatic indication; in adults over 75, initiation is individualized.",
      difficulty: "advanced"
    },
    {
      id: "clinmgmt-015",
      type: "mcq",
      stem: "A 78-year-old woman with known coronary artery disease is diagnosed with overt hypothyroidism (TSH 24, low free T4). Which initiation strategy is safest?",
      options: ["Start levothyroxine at a low dose, such as 25 micrograms daily, and recheck TSH in about 6 to 8 weeks before titrating", "Start full weight-based replacement at 1.6 micrograms per kilogram daily", "Start liothyronine because it acts faster", "Recheck the TSH in 6 months before treating"],
      answer: [0],
      rationale: "In older adults and anyone with coronary disease, levothyroxine is started low and titrated slowly because abrupt increases in metabolic demand can precipitate angina or arrhythmia, and TSH re-equilibration takes about 6 weeks after any dose change. Full weight-based dosing is correct for young, healthy patients and is therefore the tempting answer, but it is specifically avoided in this population.",
      difficulty: "core"
    },
    {
      id: "clinmgmt-016",
      type: "mcq",
      stem: "A 41-year-old woman with a PHQ-9 score of 16 starts sertraline for a first episode of major depression. She returns at week 3 with partial improvement and asks how long she will need medication if she reaches remission. What is the best evidence-based counseling?",
      options: ["Continue the antidepressant for at least 4 to 9 months after achieving remission before considering a slow taper", "Stop the medication as soon as she feels well to minimize exposure", "Plan on lifelong therapy after any single episode", "Switch to an as-needed dosing schedule once symptoms improve"],
      answer: [0],
      rationale: "After a first episode responds, continuation-phase treatment for roughly 4 to 9 months at the effective dose substantially reduces relapse, followed by a gradual taper if discontinuing. Stopping at symptom resolution is the tempting patient-driven choice but carries a high relapse risk, while lifelong maintenance is generally reserved for recurrent or highly severe depression, not a single first episode; antidepressants are never dosed as needed.",
      difficulty: "core"
    },
    {
      id: "clinmgmt-017",
      type: "sata",
      stem: "A 56-year-old man presents with 3 weeks of low back pain. Which features in his history or exam would be red flags requiring urgent workup rather than conservative management? Select all that apply.",
      options: ["New urinary retention with saddle anesthesia", "A history of intravenous drug use with fever and focal spinal tenderness", "A history of prostate cancer with progressive night pain and weight loss", "Pain that radiates below the knee and worsens with prolonged sitting", "Paraspinal muscle tightness that improves with activity"],
      answer: [0, 1, 2],
      rationale: "Urinary retention with saddle anesthesia signals cauda equina syndrome, fever with IV drug use suggests vertebral osteomyelitis or epidural abscess, and a cancer history with constitutional symptoms raises metastatic disease; each requires urgent imaging and intervention. Radicular pain below the knee is the tempting distractor, but uncomplicated sciatica without neurologic deficit is managed conservatively at first, and mechanical muscular pain that improves with activity is benign.",
      difficulty: "core"
    },
    {
      id: "clinmgmt-018",
      type: "mcq",
      stem: "A 72-year-old woman with hypertension and diabetes is found to have atrial fibrillation. She has no valve disease and normal kidney function. Her CHA2DS2-VASc score is 5. Which antithrombotic plan is most appropriate?",
      options: ["A direct oral anticoagulant such as apixaban", "Aspirin 81 mg daily", "Warfarin as the preferred first choice in the absence of mechanical valve or significant mitral stenosis", "Clopidogrel plus aspirin"],
      answer: [0],
      rationale: "Her score far exceeds the anticoagulation threshold, and direct oral anticoagulants are preferred over warfarin for stroke prevention in atrial fibrillation unless the patient has a mechanical valve or moderate-to-severe mitral stenosis. Aspirin is the tempting low-burden option, but antiplatelet therapy provides inadequate stroke protection in AF and is no longer recommended as a substitute for anticoagulation.",
      difficulty: "core"
    },
    {
      id: "clinmgmt-019",
      type: "mcq",
      stem: "A 64-year-old man with diabetes has had eGFR values of 34 and 31 over 6 months, down from 52 one year ago, with a urine albumin-creatinine ratio of 650 mg/g despite maximally tolerated ARB and SGLT2 inhibitor therapy. What is the most appropriate next step?",
      options: ["Refer to nephrology for co-management given the rapid decline, severe albuminuria, and eGFR approaching 30", "Continue current management alone and recheck labs in 12 months", "Stop the ARB to protect the kidneys from further eGFR decline", "Order annual eGFR only, since albuminuria adds no prognostic value"],
      answer: [0],
      rationale: "Nephrology referral is indicated for eGFR below 30, severely increased albuminuria, or rapid progression, and this patient is approaching or meeting all three, making timely referral important for progression management and dialysis or transplant planning. Stopping the ARB is the tempting reflex when eGFR falls, but RAS blockade slows progression in proteinuric CKD and should generally be continued, and monitoring requires both eGFR and albuminuria because they carry independent prognostic weight.",
      difficulty: "advanced"
    },
    {
      id: "clinmgmt-020",
      type: "sata",
      stem: "A 58-year-old man who currently smokes with a 32 pack-year history presents to establish care. He has never had any screening. Which of the following are USPSTF grade A or B recommended screenings applicable to him now? Select all that apply.",
      options: ["Annual low-dose CT of the chest for lung cancer", "Colorectal cancer screening, such as colonoscopy or stool-based testing", "Screening for hypertension with office blood pressure measurement", "Hepatitis C screening at least once", "One-time abdominal aortic aneurysm ultrasound at his current age", "Routine PSA-based prostate screening without any discussion, as a universal grade A service"],
      answer: [0, 1, 2, 3],
      rationale: "He meets lung cancer screening criteria (age 50 to 80, at least 20 pack-years, currently smoking), colorectal screening applies to adults 45 to 75, blood pressure screening is grade A for all adults, and one-time hepatitis C screening is recommended for adults 18 to 79. The AAA ultrasound is the tempting near-miss because he is a male ever-smoker, but that one-time screen applies at ages 65 to 75, not 58, and PSA screening for men 55 to 69 is a grade C individualized shared decision, not a universal A or B service.",
      difficulty: "advanced"
    }
  ]
});
