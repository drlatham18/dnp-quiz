window.QUIZ_DATA = window.QUIZ_DATA || [];
window.QUIZ_DATA.push({
  topic: "Diagnostic Reasoning",
  slug: "dxreason",
  questions: [
    {
      id: "dxreason-001",
      type: "mcq",
      stem: "An experienced NP glances at a patient with a painful vesicular rash in a unilateral band across the left flank and immediately diagnoses herpes zoster before taking a full history. Which cognitive process best describes this diagnostic approach?",
      options: [
        "System 1 reasoning using rapid, intuitive pattern recognition",
        "System 2 reasoning using slow, deliberate hypothesis testing",
        "Bayesian updating of pretest probability with likelihood ratios",
        "Diagnostic momentum carried forward from a prior clinician"
      ],
      answer: [0],
      rationale: "Instant recognition of a classic presentation without conscious analysis is System 1 processing, built from stored illness scripts and repeated exposure. System 2 is the tempting distractor, but System 2 is slow, effortful, and analytical, which is the opposite of the immediate recognition described. Diagnostic momentum requires a label passed from another clinician, which did not occur here.",
      difficulty: "core"
    },
    {
      id: "dxreason-002",
      type: "mcq",
      stem: "A 52-year-old presents with epigastric discomfort. The NP hears the triage note describing 'probable heartburn' and focuses the entire visit on reflux, discounting the patient's diaphoresis and exertional pattern of symptoms. The patient is later found to have an NSTEMI. Which cognitive bias most directly explains the error?",
      options: [
        "Availability bias",
        "Anchoring bias",
        "Hindsight bias",
        "Framing by the patient's family"
      ],
      answer: [1],
      rationale: "Anchoring is locking onto an initial impression, here the triage label of heartburn, and failing to adjust despite new disconfirming data such as diaphoresis and exertional symptoms. Availability bias is the tempting distractor, but it involves overweighting diagnoses that come easily to mind from recent or memorable cases, not fixation on an initial cue. The error was insufficient adjustment away from the first anchor.",
      difficulty: "core"
    },
    {
      id: "dxreason-003",
      type: "mcq",
      stem: "Two weeks after missing a pulmonary embolism in a young patient, an NP begins ordering CT pulmonary angiography for nearly every patient with pleuritic chest pain, including several with clearly reproducible chest wall tenderness and very low risk scores. Which bias is driving this pattern?",
      options: [
        "Confirmation bias",
        "Premature closure",
        "Availability bias",
        "Diagnostic momentum"
      ],
      answer: [2],
      rationale: "Availability bias is overestimating the probability of a diagnosis because a recent, vivid, or emotionally charged case makes it easy to recall, which inflates perceived pretest probability regardless of the actual clinical picture. Confirmation bias is the tempting distractor, but it describes selectively seeking data that supports an existing hypothesis, whereas here the driver is the memorability of the recent miss, not selective data gathering.",
      difficulty: "core"
    },
    {
      id: "dxreason-004",
      type: "mcq",
      stem: "An NP evaluates a 68-year-old with fatigue, finds a hemoglobin of 10.2, diagnoses anemia of chronic disease, starts documentation, and closes the encounter without asking about melena, weight loss, or ordering iron studies or age-appropriate colon cancer screening follow-up. Three months later the patient is diagnosed with cecal adenocarcinoma. The primary cognitive failure was:",
      options: [
        "Premature closure, accepting a diagnosis before it was adequately verified",
        "Framing effect from the way the lab result was displayed",
        "Overreliance on System 2 analytical reasoning",
        "Base-rate neglect, ignoring how common colon cancer is in the population"
      ],
      answer: [0],
      rationale: "Premature closure is stopping the diagnostic process once a plausible answer is found, failing to ask what else could explain the finding; in an older adult, unexplained anemia demands evaluation for occult GI blood loss. Base-rate neglect is the tempting distractor, but the failure was not a probability miscalculation; it was terminating the workup before verifying the accepted diagnosis and excluding a must-not-miss cause.",
      difficulty: "advanced"
    },
    {
      id: "dxreason-005",
      type: "mcq",
      stem: "An NP suspects a viral upper respiratory infection and, during the exam, mentally registers the clear rhinorrhea and absence of fever while glossing over the patient's report of unilateral facial pain worsening when bending forward and symptoms persisting 12 days. Which bias best describes attending mainly to findings that support the working diagnosis?",
      options: [
        "Diagnostic momentum",
        "Confirmation bias",
        "Affective bias toward a likable patient",
        "Availability bias"
      ],
      answer: [1],
      rationale: "Confirmation bias is selectively noticing, seeking, or weighting evidence that supports the existing hypothesis while discounting disconfirming data, such as the duration and unilateral pain suggesting bacterial rhinosinusitis. Diagnostic momentum is the tempting distractor, but no prior clinician attached a label; the NP generated and then selectively defended their own hypothesis.",
      difficulty: "core"
    },
    {
      id: "dxreason-006",
      type: "mcq",
      stem: "A patient discharged from an urgent care with a diagnosis of 'musculoskeletal back strain' is seen by a covering NP, then a physical therapist, then a second NP, each of whom repeats the strain label in their notes without independent reassessment. By the fourth visit the patient has urinary retention that no one connects to the back pain. Which phenomenon allowed the label to persist unchallenged?",
      options: [
        "Framing effect",
        "Availability bias",
        "Diagnostic momentum",
        "Base-rate neglect"
      ],
      answer: [2],
      rationale: "Diagnostic momentum occurs when a diagnostic label gathers force as it passes from clinician to clinician, becoming accepted fact without independent verification, so new red flags like urinary retention are not integrated. Framing is the tempting distractor because the initial wording influenced later readers, but the defining feature here is the unexamined propagation of the label across multiple handoffs rather than how any single presentation was worded.",
      difficulty: "advanced"
    },
    {
      id: "dxreason-007",
      type: "mcq",
      stem: "A resident presents the same patient to an NP preceptor two ways in a teaching exercise: first as 'a 45-year-old anxious woman with chest tightness during a stressful week' and then as 'a 45-year-old smoker with exertional chest tightness relieved by rest.' The preceptor notes that the first version pulls the listener toward panic disorder and the second toward angina. This demonstrates:",
      options: [
        "The framing effect, where presentation wording shapes diagnostic probability estimates",
        "Premature closure by the resident",
        "System 1 reasoning failing in both presentations",
        "An appropriate use of semantic qualifiers with no bias involved"
      ],
      answer: [0],
      rationale: "Framing bias occurs when the way information is packaged and emphasized, rather than the underlying facts, shifts the listener's diagnostic reasoning; identical data framed differently produced different leading diagnoses. The semantic qualifier distractor is tempting because the second version uses qualifiers like exertional, but the teaching point is that selective emphasis altered probability judgments, which is the definition of framing.",
      difficulty: "advanced"
    },
    {
      id: "dxreason-008",
      type: "mcq",
      stem: "An NP is deciding whether to order a test whose positive likelihood ratio is 1.0 for the target condition. Before ordering, the estimated probability of disease is 30 percent. If the test returns positive, the posttest probability will be:",
      options: [
        "Approximately 60 percent",
        "Approximately 15 percent",
        "30 percent, unchanged from the pretest probability",
        "Impossible to estimate without knowing the prevalence"
      ],
      answer: [2],
      rationale: "A likelihood ratio of 1.0 means the result is equally likely in patients with and without the disease, so pretest odds are multiplied by 1 and probability does not change; the test contributes no diagnostic information. The 60 percent option tempts test-takers who assume any positive result must raise probability, but only likelihood ratios above 1 raise it. The pretest probability of 30 percent already incorporates the relevant prevalence estimate.",
      difficulty: "core"
    },
    {
      id: "dxreason-009",
      type: "mcq",
      stem: "A screening question is applied to a patient whose pretest probability of the condition is only 2 percent. The test has a positive likelihood ratio of 10 and it returns positive. Which statement about the posttest probability is exactly right?",
      options: [
        "It rises to about 90 percent because the likelihood ratio is so high",
        "It rises only to about 17 percent, so the disease remains unlikely despite the strong positive result",
        "It rises to exactly 20 percent because 2 percent multiplied by 10 is 20 percent",
        "It cannot be calculated because likelihood ratios apply only to imaging tests"
      ],
      answer: [1],
      rationale: "Pretest odds are 2 to 98, or about 0.02; multiplying by the likelihood ratio of 10 gives posttest odds of about 0.2, which converts to a probability of roughly 17 percent. The 20 percent option is the classic trap: likelihood ratios multiply odds, not probabilities, so simply multiplying 2 percent by 10 is arithmetically wrong even though it lands close here. The key doctoral-level insight is that a strong positive test applied to a low-prevalence situation still leaves the diagnosis improbable.",
      difficulty: "advanced"
    },
    {
      id: "dxreason-010",
      type: "mcq",
      stem: "An NP estimates a 50 percent pretest probability of heart failure in a dyspneic patient. A natriuretic peptide result carries a negative likelihood ratio of 0.1 and comes back below threshold. The posttest probability of heart failure is now approximately:",
      options: [
        "40 percent",
        "25 percent",
        "9 percent",
        "5 percent"
      ],
      answer: [2],
      rationale: "A pretest probability of 50 percent equals pretest odds of 1; multiplying by the negative likelihood ratio of 0.1 gives posttest odds of 0.1, which equals a probability of 0.1 divided by 1.1, approximately 9 percent. The 5 percent option tempts those who multiply the probability directly by 0.1, but likelihood ratios operate on odds, and converting back from odds of 0.1 yields about 9 percent, not 5 percent.",
      difficulty: "advanced"
    },
    {
      id: "dxreason-011",
      type: "mcq",
      stem: "For a given condition, an NP judges a patient's probability of disease to be well below the test threshold. According to threshold theory, the most appropriate action is to:",
      options: [
        "Order the confirmatory test to be safe",
        "Neither test nor treat, because even a positive result would likely be a false positive with harms outweighing benefit",
        "Treat empirically while awaiting more data",
        "Refer the patient to a specialist for the testing decision"
      ],
      answer: [1],
      rationale: "Below the test threshold, disease probability is so low that testing causes more net harm than benefit, since positives are disproportionately false and lead to unnecessary workup and treatment; the correct move is to withhold both testing and treatment. Ordering the test anyway is the tempting distractor because it feels cautious, but threshold theory exists precisely to show that testing at very low probability is not a neutral act.",
      difficulty: "core"
    },
    {
      id: "dxreason-012",
      type: "mcq",
      stem: "A previously healthy adult presents with classic findings of streptococcal pharyngitis in a community where the NP judges the probability of the diagnosis to be well above the treatment threshold. Applying threshold theory, the NP should:",
      options: [
        "Initiate treatment without further confirmatory testing, since a negative test would not appropriately change management",
        "Order the test anyway because more data always improves decisions",
        "Withhold treatment until probability reaches 100 percent",
        "Lower the treatment threshold so testing becomes necessary"
      ],
      answer: [0],
      rationale: "Above the treatment threshold, the expected benefit of treating exceeds the expected value of further testing; a negative result would most likely be a false negative that should not change the plan, so testing adds cost and delay without improving care. The distractor claiming more data always helps is tempting but wrong: a test is only useful when its result could move probability across a threshold and alter management.",
      difficulty: "advanced"
    },
    {
      id: "dxreason-013",
      type: "mcq",
      stem: "An NP building a differential for acute chest pain lists gastroesophageal reflux as most likely but places acute coronary syndrome, pulmonary embolism, and aortic dissection at the top of the evaluation plan. This ordering strategy is best described as:",
      options: [
        "Most-likely-first prioritization, which is always preferred in primary care",
        "Worst-first prioritization, addressing must-not-miss diagnoses before the statistically probable ones",
        "Availability bias inflating rare diagnoses",
        "Premature closure on cardiac disease"
      ],
      answer: [1],
      rationale: "Worst-first prioritization deliberately evaluates high-lethality, time-sensitive diagnoses before the most statistically likely one, because the cost of missing them is catastrophic and often front-loaded in time. The availability bias distractor is tempting since dangerous diagnoses are memorable, but systematically screening for life threats in chest pain is a sound, intentional strategy rather than a distortion of probability estimates.",
      difficulty: "core"
    },
    {
      id: "dxreason-014",
      type: "mcq",
      stem: "A 41-year-old with two weeks of low back pain reports new numbness in the perineal region when wiping and difficulty starting urination today. The NP's most appropriate next step is:",
      options: [
        "Trial of NSAIDs and physical therapy with follow-up in two weeks",
        "Outpatient lumbar radiographs within the week",
        "Emergent referral for same-day MRI to evaluate for cauda equina syndrome",
        "Reassurance that most back pain resolves within six weeks"
      ],
      answer: [2],
      rationale: "Saddle anesthesia with new urinary dysfunction in a patient with back pain is a red flag constellation for cauda equina syndrome, a surgical emergency where delay risks permanent neurologic and sphincter damage; emergent MRI is mandatory. Conservative care is the tempting distractor because it is correct for uncomplicated back pain, but red flags override the usual most-likely-first pathway.",
      difficulty: "core"
    },
    {
      id: "dxreason-015",
      type: "sata",
      stem: "Select all headache presentations that are red flags mandating immediate diagnostic workup rather than routine outpatient management.",
      options: [
        "Sudden maximal-intensity thunderclap headache reaching peak within one minute",
        "New headache with fever, neck stiffness, and altered mental status",
        "New focal neurologic deficit accompanying the headache",
        "Bilateral band-like pressure headache identical to episodes occurring for the past five years",
        "Mild headache reliably triggered by skipping morning caffeine",
        "New headache with papilledema on fundoscopic exam"
      ],
      answer: [0, 1, 2, 5],
      rationale: "Thunderclap onset suggests subarachnoid hemorrhage, fever with meningismus suggests meningitis, new focal deficits suggest a structural or vascular lesion, and papilledema indicates elevated intracranial pressure; each mandates immediate workup. The long-standing bilateral tension-type pattern is the tempting distractor, but a stable, years-long pattern without new features is reassuring, and caffeine-withdrawal headache is benign and self-explanatory.",
      difficulty: "core"
    },
    {
      id: "dxreason-016",
      type: "sata",
      stem: "Before finalizing a working diagnosis in a complex patient, an NP performs a diagnostic timeout. Select all elements that belong in an effective diagnostic timeout.",
      options: [
        "Asking explicitly what diagnoses could be missed if the current label is wrong",
        "Identifying any findings that do not fit the working diagnosis",
        "Considering the worst-case diagnosis and whether it has been reasonably excluded",
        "Reviewing whether the initial impression anchored subsequent data gathering",
        "Reaffirming the first impression quickly to preserve clinical confidence",
        "Ordering every available test to eliminate all residual uncertainty"
      ],
      answer: [0, 1, 2, 3],
      rationale: "A diagnostic timeout is a structured metacognitive pause: surfacing what might be missed, hunting for disconfirming data, deliberately checking must-not-miss diagnoses, and auditing one's own reasoning for anchoring. Reflexively reaffirming the first impression is the opposite of metacognition, and indiscriminate testing does not resolve uncertainty; it inflates false positives and can push probability estimates in misleading directions.",
      difficulty: "advanced"
    },
    {
      id: "dxreason-017",
      type: "sata",
      stem: "An NP transforms a patient's story into a problem representation before comparing it against illness scripts. Select all examples of correctly applied semantic qualifiers.",
      options: [
        "Restating symptoms of three days duration as an acute presentation",
        "Restating pain in both knees as bilateral involvement",
        "Restating pain that comes and goes as intermittent",
        "Recording the patient's exact words verbatim without abstraction",
        "Listing every current medication with doses in the summary statement"
      ],
      answer: [0, 1, 2],
      rationale: "Semantic qualifiers are paired abstract descriptors, such as acute versus chronic, unilateral versus bilateral, and intermittent versus constant, that translate raw patient language into the abstract terms in which illness scripts are stored, enabling script matching. Recording verbatim quotes is the tempting distractor because accuracy sounds virtuous, but the diagnostic power of a problem representation comes precisely from abstraction, not transcription; a medication list is data, not a qualifier.",
      difficulty: "core"
    },
    {
      id: "dxreason-018",
      type: "mcq",
      stem: "A novice NP and an expert NP both hear the same presentation of an older adult with weight loss, heat intolerance, and atrial fibrillation. The expert immediately considers apathetic hyperthyroidism while the novice generates a long undifferentiated list. The expert's advantage is best explained by:",
      options: [
        "Superior working memory capacity for long differential lists",
        "Richer, more elaborated illness scripts that link enabling conditions, pathophysiology, and consequences for rapid matching",
        "Greater willingness to order broad laboratory panels",
        "Consistent use of System 2 reasoning for every case"
      ],
      answer: [1],
      rationale: "Illness scripts are organized knowledge structures containing predisposing factors, pathophysiologic mechanism, and clinical consequences; experts hold many finely tuned scripts, including atypical variants like apathetic hyperthyroidism in older adults, allowing rapid pattern matching. The System 2 distractor is tempting because expert reasoning seems more rigorous, but experts actually rely more on efficient System 1 script activation, reserving System 2 for cases that do not fit.",
      difficulty: "advanced"
    },
    {
      id: "dxreason-019",
      type: "mcq",
      stem: "A patient's mammogram showed a suspicious lesion, but the result was filed without follow-up and the cancer was identified eight months later after the patient developed a palpable mass. The correct diagnosis was eventually made from information that had been available. This is best classified as which type of diagnostic error?",
      options: [
        "Wrong diagnosis",
        "Missed diagnosis that was never made at any point",
        "Delayed diagnosis",
        "No error, because the diagnosis was ultimately established"
      ],
      answer: [2],
      rationale: "A delayed diagnosis occurs when sufficient information existed to make the diagnosis earlier but the correct label was established only after a clinically meaningful delay, as with the unactioned mammogram. The wrong-diagnosis distractor requires that an incorrect label was actively assigned and treated, which did not happen here; and eventual identification does not erase the error, because the delay itself caused potential harm.",
      difficulty: "core"
    },
    {
      id: "dxreason-020",
      type: "sata",
      stem: "After a thorough workup, an NP still cannot establish a definitive diagnosis for a patient with subacute abdominal symptoms, though dangerous causes appear unlikely. Select all strategies that represent sound management of diagnostic uncertainty.",
      options: [
        "Communicating the uncertainty honestly and framing the working diagnosis as provisional",
        "Providing explicit safety-netting instructions describing which symptoms should trigger urgent return",
        "Scheduling a defined follow-up interval to reassess the evolving picture",
        "Documenting the active differential and the reasoning for deferring further testing",
        "Assigning a definitive-sounding label so the patient feels reassured",
        "Ordering whole-body imaging to eliminate uncertainty completely"
      ],
      answer: [0, 1, 2, 3],
      rationale: "Managing uncertainty well means naming it, safety-netting with concrete return precautions, using time as a diagnostic tool through planned reassessment, and documenting the open differential so future clinicians do not inherit false certainty. Assigning a falsely definitive label is the tempting distractor because it feels kind, but it invites diagnostic momentum and premature closure; whole-body imaging generates incidental findings and false positives rather than resolution.",
      difficulty: "advanced"
    }
  ]
});
