window.QUIZ_DATA = window.QUIZ_DATA || [];
window.QUIZ_DATA.push({
  topic: "Population Health",
  slug: "pophealth",
  questions: [
    {
      id: "pophealth-001",
      type: "mcq",
      stem: "A DNP-prepared NP reviewing clinic data notes that patients from one zip code with no public transit have a 40 percent no-show rate, triple the clinic average. Which initial action best addresses the underlying social determinant of health?",
      options: [
        "Implement a stricter no-show discharge policy for repeat offenders",
        "Screen affected patients for transportation barriers and connect them with community ride resources",
        "Send additional automated text reminders before each appointment",
        "Shift all patients from that zip code to telephone-only visits"
      ],
      answer: [1],
      rationale: "Screening for transportation barriers and linking patients to ride resources targets the actual social determinant driving the no-shows. Text reminders are tempting because they are cheap and easy, but they do not solve an access problem; a patient who cannot get to the clinic still cannot attend regardless of how many reminders arrive. A punitive discharge policy worsens inequity for a structurally disadvantaged group.",
      difficulty: "core"
    },
    {
      id: "pophealth-002",
      type: "mcq",
      stem: "A health system gives every clinic the same diabetes education budget per capita. A DNP argues this approach should change. Which reallocation best reflects health equity rather than health equality?",
      options: [
        "Distributing funds proportional to each clinic's measured burden of uncontrolled diabetes and language needs",
        "Increasing every clinic's budget by the same fixed percentage",
        "Letting each clinic compete for funds through grant applications",
        "Rotating the entire budget among clinics on an annual schedule"
      ],
      answer: [0],
      rationale: "Equity means allocating resources according to need so that all populations have a fair opportunity to reach the same outcomes; clinics serving higher-burden, higher-need populations receive more. Equal percentage increases are the classic equality distractor: identical inputs preserve existing outcome gaps. Competitive grants often favor better-resourced clinics and can widen disparities.",
      difficulty: "core"
    },
    {
      id: "pophealth-003",
      type: "mcq",
      stem: "Which intervention represents primary prevention?",
      options: [
        "Ordering screening colonoscopy for a 46-year-old with no symptoms",
        "Referring a post-myocardial-infarction patient to cardiac rehabilitation",
        "Administering HPV vaccine to an 11-year-old at a well visit",
        "Performing a Pap test on a 30-year-old at a routine exam"
      ],
      answer: [2],
      rationale: "Primary prevention stops disease before it occurs; HPV vaccination prevents the oncogenic infection itself. Screening colonoscopy and Pap testing are secondary prevention because they detect asymptomatic disease that already exists. Cardiac rehabilitation is tertiary prevention, limiting disability from established disease.",
      difficulty: "core"
    },
    {
      id: "pophealth-004",
      type: "mcq",
      stem: "An NP designs a workflow for annual wellness visits. Which activity is an example of secondary prevention?",
      options: [
        "Counseling all patients on smoking avoidance",
        "Administering PHQ-2 depression screening to asymptomatic adults",
        "Providing influenza vaccination before flu season",
        "Teaching daily foot inspection to patients with diabetic neuropathy"
      ],
      answer: [1],
      rationale: "Secondary prevention detects disease early in asymptomatic people, which is exactly what routine PHQ-2 screening does. Influenza vaccination is a tempting distractor because it happens at the same visit, but it prevents disease from occurring, making it primary prevention. Diabetic foot teaching manages complications of established disease and is tertiary.",
      difficulty: "core"
    },
    {
      id: "pophealth-005",
      type: "mcq",
      stem: "A 42-year-old asymptomatic low-risk man requests an annual screening ECG, whole-body CT, and a broad tumor-marker panel after seeing an advertisement. The NP explains the risks of these tests and does not order them. This decision best exemplifies which level of prevention?",
      options: [
        "Tertiary prevention, because it limits complications of testing",
        "Quaternary prevention, because it protects the patient from overmedicalization and harms of unnecessary intervention",
        "Primary prevention, because no disease is present",
        "Secondary prevention, because it involves a screening decision"
      ],
      answer: [1],
      rationale: "Quaternary prevention protects patients from medical interventions likely to cause more harm than benefit, including low-value screening that generates false positives, incidental findings, and cascade testing. The secondary prevention option is the tempting distractor because screening is being discussed, but secondary prevention refers to performing appropriate early detection, not declining inappropriate testing.",
      difficulty: "advanced"
    },
    {
      id: "pophealth-006",
      type: "mcq",
      stem: "A DNP student is asked to lead a community health assessment for a rural county. Which action is the most appropriate starting point?",
      options: [
        "Implement an evidence-based obesity program shown to work in urban settings",
        "Survey only patients already attending the county clinic",
        "Write the grant application before collecting any data",
        "Engage community stakeholders to define priorities while compiling existing county-level health data"
      ],
      answer: [3],
      rationale: "Community health assessment begins with stakeholder engagement and synthesis of existing data so priorities reflect the community's own needs and assets. Importing an urban program first is the tempting shortcut, but it skips assessment entirely and risks a poor fit. Surveying only current clinic patients misses the harder-to-reach residents who often carry the greatest burden.",
      difficulty: "core"
    },
    {
      id: "pophealth-007",
      type: "sata",
      stem: "An NP is stratifying a patient panel to target outreach toward vulnerable populations. Which characteristics should increase a patient's vulnerability score? Select all that apply.",
      options: [
        "Housing instability with two moves in the past year",
        "Limited English proficiency without access to interpretation",
        "Release from incarceration within the past six months",
        "Full-time employment with employer-sponsored insurance",
        "Lack of any health insurance coverage",
        "Completion of a graduate degree"
      ],
      answer: [0, 1, 2, 4],
      rationale: "Housing instability, language barriers, recent incarceration, and uninsurance each independently predict worse access, fragmented care, and poorer outcomes, so all belong in a vulnerability index. Stable employment with insurance and higher educational attainment are protective factors; including them would dilute the index and misdirect outreach resources away from those most at risk.",
      difficulty: "core"
    },
    {
      id: "pophealth-008",
      type: "mcq",
      stem: "After explaining a new insulin regimen, which strategy best confirms that a patient with limited health literacy understands the instructions?",
      options: [
        "Ask the patient to explain in their own words how they will take the insulin",
        "Ask whether the patient has any questions before leaving",
        "Provide a detailed printed handout at a twelfth-grade reading level",
        "Repeat the instructions slowly a second time"
      ],
      answer: [0],
      rationale: "Teach-back asks patients to restate instructions in their own words, directly verifying comprehension and revealing gaps the clinician can correct immediately. Asking whether the patient has questions is the tempting distractor because it feels patient-centered, but patients with limited literacy frequently say no out of embarrassment even when they do not understand. Written materials should be at a fifth-to-sixth-grade level, not twelfth.",
      difficulty: "core"
    },
    {
      id: "pophealth-009",
      type: "mcq",
      stem: "A parent asks why their immunocompromised child, who cannot receive the MMR vaccine, benefits when classmates are vaccinated. Which explanation of herd immunity is most accurate?",
      options: [
        "Vaccinated classmates shed protective antibodies that immunize nearby children",
        "High vaccination coverage reduces circulation of the virus, lowering the chance the child is ever exposed",
        "The school building becomes sterilized of measles virus once most students are vaccinated",
        "Herd immunity guarantees the child can never contract measles"
      ],
      answer: [1],
      rationale: "Herd immunity works by interrupting transmission: when enough people are immune, the pathogen cannot sustain spread, indirectly protecting those who cannot be vaccinated. The antibody-shedding option is the tempting distractor because it sounds physiologic, but vaccinated individuals do not transfer immunity to others. Herd protection reduces risk substantially but is never an absolute guarantee, especially if local coverage dips below threshold.",
      difficulty: "core"
    },
    {
      id: "pophealth-010",
      type: "mcq",
      stem: "A county health department confirms a true outbreak of gastrointestinal illness linked to a community event and has verified the diagnosis in several patients. What is the most appropriate next step in the outbreak investigation?",
      options: [
        "Release a public statement naming the suspected food vendor",
        "Immediately close every food establishment in the county",
        "Begin analytic testing of association with a case-control study",
        "Establish a working case definition to systematically identify and count cases"
      ],
      answer: [3],
      rationale: "After verifying the diagnosis and confirming an outbreak exists, investigators must construct a case definition using person, place, time, and clinical criteria so that case finding is systematic. Jumping to a case-control study is the tempting distractor because analytic epidemiology is the eventual goal, but hypotheses cannot be tested until cases are consistently defined and described. Naming a vendor before evidence exists risks harm and legal exposure.",
      difficulty: "advanced"
    },
    {
      id: "pophealth-011",
      type: "mcq",
      stem: "An epidemic curve from a church picnic outbreak shows a single sharp peak with cases clustered within one incubation period, then a rapid decline. Which exposure pattern does this most strongly suggest?",
      options: [
        "A point-source exposure in which cases shared one brief common exposure",
        "Propagated person-to-person transmission over multiple generations",
        "A continuous common source with ongoing contamination",
        "Seasonal endemic transmission unrelated to the event"
      ],
      answer: [0],
      rationale: "A single tight peak spanning roughly one incubation period is the classic signature of a point-source outbreak, such as a contaminated dish served once. Propagated transmission is the tempting distractor for any gathering, but it produces successive progressively taller waves separated by incubation periods rather than one sharp peak. A continuous common source yields a prolonged plateau instead of a rapid rise and fall.",
      difficulty: "advanced"
    },
    {
      id: "pophealth-012",
      type: "mcq",
      stem: "An NP refers patients with arthritis, diabetes, and heart disease to a Chronic Disease Self-Management Program modeled on the Stanford approach. Which mechanism primarily drives this program's effectiveness?",
      options: [
        "Weekly medication adjustments made by the program leaders",
        "Intensive disease-specific pathophysiology lectures from specialist clinicians",
        "Guaranteed remission of the underlying chronic condition",
        "Building self-efficacy through peer-led workshops, action planning, and problem solving"
      ],
      answer: [3],
      rationale: "Stanford-model CDSMP workshops are led by trained lay leaders who often have chronic conditions themselves, and their effect operates through increased self-efficacy from weekly action plans, feedback, and group problem solving across conditions. Clinician-delivered disease-specific lectures are the tempting distractor because they sound more rigorous, but the model is deliberately generic and peer-led, and leaders never adjust medications.",
      difficulty: "core"
    },
    {
      id: "pophealth-013",
      type: "mcq",
      stem: "A health system asks a DNP to reduce 30-day readmissions among older adults with heart failure. Drawing on evidence from the Transitional Care Model, which element should be prioritized?",
      options: [
        "A discharge packet of printed instructions mailed to the home",
        "Advanced practice nurse-led follow-up beginning before discharge, with early home visits and medication reconciliation across settings",
        "A telephone survey of patient satisfaction 30 days after discharge",
        "Automatic referral of all discharged patients to long-term care facilities"
      ],
      answer: [1],
      rationale: "The Transitional Care Model reduces readmissions through an advanced practice nurse who engages the patient before discharge, conducts early post-discharge home visits, reconciles medications, and coordinates across the care team. The printed discharge packet is the tempting low-cost distractor, but passive written information without active follow-up has not been shown to reduce readmissions. A satisfaction survey measures experience after the risk window has already closed.",
      difficulty: "advanced"
    },
    {
      id: "pophealth-014",
      type: "sata",
      stem: "A DNP is designing a care coordination program for patients with multiple chronic conditions seeing five or more clinicians. Which elements are essential to effective care coordination? Select all that apply.",
      options: [
        "A shared care plan accessible to all treating clinicians",
        "A designated coordinator accountable for the patient's overall care",
        "Closed-loop referral tracking that confirms specialist visits occurred and reports returned",
        "Independent repetition of laboratory testing at each specialty office",
        "Timely transfer of clinical information at every transition of care",
        "Restricting patients from viewing their own records to avoid confusion"
      ],
      answer: [0, 1, 2, 4],
      rationale: "Effective coordination requires a shared plan, a single accountable coordinator, closed-loop referrals, and reliable information transfer at transitions; these elements reduce duplication, conflicting regimens, and dropped handoffs. Repeating labs at every office is the seductive distractor because it feels thorough, but duplicate testing is a hallmark of failed coordination, adding cost and risk. Restricting record access contradicts patient engagement principles.",
      difficulty: "advanced"
    },
    {
      id: "pophealth-015",
      type: "mcq",
      stem: "A DNP wants county-level estimates of adult smoking, physical inactivity, and self-reported health status to justify a grant proposal. Which data source is best suited to this purpose?",
      options: [
        "Vital statistics death certificate files",
        "Hospital discharge billing records",
        "The Behavioral Risk Factor Surveillance System",
        "The clinic's own electronic health record registry"
      ],
      answer: [2],
      rationale: "BRFSS is the ongoing state-based telephone survey of self-reported health behaviors, and its data support state and small-area estimates of exactly these risk behaviors. The clinic EHR registry is the tempting distractor because it is readily available, but it reflects only care-seeking patients of one practice and cannot represent the county population. Vital statistics capture deaths, not behaviors, and discharge data capture only hospitalized illness.",
      difficulty: "advanced"
    },
    {
      id: "pophealth-016",
      type: "mcq",
      stem: "A global health report ranks conditions by disability-adjusted life years. Which statement correctly explains what a DALY represents?",
      options: [
        "The number of deaths attributable to a condition in a given year",
        "The combined burden of years of life lost to premature death and years lived with disability",
        "The dollar cost of treating a condition across a population",
        "The average life expectancy of people diagnosed with the condition"
      ],
      answer: [1],
      rationale: "One DALY equals one lost year of healthy life, calculated by summing years of life lost from premature mortality and years lived with disability weighted for severity. Mortality counts are the tempting distractor because death data are familiar, but DALYs were created precisely because mortality alone ignores conditions like depression and musculoskeletal disease that disable far more than they kill.",
      difficulty: "advanced"
    },
    {
      id: "pophealth-017",
      type: "mcq",
      stem: "A DNP reviews interventions for a pediatric asthma population with high emergency department utilization. Which option is the most upstream intervention?",
      options: [
        "Advocating for enforcement of housing codes that require landlords to remediate mold and pest infestations",
        "Prescribing an inhaled corticosteroid controller for each child",
        "Teaching families to recognize early symptoms of an exacerbation",
        "Standardizing emergency department asthma treatment protocols"
      ],
      answer: [0],
      rationale: "Upstream interventions change the social, economic, and environmental conditions that generate disease; housing policy advocacy removes asthma triggers at their source for the whole population. Controller prescribing is the tempting distractor because it is strong clinical care, but it is a downstream response to disease already produced by the environment. Symptom education and ED protocols are similarly downstream, managing illness rather than preventing exposure.",
      difficulty: "core"
    },
    {
      id: "pophealth-018",
      type: "sata",
      stem: "A practice is implementing a validated social determinants of health screening tool at intake. Which domains should the tool assess? Select all that apply.",
      options: [
        "Food insecurity within the past 12 months",
        "Housing quality and risk of eviction",
        "Reliable transportation to medical appointments and work",
        "Interpersonal safety and exposure to violence",
        "Low-density lipoprotein cholesterol level",
        "Family history of premature coronary disease"
      ],
      answer: [0, 1, 2, 3],
      rationale: "Validated SDOH instruments assess social and environmental domains such as food insecurity, housing, transportation, and interpersonal safety because these conditions shape health outcomes and are actionable through referral. LDL cholesterol and family history are the tempting distractors because they are legitimate risk data, but they are biologic and clinical measures, not social determinants, and belong in the medical assessment rather than an SDOH screen.",
      difficulty: "advanced"
    },
    {
      id: "pophealth-019",
      type: "mcq",
      stem: "An NP is running a catch-up immunization clinic. For which patient should a live attenuated vaccine be withheld?",
      options: [
        "A 30-year-old who is currently pregnant and lacks documented varicella immunity",
        "A 4-year-old with a mild upper respiratory infection and low-grade temperature",
        "A 25-year-old with an egg allergy that causes hives",
        "A breastfeeding mother due for MMR after delivery"
      ],
      answer: [0],
      rationale: "Live attenuated vaccines such as varicella and MMR are contraindicated in pregnancy because of theoretical fetal risk from replicating vaccine virus; vaccination is deferred until postpartum. The child with a mild URI is the tempting distractor because clinicians commonly and incorrectly defer for minor illness, yet mild illness with or without low-grade fever is not a contraindication. Egg allergy and breastfeeding do not preclude MMR.",
      difficulty: "advanced"
    },
    {
      id: "pophealth-020",
      type: "sata",
      stem: "A DNP is categorizing clinic activities by level of prevention for a quality report. Which activities represent secondary prevention? Select all that apply.",
      options: [
        "Screening mammography for average-risk women",
        "Blood pressure screening at a community health fair",
        "Blood lead level testing in asymptomatic toddlers from older housing",
        "Influenza vaccination during fall visits",
        "Cardiac rehabilitation after coronary bypass surgery",
        "Community education on seat belt use"
      ],
      answer: [0, 1, 2],
      rationale: "Mammography, blood pressure screening, and lead testing all detect existing but asymptomatic disease or exposure early, the defining feature of secondary prevention. Influenza vaccination is the classic tempting distractor because it occurs in clinical settings alongside screening, but it prevents disease from ever occurring and is primary prevention, as is seat belt education. Cardiac rehabilitation limits disability from established disease and is tertiary.",
      difficulty: "core"
    }
  ]
});
