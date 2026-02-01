import { MultiPageLesson } from "./types";

// Unit 17: Organization
// Topics: Grouping Arguments, Gambler's Fallacy, Line-by-Line Refutation, Alternative Causality Argument, Ecological Fallacy, Crystallization

export const UNIT_17_LESSONS: MultiPageLesson[] = [
    {
        lessonId: "l17-01",
        pages: [
            {
                type: "content",
                title: "Introduction: Grouping Arguments",
                content: "Grouping arguments means organizing multiple related points under broader themes rather than addressing them one-by-one. This technique improves efficiency, enhances persuasiveness, and helps judges follow your logic.\n\nRather than responding to ten separate arguments individually, skilled debaters identify patterns and respond at the thematic level. 'All of these arguments fail for the same reason...'\n\nIn this lesson, you'll learn when to group, how to group effectively, and when individual treatment is necessary.",
            },
            {
                type: "content",
                title: "Benefits of Grouping",
                content: "Why consolidate related arguments:\n\n**Time Efficiency:**\nOne response to the category is faster than separate responses to each.\n\n**Persuasiveness:**\nIdentifying patterns shows intellectual sophistication. 'These are all versions of the same flawed logic.'\n\n**Memorability:**\nJudges remember themes better than lists. Bundled responses create clearer impressions.\n\n**Strength:**\n'Here's why all their economic arguments fail' is stronger than fighting five separate micro-battles.\n\n**Control:**\nYou're framing the debate around your categories, not their structure.\n\n**Overview:**\n'At the thematic level, their case fails because...' sets up specific responses.",
                keyPoints: [
                    "Grouping is more efficient than one-by-one response",
                    "Thematic framing shows sophistication and helps judges",
                    "You control how arguments are categorized",
                ],
            },
            {
                type: "question",
                id: "l17-01-q1",
                question: "What's a key advantage of grouping related opponent arguments?",
                options: [
                    { id: "a", text: "It hides that you're not responding to everything" },
                    { id: "b", text: "One thematic response addresses multiple arguments efficiently" },
                    { id: "c", text: "Judges don't like detailed responses" },
                    { id: "d", text: "It always takes longer than individual responses" }
                ],
                correctAnswer: "b",
                explanation: "Grouping allows one response to address multiple related arguments. Instead of five separate responses, you identify the common flaw and address it once. This saves time and shows you understand the underlying patterns.",
            },
            {
                type: "content",
                title: "How to Group Effectively",
                content: "Techniques for successful grouping:\n\n**Identify Common Threads:**\nWhat do these arguments share? Similar logic, evidence type, value assumption, or purpose?\n\n**Name the Category:**\n'Their economic arguments...' 'Their appeals to tradition...' 'Their source-based claims...'\n\n**One Response to All:**\n'All of these fail because [common flaw]. Here's why...'\n\n**Brief Individual Attention:**\nIf needed, brief specific responses after the thematic response: 'Additionally, their first argument specifically fails because...'\n\n**Signpost Clearly:**\nMake sure judges know you're grouping. 'I'll address their next three arguments together because they share a common problem.'\n\n**Ensure Genuine Commonality:**\nForced grouping is obvious. Only group what genuinely shares characteristics.",
                keyPoints: [
                    "Identify genuine common threads across arguments",
                    "Name the category and explain the shared flaw",
                    "Signpost clearly so judges follow your structure",
                ],
            },
            {
                type: "content",
                title: "When Not to Group",
                content: "Individual treatment is sometimes necessary:\n\n**Distinct Arguments:**\nIf arguments don't genuinely share characteristics, forced grouping looks evasive.\n\n**Important Individual Points:**\nSome arguments deserve specific attention. The strongest opponent arguments may need individual responses.\n\n**Complexity:**\nIf the grouped response wouldn't adequately address all arguments, don't group.\n\n**Strategic Emphasis:**\nSometimes you want to show you're comprehensively addressing everything.\n\n**Mixed Approach:**\nYou can group some arguments and address others individually.\n\n**Balance:**\nPure grouping may seem like you're avoiding engagement. Pure line-by-line may seem inefficient. Find the right mix.",
                keyPoints: [
                    "Don't force grouping when arguments are genuinely distinct",
                    "Important or complex arguments may need individual treatment",
                    "Mix grouping and individual responses strategically",
                ],
            },
            {
                type: "question",
                id: "l17-01-q2",
                question: "When should you NOT group arguments together?",
                options: [
                    { id: "a", text: "When they share a common flaw" },
                    { id: "b", text: "When they're genuinely distinct and forcing grouping would look evasive" },
                    { id: "c", text: "When you have time to respond" },
                    { id: "d", text: "When judges are watching" }
                ],
                correctAnswer: "b",
                explanation: "Don't force grouping when arguments are genuinely distinct. Forced grouping looks evasive and may not adequately address each argument. Group only when there's genuine common ground to address.",
            },
            {
                type: "content",
                title: "Conclusion: Strategic Organization",
                content: "Grouping arguments is a powerful organizational tool that saves time, shows sophistication, and helps judges follow your logic.\n\n**Key Takeaways:**\n• Grouping addresses multiple arguments with one thematic response\n• Identify genuine common threads; name the category\n• Signpost clearly so judges follow your structure\n• Don't force grouping when arguments are genuinely distinct\n• Important arguments may need individual treatment\n• Mix grouping and individual responses strategically\n\n**Looking Ahead:**\nIn the next lesson, we'll explore the Gambler's Fallacy.\n\n**Practice Challenge:**\nTake a set of five arguments on one side of a debate. Can you identify patterns to group them? How would you respond at the thematic level?",
                keyPoints: [
                    "Effective grouping saves time and shows sophistication",
                    "Only group genuinely related arguments",
                    "Balance thematic and individual responses",
                ],
            },
        ],
    },
    {
        lessonId: "l17-02",
        pages: [
            {
                type: "content",
                title: "Introduction: The Gambler's Fallacy",
                content: "The gambler's fallacy believes that past random events affect future probabilities. If a coin lands heads five times, the fallacy assumes tails is 'due'—but each flip is independent.\n\nThis fallacy affects reasoning about probability, risk, and prediction. In debate, it appears when past occurrences are incorrectly used to predict future events.\n\nIn this lesson, you'll learn to identify the gambler's fallacy and understand when past events do and don't inform future probabilities.",
            },
            {
                type: "content",
                title: "Understanding the Fallacy",
                content: "Past randomness doesn't change future probability:\n\n**The Core Error:**\nBelieving that random events 'balance out' over short runs, so a streak makes the opposite outcome more likely.\n\n**Examples:**\n'The roulette wheel hit red 10 times—black is due!' (No—each spin is independent)\n'We've had three earthquakes recently, so we're safe for a while.' (Earthquakes don't follow this logic)\n'Our team lost five games—we're due for a win.' (If outcomes are random or independent)\n\n**Why It Feels Right:**\n• Long-run patterns exist (50% heads over thousands of flips)\n• We seek patterns and expect balance\n• Short-term streaks are psychologically salient\n\n**The Reality:**\nThe coin doesn't 'remember' previous flips. Each independent event has the same probability regardless of history.",
                keyPoints: [
                    "Independent events have consistent probabilities regardless of history",
                    "The universe doesn't 'balance out' random events",
                    "Long-run patterns don't apply to individual predictions",
                ],
            },
            {
                type: "question",
                id: "l17-02-q1",
                question: "A fair coin has landed heads 7 times in a row. What's the probability of heads on the next flip?",
                options: [
                    { id: "a", text: "Less than 50%—tails is due" },
                    { id: "b", text: "50%—each flip is independent" },
                    { id: "c", text: "More than 50%—the streak will continue" },
                    { id: "d", text: "100%—it's a pattern" }
                ],
                correctAnswer: "b",
                explanation: "For a fair coin, each flip is independent with 50% probability of heads. The previous seven heads don't affect the next flip. The coin has no memory. This is the core of why gambler's fallacy is wrong.",
            },
            {
                type: "content",
                title: "When History Does Matter",
                content: "Not all events are independent:\n\n**Dependent Events:**\nDrawing cards without replacement changes probabilities. Past events affect what's left.\n\n**Skill/Pattern:**\nSports outcomes aren't purely random—skill, form, and opponent strength matter. Past performance provides information.\n\n**Non-Stationary Processes:**\nIf underlying conditions change, past data may indicate trends.\n\n**Information:**\nMany consecutive failures might suggest the process isn't truly random, or that there's an underlying problem.\n\n**The Key Question:**\n'Are these events genuinely independent?' If yes, gambler's fallacy applies. If no, past events may be informative.\n\n**Streak Interpretation:**\nA long unusual streak should make you question whether the process is truly random—not expect reversal of a still-random process.",
                keyPoints: [
                    "Dependent events: past affects remaining probabilities",
                    "Non-random processes: past provides genuine information",
                    "Ask: are these events genuinely independent?",
                ],
            },
            {
                type: "content",
                title: "Using This in Debate",
                content: "Apply understanding strategically:\n\n**Identifying the Fallacy:**\n'My opponent argues that because X hasn't happened recently, it's about to happen. But X is random/independent—past occurrences don't change future probability.'\n\n**Challenging Predictions:**\n'They're assuming events balance out. But each occurrence is independent. History doesn't make Y more or less likely.'\n\n**When History Matters:**\n'Unlike random events, this process is affected by past outcomes. The trend indicates...'\n\n**Risk Assessment:**\n'The probability of [event] doesn't decrease just because we haven't seen it recently. Each period has the same risk.'\n\n**Avoiding the Fallacy:**\nBe careful in your own reasoning. Don't assume rare events are 'due' or that past patterns guarantee future reversal.",
                keyPoints: [
                    "Call out when opponents assume past randomness affects future probability",
                    "Distinguish random from dependent/patterned events",
                    "Avoid committing the fallacy in your own reasoning",
                ],
            },
            {
                type: "question",
                id: "l17-02-q2",
                question: "Someone argues: 'The volcano hasn't erupted in 50 years, so an eruption is overdue.' What should you consider?",
                options: [
                    { id: "a", text: "They're definitely right—it's due" },
                    { id: "b", text: "This could be gambler's fallacy if eruptions are random, but might be valid if geological patterns suggest cycles" },
                    { id: "c", text: "It's definitely gambler's fallacy" },
                    { id: "d", text: "Volcanoes don't erupt" }
                ],
                correctAnswer: "b",
                explanation: "The answer depends on whether volcanic eruptions are genuinely random or follow patterns. If eruptions are random and independent, this is gambler's fallacy. But if geological evidence shows pressure buildup over time, past dormancy might actually increase future probability. The key is whether events are independent.",
            },
            {
                type: "content",
                title: "Conclusion: Independence and Probability",
                content: "The gambler's fallacy wrongly assumes random events balance out. Understanding independence is crucial for sound probabilistic reasoning.\n\n**Key Takeaways:**\n• Independent events have consistent probabilities regardless of history\n• The universe doesn't 'balance out' random outcomes\n• Long-run patterns don't predict individual events\n• Dependent events and non-random processes are different\n• Ask whether events are genuinely independent\n• Apply in debate to challenge flawed probability reasoning\n\n**Looking Ahead:**\nIn the next lesson, we'll explore Line-by-Line Refutation.\n\n**Practice Challenge:**\nIdentify an argument that commits gambler's fallacy. What would make the argument valid (what would have to be true about the process)?",
                keyPoints: [
                    "Independent events don't 'remember' history",
                    "Ask whether events are genuinely independent",
                    "Past patterns in non-random processes may be informative",
                ],
            },
        ],
    },
    {
        lessonId: "l17-03",
        pages: [
            {
                type: "content",
                title: "Introduction: Line-by-Line Refutation",
                content: "Line-by-line refutation systematically addresses each opponent argument in order. This comprehensive approach ensures nothing is dropped, demonstrates thorough engagement, and satisfies judges who value complete clash.\n\nWhile grouping has its place, line-by-line is essential when you need to show comprehensive response or when arguments are genuinely distinct.\n\nIn this lesson, you'll learn when line-by-line is appropriate, how to execute it efficiently, and how to balance it with other approaches.",
            },
            {
                type: "content",
                title: "Benefits of Line-by-Line",
                content: "Why systematic response matters:\n\n**Completeness:**\nEnsures every argument is addressed. Dropped arguments can be voted on.\n\n**Clarity:**\nJudges can easily track which arguments you're responding to.\n\n**Demonstration:**\nShows thorough engagement with opponent's case.\n\n**Organization:**\nFollowing their structure makes flow sheets easy to keep.\n\n**Safety:**\nMinimizes risk of missing important arguments.\n\n**Expectations:**\nSome judges explicitly expect line-by-line. Know your audience.\n\n**Foundation:**\nEven when you'll group or prioritize, understanding their arguments individually is necessary groundwork.",
                keyPoints: [
                    "Ensures no argument is dropped",
                    "Judges can easily follow your responses",
                    "Some judges expect comprehensive line-by-line",
                ],
            },
            {
                type: "question",
                id: "l17-03-q1",
                question: "What's the main risk that line-by-line refutation prevents?",
                options: [
                    { id: "a", text: "Speaking too slowly" },
                    { id: "b", text: "Dropping arguments that opponents can then claim you conceded" },
                    { id: "c", text: "Confusing the judge" },
                    { id: "d", text: "Running out of content" }
                ],
                correctAnswer: "b",
                explanation: "The main risk prevented by line-by-line is dropping arguments. Unaddressed arguments may be treated as conceded by judges. Systematic response ensures every point receives attention.",
            },
            {
                type: "content",
                title: "Executing Line-by-Line Efficiently",
                content: "Systematic doesn't mean slow:\n\n**Clear Signposting:**\n'On their first argument about X... On their second point... On their third...'\n\n**Consistent Structure:**\nFor each argument: identify it, respond with either refutation or concession with mitigation, and move on.\n\n**Vary Response Depth:**\nNot every argument needs equal time. Brief dismissals for weak points; detailed responses for strong ones.\n\n**Triage:**\n'Their third and fourth arguments share a flaw; I'll address them together' within an otherwise line-by-line structure.\n\n**Don't Repeat Their Arguments:**\nBrief identification ('On their economic harm argument'), not full restatement.\n\n**Prep:**\nFlow their arguments carefully so you can navigate efficiently.",
                keyPoints: [
                    "Signpost each response clearly",
                    "Vary depth based on argument importance",
                    "Identify briefly; don't restate their full argument",
                ],
            },
            {
                type: "content",
                title: "Balancing with Other Approaches",
                content: "Line-by-line isn't the only approach:\n\n**When Line-by-Line is Best:**\n• Judges who expect it\n• When arguments are genuinely distinct\n• When you need to show comprehensive response\n• Early in a debate before issues narrow\n\n**When Other Approaches Work:**\n• Time pressure—prioritize key arguments\n• Related arguments—group thematically\n• Later speeches—crystallize around voting issues rather than comprehensive response\n\n**Mixed Approach:**\n'I'll address their arguments in order, but I'll group their third through fifth points because they share a common problem.'\n\n**Strategic Selection:**\nIn rebuttals, you might focus on the most important arguments rather than touching everything briefly.",
                keyPoints: [
                    "Use line-by-line when judges expect it or arguments are distinct",
                    "Combine with grouping and prioritization as needed",
                    "Later speeches may focus on key issues rather than comprehensive response",
                ],
            },
            {
                type: "question",
                id: "l17-03-q2",
                question: "How can you execute line-by-line efficiently without taking too much time?",
                options: [
                    { id: "a", text: "Restate their full arguments before responding" },
                    { id: "b", text: "Briefly identify each argument and vary response depth based on importance" },
                    { id: "c", text: "Give equal time to every argument" },
                    { id: "d", text: "Skip the signposting to save time" }
                ],
                correctAnswer: "b",
                explanation: "Efficient line-by-line briefly identifies each argument (don't restate it fully) and varies depth based on importance. Weak arguments get brief dismissals; strong arguments get detailed responses. Signposting helps judges follow.",
            },
            {
                type: "content",
                title: "Conclusion: Comprehensive Response",
                content: "Line-by-line refutation ensures complete engagement with opponent arguments. While not always necessary, it's an essential technique for thorough clash.\n\n**Key Takeaways:**\n• Line-by-line ensures no arguments are dropped\n• Signpost clearly; don't restate their full arguments\n• Vary response depth based on argument importance\n• Appropriate when judges expect it or arguments are distinct\n• Combine with grouping and prioritization strategically\n• Later speeches may focus on key issues rather than comprehensive response\n\n**Looking Ahead:**\nIn the next lesson, we'll explore the Alternative Causality Argument.\n\n**Practice Challenge:**\nPractice responding to a case line-by-line. Time yourself. Then try grouping some arguments and compare efficiency. Which approach works better for that case?",
                keyPoints: [
                    "Line-by-line prevents dropping arguments",
                    "Efficiency comes from brief identification and varied depth",
                    "Balance with grouping and prioritization based on context",
                ],
            },
        ],
    },
    {
        lessonId: "l17-04",
        pages: [
            {
                type: "content",
                title: "Introduction: The Alternative Causality Argument",
                content: "The alternative causality argument challenges causal claims by showing that the outcome could be explained by different factors. When opponents claim X caused Y, you argue that Z actually caused Y—undermining their causal reasoning.\n\nThis is a fundamental refutation technique because so many arguments depend on causation. If you can explain the outcome without their proposed cause, their argument loses force.\n\nIn this lesson, you'll learn to construct and respond to alternative causality challenges.",
            },
            {
                type: "content",
                title: "How Alternative Causality Works",
                content: "Challenge the causal link:\n\n**The Structure:**\nOpponent: 'X caused Y.'\nYou: 'Actually, Z caused Y. Here's why.'\n\n**Examples:**\n'They say tax cuts caused growth. But growth coincided with a technology boom that explains the expansion regardless of tax policy.'\n\n'They claim their policy improved outcomes. But improved outcomes could result from economic conditions, demographic shifts, or other policies implemented simultaneously.'\n\n**Why It Works:**\nIf Y can be explained without X, their argument that X caused Y loses support. You don't need to prove X didn't happen—just that it wasn't the cause.\n\n**Related to Warrant Attacks:**\nAlternative causality attacks the causal warrant—the logical connection between their evidence and their conclusion.",
                keyPoints: [
                    "Show the outcome could result from different causes",
                    "You don't need to prove their cause didn't occur—just that it isn't what explains the outcome",
                    "Undermines causal warrants",
                ],
            },
            {
                type: "question",
                id: "l17-04-q1",
                question: "Opponent argues their education policy caused test score improvement. You show test scores improved nationwide due to a new curriculum adopted everywhere. What have you done?",
                options: [
                    { id: "a", text: "Denied that test scores improved" },
                    { id: "b", text: "Provided an alternative cause that explains the improvement without their policy" },
                    { id: "c", text: "Agreed with their argument" },
                    { id: "d", text: "Made a personal attack" }
                ],
                correctAnswer: "b",
                explanation: "You've provided an alternative cause. The new curriculum explains test score improvement independently of their policy. This undermines their claim that their policy caused the improvement—the outcome would have occurred anyway.",
            },
            {
                type: "content",
                title: "Constructing Alternative Causality Arguments",
                content: "Build compelling alternatives:\n\n**Identify Other Factors:**\nWhat else was happening that could explain the outcome? Economic conditions, other policies, demographic shifts, external events?\n\n**Explain the Mechanism:**\nDon't just assert alternative causality—explain how your alternative produced the outcome.\n\n**Evidence Matters:**\nSupport your alternative cause with evidence when possible.\n\n**Choice of Alternative:**\nThe best alternatives are ones the opponent can't easily dismiss. Mainstream explanations work better than obscure ones.\n\n**Multiple Alternatives:**\n'Several factors could explain this: A, B, and C. Their single-cause explanation is overly simplistic.'\n\n**Proportionality:**\nYour alternative should be proportionate to the outcome. Small causes don't explain large effects.",
                keyPoints: [
                    "Identify plausible alternative factors",
                    "Explain how the alternative produced the outcome",
                    "Support alternatives with evidence when possible",
                ],
            },
            {
                type: "content",
                title: "Defending Against Alternative Causality",
                content: "Protect your causal arguments:\n\n**Mechanism:**\nExplain the causal pathway clearly. 'Here's how X leads to Y, step by step.'\n\n**Control for Alternatives:**\n'Studies controlled for Z and still found X caused Y.'\n\n**Dismiss the Alternative:**\nShow the alternative doesn't actually explain the outcome. 'Z wasn't present in these cases, but Y still occurred when X was present.'\n\n**Multiple Lines of Evidence:**\n'Several independent studies with different methodologies all find X causes Y. Alternative explanations can't account for all the evidence.'\n\n**Preemption:**\nAddress likely alternative explanations in your constructive. 'Some might say Z caused this, but here's why X is the actual driver...'",
                keyPoints: [
                    "Explain causal mechanisms clearly",
                    "Cite studies that control for alternative factors",
                    "Preempt likely alternative explanations",
                ],
            },
            {
                type: "question",
                id: "l17-04-q2",
                question: "How can you defend your causal argument against alternative causality challenges?",
                options: [
                    { id: "a", text: "Ignore alternative explanations" },
                    { id: "b", text: "Explain the mechanism, cite controlled studies, and show why the alternative doesn't explain the evidence" },
                    { id: "c", text: "Shout louder" },
                    { id: "d", text: "Change the subject" }
                ],
                correctAnswer: "b",
                explanation: "Defend by explaining your causal mechanism clearly, citing studies that controlled for alternative factors, and showing why the alternative explanation doesn't account for all the evidence. Address alternatives directly rather than ignoring them.",
            },
            {
                type: "content",
                title: "Conclusion: Challenging Causation",
                content: "Alternative causality arguments are powerful tools for undermining causal claims. By explaining outcomes through different factors, you challenge the logical link in opponent arguments.\n\n**Key Takeaways:**\n• Show outcomes could result from different causes\n• You don't need to prove their cause didn't occur—just that it isn't the explanation\n• Explain mechanisms and support alternatives with evidence\n• Defend by explaining mechanisms and citing controlled studies\n• Preempt likely alternative explanations in your case\n• Best alternatives are plausible and hard to dismiss\n\n**Looking Ahead:**\nIn the next lesson, we'll explore the Ecological Fallacy.\n\n**Practice Challenge:**\nTake a causal argument you've encountered. What alternative explanations could account for the same outcome? How would you decide which explanation is most likely?",
                keyPoints: [
                    "Alternative causality undermines causal warrants",
                    "Explain how alternatives produce the outcome",
                    "Defend your own causation with mechanisms and controlled studies",
                ],
            },
        ],
    },
    {
        lessonId: "l17-05",
        pages: [
            {
                type: "content",
                title: "Introduction: The Ecological Fallacy",
                content: "The ecological fallacy incorrectly draws conclusions about individuals from group-level data. Just because something is true of a group average doesn't mean it's true of individuals within that group.\n\nThis fallacy is common in debate when statistics about populations are applied to individuals, or when aggregate trends are used to predict specific cases.\n\nIn this lesson, you'll learn to identify ecological fallacies and understand when group data can and can't inform individual conclusions.",
            },
            {
                type: "content",
                title: "Understanding the Fallacy",
                content: "Group patterns ≠ Individual reality:\n\n**The Core Error:**\nAssuming what's true of a group is true of individuals within it.\n\n**Examples:**\n'Countries with higher education levels have lower crime. Therefore, educated individuals are less likely to commit crimes.' (Possible but not proven by this data)\n\n'Wealthy neighborhoods vote conservative. Therefore, wealthy individuals vote conservative.' (Many wealthy individuals might not)\n\n'The average patient responds to this treatment. Therefore, this patient will respond.' (Individual variation exists)\n\n**Why It Fails:**\nAggregates obscure individual variation. A group average of 50% might contain people at 0% and 100%. The average tells you nothing about specific individuals.\n\n**Technical Term:**\nEcological = relating to groups/populations. The fallacy moves from ecological (group) to individual levels inappropriately.",
                keyPoints: [
                    "Group averages don't necessarily apply to individuals",
                    "Aggregates obscure individual variation within groups",
                    "Correlations at group level may not hold at individual level",
                ],
            },
            {
                type: "question",
                id: "l17-05-q1",
                question: "'States with more ice cream sales have more drowning deaths. Therefore, eating ice cream causes drowning.' What fallacy is this?",
                options: [
                    { id: "a", text: "Only ecological fallacy" },
                    { id: "b", text: "Ecological fallacy combined with false causation—group correlation is spurious (caused by a third factor: summer weather)" },
                    { id: "c", text: "No fallacy—ice cream is dangerous" },
                    { id: "d", text: "Appeal to authority" }
                ],
                correctAnswer: "b",
                explanation: "This combines ecological fallacy (drawing individual conclusions from group data) with false causation. The group-level correlation exists because both ice cream sales and drowning deaths increase in summer. No individual causal mechanism connects them.",
            },
            {
                type: "content",
                title: "Identifying Ecological Fallacy",
                content: "Recognize when group data is misapplied:\n\n**Key Signals:**\n• Data about regions, countries, or populations being applied to specific individuals\n• 'On average, X. Therefore, this case will be X.'\n• Correlations between group-level variables used to infer individual behavior\n\n**Questions to Ask:**\n'Is this data about groups or individuals?'\n'Could there be variation within the group?'\n'Does the relationship hold at the individual level?'\n\n**The Reverse Fallacy:**\n'Atomistic fallacy' moves from individual to group inappropriately. 'This person recovered. Therefore, the treatment works for everyone.'\n\n**When Group Data Is Appropriate:**\nGroup data can support group-level conclusions. 'Countries with X policy have better outcomes' supports adopting X at the country level—just not conclusions about specific individuals.",
                keyPoints: [
                    "Watch for group data applied to individual conclusions",
                    "Ask about variation within groups",
                    "Group data supports group conclusions, not individual predictions",
                ],
            },
            {
                type: "content",
                title: "Using This in Debate",
                content: "Apply strategically:\n\n**Challenging Opponent Arguments:**\n'Their evidence shows group-level correlations, but they're drawing conclusions about specific individuals. Individual variation within groups undermines this inference.'\n\n**Proper Use of Statistics:**\nWhen citing group data, be clear about what level conclusions you're drawing. 'This data shows that policies of type X tend to produce outcome Y at the national level.'\n\n**Demanding Appropriate Evidence:**\n'To conclude this about individuals, we'd need individual-level data, not aggregate statistics.'\n\n**Acknowledging Variation:**\n'While the average effect is positive, there's significant variation. Some individuals may experience negative effects.'\n\n**Preemption:**\n'Our evidence is individual-level data, directly showing how specific cases are affected—not aggregates that might hide variation.'",
                keyPoints: [
                    "Challenge when group data is misapplied to individuals",
                    "Be clear about what level your conclusions address",
                    "Individual-level data is stronger for individual conclusions",
                ],
            },
            {
                type: "question",
                id: "l17-05-q2",
                question: "How can you avoid committing ecological fallacy in your own arguments?",
                options: [
                    { id: "a", text: "Never use statistics" },
                    { id: "b", text: "Only draw conclusions at the same level as your data—group data for group conclusions, individual data for individual conclusions" },
                    { id: "c", text: "Always apply group averages to individuals" },
                    { id: "d", text: "Use smaller groups" }
                ],
                correctAnswer: "b",
                explanation: "Match your conclusions to your data level. Group data supports group-level conclusions; individual data supports individual-level conclusions. Acknowledge variation when moving between levels.",
            },
            {
                type: "content",
                title: "Conclusion: Matching Data and Conclusions",
                content: "The ecological fallacy wrongly applies group patterns to individuals. Careful reasoning matches conclusions to the appropriate data level.\n\n**Key Takeaways:**\n• Group averages don't necessarily apply to individuals\n• Aggregates obscure individual variation\n• Match conclusions to data level—group for group, individual for individual\n• Challenge opponents who draw individual conclusions from group data\n• Acknowledge variation when using aggregate statistics\n• Individual-level data is stronger for individual conclusions\n\n**Looking Ahead:**\nIn the next lesson, we'll explore Crystallization.\n\n**Practice Challenge:**\nFind an argument that uses statistics. Is it drawing conclusions at the same level as the data? If not, is the leap justified?",
                keyPoints: [
                    "Group patterns don't determine individual outcomes",
                    "Match conclusions to data level",
                    "Acknowledge variation within groups",
                ],
            },
        ],
    },
    {
        lessonId: "l17-06",
        pages: [
            {
                type: "content",
                title: "Introduction: Crystallization",
                content: "Crystallization is synthesizing the debate into its essential voting issue(s). As debates progress, issues narrow and key questions become clear. Crystallization frames the final decision for the judge.\n\nThis is typically where debates are won or lost—not in having the most arguments, but in showing the judge why the key issue favors your side.\n\nIn this lesson, you'll learn to crystallize effectively, identifying and framing the central decisions for the round.",
            },
            {
                type: "content",
                title: "What Crystallization Does",
                content: "Synthesis, not summary:\n\n**Purpose:**\n• Tells the judge how to decide\n• Identifies what matters most\n• Shows why you win on the key issue(s)\n• Simplifies complex debates into manageable decisions\n\n**Not Summary:**\nCrystallization isn't repeating everything that happened. It's identifying what's determinative and showing why you win there.\n\n**Timing:**\nTypically in final speeches (rebuttals, closing statements). Earlier speeches build; final speeches crystallize.\n\n**Why It Matters:**\nJudges need to know how to vote. If you don't tell them the key issue and why you win it, you're leaving the decision to chance.\n\n**The Question:**\n'If you believe X, vote for us. Here's why X is true...'",
                keyPoints: [
                    "Crystallization tells judges how to decide",
                    "Identifies the determinative issue(s)",
                    "Synthesis is more powerful than summary",
                ],
            },
            {
                type: "question",
                id: "l17-06-q1",
                question: "What's the difference between summary and crystallization?",
                options: [
                    { id: "a", text: "There is no difference" },
                    { id: "b", text: "Summary repeats arguments; crystallization identifies what's determinative and why you win there" },
                    { id: "c", text: "Summary is longer" },
                    { id: "d", text: "Crystallization comes earlier" }
                ],
                correctAnswer: "b",
                explanation: "Summary repeats what happened; crystallization identifies the key voting issue(s) and shows why you win there. Crystallization gives judges a decision calculus, not just a recap.",
            },
            {
                type: "content",
                title: "How to Crystallize",
                content: "Execute crystallization effectively:\n\n**Identify the Voting Issue:**\nWhat's the central question the judge must answer? What is the debate really about?\n\n**Show You Win There:**\n'The debate comes down to X. On X, we win because...'\n\n**Explain Why It's Key:**\nWhy does this issue determine the round? Why should the judge focus here?\n\n**Frame the Choice:**\n'If you believe [claim], vote for us. If you believe [opponent claim], vote for them. Here's why the evidence supports our claim...'\n\n**Incorporate Weighing:**\n'Even granting their arguments, they don't outweigh ours because...'\n\n**Keep It Clear:**\nJudges are human. Clear, simple crystallization is more persuasive than complex analysis. Three points maximum.",
                keyPoints: [
                    "Identify the central voting issue",
                    "Show explicitly why you win there",
                    "Frame the judge's choice clearly",
                ],
            },
            {
                type: "content",
                title: "Common Crystallization Frames",
                content: "Useful frameworks for crystallization:\n\n**The Criterion:**\n'By the agreed criterion of X, we win because...'\n\n**The Only-If:**\n'Their case can only win if Y. Y isn't true because...'\n\n**The Outweigh:**\n'Even if you accept their arguments, ours are more significant because...'\n\n**The Concession Frame:**\n'We've accepted some of their points. But the determinative issue is Z, where we clearly prevail.'\n\n**The Resolution Focus:**\n'The resolution asks whether X. On that question, the evidence shows...'\n\n**The Risk Calculus:**\n'The risks of their approach outweigh the risks of ours because...'\n\n**The Burden:**\n'They had to prove X. They haven't met that burden because...'",
                keyPoints: [
                    "Multiple frameworks can structure crystallization",
                    "Choose the frame that best fits your winning position",
                    "Criterion, outweighing, and burden are common frames",
                ],
            },
            {
                type: "question",
                id: "l17-06-q2",
                question: "When should crystallization occur in a debate?",
                options: [
                    { id: "a", text: "In the first speech" },
                    { id: "b", text: "In final speeches when issues have narrowed and you're telling the judge how to decide" },
                    { id: "c", text: "It should never occur—let judges decide" },
                    { id: "d", text: "Only when you're losing" }
                ],
                correctAnswer: "b",
                explanation: "Crystallization occurs in final speeches when the debate has developed and issues have narrowed. Earlier speeches build content; final speeches synthesize around key issues. Effective crystallization guides the judge's decision.",
            },
            {
                type: "content",
                title: "Conclusion: The Final Frame",
                content: "Crystallization transforms debates from argument lists into clear voting calculus. Mastering crystallization is essential for final-speech success.\n\n**Key Takeaways:**\n• Crystallization tells judges how to decide\n• Identifies the determinative issue(s), not just summaries\n• Show why you win on the key issue\n• Frame the judge's choice clearly and simply\n• Multiple frameworks available: criterion, outweigh, burden, etc.\n• Crystallize in final speeches after issues have narrowed\n\n**Looking Ahead:**\nIn the next lesson, we'll review Unit 17 concepts.\n\n**Practice Challenge:**\nWatch a debate recording up to final speeches. Before the final speech, identify what you think is the key voting issue. Does the speaker crystallize around that issue?",
                keyPoints: [
                    "Crystallization guides the judge's decision",
                    "Identify and win the key issue",
                    "Clear, simple crystallization is most persuasive",
                ],
            },
        ],
    },
    {
        lessonId: "l17-07",
        pages: [
            {
                type: "content",
                title: "Introduction: Unit 17 Review",
                content: "Congratulations on completing Unit 17! This unit focused on organizing arguments effectively—both your own and responses to opponents.\n\nIn this review, we'll consolidate grouping arguments, the gambler's fallacy, line-by-line refutation, alternative causality, the ecological fallacy, and crystallization.",
            },
            {
                type: "content",
                title: "Review: Organizational Strategies",
                content: "**Grouping Arguments:**\n• Address related arguments with one thematic response\n• Only group genuinely related points\n• Mix grouping with individual response strategically\n\n**Line-by-Line Refutation:**\n• Systematic response to each argument in order\n• Prevents dropping arguments\n• Vary depth based on importance; signpost clearly\n\n**Crystallization:**\n• Synthesize debate into key voting issue(s)\n• Tell judges how to decide and why you win\n• Occurs in final speeches after issues have narrowed",
                keyPoints: [
                    "Group related arguments; respond individually to distinct ones",
                    "Line-by-line ensures comprehensive response",
                    "Crystallize to guide judge's final decision",
                ],
            },
            {
                type: "content",
                title: "Review: Fallacies and Reasoning",
                content: "**Gambler's Fallacy:**\n• Past random events don't affect future probabilities\n• Independent events have consistent probabilities regardless of history\n• Ask whether events are genuinely independent\n\n**Alternative Causality:**\n• Show outcomes could result from different causes\n• Undermines causal warrants by explaining away the link\n• Defend with mechanisms, controlled studies, and preemption\n\n**Ecological Fallacy:**\n• Group patterns don't determine individual outcomes\n• Match conclusions to data level\n• Individual data needed for individual conclusions",
                keyPoints: [
                    "Past randomness doesn't change future probability",
                    "Alternative explanations undermine causal claims",
                    "Group data doesn't apply to individuals",
                ],
            },
            {
                type: "question",
                id: "l17-07-q1",
                question: "What distinguishes crystallization from summary?",
                options: [
                    { id: "a", text: "Crystallization is longer" },
                    { id: "b", text: "Crystallization identifies the key issue and tells judges why you win there; summary just recaps" },
                    { id: "c", text: "There is no difference" },
                    { id: "d", text: "Summary comes later" }
                ],
                correctAnswer: "b",
                explanation: "Crystallization is synthesis that identifies the determinative issue and shows why you win it. Summary just repeats what happened. Effective crystallization guides the judge's decision rather than listing arguments.",
            },
            {
                type: "question",
                id: "l17-07-q2",
                question: "Someone argues a losing team is 'due for a win' after many losses. Assuming pure chance, what fallacy is this?",
                options: [
                    { id: "a", text: "Ecological fallacy" },
                    { id: "b", text: "Alternative causality" },
                    { id: "c", text: "Gambler's fallacy—past random results don't affect future probability" },
                    { id: "d", text: "False dilemma" }
                ],
                correctAnswer: "c",
                explanation: "This is gambler's fallacy. If outcomes are random and independent, past losses don't increase the probability of future wins. The team isn't 'due'—each game has its own probability unaffected by past results.",
            },
            {
                type: "content",
                title: "Conclusion: Organized Debate",
                content: "You've completed Unit 17, building tools for organizing arguments and responses in debate.\n\n**Key Takeaways:**\n• Group related arguments; handle distinct ones individually\n• Line-by-line ensures completeness; crystallization provides synthesis\n• Challenge gambler's fallacy when past events are used to predict independent futures\n• Alternative causality undermines causal claims\n• Ecological fallacy misapplies group data to individuals\n• Crystallize around key voting issues in final speeches\n\n**Looking Ahead:**\nUnit 18 will explore Comparison and Standards for evaluating arguments.\n\n**Practice Challenge:**\nFor your next debate, plan both a line-by-line and grouped response structure. Which works better for that specific case?",
                keyPoints: [
                    "Multiple organizational tools for different situations",
                    "Fallacy recognition supports challenge arguments",
                    "Crystallization wins debates by guiding judge decisions",
                ],
            },
        ],
    },
];
