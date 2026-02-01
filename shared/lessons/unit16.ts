import { MultiPageLesson } from "./types";

// Unit 16: Advanced Techniques
// Topics: Anecdotal Fallacy, Refutation by Outweighing, Bandwagon Fallacy, Strategic Concessions, Sunk Cost Fallacy, Refutation by Source Criticism

export const UNIT_16_LESSONS: MultiPageLesson[] = [
    {
        lessonId: "l16-01",
        pages: [
            {
                type: "content",
                title: "Introduction: The Anecdotal Fallacy",
                content: "The anecdotal fallacy uses personal stories or isolated examples to draw conclusions that require broader evidence. While anecdotes can illustrate points, they can't prove general claims.\n\nThis fallacy is tempting because stories are memorable and emotionally compelling. But what's true for one case may not be true generally.\n\nIn this lesson, you'll learn when anecdotes are appropriate, when they're fallacious, and how to respond to anecdotal reasoning.",
            },
            {
                type: "content",
                title: "Understanding the Fallacy",
                content: "The mismatch between evidence and claim:\n\n**Structure:**\n'I know someone who [specific experience]. Therefore [general claim].'\n\n**Examples:**\n'My grandfather smoked and lived to 95, so smoking isn't that dangerous.'\n'I didn't wear a seatbelt this once and was fine, so seatbelts aren't necessary.'\n'This one policy worked in my town, so it will work everywhere.'\n\n**Why It Fails:**\n• Single cases don't establish patterns\n• Selection bias: we remember memorable cases, not typical ones\n• Confirmation bias: we notice evidence that fits our beliefs\n• Variation: individual experience may be atypical\n\n**What It Can't Prove:**\n• That something is generally true\n• Statistical relationships\n• Causation (even if X happened before Y in one case)",
                keyPoints: [
                    "Anecdotes can't establish general patterns",
                    "Selection and confirmation bias affect what we remember",
                    "Individual experience may be atypical",
                ],
            },
            {
                type: "question",
                id: "l16-01-q1",
                question: "Someone argues: 'My friend dropped out of college and became successful, so college isn't necessary for success.' What's fallacious about this reasoning?",
                options: [
                    { id: "a", text: "Nothing—the example proves the point" },
                    { id: "b", text: "One success story doesn't prove college is unnecessary generally; it's an outlier, not a pattern" },
                    { id: "c", text: "College is always necessary" },
                    { id: "d", text: "The friend isn't really successful" }
                ],
                correctAnswer: "b",
                explanation: "This is the anecdotal fallacy. One dropout succeeding doesn't prove college is unnecessary—that requires statistical comparison of outcomes. The friend might be an exceptional outlier, and other dropouts might fare worse on average.",
            },
            {
                type: "content",
                title: "When Anecdotes Are Appropriate",
                content: "Anecdotes aren't always fallacious:\n\n**Legitimate Uses:**\n• Illustrating a point already established by data\n• Showing that something is possible (existence proof)\n• Making abstract concepts concrete\n• Humanizing statistics\n• Providing memorable examples\n\n**Illegitimate Uses:**\n• Proving general claims\n• Establishing statistical relationships\n• Refuting statistical evidence\n• Proving causation\n\n**The Test:**\n'Is this anecdote being used to illustrate a pattern established by other evidence, or to prove a pattern by itself?'\n\n**Good Use:**\n'Studies show X. Here's an example of what that looks like in practice...'\n\n**Bad Use:**\n'Here's one example. Therefore X is generally true.'",
                keyPoints: [
                    "Anecdotes can illustrate; they can't prove general claims",
                    "Good use: 'Data shows X; here's an example'",
                    "Bad use: 'Here's an example; therefore X is true generally'",
                ],
            },
            {
                type: "content",
                title: "Responding to Anecdotal Arguments",
                content: "Challenge anecdotal reasoning effectively:\n\n**Call Out the Structure:**\n'You've offered an anecdote, but that's not evidence of a general pattern.'\n\n**Request Systematic Evidence:**\n'What does the broader data show? Personal experience doesn't establish general trends.'\n\n**Offer Counter-Anecdotes:**\n'I could offer opposite anecdotes. Neither proves anything—we need systematic evidence.'\n\n**Highlight Selection Bias:**\n'We tend to remember exceptional cases. What about the typical cases we don't hear about?'\n\n**Acknowledge and Redirect:**\n'That's an interesting story, but the statistics show the opposite pattern overall.'\n\n**Don't Dismiss:**\nBe respectful of personal experience while redirecting to appropriate evidence standards.",
                keyPoints: [
                    "Request systematic evidence, not individual stories",
                    "Counter-anecdotes show neither side proves anything",
                    "Acknowledge experience while redirecting to data",
                ],
            },
            {
                type: "question",
                id: "l16-01-q2",
                question: "How can you use anecdotes legitimately in debate?",
                options: [
                    { id: "a", text: "As your primary evidence for general claims" },
                    { id: "b", text: "To illustrate patterns already established by systematic evidence" },
                    { id: "c", text: "To refute statistical evidence" },
                    { id: "d", text: "Anecdotes should never be used" }
                ],
                correctAnswer: "b",
                explanation: "Anecdotes work well to illustrate patterns already established by other evidence. They make abstract data concrete and memorable. But they should supplement systematic evidence, not replace it in proving general claims.",
            },
            {
                type: "content",
                title: "Conclusion: Stories vs. Statistics",
                content: "Anecdotes are powerful rhetorically but logically limited. Use them to illustrate, not prove, and challenge them when they're used to establish general claims.\n\n**Key Takeaways:**\n• Anecdotes can't establish general patterns or causation\n• Selection and confirmation bias make anecdotes unreliable\n• Legitimate use: illustrating patterns established by other evidence\n• Challenge by requesting systematic evidence\n• Counter-anecdotes show the need for data\n• Acknowledge personal experience while redirecting to appropriate standards\n\n**Looking Ahead:**\nIn the next lesson, we'll explore Refutation by Outweighing.\n\n**Practice Challenge:**\nFind an argument based on anecdotal evidence. What systematic evidence would be needed to actually establish the claim? Does such evidence exist?",
                keyPoints: [
                    "Anecdotes illustrate but don't prove",
                    "Challenge with requests for systematic evidence",
                    "Personal experience is valid but not generalizable",
                ],
            },
        ],
    },
    {
        lessonId: "l16-02",
        pages: [
            {
                type: "content",
                title: "Introduction: Refutation by Outweighing",
                content: "Refutation by outweighing concedes an opponent's argument but demonstrates that your benefits are larger than their harms (or vice versa). It's a form of strategic concession—giving up a battle to win the war.\n\nThis technique is especially powerful when opponent arguments are solid but not determinative. Sometimes the winning move is accepting their point and showing why yours still wins on balance.\n\nIn this lesson, you'll learn to outweigh effectively and recognize when outweighing is the right strategic choice.",
            },
            {
                type: "content",
                title: "How Outweighing Works",
                content: "Concede and compare:\n\n**Structure:**\n'Even granting [their argument], [our advantages] are more significant because [weighing criteria].'\n\n**Weighing Criteria:**\n• **Magnitude:** How large is the impact? Number of people affected, severity of effect.\n• **Probability:** How likely is the outcome? Certain effects matter more than speculative ones.\n• **Timeframe:** When does it occur? Immediate harms may be weighted differently than long-term effects.\n• **Reversibility:** Can it be undone? Irreversible harms typically outweigh reversible ones.\n• **Breadth:** How many areas does it affect?\n\n**Example:**\n'We accept their policy has some economic cost. But preventing 10,000 deaths annually is more significant than a 2% GDP decrease. Life is what the economy serves—we should prioritize it.'",
                keyPoints: [
                    "Concede the argument, then show yours is larger",
                    "Weighing criteria: magnitude, probability, timeframe, reversibility",
                    "Explicit comparison is essential",
                ],
            },
            {
                type: "question",
                id: "l16-02-q1",
                question: "Which weighing criterion addresses how likely an outcome is to occur?",
                options: [
                    { id: "a", text: "Magnitude" },
                    { id: "b", text: "Probability" },
                    { id: "c", text: "Timeframe" },
                    { id: "d", text: "Reversibility" }
                ],
                correctAnswer: "b",
                explanation: "Probability addresses likelihood. More certain outcomes generally outweigh speculative ones. If your benefit is certain but their harm is unlikely, probability weighing favors your position even if the potential harm is severe.",
            },
            {
                type: "content",
                title: "Executing Effective Outweighing",
                content: "Make your weighing persuasive:\n\n**Be Explicit:**\nState what you're conceding and why you still win. Implicit weighing often gets missed.\n\n**Use Multiple Criteria:**\n'Our impact is larger in magnitude, more probable, and occurs sooner. On every metric, we win.'\n\n**Contextualize:**\n'Yes, there's a cost. Let me put that cost in perspective...'\n\n**Evidence Support:**\nBring quantification where possible. 'Their harm affects thousands; ours affects millions.'\n\n**Framework:**\nConnect to your criterion or framework. 'Under a utilitarian analysis, the greater good is served by our approach.'\n\n**Maintain Offense:**\nOutweighing should sound offensive, not defensive. You're winning on net, not just surviving.",
                keyPoints: [
                    "State explicitly what you concede and why you still win",
                    "Use multiple weighing criteria when possible",
                    "Quantification and evidence strengthen weighing",
                ],
            },
            {
                type: "content",
                title: "When to Use Outweighing",
                content: "Strategic decisions about outweighing:\n\n**Use When:**\n• Opponent's argument has solid evidence that's hard to defeat\n• Your advantages genuinely are larger\n• Time is short and direct refutation would take too long\n• Conceding builds credibility for your other arguments\n\n**Don't Use When:**\n• Their argument is actually determinative/round-winning\n• Their impact genuinely is larger than yours\n• Direct refutation is available and effective\n• Repeated outweighing makes you look like you're losing everywhere\n\n**Combine Strategically:**\nSome arguments you defeat directly; others you outweigh. The mix shows sophistication.",
                keyPoints: [
                    "Use when opponent evidence is solid but not determinative",
                    "Don't outweigh truly devastating arguments",
                    "Mix direct refutation and outweighing strategically",
                ],
            },
            {
                type: "question",
                id: "l16-02-q2",
                question: "What's the risk of relying too heavily on outweighing?",
                options: [
                    { id: "a", text: "Judges don't understand outweighing" },
                    { id: "b", text: "It can make you appear to be losing on every individual argument" },
                    { id: "c", text: "Outweighing is against debate rules" },
                    { id: "d", text: "There's no risk—always outweigh" }
                ],
                correctAnswer: "b",
                explanation: "If you outweigh too much, you appear to be conceding every argument and hoping quantity saves you. This can look like you're losing everywhere. Mix outweighing with direct refutation for a stronger appearance.",
            },
            {
                type: "content",
                title: "Conclusion: Winning on Net",
                content: "Refutation by outweighing wins the war by conceding battles. When opponent arguments are solid, showing that yours are larger can be more effective than fighting uphill.\n\n**Key Takeaways:**\n• Outweighing concedes arguments while showing yours are more significant\n• Weighing criteria: magnitude, probability, timeframe, reversibility\n• Be explicit about what you concede and why you still win\n• Use when opponent evidence is solid but not determinative\n• Don't outweigh truly devastating arguments\n• Mix outweighing with direct refutation strategically\n\n**Looking Ahead:**\nIn the next lesson, we'll explore the Bandwagon Fallacy.\n\n**Practice Challenge:**\nTake an opponent argument you find hard to refute directly. Construct an outweighing response. What criteria do you use? How would you quantify your advantage?",
                keyPoints: [
                    "Strategic concession can be more effective than fighting uphill",
                    "Explicit weighing criteria are essential",
                    "Balance outweighing with direct refutation",
                ],
            },
        ],
    },
    {
        lessonId: "l16-03",
        pages: [
            {
                type: "content",
                title: "Introduction: The Bandwagon Fallacy",
                content: "The bandwagon fallacy (appeal to popularity) argues that something is true or good because many people believe it or do it. But popularity doesn't determine truth or merit.\n\nThis fallacy exploits our social instincts—we're inclined to follow the crowd. In debate, it appears when someone cites popular opinion as evidence rather than engaging with the actual merits.\n\nIn this lesson, you'll learn to identify bandwagon arguments and understand when popularity is and isn't relevant.",
            },
            {
                type: "content",
                title: "Understanding the Fallacy",
                content: "Popularity ≠ Truth:\n\n**Structure:**\n'Many people believe X, so X must be true (or good).'\n\n**Examples:**\n'Millions of people use this product—it must be effective.'\n'Most voters support this policy, so it's the right thing to do.'\n'Everyone believes in [X], so there must be something to it.'\n\n**Why It Fails:**\n• Popular beliefs have historically been wrong (Earth is flat, slavery is acceptable)\n• Popularity can result from marketing, tradition, or groupthink\n• Truth is determined by evidence and logic, not voting\n• Majority can be wrong when minority has better evidence\n\n**What It Ignores:**\nThe actual evidence and arguments for/against the claim. Popularity is a shortcut that bypasses substantive analysis.",
                keyPoints: [
                    "Popularity doesn't determine truth or merit",
                    "Popular beliefs have historically been wrong",
                    "The fallacy bypasses substantive analysis",
                ],
            },
            {
                type: "question",
                id: "l16-03-q1",
                question: "'This diet must work—it has millions of followers!' Why is this reasoning fallacious?",
                options: [
                    { id: "a", text: "It's not fallacious—popularity proves effectiveness" },
                    { id: "b", text: "Popularity could result from marketing, not effectiveness; you need actual evidence of outcomes" },
                    { id: "c", text: "Diets never work" },
                    { id: "d", text: "Millions of people can't be wrong" }
                ],
                correctAnswer: "b",
                explanation: "Popularity could result from marketing, celebrity endorsement, or wishful thinking rather than actual effectiveness. The diet's popularity doesn't prove it works—you need evidence of actual health outcomes to establish that.",
            },
            {
                type: "content",
                title: "When Popularity Is Relevant",
                content: "Popularity isn't always irrelevant:\n\n**Legitimate Relevance:**\n• Claims about what is popular ('Most Americans prefer X'—popularity is the claim itself)\n• Social coordination ('We should use metric because most countries do'—standardization value)\n• Expert consensus ('Most scientists agree...'—expertise adds weight, though consensus can be wrong)\n• Democratic legitimacy ('Voters approved this'—in contexts where majority rule is the standard)\n\n**Still Fallacious:**\n• When popularity is cited to prove truth claims\n• When expert consensus is asserted without understanding the evidence behind it\n• When 'most people' is actually a minority mistaken for majority\n\n**The Key Question:**\nIs popularity relevant to the specific claim being made, or is it being used as a substitute for evidence about truth or merit?",
                keyPoints: [
                    "Popularity is relevant when the claim is about popularity itself",
                    "Expert consensus carries more weight than general popularity",
                    "Distinguish when popularity is genuinely relevant vs. a substitute for evidence",
                ],
            },
            {
                type: "content",
                title: "Responding to Bandwagon Arguments",
                content: "Challenge popularity-based reasoning:\n\n**Call Out the Structure:**\n'Popularity doesn't determine truth. History is full of popular beliefs that were wrong.'\n\n**Request Substantive Evidence:**\n'Why does this position have merit independent of its popularity?'\n\n**Historical Counterexamples:**\n'Majorities once believed [wrong thing]. Popularity proved nothing then and doesn't now.'\n\n**Explain Popularity:**\n'The popularity can be explained by [marketing/tradition/groupthink], not by the idea being correct.'\n\n**Flip It:**\n'By this logic, if most people believed the opposite, would you change your position? Then popularity isn't what really matters.'\n\n**When It's Expert Consensus:**\nDon't dismiss expert consensus as bandwagon—but do ask for the evidence behind the consensus.",
                keyPoints: [
                    "Request evidence independent of popularity",
                    "Use historical counterexamples of popular wrong beliefs",
                    "Distinguish expert consensus from general popularity",
                ],
            },
            {
                type: "question",
                id: "l16-03-q2",
                question: "How does expert consensus differ from the bandwagon fallacy?",
                options: [
                    { id: "a", text: "They're the same—expert consensus is fallacious" },
                    { id: "b", text: "Experts have relevant knowledge, but consensus should still be supported by understanding the underlying evidence" },
                    { id: "c", text: "Experts are always right" },
                    { id: "d", text: "Expert consensus proves absolute truth" }
                ],
                correctAnswer: "b",
                explanation: "Expert consensus differs because experts have relevant knowledge—their agreement means something. But it's strongest when you can explain the evidence behind the consensus. Citing consensus without understanding the evidence is weaker than citing the evidence itself.",
            },
            {
                type: "content",
                title: "Conclusion: Beyond Popularity",
                content: "The bandwagon fallacy substitutes popularity for substantive evidence. True evaluation requires examining merits, not counting believers.\n\n**Key Takeaways:**\n• Popularity doesn't determine truth or merit\n• Popular beliefs have historically been wrong\n• Popularity is relevant when the claim is about popularity itself\n• Expert consensus is different from general popularity but should be understood\n• Respond by requesting evidence independent of popularity\n• Use historical counterexamples of popular wrong beliefs\n\n**Looking Ahead:**\nIn the next lesson, we'll explore Conceding Points Strategically.\n\n**Practice Challenge:**\nFind an argument that relies on popularity. What actual evidence would be needed to support the claim? Is that evidence available?",
                keyPoints: [
                    "Truth requires evidence, not popularity",
                    "Expert consensus differs but isn't infallible",
                    "Demand substantive evidence independent of how many believe",
                ],
            },
        ],
    },
    {
        lessonId: "l16-04",
        pages: [
            {
                type: "content",
                title: "Introduction: Conceding Points Strategically",
                content: "Strategic concession is a powerful debate tool. By giving up less important points, you can focus on what matters, build credibility, and sometimes defuse opponent attacks entirely.\n\nConceding isn't losing—it's choosing your battles. The best debaters don't fight every point; they identify what's determinative and focus their resources there.\n\nIn this lesson, you'll learn when to concede, how to concede effectively, and how to avoid conceding what matters.",
            },
            {
                type: "content",
                title: "Why Concede?",
                content: "Strategic benefits of giving ground:\n\n**Time Management:**\nEvery minute spent on minor arguments is time not spent on winning arguments.\n\n**Credibility:**\n'I acknowledge their point on X. But the central issue is Y, where we clearly prevail.'\n\n**Simplification:**\nNarrowing the debate helps judges focus on your strongest ground.\n\n**Defusing:**\nSome arguments lose power when conceded. If you accept the point and show it doesn't matter, opponents can't generate offense from it.\n\n**Surprise:**\nUnexpected concession can disarm opponents who prepared to fight.\n\n**Focus:**\nYou can only win so many arguments. Concede the least important to concentrate on what matters.",
                keyPoints: [
                    "Conceding saves time for winning arguments",
                    "Acknowledgment builds credibility",
                    "Narrowing the debate helps judges focus",
                ],
            },
            {
                type: "question",
                id: "l16-04-q1",
                question: "How can conceding a point actually strengthen your position?",
                options: [
                    { id: "a", text: "It can't—conceding always weakens your position" },
                    { id: "b", text: "It builds credibility, saves time for important arguments, and focuses judges on your strongest ground" },
                    { id: "c", text: "Judges award points for concession" },
                    { id: "d", text: "It confuses opponents" }
                ],
                correctAnswer: "b",
                explanation: "Strategic concession builds credibility (you seem fair and honest), saves time (focus on what matters), and simplifies the debate (judges focus on your strongest ground). Conceding everything is bad, but conceding wisely is powerful.",
            },
            {
                type: "content",
                title: "What to Concede",
                content: "Choose concession targets wisely:\n\n**Safe to Concede:**\n• Points that don't affect the core issue\n• Arguments where your response is weak\n• Technical points that distract from the substance\n• Issues you can outweigh or minimize\n\n**Never Concede:**\n• Your core thesis or criterion\n• Arguments that are truly round-determinative\n• Points that collapse your other arguments\n• Issues central to your burden of proof\n\n**The Test:**\n'If I concede this, can I still win? Does my case still stand?' If yes, concession may be strategic. If no, fight the point.\n\n**Partial Concession:**\nYou can concede part of an argument while contesting part. 'Their evidence is accurate, but their interpretation is wrong.'",
                keyPoints: [
                    "Concede minor points that don't affect your core thesis",
                    "Never concede determinative arguments or your burden",
                    "Test: can I still win if I concede this?",
                ],
            },
            {
                type: "content",
                title: "How to Concede Effectively",
                content: "Concede with purpose:\n\n**Be Explicit:**\n'We concede point X. We do so because the central issue is Y, where our position clearly prevails.'\n\n**Don't Apologize:**\nConcession should sound confident, not defeated.\n\n**Immediate Redirect:**\nConcede and immediately pivot to your winning ground. Don't linger.\n\n**Frame the Concession:**\n'This is a minor point' or 'This doesn't change the fundamental calculus.'\n\n**Track What You've Conceded:**\nDon't accidentally contradict yourself later. Once conceded, stay consistent.\n\n**Use for Weighing:**\n'Even granting their argument, we still win because...'\n\n**Don't Over-Concede:**\nConceding too much signals you're losing. Be selective.",
                keyPoints: [
                    "Concede explicitly and confidently, then redirect",
                    "Frame concessions as minor and immediately pivot",
                    "Track concessions to avoid contradiction",
                ],
            },
            {
                type: "question",
                id: "l16-04-q2",
                question: "After conceding a point, what should you do immediately?",
                options: [
                    { id: "a", text: "Dwell on what you've given up" },
                    { id: "b", text: "Pivot to your winning ground and explain why you still win" },
                    { id: "c", text: "Concede more points" },
                    { id: "d", text: "Wait for opponent's next argument" }
                ],
                correctAnswer: "b",
                explanation: "Immediately redirect to your winning arguments. Concession should be a brief acknowledgment followed by pivot: 'We grant X. But the determinative issue is Y, where we clearly prevail.' Don't let concession be the end of the exchange.",
            },
            {
                type: "content",
                title: "Conclusion: Choosing Your Battles",
                content: "Strategic concession is a mark of sophisticated debaters. By giving up minor points, you can focus on what wins the round and build credibility in the process.\n\n**Key Takeaways:**\n• Conceding saves time, builds credibility, and focuses the debate\n• Concede minor points; never concede determinative arguments\n• Test: can you still win after conceding?\n• Concede explicitly and confidently, then immediately pivot\n• Frame concessions as minor and redirect to winning ground\n• Track concessions to avoid later contradiction\n\n**Looking Ahead:**\nIn the next lesson, we'll explore the Sunk Cost Fallacy.\n\n**Practice Challenge:**\nIn your next practice debate, identify one argument you would typically fight that you could strategically concede. How would you execute that concession?",
                keyPoints: [
                    "Strategic concession is a strength, not weakness",
                    "Choose battles wisely based on what determines the round",
                    "Concede explicitly, pivot immediately, maintain confidence",
                ],
            },
        ],
    },
    {
        lessonId: "l16-05",
        pages: [
            {
                type: "content",
                title: "Introduction: The Sunk Cost Fallacy",
                content: "The sunk cost fallacy is continuing a failing course of action because you've already invested in it. Past investments—time, money, effort—shouldn't determine future decisions, but we often act as if they should.\n\nIn debate, this fallacy appears when defending failed approaches because of past commitment, or when opponents justify continuing bad policies due to previous investment.\n\nIn this lesson, you'll learn to identify sunk cost reasoning and make decisions based on future outcomes, not past investments.",
            },
            {
                type: "content",
                title: "Understanding the Fallacy",
                content: "Past costs shouldn't determine future choices:\n\n**Structure:**\n'We've already invested X, so we must continue, even though continuing isn't beneficial.'\n\n**Examples:**\n'We've spent billions on this project—we can't stop now.'\n'I've watched two hours of this movie; I should finish it even though it's terrible.'\n'We've been in this war for years; if we leave, those sacrifices were wasted.'\n\n**Why It Fails:**\nPast costs are gone regardless of future decisions. The only question is: 'What action produces the best outcome from here?'\n\n**The Correct Question:**\nNot 'What have we invested?' but 'Given where we are now, which path forward is best?'\n\n**Emotional Appeal:**\nSunk cost reasoning is emotionally compelling—we want past investments to mean something. But that's a psychological trap, not logical reasoning.",
                keyPoints: [
                    "Past investments shouldn't determine future decisions",
                    "What's spent is spent—focus on what action is best from now",
                    "Sunk cost reasoning is emotionally compelling but logically flawed",
                ],
            },
            {
                type: "question",
                id: "l16-05-q1",
                question: "'We've spent $5 billion on this project. We can't abandon it now.' Why is this sunk cost reasoning?",
                options: [
                    { id: "a", text: "It's not—$5 billion is a lot of money" },
                    { id: "b", text: "The $5 billion is gone regardless of future decisions; the question should be whether continuing produces good outcomes, not whether we've invested" },
                    { id: "c", text: "All spending decisions involve sunk costs" },
                    { id: "d", text: "Large investments always justify continuation" }
                ],
                correctAnswer: "b",
                explanation: "The $5 billion is gone no matter what. The only relevant question is whether continuing produces better outcomes than stopping. Past investment justifies nothing about future decisions—those should be based on future outcomes alone.",
            },
            {
                type: "content",
                title: "Responding to Sunk Cost Arguments",
                content: "Challenge the logic directly:\n\n**Reframe the Question:**\n'The question isn't what we've invested—it's what produces the best outcome from here. Past costs are irrelevant.'\n\n**Separate Past and Future:**\n'Those costs are gone whether we continue or not. Only future costs and benefits should inform our decision.'\n\n**Highlight Opportunity Cost:**\n'Money spent continuing could be spent more productively elsewhere. Sunk costs shouldn't trap us in bad choices.'\n\n**Analogize:**\n'Would you continue eating a terrible meal just because you paid for it? At some point, you should stop regardless of past investment.'\n\n**Show the Logic:**\n'By this reasoning, any bad decision should be continued forever once we've committed to it. That can't be right.'",
                keyPoints: [
                    "Reframe to future costs and benefits, not past investments",
                    "Past costs are gone regardless of future decisions",
                    "Highlight opportunity cost of continuing bad investments",
                ],
            },
            {
                type: "content",
                title: "Applying Sunk Cost Thinking",
                content: "Use this understanding strategically:\n\n**Against Policy Defenses:**\nWhen opponents defend maintaining a policy because of past investment, show this is sunk cost reasoning.\n\n**In Debate Strategy:**\nDon't continue arguments that aren't working just because you've invested prep time. Pivot to what wins.\n\n**Concession Decisions:**\nDon't keep fighting an argument you're losing just because you've spent time on it. Concede and move on.\n\n**Fair Application:**\nThis applies to your own positions too. If evidence shows your position is wrong, past commitment isn't a reason to continue.\n\n**When Past Investment Matters:**\nNote: past investment creates relevant information (we've learned things), infrastructure (we have capabilities), and commitments (promises made). These may be relevant—but the past investment itself is not.",
                keyPoints: [
                    "Challenge policy defenses based on past investment",
                    "Apply to your own strategy: pivot from failing approaches",
                    "Past investment may create relevant capabilities, but the cost itself is irrelevant",
                ],
            },
            {
                type: "question",
                id: "l16-05-q2",
                question: "When might past investment legitimately affect a decision?",
                options: [
                    { id: "a", text: "Whenever large sums were spent" },
                    { id: "b", text: "When past investment created capabilities, infrastructure, or learning that affects future outcomes—not because the money itself matters" },
                    { id: "c", text: "Past investment never matters" },
                    { id: "d", text: "Only when the investment was in stocks" }
                ],
                correctAnswer: "b",
                explanation: "Past investment may create relevant factors: we've built infrastructure, gained expertise, or made commitments. These affect future decisions. But the money spent itself doesn't—that's gone either way. The question is what the investment created that remains useful.",
            },
            {
                type: "content",
                title: "Conclusion: Looking Forward",
                content: "The sunk cost fallacy traps us in failing paths by making past investment feel relevant. Good decisions look forward, not backward.\n\n**Key Takeaways:**\n• Past investments shouldn't determine future decisions\n• What's spent is spent—focus on what's best from now\n• Reframe sunk cost arguments to future costs and benefits\n• Highlight opportunity cost of continuing bad investments\n• Apply to debate strategy: pivot from failing approaches\n• Past investment may create relevant capabilities, but not through the cost itself\n\n**Looking Ahead:**\nIn the next lesson, we'll explore Refutation by Source Criticism.\n\n**Practice Challenge:**\nIdentify a decision in your life where sunk cost thinking might be affecting you. What would you decide if you ignored past investment entirely?",
                keyPoints: [
                    "Decisions should be based on future outcomes, not past investments",
                    "Challenge sunk cost reasoning by reframing the question",
                    "Apply this principle to your own strategic decisions",
                ],
            },
        ],
    },
    {
        lessonId: "l16-06",
        pages: [
            {
                type: "content",
                title: "Introduction: Refutation by Source Criticism",
                content: "Source criticism challenges the credibility, methodology, or reliability of opponent evidence rather than (or in addition to) attacking the argument's logic. Done properly, it undermines the foundation on which their arguments rest.\n\nThis technique is powerful when opponent evidence has genuine problems—bias, outdated data, poor methodology, or questionable expertise. But it must be done carefully to avoid the genetic fallacy.\n\nIn this lesson, you'll learn to criticize sources effectively and ethically, attacking credibility without committing logical errors yourself.",
            },
            {
                type: "content",
                title: "Forms of Source Criticism",
                content: "Multiple ways to challenge source credibility:\n\n**Expertise Criticism:**\n'Their source isn't qualified to speak on this topic. An economist commenting on medicine lacks relevant expertise.'\n\n**Bias Criticism:**\n'This think tank is funded by industry groups with clear interests. Their analysis may be skewed.'\n\n**Methodology Criticism:**\n'This study used a sample of 50 people. That's insufficient for generalizable conclusions.'\n\n**Currency Criticism:**\n'This data is from 2010. The situation has changed dramatically since then.'\n\n**Publication Criticism:**\n'This wasn't peer-reviewed. It's a blog post, not scientific research.'\n\n**Track Record Criticism:**\n'This source has previously made inaccurate claims, suggesting their reliability is questionable.'\n\n**Context Criticism:**\n'This quote is taken out of context. The author actually argued the opposite.'",
                keyPoints: [
                    "Expertise, bias, methodology, currency, publication, track record",
                    "Each targets different aspects of credibility",
                    "Choose criticism type based on actual source problems",
                ],
            },
            {
                type: "question",
                id: "l16-06-q1",
                question: "Which criticism is most appropriate when opponent evidence comes from a decades-old study?",
                options: [
                    { id: "a", text: "Expertise criticism" },
                    { id: "b", text: "Bias criticism" },
                    { id: "c", text: "Currency criticism—the data may be outdated" },
                    { id: "d", text: "Publication criticism" }
                ],
                correctAnswer: "c",
                explanation: "Currency criticism challenges outdated evidence. Conditions, data, and understanding change over time. What was true decades ago may not be true now, making currency criticism the most appropriate challenge.",
            },
            {
                type: "content",
                title: "Effective Source Criticism",
                content: "Make your criticism convincing:\n\n**Be Specific:**\n'This source is biased' is weak. 'This source is funded by Group X, which has publicly stated Goal Y, creating incentive to reach conclusion Z' is strong.\n\n**Explain the Impact:**\nShow how the source problem affects the specific evidence being used, not just that a problem exists.\n\n**Avoid Genetic Fallacy:**\nSource problems warrant scrutiny, not automatic dismissal. Show how the problem affects this specific claim.\n\n**Comparative:**\n'Unlike our peer-reviewed evidence, their source is a press release from an interested party.'\n\n**Proportional Response:**\nMinor source issues deserve minor mention. Major issues deserve major attack. Match your criticism to the problem.\n\n**Combined Attacks:**\nSource criticism works well combined with substantive refutation. 'Their source is questionable AND here's why the argument fails on its merits...'",
                keyPoints: [
                    "Be specific about the source problem and its impact",
                    "Explain how the problem affects this specific evidence",
                    "Combine with substantive refutation for maximum effect",
                ],
            },
            {
                type: "content",
                title: "Avoiding Weak Source Attacks",
                content: "Common mistakes to avoid:\n\n**Genetic Fallacy:**\nDon't assume source problems automatically invalidate conclusions. Show how the problem affects specific evidence.\n\n**Ad Hominem:**\nDon't attack the person rather than their credibility on the specific topic.\n\n**Guilt by Association:**\n'They once agreed with [bad group]' doesn't make them wrong now.\n\n**Overreach:**\nDon't claim a source is entirely worthless because of one problem. Be proportional.\n\n**Unsupported Claims:**\n'This source is biased' requires some evidence of bias. Don't just assert it.\n\n**Ignoring Content:**\nIf the evidence is actually compelling, source criticism alone may not save you. Address substance too.",
                keyPoints: [
                    "Avoid genetic fallacy—show how problems affect specific claims",
                    "Don't overreach or make unsupported bias claims",
                    "Combine with substantive response when possible",
                ],
            },
            {
                type: "question",
                id: "l16-06-q2",
                question: "How does effective source criticism differ from the genetic fallacy?",
                options: [
                    { id: "a", text: "There's no difference—both attack sources" },
                    { id: "b", text: "Effective source criticism shows how specific source problems affect specific evidence; genetic fallacy dismisses based on origin alone" },
                    { id: "c", text: "Genetic fallacy only applies to genetics" },
                    { id: "d", text: "Source criticism is always fallacious" }
                ],
                correctAnswer: "b",
                explanation: "Effective source criticism explains the mechanism: how the source problem (bias, methodology, etc.) affects the specific evidence being cited. Genetic fallacy simply dismisses based on origin without explaining the impact. The connection must be made explicit.",
            },
            {
                type: "content",
                title: "Conclusion: Credibility Matters",
                content: "Source criticism is a valuable tool when done properly. By targeting genuine problems and explaining their impact, you can undermine opponent evidence without committing fallacies.\n\n**Key Takeaways:**\n• Forms: expertise, bias, methodology, currency, publication, track record\n• Be specific about problems and explain how they affect this evidence\n• Avoid genetic fallacy—show mechanism, don't just cite origin\n• Don't overreach or make unsupported bias claims\n• Combine with substantive refutation when possible\n• Match criticism intensity to problem severity\n\n**Looking Ahead:**\nIn the next lesson, we'll review Unit 16 concepts.\n\n**Practice Challenge:**\nFind evidence used in a debate or article. Evaluate it for source problems. Which form of source criticism would be most effective? How would you make that criticism without committing genetic fallacy?",
                keyPoints: [
                    "Source criticism is legitimate when done properly",
                    "Show how problems affect specific evidence",
                    "Combine with substantive refutation for strongest attack",
                ],
            },
        ],
    },
    {
        lessonId: "l16-07",
        pages: [
            {
                type: "content",
                title: "Introduction: Unit 16 Review",
                content: "Congratulations on completing Unit 16! This unit explored advanced techniques including fallacy identification and sophisticated refutation strategies.\n\nIn this review, we'll consolidate the anecdotal fallacy, outweighing, bandwagon fallacy, strategic concession, sunk cost fallacy, and source criticism. These tools add nuance to your debate approach.",
            },
            {
                type: "content",
                title: "Review: Fallacies",
                content: "**Anecdotal Fallacy:**\n• Personal stories can't establish general patterns\n• Use anecdotes to illustrate, not prove\n• Challenge by requesting systematic evidence\n\n**Bandwagon Fallacy:**\n• Popularity doesn't determine truth or merit\n• Expert consensus differs from general popularity\n• Demand evidence independent of how many believe\n\n**Sunk Cost Fallacy:**\n• Past investments shouldn't determine future decisions\n• Focus on what produces best outcome from now\n• Challenge by reframing to future costs and benefits",
                keyPoints: [
                    "Anecdotes illustrate but don't prove",
                    "Popularity isn't evidence of truth",
                    "Past investment doesn't justify continuing",
                ],
            },
            {
                type: "content",
                title: "Review: Refutation Strategies",
                content: "**Refutation by Outweighing:**\n• Concede the argument, show yours is larger\n• Weighing criteria: magnitude, probability, timeframe, reversibility\n• Best when opponent evidence is solid but not determinative\n\n**Strategic Concession:**\n• Give up minor points to focus on what wins\n• Builds credibility and saves time\n• Test: can you still win after conceding?\n\n**Source Criticism:**\n• Challenge expertise, bias, methodology, currency, publication, track record\n• Be specific; explain how problems affect evidence\n• Avoid genetic fallacy—show mechanism, not just origin",
                keyPoints: [
                    "Outweighing wins on net by conceding and comparing",
                    "Strategic concession focuses debate on winning ground",
                    "Source criticism must explain how problems affect evidence",
                ],
            },
            {
                type: "question",
                id: "l16-07-q1",
                question: "Someone argues a policy should continue because we've invested heavily in it. Which fallacy is this?",
                options: [
                    { id: "a", text: "Bandwagon fallacy" },
                    { id: "b", text: "Anecdotal fallacy" },
                    { id: "c", text: "Sunk cost fallacy" },
                    { id: "d", text: "Appeal to authority" }
                ],
                correctAnswer: "c",
                explanation: "The sunk cost fallacy uses past investment to justify continuing, regardless of whether continuing produces good outcomes. The correct approach considers only future costs and benefits—past investment is gone either way.",
            },
            {
                type: "question",
                id: "l16-07-q2",
                question: "When is strategic concession most appropriate?",
                options: [
                    { id: "a", text: "When the argument is round-determinative" },
                    { id: "b", text: "When the point is minor and your response is weak, allowing you to focus on winning arguments" },
                    { id: "c", text: "At the beginning of every speech" },
                    { id: "d", text: "Never—always fight every point" }
                ],
                correctAnswer: "b",
                explanation: "Strategic concession works best for minor points where your response is weak. By conceding, you save time, build credibility, and focus on arguments you can win. Never concede determinative arguments.",
            },
            {
                type: "content",
                title: "Conclusion: Advanced Toolkit",
                content: "You've completed Unit 16, adding sophisticated fallacy identification and refutation techniques to your debate toolkit.\n\n**Key Takeaways:**\n• Anecdotes illustrate but don't prove general claims\n• Popularity and past investment don't justify positions\n• Outweighing concedes and compares; strategic concession focuses debate\n• Source criticism must be specific and explain mechanism\n• Match techniques to specific situations\n• Combine multiple approaches for strongest effect\n\n**Looking Ahead:**\nUnit 17 will explore Organization—structuring multiple arguments effectively.\n\n**Practice Challenge:**\nFor each technique in this unit, identify a situation where it would be the optimal choice. What makes it right for that situation?",
                keyPoints: [
                    "New tools for different strategic situations",
                    "Fallacy recognition prevents and challenges bad reasoning",
                    "Sophisticated refutation goes beyond simple denial",
                ],
            },
        ],
    },
];
