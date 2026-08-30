window.QUIZ_DATA = window.QUIZ_DATA || [];
window.QUIZ_DATA.push({
  topic: "Transfusions & GI Emergencies",
  slug: "acutegi",
  questions: [
    {
      id: "acutegi-001",
      type: "mcq",
      stem: "A 68-year-old man admitted with community-acquired pneumonia is hemodynamically stable and reports only mild fatigue. Morning labs show hemoglobin 6.8 g/dL. He has no history of cardiovascular disease. Which order is most appropriate?",
      options: [
        "Transfuse one unit of packed RBCs and reassess hemoglobin and symptoms afterward",
        "Transfuse two units of packed RBCs to raise the hemoglobin above 9 g/dL",
        "Hold transfusion unless the hemoglobin falls below 6 g/dL",
        "Hold transfusion and start an erythropoiesis-stimulating agent instead"
      ],
      answer: [0],
      rationale: "AABB guidelines endorse a restrictive threshold of 7 g/dL for most hemodynamically stable hospitalized adults, and this patient is below it. Best practice is single-unit transfusion followed by reassessment of hemoglobin and symptoms rather than automatic two-unit orders. Waiting for a hemoglobin below 6 g/dL is not a guideline-supported threshold for inpatients, and an erythropoiesis-stimulating agent does not address anemia below the transfusion threshold in this setting.",
      difficulty: "core"
    },
    {
      id: "acutegi-002",
      type: "mcq",
      stem: "A 74-year-old woman with known coronary artery disease is hospitalized for cellulitis. She is hemodynamically stable without chest pain, and her hemoglobin is 7.6 g/dL. What is the most appropriate transfusion decision?",
      options: [
        "Hold transfusion because her hemoglobin is above 7 g/dL",
        "Transfuse one unit of packed RBCs because her threshold is 8 g/dL",
        "Transfuse only if she develops chest pain or ST changes",
        "Transfuse platelets to reduce her bleeding risk"
      ],
      answer: [1],
      rationale: "AABB recommends a higher restrictive threshold of 8 g/dL for patients undergoing cardiac surgery or with preexisting cardiovascular disease, so a hemoglobin of 7.6 g/dL warrants transfusion here. The 7 g/dL threshold applies to stable inpatients without cardiovascular disease, which is why the first option is the most tempting but incorrect choice. Waiting for ischemic symptoms exposes the patient to avoidable myocardial injury.",
      difficulty: "core"
    },
    {
      id: "acutegi-003",
      type: "sata",
      stem: "An NP is obtaining informed consent for a nonemergent RBC transfusion. Which elements must be included in the consent discussion? Select all that apply.",
      options: [
        "The risks of transfusion, including transfusion reactions and infection",
        "The expected benefits of transfusion for the patient",
        "Reasonable alternatives, such as iron therapy or declining transfusion",
        "The patient's right to refuse the transfusion",
        "A guarantee that screened blood carries no transfusion risk",
        "The name and identity of the blood donor"
      ],
      answer: [0, 1, 2, 3],
      rationale: "Valid informed consent requires disclosure of risks, benefits, and reasonable alternatives, along with an explicit acknowledgment of the right to refuse. No clinician can guarantee risk-free blood, because reactions and rare infectious transmission still occur despite screening. Donor identity is confidential and is never part of consent.",
      difficulty: "core"
    },
    {
      id: "acutegi-004",
      type: "mcq",
      stem: "A surgeon requests a type and screen for a patient undergoing a laparoscopic cholecystectomy with low anticipated blood loss. Which statement best describes what a type and screen provides?",
      options: [
        "It determines ABO and Rh type and screens for unexpected antibodies but does not reserve specific units",
        "It physically tests the patient's plasma against specific donor units and holds those units for the patient",
        "It confirms compatibility at the bedside immediately before the transfusion is started",
        "It is required only when uncrossmatched O negative blood will be given"
      ],
      answer: [0],
      rationale: "A type and screen establishes ABO and Rh type and detects clinically significant unexpected antibodies, which is sufficient when transfusion is unlikely. The second option describes a crossmatch, which tests patient plasma against specific donor units and reserves them; it is the tempting distractor because both tests are ordered from the blood bank. Bedside verification is a separate safety step, not the type and screen itself.",
      difficulty: "advanced"
    },
    {
      id: "acutegi-005",
      type: "mcq",
      stem: "A trauma patient arrives exsanguinating from a pelvic fracture. His blood type is unknown and RBCs are needed immediately, before a type and screen can be completed. Which product should be given?",
      options: [
        "AB positive packed RBCs",
        "O negative packed RBCs",
        "AB plasma thawed and infused in place of RBCs",
        "O positive plasma"
      ],
      answer: [1],
      rationale: "O negative RBCs lack A, B, and RhD antigens, making them the universal RBC donor product for emergency release when the recipient type is unknown. The ABO logic reverses for plasma: AB plasma contains no anti-A or anti-B antibodies and is the universal plasma donor, but plasma cannot substitute for RBCs when oxygen-carrying capacity is the need. AB positive RBCs carry both A and B antigens and could cause fatal hemolysis in most recipients.",
      difficulty: "core"
    },
    {
      id: "acutegi-006",
      type: "mcq",
      stem: "One hour into an RBC transfusion, a patient's temperature rises from 37.0 to 38.2 C with chills. Blood pressure, urine color, and oxygenation are unchanged, and he denies flank or back pain. What is the most appropriate response?",
      options: [
        "Continue the transfusion and give acetaminophen, since fever alone is benign",
        "Stop the transfusion, give an antipyretic, and work with the blood bank to rule out hemolysis",
        "Give epinephrine intramuscularly for early anaphylaxis",
        "Give furosemide and place the patient upright"
      ],
      answer: [1],
      rationale: "This presentation suggests a febrile nonhemolytic reaction, the most common transfusion reaction, caused by recipient antibodies against donor leukocytes or accumulated cytokines. Even so, fever is also the earliest sign of acute hemolysis, so the transfusion must be stopped and hemolysis excluded before any restart; continuing the transfusion is the dangerous tempting choice. Epinephrine and diuresis address anaphylaxis and volume overload, neither of which is present.",
      difficulty: "core"
    },
    {
      id: "acutegi-007",
      type: "mcq",
      stem: "Ten minutes into an RBC transfusion, a patient develops fever, flank pain, red-brown urine, and a blood pressure of 84/50. The NP stops the transfusion. Which action is the next priority?",
      options: [
        "Administer diphenhydramine and observe for 30 minutes",
        "Restart the transfusion at half the original rate",
        "Infuse 0.9% saline to support blood pressure and urine output, and recheck all patient and unit identification",
        "Give acetaminophen and send a sputum culture"
      ],
      answer: [2],
      rationale: "Fever, flank pain, hemoglobinuria, and hypotension within minutes indicate an acute hemolytic reaction, almost always from ABO incompatibility due to a clerical or identification error. After stopping the transfusion, the priorities are aggressive isotonic saline to protect the kidneys and maintain urine output, plus an immediate clerical recheck and blood bank workup. Diphenhydramine treats a mild allergic reaction and would delay lifesaving management, and the unit must never be restarted.",
      difficulty: "advanced"
    },
    {
      id: "acutegi-008",
      type: "mcq",
      stem: "Within minutes of starting an RBC transfusion, a patient develops diffuse urticaria, wheezing, and profound hypotension requiring epinephrine. She reports a similar severe reaction with a prior transfusion. Which underlying condition most likely explains these recurrent reactions?",
      options: [
        "Selective IgA deficiency with anti-IgA antibodies",
        "Sickle cell trait",
        "Chronic urticaria from mast cell instability",
        "Rh negative blood type receiving Rh positive units"
      ],
      answer: [0],
      rationale: "Anaphylactic transfusion reactions are classically associated with IgA deficiency, in which recipient anti-IgA antibodies react against IgA in donor plasma; such patients need washed cellular products or components from IgA-deficient donors. Chronic urticaria is the tempting distractor because hives are present, but simple allergic urticarial reactions cause hives without hypotension or bronchospasm and are managed with antihistamines. Rh mismatch causes hemolysis, not anaphylaxis.",
      difficulty: "advanced"
    },
    {
      id: "acutegi-009",
      type: "mcq",
      stem: "Three hours after a plasma transfusion, a 45-year-old man develops acute hypoxemia with bilateral infiltrates on chest x-ray. He is normotensive with flat neck veins, no S3, and a normal BNP, and he received no other fluids. What is the most likely diagnosis?",
      options: [
        "Transfusion-associated circulatory overload",
        "Acute exacerbation of heart failure",
        "Transfusion-related acute lung injury",
        "Hospital-acquired pneumonia"
      ],
      answer: [2],
      rationale: "TRALI presents with acute hypoxemia and bilateral infiltrates within 6 hours of transfusion without evidence of volume overload, and it is a noncardiogenic pulmonary edema managed with supportive care and oxygen. TACO is the tempting distractor because the imaging looks similar, but TACO features hypertension, jugular venous distension, an elevated BNP, and response to diuretics, none of which is present. Pneumonia does not develop this abruptly after transfusion.",
      difficulty: "advanced"
    },
    {
      id: "acutegi-010",
      type: "mcq",
      stem: "During an RBC transfusion, a patient develops new chills and vague back discomfort. The cause is not yet clear. What is the correct first action for any suspected transfusion reaction?",
      options: [
        "Slow the transfusion rate while monitoring vital signs every 5 minutes",
        "Stop the transfusion and keep the IV line open with 0.9% saline through new tubing",
        "Finish the unit quickly so the workup can begin sooner",
        "Give acetaminophen and diphenhydramine before deciding whether to stop"
      ],
      answer: [1],
      rationale: "The universal first step for any suspected transfusion reaction is to stop the transfusion immediately and maintain IV access with normal saline through fresh tubing, because severity is proportional to the volume of incompatible blood infused. Slowing the rate is the tempting compromise, but it continues to deliver potentially incompatible blood while the cause is unknown. Symptomatic medications come only after the transfusion is stopped and assessment begins.",
      difficulty: "core"
    },
    {
      id: "acutegi-011",
      type: "sata",
      stem: "A trauma patient with hemorrhagic shock is receiving massive transfusion. Which principles apply to massive transfusion management? Select all that apply.",
      options: [
        "Transfuse plasma, platelets, and RBCs in a balanced ratio approximating 1:1:1",
        "Monitor ionized calcium, because citrate in stored blood chelates calcium",
        "Monitor for hyperkalemia from potassium leakage out of stored red cells",
        "Use blood warmers and warming measures to prevent hypothermia",
        "Give RBCs alone until at least 10 units have been infused",
        "Expect hypercalcemia as the most common electrolyte disturbance"
      ],
      answer: [0, 1, 2, 3],
      rationale: "Balanced 1:1:1 resuscitation of plasma, platelets, and RBCs improves hemostasis in massive hemorrhage, and warming measures counteract the lethal triad component of hypothermia. Citrate anticoagulant chelates ionized calcium causing hypocalcemia, and stored red cells leak potassium, so both ionized calcium and potassium require close monitoring. Giving RBCs alone dilutes clotting factors and platelets and worsens coagulopathy, and the calcium disturbance of massive transfusion is hypocalcemia, not hypercalcemia.",
      difficulty: "advanced"
    },
    {
      id: "acutegi-012",
      type: "mcq",
      stem: "A woman with two prior pregnancies received 2 units of RBCs after surgery. Eight days later she has a falling hemoglobin, mild jaundice, low haptoglobin, and a newly positive direct antiglobulin test. She feels only mildly fatigued. What is the most likely diagnosis?",
      options: [
        "Delayed hemolytic transfusion reaction from an anamnestic alloantibody response",
        "Acute hemolytic transfusion reaction from ABO incompatibility",
        "Postoperative blood loss from the surgical site",
        "Febrile nonhemolytic transfusion reaction"
      ],
      answer: [0],
      rationale: "Delayed hemolytic reactions occur days to weeks after transfusion when prior sensitization from pregnancy or transfusion produces an anamnestic antibody response against minor red cell antigens, causing extravascular hemolysis with a positive DAT, falling hemoglobin, and jaundice. Acute ABO hemolysis is the tempting distractor, but it occurs within minutes to hours with fever, flank pain, and hemoglobinuria, not a week later. Surgical bleeding would not explain the hemolysis labs or positive DAT.",
      difficulty: "advanced"
    },
    {
      id: "acutegi-013",
      type: "mcq",
      stem: "A 59-year-old man presents with black, tarry stools for two days. His BUN is 42 mg/dL and creatinine is 1.0 mg/dL. Where is the bleeding source most likely located?",
      options: [
        "Proximal to the ligament of Treitz, consistent with an upper GI source",
        "The left colon, consistent with diverticular bleeding",
        "The rectum, consistent with hemorrhoidal bleeding",
        "The distal ileum, consistent with small bowel angiodysplasia"
      ],
      answer: [0],
      rationale: "Melena reflects digested blood and points to an upper GI source proximal to the ligament of Treitz, and a BUN to creatinine ratio above roughly 30 supports this because digested blood proteins are absorbed and urea rises. Diverticular and hemorrhoidal bleeding are the tempting lower GI distractors, but they typically produce hematochezia, not melena. An elevated ratio with normal creatinine argues against a purely renal explanation for the BUN.",
      difficulty: "core"
    },
    {
      id: "acutegi-014",
      type: "sata",
      stem: "A 63-year-old man presents with hematemesis, BP 96/60, and HR 118. Which actions belong in his initial management? Select all that apply.",
      options: [
        "Insert two large-bore IV catheters",
        "Begin crystalloid infusion for volume resuscitation",
        "Send blood for type and crossmatch",
        "Start an intravenous proton pump inhibitor",
        "Send him directly to colonoscopy before any resuscitation",
        "Transfuse RBCs immediately to reach a hemoglobin of 10 g/dL"
      ],
      answer: [0, 1, 2, 3],
      rationale: "Initial management of acute upper GI bleeding centers on resuscitation: two large-bore IVs, crystalloid infusion, and type and crossmatch so blood is available, along with an IV proton pump inhibitor before endoscopy. Colonoscopy is the wrong test for hematemesis and nothing precedes resuscitation in an unstable patient. Routine transfusion to a hemoglobin of 10 g/dL exceeds the restrictive strategy shown to improve outcomes in upper GI bleeding.",
      difficulty: "core"
    },
    {
      id: "acutegi-015",
      type: "mcq",
      stem: "A 58-year-old woman with a bleeding gastric ulcer is now hemodynamically stable after resuscitation. Her hemoglobin is 8.1 g/dL and she is asymptomatic. What is the appropriate transfusion approach?",
      options: [
        "Transfuse one unit now because GI bleeding mandates a threshold of 9 g/dL",
        "Withhold transfusion and continue monitoring, transfusing if hemoglobin falls below 7 g/dL",
        "Transfuse two units to build a buffer against rebleeding",
        "Transfuse fresh frozen plasma instead of RBCs"
      ],
      answer: [1],
      rationale: "In hemodynamically stable upper GI bleeding, a restrictive threshold of 7 g/dL improves survival and reduces rebleeding compared with liberal transfusion, so a stable patient at 8.1 g/dL should be monitored rather than transfused. Transfusing a buffer against rebleeding is the intuitive but harmful distractor, since higher targets increase portal pressure and rebleeding in trials. Plasma is for coagulopathy, not anemia.",
      difficulty: "core"
    },
    {
      id: "acutegi-016",
      type: "mcq",
      stem: "An NP calculates a Glasgow-Blatchford score of 0 for a 34-year-old with a small amount of coffee-ground emesis, normal vital signs, normal hemoglobin, and normal BUN. What is the primary purpose of this score in upper GI bleeding?",
      options: [
        "To identify very low risk patients who may be safely managed as outpatients",
        "To predict mortality only after endoscopic findings are known",
        "To determine which patients need immediate massive transfusion",
        "To confirm whether the bleeding source is variceal"
      ],
      answer: [0],
      rationale: "The Glasgow-Blatchford score uses pre-endoscopy clinical and laboratory data to identify very low risk patients, and a score of 0 to 1 supports outpatient management with early follow-up. The Rockall score is the tempting comparison because it also risk-stratifies GI bleeding, but its full version incorporates endoscopic findings and is oriented toward predicting mortality and rebleeding. Neither score determines transfusion volume or bleeding source.",
      difficulty: "advanced"
    },
    {
      id: "acutegi-017",
      type: "mcq",
      stem: "A 66-year-old man is admitted overnight with melena and a hemoglobin of 8.4 g/dL. He is resuscitated and stable on an IV proton pump inhibitor. When should upper endoscopy be performed?",
      options: [
        "Within 24 hours of presentation, after resuscitation",
        "Only if he rebleeds during the hospitalization",
        "Within 2 hours of arrival regardless of resuscitation status",
        "As an outpatient in 2 to 4 weeks"
      ],
      answer: [0],
      rationale: "Guidelines recommend upper endoscopy within 24 hours of presentation for patients hospitalized with upper GI bleeding, performed after hemodynamic resuscitation. Rushing to endoscopy within 2 hours in every patient is the tempting distractor, but very early endoscopy has not improved outcomes for most patients and an unresuscitated patient tolerates sedation poorly. Deferring endoscopy until rebleeding forfeits the chance to treat the lesion and stratify risk.",
      difficulty: "core"
    },
    {
      id: "acutegi-018",
      type: "mcq",
      stem: "A 71-year-old man on apixaban for atrial fibrillation and low-dose aspirin for a prior myocardial infarction presents with an actively bleeding duodenal ulcer. Which medication plan is most appropriate?",
      options: [
        "Continue both agents to avoid any thrombotic risk",
        "Hold the apixaban now and plan early resumption once hemostasis is achieved, while planning to continue aspirin for secondary prevention",
        "Permanently discontinue both the apixaban and the aspirin",
        "Reverse the apixaban with vitamin K and continue aspirin"
      ],
      answer: [1],
      rationale: "Active major GI bleeding warrants holding the anticoagulant, and apixaban should be resumed soon after hemostasis because the thrombotic risk of prolonged interruption outweighs rebleeding risk in most patients. Aspirin for secondary cardiovascular prevention should not be permanently discontinued, since stopping it increases cardiovascular events and death. Vitamin K reverses warfarin, not factor Xa inhibitors, making that distractor pharmacologically wrong.",
      difficulty: "advanced"
    },
    {
      id: "acutegi-019",
      type: "sata",
      stem: "A 60-year-old presents with a bleeding peptic ulcer. Which factors are established contributors to peptic ulcer disease and ulcer bleeding? Select all that apply.",
      options: [
        "Chronic NSAID use",
        "Helicobacter pylori infection",
        "Low-dose aspirin therapy",
        "Concurrent anticoagulant use increasing bleeding risk",
        "Eating spicy foods as a primary cause of ulcer formation",
        "A vegetarian diet"
      ],
      answer: [0, 1, 2, 3],
      rationale: "NSAIDs and H. pylori are the two dominant causes of peptic ulcer disease, and even low-dose aspirin independently increases ulcer risk through prostaglandin inhibition. Anticoagulants do not cause ulcers but substantially raise the risk that an existing ulcer bleeds. Spicy food is a persistent myth that may aggravate symptoms but does not cause ulcers, and diet composition such as vegetarianism has no established causal role.",
      difficulty: "core"
    },
    {
      id: "acutegi-020",
      type: "mcq",
      stem: "A 55-year-old man presents with large-volume bright red blood per rectum, BP 84/50, and HR 130. Which consideration is most important when planning his workup?",
      options: [
        "Hematochezia always indicates a colonic source, so colonoscopy should be first",
        "Hematochezia with hemodynamic instability may represent brisk upper GI bleeding, so upper endoscopy should be considered first",
        "Anoscopy is sufficient because bright red blood indicates hemorrhoids",
        "A tagged red cell scan should precede any resuscitation"
      ],
      answer: [1],
      rationale: "Although hematochezia usually signals a lower GI source, a briskly bleeding upper source can deliver unaltered blood to the rectum, and hemodynamic instability is the key clue; these patients need resuscitation and consideration of upper endoscopy first. Reflexively starting with colonoscopy is the tempting distractor and risks missing a life-threatening ulcer or variceal bleed. Nuclear imaging is for slower, obscure bleeding and never precedes resuscitation.",
      difficulty: "advanced"
    },
    {
      id: "acutegi-021",
      type: "sata",
      stem: "A 52-year-old with cirrhosis presents with hematemesis and suspected variceal hemorrhage. Which interventions are indicated in the acute management? Select all that apply.",
      options: [
        "Start an octreotide bolus followed by continuous infusion",
        "Give prophylactic IV ceftriaxone",
        "Arrange urgent upper endoscopy for band ligation",
        "Place a balloon tamponade tube as first-line definitive therapy",
        "Start a nonselective beta-blocker during active hemorrhage",
        "Transfuse RBCs to a hemoglobin above 10 g/dL"
      ],
      answer: [0, 1, 2],
      rationale: "Suspected variceal bleeding is managed with octreotide to lower portal pressure, prophylactic antibiotics such as ceftriaxone, which reduce infection, rebleeding, and mortality in cirrhosis, and urgent endoscopic band ligation as definitive therapy. Balloon tamponade is only a temporizing bridge to definitive treatment for uncontrolled hemorrhage, making it the tempting distractor. Beta-blockers are for prophylaxis, not active bleeding, and transfusing above 10 g/dL raises portal pressure and worsens outcomes.",
      difficulty: "advanced"
    },
    {
      id: "acutegi-022",
      type: "mcq",
      stem: "A cirrhotic patient with a bleeding esophageal varix is now hemodynamically stable with a hemoglobin of 8.4 g/dL. The resident suggests transfusing to a hemoglobin of 10 g/dL for safety. What is the best response?",
      options: [
        "Agree, because cirrhotic patients tolerate anemia poorly",
        "Recommend against transfusion now, targeting a hemoglobin of 7 to 8 g/dL, because over-transfusion raises portal pressure and rebleeding risk",
        "Agree, but use plasma instead of RBCs to avoid volume expansion",
        "Recommend transfusing platelets first in all cirrhotic patients"
      ],
      answer: [1],
      rationale: "In variceal hemorrhage the target hemoglobin is 7 to 8 g/dL, because over-transfusion expands intravascular volume, raises portal pressure, and increases rebleeding and mortality. Transfusing generously for safety is the intuitive but harmful distractor, directly contradicted by randomized trial evidence in upper GI bleeding. Plasma is also a volume load and platelets are only indicated for significant thrombocytopenia with active bleeding.",
      difficulty: "advanced"
    },
    {
      id: "acutegi-023",
      type: "mcq",
      stem: "A patient with cirrhosis continues to bleed from esophageal varices despite octreotide, ceftriaxone, and two attempts at endoscopic band ligation. Which intervention is most appropriate next for definitive control?",
      options: [
        "Transjugular intrahepatic portosystemic shunt",
        "Long-term balloon tamponade for the remainder of the admission",
        "High-dose IV pantoprazole alone",
        "Increase the octreotide infusion and observe for 48 hours"
      ],
      answer: [0],
      rationale: "TIPS is the treatment of choice for variceal bleeding refractory to combined pharmacologic and endoscopic therapy, decompressing the portal system to control hemorrhage. Balloon tamponade is the tempting distractor because it can stop bleeding immediately, but it is only a short-term bridge to definitive therapy and carries risks of esophageal necrosis and rupture with prolonged use. Acid suppression and watchful waiting do not address portal hypertension, the driver of the bleeding.",
      difficulty: "advanced"
    },
    {
      id: "acutegi-024",
      type: "mcq",
      stem: "A 49-year-old with cirrhosis is found on screening endoscopy to have medium-sized esophageal varices that have never bled. Which regimen is most appropriate to prevent a first variceal hemorrhage?",
      options: [
        "A nonselective beta-blocker such as carvedilol",
        "Daily octreotide injections at home",
        "Metoprolol succinate titrated to heart rate",
        "Prophylactic TIPS placement"
      ],
      answer: [0],
      rationale: "Primary prophylaxis for medium to large varices uses a nonselective beta-blocker such as carvedilol, nadolol, or propranolol, which lowers portal pressure by reducing splanchnic blood flow; endoscopic band ligation is the alternative. Metoprolol is the tempting distractor because it is a familiar beta-blocker, but its beta-1 selectivity does not produce the splanchnic vasoconstriction needed to reduce portal pressure. Octreotide is for acute bleeding only, and TIPS is reserved for refractory hemorrhage, not prophylaxis.",
      difficulty: "core"
    }
  ]
});
