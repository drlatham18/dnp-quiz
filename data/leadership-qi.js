window.QUIZ_DATA = window.QUIZ_DATA || [];
window.QUIZ_DATA.push({
  topic: "Leadership, Systems & QI",
  slug: "leadqi",
  questions: [
    {
      id: "leadqi-001",
      type: "mcq",
      stem: "A DNP-prepared director wants to reduce door-to-antibiotic time in sepsis. The team has a promising protocol change but limited data and wants to trial it quickly on one unit before spreading. Which improvement approach best fits this situation?",
      options: [
        "Small-scale PDSA cycles with rapid iterative testing of the protocol on one unit",
        "A Six Sigma DMAIC project with a six-month measurement phase before any change",
        "A comprehensive Lean value-stream mapping event for the entire hospital sepsis pathway",
        "A randomized controlled trial comparing the protocol against usual care across all units"
      ],
      answer: [0],
      rationale: "PDSA is designed for rapid, small-scale iterative tests of change when the team has a specific idea and wants fast learning before spread. DMAIC is powerful but data-heavy and slow for a single promising change; it fits when the problem cause is unclear and variation must be characterized statistically. An RCT answers efficacy questions, not local implementation questions, and delays improvement.",
      difficulty: "core"
    },
    {
      id: "leadqi-002",
      type: "mcq",
      stem: "A clinic has high patient cycle times. Observation shows patients wait at four separate points, staff walk long distances to retrieve supplies, and rooming steps are duplicated by the MA and the NP. Which methodology most directly targets these problems?",
      options: [
        "Lean, because the problems are waste and non-value-added steps in the process flow",
        "Six Sigma, because the problems reflect excessive variation around a mean cycle time",
        "PDSA alone, because a single small test of change will reveal the root cause",
        "FMEA, because the delays represent failure modes requiring risk priority scoring"
      ],
      answer: [0],
      rationale: "Waiting, motion, and duplicated work are classic categories of waste, and Lean exists to identify and remove non-value-added steps from flow. Six Sigma is the tempting distractor because cycle time is measurable, but its focus is reducing defects and variation, not eliminating waste; here the waste is already visible and does not need statistical characterization first. FMEA is a prospective safety-risk tool, not a flow-improvement method.",
      difficulty: "core"
    },
    {
      id: "leadqi-003",
      type: "mcq",
      stem: "A DNP project lead using Six Sigma DMAIC has confirmed the project charter and operationally defined the defect. The team is now validating the data collection plan and establishing baseline process capability. Which phase are they in?",
      options: [
        "Measure",
        "Analyze",
        "Define",
        "Improve"
      ],
      answer: [0],
      rationale: "Establishing operational definitions for data collection, validating the measurement system, and quantifying baseline capability are the core work of the Measure phase. Analyze is the tempting distractor, but analysis of root causes and statistical relationships happens only after trustworthy baseline data exist. Define was completed when the charter and defect definition were set.",
      difficulty: "advanced"
    },
    {
      id: "leadqi-004",
      type: "mcq",
      stem: "A falls-reduction team plots monthly fall rates on a control chart. All points fall within the control limits with no runs, trends, or other rule violations, but leadership is dissatisfied with the average rate. What is the correct interpretation and next step?",
      options: [
        "The process shows only common-cause variation, so reducing falls requires redesigning the process itself rather than investigating individual months",
        "The process is stable, which confirms the current fall-prevention program is effective and should be sustained without change",
        "The absence of special cause means the data are unreliable and the team should switch to a run chart for more sensitivity",
        "Leadership should investigate the highest single month as an outlier to identify what went wrong that month"
      ],
      answer: [0],
      rationale: "A stable process with only common-cause variation performs at its designed capability; if the average is unacceptable, the system must be fundamentally redesigned, not policed month to month. Investigating an in-control high month is tampering and treats common cause as special cause, which adds variation. Stability describes predictability, not acceptability, so stability alone does not validate the program.",
      difficulty: "core"
    },
    {
      id: "leadqi-005",
      type: "mcq",
      stem: "Three weeks after a new CAUTI bundle launches, the infection preventionist notes eight consecutive points below the median on the run chart of monthly CAUTI rates. How should the DNP leader interpret this?",
      options: [
        "A shift signal indicating non-random change, providing evidence the improvement is associated with the bundle",
        "Random fluctuation, because a run chart cannot distinguish signal from noise without control limits",
        "A special cause of concern requiring root cause analysis of a deteriorating process",
        "Insufficient evidence of anything until at least two years of post-implementation data accumulate"
      ],
      answer: [0],
      rationale: "A run of six or more consecutive points on one side of the median is a probability-based shift signal on a run chart, indicating non-random change consistent with the intervention working. The tempting distractor is that run charts cannot detect signals without control limits; run charts use run rules precisely so smaller data sets can reveal non-random patterns. A favorable shift is a signal to confirm and sustain, not a deteriorating process.",
      difficulty: "advanced"
    },
    {
      id: "leadqi-006",
      type: "mcq",
      stem: "Before launching a new high-alert medication infusion workflow, a DNP leader convenes the team to map each step, brainstorm what could go wrong at each step, and score each potential failure by severity, occurrence, and detectability. Which tool is being used, and why?",
      options: [
        "FMEA, a prospective tool that prioritizes risks before harm occurs",
        "Root cause analysis, a retrospective tool that identifies latent system causes of an event",
        "A Pareto analysis, which ranks the vital few causes contributing to most defects",
        "A fishbone diagram, which organizes contributing causes of a sentinel event by category"
      ],
      answer: [0],
      rationale: "Scoring failure modes by severity, occurrence, and detectability to compute risk priority is the defining mechanics of failure mode and effects analysis, done prospectively before implementation. RCA is the tempting distractor because both are systematic safety analyses, but RCA is retrospective and requires an event to have occurred. Fishbone and Pareto are supporting analytic tools, not the prospective risk-scoring process described.",
      difficulty: "core"
    },
    {
      id: "leadqi-007",
      type: "mcq",
      stem: "After a serious wrong-site procedure, the RCA team quickly concludes the cause was that the proceduralist skipped the time-out, and recommends re-education on the time-out policy. As DNP facilitator, what is the most important critique of this analysis?",
      options: [
        "It stopped at active failure and individual blame instead of probing latent system conditions that made skipping the time-out possible and likely",
        "It failed to calculate a risk priority number for the time-out step before recommending an action",
        "Re-education is inappropriate because the proceduralist should instead face disciplinary review for a rule violation",
        "The RCA should have been deferred until litigation concluded to protect the findings"
      ],
      answer: [0],
      rationale: "An RCA that ends at an individual active failure has not reached root cause; the purpose is to surface latent conditions such as production pressure, scheduling design, and weak forcing functions, and re-education is among the weakest action categories. The RPN distractor confuses RCA with FMEA scoring. Jumping to discipline before analyzing system contributions and the nature of the behavioral choice contradicts both RCA purpose and Just Culture.",
      difficulty: "advanced"
    },
    {
      id: "leadqi-008",
      type: "sata",
      stem: "A DNP student is classifying measures for a heart failure readmissions project using the Donabedian framework. Which of the following are PROCESS measures? Select all that apply.",
      options: [
        "Percentage of discharged heart failure patients who receive a scheduled follow-up call within 48 hours",
        "Percentage of eligible patients discharged on a guideline-directed beta blocker",
        "Thirty-day all-cause readmission rate for heart failure patients",
        "Presence of a dedicated heart failure nurse navigator role in the discharge clinic",
        "Rate of medication reconciliation completion before discharge"
      ],
      answer: [0, 1, 4],
      rationale: "Process measures capture what is actually done in giving and receiving care: follow-up calls made, guideline medications prescribed, and reconciliation completed. The readmission rate is the tempting mix-in but it is an outcome, the end result of care. The existence of a navigator role describes the care setting and resources, making it a structure measure.",
      difficulty: "core"
    },
    {
      id: "leadqi-009",
      type: "sata",
      stem: "A health system aspires to become a high-reliability organization. Which leader behaviors reflect HRO principles? Select all that apply.",
      options: [
        "Treating a near-miss involving a look-alike medication as a signal worth full investigation rather than a non-event",
        "Deferring an unstable patient transport decision to the bedside team with the most direct knowledge, regardless of hierarchy",
        "Resisting the simple explanation that one nurse was careless and insisting on a deeper analysis of the failed handoff",
        "Celebrating a year without a serious safety event as proof that current processes need no further scrutiny",
        "Standardizing every clinical decision so tightly that frontline deviation is impossible even in unanticipated situations"
      ],
      answer: [0, 1, 2],
      rationale: "Preoccupation with failure treats near-misses as data, deference to expertise pushes decisions to those with situational knowledge, and reluctance to simplify rejects single-person explanations; all three are core HRO principles. Declaring victory after a quiet year is the tempting distractor because it sounds like positive culture, but it is complacency, the opposite of preoccupation with failure. Total rigidity violates commitment to resilience, which requires capacity to adapt when the unexpected occurs.",
      difficulty: "advanced"
    },
    {
      id: "leadqi-010",
      type: "mcq",
      stem: "A nurse self-reports giving insulin an hour late after being pulled to cover a second unit during a staffing crisis; a review shows most nurses in that situation would have made the same choice. Under Just Culture, what is the appropriate leadership response?",
      options: [
        "Console the nurse and fix the system contributors such as the pull practice, because this behavior is human error and at-risk behavior shaped by system design",
        "Issue formal discipline, because a medication was administered outside the safe window regardless of circumstances",
        "Take no action of any kind, because Just Culture means a blame-free environment where accountability is waived",
        "Counsel the nurse to be more careful and document the counseling in the personnel file as a first warning"
      ],
      answer: [0],
      rationale: "Just Culture evaluates the behavior, not the outcome: human error is consoled and at-risk behavior driven by system conditions is addressed by redesigning the system, and the substitution test here shows peers would have acted similarly. The blame-free distractor is tempting but wrong because Just Culture retains accountability for reckless behavior; it is not a no-accountability model. Outcome-based discipline punishes reporting and drives errors underground.",
      difficulty: "core"
    },
    {
      id: "leadqi-011",
      type: "mcq",
      stem: "One nurse manager motivates staff through an inspiring shared vision for eliminating pressure injuries, individualized coaching, and challenging assumptions about current practice. Another relies on audit-based bonuses and corrective action for missed skin checks. Which statement best characterizes these approaches?",
      options: [
        "The first is transformational leadership, which is more strongly associated with sustained culture change; the second is transactional, which can maintain performance on defined tasks but rarely transforms practice",
        "The first is transactional because it involves individual coaching exchanges; the second is transformational because it changes staff behavior",
        "Both are transformational because both aim at the same quality outcome of fewer pressure injuries",
        "The second approach is laissez-faire leadership because it relies on external contingencies rather than direct engagement"
      ],
      answer: [0],
      rationale: "Idealized influence, inspirational motivation, intellectual stimulation, and individualized consideration are the four components of transformational leadership, which evidence links to stronger safety culture and sustained change. Contingent reward and management-by-exception define transactional leadership, which is not wrong but tends to hold a floor rather than transform practice. Laissez-faire is the absence of engagement, not the use of contingent rewards.",
      difficulty: "core"
    },
    {
      id: "leadqi-012",
      type: "mcq",
      stem: "Using Lewin's theory, a DNP leader shares unit-specific harm data and patient stories to build dissatisfaction with the status quo before introducing a new mobility protocol. Which stage is this, and what must eventually follow for the change to last?",
      options: [
        "Unfreezing; the change must later be refrozen by embedding it into policies, orientation, and ongoing measurement",
        "Moving; the change must later be unfrozen by removing old workflow artifacts and order sets",
        "Refreezing; the change must later be moved by piloting it on additional units",
        "Unfreezing; no further stage is needed because motivation alone sustains change once established"
      ],
      answer: [0],
      rationale: "Creating felt need and destabilizing the status quo with data and stories is unfreezing; sustainability requires refreezing, where the new practice is anchored in structures such as policy, education, and monitoring. The distractor placing this in the moving stage is tempting because a protocol is mentioned, but the protocol has not yet been implemented; the leader is building readiness. Motivation without institutionalization predictably decays.",
      difficulty: "core"
    },
    {
      id: "leadqi-013",
      type: "mcq",
      stem: "Eighteen months into a system-wide handoff standardization effort, momentum has stalled: early pilot units succeeded, leaders declared success, and spread has quietly stopped. Which Kotter-based diagnosis best explains the stall?",
      options: [
        "Victory was declared too soon and short-term wins were not leveraged to drive further change and anchor it in culture",
        "The guiding coalition was too powerful, which crowded out frontline ownership of the change",
        "Too many short-term wins were generated, diluting the urgency needed for the final stages",
        "The vision was overcommunicated, causing staff to disengage from the message"
      ],
      answer: [0],
      rationale: "Kotter identifies declaring victory too soon as a classic error: early wins should be consolidated to fuel more change and the new approach must be anchored in culture, or regression and stalled spread follow. The coalition distractor is tempting because governance problems are common, but a strong coalition is a Kotter success factor, not a failure mode. Kotter argues change leaders far more often undercommunicate vision than overcommunicate it.",
      difficulty: "advanced"
    },
    {
      id: "leadqi-014",
      type: "sata",
      stem: "During a deteriorating postoperative patient event, which team behaviors reflect correct use of TeamSTEPPS tools? Select all that apply.",
      options: [
        "The nurse uses SBAR to frame the situation, background, assessment, and recommendation when calling the NP",
        "A concerned tech states the concern twice clearly, and when unaddressed, escalates up the chain using the two-challenge rule",
        "The charge nurse performs a brief huddle to reallocate assignments as the situation evolves",
        "A resident uses a check-back, repeating the verbal vancomycin order aloud for the sender to confirm",
        "The team avoids cross-monitoring one another to prevent the appearance of distrust among professionals",
        "The most senior physician makes all decisions without input to eliminate communication delays"
      ],
      answer: [0, 1, 2, 3],
      rationale: "SBAR, the two-challenge rule, huddles, and check-backs are core TeamSTEPPS communication and mutual support tools. Avoiding cross-monitoring is the tempting distractor because it is framed as professional respect, but cross-monitoring is an explicit TeamSTEPPS mutual support behavior that protects patients. Unilateral senior decision-making contradicts shared mental models and psychological safety.",
      difficulty: "core"
    },
    {
      id: "leadqi-015",
      type: "mcq",
      stem: "A team aims to cut average ED length of stay by discharging lower-acuity patients faster. The DNP mentor insists on tracking 72-hour ED return visits alongside length of stay. What is the primary purpose of this added measure?",
      options: [
        "It is a balancing measure to detect whether faster discharge introduces harm elsewhere in the system, such as premature discharges",
        "It is the primary outcome measure because return visits matter more than length of stay",
        "It is a process measure confirming that discharge steps are being completed as designed",
        "It is a structure measure documenting that the ED has adequate capacity for the initiative"
      ],
      answer: [0],
      rationale: "Balancing measures watch a different part of the system for unintended consequences of the change; rising return visits would signal that speed is being bought with unsafe discharges. Calling it the primary outcome is tempting because returns are clinically important, but the project aim defines length of stay as the outcome, and the return-visit metric exists specifically to check for harm. It measures neither a care step nor a system resource, so it is not process or structure.",
      difficulty: "core"
    },
    {
      id: "leadqi-016",
      type: "mcq",
      stem: "Which aim statement is best constructed for a DNP quality project charter?",
      options: [
        "Increase the percentage of clinic patients with diabetes who have documented annual foot exams from 54 percent to 80 percent by June 30 of next year",
        "Substantially improve diabetes care quality in the clinic as soon as reasonably possible",
        "Ensure every clinician understands the importance of foot exams for patients with diabetes",
        "Reduce diabetes complications across the entire health system within the next decade"
      ],
      answer: [0],
      rationale: "A strong SMART aim states what will improve, for whom, by how much, and by when, with a numeric baseline and target and a deadline. The system-wide complications option is tempting because it names a meaningful outcome, but it is neither attainable within project scope nor time-bound in a usable way, and it lacks a measurable target. Aims about understanding or generic improvement are not measurable statements of system performance.",
      difficulty: "core"
    },
    {
      id: "leadqi-017",
      type: "mcq",
      stem: "A DNP leader is planning a pharmacist-led anticoagulation clinic. A stakeholder analysis identifies a highly influential physician group that currently opposes the model. What is the most appropriate engagement strategy for this group?",
      options: [
        "Engage them early and closely, involving them in design decisions and addressing their specific concerns, because high-power opponents can block implementation",
        "Provide them the same quarterly newsletter updates given to all staff, since equal treatment prevents perceptions of favoritism",
        "Exclude them from planning to avoid conflict, then present the finished model as a completed decision",
        "Wait until go-live to involve them so their objections cannot delay the project timeline"
      ],
      answer: [0],
      rationale: "Stakeholder management matches engagement intensity to power and interest; high-power, currently resistant stakeholders require close, early, tailored engagement because they can stop the project. Uniform communication is the tempting distractor because it sounds fair, but treating a high-power opponent like a low-interest bystander is a classic implementation failure. Exclusion and surprise reliably convert skeptics into active blockers.",
      difficulty: "advanced"
    },
    {
      id: "leadqi-018",
      type: "mcq",
      stem: "To win executive approval for adding an NP-led transitional care service, a DNP prepares a business case. The CFO asks about return on investment. Which framing is most persuasive and accurate?",
      options: [
        "Project the avoided costs of readmission penalties and the new visit revenue against salary, benefits, and startup costs over a defined time horizon",
        "Emphasize that quality improvement should never be evaluated in financial terms because patients are priceless",
        "Present only the gross revenue the new service will generate, since costs are operational details for later",
        "Report the total national cost of readmissions to demonstrate the general scale of the problem"
      ],
      answer: [0],
      rationale: "A credible business case compares incremental costs, including salary, benefits, and startup expenses, against quantified financial benefits such as avoided penalties and new revenue over a stated horizon. Presenting revenue without cost is the tempting distractor because the number looks strong, but ROI is meaningless without the cost side and a CFO will discount the analysis immediately. National statistics establish context but say nothing about this organization's return.",
      difficulty: "advanced"
    },
    {
      id: "leadqi-019",
      type: "mcq",
      stem: "After a med-surg unit tightens admission criteria to reduce its own workload, ED boarding hours rise sharply and PACU holds increase. Which systems-thinking concept does this scenario best illustrate?",
      options: [
        "Optimizing one part of a system in isolation can degrade overall system performance because units are interdependent",
        "The unit failed because it did not apply enough local process control to its own throughput",
        "Boarding increased due to special-cause variation unrelated to the admission policy change",
        "The ED and PACU problems prove the admission criteria were clinically incorrect for individual patients"
      ],
      answer: [0],
      rationale: "Suboptimization is the systems-thinking trap in which improving a component locally worsens the whole, because patient flow couples the ED, PACU, and inpatient units. The special-cause distractor is tempting because the boarding change is abrupt, but the cause is identified and traceable to the policy, which is precisely why system-level analysis, not statistical dismissal, is required. Clinical correctness for individual patients is a separate question from system flow effects.",
      difficulty: "advanced"
    },
    {
      id: "leadqi-020",
      type: "sata",
      stem: "A DNP leader is deciding whether findings from a unit-based improvement effort warrant a control chart rather than a simple run chart. Which statements accurately describe control charts? Select all that apply.",
      options: [
        "Control limits are calculated from the process data themselves, typically at three sigma from the center line",
        "A point outside the control limits signals special-cause variation that warrants investigation",
        "Control charts can distinguish special-cause from common-cause variation, guiding whether to investigate an event or redesign the system",
        "Control limits are the same thing as clinical benchmarks or performance targets set by leadership",
        "A process operating within control limits is by definition meeting the quality level patients need"
      ],
      answer: [0, 1, 2],
      rationale: "Control limits are statistically derived from process data, points beyond them signal special cause, and the chart's central value is separating the two types of variation to guide the correct response. Equating control limits with targets is the tempting error; limits describe what the process is doing, while targets describe what leadership wants, and confusing them leads to tampering. Statistical control means predictable, not clinically acceptable.",
      difficulty: "advanced"
    }
  ]
});
