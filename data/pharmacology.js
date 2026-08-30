window.QUIZ_DATA = window.QUIZ_DATA || [];
window.QUIZ_DATA.push({
  topic: "Advanced Pharmacology",
  slug: "pharm",
  questions: [
    {
      id: "pharm-001",
      type: "mcq",
      stem: "An 82-year-old woman with nonvalvular atrial fibrillation weighs 58 kg and has a serum creatinine of 1.6 mg/dL. The NP is initiating apixaban. Which regimen is most appropriate?",
      options: ["Apixaban 5 mg twice daily", "Apixaban 2.5 mg twice daily", "Apixaban 10 mg once daily", "Apixaban 5 mg once daily"],
      answer: [1],
      rationale: "She meets all three dose-reduction criteria (age 80 or older, weight 60 kg or less, creatinine 1.5 mg/dL or higher); meeting at least two of the three mandates 2.5 mg twice daily. The standard 5 mg twice daily dose is the most tempting distractor but would expose this frail patient to excess bleeding risk, and once-daily dosing does not match the pharmacokinetics of apixaban.",
      difficulty: "core"
    },
    {
      id: "pharm-002",
      type: "mcq",
      stem: "A 68-year-old man on simvastatin 40 mg daily needs a macrolide for atypical pneumonia coverage. Which prescribing decision best avoids a clinically significant drug interaction?",
      options: ["Prescribe clarithromycin and continue simvastatin at the current dose", "Prescribe azithromycin, which has minimal CYP3A4 inhibition", "Prescribe clarithromycin and double the simvastatin dose", "Prescribe clarithromycin and monitor liver enzymes weekly"],
      answer: [1],
      rationale: "Clarithromycin is a strong CYP3A4 inhibitor and is contraindicated with simvastatin because it markedly raises statin levels and the risk of rhabdomyolysis; azithromycin does not meaningfully inhibit CYP3A4 and is the safer macrolide. Monitoring liver enzymes is a tempting distractor, but it neither prevents nor reliably detects impending muscle toxicity from the interaction.",
      difficulty: "advanced"
    },
    {
      id: "pharm-003",
      type: "mcq",
      stem: "A 74-year-old man stabilized on warfarin (INR 2.4) is prescribed trimethoprim-sulfamethoxazole for a urinary tract infection. What is the most likely consequence the NP should anticipate?",
      options: ["Decreased INR from accelerated warfarin metabolism", "No interaction because the drugs use different elimination pathways", "Elevated INR and increased bleeding risk from CYP2C9 inhibition", "Warfarin resistance requiring a higher maintenance dose"],
      answer: [2],
      rationale: "Trimethoprim-sulfamethoxazole inhibits CYP2C9, the enzyme that metabolizes the more potent S-enantiomer of warfarin, and it also displaces warfarin from albumin, so the INR typically rises substantially within days. The idea that different pathways prevent interaction is the tempting distractor; in reality this is one of the highest-risk warfarin combinations and usually requires an alternative antibiotic or close INR monitoring with dose reduction.",
      difficulty: "core"
    },
    {
      id: "pharm-004",
      type: "sata",
      stem: "An 80-year-old woman presents for a medication review. According to the Beers Criteria, which of the following medications on her list are potentially inappropriate and should be targeted for deprescribing? Select all that apply.",
      options: ["Diphenhydramine taken nightly for sleep", "Glyburide for type 2 diabetes", "Diazepam for chronic anxiety", "Acetaminophen for osteoarthritis pain", "Apixaban for atrial fibrillation", "Amitriptyline for neuropathic pain"],
      answer: [0, 1, 2, 5],
      rationale: "Diphenhydramine and amitriptyline are strongly anticholinergic and increase confusion, falls, and urinary retention; glyburide causes prolonged hypoglycemia in older adults; and diazepam is a long-acting benzodiazepine linked to falls, fractures, and cognitive impairment. Acetaminophen is actually the preferred first-line analgesic for osteoarthritis in older adults, and apixaban remains guideline-supported for stroke prevention, so neither should be removed.",
      difficulty: "core"
    },
    {
      id: "pharm-005",
      type: "mcq",
      stem: "A 66-year-old man with type 2 diabetes (A1c 7.8 percent), heart failure with reduced ejection fraction, and eGFR 48 mL/min/1.73m2 is on metformin. Per current ADA Standards of Care, which agent should the NP add for its cardiovascular and renal outcome benefits?",
      options: ["Glipizide", "Sitagliptin", "Empagliflozin", "Insulin glargine"],
      answer: [2],
      rationale: "SGLT2 inhibitors such as empagliflozin reduce heart failure hospitalizations and slow CKD progression, and the ADA recommends them in patients with HFrEF or CKD independent of the A1c or metformin use. Sitagliptin is the tempting distractor because it is well tolerated, but DPP-4 inhibitors are cardiovascular-neutral and saxagliptin has been associated with increased heart failure hospitalization; sulfonylureas and basal insulin lower glucose without outcome benefit.",
      difficulty: "advanced"
    },
    {
      id: "pharm-006",
      type: "mcq",
      stem: "The NP is considering semaglutide for a 52-year-old woman with type 2 diabetes and obesity. Which history finding is a contraindication to starting this agent?",
      options: ["Family history of medullary thyroid carcinoma", "History of cholecystectomy", "Well-controlled hypertension", "Background diabetic retinopathy without prior treatment"],
      answer: [0],
      rationale: "GLP-1 receptor agonists carry a boxed warning and are contraindicated with a personal or family history of medullary thyroid carcinoma or MEN2, based on rodent C-cell tumor data. Retinopathy is the tempting distractor because rapid A1c lowering with semaglutide can transiently worsen retinopathy, warranting monitoring, but it is a precaution rather than a contraindication; prior cholecystectomy actually removes gallbladder-related risk.",
      difficulty: "core"
    },
    {
      id: "pharm-007",
      type: "mcq",
      stem: "A 71-year-old woman with type 2 diabetes on metformin 1000 mg twice daily has a new eGFR of 25 mL/min/1.73m2, confirmed on repeat testing. What is the most appropriate action?",
      options: ["Continue the current dose with quarterly monitoring", "Reduce metformin to 500 mg twice daily", "Discontinue metformin", "Add a vitamin B12 supplement and continue metformin"],
      answer: [2],
      rationale: "Metformin is contraindicated when eGFR falls below 30 because impaired renal clearance raises the risk of lactic acidosis; discontinuation is required. Dose reduction is the tempting distractor because it is appropriate in the 30 to 45 range, but it is insufficient once eGFR is below 30. B12 monitoring addresses a real long-term effect of metformin but does not solve the safety problem.",
      difficulty: "advanced"
    },
    {
      id: "pharm-008",
      type: "mcq",
      stem: "A 29-year-old woman on lisinopril for chronic hypertension presents at 8 weeks gestation. What is the most appropriate prescribing action?",
      options: ["Continue lisinopril with monthly renal panels", "Discontinue lisinopril and start labetalol", "Reduce the lisinopril dose by half", "Discontinue lisinopril and start losartan"],
      answer: [1],
      rationale: "ACE inhibitors cause fetal renal dysgenesis, oligohydramnios, and skeletal defects and must be stopped in pregnancy; labetalol is a first-line antihypertensive in pregnancy along with nifedipine and methyldopa. Losartan is the tempting distractor because it is a different class, but ARBs share the same fetal renin-angiotensin toxicity and are equally contraindicated.",
      difficulty: "core"
    },
    {
      id: "pharm-009",
      type: "sata",
      stem: "A 70-year-old man with stage 3 CKD has a potassium of 5.6 mEq/L. Which medications on his list are most likely contributing to the hyperkalemia? Select all that apply.",
      options: ["Spironolactone", "Amlodipine", "Trimethoprim-sulfamethoxazole", "Furosemide", "Lisinopril", "Ibuprofen"],
      answer: [0, 2, 4, 5],
      rationale: "Spironolactone blocks aldosterone, lisinopril reduces aldosterone production, trimethoprim acts like amiloride in the distal nephron to block potassium secretion, and NSAIDs suppress renin release; all four raise serum potassium, especially in CKD. Furosemide is the tempting distractor because it is also a diuretic, but loop diuretics waste potassium and would lower it; amlodipine has no meaningful effect on potassium handling.",
      difficulty: "advanced"
    },
    {
      id: "pharm-010",
      type: "mcq",
      stem: "A 58-year-old Black man with stage 2 hypertension (152/96), no diabetes, no CKD, and no heart failure needs initial pharmacotherapy. Per ACC/AHA guidance, which single agent is the best first choice?",
      options: ["Lisinopril", "Metoprolol succinate", "Amlodipine", "Clonidine"],
      answer: [2],
      rationale: "For Black adults without heart failure or CKD, thiazide-type diuretics and calcium channel blockers produce better blood pressure response and outcomes as initial monotherapy, so amlodipine is the best listed option. Lisinopril is the tempting distractor because ACE inhibitors are first-line in the general population, but as monotherapy they are less effective in this group; beta-blockers and central agonists are not first-line for uncomplicated hypertension.",
      difficulty: "core"
    },
    {
      id: "pharm-011",
      type: "mcq",
      stem: "A 62-year-old man is discharged after a non-ST-elevation myocardial infarction. Which statin regimen is most appropriate for secondary prevention?",
      options: ["Atorvastatin 80 mg daily", "Pravastatin 20 mg daily", "Simvastatin 10 mg daily", "Rosuvastatin 5 mg daily"],
      answer: [0],
      rationale: "Patients 75 or younger with clinical ASCVD should receive high-intensity statin therapy, meaning atorvastatin 40 to 80 mg or rosuvastatin 20 to 40 mg, aiming for at least a 50 percent LDL reduction. Rosuvastatin 5 mg is the tempting distractor because rosuvastatin is a potent molecule, but 5 mg is only moderate intensity; the pravastatin and simvastatin doses listed are low to moderate intensity and inadequate after an MI.",
      difficulty: "advanced"
    },
    {
      id: "pharm-012",
      type: "mcq",
      stem: "A 60-year-old woman with hypothyroidism has a persistently elevated TSH despite adherence to levothyroxine each morning. She also takes calcium carbonate with breakfast for osteoporosis prevention. What is the best counseling point?",
      options: ["Take both medications together to improve adherence", "Separate levothyroxine and calcium by at least 4 hours", "Switch levothyroxine to bedtime dosing taken with the calcium", "Double the levothyroxine dose and recheck TSH in one week"],
      answer: [1],
      rationale: "Calcium, iron, and other polyvalent cations chelate levothyroxine in the gut and can substantially reduce absorption, so doses should be separated by at least 4 hours; levothyroxine is best taken on an empty stomach. Doubling the dose is the tempting distractor because the TSH is high, but it treats a malabsorption problem with escalation and risks iatrogenic thyrotoxicosis once the interaction is corrected; TSH also takes about 6 weeks, not 1 week, to reflect a change.",
      difficulty: "core"
    },
    {
      id: "pharm-013",
      type: "mcq",
      stem: "A 45-year-old woman on sertraline 100 mg daily requests analgesia for acute low back pain, and a colleague suggests tramadol. What is the primary pharmacologic concern with this combination?",
      options: ["Additive QT prolongation requiring an urgent ECG", "Serotonin syndrome from combined serotonergic activity", "Complete loss of tramadol analgesia via CYP2D6 induction", "Opioid withdrawal precipitated by sertraline"],
      answer: [1],
      rationale: "Tramadol inhibits serotonin and norepinephrine reuptake in addition to its opioid activity, so combining it with an SSRI raises the risk of serotonin syndrome and also lowers the seizure threshold. The CYP2D6 option is the tempting distractor because sertraline does inhibit (not induce) CYP2D6 and can reduce conversion of tramadol to its active opioid metabolite, blunting analgesia somewhat, but the dangerous, decision-driving interaction is serotonin toxicity.",
      difficulty: "advanced"
    },
    {
      id: "pharm-014",
      type: "mcq",
      stem: "A 55-year-old man with chronic pain is maintained on oxycodone totaling 60 morphine milligram equivalents per day and also takes clonazepam nightly. Per CDC opioid prescribing guidance, which action is most strongly indicated at this visit?",
      options: ["Offer a naloxone prescription and educate the household on its use", "Add carisoprodol for muscle spasm", "Switch oxycodone to an equivalent fentanyl patch for convenience", "Stop the opioid abruptly to eliminate overdose risk"],
      answer: [0],
      rationale: "Concurrent benzodiazepine use and a dose of 50 MME per day or more are each independent triggers to offer naloxone, and this patient has both. Abrupt discontinuation is the tempting distractor because reducing exposure sounds protective, but sudden cessation in a physically dependent patient causes withdrawal and is associated with overdose and suicide risk; tapering, when indicated, must be gradual and collaborative.",
      difficulty: "core"
    },
    {
      id: "pharm-015",
      type: "sata",
      stem: "A 36-year-old woman requests a combined oral contraceptive. Which findings in her history make combined hormonal contraception unacceptable or high risk under the US Medical Eligibility Criteria? Select all that apply.",
      options: ["Migraine with aura", "Well-controlled hypothyroidism on levothyroxine", "Prior unprovoked deep vein thrombosis", "Family history of breast cancer in a maternal aunt", "Smoking 20 cigarettes per day at age 36", "Blood pressure of 165/105 on repeated measurement"],
      answer: [0, 2, 4, 5],
      rationale: "Estrogen-containing contraception is category 4 (unacceptable risk) with migraine with aura, a history of unprovoked VTE, and smoking 15 or more cigarettes daily at age 35 or older, and severe hypertension of 160/100 or higher is also category 4; the shared mechanism is estrogen-driven thrombotic and vascular risk. Family history of breast cancer is the tempting distractor, but it is category 1 and does not restrict use, and treated hypothyroidism is not a contraindication.",
      difficulty: "core"
    },
    {
      id: "pharm-016",
      type: "mcq",
      stem: "An 84-year-old nursing home resident has 100,000 CFU/mL of E. coli on a urine culture obtained during a routine evaluation. She is afebrile, alert at her baseline, and has no urinary symptoms. What is the most appropriate management?",
      options: ["Ciprofloxacin for 7 days", "Nitrofurantoin for 5 days", "No antibiotics; this is asymptomatic bacteriuria", "Single-dose fosfomycin now with a repeat culture in 2 weeks"],
      answer: [2],
      rationale: "IDSA guidance recommends against screening for or treating asymptomatic bacteriuria in older adults, including nursing home residents, because treatment does not improve outcomes and drives resistance and C. difficile infection; the main exceptions are pregnancy and planned invasive urologic procedures. The antibiotic options are tempting because a positive culture feels actionable, but colonization without genitourinary symptoms is not an infection requiring therapy.",
      difficulty: "advanced"
    },
    {
      id: "pharm-017",
      type: "mcq",
      stem: "A 79-year-old woman with dysuria and frequency has an uncomplicated cystitis. Her creatinine clearance is 24 mL/min. Which prescribing decision is most appropriate?",
      options: ["Nitrofurantoin 100 mg twice daily for 5 days", "An alternative first-line agent such as trimethoprim-sulfamethoxazole if local resistance allows, dose-adjusted for renal function", "Gentamicin intramuscularly as a single high dose", "No treatment because cystitis is self-limited in older adults"],
      answer: [1],
      rationale: "Nitrofurantoin should be avoided when creatinine clearance is below 30 mL/min because the drug fails to concentrate in the urine and toxic metabolites accumulate, a point reinforced by the Beers Criteria. Nitrofurantoin is the tempting distractor since it is first-line for uncomplicated cystitis in patients with adequate renal function, but this patient is symptomatic and needs a renally appropriate alternative, not withholding of therapy.",
      difficulty: "core"
    },
    {
      id: "pharm-018",
      type: "mcq",
      stem: "Which age-related pharmacokinetic change best explains why a single dose of diazepam produces a markedly prolonged effect in an 85-year-old compared with a 40-year-old?",
      options: ["Increased hepatic first-pass metabolism in older adults", "Increased body fat and reduced lean mass enlarging the volume of distribution of lipophilic drugs", "Faster renal elimination of the parent compound", "Enhanced plasma protein binding reducing free drug"],
      answer: [1],
      rationale: "Aging shifts body composition toward a higher fat percentage, which expands the volume of distribution for lipophilic drugs like diazepam and prolongs their half-life; reduced hepatic oxidative metabolism and active metabolites compound the effect. The protein-binding option is the tempting distractor, but albumin typically falls with age, increasing rather than decreasing free drug, and both hepatic first-pass metabolism and renal clearance decline rather than increase.",
      difficulty: "advanced"
    },
    {
      id: "pharm-019",
      type: "sata",
      stem: "A 33-year-old woman taking a combined oral contraceptive asks about medications that could make her contraception fail. Which of the following are potent enzyme inducers that can reduce contraceptive efficacy? Select all that apply.",
      options: ["Rifampin", "Fluconazole", "Carbamazepine", "Amiodarone", "St. Johns wort", "Phenytoin"],
      answer: [0, 2, 4, 5],
      rationale: "Rifampin, carbamazepine, phenytoin, and St. Johns wort induce CYP3A4 and accelerate metabolism of ethinyl estradiol and progestins, lowering hormone levels enough to permit ovulation; rifampin is the classic and strongest offender. Fluconazole and amiodarone are the tempting distractors because they are famous interacting drugs, but both are enzyme inhibitors, which would raise rather than lower hormone concentrations.",
      difficulty: "advanced"
    },
    {
      id: "pharm-020",
      type: "mcq",
      stem: "A 59-year-old woman with a mechanical mitral valve asks to switch from warfarin to a direct oral anticoagulant to avoid INR monitoring. What is the best response?",
      options: ["Switch to dabigatran with twice-daily dosing", "Switch to apixaban with standard dosing", "Continue warfarin; DOACs are contraindicated with mechanical heart valves", "Switch to aspirin plus clopidogrel to eliminate anticoagulation monitoring"],
      answer: [2],
      rationale: "Warfarin is the only oral anticoagulant validated for mechanical valves; the RE-ALIGN trial showed dabigatran caused more thromboembolism and bleeding in this population, and DOACs remain contraindicated. Apixaban is the tempting distractor because it is preferred in nonvalvular atrial fibrillation, but a mechanical valve is precisely the setting where that evidence does not apply; antiplatelet therapy alone is grossly inadequate for valve thrombosis prevention.",
      difficulty: "advanced"
    }
  ]
});
