window.QUIZ_DATA = window.QUIZ_DATA || [];
window.QUIZ_DATA.push({
  topic: "Evidence-Based Practice & Research",
  slug: "ebp",
  questions: [
    {
      id: "ebp-001",
      type: "mcq",
      stem: "A DNP-prepared NP is evaluating evidence to answer an intervention question about whether early mobility protocols reduce ICU delirium. Which source represents the highest level of evidence for this question?",
      options: [
        "A well-conducted systematic review with meta-analysis of randomized controlled trials",
        "A single large multisite randomized controlled trial",
        "A prospective cohort study following 5000 ICU patients",
        "A national consensus statement authored by critical care experts"
      ],
      answer: [0],
      rationale: "For intervention questions, a systematic review with meta-analysis of RCTs sits at the top of the evidence hierarchy because it synthesizes all relevant trials, increasing precision and reducing the influence of any single flawed study. A single RCT, however large, is one level lower because its findings have not been replicated or synthesized. Expert consensus is near the bottom of the hierarchy regardless of the prestige of the authors.",
      difficulty: "core"
    },
    {
      id: "ebp-002",
      type: "mcq",
      stem: "A DNP student is drafting a PICOT question about reducing 30-day heart failure readmissions. Which version is best constructed to guide a focused literature search?",
      options: [
        "In adults hospitalized with heart failure (P), does nurse-led telephone follow-up within 72 hours of discharge (I), compared with usual discharge care (C), reduce 30-day all-cause readmissions (O) over a 6-month implementation period (T)?",
        "Does better discharge teaching help heart failure patients do well after they leave the hospital?",
        "In heart failure patients, what interventions reduce readmissions, mortality, cost, and improve quality of life and satisfaction?",
        "In adults with heart failure, does telephone follow-up work?"
      ],
      answer: [0],
      rationale: "A strong PICOT question names a specific population, a specific intervention, an explicit comparator, a measurable outcome, and a time frame, all of which the correct option contains. The option listing readmissions, mortality, cost, quality of life, and satisfaction is tempting because it is thorough, but bundling many outcomes produces an unfocused question that cannot direct a targeted search. The other options omit the comparator, outcome measurement, or time frame.",
      difficulty: "core"
    },
    {
      id: "ebp-003",
      type: "mcq",
      stem: "A published systematic review on fall-prevention bundles states that the authors did not perform a meta-analysis because of clinical heterogeneity among the included studies. What does the absence of a meta-analysis mean here?",
      options: [
        "The authors did not statistically pool effect estimates from the individual studies into a single summary estimate",
        "The review lacked a comprehensive, reproducible search strategy",
        "The review included only qualitative studies, so no numeric results existed",
        "The review is no longer considered a legitimate systematic review"
      ],
      answer: [0],
      rationale: "A meta-analysis is the statistical technique of pooling results from multiple studies into a summary effect estimate; a systematic review is the structured process of searching, selecting, and appraising the evidence. A review can be fully systematic without pooling when studies are too heterogeneous to combine meaningfully. The distractor claiming it is no longer a legitimate systematic review confuses the synthesis method with the review process itself.",
      difficulty: "core"
    },
    {
      id: "ebp-004",
      type: "mcq",
      stem: "Using GRADE, a guideline panel rates a body of evidence from randomized trials on a new anticoagulant. The panel downgrades one level for serious imprecision due to wide confidence intervals but finds no other concerns. What is the resulting certainty rating?",
      options: [
        "Moderate certainty",
        "High certainty",
        "Low certainty",
        "Very low certainty"
      ],
      answer: [0],
      rationale: "In GRADE, evidence from randomized trials starts at high certainty; a single one-level downgrade for serious imprecision moves it to moderate. High certainty is the tempting distractor because the studies are RCTs, but GRADE rates the body of evidence, not the design alone, and the downgrade must be applied. Low would require two downgrade levels in total.",
      difficulty: "advanced"
    },
    {
      id: "ebp-005",
      type: "mcq",
      stem: "In an RCT of an exercise program for chronic pain, 30 percent of the intervention group withdrew versus 8 percent of controls, and the authors analyzed only participants who completed the study. Which risk-of-bias domain is most directly threatened?",
      options: [
        "Attrition bias from differential loss to follow-up and per-protocol analysis",
        "Selection bias from inadequate random sequence generation",
        "Detection bias from unblinded outcome assessors",
        "Performance bias from participants knowing their group assignment"
      ],
      answer: [0],
      rationale: "Large and unequal dropout combined with a completers-only analysis threatens attrition bias, because those who withdrew likely differ systematically from completers and intention-to-treat principles were violated. Selection bias is the tempting distractor, but it concerns how participants were allocated at entry, not who remained at the end. Nothing in the scenario describes blinding of assessors or participants.",
      difficulty: "advanced"
    },
    {
      id: "ebp-006",
      type: "sata",
      stem: "A DNP student reviews a study exploring how rural caregivers experience dementia care burden. Select all the features consistent with a qualitative design.",
      options: [
        "Purposive sampling continued until data saturation was reached",
        "Semi-structured interviews audio-recorded and transcribed verbatim",
        "Thematic analysis with an audit trail to support confirmability",
        "Random assignment of caregivers to intervention and control groups",
        "An a priori power analysis used to fix the sample size",
        "Effect sizes with 95 percent confidence intervals for the primary outcome"
      ],
      answer: [0, 1, 2],
      rationale: "Qualitative inquiry uses purposive sampling to saturation, interview data, and thematic or content analysis with trustworthiness strategies such as audit trails. Random assignment, power analysis, and effect-size estimation belong to quantitative designs; power analysis is the most tempting distractor because it involves sample size, but qualitative sample size is judged by saturation, not statistical power.",
      difficulty: "core"
    },
    {
      id: "ebp-007",
      type: "mcq",
      stem: "Following the Iowa Model, a team appraises the evidence on chlorhexidine bathing and judges it sufficient to support a practice change. According to the model, what is the appropriate next step?",
      options: [
        "Pilot the practice change on a single unit and evaluate the results before wider adoption",
        "Implement the change across the entire organization immediately",
        "Design an original randomized controlled trial to confirm the findings",
        "Postpone action until a national guideline formally endorses the practice"
      ],
      answer: [0],
      rationale: "The Iowa Model directs teams to pilot a change in a limited setting, evaluate process and outcome data, and only then decide whether to adopt it organization-wide. Immediate house-wide implementation is tempting when evidence is strong, but it skips the local feasibility test that the model requires. Conducting new research is the pathway only when evidence is insufficient, which is not the case here.",
      difficulty: "core"
    },
    {
      id: "ebp-008",
      type: "mcq",
      stem: "A sepsis bundle supported by strong trial evidence succeeded on one unit but failed on another with disengaged leadership, no local champion, and no one assigned to coach staff. Which explanation aligns best with the PARIHS framework?",
      options: [
        "Successful implementation depends on evidence, context, and facilitation together, and the failing unit lacked a receptive context and active facilitation",
        "The failure proves the underlying trial evidence was weaker than originally appraised",
        "Implementation success is determined primarily by the strength of the evidence, so the bundle itself must be revised",
        "Staff on the failing unit were late adopters and will comply once the innovation reaches critical mass"
      ],
      answer: [0],
      rationale: "PARIHS holds that successful implementation is a function of the evidence, the context (culture, leadership, evaluation), and facilitation, so strong evidence can still fail in a weak context with no facilitator. The distractor blaming the evidence is tempting because outcomes differed, but the same evidence succeeded elsewhere, pointing to context rather than the science. The late-adopter explanation belongs to Rogers diffusion theory, not PARIHS.",
      difficulty: "advanced"
    },
    {
      id: "ebp-009",
      type: "mcq",
      stem: "Using the Knowledge-to-Action framework, a team has selected a pressure injury guideline and adapted it to their local context. Which action-cycle phase comes next?",
      options: [
        "Assess barriers and facilitators to using the adapted knowledge in the local setting",
        "Monitor the extent of knowledge use across the organization",
        "Evaluate patient outcomes attributable to the change",
        "Develop strategies to sustain ongoing knowledge use"
      ],
      answer: [0],
      rationale: "In the Knowledge-to-Action cycle, adapting knowledge to the local context is followed by assessing barriers and facilitators, which then informs the selection and tailoring of implementation interventions. Monitoring use and evaluating outcomes are tempting because they are familiar project steps, but they occur later in the cycle, after interventions have been deployed. Sustainability planning is the final phase.",
      difficulty: "advanced"
    },
    {
      id: "ebp-010",
      type: "mcq",
      stem: "To boost uptake of a new smart infusion pump, a nurse manager lets each nurse trial the pump on a limited basis for one shift with support available before the mandatory switch. Which attribute of innovations from Rogers diffusion theory is being leveraged?",
      options: [
        "Trialability",
        "Observability",
        "Compatibility",
        "Relative advantage"
      ],
      answer: [0],
      rationale: "Trialability is the degree to which an innovation can be experimented with on a limited basis, and letting nurses test the pump for one shift is a direct application of it. Observability is the tempting distractor because others may watch the trial, but observability refers to the visibility of an innovation's results, not the opportunity to try it oneself. Compatibility and relative advantage describe fit with values and perceived superiority, neither of which is manipulated here.",
      difficulty: "core"
    },
    {
      id: "ebp-011",
      type: "mcq",
      stem: "A DNP student implements an existing evidence-based diabetes group-visit model in one clinic to improve local A1c performance. Which characteristic most clearly distinguishes this DNP project from research?",
      options: [
        "Its purpose is to translate established evidence to improve outcomes in a specific local setting rather than to generate new generalizable knowledge",
        "It involves human participants, which research never does at the doctoral level",
        "It collects quantitative outcome data such as A1c values",
        "It requires a smaller sample size than any research study would"
      ],
      answer: [0],
      rationale: "The defining distinction is intent: DNP scholarly projects translate and apply existing evidence to a local practice problem, while research is designed to produce new generalizable knowledge. The quantitative-data distractor is tempting because people equate numbers with research, but QI projects routinely collect quantitative outcomes. Sample size and the mere involvement of humans do not separate the two.",
      difficulty: "core"
    },
    {
      id: "ebp-012",
      type: "sata",
      stem: "A DNP student is planning project activities. Select all the activities that require IRB review before beginning.",
      options: [
        "Interviewing patients about their care experiences to develop generalizable findings for dissemination as research",
        "A retrospective chart review extracting identifiable patient data to test a research hypothesis",
        "Surveying staff on a sensitive workplace topic while collecting identifiable responses for a research study",
        "Piloting a protocol in a study explicitly designed to produce generalizable knowledge about its effectiveness",
        "An internal hand hygiene audit used solely for unit-level performance feedback",
        "A literature review synthesizing previously published studies"
      ],
      answer: [0, 1, 2, 3],
      rationale: "Activities that meet the regulatory definition of research with human subjects, meaning systematic investigations designed to develop generalizable knowledge involving identifiable data or interaction, require IRB review; the first four options all fit. The internal audit is the tempting distractor because it collects data on people, but data used only for local operational improvement is generally not human subjects research, though institutional determination is still prudent. A literature review involves no human subjects at all.",
      difficulty: "advanced"
    },
    {
      id: "ebp-013",
      type: "mcq",
      stem: "A team implements a CAUTI prevention bundle. Using the Proctor taxonomy, which measure is an implementation outcome rather than a clinical outcome?",
      options: [
        "The percentage of catheter insertions in which every bundle element was completed as designed",
        "The CAUTI rate per 1000 catheter days",
        "Average hospital length of stay for catheterized patients",
        "Patient-reported comfort during catheterization"
      ],
      answer: [0],
      rationale: "The proportion of insertions performed with all bundle elements measures fidelity, an implementation outcome describing how well the intervention was delivered as intended. The CAUTI rate is the tempting distractor because it is the project's headline number, but it is a clinical outcome reflecting patient health, not the implementation process. Distinguishing the two matters because a bundle can fail clinically simply because it was never implemented with fidelity.",
      difficulty: "advanced"
    },
    {
      id: "ebp-014",
      type: "sata",
      stem: "Twelve months after a successful fall-prevention rollout, a DNP leader wants the change to endure. Select all the strategies that support sustainability.",
      options: [
        "Embedding the protocol into electronic order sets, policies, and orientation materials",
        "Maintaining unit champions with a defined ongoing role",
        "Continuing periodic audit with feedback of performance data to staff",
        "Building the practice into onboarding so it survives staff and leadership turnover",
        "Relying on the one-time education completed at go-live",
        "Discontinuing all monitoring once the fall-rate target is first achieved"
      ],
      answer: [0, 1, 2, 3],
      rationale: "Sustainability depends on hardwiring the change into systems, sustaining ownership through champions, continuing audit and feedback, and protecting the practice against turnover. Stopping monitoring after the first success is the tempting distractor because the goal was met, but performance typically drifts back toward baseline once feedback loops disappear. One-time education decays quickly and cannot maintain a practice on its own.",
      difficulty: "core"
    },
    {
      id: "ebp-015",
      type: "mcq",
      stem: "While appraising a clinical practice guideline with AGREE II, an NP examines whether the developers used systematic search methods, explicit evidence selection criteria, and clearly described methods for formulating recommendations. Which AGREE II domain is being assessed?",
      options: [
        "Rigor of development",
        "Scope and purpose",
        "Editorial independence",
        "Applicability"
      ],
      answer: [0],
      rationale: "Rigor of development covers the search strategy, evidence selection criteria, strengths and limitations of the evidence, and the link between evidence and recommendations. Scope and purpose is the tempting distractor because appraisal often starts there, but it addresses the guideline's objectives and target population, not its methods. Editorial independence concerns funding and conflicts of interest, and applicability concerns implementation supports.",
      difficulty: "core"
    },
    {
      id: "ebp-016",
      type: "mcq",
      stem: "In a trial of a wound care protocol, group assignments were held in translucent envelopes, and enrolling nurses admitted holding envelopes to the light before consenting patients. Which safeguard failed, and against what bias does it protect?",
      options: [
        "Allocation concealment failed, permitting selection bias at enrollment",
        "Blinding of outcome assessors failed, permitting detection bias",
        "Randomization sequence generation failed, producing confounding at baseline",
        "Participant blinding failed, permitting performance bias"
      ],
      answer: [0],
      rationale: "Allocation concealment prevents recruiters from foreseeing upcoming assignments; when enrollers can see the next allocation, they can consciously or unconsciously steer certain patients into certain groups, which is selection bias. Sequence generation is the tempting distractor, but the random sequence itself may have been perfectly generated; the failure was in concealing it during enrollment. Blinding issues arise after allocation and are not described here.",
      difficulty: "advanced"
    },
    {
      id: "ebp-017",
      type: "mcq",
      stem: "An NP asks: how do young adults with type 1 diabetes experience the transition to insulin pump therapy? Which evidence source best matches this question?",
      options: [
        "A metasynthesis of qualitative studies on the pump transition experience",
        "A meta-analysis of randomized trials comparing pump therapy with injections",
        "A retrospective cohort study of glycemic outcomes after pump initiation",
        "A cross-sectional survey measuring average satisfaction scores"
      ],
      answer: [0],
      rationale: "This is a meaning question about lived experience, for which qualitative evidence, and at the highest level a metasynthesis, is the best fit; the evidence hierarchy is question-dependent, not absolute. The meta-analysis of RCTs is the tempting distractor because it tops the intervention hierarchy, but it answers whether pumps improve outcomes, not how patients experience the transition. Satisfaction scores quantify an attitude without capturing the experience itself.",
      difficulty: "core"
    },
    {
      id: "ebp-018",
      type: "sata",
      stem: "A DNP student appraises a systematic review before using it to justify a practice change. Select all the features that indicate methodological rigor.",
      options: [
        "The review protocol was registered before the search began",
        "Multiple databases plus grey literature sources were searched",
        "Two reviewers independently screened studies and extracted data",
        "A formal risk-of-bias assessment was applied to every included study",
        "Inclusion was limited to studies reporting statistically significant benefits",
        "The search was restricted to a single database to keep the project feasible"
      ],
      answer: [0, 1, 2, 3],
      rationale: "A priori protocol registration, a comprehensive multi-database search including grey literature, dual independent screening and extraction, and formal risk-of-bias assessment are core markers of a trustworthy systematic review. Restricting the search to one database is the tempting distractor because it sounds pragmatic, but it invites publication and selection bias by missing relevant studies. Including only significant findings guarantees a biased summary of the evidence.",
      difficulty: "advanced"
    },
    {
      id: "ebp-019",
      type: "mcq",
      stem: "A meta-analysis of nurse-led hypertension interventions reports an I-squared of 85 percent. How should a doctoral-level reader respond to the pooled estimate?",
      options: [
        "Treat the pooled estimate cautiously and examine subgroup or sensitivity analyses to explore sources of the considerable heterogeneity",
        "Accept the pooled estimate confidently because a high I-squared indicates strong agreement among studies",
        "Conclude the intervention is ineffective because the studies disagree",
        "Prefer the fixed-effect estimate since it ignores between-study variation"
      ],
      answer: [0],
      rationale: "An I-squared of 85 percent means most of the observed variability reflects true between-study heterogeneity rather than chance, so a single pooled number may obscure meaningfully different effects and sources should be explored through subgroup or sensitivity analyses. The distractor equating high I-squared with agreement inverts the statistic's meaning. Heterogeneity signals variability in effects, not absence of effect, and a fixed-effect model is least appropriate when heterogeneity is high.",
      difficulty: "advanced"
    },
    {
      id: "ebp-020",
      type: "mcq",
      stem: "An NP wants the best feasible evidence on whether long-term use of a common medication causes a rare malignancy. Randomizing patients to the suspected harm would be unethical. Which design is most appropriate to study this question?",
      options: [
        "A case-control study comparing prior medication exposure between patients with and without the malignancy",
        "A randomized controlled trial assigning patients to long-term medication use",
        "A cross-sectional survey measuring current medication use and cancer status simultaneously",
        "A case series describing patients who developed the malignancy while on the medication"
      ],
      answer: [0],
      rationale: "For rare outcomes and questions of harm where randomization is unethical, a case-control design is the most efficient choice because it starts with the rare outcome and looks backward at exposure. The RCT is the tempting distractor since it tops the intervention hierarchy, but ethics and the huge sample a rare outcome would demand make it unworkable here. Cross-sectional designs cannot establish temporal sequence, and a case series has no comparison group.",
      difficulty: "core"
    }
  ]
});
