window.QUIZ_DATA = window.QUIZ_DATA || [];
window.QUIZ_DATA.push({
  topic: "Biostatistics & Epidemiology",
  slug: "biostats",
  questions: [
    {
      id: "biostats-001",
      type: "mcq",
      stem: "A new point-of-care test for influenza is evaluated in 380 patients. Of 80 patients with culture-confirmed influenza, 72 test positive. Of 300 patients without influenza, 240 test negative. What is the sensitivity of the test?",
      options: [
        "90 percent",
        "80 percent",
        "54.5 percent",
        "96.8 percent"
      ],
      answer: [0],
      rationale: "Sensitivity is true positives divided by all who have the disease: 72 / 80 = 0.90, or 90 percent. The tempting distractor of 80 percent is the specificity (240 / 300); 54.5 percent is the PPV (72 / 132), and 96.8 percent is the NPV (240 / 248). Sensitivity looks only at the diseased column of the 2 by 2 table.",
      difficulty: "core"
    },
    {
      id: "biostats-002",
      type: "mcq",
      stem: "An NP screens 1000 patients in a population with 10 percent disease prevalence using a test with 90 percent sensitivity and 95 percent specificity. What is the positive predictive value?",
      options: [
        "66.7 percent",
        "90 percent",
        "95 percent",
        "98.8 percent"
      ],
      answer: [0],
      rationale: "With 10 percent prevalence, 100 of 1000 have disease: sensitivity 90 percent yields 90 true positives and 10 false negatives. Of the 900 without disease, specificity 95 percent yields 855 true negatives and 45 false positives. PPV = true positives / all positives = 90 / (90 + 45) = 90 / 135 = 66.7 percent. Choosing 90 percent confuses PPV with sensitivity, which ignores how many positives are false; 98.8 percent is the NPV (855 / 865).",
      difficulty: "core"
    },
    {
      id: "biostats-003",
      type: "mcq",
      stem: "A screening test performed well in a specialty clinic where disease prevalence was 30 percent. The same test is deployed in a primary care population where prevalence is 2 percent. Assuming sensitivity and specificity are unchanged, what happens to its predictive values?",
      options: [
        "PPV falls substantially and NPV rises, because predictive values depend on prevalence",
        "PPV and NPV are unchanged, because they are fixed properties of the test",
        "Sensitivity falls in the new population, dragging the PPV down with it",
        "NPV falls substantially because fewer diseased patients are present"
      ],
      answer: [0],
      rationale: "Predictive values are driven by prevalence: in a low-prevalence population most positives are false positives, so PPV drops sharply, while NPV climbs because almost everyone testing negative truly lacks disease. The tempting distractor treats PPV and NPV as fixed test properties, but only sensitivity and specificity are considered stable characteristics of the test itself. This is why confirmatory testing follows a positive screen in low-prevalence settings.",
      difficulty: "advanced"
    },
    {
      id: "biostats-004",
      type: "mcq",
      stem: "In a prospective cohort study, 30 of 150 smokers develop COPD over 10 years, compared with 15 of 150 nonsmokers. What is the relative risk of COPD associated with smoking?",
      options: [
        "2.0",
        "2.25",
        "0.5",
        "1.5"
      ],
      answer: [0],
      rationale: "Risk in the exposed is 30 / 150 = 0.20 and risk in the unexposed is 15 / 150 = 0.10, so RR = 0.20 / 0.10 = 2.0, meaning smokers had twice the risk. The tempting distractor 2.25 is the odds ratio, calculated as (30 x 135) / (120 x 15) = 4050 / 1800 = 2.25, which overstates the RR when the outcome is not rare. A value of 0.5 would mean smoking was protective, the inverse of what the data show.",
      difficulty: "core"
    },
    {
      id: "biostats-005",
      type: "mcq",
      stem: "A case-control study of a rare congenital anomaly reports an odds ratio of 3.1 for a maternal medication exposure. Why did the investigators report an odds ratio rather than a relative risk?",
      options: [
        "Case-control designs cannot directly compute incidence, so relative risk cannot be calculated, but the OR approximates the RR when the outcome is rare",
        "The odds ratio is always a more conservative estimate than the relative risk",
        "Relative risk applies only to randomized controlled trials",
        "The odds ratio corrects for confounding automatically, unlike the relative risk"
      ],
      answer: [0],
      rationale: "Case-control studies sample by outcome status, so the incidence of disease in exposed and unexposed groups is unknown and RR cannot be computed directly; the OR is the natural measure and approximates the RR under the rare disease assumption. The distractor calling the OR more conservative is backwards, since the OR moves further from 1.0 than the RR as the outcome becomes common. No ratio measure corrects for confounding by itself; that requires design or analytic control.",
      difficulty: "advanced"
    },
    {
      id: "biostats-006",
      type: "mcq",
      stem: "In a trial of a new anticoagulant, 40 of 200 control patients (20 percent) had a stroke versus 30 of 200 treated patients (15 percent). How many patients must be treated to prevent one stroke?",
      options: [
        "20",
        "4",
        "5",
        "7"
      ],
      answer: [0],
      rationale: "The absolute risk reduction is 20 percent minus 15 percent = 5 percent, or 0.05, and NNT = 1 / ARR = 1 / 0.05 = 20. The tempting distractor 4 comes from inverting the relative risk reduction (5 / 20 = 25 percent, and 1 / 0.25 = 4), a common error that dramatically overstates benefit. The values 5 and 7 come from inverting the individual event rates (1 / 0.20 and 1 / 0.15), which have no NNT interpretation.",
      difficulty: "core"
    },
    {
      id: "biostats-007",
      type: "mcq",
      stem: "A trial reports that a nurse-led intervention reduced readmission with a relative risk of 0.85 and a 95 percent confidence interval of 0.70 to 1.03. Which interpretation is correct?",
      options: [
        "The result is not statistically significant at the 0.05 level because the interval includes 1.0, so a true null effect remains plausible",
        "The intervention significantly reduced readmissions by 15 percent",
        "There is a 95 percent chance the intervention is effective",
        "The result is significant because most of the interval lies below 1.0"
      ],
      answer: [0],
      rationale: "For ratio measures, a 95 percent confidence interval that includes 1.0 means the data are compatible with no effect, so the result is not statistically significant at the conventional level. The 15 percent reduction distractor is tempting because 0.85 is the point estimate, but reporting it as a definite effect ignores the uncertainty the interval expresses. Where most of the interval lies does not determine significance; crossing the null value does.",
      difficulty: "advanced"
    },
    {
      id: "biostats-008",
      type: "sata",
      stem: "A study reports a mean reduction in systolic blood pressure of 4.2 mmHg with a 95 percent confidence interval of 1.1 to 7.3. Select all the correct interpretations.",
      options: [
        "The result is statistically significant at the 0.05 level because the interval excludes zero",
        "The data are compatible with true effects ranging from about 1.1 to 7.3 mmHg",
        "If the study were repeated many times, about 95 percent of similarly constructed intervals would contain the true mean difference",
        "There is a 95 percent probability that the true mean difference lies inside this particular interval",
        "A wider interval from the same data would have indicated greater precision"
      ],
      answer: [0, 1, 2],
      rationale: "An interval excluding zero for a difference measure corresponds to significance at the 0.05 level, the interval brackets the range of plausible true effects, and the frequentist definition concerns the long-run capture rate of the interval-generating procedure. The probability statement about this particular interval is the classic tempting misinterpretation: once computed, a specific interval either contains the true value or it does not. Wider intervals reflect less precision, not more.",
      difficulty: "advanced"
    },
    {
      id: "biostats-009",
      type: "mcq",
      stem: "A trial comparing two wound dressings reports p = 0.03 for the difference in healing time, with alpha set at 0.05. Which statement correctly interprets this p-value?",
      options: [
        "If there were truly no difference between dressings, results at least this extreme would occur about 3 percent of the time",
        "There is a 3 percent probability that the null hypothesis is true",
        "The probability that the finding is clinically important is 97 percent",
        "The new dressing shortens healing time in 97 percent of patients"
      ],
      answer: [0],
      rationale: "A p-value is the probability of obtaining data at least as extreme as observed, assuming the null hypothesis is true; p = 0.03 means such data would arise only about 3 percent of the time under the null, so the null is rejected at alpha 0.05. The tempting distractor inverts the logic by treating p as the probability the null is true, which a p-value cannot provide. P-values also say nothing about clinical importance or the proportion of patients who benefit.",
      difficulty: "core"
    },
    {
      id: "biostats-010",
      type: "mcq",
      stem: "A pilot trial with 15 patients per arm finds a clinically meaningful 12 percent absolute difference in infection rates, but p = 0.21. What is the most appropriate doctoral-level interpretation?",
      options: [
        "The study may be underpowered, so a type II error is a real possibility and the confidence interval should be examined before dismissing the effect",
        "The intervention has been shown to have no effect on infection rates",
        "A type I error has occurred because the observed difference was large",
        "The p-value should be lowered to 0.21 so the result becomes significant"
      ],
      answer: [0],
      rationale: "With only 15 patients per arm, power to detect even a meaningful difference is low, so a nonsignificant result may reflect a type II error, failing to detect a true effect, rather than absence of effect. The distractor concluding no effect is the classic misreading; absence of evidence is not evidence of absence, and the wide confidence interval would show a large effect remains plausible. A type I error can only occur when the null is rejected, which did not happen here.",
      difficulty: "advanced"
    },
    {
      id: "biostats-011",
      type: "sata",
      stem: "A DNP student is designing a study and wants adequate statistical power. Select all the factors that increase power.",
      options: [
        "Increasing the sample size",
        "A larger true effect size in the population",
        "Reducing variability in the outcome measure through precise instruments",
        "Raising the significance threshold from alpha 0.01 to alpha 0.05",
        "Decreasing the sample size to reduce data collection burden",
        "Choosing an outcome instrument with poor reliability"
      ],
      answer: [0, 1, 2, 3],
      rationale: "Power rises with larger samples, larger true effects, less outcome variability, and a more lenient alpha, because each makes a true effect easier to distinguish from noise. Raising alpha is the tempting item to skip since stricter alpha sounds more rigorous, but moving from 0.01 to 0.05 makes rejection easier and therefore increases power at the cost of more type I error risk. Smaller samples and unreliable instruments both reduce power.",
      difficulty: "core"
    },
    {
      id: "biostats-012",
      type: "mcq",
      stem: "An NP compares mean systolic blood pressure across three independent groups: standard care, telehealth coaching, and home monitoring. The outcome is approximately normally distributed. Which test is most appropriate?",
      options: [
        "One-way ANOVA",
        "Independent samples t-test",
        "Chi-square test of independence",
        "Paired t-test"
      ],
      answer: [0],
      rationale: "Comparing a continuous, roughly normal outcome across three or more independent groups calls for one-way ANOVA. The independent t-test is the tempting distractor, but running it on all three pairings inflates the family-wise type I error rate, which ANOVA controls with a single omnibus test. Chi-square handles categorical outcomes, and the paired t-test requires related or repeated measurements.",
      difficulty: "core"
    },
    {
      id: "biostats-013",
      type: "mcq",
      stem: "A quality team wants to know whether 30-day readmission (yes or no) differs by discharge destination (home, skilled nursing facility, or rehabilitation). Which statistical test fits this question?",
      options: [
        "Chi-square test of independence",
        "One-way ANOVA",
        "Pearson correlation",
        "Independent samples t-test"
      ],
      answer: [0],
      rationale: "Both variables are categorical, a binary outcome and a three-level group variable, so the chi-square test of independence is the correct choice for comparing proportions across groups. ANOVA is the tempting distractor because three groups are involved, but ANOVA requires a continuous outcome, and readmission status is binary. Correlation and t-tests likewise require at least one continuous variable.",
      difficulty: "core"
    },
    {
      id: "biostats-014",
      type: "mcq",
      stem: "A researcher wants to predict hospital length of stay, a continuous variable, from age, comorbidity count, and frailty score while adjusting each predictor for the others. Which analysis is most appropriate?",
      options: [
        "Multiple linear regression",
        "Logistic regression",
        "One-way ANOVA",
        "A series of separate Pearson correlations"
      ],
      answer: [0],
      rationale: "Multiple linear regression models a continuous outcome as a function of several predictors simultaneously, providing adjusted estimates for each. Logistic regression is the tempting distractor because it also handles multiple predictors, but it requires a binary outcome, and length of stay is continuous. Separate correlations cannot adjust predictors for one another, and ANOVA compares group means rather than modeling continuous predictors.",
      difficulty: "advanced"
    },
    {
      id: "biostats-015",
      type: "mcq",
      stem: "A cross-sectional study finds a correlation of r = 0.60 (p less than 0.001) between daily screen time and depressive symptom scores in adolescents. Which conclusion is defensible?",
      options: [
        "Screen time and depressive symptoms show a moderately strong positive association, but the design cannot establish that either causes the other",
        "Excessive screen time causes depression in adolescents",
        "Reducing screen time will lower depressive symptoms by 60 percent",
        "The association is spurious because correlation coefficients cannot reach statistical significance"
      ],
      answer: [0],
      rationale: "An r of 0.60 indicates a moderately strong positive association, and the tiny p-value makes chance an unlikely explanation, but a cross-sectional correlation cannot establish direction or rule out confounding, so no causal claim is justified. The causal distractor is tempting because the association is strong and significant, yet reverse causation, with depressed adolescents seeking more screen time, is equally consistent with the data. The 60 percent reduction option misreads r as an effect size for an intervention.",
      difficulty: "core"
    },
    {
      id: "biostats-016",
      type: "mcq",
      stem: "A town of 2000 adults has 200 existing cases of type 2 diabetes on January 1. During the year, 90 new cases are diagnosed among the 1800 residents initially free of disease. What is the cumulative incidence of diabetes for the year?",
      options: [
        "5 per 100 at-risk persons",
        "10 per 100 persons",
        "4.5 per 100 persons",
        "14.5 per 100 persons"
      ],
      answer: [0],
      rationale: "Cumulative incidence counts only new cases among those at risk: 90 / 1800 = 0.05, or 5 per 100 at-risk persons per year. The tempting distractor 10 per 100 is the point prevalence at the start of the year (200 / 2000), which mixes in existing cases. Dividing new cases by the whole town (90 / 2000 = 4.5 percent) wrongly includes people who already had the disease and could not become new cases; 14.5 percent is the year-end prevalence calculation.",
      difficulty: "core"
    },
    {
      id: "biostats-017",
      type: "sata",
      stem: "A DNP student critiques a case-control study of an environmental exposure and a rare leukemia. Select all the statements that accurately describe the case-control design.",
      options: [
        "Participants are selected based on whether they have the outcome, then prior exposure is ascertained",
        "It is an efficient design for studying rare diseases",
        "The odds ratio is its measure of association",
        "It is particularly vulnerable to recall bias when exposure is self-reported",
        "It directly measures the incidence of disease in exposed and unexposed groups",
        "Exposure is assigned to participants by randomization"
      ],
      answer: [0, 1, 2, 3],
      rationale: "Case-control studies begin with diseased cases and non-diseased controls, look backward at exposure, report odds ratios, and are efficient for rare outcomes precisely because cases are recruited directly; retrospective self-report makes recall bias a signature threat. The incidence distractor is the tempting one, but because investigators fix the ratio of cases to controls, disease frequency in the sample is artificial and incidence cannot be measured. Randomized exposure defines an experimental design, not an observational one.",
      difficulty: "advanced"
    },
    {
      id: "biostats-018",
      type: "mcq",
      stem: "An observational study finds that coffee drinkers have higher rates of pancreatic cancer. Coffee drinkers in the sample were also far more likely to smoke, and smoking independently causes pancreatic cancer. What is the role of smoking in this analysis?",
      options: [
        "A confounder, because it is associated with the exposure and independently causes the outcome without lying on the causal pathway",
        "A mediator, because coffee drinking leads people to smoke, which then causes cancer",
        "An effect modifier, because the coffee effect differs between smokers and nonsmokers",
        "A selection bias, because smokers were more likely to enroll in the study"
      ],
      answer: [0],
      rationale: "Smoking meets all three criteria for confounding: it is associated with the exposure (coffee drinking), it independently causes the outcome, and it is not an intermediate step on a causal path from coffee to cancer. The mediator distractor is tempting but requires that coffee causes smoking as a mechanism, which is not the relationship described. Effect modification would require evidence that the coffee-cancer association truly differs by smoking status, and selection bias concerns how participants entered the study, not the mixing of effects.",
      difficulty: "advanced"
    },
    {
      id: "biostats-019",
      type: "sata",
      stem: "A DNP student designing an observational study wants to control confounding. Select all the strategies that address confounding.",
      options: [
        "Randomization of exposure, when an experimental design is feasible",
        "Restricting enrollment to a single level of the suspected confounder",
        "Stratified analysis across levels of the confounder",
        "Multivariable regression adjustment for measured confounders",
        "Simply enrolling a much larger sample without other changes",
        "Blinding outcome assessors to exposure status"
      ],
      answer: [0, 1, 2, 3],
      rationale: "Randomization balances both measured and unmeasured confounders, while restriction, stratification, and multivariable adjustment each control measured confounders by design or analysis. A larger sample is the tempting distractor because it improves precision, but confounding is systematic error, and a bigger study simply estimates the same biased association more precisely. Blinding assessors addresses detection bias, not confounding.",
      difficulty: "core"
    },
    {
      id: "biostats-020",
      type: "mcq",
      stem: "A new screening program detects pancreatic cancer an average of 2 years earlier than clinical presentation. Five-year survival from diagnosis improves markedly among screened patients, yet the age at death from pancreatic cancer is unchanged. What best explains this pattern?",
      options: [
        "Lead-time bias, because earlier diagnosis lengthens the measured survival clock without postponing death",
        "Length-time bias, because screening preferentially detects slow-growing tumors",
        "A true mortality benefit demonstrated by the improved five-year survival",
        "Volunteer bias, because healthier people choose to be screened"
      ],
      answer: [0],
      rationale: "When diagnosis moves earlier but death does not, the added survival time is purely the lead time, the interval by which diagnosis was advanced, so survival from diagnosis lengthens while mortality is untouched; the unchanged age at death is the giveaway. The true benefit distractor is tempting because five-year survival is a familiar benchmark, but survival measured from diagnosis is exactly the statistic lead time inflates; disease-specific mortality is the unbiased endpoint. Length-time and volunteer bias are real screening problems but do not explain identical ages at death with earlier diagnosis.",
      difficulty: "advanced"
    }
  ]
});
