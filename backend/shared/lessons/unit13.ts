import { MultiPageLesson } from "./types";

export const UNIT_13_LESSONS: MultiPageLesson[] = [
    {
        lessonId: "l13-01",
        pages: [
            {
                type: "content",
                title: "Introduction: What is Refutation?",
                content: "Refutation is the art of defeating opposing arguments. It's not enough to present your own case—you must show why the other side is wrong. Strong debaters are as skilled at attacking as defending.\n\nRefutation requires both analytical skill (understanding what makes arguments fail) and strategic judgment (knowing which arguments to prioritize). You can't respond to everything equally—you must allocate time to the most important attacks.\n\nIn this unit, you'll learn different types of refutation, when to use each, and how to execute attacks effectively.",
            },
            {
                type: "content",
                title: "Types of Refutation",
                content: "Refutation takes several forms:\n\n**Denial:**\nAssert that the claim is factually false. Requires evidence.\n'This claim isn't true. Here's evidence showing the opposite.'\n\n**Mitigation:**\nAccept the claim but argue it's less significant than portrayed.\n'Even if true, this effect is smaller than my opponent suggests.'\n\n**Turn:**\nConcede the link but argue it actually supports your side.\n'This is true, but it's actually a reason to vote for us, not them.'\n\n**Take-Out:**\nAttack the logic or evidence underlying the argument.\n'Their evidence doesn't support their conclusion because...'\n\n**Outweigh:**\nAccept the argument but show yours matters more.\n'Even granting this, my impacts are more severe.'\n\n**Strategic Choice:**\nDifferent types work in different situations. The strongest refutation matches the argument's actual weakness.",
                keyPoints: [
                    "Denial disputes facts; mitigation minimizes significance",
                    "Turns make their arguments support your side",
                    "Take-outs attack the logic/evidence connection",
                ],
            },
            {
                type: "content",
                title: "Refutation Drill: The 4-Step Method",
                content: "Practice the structure: They Say -> But -> Because -> Therefore.\n\n**Argument:** 'Banning cars reduces pollution.'\n\n**Refutation:**\n1. **They Say:** 'Banning cars reduces pollution.'\n2. **But:** 'This ignores the pollution from manufacturing electric alternatives and battery disposal.'\n3. **Because:** 'Studies show mining lithium creates massive local toxicity.'\n4. **Therefore:** 'The environmental benefit is negated by displacement.'\n\n**Drill:**\nTake an argument you disagree with. Force yourself to write it out in exactly these four steps. It clears up muddy thinking instantly.",
                keyPoints: [
                    "Rigid structure forces clarity",
                    "Ensure the 'Because' step has actual warrants",
                    "Link back to the round impact in 'Therefore'",
                ],
            },
            {
                type: "content",
                title: "Handling the 'Spread'",
                content: "What if they make 20 arguments in 4 minutes?\n\n**Grouping:**\nDon't answer 20 arguments. Group them.\n'They make 5 arguments about cost. My response to all of them is...'\n\n**Cross-Apply:**\n'This evidence about efficiency answers their points 1, 3, and 7.'\n\n**Prioritize:**\nIdentify the 3 arguments that actually matter. Win those. Concede the 17 that don't imply a ballot for them.\n\n**Don't Panic:**\nSpeed is a tactic to overwhelm you. Clarity and grouping are the antidotes.",
                keyPoints: [
                    "Group similar arguments to answer efficiently",
                    "Cross-apply strong answers to multiple points",
                    "Prioritize the 'winning' arguments; ignore noise",
                ],
            },
            {
                type: "question",
                id: "l13-01-q1",
                question: "You accept that a policy increases costs but argue the benefits still exceed them. What type of refutation is this?",
                options: [
                    { id: "a", text: "Denial" },
                    { id: "b", text: "Outweigh" },
                    { id: "c", text: "Turn" },
                    { id: "d", text: "Take-out" }
                ],
                correctAnswer: "b",
                explanation: "This is outweighing—you accept the opponent's argument (increased costs) but argue that other considerations (benefits) are more important. You're not denying the claim or turning it to your advantage; you're saying it matters less than your side's arguments.",
            },
            {
                type: "content",
                title: "When and Why to Refute",
                content: "Strategic thinking about refutation:\n\n**What to Prioritize:**\n• Arguments your opponent emphasizes\n• Claims that threaten your core case\n• Things the judge seems to weight heavily\n• Arguments with minimal time investment to defeat\n\n**What to Deprioritize:**\n• Minor peripheral points\n• Arguments you've already addressed elsewhere\n• Claims that don't affect the round decision\n\n**You Can't Answer Everything:**\nTime constraints force choices. Judges don't expect you to address every word—they expect you to address what matters.\n\n**The 'So What' Test:**\nIf an opponent's argument were true, would it affect who wins? If not, you may not need extensive refutation.\n\n**Sign-Posting:**\nWhen you choose not to address something, briefly acknowledge why:\n'My opponent made several points about X. I'll focus on the most important: [argument]. The others don't affect the core issue because...'",
                keyPoints: [
                    "Prioritize arguments that threaten your case",
                    "Time constraints require strategic choices",
                    "Use the 'so what' test to assess argument importance",
                ],
            },
            {
                type: "content",
                title: "Grouping Arguments",
                content: "Strategic grouping saves time and highlights logical flaws.\n\n**By Theme:**\n'They make three arguments about economic harm. I will address the Economy Group.'\n\n**By Logical Flaw:**\n'Their first four points all rely on the same outdated study. One evidence take-out defeats this entire block.'\n\n**By Impact:**\n'All their arguments lead to a recession impact. I will simply outweigh the recession impact.'\n\n**Effect:**\nThis makes you look organized and in control, while making their 'spread' look messy and repetitive.",
                keyPoints: [
                    "Group by theme, flaw, or impact",
                    "Defeat entire blocks with single well-placed arguments",
                    "Organization projects dominance and control",
                ],
            },
            {
                type: "question",
                id: "l13-01-q2",
                question: "Why is it important to state 'They Say' before making your refutation?",
                options: [
                    { id: "a", text: "It takes up time" },
                    { id: "b", text: "It's not important" },
                    { id: "c", text: "It helps the judge understand which argument you're addressing and ensures fair engagement" },
                    { id: "d", text: "It intimidates opponents" }
                ],
                correctAnswer: "c",
                explanation: "Stating 'They Say' first helps judges follow your refutation by clearly identifying which argument you're addressing. It also demonstrates fair engagement—you're not caricaturing their position before attacking it. This organization makes your attacks more persuasive and easier to evaluate.",
            },
            {
                type: "content",
                title: "The Structure of Effective Refutation",
                content: "Organize refutations clearly:\n\n**The 4-Step Method:**\n\n1. **'They Say'** - State what your opponent argued.\nClearly and fairly characterize the argument you're attacking.\n\n2. **'But'** - Make your attack.\nThis is your actual refutation: denial, take-out, turn, etc.\n\n3. **'Because'** - Explain why your attack works.\nProvide reasoning or evidence that supports your attack.\n\n4. **'Therefore'** - Draw the implication.\nExplain what this means for the debate—why it matters.\n\n**Example:**\n'They say the policy increases jobs. But this ignores automation effects. Because even with new industries, automation eliminates positions faster than they're created. Therefore, their primary benefit doesn't materialize.'\n\n**Why This Works:**\n• Judges can follow your logic\n• You're clearly engaging, not just asserting\n• You explain the significance, not just the attack",
                keyPoints: [
                    "They Say → But → Because → Therefore",
                    "Clear structure helps judges follow your logic",
                    "Always explain significance, not just the attack",
                ],
            },
            {
                type: "question",
                id: "l13-01-q2",
                question: "Why is it important to state 'They Say' before making your refutation?",
                options: [
                    { id: "a", text: "It takes up time" },
                    { id: "b", text: "It helps the judge understand which argument you're addressing and ensures fair engagement" },
                    { id: "c", text: "It's not important" },
                    { id: "d", text: "It intimidates opponents" }
                ],
                correctAnswer: "b",
                explanation: "Stating 'They Say' first helps judges follow your refutation by clearly identifying which argument you're addressing. It also demonstrates fair engagement—you're not caricaturing their position before attacking it. This organization makes your attacks more persuasive and easier to evaluate.",
            },
            {
                type: "content",
                title: "Conclusion: The Art of Attack",
                content: "Refutation is essential to debate success. Strong arguments mean nothing if you fail to address opposition. Mastering different types of refutation gives you flexibility.\n\n**Key Takeaways:**\n• Refutation includes denial, mitigation, turns, take-outs, and outweighing\n• Match refutation type to the argument's actual weakness\n• Prioritize arguments that threaten your case; not everything needs response\n• Use the 4-step structure: They Say → But → Because → Therefore\n• Explain significance, not just the attack\n\n**Looking Ahead:**\nIn the next lesson, we'll dive deeper into Turn Arguments—a powerful refutation technique.\n\n**Practice Challenge:**\nTake an argument from a recent debate and practice attacking it using three different refutation types. Which is strongest for that particular argument?",
                keyPoints: [
                    "Different refutation types suit different situations",
                    "Strategic prioritization is essential given time limits",
                    "Structured refutation helps judges follow your attack",
                ],
            },
        ],
    },
    {
        lessonId: "l13-02",
        pages: [
            {
                type: "content",
                title: "Introduction: Turn Arguments",
                content: "Turn arguments are among the most powerful refutation techniques. Instead of denying an opponent's claim, you accept it—then show it actually supports your side.\n\nTurns are psychologically powerful because they use your opponent's own evidence and reasoning against them. They were trying to build a case; now that case helps you.\n\nIn this lesson, you'll learn the two types of turns (link and impact), how to construct them, and when they're strategically appropriate.",
            },
            {
                type: "content",
                title: "Link Turns vs. Impact Turns",
                content: "There are two types of turns:\n\n**Link Turn:**\nAccept their impact (what matters) but argue your side creates the opposite effect.\n\nTheir argument: 'Policy X causes economic harm.'\nLink turn: 'Actually, Policy X causes economic growth. Economic effects matter—and they favor us.'\n\nYou've turned the LINK: X doesn't cause harm, it causes benefit.\n\n**Impact Turn:**\nAccept their link (cause-effect) but argue the impact isn't bad—it's actually good.\n\nTheir argument: 'Policy X increases inflation.'\nImpact turn: 'Yes, Policy X increases inflation. But moderate inflation is actually beneficial for economic dynamism.'\n\nYou've turned the IMPACT: inflation isn't bad, it's good.\n\n**Critical Distinction:**\nYou cannot run both on the same argument chain. If X causes Y and Y is bad, you can't simultaneously say X doesn't cause Y AND Y isn't bad.",
                keyPoints: [
                    "Link turns reverse the cause-effect direction",
                    "Impact turns reverse the evaluation of the effect",
                    "Never run both on the same argument—they're contradictory",
                ],
            },
            {
                type: "content",
                title: "Double Turn Practice",
                content: "Spot the error:\n\n**Argument:** 'Sanctions cause starvation.'\n**Your Response:** '1. Sanctions don't cause starvation (Link Turn). 2. Starvation is actually good (Impact Turn).'\n\n**Analysis:**\nWhoops! You just said sanctions PREVENT a GOOD thing.\nYou argued sanctions prevent starvation, and starvation is good. So sanctions prevent good.\n\n**Fix:**\nPick ONE. Either 'Sanctions feed people' OR 'Starvation builds character' (Okay, don't run that second one, but you get the logic).",
                keyPoints: [
                    "Running both turns creates a logical contradiction",
                    "You end up proving your own policy prevents a benefit",
                    "Commit to the strongest turn path",
                ],
            },
            {
                type: "content",
                title: "Partial Turns vs. Straight Turns",
                content: "Not all turns are total reversals.\n\n**Straight Turn:**\n'You say X hurts Y. Actually X helps Y massively.'\n(Total reversal of the link).\n\n**Partial Turn:**\n'You say X hurts Y. In the short term, maybe. But in the long term, it stabilizes Y.'\n(Nuanced reversal).\n\n**Strategic Value:**\nStraight turns are rare but devastating. Partial turns are more common and credible. Don't force a straight turn if the evidence only supports a nuanced one.",
                keyPoints: [
                    "Straight turns completely reverse the argument",
                    "Partial turns add nuance or timeframe distinctions",
                    "Credibility matters more than absolute reversal",
                ],
            },
            {
                type: "content",
                title: "Turning Philosophical Arguments",
                content: "You can turn values too.\n\n**Argument:** 'Liberty is the highest value.'\n**Response:** 'Agreed. But your plan reduces liberty by allowing unchecked corporate dominance. My regulation actually protects liberty.'\n\n**The Move:**\nDon't fight their value. *Co-opt* their value. Show you achieve their goal better than they do. This is often more persuasive than arguing 'Safety > Liberty.'",
                keyPoints: [
                    "Co-opt the opponent's values",
                    "Argue you achieve *their* goal better than they do",
                    "Avoids messy value debates; wins on their own terms",
                ],
            },
            {
                type: "question",
                id: "l13-02-q1",
                question: "Opponent argues: 'This policy increases government spending, and government spending is wasteful.' You respond: 'Government spending isn't wasteful—it creates valuable public goods.' What type of turn is this?",
                options: [
                    { id: "a", text: "Impact turn" },
                    { id: "b", text: "Link turn" },
                    { id: "c", text: "Take-out" },
                    { id: "d", text: "Denial" }
                ],
                correctAnswer: "a",
                explanation: "This is an impact turn. You accept the link (the policy increases spending) but turn the impact (you argue spending isn't wasteful, it's beneficial). You're not disputing the cause-effect; you're reversing the evaluation of the effect.",
            },
            {
                type: "content",
                title: "Constructing Strong Turns",
                content: "Effective turns require careful construction:\n\n**For Link Turns:**\n• Accept their claim about what matters (their impact)\n• Provide evidence that the effect goes the other direction\n• Explain why your analysis is more reliable than theirs\n\nExample: 'My opponent says trade deals hurt workers. Actually, trade deals create jobs. Both sides agree jobs matter—our evidence shows deals help, not hurt.'\n\n**For Impact Turns:**\n• Accept their causal claim (their link)\n• Provide evidence or reasoning that the effect is actually good\n• This is controversial—you're often challenging received wisdom\n\nExample: 'My opponent says automation eliminates jobs. That's true. But eliminating routine jobs actually improves work quality and frees people for more meaningful work.'\n\n**Making Turns Stick:**\n• You need your own evidence, not just assertion\n• Explain why the turn makes sense conceptually\n• Anticipate their responses and address them",
                keyPoints: [
                    "Link turns require evidence for the opposite effect",
                    "Impact turns challenge whether the effect is actually bad",
                    "Both require evidence and explanation, not just assertion",
                ],
            },
            {
                type: "content",
                title: "Strategic Use of Turns",
                content: "When to use turns:\n\n**Turns Work Well When:**\n• You have strong evidence for the reverse position\n• The issue is genuinely contested among experts\n• Their argument is central to their case (high payoff if you win)\n• You can credibly explain why conventional wisdom is wrong\n\n**Turns Work Poorly When:**\n• Their position is obviously true (you look foolish trying to reverse it)\n• You have no evidence for the turn\n• The argument is peripheral (not worth the risk)\n• You'd need to turn something that contradicts your other positions\n\n**Turn vs. Take-Out:**\nTake-outs are often safer—you're questioning evidence quality rather than claiming the opposite is true. Turns are higher risk, higher reward.\n\n**Beware of Inconsistency:**\nIf you turn one argument but make claims elsewhere that contract the turn, judges notice. Ensure your case is internally consistent.",
                keyPoints: [
                    "Turns work when you have strong counter-evidence",
                    "They're high risk, high reward compared to take-outs",
                    "Ensure turns are consistent with your other positions",
                ],
            },
            {
                type: "question",
                id: "l13-02-q2",
                question: "Why can you NOT run both a link turn and impact turn on the same argument?",
                options: [
                    { id: "a", text: "It takes too much time" },
                    { id: "b", text: "Judges don't like it" },
                    { id: "c", text: "Rules prohibit it" },
                    { id: "d", text: "They're contradictory—one says the effect doesn't happen, the other says it's good" }
                ],
                correctAnswer: "d",
                explanation: "Link and impact turns on the same argument are contradictory. A link turn says 'X doesn't cause Y, it causes the opposite.' An impact turn says 'X does cause Y, but Y is actually good.' You can't simultaneously claim the effect doesn't happen AND claim the effect is good—pick one.",
            },
            {
                type: "content",
                title: "Conclusion: Using Their Weapons",
                content: "Turn arguments transform opponents' cases into support for your position. They're powerful but require careful execution.\n\n**Key Takeaways:**\n• Link turns reverse the cause-effect direction\n• Impact turns reverse the evaluation of the effect\n• Never run both on the same argument chain—contradictory\n• Turns require evidence, not just assertion\n• They're high risk, high reward—use when evidence is strong\n• Ensure consistency with your other positions\n\n**Looking Ahead:**\nIn the next lesson, we'll explore Take-Out Arguments—attacking the evidence and logic underlying claims.\n\n**Practice Challenge:**\nTake a common debate argument and practice constructing both a link turn and an impact turn (for different opponents, not the same argument!).",
                keyPoints: [
                    "Turns use opponent reasoning against them",
                    "Strong turns require strong counter-evidence",
                    "Choose one type per argument chain",
                ],
            },
        ],
    },
    {
        lessonId: "l13-03",
        pages: [
            {
                type: "content",
                title: "Introduction: Take-Out Arguments",
                content: "Take-out arguments attack the logic or evidence underlying an opponent's claim. Instead of accepting their conclusion (even to turn it), you challenge whether their evidence supports their conclusion at all.\n\nTake-outs are often safer than turns because you're not making controversial counter-claims. You're just showing their argument doesn't work as constructed.\n\nIn this lesson, you'll learn common types of take-outs, how to identify vulnerable arguments, and how to execute evidence attacks effectively.",
            },
            {
                type: "content",
                title: "Types of Take-Outs",
                content: "Take-outs challenge the argument's construction:\n\n**Evidence Quality:**\n'Their evidence is outdated / biased / misrepresented / from a non-expert.'\nChallenge the source rather than the claim.\n\n**Logical Gap:**\n'Even if their evidence is true, it doesn't support their conclusion.'\nThe link between evidence and claim is broken.\n\n**Missing Link:**\n'They haven't shown that A causes B, only that A and B occur together.'\nCorrelation isn't causation; the causal mechanism is missing.\n\n**Scope Limitation:**\n'Their evidence applies to X, not to Y as they claim.'\nThe study was in a different context than they're applying it to.\n\n**Counter-Evidence:**\n'Here's evidence that contradicts their claim.'\nNot a turn (you're not saying the opposite is true), just that the picture is more complicated.\n\n**Internal Contradictions:**\n'Their argument contradicts itself or other parts of their case.'\nThey can't have it both ways.",
                keyPoints: [
                    "Evidence quality attacks challenge the source",
                    "Logical gap attacks challenge the inference",
                    "Scope attacks challenge the applicability",
                ],
            },
            {
                type: "content",
                title: "Indicting Methodology",
                content: "Deep take-outs attack the study design:\n\n**Sample Size:** 'They surveyed 10 people.' (Too small)\n**Selection Bias:** 'They only surveyed happy customers.' (Not representative)\n**Duration:** 'The study lasted 2 weeks.' (No long term data)\n**Control:** 'There was no control group.' (Correlation, not causation)\n\n**Why This Wins:**\nYou aren't just saying 'My study is better.' You are proving their study is *invalid*. It destroys their claim at the root.",
                keyPoints: [
                    "Attack sample size, duration, and control groups",
                    "Identify selection bias",
                    "Invalidating methodology is more powerful than counter-evidence",
                ],
            },
            {
                type: "content",
                title: "The Null Hypothesis",
                content: "In science, the default is 'no effect' (Null Hypothesis) until proven otherwise. If you show their evidence is flawed, you don't need counter-evidence. The default returns to 'we don't know.'\n\n**Debate Application:**\n'Since I've shown their evidence is methodologically flawed, they have failed their burden of proof. You don't need to believe me; you just need to disbelieve them.'",
                keyPoints: [
                    "Burden of proof rests on the claimant",
                    "Destroying their evidence resets to the Null Hypothesis",
                    "You win by default if they fail to prove their case",
                ],
            },
            {
                type: "content",
                title: "Timeframe Attacks",
                content: "Facts change. What was true in 2010 might be false in 2024.\n\n**Technological Change:** Data on solar/batteries from 2015 is useless now.\n**Geopolitical Change:** Alliances shift. Pre-war data doesn't apply post-war.\n**Economic Cycles:** Inflation data from 2020 doesn't apply to 2024.\n\n**The Argument:**\n'This evidence isn't wrong; it's historic. It describes a world that no longer exists.'",
                keyPoints: [
                    "Identify dynamic fields (tech, econ, politics) where time matters",
                    "Distinguish between 'wrong' and 'outdated'",
                    "Paint their case as a history lesson, not a policy guide",
                ],
            },
            {
                type: "question",
                id: "l13-03-q1",
                question: "Opponent cites a study from 1985 to support their claim about current technology. 'This evidence is too old to be relevant' is what type of attack?",
                options: [
                    { id: "a", text: "Impact turn" },
                    { id: "b", text: "Evidence quality take-out" },
                    { id: "c", text: "Link turn" },
                    { id: "d", text: "Mitigation" }
                ],
                correctAnswer: "b",
                explanation: "This is an evidence quality take-out. You're not disputing what the 1985 study found or turning it to your advantage. You're challenging whether that old evidence is relevant to current technology—an attack on source quality rather than the substance of the claim.",
            },
            {
                type: "content",
                title: "Identifying Vulnerable Arguments",
                content: "Look for arguments susceptible to take-outs:\n\n**Weak Evidence Indicators:**\n• Vague citations ('Studies show...')\n• Outdated sources in fast-changing fields\n• Single source for broad claims\n• Sources from interested parties\n• Opinion presented as fact\n\n**Logical Vulnerability Indicators:**\n• Conclusions that go beyond what evidence shows\n• Generalizing from limited examples\n• Assuming causation from correlation\n• Ignoring alternative explanations\n• Contradiction with other parts of the case\n\n**Scope Vulnerability Indicators:**\n• Evidence from very different contexts\n• Applying individual findings to populations (or vice versa)\n• Ignoring relevant differences between cases\n\n**During Prep:**\nAnticipate likely opponent arguments and find their vulnerabilities. You can prepare take-outs in advance.\n\n**In Real-Time:**\nListen for weak language ('I think,' 'probably,' 'some evidence suggests') that signals opportunity.",
                keyPoints: [
                    "Vague citations and outdated sources signal weakness",
                    "Watch for conclusions exceeding evidence",
                    "Prepare take-outs against likely opponent arguments",
                ],
            },
            {
                type: "content",
                title: "Executing Evidence Attacks",
                content: "How to challenge opponent evidence effectively:\n\n**Be Specific:**\n'Their Smith evidence is from 2015, before the major market changes we've discussed.'\nNot: 'Their evidence is old.'\n\n**Explain Why It Matters:**\n'Because markets transformed after 2018, this pre-2018 analysis doesn't apply.'\nNot just that the evidence is flawed, but why the flaw invalidates it.\n\n**Provide Alternatives:**\n'More recent analysis from Jones (2022) shows the opposite pattern.'\nDon't just attack—show better evidence exists.\n\n**Cross-Reference:**\nIn cross-examination, get them to confirm details about their evidence that you can then critique in your speech.\n\n**Don't Overreach:**\nIf the evidence is strong on the main point but weak on a detail, focus on the relevant weakness. Judges notice if you nitpick solid evidence.\n\n**Connect to Framework:**\nExplain how this evidence problem affects the overall debate: 'Without this evidence, their entire harm-impact collapses.'",
                keyPoints: [
                    "Be specific about what's wrong with the evidence",
                    "Explain why the flaw matters to the conclusion",
                    "Provide better evidence rather than just attacking",
                ],
            },
            {
                type: "question",
                id: "l13-03-q2",
                question: "What's the advantage of take-outs over turns?",
                options: [
                    { id: "a", text: "They're always stronger" },
                    { id: "b", text: "They require no evidence at all" },
                    { id: "c", text: "They're safer—you're questioning the argument's construction rather than making controversial counter-claims" },
                    { id: "d", text: "Judges prefer them" }
                ],
                correctAnswer: "c",
                explanation: "Take-outs are generally safer because you're pointing out problems with the argument's construction rather than making your own controversial claims. A turn requires you to defend the opposite position; a take-out just requires showing their argument doesn't work as presented.",
            },
            {
                type: "content",
                title: "Conclusion: Breaking Arguments Down",
                content: "Take-out arguments disassemble opponents' arguments by challenging evidence quality, logic, and applicability. They're a core refutation skill.\n\n**Key Takeaways:**\n• Take-outs attack evidence quality, logic, or scope\n• They're safer than turns—no controversial counter-claims required\n• Identify vulnerable arguments by weak citations and logical gaps\n• Be specific about flaws and explain why they matter\n• Provide better evidence rather than just attacking\n• Connect evidence problems to the overall debate outcome\n\n**Looking Ahead:**\nIn the next lesson, we'll explore Weighing Arguments—how to compare competing considerations.\n\n**Practice Challenge:**\nTake an opponent's argument from a past debate. Identify three different take-out angles: evidence quality, logical gap, and scope limitation.",
                keyPoints: [
                    "Take-outs disassemble arguments without counter-claims",
                    "Identify vulnerability through weak evidence and logic",
                    "Always explain why flaws matter to the debate",
                ],
            },
        ],
    },
    {
        lessonId: "l13-04",
        pages: [
            {
                type: "content",
                title: "Introduction: Weighing Arguments",
                content: "Often both sides will have valid arguments—neither side completely defeats the other. When this happens, debates are decided by weighing: which considerations are more important?\n\nWeighing is where many debates are actually won or lost. The team that provides clear, compelling reasons why their impacts matter more often wins, even if the other side's arguments aren't fully refuted.\n\nIn this lesson, you'll learn weighing frameworks, how to apply them effectively, and how to pre-empt opponent weighing.",
            },
            {
                type: "content",
                title: "Weighing Frameworks",
                content: "Common frameworks for comparing arguments:\n\n**Magnitude:**\nHow severe is the impact? Larger effects matter more.\n'Their harm affects some businesses; our harm affects millions of livelihoods.'\n\n**Probability:**\nHow likely is the impact to occur? More certain effects matter more.\n'Their benefit is speculative; our harm is well-documented and inevitable.'\n\n**Timeframe:**\nWhen does the impact occur? More immediate effects often matter more.\n'Their benefits emerge in decades; our costs begin immediately.'\n\n**Reversibility:**\nCan the impact be undone? Irreversible effects matter more.\n'Economic losses can be recovered; extinction cannot.'\n\n**Scope:**\nWho is affected? Broader effects may matter more.\n'Their impact helps the wealthy; our impact helps the most vulnerable.'\n\n**Combining Frameworks:**\nThe strongest weighing uses multiple factors: 'Our impact is larger (magnitude), more certain (probability), and irreversible. Even if their impact is true, it cannot outweigh ours.'",
                keyPoints: [
                    "Magnitude, probability, timeframe, reversibility, scope",
                    "More severe, certain, and irreversible effects matter more",
                    "Combine multiple frameworks for strongest weighing",
                ],
            },
            {
                type: "content",
                title: "Meta-Weighing",
                content: "Weighing the weighing mechanisms themselves.\n\n**Scenario:**\nYou argue Magnitude (millions die). They argue Probability (100% chance of small harm).\n\n**The Meta-Argument:**\n'Probability > Magnitude here. We can't make policy based on 0.001% risks of infinite harm (Pascal's Wager), or we'd never leave the house. We must prioritize certain impacts.'\n\nOR\n\n'Magnitude > Probability. Even a 1% chance of extinction outweighs everything, because extinction means no future probability of anything.'\n\n**The Lesson:**\nDon't just use the mechanisms. Argue WHY your mechanism is the correct way to view the round.",
                keyPoints: [
                    "Argue why your weighing criteria is superior",
                    "Pascal's Wager attacks (ignoring low prob/high mag)",
                    "Precautionary Principle defense (prioritizing existential risk)",
                ],
            },
            {
                type: "content",
                title: "Probability vs. Magnitude Matrices",
                content: "When comparing:\n\n• **High Prob/High Mag:** Always wins.\n• **Low Prob/Low Mag:** Always loses.\n• **High Prob/Low Mag vs. Low Prob/High Mag:** The danger zone.\n\n**Winning the Danger Zone:**\n1. Attack the internal link (reduce their prob to zero).\n2. Timeframe (my small impact helps us solve the big one later).\n3. Reversibility (we can fix my small mess; we can't fix their big catastrophe).\n\n**Visualizing:**\nMake the judge see the trade-off. 'Would you bet your life savings on a lottery ticket? No. So don't bet the economy on their speculative boom.'",
                keyPoints: [
                    "Identify the trade-off zone",
                    "Use secondary weighing mechanisms (timeframe, reversibility) to break the tie",
                    "Use analogies to clarify the risk profile",
                ],
            },
            {
                type: "question",
                id: "l13-04-q1",
                question: "One side argues economic benefits (likely, moderate); the other argues existential risk (unlikely, severe). How do you weigh probability against magnitude?",
                options: [
                    { id: "a", text: "It depends—even low-probability extreme magnitude effects may outweigh certain moderate ones" },
                    { id: "b", text: "Probability always wins" },
                    { id: "c", text: "Magnitude always wins" },
                    { id: "d", text: "They cancel out" }
                ],
                correctAnswer: "a",
                explanation: "Weighing probability against magnitude requires judgment. A 1% risk of extinction might outweigh a 90% chance of moderate economic gain because the stakes are so asymmetric. But a 0.001% risk might not. Debaters must make explicit arguments about where the balance lies.",
            },
            {
                type: "question",
                id: "l13-04-q1",
                question: "One side argues economic benefits (likely, moderate); the other argues existential risk (unlikely, severe). How do you weigh probability against magnitude?",
                options: [
                    { id: "a", text: "Probability always wins" },
                    { id: "b", text: "It depends—even low-probability extreme magnitude effects may outweigh certain moderate ones" },
                    { id: "c", text: "Magnitude always wins" },
                    { id: "d", text: "They cancel out" }
                ],
                correctAnswer: "b",
                explanation: "Weighing probability against magnitude requires judgment. A 1% risk of extinction might outweigh a 90% chance of moderate economic gain because the stakes are so asymmetric. But a 0.001% risk might not. Debaters must make explicit arguments about where the balance lies.",
            },
            {
                type: "content",
                title: "Executing Effective Weighing",
                content: "How to weigh effectively in rounds:\n\n**Be Explicit:**\n'Even if you grant everything my opponent says, I still win because...'\nMake the comparison clear, not implicit.\n\n**Concede Strategically:**\n'Let's assume for argument that their benefit is real. Why does my impact still matter more?'\nShowing you win even if they're right is powerful.\n\n**Cite Specific Frameworks:**\n'On magnitude, consider: their impact affects thousands; mine affects millions.'\nName the weighing framework you're using.\n\n**Apply to Both Sides:**\n'My impact is high magnitude, high probability. Their impact is speculative and limited.'\nCompare using consistent criteria.\n\n**Tell the Story:**\n'At the end of the day, what should the judge be most concerned about?'\nFrame the decision calculus in compelling terms.\n\n**Do It Early and Often:**\nDon't save weighing for your final speech. Establish weighing frameworks throughout so the last speech can pull it together.",
                keyPoints: [
                    "Make comparisons explicit, not implicit",
                    "Strategic concession shows you win even if they're right",
                    "Establish weighing throughout, not just in final speech",
                ],
            },
            {
                type: "content",
                title: "Pre-Empting Opponent Weighing",
                content: "Anticipate and undermine opponent weighing:\n\n**Contest Their Framework:**\nIf they say probability matters most, argue reversibility matters more. Fight over what criteria to prioritize.\n\n**Dispute Their Analysis:**\n'They claim their impact is more probable, but they've offered no evidence for likelihood.'\nHolding them to standards of proof.\n\n**Link Arguments to Weighing:**\n'They claim magnitude matters—but my take-out shows their magnitude claims are exaggerated.'\nConnect earlier refutation to weighing.\n\n**Alternative Framings:**\n'Rather than asking which harm is bigger, ask which population is most vulnerable.'\nIntroduce frameworks that favor you.\n\n**Direct Comparison:**\n'They say their impact is irreversible, but so is mine—and mine is larger and more certain.'\nBeat them on their own criteria.\n\n**First-Mover Advantage:**\nIf you establish the weighing framework first, they must respond to your framing. Set the terms of comparison.",
                keyPoints: [
                    "Contest which weighing criteria matter most",
                    "Dispute their application of weighing frameworks",
                    "Establish frameworks first to set the terms of comparison",
                ],
            },
            {
                type: "content",
                title: "Short vs. Long Term Scenarios",
                content: "The Timeframe Clash:\n\n**Short Term Argument:**\n'People are suffering NOW. We can't sacrifice the current generation for speculative future.'\n\n**Long Term Argument:**\n'Short term pain is worth long term gain. Avoiding structural fixes ensures suffering continues forever.'\n\n**Winning This:**\n• If arguing Short Term: Emphasize certainty and urgency.\n• If arguing Long Term: Emphasize 'Structural Violence' and sustainability. 'Feeding them today just to starve them tomorrow isn't a solution.'",
                keyPoints: [
                    "Short term: Urgency, certainty, moral obligation to now",
                    "Long term: Sustainability, structural repair, cumulative benefit",
                    "Frame the opponent's view as myopic or unsustainable",
                ],
            },
            {
                type: "question",
                id: "l13-04-q2",
                question: "Why is explicit weighing better than implicit weighing?",
                options: [
                    { id: "a", text: "It takes more time" },
                    { id: "b", text: "Implicit weighing is always wrong" },
                    { id: "c", text: "Rules require explicit weighing" },
                    { id: "d", text: "Judges may miss implicit weighing; explicit comparison ensures they apply your framework" }
                ],
                correctAnswer: "d",
                explanation: "Judges can miss implicit weighing—they might not realize you're trying to compare impacts. Explicit weighing ('My impact is larger because...') ensures judges understand your comparison and apply your framework. Don't leave important comparisons to chance.",
            },
            {
                type: "content",
                title: "Conclusion: Beyond 'I'm Right'",
                content: "Weighing is often where debates are decided. It's not enough to prove your arguments—you must show why yours matter more than theirs.\n\n**Key Takeaways:**\n• Weighing compares competing arguments using explicit frameworks\n• Key frameworks: magnitude, probability, timeframe, reversibility, scope\n• Be explicit about comparisons; don't leave them implicit\n• Strategic concession demonstrates you win even if they're right\n• Contest opponent weighing frameworks and their application\n• Establish weighing early to control the terms of comparison\n\n**Looking Ahead:**\nIn the next lesson, we'll explore Using Evidence Strategically—maximizing the impact of your research.\n\n**Practice Challenge:**\nTake a debate topic and list the likely impacts on both sides. Practice making explicit weighing comparisons using multiple frameworks.",
                keyPoints: [
                    "Weighing decides debates when both sides have valid arguments",
                    "Explicit frameworks guide judge evaluation",
                    "Control the weighing narrative to control the debate",
                ],
            },
        ],
    },
    {
        lessonId: "l13-05",
        pages: [
            {
                type: "content",
                title: "Introduction: Using Evidence Strategically",
                content: "Evidence is the backbone of debate—but having good evidence isn't enough. You must use it effectively. Strategic evidence use means placing evidence where it has maximum impact, reading it in ways judges can follow, and building arguments around evidence rather than burying it.\n\nThe same evidence can be highly persuasive or essentially useless depending on how it's deployed. Great debaters are strategic about which evidence they emphasize and how they present it.\n\nIn this lesson, you'll learn to maximize evidence impact through strategic placement, effective reading, and argument integration.",
            },
            {
                type: "content",
                title: "Evidence Placement",
                content: "Where you use evidence matters:\n\n**Lead with Evidence on Key Claims:**\nFor your most important contentions, evidence should come early and prominently. Don't bury it at the end of a long analytical block.\n\n**Use Evidence to Win Key Clash Points:**\nIdentify where the debate will turn the most—deploy best evidence there.\n\n**Match Evidence to Burden:**\nClaims that require proof need evidence. Analytical arguments need reasoning. Know which is which.\n\n**Strategic Concession:**\nIf you can win on weighing, you might concede some factual points and focus evidence on impact comparison instead.\n\n**Evidence in Rebuttals:**\nNew evidence in rebuttals should address specific arguments that arose. Don't just repeat constructive evidence.\n\n**Evidence Allocation:**\nHigh-quality evidence on core claims; less on peripheral matters. Focus your research depth where debates are decided.",
                keyPoints: [
                    "Lead with evidence on key claims, not peripheral ones",
                    "Deploy best evidence at clash points",
                    "Match evidence use to burden of proof",
                ],
            },
            {
                type: "content",
                title: "Reading Evidence Effectively",
                content: "How you present evidence affects its impact:\n\n**Explain Before and After:**\nBefore reading: 'This evidence shows [specific conclusion].'\nAfter reading: 'This matters because [implication].'\n\n**Control Speed:**\nReading evidence at unintelligible speed wastes its value. Judges need to process it.\n\n**Highlight Key Phrases:**\nOrally emphasize the most important parts. Don't read in monotone.\n\n**Tag Lines:**\nGive evidence a memorable label: 'The extinction impact is...'\nJudges will remember tags even if they miss details.\n\n**Warrant Extraction:**\nDon't rely on judges to understand complex evidence. Pull out the key reasoning and explain it.\n\n**Credibility Information:**\nMention author credentials: 'According to Dr. Smith, climate scientist at MIT...'\nQualifications enhance persuasive weight.\n\n**Avoid Reading Too Much:**\nLong evidence blocks lose attention. Select the most important parts rather than reading everything.",
                keyPoints: [
                    "Frame evidence before and explain after",
                    "Slow down and emphasize key phrases",
                    "Extract warrants rather than hoping judges understand",
                ],
            },
            {
                type: "content",
                title: "Power Tagging",
                content: "The 'Tag' is the one-sentence summary you read before the evidence.\n\n**Weak Tag:**\n'This evidence speaks to the economy.'\n\n**Power Tag:**\n'Smith 23 proves that a 2% tariff hike triggers a global recession.'\n\n**Why It Matters:**\nThe Power Tag tells the judge the *logic* and the *impact* before you read the text. It primes their brain to accept your conclusion. It makes your flow (notes) look cleaner.",
                keyPoints: [
                    "Tags should summarize the specific claim and impact",
                    "Prime the judge's listening",
                    "Strong tags make for strong memory",
                ],
            },
            {
                type: "content",
                title: "Cutting Cards Effectively",
                content: "How to prepare evidence:\n• **Selection:** Find the paragraph where they explain the mechanism.\n• **Highlighting:** Only read the essential words to maintain flow. (But don't distort meaning!).\n• **Shrinking:** Reduce font size of unread parts so you don't get lost visually.\n\n**Ethical Note:**\nYou must have the full paragraph available. You can highlight specific words, but you cannot change the meaning by skipping 'not' or 'however.'",
                keyPoints: [
                    "Highlight for efficiency",
                    "Preserve context for ethics",
                    "Visual clarity aids delivery",
                ],
            },
            {
                type: "content",
                title: "The Ethics of Ellipses",
                content: "Using '...' to skip text:\n• **Okay:** Skipping irrelevant side-points or examples to save time.\n• **Not Okay:** Skipping periods to merge sentences that weren't connected.\n• **Not Okay:** Skipping qualifiers ('rarely,' 'sometimes').\n\n**Golden Rule:**\nIf the author read your version, would they say 'Yes, that's what I meant'? If no, you are cheating.",
                keyPoints: [
                    "Ellipses must not alter meaning",
                    "Never merge separate thoughts into one false logic chain",
                    "The 'Author Test' applies here too",
                ],
            },
            {
                type: "question",
                id: "l13-05-q1",
                question: "Why should you explain evidence after reading it, not just read and move on?",
                options: [
                    { id: "a", text: "It takes up time" },
                    { id: "b", text: "Judges may not fully grasp complex evidence—your explanation ensures they understand its significance" },
                    { id: "c", text: "Evidence speaks for itself" },
                    { id: "d", text: "It's required by rules" }
                ],
                correctAnswer: "b",
                explanation: "Evidence often doesn't speak for itself, especially technical or dense evidence. Post-reading explanation ensures judges understand why the evidence matters and how it supports your argument. Without explanation, evidence may have less impact than it deserves.",
            },
            {
                type: "content",
                title: "Building Arguments Around Evidence",
                content: "Integrate evidence into argument structure:\n\n**Evidence as Starting Point:**\nDon't make a claim, then find evidence. Start with what evidence shows, then build the argument.\n\n**The Evidence Sandwich:**\nClaim → Evidence → Implication\n'This policy fails [claim]. Smith's 2023 analysis shows 80% of similar programs failed [evidence]. Without fundamental redesign, the same outcome is likely [implication].'\n\n**Multiple Evidence Sources:**\nOn key claims, layer evidence from different sources. 'Not only does Smith find X, Johnson independently confirms the same pattern.'\n\n**Address Tensions:**\nIf your evidence is mixed, acknowledge and explain: 'While some studies show X, the majority and most recent find Y.'\n\n**Connect to Framework:**\nAlways tie evidence back to why it matters for the decision: 'This evidence proves the harm my opponent claimed as a benefit is actually experienced negatively.'\n\n**Avoid Orphan Evidence:**\nEvidence that sits alone without argument integration has little impact. Every piece should connect to your case structure.",
                keyPoints: [
                    "Build arguments from evidence, not the reverse",
                    "Use the evidence sandwich: Claim → Evidence → Implication",
                    "Layer multiple sources on key claims",
                ],
            },
            {
                type: "question",
                id: "l13-05-q2",
                question: "What is 'orphan evidence' and why is it problematic?",
                options: [
                    { id: "a", text: "Evidence without an author" },
                    { id: "b", text: "Evidence from obscure sources" },
                    { id: "c", text: "Evidence that isn't integrated into argument structure, so it has little impact" },
                    { id: "d", text: "Inherited evidence from past debates" }
                ],
                correctAnswer: "c",
                explanation: "Orphan evidence is evidence that exists in your speech but isn't connected to your argument structure. It sits alone without clear claims or implications. Judges don't know what to do with it. Effective evidence use integrates every piece into your case structure.",
            },
            {
                type: "content",
                title: "Conclusion: Evidence Strategy",
                content: "Strategic evidence use transforms research from mere information into persuasive power. It's not what you have—it's how you use it.\n\n**Key Takeaways:**\n• Place evidence where it has maximum impact: key claims and clash points\n• Frame evidence before reading and explain significance after\n• Slow down, emphasize key phrases, extract warrants\n• Build arguments from evidence using the claim → evidence → implication structure\n• Layer multiple sources on important claims\n• Integrate all evidence into case structure—avoid orphans\n\n**Looking Ahead:**\nIn the next lesson, we'll study Defensive vs. Offensive Arguments—when to protect vs. when to attack.\n\n**Practice Challenge:**\nTake a piece of evidence and practice reading it effectively. Frame it, read at appropriate speed with emphasis, then explain significance. Time yourself.",
                keyPoints: [
                    "Strategic placement maximizes evidence impact",
                    "Presentation style affects persuasive power",
                    "Integration into argument structure is essential",
                ],
            },
        ],
    },
    {
        lessonId: "l13-06",
        pages: [
            {
                type: "content",
                title: "Introduction: Defensive vs. Offensive Arguments",
                content: "Arguments can be categorized as defensive (protecting your position) or offensive (attacking theirs). Both are necessary, but they function differently in debate.\n\nDefensive arguments prevent you from losing. Offensive arguments are how you win. A round can't be won purely defensively—you must give affirmative reasons to vote for your side.\n\nIn this lesson, you'll learn to distinguish defensive and offensive strategies, when to emphasize each, and how to balance protection with attack.",
            },
            {
                type: "content",
                title: "What Makes Arguments Offensive or Defensive",
                content: "Understanding the distinction:\n\n**Defensive Arguments:**\nPrevent the other side's arguments from winning the round.\n• Take-outs: 'Their evidence doesn't support their conclusion'\n• Mitigations: 'This effect is smaller than claimed'\n• Blocks: Answers to specific attacks\n\n**Offensive Arguments:**\nProvide independent reasons to vote for your side.\n• Advantages/impacts: Reasons your position is good\n• Turns: Their argument actually helps you\n• Independent offense: Arguments they must answer, not just you\n\n**The Key Distinction:**\nIf all you do is answer their arguments, you haven't proven you should win—just that they shouldn't. You need affirmative reasons for your side.\n\n**Interactive Example:**\nOpponent: 'Policy X costs $1 billion.'\nDefensive: 'The cost is exaggerated; it's only $500 million.'\nOffensive: 'Even accepting the cost, the policy saves lives worth more than $1 billion, so the cost is a reason to vote for us, not against us.'",
                keyPoints: [
                    "Defensive arguments prevent losing; offensive arguments win rounds",
                    "Defense alone isn't enough—you need reasons to vote for you",
                    "Turns convert defensive pressure into offense",
                ],
            },
            {
                type: "question",
                id: "l13-06-q1",
                question: "If you only run defensive arguments—taking out all opponent attacks—why haven't you won the debate yet?",
                options: [
                    { id: "a", text: "You have won the debate" },
                    { id: "b", text: "The judge is biased" },
                    { id: "c", text: "You've only shown they shouldn't win, not why you should—you need affirmative reasons for your side" },
                    { id: "d", text: "Defense isn't allowed in debate" }
                ],
                correctAnswer: "c",
                explanation: "Pure defense only neutralizes their arguments—it doesn't provide reasons to vote for you. If both sides have no offense, there's no winner. You need independent reasons why your position is desirable, not just answers to their attacks.",
            },
            {
                type: "question",
                id: "l13-06-q1",
                question: "If you only run defensive arguments—taking out all opponent attacks—why haven't you won the debate yet?",
                options: [
                    { id: "a", text: "You've only shown they shouldn't win, not why you should—you need affirmative reasons for your side" },
                    { id: "b", text: "The judge is biased" },
                    { id: "c", text: "You have won the debate" },
                    { id: "d", text: "Defense isn't allowed in debate" }
                ],
                correctAnswer: "a",
                explanation: "Pure defense only neutralizes their arguments—it doesn't provide reasons to vote for you. If both sides have no offense, there's no winner. You need independent reasons why your position is desirable, not just answers to their attacks.",
            },
            {
                type: "content",
                title: "When to Emphasize Defense",
                content: "Strategic use of defensive arguments:\n\n**When Behind:**\nIf opponents have strong offense and you're behind on impact comparison, play defense to neutralize their advantages before extending your own.\n\n**On Strong Attacks:**\nWhen an attack threatens your core case, you must defend before moving on. Undefended arguments can be 'dropped' and held against you.\n\n**Time Pressure:**\nIn final rebuttals, you might not have time for new offense. Defense on key issues may be all you can do.\n\n**Risk Management:**\nIf your offense is speculative but their offense is real, solid defense might be safer than doubling down on weak offense.\n\n**However:**\nPure defense is rarely a winning strategy. Even when emphasizing defense, maintain some offense.\n\n**The Minimum Standard:**\nAnswer significant attacks on your case. Don't let major arguments go unanswered. But balance this with extending your reasons to win.",
                keyPoints: [
                    "Defend when behind or when core case is threatened",
                    "Undefended arguments can be held against you",
                    "Even when playing defense, maintain some offense",
                ],
            },
            {
                type: "content",
                title: "When to Emphasize Offense",
                content: "Strategic use of offensive arguments:\n\n**When Ahead:**\nIf they're struggling to answer your arguments, extend and add offense rather than getting into tangential defense.\n\n**When Their Offense Is Weak:**\nIf you've effectively answered their case, invest time in explaining why your arguments are winning.\n\n**In Constructives:**\nEarly speeches establish reasons to vote for you. This is when offense should dominate.\n\n**Impact-Level Debate:**\nOnce facts are established, impact comparison (weighing) is offensive—it's about why your impacts matter more.\n\n**Converting Defense to Offense:**\nTurns convert their attacks into your advantages. This is efficient: you're answering them AND adding offense simultaneously.\n\n**The Goal:**\nAt the end of the debate, judges should have clear, uncontested reasons to vote for you—that's what offense accomplishes.",
                keyPoints: [
                    "Extend offense when ahead rather than tangential defense",
                    "Constructive speeches should be offense-heavy",
                    "Turns convert their attacks into your advantages—efficient",
                ],
            },
            {
                type: "content",
                title: "The 'Collapsed Round' Strategy",
                content: "In the final speech, you can't cover everything. You must 'collapse' down to the 1-2 winning issues.\n\n**How to Collapse:**\n1. Identify your strongest offensive argument.\n2. Identify their strongest offensive argument.\n3. Explain why yours outweighs or defeats theirs.\n4. Explicitly tell the judge: 'I am not going for X or Y argument anymore. The round comes down to Z.'\n\n**Benefit:**\nThis gives you deep time to explain the winning issue, while the opponent spreads themselves thin trying to cover everything.",
                keyPoints: [
                    "Focus on 1-2 winning issues in the final speech",
                    "Explicitly drop less important arguments",
                    "Depth beats breadth in rebuttals",
                ],
            },
            {
                type: "content",
                title: "Kick-Out Moves",
                content: "Sometimes you need to abandon a sinking ship.\n\n**The Kick-Out:**\n'They spent 3 minutes attacking my Contention 1. I'm going to kick it out (drop it) and focus entirely on Contention 2, which they mishandled.'\n\n**Strategic Value:**\nYou wasted their time. They spent precious minutes attacking something you don't even need to win. This is advanced time management.",
                keyPoints: [
                    "Strategically drop arguments to invalidate opponent time investment",
                    "Only kick out arguments you don't need to win",
                    "Pivot to where you are strongest",
                ],
            },
            {
                type: "content",
                title: "Different Roles: 2NR vs 2AR",
                content: "In Policy/LD debate terms:\n\n**Negative Final (2NR):**\nMust likely close doors. 'Close out' the round by proving the Aff failed.\n\n**Affirmative Final (2AR):**\nMust open doors. Tell the story of the Aff world. The last word is powerful—use it to paint a big picture comparison.\n\n**The takeaway:**\nThe final defensive speech needs to be airtight. The final offensive speech needs to be inspiring.",
                keyPoints: [
                    "Negative speeches often focus on closing options/defense",
                    "Affirmative speeches focus on opening possibilities/story",
                    "Use the final speech for big picture narrative",
                ],
            },
            {
                type: "question",
                id: "l13-06-q2",
                question: "Your opponent's main attack on your case is weak. What's the best time allocation?",
                options: [
                    { id: "a", text: "Spend most time on extensive defense against the weak attack" },
                    { id: "b", text: "Ignore the attack entirely" },
                    { id: "c", text: "Only respond in cross-examination" },
                    { id: "d", text: "Answer efficiently and devote more time to extending your offense" }
                ],
                correctAnswer: "d",
                explanation: "When their attack is weak, a brief, efficient answer is sufficient. Spending extensive time on weak attacks is wasteful. Better to answer efficiently and invest remaining time in extending your own reasons to win—that's what ultimately decides debates.",
            },
            {
                type: "content",
                title: "Conclusion: Attack and Defend",
                content: "Winning debates requires both offense and defense. Knowing when to emphasize each is a key strategic skill.\n\n**Key Takeaways:**\n• Defensive arguments prevent losing; offensive arguments win rounds\n• Pure defense isn't enough—you need affirmative reasons to vote for you\n• Defend when core case is threatened or when behind\n• Extend offense when ahead or when their attacks are weak\n• Turns are efficient—defense and offense in one argument\n• Final speeches need clear offense: uncontested reasons to win\n\n**Looking Ahead:**\nIn the next lesson, we'll review Unit 13 concepts—refutation and argument strategy.\n\n**Practice Challenge:**\nReview a past debate. Categorize each argument as offensive or defensive. Was the balance appropriate? What would you change?",
                keyPoints: [
                    "Balance offense and defense based on situation",
                    "Constructives emphasize offense; rebuttals balance both",
                    "Clear, uncontested offense wins debates",
                ],
            },
        ],
    },
    {
        lessonId: "l13-07",
        pages: [
            {
                type: "content",
                title: "Introduction: Unit 13 Review",
                content: "Congratulations on completing Unit 13! This unit introduced refutation—the art of attacking opposing arguments strategically and effectively.\n\nIn this review lesson, we'll consolidate what you've learned about refutation types, turns, take-outs, weighing, evidence strategy, and the offense/defense balance. These skills form the core of competitive debate strategy.",
            },
            {
                type: "content",
                title: "Review: Refutation Types and Turns",
                content: "**Types of Refutation:**\n• Denial disputes facts; mitigation minimizes significance\n• Take-outs attack logic or evidence\n• Turns make their arguments support your side\n• Outweighing accepts arguments but shows yours matter more\n• 4-step structure: They Say → But → Because → Therefore\n\n**Turn Arguments:**\n• Link turns reverse the cause-effect direction\n• Impact turns reverse the evaluation of the effect\n• Never run both on the same argument—contradictory\n• Turns require strong counter-evidence\n• High risk, high reward compared to take-outs",
                keyPoints: [
                    "Different refutation types match different argument weaknesses",
                    "Turns are powerful but require evidence and consistency",
                    "Structure refutations clearly for judge comprehension",
                ],
            },
            {
                type: "content",
                title: "Review: Take-Outs and Weighing",
                content: "**Take-Out Arguments:**\n• Challenge evidence quality, logic, or scope\n• Safer than turns—no controversial counter-claims needed\n• Be specific about flaws and explain why they matter\n• Provide better evidence rather than just attacking\n\n**Weighing Arguments:**\n• Frameworks: magnitude, probability, timeframe, reversibility, scope\n• Make comparisons explicit, not implicit\n• Strategic concession shows you win even if they're right\n• Contest opponent weighing frameworks\n• Establish weighing early to control terms of comparison",
                keyPoints: [
                    "Take-outs are safer; turns are higher impact",
                    "Explicit weighing ensures judges apply your framework",
                    "Control the weighing narrative to control the debate",
                ],
            },
            {
                type: "content",
                title: "Review: Evidence and Offense/Defense",
                content: "**Using Evidence Strategically:**\n• Place evidence where it has maximum impact\n• Frame before reading, explain significance after\n• Build arguments from evidence using claim → evidence → implication\n• Layer sources and integrate all evidence into case structure\n\n**Defensive vs. Offensive Arguments:**\n• Defense prevents losing; offense wins rounds\n• Pure defense isn't enough—need affirmative reasons to vote for you\n• Defend when behind or core case threatened\n• Extend offense when ahead or their attacks are weak\n• Turns efficiently combine defense with offense",
                keyPoints: [
                    "Strategic evidence use maximizes research investment",
                    "Balance offense and defense based on debate situation",
                    "Clear, uncontested offense wins debates",
                ],
            },
            {
                type: "question",
                id: "l13-07-q1",
                question: "Opponent argues 'Policy X increases unemployment.' You respond 'No, Policy X creates jobs.' What type of refutation is this?",
                options: [
                    { id: "a", text: "Impact turn" },
                    { id: "b", text: "Link turn—you're reversing the direction of the causal claim" },
                    { id: "c", text: "Mitigation" },
                    { id: "d", text: "Take-out" }
                ],
                correctAnswer: "b",
                explanation: "This is a link turn. You're not disputing that employment effects matter (impact) or criticizing their evidence (take-out). You're reversing the causal direction: instead of X causing unemployment, you claim X creates jobs. Same impact category, opposite direction.",
            },
            {
                type: "question",
                id: "l13-07-q2",
                question: "When should you emphasize defensive arguments over offensive ones?",
                options: [
                    { id: "a", text: "Always—defense is what wins debates" },
                    { id: "b", text: "Never—only offense matters" },
                    { id: "c", text: "When their attacks threaten your core case or when you're behind and need to neutralize their advantages" },
                    { id: "d", text: "Only in the first speech" }
                ],
                correctAnswer: "c",
                explanation: "Emphasize defense when you're behind and need to neutralize their offense, or when significant attacks threaten your core case. Unanswered attacks can be held against you. But even then, maintain some offense—pure defense can't win rounds.",
            },
            {
                type: "content",
                title: "Conclusion: The Art of Refutation",
                content: "You've completed Unit 13, building a sophisticated understanding of how to attack opposing arguments effectively.\n\n**Key Takeaways:**\n• Match refutation type to argument weakness\n• Turns are powerful but require evidence and consistency\n• Take-outs are safer, attacking evidence and logic\n• Explicit weighing controls how judges compare arguments\n• Strategic evidence use maximizes research investment\n• Balance offense and defense based on debate situation\n\n**Looking Ahead:**\nUnit 14 will explore Comparison Standards—how to evaluate competing policies and positions.\n\n**Practice Challenge:**\nTake a debate case and practice applying each refutation type: denial, turn, take-out, and outweigh. Consider which works best for each argument.",
                keyPoints: [
                    "Refutation is as important as case construction",
                    "Strategic choices about type and timing matter",
                    "Offense ultimately wins debates; defense enables you to get there",
                ],
            },
        ],
    },
];
