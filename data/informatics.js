window.QUIZ_DATA = window.QUIZ_DATA || [];
window.QUIZ_DATA.push({
  topic: "Healthcare Informatics",
  slug: "informatics",
  questions: [
    {
      id: "informatics-001",
      type: "mcq",
      stem: "A DNP is orienting new providers who ask why the organization tracks measures such as e-prescribing rates and providing patients electronic access to their records. Which explanation best captures the policy intent behind these federal EHR incentive-era requirements?",
      options: [
        "They exist to maximize vendor licensing revenue",
        "They were designed to move providers beyond merely installing EHRs to using them in ways that measurably improve care and information exchange",
        "They apply only to hospitals, never to individual clinicians",
        "They require that all documentation be completed by physicians"
      ],
      answer: [1],
      rationale: "The meaningful use program, later reframed as promoting interoperability, tied incentives to demonstrated use of certified EHRs for care improvement, patient access, and health information exchange, not mere adoption. The hospitals-only option is the tempting distractor because hospital requirements are prominent, but eligible clinicians were always included. The intent was better and safer care through use, not vendor revenue or documentation role rules.",
      difficulty: "core"
    },
    {
      id: "informatics-002",
      type: "mcq",
      stem: "An EHR displays a corollary order suggestion for potassium monitoring when a provider prescribes a loop diuretic, and separately offers an order set for community-acquired pneumonia. How are these two supports best classified?",
      options: [
        "Both are alerts triggered by dangerous conditions",
        "The corollary suggestion is proactive knowledge-based support tied to an ordering event, while the order set is a passive support that standardizes evidence-based choices",
        "Both are examples of natural language processing",
        "The order set is a hard stop and the suggestion is documentation support"
      ],
      answer: [1],
      rationale: "Clinical decision support spans multiple forms: event-triggered suggestions push knowledge at the moment of ordering, while order sets passively organize evidence-based defaults the clinician chooses to open. Calling both alerts is the tempting distractor because alerts are the most familiar CDS form, but conflating all CDS with interruptive alerting leads teams to overuse pop-ups. Neither example involves language processing or a hard stop.",
      difficulty: "core"
    },
    {
      id: "informatics-003",
      type: "mcq",
      stem: "A safety review finds prescribers override 96 percent of drug interaction alerts, including a clinically significant one that preceded a patient harm event. What is the most defensible system-level response?",
      options: [
        "Discipline the providers who overrode the significant alert",
        "Add a second confirmation click to every interaction alert",
        "Retire or tier low-value alerts so high-severity warnings become rare, distinctive, and harder to dismiss reflexively",
        "Disable all interaction alerting until the vendor redesigns the module"
      ],
      answer: [2],
      rationale: "A 96 percent override rate signals alert fatigue: excessive low-value interruptions train clinicians to dismiss everything, so the fix is curating the knowledge base and tiering severity to restore signal. Adding confirmation clicks is the tempting distractor because it feels like added safety, but it increases interruption burden and worsens the habituation that caused the miss. Disciplining individuals or disabling all alerts both ignore the systems origin of the failure.",
      difficulty: "advanced"
    },
    {
      id: "informatics-004",
      type: "mcq",
      stem: "A health system is choosing between an interface built on traditional HL7 version 2 messaging and one using FHIR APIs. Which statement best characterizes the conceptual difference?",
      options: [
        "HL7 v2 sends event-triggered messages between systems, while FHIR exposes discrete resources through web-standard APIs that applications can query on demand",
        "FHIR is a proprietary vendor format while HL7 v2 is the only open standard",
        "HL7 v2 is used only for imaging while FHIR is used only for billing",
        "The two standards are identical and differ only in name"
      ],
      answer: [0],
      rationale: "HL7 v2 is a message-oriented standard pushing data when events occur, such as admissions or results, while FHIR represents clinical data as modular resources accessible via modern web APIs, enabling on-demand app queries. The proprietary-format option is the tempting distractor because vendor implementations vary, but both standards are open and published by HL7 International. Neither standard is confined to imaging or billing.",
      difficulty: "core"
    },
    {
      id: "informatics-005",
      type: "mcq",
      stem: "A patient asks why the clinic emails appointment reminders without her signed authorization, yet her request for a list of everyone who viewed her chart went to a different compliance process. Which distinction explains the clinic's handling?",
      options: [
        "The Privacy Rule governs permitted uses and disclosures of protected health information in any form, while the Security Rule specifically requires safeguards, including audit controls, for electronic PHI",
        "The Security Rule permits reminders and the Privacy Rule covers only paper records",
        "Neither rule applies to appointment reminders because they contain no health information",
        "Audit logs are optional courtesies with no regulatory basis"
      ],
      answer: [0],
      rationale: "The Privacy Rule defines when PHI may be used or disclosed, and treatment-related communications such as reminders are permitted without authorization; the Security Rule mandates administrative, physical, and technical safeguards for electronic PHI, including the audit controls behind access reviews. The reversed option is the tempting distractor because the rules are commonly swapped; remember the Security Rule applies only to electronic PHI while the Privacy Rule covers all forms. Reminders do involve PHI, and audit logging is a regulatory requirement.",
      difficulty: "core"
    },
    {
      id: "informatics-006",
      type: "sata",
      stem: "Under the HIPAA Security Rule, which items are examples of the required categories of safeguards for electronic protected health information? Select all that apply.",
      options: [
        "Workforce security training and sanction policies",
        "Automatic session timeouts and unique user authentication",
        "Locked server rooms and workstation placement controls",
        "Marketing authorization forms for selling patient lists",
        "Encryption of data transmitted over open networks"
      ],
      answer: [0, 1, 2, 4],
      rationale: "The Security Rule organizes protections into administrative safeguards such as training and sanctions, technical safeguards such as authentication, timeouts, and transmission encryption, and physical safeguards such as facility and workstation controls. Marketing authorization is the tempting distractor because it is a real HIPAA concept, but it belongs to the Privacy Rule's authorization requirements, not the Security Rule's safeguard framework.",
      difficulty: "core"
    },
    {
      id: "informatics-007",
      type: "sata",
      stem: "A DNP is designing a telehealth program for chronic disease management across a multi-state patient panel. Which considerations are essential to address before launch? Select all that apply.",
      options: [
        "Licensure requirements in the state where each patient is located at the time of the visit",
        "A protocol for triaging patients whose presentation exceeds what can be safely assessed remotely",
        "Verifying that the chosen platform meets privacy and security requirements for PHI",
        "Guaranteeing patients that telehealth outcomes always equal in-person care",
        "Assessing patient access to devices, connectivity, and digital literacy to avoid widening disparities",
        "Requiring every patient to first complete an in-person visit at headquarters regardless of clinical need"
      ],
      answer: [0, 1, 2, 4],
      rationale: "Telehealth practice requires licensure where the patient is located, escalation pathways for exam limitations, a secure compliant platform, and attention to the digital divide so access technology does not deepen inequity. The blanket in-person-first requirement is the tempting distractor because some payers and statutes impose relationship rules in specific contexts, but a universal headquarters visit is neither a general legal requirement nor patient-centered. Guaranteeing equivalent outcomes misrepresents the evidence, which varies by condition and service.",
      difficulty: "advanced"
    },
    {
      id: "informatics-008",
      type: "mcq",
      stem: "A quality team pulls EHR data to report hypertension control rates and finds blood pressures recorded in free-text notes, flowsheets, and a device interface, with duplicate and conflicting values. Which data quality insight is most important for the DNP to communicate?",
      options: [
        "Data collected for clinical documentation cannot be reused for quality measurement under any circumstances",
        "Secondary use of clinical data requires assessing completeness, consistency, and provenance, because data captured for care were not structured for measurement",
        "The largest recorded value should always be reported to be safe",
        "Free-text values are automatically more accurate than structured fields"
      ],
      answer: [1],
      rationale: "Clinical data are captured to support care, so secondary uses such as quality reporting demand explicit evaluation of completeness, consistency across sources, and provenance before the numbers are trusted. The cannot-ever-reuse option is the tempting distractor because it overcorrects; secondary use is legitimate and routine when data quality is assessed and limitations disclosed. Arbitrary value selection and assumptions about free-text superiority both ignore provenance.",
      difficulty: "core"
    },
    {
      id: "informatics-009",
      type: "mcq",
      stem: "Nurses on a medical unit maintain a paper workaround listing pending discharges because the EHR discharge dashboard requires seven clicks across three screens. From a usability and workflow perspective, what does the persistence of this workaround most strongly indicate?",
      options: [
        "The nurses need remedial EHR training",
        "The system design does not match the real workflow, and the workaround is diagnostic evidence that should drive redesign",
        "Paper is inherently superior for discharge planning",
        "The workaround is harmless and should be formally adopted as policy"
      ],
      answer: [1],
      rationale: "Persistent workarounds are classic evidence of poor fit between technology design and actual workflow; usability analysis treats them as diagnostic signals pointing to where redesign is needed. Blaming training is the tempting distractor because training is the default organizational reflex, but no amount of training fixes a seven-click path that competes with a glance at paper. Formalizing the workaround entrenches a parallel record with safety and data integrity risks.",
      difficulty: "core"
    },
    {
      id: "informatics-010",
      type: "mcq",
      stem: "Before replacing a medication administration system, a DNP shadows nurses and maps each step from order verification to documentation, including interruptions and batching behaviors. What is the primary informatics rationale for doing this before implementation?",
      options: [
        "To identify staff who deviate from policy for corrective action",
        "To understand current-state workflow so the new system supports rather than disrupts actual practice, preventing unsafe workarounds after go-live",
        "To satisfy a vendor contract clause with no clinical value",
        "To calculate nurse staffing ratios for the budget office"
      ],
      answer: [1],
      rationale: "Workflow analysis documents how work actually happens, including interruptions and adaptations, so the future system can be configured to fit practice; systems imposed on unexamined workflows reliably generate workarounds and new error pathways. The corrective-action option is the tempting distractor because observation can reveal deviations, but using it punitively poisons the trust needed for honest process mapping and misses that deviations often signal design flaws. Staffing math is not the purpose of implementation-focused workflow mapping.",
      difficulty: "core"
    },
    {
      id: "informatics-011",
      type: "mcq",
      stem: "One year after launching a patient portal, an organization finds portal enrollment is high among commercially insured English-speaking patients but very low among older adults and patients with limited English proficiency, and unreviewed portal messages have caused delayed responses. What should a DNP conclude?",
      options: [
        "The portal is a success because total enrollment is rising",
        "Engagement technology can widen disparities and create new safety obligations, so the rollout needs targeted enrollment support, language access, and a managed message workflow",
        "Portals should be retired in favor of telephone-only communication",
        "Message delays are acceptable because portals are optional services"
      ],
      answer: [1],
      rationale: "Patient engagement tools deliver benefit unevenly without deliberate attention to digital literacy, language, and access, and inbound messaging creates a clinical obligation that requires staffed triage workflows. The success-by-enrollment option is the tempting distractor because aggregate adoption metrics hide distributional gaps, which is precisely the equity trap in engagement technology. Retiring the portal abandons benefit rather than fixing implementation.",
      difficulty: "advanced"
    },
    {
      id: "informatics-012",
      type: "mcq",
      stem: "An evaluation of a new sepsis screening tool measures only whether clinicians can complete screening quickly in a usability lab. A DNP argues the evaluation is incomplete. Which addition best reflects a sociotechnical evaluation framework?",
      options: [
        "Repeat the same lab test with a larger sample",
        "Examine the tool in live use, including its interaction with staffing, communication patterns, organizational policies, and downstream clinical outcomes over time",
        "Survey only the vendor's implementation team",
        "Limit evaluation to counting logins per day"
      ],
      answer: [1],
      rationale: "Sociotechnical frameworks hold that health IT effects emerge from the interaction of technology with people, workflow, organization, and environment, so evaluation must extend beyond lab task performance into live-context use and outcomes across the implementation lifecycle. Enlarging the lab sample is the tempting distractor because it improves statistical confidence while leaving the construct problem untouched: efficiency in isolation says little about real-world fit. Vendor surveys and login counts measure neither use quality nor outcomes.",
      difficulty: "advanced"
    },
    {
      id: "informatics-013",
      type: "mcq",
      stem: "A readmission-risk algorithm trained on historical utilization data assigns lower risk scores to patients from a population that historically had poor access to care and therefore fewer recorded encounters. What is the core problem a DNP should identify?",
      options: [
        "The algorithm uses too many variables to be practical",
        "Historical access barriers embedded in training data cause the model to underestimate need in already underserved patients, perpetuating inequity",
        "Risk models are prohibited from using utilization data",
        "The model is acceptable because it reflects the data accurately"
      ],
      answer: [1],
      rationale: "When utilization proxies for need, patients whose access barriers suppressed past encounters look artificially low-risk, so the algorithm systematically directs resources away from those who need them most, a well-documented bias mechanism. The reflects-the-data option is the tempting distractor because the model may indeed fit its training data well; the failure is that the data encode inequity, so fidelity to the data reproduces it. Variable count and the legality of utilization data are not the issue.",
      difficulty: "advanced"
    },
    {
      id: "informatics-014",
      type: "mcq",
      stem: "A vendor offers a deterioration-prediction model reporting excellent performance at its development sites. Before clinical deployment, what should a DNP-led governance committee require first?",
      options: [
        "Immediate activation for all units to maximize benefit",
        "Validation of the model's performance on the organization's own patient population, with monitoring for drift and defined clinical response workflows",
        "A marketing review of the vendor's published testimonials",
        "Removal of all human review from alerts to increase efficiency"
      ],
      answer: [1],
      rationale: "Model performance frequently degrades when transported to populations, documentation practices, and workflows different from the development environment, so local validation, ongoing drift monitoring, and clear response protocols are prerequisites for safe use. Immediate broad activation is the tempting distractor because published performance seems to justify urgency, but unvalidated deployment risks both missed deterioration and alert fatigue. Testimonials are not evidence, and removing human judgment inverts the assistive role of clinical algorithms.",
      difficulty: "advanced"
    },
    {
      id: "informatics-015",
      type: "mcq",
      stem: "A quality team needs laboratory results exchanged between systems to be identified consistently, and clinical problems coded in a comprehensive reference terminology. Which pairing reflects the conventional roles of standard terminologies?",
      options: [
        "LOINC identifies laboratory and other observations, while SNOMED CT encodes clinical findings, problems, and procedures",
        "SNOMED CT identifies lab tests, while LOINC codes nursing diagnoses",
        "Both terminologies are interchangeable billing code sets",
        "NANDA replaces both for all interoperability purposes"
      ],
      answer: [0],
      rationale: "By convention, LOINC provides universal identifiers for observations and test names, answering what was measured, while SNOMED CT provides concepts for findings, disorders, and procedures, answering what was observed or done. The reversed pairing is the tempting distractor because both are large clinical vocabularies and learners routinely swap them. Neither is a billing code set, and NANDA is a nursing diagnosis classification, not a general interoperability terminology.",
      difficulty: "core"
    },
    {
      id: "informatics-016",
      type: "sata",
      stem: "Which statements accurately describe the purpose of standardized nursing terminologies such as NANDA-I, NIC, and NOC within electronic documentation? Select all that apply.",
      options: [
        "They make nursing diagnoses, interventions, and outcomes visible and countable in clinical data",
        "They enable aggregation of nursing data for research and quality comparison across settings",
        "They can be mapped to reference terminologies to support interoperability",
        "They exist primarily to generate physician billing codes",
        "They eliminate the need for any narrative documentation"
      ],
      answer: [0, 1, 2],
      rationale: "Standardized nursing languages capture the nursing process in structured, comparable form, making nursing's contribution analyzable across settings and mappable to reference terminologies such as SNOMED CT for exchange. The billing option is the tempting distractor because coded data and billing feel linked, but these terminologies represent nursing care, not professional fee coding. Narrative documentation still complements structured entry for context and nuance.",
      difficulty: "core"
    },
    {
      id: "informatics-017",
      type: "mcq",
      stem: "After CPOE implementation, transcription errors from handwritten orders disappear, but the organization begins seeing orders placed on the wrong patient when clinicians keep multiple charts open, and duplicate orders from confusing screen layouts. What informatics principle do these findings illustrate?",
      options: [
        "CPOE increases errors overall and should be reversed",
        "Technology eliminates one class of errors while introducing new technology-induced error types that require ongoing surveillance and design refinement",
        "Wrong-patient errors are solely the fault of careless clinicians",
        "Duplicate orders are clinically harmless"
      ],
      answer: [1],
      rationale: "CPOE reliably removes handwriting and transcription failures but creates new e-iatrogenic error modes, such as juxtaposition and wrong-patient selection errors, which demand monitoring and iterative design fixes like patient verification prompts and single-chart constraints. The reversal option is the tempting distractor because new errors feel like net harm, but the evidence favors CPOE overall when organizations actively manage the new failure modes. Blaming individuals ignores the design contribution, and duplicates can cause real harm.",
      difficulty: "advanced"
    },
    {
      id: "informatics-018",
      type: "sata",
      stem: "A medication safety committee is prioritizing clinical decision support to reduce prescribing errors at the point of order entry. Which interventions represent CDS appropriately targeted at that goal? Select all that apply.",
      options: [
        "Dose-range checking with alerts calibrated to patient weight and renal function",
        "Default order sentences that pre-populate evidence-based dose, route, and frequency",
        "A hard stop for a small set of never-combine drug pairs with documented catastrophic interactions",
        "An interruptive alert for every formulary medication regardless of risk",
        "A monthly emailed newsletter listing all prescribing policies"
      ],
      answer: [0, 1, 2],
      rationale: "Effective ordering-focused CDS matches intervention strength to risk: patient-specific dose checking, well-built defaults that make the right choice the easy choice, and rare hard stops reserved for catastrophic combinations. Alerting on every medication is the tempting distractor because more alerts feel like more safety, but indiscriminate interruption drives fatigue and dismissal of the alerts that matter. A newsletter is knowledge dissemination, not decision support at the point of care.",
      difficulty: "advanced"
    },
    {
      id: "informatics-019",
      type: "mcq",
      stem: "Two health systems can exchange continuity-of-care documents, but the receiving EHR files the data as an unparsed attachment clinicians rarely open, and medication lists cannot be reconciled automatically. Which conclusion about interoperability is most accurate?",
      options: [
        "Full interoperability has been achieved because documents arrive successfully",
        "The systems have achieved transport-level exchange, but semantic interoperability, where received data are understood and usable by the receiving system, is still lacking",
        "Interoperability is impossible between different vendors",
        "The problem would be solved by faxing the documents instead"
      ],
      answer: [1],
      rationale: "Interoperability is layered: moving a document proves foundational and structural exchange, but semantic interoperability requires coded, standardized content the receiving system can parse into usable, reconcilable data. The full-achievement option is the tempting distractor because successful transmission looks like success, yet an unopened attachment delivers little clinical value. Cross-vendor exchange is achievable with shared standards, and fax regresses to an even less computable form.",
      difficulty: "advanced"
    },
    {
      id: "informatics-020",
      type: "mcq",
      stem: "A researcher requests a dataset of patient records for a retrospective study and proposes removing names and street addresses but retaining full dates of service and five-digit ZIP codes for a rare disease cohort. What should a DNP on the data governance committee recognize?",
      options: [
        "The dataset is fully de-identified because names are removed",
        "Re-identification risk remains because quasi-identifiers such as dates, geography, and a rare condition can be combined to single out individuals, so further de-identification or governance controls are needed",
        "Research use of clinical data never requires privacy review",
        "Only genetic data can ever re-identify a patient"
      ],
      answer: [1],
      rationale: "De-identification is about the whole combination of fields: dates, small-area geography, and rarity act as quasi-identifiers that can uniquely pinpoint individuals even without names, which is why de-identification standards address these elements specifically. The names-removed option is the tempting distractor because removing direct identifiers feels sufficient, but linkage attacks exploit exactly the remaining fields. Secondary research use of identifiable data requires appropriate privacy review and governance.",
      difficulty: "advanced"
    }
  ]
});
