window.QUIZ_DATA = window.QUIZ_DATA || [];
window.QUIZ_DATA.push({
  topic: "Health Policy & Advocacy",
  slug: "policy",
  questions: [
    {
      id: "policy-001",
      type: "mcq",
      stem: "A DNP-prepared NP relocates to a state where NPs must maintain a career-long collaborative agreement with a physician in order to prescribe, although they may evaluate and diagnose independently. How is this state best classified under the AANP practice-environment framework?",
      options: [
        "Full practice authority, because diagnosis does not require oversight",
        "Reduced practice, because at least one element of NP practice requires a regulated collaborative relationship",
        "Restricted practice, because any physician involvement defines restriction",
        "Transitional practice, because the requirement applies only to prescribing"
      ],
      answer: [1],
      rationale: "Reduced practice states limit at least one element of NP practice (here, prescribing) through a required collaborative agreement. Restricted practice is the tempting distractor, but restriction requires career-long supervision, delegation, or team management of overall NP practice, not just one element. Full practice authority requires that licensure, accreditation-based scope, and prescribing all sit under the board of nursing without mandated physician relationships.",
      difficulty: "core"
    },
    {
      id: "policy-002",
      type: "mcq",
      stem: "A state legislature is debating whether its board of nursing or its board of medicine should regulate NP prescribing. Which argument is most consistent with the APRN Consensus Model?",
      options: [
        "Joint regulation by both boards ensures balanced oversight of overlapping scopes",
        "The board of medicine should regulate prescribing because it is a delegated medical act",
        "The board of nursing should hold sole regulatory authority because APRN practice is grounded in nursing licensure, education, and certification",
        "Regulation should be decided county by county to reflect local workforce needs"
      ],
      answer: [2],
      rationale: "The Consensus Model calls for APRNs to be licensed and regulated by boards of nursing, with authority aligned to graduate education and national certification. Joint regulation is the tempting distractor because it sounds collaborative, but the Consensus Model explicitly identifies joint or medical-board regulation as a barrier to uniformity and mobility. Prescribing under the model is an element of APRN practice, not a delegated medical act.",
      difficulty: "core"
    },
    {
      id: "policy-003",
      type: "sata",
      stem: "Which elements make up the LACE framework of the APRN Consensus Model? Select all that apply.",
      options: [
        "Licensure",
        "Accreditation",
        "Credentialing by employers",
        "Certification",
        "Education",
        "Employment contracting"
      ],
      answer: [0, 1, 3, 4],
      rationale: "LACE stands for Licensure, Accreditation, Certification, and Education, the four regulatory components the Consensus Model aligns so an APRN role and population focus are consistent across states. Employer credentialing is the tempting distractor because it also verifies qualifications, but it is an institutional privileging process, not one of the four national regulatory pillars. Employment contracting is unrelated to the regulatory framework.",
      difficulty: "core"
    },
    {
      id: "policy-004",
      type: "mcq",
      stem: "An NP in an independent primary care practice bills Medicare Part B directly under her own NPI. Compared with the physician fee schedule amount, what should the practice expect for her professional services?",
      options: [
        "Payment at 85 percent of the physician fee schedule amount",
        "Payment at 100 percent because the service is identical",
        "Payment at 50 percent unless a physician co-signs the note",
        "No payment, because NPs cannot bill Medicare directly"
      ],
      answer: [0],
      rationale: "Medicare reimburses NPs billing under their own NPI at 85 percent of the physician fee schedule. Payment at 100 percent is the tempting distractor because the clinical service may be identical, but statute sets the NP rate at 85 percent; the only way to capture 100 percent is incident-to billing under a physician, which carries strict conditions. NPs have been able to bill Medicare directly since the Balanced Budget Act era, so the no-payment option is wrong.",
      difficulty: "core"
    },
    {
      id: "policy-005",
      type: "mcq",
      stem: "A practice bills an NP visit incident-to a physician so it pays at 100 percent. During the visit the NP diagnoses a new problem and initiates a new plan of care while the supervising physician is off-site. What is the compliance implication?",
      options: [
        "The claim is compliant because the physician reviewed the chart the next morning",
        "The claim is compliant because incident-to only requires a physician somewhere in the practice group",
        "The claim is non-compliant because incident-to requires an established plan of care and direct supervision with the physician on-site",
        "The claim is compliant if the NP holds full practice authority in that state"
      ],
      answer: [2],
      rationale: "Incident-to billing requires that the physician initiated the plan of care for an established problem and be physically present in the office suite providing direct supervision; a new problem managed with the physician off-site fails both tests. Next-day chart review is the tempting distractor because it feels like oversight, but retrospective review does not satisfy direct supervision. State practice authority governs scope, not federal billing rules, so it cannot cure the defect.",
      difficulty: "advanced"
    },
    {
      id: "policy-006",
      type: "mcq",
      stem: "A DNP student is analyzing why access to a given benefit differs for two low-income patients living in neighboring states. Which structural feature of Medicaid best explains this variation?",
      options: [
        "Medicaid is fully federal, so variation reflects regional CMS office discretion",
        "Medicaid is a joint federal-state program in which states set eligibility and optional benefits within federal minimums",
        "Medicaid benefits are set entirely by county health departments",
        "Medicaid variation exists only in states that declined managed care"
      ],
      answer: [1],
      rationale: "Medicaid is financed jointly by federal and state governments; states administer it and may vary eligibility thresholds, optional benefits, and delivery models above federal floors, which produces state-to-state differences. The fully-federal option is the tempting distractor because Medicare fits that description, and confusing the two programs is the classic error. Counties administer some services but do not define benefit structure.",
      difficulty: "core"
    },
    {
      id: "policy-007",
      type: "sata",
      stem: "Which provisions are core elements of the Affordable Care Act as originally enacted? Select all that apply.",
      options: [
        "Prohibition on denying coverage for pre-existing conditions",
        "Creation of health insurance marketplaces with income-based subsidies",
        "Conversion of Medicare into a block grant to states",
        "Authority for states to expand Medicaid to more low-income adults",
        "Dependent coverage on a parental plan into young adulthood",
        "A national single-payer insurance program"
      ],
      answer: [0, 1, 3, 4],
      rationale: "Guaranteed issue for pre-existing conditions, subsidized marketplaces, Medicaid expansion (made effectively optional for states by the Supreme Court), and extended dependent coverage are all core ACA provisions. The single-payer option is the tempting distractor because the ACA is often mischaracterized that way, but it built on private insurance and existing public programs. Medicare block grants were never part of the law.",
      difficulty: "core"
    },
    {
      id: "policy-008",
      type: "mcq",
      stem: "A professional NP organization wants supervision requirements changed. One pathway is amending the nurse practice act; another is petitioning the board of nursing to revise an administrative rule. Which statement best distinguishes these strategies?",
      options: [
        "Statutory change requires passage by the legislature, while rule change occurs through an agency process bounded by the authority the statute already grants",
        "Rule changes carry no legal force, so only statutory change matters",
        "Statutes are written by boards of nursing and rules by legislators",
        "Both pathways require a public referendum before taking effect"
      ],
      answer: [0],
      rationale: "Legislatures enact statutes; executive-branch agencies such as boards of nursing promulgate regulations through rulemaking, and those rules must stay within statutory authority. The claim that rules lack legal force is the tempting distractor because rules feel less formal, but properly adopted regulations carry the force of law. The strategic insight for a DNP is that a board cannot remove a supervision requirement written into the statute itself.",
      difficulty: "core"
    },
    {
      id: "policy-009",
      type: "mcq",
      stem: "A scope-of-practice bill passes the House chamber of a state legislature but the Senate committee chair declines to schedule it for a hearing before the session ends. What is the most accurate assessment?",
      options: [
        "The bill becomes law by default because one chamber passed it",
        "The bill dies, illustrating that committee gatekeepers are critical leverage points in the legislative process",
        "The governor may sign the House version into law directly",
        "The board of nursing may enact the bill as a regulation instead"
      ],
      answer: [1],
      rationale: "A bill must pass both chambers in identical form before going to the governor, and committee chairs who control hearings can kill legislation without a floor vote, which is why advocacy targets committee leadership early. The governor-signature option is the tempting distractor because it skips the bicameral requirement. A board cannot convert a failed bill into regulation because rulemaking cannot exceed existing statutory authority.",
      difficulty: "advanced"
    },
    {
      id: "policy-010",
      type: "sata",
      stem: "A DNP leading a coalition for a practice-modernization bill conducts a stakeholder analysis. Which actions reflect sound advocacy strategy? Select all that apply.",
      options: [
        "Map each stakeholder by level of influence and position on the issue before allocating effort",
        "Recruit unexpected allies such as employer groups and rural hospitals to broaden the coalition beyond nursing",
        "Frame the issue around patient access and cost data rather than professional self-interest",
        "Delay engaging opposing organizations until after the floor vote",
        "Rely exclusively on social media petitions to demonstrate support"
      ],
      answer: [0, 1, 2],
      rationale: "Effective advocacy maps stakeholders on influence and position, builds broad coalitions that include non-nursing voices, and frames arguments around public benefit with evidence. Delaying engagement with opponents is the tempting distractor because conflict avoidance feels strategic, but understanding and negotiating with opposition early shapes amendments and prevents ambush testimony. Petitions alone lack the relational lobbying that moves legislators.",
      difficulty: "advanced"
    },
    {
      id: "policy-011",
      type: "mcq",
      stem: "During stakeholder analysis for a school-based telehealth policy, a DNP identifies the state medical society as high-influence and opposed, and a parent association as high-support but low-influence. What is the most strategic next step?",
      options: [
        "Ignore the medical society since its position is fixed",
        "Engage the medical society to understand and potentially neutralize objections, while equipping the parent association to raise its visibility and influence",
        "Focus solely on the parent association because supporters deserve the resources",
        "Ask the board of nursing to prohibit medical society lobbying"
      ],
      answer: [1],
      rationale: "Classic power-interest strategy is to manage high-influence opponents closely, seeking common ground or narrowing their opposition, while building capacity in supportive but low-power groups. Concentrating only on existing supporters is the tempting distractor because it feels efficient, but it leaves the most powerful actor unopposed. No regulatory body can bar a stakeholder group from lobbying.",
      difficulty: "advanced"
    },
    {
      id: "policy-012",
      type: "mcq",
      stem: "A city council proposes zoning changes to allow full-service grocery stores in a neighborhood with high rates of diet-related disease. A DNP testifies in support. This advocacy best exemplifies which policy concept?",
      options: [
        "Health in All Policies, addressing social determinants through non-health-sector decisions",
        "Certificate of need regulation for new health facilities",
        "Value-based purchasing applied to retail food",
        "Scope-of-practice modernization"
      ],
      answer: [0],
      rationale: "Health in All Policies embeds health considerations into decisions made outside the health sector, such as zoning, housing, and transportation, because social determinants drive most population health outcomes. Certificate of need is the tempting distractor since both involve government approval of what gets built, but CON governs health facility capacity, not food access. Zoning for food access is a determinants intervention, not a payment or scope issue.",
      difficulty: "core"
    },
    {
      id: "policy-013",
      type: "mcq",
      stem: "A hospital sees its Medicare payments reduced after performing poorly on risk-adjusted readmission measures, while a neighboring hospital earns an upward adjustment for high quality scores. Which payment principle do these adjustments illustrate?",
      options: [
        "Fee-for-service, because each admission still generates a claim",
        "Value-based purchasing, in which payment is tied to measured quality and outcomes rather than volume alone",
        "Capitation, because the hospital receives a fixed monthly amount per patient",
        "Cost-plus reimbursement based on reported expenses"
      ],
      answer: [1],
      rationale: "Value-based purchasing links a portion of payment to performance on quality, outcome, and efficiency measures, rewarding value over volume; readmission penalties and quality-based adjustments are signature examples. Fee-for-service is the tempting distractor because claims are still submitted per service, but the defining feature here is the performance-based adjustment layered on top. Neither hospital is paid a fixed per-member amount, so capitation does not apply.",
      difficulty: "core"
    },
    {
      id: "policy-014",
      type: "mcq",
      stem: "An NP-owned practice participating in Medicare must choose between reporting under a merit-based performance program with payment adjustments tied to quality, cost, improvement activities, and interoperability, or joining an accountable care organization that accepts shared financial risk. What core policy shift do both options represent?",
      options: [
        "A return to unrestricted fee-for-service billing",
        "Movement of clinician payment from volume toward accountability for quality and total cost of care",
        "Elimination of quality reporting requirements for small practices",
        "Transfer of Medicare administration to state governments"
      ],
      answer: [1],
      rationale: "Both merit-based reporting tracks and risk-bearing alternative payment models operationalize the shift from paying for volume to paying for value, holding clinicians accountable for quality and cost. The fee-for-service option is the tempting distractor because claims mechanics persist underneath, but the adjustments and shared savings fundamentally change incentives. Quality reporting obligations expand, not disappear, and Medicare remains federally administered.",
      difficulty: "advanced"
    },
    {
      id: "policy-015",
      type: "mcq",
      stem: "An NP with full practice authority prescribes a Schedule II stimulant and is later named in a malpractice suit. Which statement most accurately frames her legal accountability?",
      options: [
        "She is held to the standard of care of a similarly prepared NP and bears full professional liability for her prescribing decisions",
        "Liability transfers automatically to the nearest collaborating physician",
        "Full practice authority immunizes NPs from malpractice claims",
        "Controlled substance prescribing is governed only by federal law, so state standards do not apply"
      ],
      answer: [0],
      rationale: "Independent authority carries independent accountability: the NP is judged against the standard of a reasonably prudent NP with similar training and bears her own liability, which is why individual malpractice coverage matters. Liability transfer to a physician is the tempting distractor because it reflects outdated supervision-era thinking; without a supervisory relationship there is no vicarious physician liability. Controlled substances are regulated by both federal registration requirements and state prescriptive authority law.",
      difficulty: "advanced"
    },
    {
      id: "policy-016",
      type: "sata",
      stem: "Which activities reflect the DNP Essential addressing health care policy for advocacy in health care? Select all that apply.",
      options: [
        "Critically analyzing proposed legislation for its effect on patients and the profession",
        "Educating policymakers by providing testimony grounded in practice evidence",
        "Advocating for policies that reduce health disparities within institutions and government",
        "Restricting policy engagement to voting in professional association elections",
        "Leading development of institutional policies that shape care delivery"
      ],
      answer: [0, 1, 2, 4],
      rationale: "The policy Essential prepares DNPs to analyze policy, engage policymakers with evidence, advocate for equity and the profession, and lead policy development at institutional through governmental levels. Limiting engagement to association voting is the tempting distractor because it is a legitimate professional activity, but the Essential demands active leadership in the policy process, not passive membership participation.",
      difficulty: "core"
    },
    {
      id: "policy-017",
      type: "mcq",
      stem: "A state considers two proposals to address maternal mortality disparities: one funds implicit-bias training for clinicians; the other expands postpartum insurance coverage and funds community perinatal health workers in the highest-burden counties. From a health equity policy perspective, what is the strongest rationale for the second proposal?",
      options: [
        "It is cheaper to administer than training programs",
        "It targets structural drivers of disparity by changing coverage and resource distribution rather than relying solely on individual attitude change",
        "Training programs are prohibited under civil rights law",
        "Coverage expansion guarantees identical outcomes across all groups"
      ],
      answer: [1],
      rationale: "Equity-focused policy prioritizes structural interventions, such as coverage continuity and targeted resource allocation, because disparities arise largely from systems and access, not individual clinician attitudes alone. The guarantee-of-identical-outcomes option is the tempting distractor because it overstates what any policy can promise; equity policy aims to remove unjust, avoidable differences, not to promise uniform results. Bias training is lawful and useful but insufficient as a lone strategy.",
      difficulty: "advanced"
    },
    {
      id: "policy-018",
      type: "mcq",
      stem: "A rural county in a restricted-practice state cannot recruit physicians, and its only clinic is staffed by NPs who must pay a distant supervising physician a monthly fee to remain open. Which policy analysis argument does this scenario most directly support?",
      options: [
        "Supervision requirements guarantee quality in rural settings",
        "Restrictive practice regulation can function as an economic barrier to access without demonstrated safety benefit",
        "Rural clinics should be exempt from all licensure requirements",
        "Physician supervision fees are set by Medicare"
      ],
      answer: [1],
      rationale: "The scenario shows regulation imposing cost and fragility on access in an underserved area, the central argument in scope-modernization debates, especially since outcome studies have not shown safety differences attributable to mandated supervision. The quality-guarantee option is the tempting distractor because it restates the traditional justification for supervision, but a remote fee-based signature arrangement illustrates form without substantive oversight. Supervision fees are private contracts, not Medicare rates.",
      difficulty: "advanced"
    },
    {
      id: "policy-019",
      type: "mcq",
      stem: "A DNP is asked to comment on a proposed federal rule during its public comment period. Which statement best describes the significance of this opportunity?",
      options: [
        "Comments are ceremonial and agencies may ignore the record entirely",
        "Agencies must consider substantive comments and respond to significant issues in the final rule, making comments a genuine advocacy lever",
        "Only physicians and attorneys may submit comments on health rules",
        "Submitting a comment obligates the agency to adopt the commenter's position"
      ],
      answer: [1],
      rationale: "Under administrative procedure requirements, agencies must review substantive comments and address significant objections when finalizing a rule, and courts can vacate rules where agencies fail to do so, which makes well-evidenced comments real leverage. The ceremonial option is the tempting distractor because individual comments rarely change outcomes alone, but the legal obligation to engage the record is genuine. Any member of the public may comment, and no comment binds the agency to a position.",
      difficulty: "core"
    },
    {
      id: "policy-020",
      type: "mcq",
      stem: "An NP organization must choose between mobilizing thousands of members to email legislators and arranging a small number of in-district meetings between legislators and NP constituents who run local clinics. Political science on legislative influence suggests the strongest rationale for the meetings is that they provide what?",
      options: [
        "Anonymous volume, which legislators weigh most heavily",
        "Personalized constituent relationships and credible local information, which legislators consistently rank as more persuasive than mass form contacts",
        "A legal requirement that legislators change their votes",
        "A way to avoid disclosing the organization's position"
      ],
      answer: [1],
      rationale: "Legislators and staff report that personal contact from identifiable constituents with local, credible information outweighs mass identical messages, so grasstops relationship strategies complement grassroots volume. Anonymous volume is the tempting distractor because large numbers feel powerful, but form emails are heavily discounted precisely because they signal low individual effort. No advocacy contact legally compels a vote, and effective advocacy is transparent about its position.",
      difficulty: "advanced"
    }
  ]
});
