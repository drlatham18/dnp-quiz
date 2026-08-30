window.CASE_DATA = window.CASE_DATA || [];
window.CASE_DATA.push({
  id: "case-01",
  title: "Fatigue That Was Not Deconditioning",
  intro: "A 62-year-old woman presents to the primary care clinic with six weeks of progressive fatigue and exertional dyspnea. She now sleeps on two pillows and stopped her evening walks. History: hypertension for 15 years, inconsistently treated. Vitals: BP 148/88, HR 96 regular, RR 18, SpO2 95 percent on room air, BMI 31. Exam: bibasilar crackles, jugular venous distention at 30 degrees, trace bilateral ankle edema, no murmur appreciated.",
  steps: [
    {
      update: "",
      stem: "Which initial diagnostic approach is most appropriate?",
      options: [
        "Reassure her that the symptoms reflect deconditioning and recommend a graded exercise program",
        "Obtain NT-proBNP, a 12-lead ECG, chest radiograph, and basic labs including TSH and a metabolic panel",
        "Order outpatient spirometry as the sole next test to evaluate for airway disease",
        "Start furosemide empirically and reassess in one month without further testing"
      ],
      answer: [1],
      rationale: "Orthopnea, crackles, JVD, and edema in a hypertensive patient raise strong suspicion for heart failure, and natriuretic peptide testing with ECG, chest radiograph, and labs is the guideline-supported initial workup. Empiric furosemide without establishing a diagnosis can mask findings and delay definitive evaluation, and it leaves the underlying etiology unaddressed."
    },
    {
      update: "Results return: NT-proBNP 2,400 pg/mL, ECG shows left ventricular hypertrophy without acute ischemic changes, chest radiograph shows pulmonary vascular congestion and mild cardiomegaly. Creatinine 1.0, potassium 4.2, TSH normal, hemoglobin 13.1.",
      stem: "What is the most appropriate next step?",
      options: [
        "Order a transthoracic echocardiogram to assess ejection fraction and structure",
        "Repeat the NT-proBNP in three months to confirm the trend",
        "Refer directly for coronary artery bypass evaluation",
        "Order a high-resolution chest CT to evaluate for pulmonary fibrosis"
      ],
      answer: [0],
      rationale: "A markedly elevated NT-proBNP with congestion on imaging supports heart failure, and transthoracic echocardiography is the essential next test because ejection fraction determines phenotype and drives therapy selection. Waiting three months to trend the biomarker delays treatment of symptomatic heart failure and adds no diagnostic value at this point."
    },
    {
      update: "Echocardiogram: left ventricular ejection fraction 30 percent, global hypokinesis, moderate LV dilation, no significant valvular disease. She remains congested but hemodynamically stable and prefers outpatient management.",
      stem: "Which management plan is most consistent with current heart failure guidelines?",
      options: [
        "Begin a loop diuretic for congestion and initiate low-dose guideline-directed medical therapy with a plan to establish all four pillar classes",
        "Start high-dose immediate-release metoprolol tartrate today to control heart rate",
        "Refer now for implantable cardioverter-defibrillator placement before starting medications",
        "Start verapamil for afterload reduction and blood pressure control"
      ],
      answer: [0],
      rationale: "HFrEF management pairs decongestion with early initiation of the four pillars: a RAAS inhibitor (preferably sacubitril-valsartan or an ACE inhibitor), an evidence-based beta blocker, a mineralocorticoid receptor antagonist, and an SGLT2 inhibitor, each started low and titrated. ICD referral is premature because candidacy is reassessed after at least three months of optimized therapy, and nondihydropyridine calcium channel blockers like verapamil are avoided in HFrEF because of negative inotropy."
    },
    {
      update: "Two weeks later she is on lisinopril 10 mg, carvedilol 6.25 mg twice daily, empagliflozin 10 mg, and furosemide 40 mg. Dyspnea and orthopnea are improved and she is nearly euvolemic. Labs: potassium 4.8, creatinine 1.1, eGFR 62.",
      stem: "What is the most appropriate next adjustment?",
      options: [
        "Stop empagliflozin because her glucose readings have been normal",
        "Add low-dose spironolactone with repeat potassium and renal function in one to two weeks",
        "Double the furosemide dose despite near-euvolemia to prevent recurrence",
        "Add scheduled ibuprofen for her knee osteoarthritis pain"
      ],
      answer: [1],
      rationale: "She tolerates three pillars with acceptable potassium and renal function, so adding the mineralocorticoid receptor antagonist completes the fourth pillar, with early lab recheck because hyperkalemia is the principal risk. Empagliflozin is indicated in HFrEF regardless of diabetes status, escalating diuretics in a euvolemic patient risks hypovolemia and azotemia, and NSAIDs promote sodium retention and worsen heart failure."
    },
    {
      update: "At three months she feels well, walks daily, and is titrating toward target doses. She asks what ongoing monitoring and prevention she needs.",
      stem: "Which elements belong in her longitudinal plan? Select all that apply.",
      options: [
        "Repeat echocardiogram after roughly three months of optimized therapy to reassess ejection fraction and defibrillator candidacy",
        "Daily home weights with a written action plan for a gain of more than 2 to 3 pounds in a day or 5 pounds in a week",
        "Influenza, pneumococcal, and COVID-19 vaccination per adult schedules",
        "Periodic electrolytes and renal function during ongoing titration",
        "Routine annual exercise stress testing in the absence of symptoms",
        "Planned discontinuation of all heart failure medications if the ejection fraction normalizes"
      ],
      answer: [0, 1, 2, 3],
      rationale: "Reassessing ejection fraction after optimization guides device decisions, daily weights with an action plan catch decompensation early, respiratory vaccinations reduce decompensation triggers, and lab surveillance is required during titration. Routine stress testing in asymptomatic heart failure is not guideline supported, and improved ejection fraction represents remission rather than cure, so withdrawing therapy risks relapse."
    }
  ]
});
window.CASE_DATA.push({
  id: "case-02",
  title: "Nine Years of Diabetes, New Kidney Signal",
  intro: "A 58-year-old man with type 2 diabetes for nine years presents for follow-up. Medications: metformin 1000 mg twice daily, glyburide 10 mg daily, amlodipine 10 mg daily. He reports one episode of shakiness and sweating last month relieved by juice. Vitals: BP 142/86, BMI 33. Labs: A1c 8.4 percent, eGFR 48, urine albumin-to-creatinine ratio 320 mg/g confirmed on a repeat specimen, potassium 4.4, LDL 118.",
  steps: [
    {
      update: "",
      stem: "How should the NP interpret his kidney findings?",
      options: [
        "Normal age-related decline requiring no change in management",
        "Chronic kidney disease G3a with severely increased albuminuria, a high-risk combination that should reshape his entire regimen",
        "Acute kidney injury requiring hospital admission today",
        "Isolated laboratory error given his lack of urinary symptoms"
      ],
      answer: [1],
      rationale: "An eGFR of 45 to 59 sustained with an albumin-to-creatinine ratio above 300 mg/g defines KDIGO category G3a A3, one of the highest-risk profiles for kidney failure progression and cardiovascular events, and it mandates a regimen overhaul. The findings are chronic and confirmed on repeat testing, so neither acute kidney injury nor lab error fits, and dismissing it as aging misses a treatable disease at a decisive window."
    },
    {
      update: "The NP begins restructuring his diabetes regimen, noting the recent hypoglycemic episode.",
      stem: "Which medication change is the highest priority?",
      options: [
        "Increase glyburide to improve the A1c toward target",
        "Stop metformin immediately because of the eGFR of 48",
        "Discontinue glyburide and add an SGLT2 inhibitor with proven kidney benefit",
        "Add a thiazolidinedione for insulin resistance"
      ],
      answer: [2],
      rationale: "SGLT2 inhibitors slow CKD progression and reduce cardiovascular events in diabetic kidney disease and are recommended by ADA and KDIGO at this eGFR, while glyburide should be stopped because long-acting sulfonylureas accumulate in renal impairment and he is already experiencing hypoglycemia. Stopping metformin is the tempting reflex, but metformin may continue at reduced or current dosing until eGFR falls below 30, with review below 45."
    },
    {
      update: "His blood pressure remains 140/88 on amlodipine alone at a follow-up visit. Repeat urine albumin-to-creatinine ratio remains over 300 mg/g.",
      stem: "What is the best next step for blood pressure and kidney protection?",
      options: [
        "Add a maximally titrated angiotensin receptor blocker or ACE inhibitor",
        "Add a second dihydropyridine calcium channel blocker",
        "Combine an ACE inhibitor plus an angiotensin receptor blocker together for stronger effect",
        "Accept the current blood pressure since it is below 150/90"
      ],
      answer: [0],
      rationale: "Renin-angiotensin system blockade titrated to the maximally tolerated dose is first-line in diabetes with severely increased albuminuria because it reduces intraglomerular pressure and slows progression. Dual ACE inhibitor plus ARB therapy is the classic trap: it increases hyperkalemia and acute kidney injury without outcome benefit and is contraindicated. His pressure also exceeds the intensive targets recommended for high-risk CKD."
    },
    {
      update: "Four weeks after starting losartan and empagliflozin, labs show creatinine increased 18 percent from baseline, potassium 4.9, and he feels well with no orthostatic symptoms. Home BP averages 128/78.",
      stem: "How should the NP respond to the creatinine rise?",
      options: [
        "Stop both new medications permanently as evidence of drug-induced kidney injury",
        "Continue both medications and recheck labs in two to four weeks, recognizing an expected hemodynamic effect",
        "Refer emergently to the hospital for dialysis evaluation",
        "Halve the metformin and stop the losartan only"
      ],
      answer: [1],
      rationale: "A creatinine rise under 30 percent after starting RAAS blockade or an SGLT2 inhibitor reflects a hemodynamic reduction in intraglomerular pressure, which is the mechanism of long-term protection, so therapy continues with surveillance. Stopping the medications forfeits proven kidney and cardiovascular benefit; the rise is expected, potassium remains acceptable, and nothing suggests a need for dialysis evaluation."
    },
    {
      update: "At three months: A1c 7.4 percent, BP 126/76, eGFR stable at 46, albuminuria improved but still 240 mg/g on maximally tolerated losartan. He asks what else his long-term plan should include.",
      stem: "Which elements belong in his ongoing comprehensive plan? Select all that apply.",
      options: [
        "Moderate- to high-intensity statin therapy for cardiovascular risk reduction",
        "Annual dilated retinal examination",
        "Scheduled potassium, creatinine, and eGFR monitoring",
        "Consideration of finerenone for residual albuminuria despite maximized RAAS blockade",
        "Scheduled daily NSAID therapy for chronic knee pain",
        "A very-low-protein diet of 0.4 g per kilogram per day"
      ],
      answer: [0, 1, 2, 3],
      rationale: "Statin therapy, retinal surveillance, lab monitoring, and finerenone for persistent albuminuria on maximized RAAS blockade are all consistent with current ADA and KDIGO recommendations for diabetic kidney disease. Scheduled NSAIDs are nephrotoxic and inappropriate in CKD, and very-low-protein diets below 0.6 g per kilogram risk malnutrition and are not recommended; moderate restriction around 0.8 g per kilogram is the accepted level."
    }
  ]
});
window.CASE_DATA.push({
  id: "case-03",
  title: "The Fall at Two in the Morning",
  intro: "An 82-year-old woman presents two days after falling on the way to the bathroom at 2 AM. No loss of consciousness, no head strike, sore left hip with full range of motion, ambulating with pain. Medications: lorazepam 1 mg nightly for sleep, amitriptyline 50 mg nightly for neuropathic pain, hydrochlorothiazide 25 mg, lisinopril 20 mg, diphenhydramine as needed for allergies most nights, and metformin 500 mg twice daily. Seated BP 138/78, HR 76. She lives alone. She is not on anticoagulation.",
  steps: [
    {
      update: "",
      stem: "What is the most appropriate initial evaluation?",
      options: [
        "Order a head CT reflexively as required for any fall in an older adult",
        "Advise her that occasional falls are a normal part of aging and no workup is needed",
        "Obtain orthostatic vital signs, perform a structured medication review, and assess gait with a timed mobility test",
        "Recommend she restrict activity to her bed and chair to prevent further falls"
      ],
      answer: [2],
      rationale: "A fall evaluation in an older adult centers on orthostatic vitals, a deliberate medication review, and direct gait and balance assessment such as the Timed Up and Go, because these identify the modifiable causes. Head CT is the tempting reflex, but without head strike, loss of consciousness, anticoagulation, or neurologic findings it is not automatically indicated. Activity restriction accelerates deconditioning and paradoxically increases fall risk."
    },
    {
      update: "Orthostatic testing: BP falls from 138/78 seated to 112/64 standing with lightheadedness. Timed Up and Go is 16 seconds. The medication review flags lorazepam, amitriptyline, and diphenhydramine as Beers Criteria drugs, and the 2 AM fall occurred hours after her lorazepam dose.",
      stem: "Which action best addresses the benzodiazepine?",
      options: [
        "Stop lorazepam abruptly today given the clear fall risk",
        "Begin a gradual lorazepam taper with a planned schedule and substitute cognitive behavioral strategies for insomnia",
        "Continue lorazepam unchanged and add fludrocortisone for the orthostasis",
        "Switch lorazepam to nightly zolpidem as a safer alternative"
      ],
      answer: [1],
      rationale: "Benzodiazepines roughly double fall and fracture risk in older adults and this fall is temporally linked to dosing, but after chronic nightly use abrupt discontinuation risks rebound insomnia, agitation, and withdrawal seizures, so a gradual taper paired with CBT for insomnia is correct. Zolpidem is the tempting swap, yet Z-drugs carry comparable fall and fracture risk and are also Beers-listed."
    },
    {
      update: "The taper is underway and she is receptive to further changes. She asks about her other medications.",
      stem: "Which additional deprescribing change is the highest priority?",
      options: [
        "Discontinue metformin because of her age alone",
        "Stop lisinopril while continuing the anticholinergics",
        "Add donepezil to counteract sedation from her other medications",
        "Taper the amitriptyline and stop routine diphenhydramine because of their combined anticholinergic burden"
      ],
      answer: [3],
      rationale: "Amitriptyline and diphenhydramine are both strongly anticholinergic Beers Criteria drugs that cause sedation, orthostasis, confusion, and falls, and their cumulative burden makes them the next priority, with alternative neuropathic pain and allergy options available. Age alone is not an indication to stop metformin, and lisinopril is not the offender; the hydrochlorothiazide contributing to orthostasis is a more logical antihypertensive to reconsider than the ACE inhibitor."
    },
    {
      update: "Her orthostatic symptoms improve after hydrochlorothiazide is stopped, with home BP averaging 132/76 on lisinopril alone. She remains fearful of falling again at night.",
      stem: "Which referral most effectively reduces her future fall risk?",
      options: [
        "Physical therapy for progressive gait, strength, and balance training plus a home hazard assessment",
        "Massage therapy for relaxation before bedtime",
        "A pain management clinic for consideration of opioid therapy",
        "Custom orthotics as the primary fall-prevention strategy"
      ],
      answer: [0],
      rationale: "Structured exercise emphasizing balance and strength is the single best-evidenced fall-prevention intervention, and combining it with home hazard modification addresses the nighttime environment where she fell. Opioids markedly increase fall and fracture risk in older adults, and neither massage nor orthotics alone has comparable evidence for fall reduction."
    },
    {
      update: "Six weeks later she has completed the lorazepam taper, sleeps adequately using CBT-informed strategies, and has had no further falls. Timed Up and Go is now 12 seconds.",
      stem: "Which elements belong in her ongoing fall-prevention plan? Select all that apply.",
      options: [
        "Medication review for fall-risk drugs at every visit",
        "Annual vision examination and updated eyeglass prescription",
        "Repeat orthostatic vital signs and fall-risk reassessment periodically",
        "Footwear assessment favoring low-heeled, nonslip, well-fitting shoes",
        "Resuming nightly diphenhydramine now that she is stronger",
        "Encouraging her to stay in bed if she wakes at night rather than walking to the bathroom"
      ],
      answer: [0, 1, 2, 3],
      rationale: "Ongoing medication review, vision correction, periodic orthostatic and fall-risk reassessment, and proper footwear are core components of multifactorial fall prevention in guidelines for older adults. Resuming a sedating anticholinergic would reintroduce the original hazard, and telling her to suppress nighttime toileting is neither realistic nor safe; a lighted path and bedside commode are the appropriate answers to nocturia-related falls."
    }
  ]
});
window.CASE_DATA.push({
  id: "case-04",
  title: "A PHQ-9 With a Flag on Item Nine",
  intro: "A 24-year-old man presents with three months of low mood, anhedonia, poor concentration at his new job, and early-morning awakening. PHQ-9 score is 16, with item 9 scored 1, indicating thoughts that he would be better off dead on several days. He has no prior psychiatric treatment, drinks socially, and denies substance use. Vitals normal. He came in because his sister urged him to.",
  steps: [
    {
      update: "",
      stem: "Given the positive item 9, what should the NP do next?",
      options: [
        "Send him to the emergency department immediately based on the item 9 score alone",
        "Administer a structured suicide risk assessment such as the Columbia Suicide Severity Rating Scale to characterize ideation, plan, intent, and behavior",
        "Start an antidepressant today and schedule follow-up in three months",
        "Reassure him that passive thoughts are common and require no further exploration"
      ],
      answer: [1],
      rationale: "A positive PHQ-9 item 9 is a screening flag, not a disposition, and the required next step is a structured assessment such as the C-SSRS to distinguish passive ideation from active ideation with method, intent, or recent behavior. Automatic emergency department referral for every positive item 9 is the tempting overcorrection, but it is not indicated without active ideation or intent and can erode trust; failing to explore the thoughts at all is negligent."
    },
    {
      update: "The Columbia assessment reveals passive ideation without a plan, method, intent, or preparatory behavior, and no prior attempts. He owns no firearms but keeps a large bottle of acetaminophen at home. He is willing to engage in care.",
      stem: "What is the most appropriate risk-management approach?",
      options: [
        "Have him sign a no-suicide contract before leaving the clinic",
        "Initiate an involuntary psychiatric hold given any ideation",
        "Collaboratively complete a written safety plan, counsel on restricting access to lethal means including the acetaminophen supply, and begin outpatient treatment",
        "Defer all treatment until he can see a psychiatrist in eight weeks"
      ],
      answer: [2],
      rationale: "For passive ideation without plan or intent in an engaged patient, evidence supports outpatient management with a collaborative safety plan and lethal-means counseling, which reduce suicidal behavior. No-suicide contracts are the tempting traditional distractor but lack evidence and may provide false reassurance, while involuntary commitment is neither justified nor lawful for passive ideation alone, and deferring treatment for two months leaves a moderately severe depression untreated during a risk window."
    },
    {
      update: "He agrees to begin treatment. He asks what the plan will look like.",
      stem: "Which initial treatment plan is most appropriate for moderately severe major depression in a 24-year-old?",
      options: [
        "Start an SSRI such as sertraline, refer for evidence-based psychotherapy, and schedule follow-up within one to two weeks given his age",
        "Prescribe alprazolam for distress while deciding on longer-term options",
        "Recommend exercise alone and reassess in three months",
        "Begin a tricyclic antidepressant as first-line therapy"
      ],
      answer: [0],
      rationale: "Combined SSRI plus psychotherapy outperforms either alone for moderately severe depression, and because he is under 25, boxed-warning guidance calls for early follow-up within one to two weeks to monitor for emergent suicidality and activation. Exercise alone is inadequate monotherapy at a PHQ-9 of 16 with positive item 9, benzodiazepines do not treat depression and carry misuse risk, and tricyclics are not first-line given their toxicity in overdose for a patient with any suicidal ideation."
    },
    {
      update: "Ten days after starting sertraline 50 mg he calls: he has noticeably more energy but his mood is unchanged, and he feels restless and on edge at night. His sister thinks he seems agitated.",
      stem: "How should the NP interpret and act on this report?",
      options: [
        "Congratulate him on early response and advance the follow-up to one month",
        "Recognize a high-risk pattern of increased energy with persistent depressed mood, and reassess suicidal ideation and possible activation or akathisia promptly, ideally the same day",
        "Double the sertraline dose by phone to accelerate mood response",
        "Instruct him to stop the sertraline abruptly and remain off all medication"
      ],
      answer: [1],
      rationale: "Energy and activation often improve before mood, creating a window in which a still-depressed patient gains the drive to act on suicidal thoughts, and new restlessness raises concern for activation or akathisia; this warrants prompt live reassessment of ideation and the safety plan. Interpreting the change as simple early response is the dangerous distractor. Raising the dose could worsen activation, and abrupt discontinuation is unwarranted and destabilizing."
    },
    {
      update: "After a same-day visit, the restlessness is judged mild akathisia-like activation without suicidal ideation; the dose is held steady and it resolves over a week. At six weeks, PHQ-9 is 10, he attends therapy biweekly, sleeps better, and tolerates sertraline 50 mg without side effects.",
      stem: "What is the most appropriate next step in measurement-based care?",
      options: [
        "Discontinue sertraline since the score has improved",
        "Switch to a different antidepressant class for inadequate response",
        "Add a second antidepressant as augmentation now",
        "Titrate sertraline toward a therapeutic target dose and repeat the PHQ-9 in about four weeks"
      ],
      answer: [3],
      rationale: "A drop from 16 to 10 is a partial response, and measurement-based care calls for optimizing the current well-tolerated drug by dose titration before switching or augmenting, since 50 mg is a starting dose with room to titrate. Switching classes is the tempting premature move reserved for no response or intolerance at adequate dose and duration, and stopping treatment during partial remission invites relapse; continuation for at least six to twelve months after remission is standard."
    }
  ]
});
window.CASE_DATA.push({
  id: "case-05",
  title: "Breathless and Panicked",
  intro: "A 66-year-old woman with COPD presents with three days of worsening dyspnea, increased sputum volume, and a change to purulent yellow-green sputum. She currently uses only an albuterol inhaler as needed and smokes half a pack daily. She appears anxious and says she felt sure she was suffocating last night. Vitals: RR 24, HR 98, SpO2 91 percent on room air, afebrile, BP 138/84. She speaks in full sentences, uses no accessory muscles, and is alert with scattered expiratory wheezes.",
  steps: [
    {
      update: "",
      stem: "What is the most appropriate initial disposition decision?",
      options: [
        "Arrange immediate ambulance transport for intubation",
        "Prescribe only a benzodiazepine because anxiety is driving the presentation",
        "Manage the exacerbation as an outpatient with intensified bronchodilators, explicit return precautions, and planned reassessment within 24 to 48 hours",
        "Defer all treatment until pulmonary function testing can be completed this week"
      ],
      answer: [2],
      rationale: "She has a moderate exacerbation without respiratory failure markers: she speaks in full sentences, uses no accessory muscles, is alert, and maintains saturation of 91 percent, so outpatient management with close reassessment is appropriate. Attributing the episode to anxiety alone is the dangerous distractor because her sputum changes and dyspnea indicate a true exacerbation, and spirometry is never performed during an acute exacerbation."
    },
    {
      update: "The NP proceeds with outpatient exacerbation treatment. She reports all three cardinal symptoms: increased dyspnea, increased sputum volume, and new purulence.",
      stem: "Which pharmacologic regimen is most consistent with GOLD recommendations?",
      options: [
        "A 14-day prednisone course with a prolonged taper and no antibiotic",
        "Increased short-acting bronchodilator use, prednisone 40 mg daily for five days, and an oral antibiotic given the increased purulence and volume of sputum",
        "An inhaled corticosteroid alone in place of systemic steroids",
        "Nebulized hypertonic saline as the primary therapy"
      ],
      answer: [1],
      rationale: "GOLD recommends short-acting bronchodilators, systemic corticosteroids at 40 mg prednisone-equivalent for five days, and antibiotics when all three cardinal symptoms are present or when purulence accompanies one other cardinal symptom. The prolonged 14-day tapering course is the tempting traditional distractor, but five days without taper is equally effective with less cumulative steroid exposure, and an inhaled corticosteroid cannot substitute for systemic therapy in an acute exacerbation."
    },
    {
      update: "At 48-hour follow-up she is breathing more easily and sputum is clearing. She confides that during the worst night she took two of her husband's lorazepam tablets and asks for her own prescription because the attacks of panic keep happening. GAD-7 score is 14.",
      stem: "How should the NP address the anxiety?",
      options: [
        "Prescribe scheduled lorazepam since it clearly helped her that night",
        "Tell her anxiety treatment must wait until the COPD is cured",
        "Recommend she continue borrowing her husband's medication sparingly",
        "Counsel that benzodiazepines can suppress respiratory drive in COPD, and instead offer an SSRI, referral for cognitive behavioral therapy, and breathing retraining through pulmonary rehabilitation"
      ],
      answer: [3],
      rationale: "Benzodiazepines blunt hypoxic and hypercapnic respiratory drive and are associated with exacerbations and mortality in COPD, so first-line management of comorbid anxiety is an SSRI plus CBT, and pulmonary rehabilitation itself reduces both dyspnea and anxiety. Prescribing the drug that gave short-term relief is the tempting distractor, and endorsing borrowed medication is unsafe on every level. The dyspnea-panic cycle is treatable now, not after the COPD resolves."
    },
    {
      update: "Two weeks later she has recovered to baseline. Blood eosinophils drawn during the visit are 150 cells per microliter. She remains on albuterol as needed only, and this was her first documented exacerbation, which required systemic steroids.",
      stem: "What maintenance regimen change is most appropriate?",
      options: [
        "Initiate a combination LABA-LAMA maintenance inhaler",
        "Start inhaled corticosteroid monotherapy",
        "Begin chronic low-dose oral prednisone for prevention",
        "Continue albuterol as needed alone since she has recovered"
      ],
      answer: [0],
      rationale: "A patient with an exacerbation on rescue therapy alone needs maintenance treatment, and GOLD recommends dual long-acting bronchodilation with a LABA-LAMA combination for most such patients; her eosinophil count of 150 does not meet the threshold that would favor adding an inhaled corticosteroid at this point. ICS monotherapy is never recommended in COPD, chronic oral steroids cause substantial harm without preventive benefit, and returning to rescue-only therapy invites another exacerbation."
    },
    {
      update: "She starts the new inhaler and asks what else she can do to stay out of the emergency room and feel less afraid of her breathing.",
      stem: "Which interventions belong in her comprehensive plan? Select all that apply.",
      options: [
        "Referral to pulmonary rehabilitation",
        "Smoking cessation support combining behavioral counseling with pharmacotherapy",
        "Influenza, pneumococcal, and COVID-19 vaccination",
        "Inhaler technique verification at each visit with a written COPD action plan",
        "A scheduled nightly benzodiazepine for sleep and anxiety",
        "Long-term daily oral corticosteroids to prevent future exacerbations"
      ],
      answer: [0, 1, 2, 3],
      rationale: "Pulmonary rehabilitation, smoking cessation with combined behavioral and pharmacologic support, respiratory vaccinations, and verified inhaler technique with an action plan are all guideline-endorsed interventions that reduce exacerbations, and rehabilitation additionally treats her anxiety-dyspnea cycle. Scheduled benzodiazepines carry the respiratory risks already discussed, and chronic oral corticosteroids are explicitly recommended against in stable COPD because harms outweigh any benefit."
    }
  ]
});
