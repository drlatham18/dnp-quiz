window.QUIZ_DATA = window.QUIZ_DATA || [];
window.QUIZ_DATA.push({
  topic: "Advanced Pathophysiology",
  slug: "patho",
  questions: [
    {
      id: "patho-001",
      type: "mcq",
      stem: "A 58-year-old man with longstanding GERD has an endoscopic biopsy showing columnar epithelium with goblet cells replacing the normal squamous epithelium of the distal esophagus. Which cellular adaptation does this represent?",
      options: ["Hyperplasia", "Metaplasia", "Dysplasia", "Atrophy"],
      answer: [1],
      rationale: "Barrett esophagus is metaplasia: one mature cell type is replaced by another mature cell type better suited to chronic acid exposure. Dysplasia is the tempting distractor because Barrett tissue can progress to it, but dysplasia implies disordered, atypical growth with loss of uniformity, which is not described here; metaplasia itself is a reversible adaptation, though it carries malignant potential if the stimulus persists.",
      difficulty: "core"
    },
    {
      id: "patho-002",
      type: "mcq",
      stem: "Which feature most reliably distinguishes apoptosis from necrosis at the tissue level?",
      options: ["Apoptosis triggers a brisk surrounding inflammatory response", "Apoptosis involves cell shrinkage and membrane-bound fragments without inflammation", "Necrosis affects single scattered cells while apoptosis affects contiguous zones", "Necrosis is always initiated by caspase activation"],
      answer: [1],
      rationale: "Apoptosis is an energy-dependent, caspase-mediated program producing shrunken cells and membrane-bound apoptotic bodies that are phagocytosed without spilling contents, so no inflammation results. The zonal-versus-single-cell option is the tempting distractor with the pattern reversed: necrosis typically involves contiguous groups of cells after ischemia or toxin exposure, while apoptosis picks off individual cells; caspases drive apoptosis, not necrosis.",
      difficulty: "advanced"
    },
    {
      id: "patho-003",
      type: "mcq",
      stem: "Minutes after a bee sting, a 24-year-old develops diffuse urticaria, wheezing, and hypotension. Which mechanism underlies this reaction?",
      options: ["IgE-mediated mast cell degranulation releasing histamine and leukotrienes", "Immune complex deposition activating complement in vessel walls", "Cytotoxic IgG binding to cell surface antigens", "T-cell mediated delayed-type hypersensitivity"],
      answer: [0],
      rationale: "Anaphylaxis is a type I hypersensitivity: allergen cross-links IgE on presensitized mast cells and basophils, releasing histamine, tryptase, and leukotrienes that cause vasodilation, capillary leak, and bronchospasm within minutes. Immune complex disease (type III) is the tempting distractor for multisystem involvement, but it evolves over hours to days, as in serum sickness, and cannot explain onset within minutes.",
      difficulty: "core"
    },
    {
      id: "patho-004",
      type: "sata",
      stem: "A 72-year-old woman has heart failure with isolated left ventricular involvement. Which clinical findings are attributable to left-sided failure? Select all that apply.",
      options: ["Orthopnea", "Jugular venous distension", "Bibasilar inspiratory crackles", "Dependent peripheral edema", "Paroxysmal nocturnal dyspnea", "Tender hepatomegaly"],
      answer: [0, 2, 4],
      rationale: "Left ventricular failure raises pulmonary venous pressure, producing pulmonary congestion: orthopnea, paroxysmal nocturnal dyspnea, and crackles. Jugular venous distension, peripheral edema, and hepatomegaly are the tempting distractors because they occur in the common combined picture, but they reflect systemic venous congestion from right-sided failure, which often develops later as a consequence of left-sided disease.",
      difficulty: "core"
    },
    {
      id: "patho-005",
      type: "mcq",
      stem: "A 78-year-old woman with decades of hypertension has exertional dyspnea, an echocardiogram showing ejection fraction of 62 percent, concentric left ventricular hypertrophy, and left atrial enlargement. Which mechanism best explains her heart failure symptoms?",
      options: ["Loss of contractile myocytes reducing stroke volume", "Impaired ventricular relaxation and compliance limiting diastolic filling", "Eccentric remodeling with chamber dilation", "Primary right ventricular pressure overload"],
      answer: [1],
      rationale: "This is HFpEF: chronic pressure overload produces concentric hypertrophy and a stiff, poorly relaxing ventricle, so filling pressures rise and back up into the left atrium and lungs despite a normal ejection fraction. Loss of contractile myocytes is the tempting distractor because it is the mechanism of HFrEF after infarction, which presents with a reduced ejection fraction and typically eccentric, dilated remodeling.",
      difficulty: "advanced"
    },
    {
      id: "patho-006",
      type: "mcq",
      stem: "A 64-year-old smoker with chronic dyspnea has spirometry showing FEV1/FVC of 0.58 that remains 0.60 after bronchodilator. Which interpretation is most accurate?",
      options: ["Asthma, because some bronchodilator response occurred", "COPD, because airflow limitation persists after bronchodilator", "Restrictive lung disease from chest wall stiffness", "Normal aging of the lung requiring no further evaluation"],
      answer: [1],
      rationale: "GOLD defines COPD by a post-bronchodilator FEV1/FVC below 0.70 in the setting of risk factors and symptoms; persistent, largely fixed obstruction after bronchodilator distinguishes COPD from asthma. Asthma is the tempting distractor because minor reversibility can occur in COPD, but asthma characteristically shows substantial, often complete normalization of airflow between exacerbations; restriction would show a preserved or elevated ratio with reduced volumes.",
      difficulty: "core"
    },
    {
      id: "patho-007",
      type: "mcq",
      stem: "Which mechanism best explains alveolar wall destruction and loss of elastic recoil in cigarette-related emphysema?",
      options: ["Excess collagen deposition in the alveolar interstitium", "Protease-antiprotease imbalance with neutrophil elastase overwhelming alpha-1 antitrypsin activity", "Autoantibody attack on the alveolar basement membrane", "Chronic pulmonary venous hypertension rupturing alveolar septa"],
      answer: [1],
      rationale: "Smoke recruits neutrophils and macrophages that release elastase and other proteases while oxidants simultaneously inactivate alpha-1 antitrypsin, so unopposed proteolysis destroys alveolar septa and elastin, causing hyperinflation and airway collapse on exhalation. Collagen deposition is the tempting distractor, but that describes fibrotic, restrictive disease; emphysema is tissue loss, not scarring.",
      difficulty: "advanced"
    },
    {
      id: "patho-008",
      type: "mcq",
      stem: "A 68-year-old man with three days of vomiting and poor intake has a creatinine rise from 1.0 to 2.1 mg/dL, BUN of 52 mg/dL, fractional excretion of sodium of 0.4 percent, and a bland urine sediment. Which process best explains the acute kidney injury?",
      options: ["Prerenal azotemia from volume depletion with intact tubular function", "Acute tubular necrosis with tubular epithelial injury", "Acute glomerulonephritis with immune-mediated injury", "Postrenal obstruction of both ureters"],
      answer: [0],
      rationale: "A BUN to creatinine ratio above 20 to 1, FENa below 1 percent, and bland sediment indicate hypoperfused but functioning tubules that avidly reclaim sodium and urea, the signature of prerenal azotemia. Acute tubular necrosis is the tempting distractor because prolonged prerenal states evolve into it, but ATN shows FENa above 2 percent, muddy brown granular casts, and loss of concentrating ability; glomerulonephritis would show hematuria, red cell casts, and proteinuria.",
      difficulty: "core"
    },
    {
      id: "patho-009",
      type: "mcq",
      stem: "A 55-year-old woman with stage 4 CKD has hypocalcemia, hyperphosphatemia, and a markedly elevated parathyroid hormone level. Which sequence best explains these findings?",
      options: ["Renal phosphate retention and decreased calcitriol synthesis lower serum calcium, driving secondary hyperparathyroidism", "An autonomous parathyroid adenoma raises PTH, which elevates both calcium and phosphate", "Vitamin D excess suppresses PTH and raises phosphate", "Renal potassium retention directly stimulates the parathyroid glands"],
      answer: [0],
      rationale: "Failing kidneys retain phosphate and lose 1-alpha-hydroxylase activity, so calcitriol falls, intestinal calcium absorption drops, and phosphate binds calcium; the resulting hypocalcemia and hyperphosphatemia chronically stimulate PTH, producing secondary hyperparathyroidism and renal osteodystrophy. A parathyroid adenoma is the tempting distractor, but primary hyperparathyroidism causes hypercalcemia with low or low-normal phosphate, the opposite calcium pattern seen here.",
      difficulty: "advanced"
    },
    {
      id: "patho-010",
      type: "sata",
      stem: "A 61-year-old man has cirrhosis with portal hypertension. Which findings are direct consequences of the elevated portal pressure and hepatic synthetic failure? Select all that apply.",
      options: ["Esophageal varices", "Thrombocytosis", "Ascites", "Splenomegaly with sequestration of platelets", "Elevated serum albumin", "Caput medusae"],
      answer: [0, 2, 3, 5],
      rationale: "Portal hypertension forces blood through portosystemic collaterals, producing esophageal varices and caput medusae, congests the spleen so platelets are sequestered, and combines with hypoalbuminemia and splanchnic vasodilation to drive ascites. Thrombocytosis and elevated albumin are the tempting distractors because they invert the real findings: cirrhosis causes thrombocytopenia from splenic sequestration and reduced thrombopoietin, and the failing liver synthesizes less albumin, not more.",
      difficulty: "advanced"
    },
    {
      id: "patho-011",
      type: "mcq",
      stem: "An 81-year-old woman with type 2 diabetes is brought in obtunded after a week of polyuria. Glucose is 980 mg/dL, serum osmolality 340 mOsm/kg, pH 7.36, bicarbonate 21 mEq/L, and serum ketones are minimal. Which process best explains this presentation?",
      options: ["Absolute insulin deficiency driving lipolysis and ketoacid production", "Residual insulin secretion suppressing ketogenesis while severe hyperglycemia causes osmotic diuresis and hyperosmolality", "Lactic acidosis from metformin accumulation", "Adrenal crisis with cortisol deficiency"],
      answer: [1],
      rationale: "This is hyperosmolar hyperglycemic state: in type 2 diabetes enough endogenous insulin remains to inhibit lipolysis and ketogenesis, so acidosis is absent, but profound hyperglycemia produces osmotic diuresis, dehydration, hyperosmolality, and altered mental status. DKA is the tempting distractor, but it requires absolute insulin deficiency and presents with ketosis and an anion gap acidosis, usually at lower glucose levels and with a more abrupt onset.",
      difficulty: "core"
    },
    {
      id: "patho-012",
      type: "mcq",
      stem: "A 44-year-old woman with fatigue, weight gain, and cold intolerance has a TSH of 28 mIU/L and a low free T4. Where is the primary lesion?",
      options: ["Thyroid gland itself, with intact pituitary feedback", "Pituitary gland failing to produce TSH", "Hypothalamus failing to produce TRH", "Peripheral tissues resistant to thyroid hormone"],
      answer: [0],
      rationale: "A high TSH with low free T4 defines primary hypothyroidism: the gland cannot make hormone, so the intact pituitary appropriately escalates TSH, most commonly from Hashimoto thyroiditis. Pituitary failure is the tempting distractor because it also lowers T4, but in central hypothyroidism TSH is low or inappropriately normal rather than elevated, since the feedback amplifier itself is broken.",
      difficulty: "core"
    },
    {
      id: "patho-013",
      type: "mcq",
      stem: "A 38-year-old woman has fatigue, weight loss, hyperpigmented palmar creases, sodium of 128 mEq/L, and potassium of 5.8 mEq/L. Which mechanism explains the hyperpigmentation and the electrolyte pattern?",
      options: ["Pituitary ACTH deficiency reducing cortisol while sparing aldosterone", "Adrenal cortical destruction causing loss of cortisol and aldosterone with compensatory rise in ACTH and melanocyte-stimulating activity", "Cortisol excess from an adrenal adenoma", "Ectopic aldosterone secretion from a renal tumor"],
      answer: [1],
      rationale: "Primary adrenal insufficiency destroys all cortical zones, so aldosterone loss produces hyponatremia and hyperkalemia while low cortisol removes feedback inhibition and pituitary POMC products, including ACTH and MSH activity, surge and darken the skin. Secondary (pituitary) insufficiency is the tempting distractor, but ACTH is low there, so pigmentation does not occur and aldosterone, which is regulated mainly by the renin-angiotensin system, is preserved, keeping potassium normal.",
      difficulty: "advanced"
    },
    {
      id: "patho-014",
      type: "mcq",
      stem: "A 70-year-old right-handed man with atrial fibrillation suddenly develops right-sided face and arm weakness and effortful, nonfluent speech with intact comprehension. Which vascular territory is most likely involved?",
      options: ["Left middle cerebral artery", "Right middle cerebral artery", "Basilar artery", "Left posterior cerebral artery"],
      answer: [0],
      rationale: "Contralateral face-and-arm-predominant weakness with expressive (Broca) aphasia localizes to the left middle cerebral artery territory, which supplies the dominant hemisphere language areas and the lateral motor cortex; atrial fibrillation makes a cardioembolic mechanism likely. The right MCA is the tempting distractor for a sudden hemiparesis, but a right-sided lesion would weaken the left side and typically produce neglect rather than aphasia in a right-handed patient.",
      difficulty: "core"
    },
    {
      id: "patho-015",
      type: "mcq",
      stem: "A 26-year-old man has a witnessed generalized tonic-clonic seizure and afterward has flaccid weakness of the right arm that resolves completely over 12 hours. Which explanation best fits the transient weakness?",
      options: ["Todd paralysis from postictal neuronal exhaustion in the involved motor cortex", "Completed ischemic stroke in the left MCA territory", "Guillain-Barre syndrome beginning focally", "Conversion disorder producing feigned weakness"],
      answer: [0],
      rationale: "Todd paralysis is a transient focal deficit after a seizure, reflecting temporary dysfunction of the cortical neurons that were maximally active during the ictus, and it resolves within hours to about 48 hours. Stroke is the tempting distractor and must be excluded acutely because the presentations overlap, but a completed infarct would not resolve fully within 12 hours; the seizure-then-deficit sequence with complete recovery is the classic Todd pattern.",
      difficulty: "advanced"
    },
    {
      id: "patho-016",
      type: "sata",
      stem: "A 34-year-old woman with menorrhagia has fatigue and pallor. Which laboratory findings are consistent with iron deficiency anemia? Select all that apply.",
      options: ["Decreased serum ferritin", "Increased reticulocyte count", "Decreased mean corpuscular volume", "Increased mean corpuscular hemoglobin concentration", "Increased total iron-binding capacity", "Decreased serum iron"],
      answer: [0, 2, 4, 5],
      rationale: "Iron deficiency depletes storage iron first, so ferritin falls, serum iron drops, and the liver upregulates transferrin, raising TIBC; hemoglobin synthesis fails, yielding microcytic, hypochromic cells with a low MCV. An increased reticulocyte count is the tempting distractor because anemia should stimulate marrow output, but without iron the marrow cannot mount an effective response, so reticulocytes are inappropriately low or normal until iron is replaced.",
      difficulty: "core"
    },
    {
      id: "patho-017",
      type: "mcq",
      stem: "A 66-year-old man with severe COPD has an arterial blood gas showing pH 7.34, PaCO2 61 mmHg, and HCO3 32 mEq/L. Which interpretation is most accurate?",
      options: ["Acute respiratory acidosis without compensation", "Chronic respiratory acidosis with renal metabolic compensation", "Primary metabolic alkalosis with respiratory compensation", "Mixed metabolic and respiratory acidosis"],
      answer: [1],
      rationale: "The elevated PaCO2 with a near-normal pH and a substantially elevated bicarbonate indicates the kidneys have had days to retain bicarbonate, the pattern of chronic, compensated respiratory acidosis typical of severe COPD. Acute respiratory acidosis is the tempting distractor, but an acute CO2 of 61 would drop the pH to roughly 7.24 with only a minimal bicarbonate rise; the bicarbonate of 32 proves renal compensation has matured.",
      difficulty: "advanced"
    },
    {
      id: "patho-018",
      type: "sata",
      stem: "A 67-year-old man with small cell lung cancer has new hyponatremia suspected to be from SIADH. Which findings support that diagnosis? Select all that apply.",
      options: ["Serum sodium of 122 mEq/L", "Pitting edema of both lower extremities", "Urine osmolality of 450 mOsm/kg despite low serum osmolality", "Orthostatic hypotension with dry mucous membranes", "Clinically euvolemic examination", "Low serum osmolality"],
      answer: [0, 2, 4, 5],
      rationale: "SIADH features inappropriate ADH release causing water retention: low serum sodium and osmolality with inappropriately concentrated urine in a patient who appears euvolemic, because retained water distributes across compartments without causing edema. Edema and orthostatic dry-membrane findings are the tempting distractors: edema suggests hypervolemic hyponatremia from heart failure or cirrhosis, while orthostasis and dry membranes suggest hypovolemic hyponatremia, and both patterns exclude SIADH by definition.",
      difficulty: "advanced"
    },
    {
      id: "patho-019",
      type: "mcq",
      stem: "A 74-year-old woman with a urinary source infection is hypotensive at 82/48 despite fluids, febrile, with warm flushed extremities and brisk capillary refill. Which hemodynamic profile is expected?",
      options: ["Low cardiac output with high systemic vascular resistance", "High cardiac output with low systemic vascular resistance", "Low cardiac output with elevated central venous pressure and pulmonary congestion", "Normal cardiac output with pericardial tamponade physiology"],
      answer: [1],
      rationale: "Septic shock is a distributive shock: inflammatory cytokines and nitric oxide cause profound vasodilation, so systemic vascular resistance falls while cardiac output is typically elevated early, producing warm extremities despite hypotension. The low-output high-resistance profile is the tempting distractor, but that describes cardiogenic or hypovolemic shock, where compensatory vasoconstriction produces cool, clammy extremities and delayed capillary refill.",
      difficulty: "advanced"
    },
    {
      id: "patho-020",
      type: "mcq",
      stem: "A 40-year-old man has familial hypercholesterolemia, an autosomal dominant disorder, and his partner is unaffected. What is the probability that each of their children will inherit the condition?",
      options: ["25 percent", "50 percent", "100 percent", "50 percent of sons only"],
      answer: [1],
      rationale: "In autosomal dominant inheritance a heterozygous affected parent transmits the mutant allele to half of offspring on average, and one copy is sufficient to produce disease, so each child has a 50 percent risk regardless of sex. The 25 percent option is the tempting distractor because it applies to autosomal recessive conditions with two carrier parents; sex-limited transmission would suggest X-linked or Y-linked inheritance, not autosomal.",
      difficulty: "core"
    }
  ]
});
