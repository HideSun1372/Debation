import { MultiPageLesson } from "./types";

// Unit 20: Final Logic
// Topics: Common Refutation Mistakes, Argument from Silence, Opening Statements, Refutation Organization, Affirming the Consequent, Thesis Statements

export const UNIT_20_LESSONS: MultiPageLesson[] = [
    {
        lessonId: "l20-01",
        pages: [
            {
                type: "content",
                title: "Introduction: Common Refutation Mistakes",
                content: "Even skilled debaters make refutation errors that undermine their responses. Recognizing common mistakes helps you avoid them and identify them in opponent arguments.\n\nThis lesson catalogs frequent refutation errors and how to prevent them. Mastering what not to do is as important as mastering what to do.\n\nIn this lesson, you'll learn the most common refutation mistakes and strategies for avoiding them.",
            },
            {
                type: "content",
                title: "Mistake 1: Attacking Straw Men",
                content: "Refuting an argument no one made:\n\n**The Error:**\nMischaracterizing opponent arguments, then attacking the mischaracterization.\n\n**Why It Happens:**\n• Misunderstanding what was actually argued\n• Consciously or unconsciously making their argument easier to attack\n• Responding to what you expected rather than what was said\n\n**The Problem:**\nJudges who heard the actual argument know you're addressing something different. You waste time and lose credibility.\n\n**Prevention:**\n• Flow carefully—note exactly what was argued\n• When uncertain, briefly restate: 'My opponent argues X. In response...'\n• Ask questions if format allows: 'Did you argue X or Y?'\n• Interpret charitably—address the strongest version of their argument",
                keyPoints: [
                    "Straw men attack arguments not actually made",
                    "Judges know when you're mischaracterizing",
                    "Prevent by flowing carefully and interpreting charitably",
                ],
            },
            {
                type: "content",
                title: "Mistake 2: Missing the Heart of Arguments",
                content: "Refuting periphery while ignoring the core:\n\n**The Error:**\nAttacking minor details while leaving the central claim standing.\n\n**Why It Happens:**\n• The minor detail is easier to attack\n• Failure to identify what's actually central\n• Focusing on what you noticed rather than what matters\n\n**The Problem:**\nOpponents can say 'Even granting their response, my central point remains.' You've done work without impact.\n\n**Example:**\nOpponent argues 'Policy X reduces poverty because [mechanism A, B, C].' You attack mechanism A extensively while B and C still support their conclusion.\n\n**Prevention:**\n• Before responding, ask: 'What's the essential claim here?'\n• Address central claims directly\n• If attacking details, explain why they're essential: 'Without A, their entire argument fails.'",
                keyPoints: [
                    "Address core claims, not just peripheral details",
                    "Ask: 'What's essential to this argument?'",
                    "Explain why attacking details matters to the whole",
                ],
            },
            {
                type: "question",
                id: "l20-01-q1",
                question: "Opponent argues a policy works for reasons A, B, and C. You completely refute reason A but ignore B and C. What's the problem?",
                options: [
                    { id: "a", text: "No problem—A was refuted" },
                    { id: "b", text: "You should have refuted D" },
                    { id: "c", text: "The refutation was too strong" },
                    { id: "d", text: "Reasons B and C may independently support their conclusion; refuting A alone doesn't defeat the argument" }
                ],
                correctAnswer: "d",
                explanation: "If their conclusion is supported by A, B, and C independently, refuting A alone leaves B and C supporting their position. You've attacked one leg of a three-legged stool—it still stands. Essential claims need full refutation.",
            },
            {
                type: "content",
                title: "Mistake 3: Self-Contradictory Responses",
                content: "Undermining yourself with inconsistency:\n\n**The Error:**\nMaking refutations that contradict each other or your own case.\n\n**Examples:**\n • 'That won't happen' AND 'If it does, it's good' (double turn)\n • 'Their evidence is unreliable' after citing the same source yourself\n • 'The economy doesn't matter' when your own case relies on economic impacts\n\n**Why It Happens:**\n• Rushing without checking consistency\n• Over-eagerness to respond to everything\n• Missing connections between arguments\n\n**Prevention:**\n• Check: does this response conflict with anything I've said?\n• Use 'even if' framing to manage tensions\n• Review your case before prep to know your commitments",
                keyPoints: [
                    "Self-contradiction undermines your credibility",
                    "Check responses against your own case",
                    "'Even if' framing manages tensions between positions",
                ],
            },
            {
                type: "content",
                title: "Mistake 4: Responding to Wrong Versions",
                content: "Addressing stronger or weaker versions than argued:\n\n**Too Strong (Straw Man):**\nAttacking a more extreme version than opponent actually argued.\n\n**Too Weak (Steel Man Problem):**\nDefeating a watered-down version that doesn't represent their case.\n\n**The Problem:**\nJudges know the actual argument. Responding to wrong versions wastes time.\n\n**Prevention:**\n• Quote or paraphrase their actual words\n• Ask clarifying questions when allowed\n• When uncertain, address the most reasonable interpretation\n• Briefly restate: 'They argue X. Here's why X fails.'\n\n**Charitable Interpretation:**\nGenerally address the strongest reasonable version. But don't strengthen their argument beyond what they said.",
                keyPoints: [
                    "Respond to what they actually argued",
                    "Quote or paraphrase for accuracy",
                    "When uncertain, address the most reasonable interpretation",
                ],
            },
            {
                type: "content",
                title: "Mistake 5: Nitpicking",
                content: "Confusing errors with arguments:\n\n**The Error:**\nAttacking typos, minor factual slips, or verbal stumbles that don't affect the argument's logic.\n\n**Why It Fails:**\n• It looks petty to judges\n• It ignores the substantive claim\n• It wastes time on non-voting issues\n\n**The Rule:**\n'Be charitable with their slips; be ruthless with their logic.' If they say '1999' but meant '1990', correcting it doesn't win the round. Refuting the causal link does.",
                keyPoints: [
                    "Don't confuse minor slips with logical flaws",
                    "Nitpicking looks petty and unstrategic",
                    "Focus on errors that affect the conclusion",
                ],
            },
            {
                type: "content",
                title: "Mistake 6: The 'Shotgun' Approach",
                content: "Quantity over quality:\n\n**The Error:**\nThrowing 10 weak responses at an argument hoping one sticks, instead of 1-2 strong ones.\n\n**Why It Fails:**\n• Paradox of Choice: Judges feel overwhelmed\n• Weak arguments dilute strong ones\n• You run out of time\n\n**Better Strategy:**\nSelect your best 2 responses. Develop them fully. Depth beats breadth in refutation.",
                keyPoints: [
                    "Don't throw disjointed responses significantly",
                    "Two strong answers beat ten weak ones",
                    "Group arguments to avoid listing endless points",
                ],
            },
            {
                type: "content",
                title: "Mistake 7: Assertion Without Support",
                content: "Claiming without proving:\n\n**The Error:**\n'That's not true' without explanation or evidence for why it's not true.\n\n**Why It Happens:**\n• Time pressure\n• Assuming the answer is obvious\n• Lacking actual refutation\n\n**The Problem:**\nUnsupported assertions can be dismissed: 'They didn't explain why. I did explain why. Prefer my evidence.'\n\n**Prevention:**\n• Every refutation needs either evidence or reasoning\n• If you don't have a real response, concede or minimize—don't empty-assert\n• Brief reasoning beats no reasoning: 'This fails because...'",
                keyPoints: [
                    "Assertions without support can be dismissed",
                    "Every refutation needs evidence or reasoning",
                    "Brief reasoning beats bare assertion",
                ],
            },
            {
                type: "content",
                title: "Mistake 8: Dropping Arguments",
                content: "Failing to address arguments at all:\n\n**The Error:**\nLeaving opponent arguments without response.\n\n**Why It Happens:**\n• Time pressure\n• Forgetting or overlooking\n• Strategic miscalculation about importance\n\n**The Problem:**\nDropped arguments may be treated as conceded. Opponents will point to unaddressed points as voting issues.\n\n**Prevention:**\n• Comprehensive case flow\n• Systematic line-by-line for important arguments\n• Strategic concession is different from accidentally dropping: 'I'm not contesting X, but the key issue is Y.'\n\n**Recovery:**\nIf you realize you've dropped something: address it in your next speech with acknowledgment. 'I should have addressed their point on X. Let me do so now.'",
                keyPoints: [
                    "Dropped arguments may be treated as conceded",
                    "Systematic flow prevents accidental drops",
                    "Strategic concession differs from negligent dropping",
                ],
            },
            {
                type: "question",
                id: "l20-01-q2",
                question: "What's the safest approach if you accidentally drop an important argument?",
                options: [
                    { id: "a", text: "Address it in your next speech with brief acknowledgment" },
                    { id: "b", text: "Pretend it wasn't important" },
                    { id: "c", text: "Hope the judge forgot" },
                    { id: "d", text: "Attack the opponent personally" }
                ],
                correctAnswer: "a",
                explanation: "Address dropped arguments in your next speech. Brief acknowledgment ('I should have addressed this earlier') is honest and professional. Pretending or hoping judges forgot rarely works.",
            },
            {
                type: "content",
                title: "Conclusion: Error Prevention",
                content: "Avoiding common refutation mistakes is as important as learning proper techniques. Awareness of frequent errors helps you catch them before they damage your position.\n\n**Key Takeaways:**\n• Straw man: refute actual arguments, not mischaracterizations\n• Missing the heart: address core claims, not periphery\n• Bare assertion: every refutation needs support\n• Dropping: systematic flow prevents accidental omissions\n• Strategic concession differs from neglect\n• Recovery is possible—acknowledge and address\n\n**Looking Ahead:**\nIn the next lesson, we'll explore Argument from Silence.\n\n**Practice Challenge:**\nRecord a practice refutation. Review it specifically for these errors. Did you avoid all of them?",
                keyPoints: [
                    "Avoid straw men by flowing carefully",
                    "Address cores, not peripheries",
                    "Support refutations; don't drop arguments",
                ],
            },
        ],
    },
    {
        lessonId: "l20-02",
        pages: [
            {
                type: "content",
                title: "Introduction: Argument from Silence",
                content: "The argument from silence draws conclusions from the absence of evidence or statements. 'They didn't mention X, so X must not be true' or 'No evidence against Y exists, so Y must be the case.'\n\nThis reasoning is often fallacious but sometimes legitimate. Understanding when silence is meaningful helps you navigate these arguments.\n\nIn this lesson, you'll learn to identify fallacious arguments from silence and recognize when absence of evidence is genuinely informative.",
            },
            {
                type: "content",
                title: "The Fallacy Version",
                content: "When silence proves nothing:\n\n**The Pattern:**\n'There's no evidence that X. Therefore, not-X.'\n'They didn't address Y. Therefore, Y is false.'\n\n**Examples:**\n'No one has proven aliens don't exist, so aliens exist.'\n'My opponent didn't respond to my third argument, so it must be valid.'\n'History doesn't record this event, so it never happened.'\n\n**Why It Fails:**\n• Absence of evidence ≠ evidence of absence (usually)\n• Silence can have many explanations: not knowing, not bothering, not considering relevant\n• You can't prove a negative by pointing to absence of positive\n\n**The Underlying Error:**\nConfusing 'not proven true' with 'proven false.'",
                keyPoints: [
                    "Absence of evidence ≠ evidence of absence (usually)",
                    "Silence has many possible explanations",
                    "Not proven true ≠ proven false",
                ],
            },
            {
                type: "question",
                id: "l20-02-q1",
                question: "'No one has ever documented this creature, so it doesn't exist.' Why might this reasoning be problematic?",
                options: [
                    { id: "a", text: "The creature definitely exists" },
                    { id: "b", text: "Documentation is irrelevant" },
                    { id: "c", text: "Absence of documentation could result from the creature being rare, elusive, or in unexplored areas—not necessarily non-existence" },
                    { id: "d", text: "The reasoning is sound" }
                ],
                correctAnswer: "c",
                explanation: "Lack of documentation could have many explanations beyond non-existence: the creature is rare, secretive, lives in unexplored areas, or hasn't been studied. Absence of evidence isn't automatically evidence of absence.",
            },
            {
                type: "content",
                title: "Silence in Different Contexts",
                content: "Context matters for interpreting silence:\n\n**Legal Context:**\nSilence may be protected (right against self-incrimination). Drawing conclusions from silence is restricted.\n\n**Scientific Context:**\nNull results (no effect found) are meaningful data when the experiment was well-designed to detect effects.\n\n**Historical Context:**\nSilence in historical records may reflect recording practices, not absence of events.\n\n**Debate Context:**\nDropped arguments may indicate inability to respond, strategic choice, or time pressure.\n\n**Personal Context:**\nSomeone not mentioning something doesn't mean they disagree—they may not have considered it relevant.\n\n**The Principle:**\nWhat would we expect if the claim were true? Context determines whether silence is informative.",
                keyPoints: [
                    "Context determines whether silence is meaningful",
                    "Scientific null results differ from simple absence",
                    "Consider recording practices and constraints",
                ],
            },
            {
                type: "content",
                title: "Strategic Use of Silence Arguments",
                content: "When to deploy:\n\n**Strongest Application:**\n• Opponent had clear opportunity to respond\n • The issue was important enough to require response\n• They chose not to address it\n\n**Framing:**\n'They spent three minutes and never touched my central argument. Their silence speaks volumes.'\n\n**Weakest Application:**\n• Time pressure was extreme\n• Many issues competed for attention\n• The point was minor\n\n**Responding:**\nIf accused of silence, explain: 'I prioritized [X] because [reason]. My not mentioning [Y] doesn't concede it.'\n\n**Prevention:**\nAddress key arguments even briefly to avoid silence accusations: 'Quickly on their third point...",
                keyPoints: [
                    "Deploy when opponent had opportunity and reason to respond",
                    "Frame strategically: 'Their silence speaks volumes'",
                    "Prevent by addressing key arguments at least briefly",
                ],
            },
            {
                type: "content",
                title: "When Silence Is Meaningful",
                content: "Sometimes absence is informative:\n\n**When We Would Expect Evidence:**\n'There's no evidence of major side effects after millions of doses.' If side effects existed at significant rates, we'd expect to see them in the data.\n\n**When Silence Is Unlikely:**\nIf something would definitely have been recorded and wasn't, absence is more informative.\n\n**In Debate (Dropped Arguments):**\nIf an opponent had time and reason to respond but didn't, their silence may indicate they couldn't. This is more legitimate.\n\n**Completed Investigation:**\nWhen thorough investigation has been done and found nothing, absence is more meaningful than before investigation.\n\n**The Test:**\n'If this were true, would we expect evidence by now?' If yes, absence of evidence becomes more significant.",
                keyPoints: [
                    "Silence is meaningful when evidence would be expected if the claim were true",
                    "Dropped arguments in debate may indicate inability to respond",
                    "Thorough investigation finding nothing is more meaningful",
                ],
            },
            {
                type: "content",
                title: "Using and Responding",
                content: "Strategic application:\n\n**Making Arguments from Silence (When Valid):**\n'My opponent had three minutes to respond to my third argument. They chose not to. This suggests they couldn't.'\n\n'After 50 years of research and millions of uses, no serious side effects have been documented. If they existed at meaningful rates, we'd know.'\n\n**Responding to Arguments from Silence:**\n'Absence of evidence doesn't prove absence. My not mentioning X doesn't mean X isn't true—only that I prioritized other issues.'\n\n'Lack of evidence may reflect insufficient investigation, not non-existence.'\n\n**Burden Clarity:**\n'The burden is on them to prove their claim, not on me to disprove it. My silence on their inadequately-supported assertion isn't concession.'",
                keyPoints: [
                    "Use when silence would be unlikely if claims were true",
                    "Respond by explaining why silence doesn't prove absence",
                    "Clarify burden: silence doesn't shift burden to you",
                ],
            },
            {
                type: "question",
                id: "l20-02-q2",
                question: "When is an argument from silence most legitimate in debate?",
                options: [
                    { id: "a", text: "Whenever opponents don't respond immediately" },
                    { id: "b", text: "When opponents had time and strategic reason to respond but didn't, suggesting they couldn't" },
                    { id: "c", text: "Any time evidence is missing" },
                    { id: "d", text: "Never—all arguments from silence are fallacious" }
                ],
                correctAnswer: "b",
                explanation: "In debate, silence is most meaningful when opponents had adequate time and clear strategic incentive to respond but chose not to. This suggests they couldn't effectively respond, not just that they forgot or prioritized differently.",
            },
            {
                type: "content",
                title: "Conclusion: Reading Silence",
                content: "Arguments from silence work when we would expect evidence if claims were true. In other contexts, absence proves little.\n\n**Key Takeaways:**\n• Absence of evidence usually ≠ evidence of absence\n• Silence is meaningful when evidence would be expected\n• Dropped debate arguments may legitimately indicate inability to respond\n• Completed thorough investigation makes absence more meaningful\n• Respond by explaining alternative reasons for silence\n• Burden doesn't shift just because you're silent\n\n**Looking Ahead:**\nIn the next lesson, we'll explore Opening Statements.\n\n**Practice Challenge:**\nFind an argument from silence in public discourse. Is it legitimate? Would we expect evidence if the claim were true?",
                keyPoints: [
                    "Silence is meaningful when evidence would be expected",
                    "In debate, strategic silence may indicate inability",
                    "Explain alternative reasons when responding to silence arguments",
                ],
            },
            {
                type: "content",
                title: "Shifting the Burden of Proof",
                content: "A related maneuver:\n\n**The Tactic:**\n'You haven't proven X is false, so it's true.'\n\n**The Error:**\nThis attempts to shift the burden. The person making the claim (Positive Assertion) has the burden to prove it. You don't have to disprove unproven claims.\n\n**Debate Defense:**\n'Cross-Apply Burden of Rejoinder: They must prove their claim first. My silence on an unproven assertion is not a concession; there was nothing to refute yet.'",
                keyPoints: [
                    "Burden represents who must prove what",
                    "Don't let opponents shift burden to you",
                    "You don't need to disprove unproven assertions",
                ],
            },
            {
                type: "content",
                title: "The 'Evidence of Absence' Threshold",
                content: "When does silence become evidence?\n\n**The Threshold:**\nWhen the search was:\n1. Capable of finding the evidence (right methods)\n2. Comprehensive enough (right scope)\n3. Conducted honestly\n\n**Application:**\n'We searched for WMDs for 10 years with full access (Criteria 1-3). We found none. This IS evidence of absence.' vs 'I looked in my pocket and didn't find my keys (Criteria 2 fail—they might be in the car).'",
                keyPoints: [
                    "Search capability determines valid inference",
                    "Comprehensiveness matters",
                    "Honest reporting is required",
                ],
            },
        ],
    },
    {
        lessonId: "l20-03",
        pages: [
            {
                type: "content",
                title: "Introduction: Opening Statements",
                content: "Opening statements set the stage for everything that follows. They establish your thesis, preview your arguments, and frame how the judge should understand the debate.\n\nA strong opening captures attention, provides clarity, and positions you advantageously. A weak opening loses the judge before you've even begun.\n\nIn this lesson, you'll learn to craft compelling opening statements that set you up for success.",
            },
            {
                type: "content",
                title: "Elements of Strong Openings",
                content: "What to include:\n\n**Hook:**\nCapture attention immediately. A compelling question, striking statistic, or vivid example draws the judge in.\n\n**Thesis:**\nState your central claim clearly. The judge should know exactly what you're arguing.\n\n**Roadmap:**\nPreview your arguments briefly. 'I'll prove this through three points: X, Y, and Z.'\n\n**Framework (if applicable):**\nEstablish how the debate should be evaluated. What criterion or standard applies?\n\n**Definitions (if contested):**\nClarify key terms if necessary. Don't waste time on uncontroversial definitions.\n\n**Tone:**\nConfident but not arrogant. Engaged and professional.\n\n**Length:**\nBrief enough to leave time for substantive arguments. Usually 30-60 seconds.",
                keyPoints: [
                    "Hook + thesis + roadmap forms a strong opening",
                    "Preview arguments briefly without developing them",
                    "Keep it brief—30-60 seconds maximum",
                ],
            },
            {
                type: "question",
                id: "l20-03-q1",
                question: "What's the primary purpose of a roadmap in an opening statement?",
                options: [
                    { id: "a", text: "To confuse opponents" },
                    { id: "b", text: "To fill time" },
                    { id: "c", text: "To preview your arguments so the judge knows what to expect and can organize their notes" },
                    { id: "d", text: "To state definitions" }
                ],
                correctAnswer: "c",
                explanation: "A roadmap helps judges organize their notes and know what to expect. 'I'll prove this through three points: economic harm, practical failure, and ethical problems' lets the judge prepare to track your development of each.",
            },
            {
                type: "content",
                title: "Hook Techniques",
                content: "Ways to capture attention immediately:\n\n**Striking Statistic:**\n'Every 30 seconds, [relevant event]. That's why we must act on [topic].'\n\n**Rhetorical Question:**\n'What would you do if [compelling scenario]? That's what's at stake in this debate.'\n\n**Vivid Example:**\nA brief, concrete story that illustrates your thesis.\n\n**Quotation:**\nFrom an expert, historical figure, or relevant source.\n\n**Contrast:**\n'While [current situation], [better alternative could be reality].'\n\n**Challenge:**\n'In the next few minutes, I'll show you why common wisdom on [topic] is wrong.'\n\n**Criteria for Good Hooks:**\n• Relevant to your thesis\n• Brief (10-15 seconds)\n• Attention-grabbing without being gimmicky",
                keyPoints: [
                    "Statistics, questions, examples, quotes all work",
                    "Hook must connect to your thesis",
                    "Brief and attention-grabbing, not gimmicky",
                ],
            },
            {
                type: "content",
                title: "Adapting Openings to Format",
                content: "Different formats have different needs:\n\n**Policy Debate:**\nMay need inherency/significance framing. Stock issues are relevant.\n\n**Lincoln-Douglas:**\nValue/criterion often appears in opening. Framework matters.\n\n**Public Forum:**\nAccessibility important. Avoid heavy jargon.\n\n**Individual Events:**\nInterp, oratory may have more creative openings.\n\n**Time Constraints:**\nShorter speeches need shorter openings. A 4-minute speech can't spend 2 minutes on introduction.\n\n**Judge Adaptation:**\nExperienced judges need less setup. Lay judges may need more context.\n\n**General Principle:**\nKnow your format's conventions, but don't sacrifice clarity for convention.",
                keyPoints: [
                    "Adapt to format conventions and expectations",
                    "Match opening length to speech length",
                    "Consider judge experience level",
                ],
            },
            {
                type: "content",
                title: "Common Opening Mistakes",
                content: "What to avoid:\n\n**Too Long:**\nSpending 2+ minutes on opening leaves too little time for substance.\n\n**No Thesis:**\nRambling without stating your central claim. Judges need to know what you're arguing for.\n\n**Boring:**\n'I stand before you today to discuss...' is generic. Make it interesting.\n\n**Overconfidence:**\n'I will utterly destroy their case' sounds unprofessional. Confidence is fine; arrogance isn't.\n\n**Irrelevant Material:**\nPersonal anecdotes, extensive background, or philosophical tangents that don't advance your case.\n\n**Definition Battles:**\nExtensive definitional arguments rarely win debates. Use only if genuinely contested.\n\n**Repeating the Resolution:**\nThe judge already knows the topic. State your position on it, not the topic itself.",
                keyPoints: [
                    "Don't spend too long—substance matters more",
                    "State a clear thesis; avoid rambling",
                    "Make it interesting, not generic or overconfident",
                ],
            },
            {
                type: "content",
                title: "Crafting Your Opening",
                content: "A formula for effective openings:\n\n**Step 1: Hook (10-15 seconds)**\nQuestion, statistic, example, or quotation that captures attention and relates to your thesis.\n\n**Step 2: Thesis (5-10 seconds)**\n'Today I'm argue that [clear position].'\n\n**Step 3: Roadmap (15-20 seconds)**\n'I'll support this with three arguments: first, [brief description]; second, [brief description]; third, [brief description].'\n\n**Step 4: Transition to First Argument**\n'Beginning with my first argument...'\n\n**Practice:**\nWrite out your opening and time it. Keep refining until it's punchy and efficient.\n\n**Flexibility:**\nTailor to the specific debate. Some topics need more setup; others are straightforward.",
                keyPoints: [
                    "Hook (10-15s) + Thesis (5-10s) + Roadmap (15-20s)",
                    "Practice and time your opening",
                    "Transition smoothly to first substantive argument",
                ],
            },
            {
                type: "question",
                id: "l20-03-q2",
                question: "How long should a typical opening statement be?",
                options: [
                    { id: "a", text: "30-60 seconds—enough to hook, state thesis, and preview arguments" },
                    { id: "b", text: "3-5 minutes—cover everything thoroughly" },
                    { id: "c", text: "5-10 seconds—just state your position" },
                    { id: "d", text: "It doesn't matter" }
                ],
                correctAnswer: "a",
                explanation: "30-60 seconds is ideal for most openings. This provides enough time for a hook, clear thesis, and roadmap without cutting into substantive argument time. The bulk of your speech should develop your arguments, not introduce them.",
            },
            {
                type: "content",
                title: "Conclusion: Starting Strong",
                content: "Opening statements frame the debate and set up your success. Invest in crafting compelling, efficient openings.\n\n**Key Takeaways:**\n• Hook + thesis + roadmap forms a strong opening\n• 30-60 seconds is typical length\n• State your thesis clearly—the judge should know your position\n• Preview arguments without developing them\n• Avoid being too long, boring, or overconfident\n• Practice and time your openings\n\n**Looking Ahead:**\nIn the next lesson, we'll explore Organizing Refutation.\n\n**Practice Challenge:**\nWrite opening statements for three different debate topics. Time each. Get feedback on clarity and engagement.",
                keyPoints: [
                    "Strong openings frame the debate advantageously",
                    "Hook + thesis + roadmap formula works",
                    "Brevity and clarity beat length",
                ],
            },
            {
                type: "content",
                title: "Memorization vs. Extemporaneous",
                content: "Delivery styles for openings:\n\n**Memorized:**\nHigh polish, perfect eye contact. Risk: forgetting and freezing. Best for the Hook and Thesis.\n\n**Extemporaneous:**\nOutline-based, natural. Risk: rambling. Best for Roadmap and transitions.\n\n**Hybrid:**\nMemorize your first 30 seconds (Hook/Thesis) to establish command. Use notes for the specific roadmap. This balances polish with safety.",
                keyPoints: [
                    "Memorized hooks build immediate connection",
                    "Extemporaneous roadmaps allow flexibility",
                    "Hybrid approach is often safest",
                ],
            },
            {
                type: "content",
                title: "Rhetorical Devices in Openings",
                content: "Spicing up the language:\n\n**Anaphora:**\nRepeating a start phrase. 'We fight for justice. We fight for truth. We fight for [Topic].'\n\n**Triad:**\nRule of three. 'Safe, legal, and rare.' 'Liberty, Equality, Fraternity.'\n\n**Antithesis:**\nContrasting ideas. 'Ask not what your country can do for you; ask what you can do for your country.'\n\n**Use Sparingly:**\nOne device is powerful. Three is a sermon.",
                keyPoints: [
                    "Rhetorical devices make openings memorable",
                    "Anaphora and Triads are common",
                    "Don't overuse—style supports substance",
                ],
            },
        ],
    },
    {
        lessonId: "l20-04",
        pages: [
            {
                type: "content",
                title: "Introduction: Organizing Refutation",
                content: "How you organize your refutation affects its persuasiveness and clarity. Random responses are harder to follow than structured ones.\n\nEffective refutation organization helps judges track your responses, ensures comprehensive coverage, and makes your case seem more coherent.\n\nIn this lesson, you'll learn organizational structures for refutation speeches.",
            },
            {
                type: "content",
                title: "Organizational Approaches",
                content: "Common structures for refutation:\n\n**Line-by-Line:**\nAddress each opponent argument in order. Clear and comprehensive.\n\n**Thematic Grouping:**\nGroup related arguments and respond to themes. Efficient for related points.\n\n**Priority-Based:**\nStart with most important issues, then work down. Ensures key issues get attention.\n\n**On-Case/Off-Case:**\nSeparate responses to their constructive from responses to their attacks on yours.\n\n**Mixed:**\nCombine approaches as needed. Some arguments line-by-line, some grouped.\n\n**Strategic Order:**\nEnd with your strongest point for maximum impact (recency effect).",
                keyPoints: [
                    "Line-by-line: comprehensive and clear",
                    "Thematic: efficient for related arguments",
                    "Priority-based: ensures key issues get time",
                ],
            },
            {
                type: "question",
                id: "l20-04-q1",
                question: "What's the main advantage of thematic grouping over line-by-line refutation?",
                options: [
                    { id: "a", text: "It's longer" },
                    { id: "b", text: "Judges prefer it" },
                    { id: "c", text: "It avoids responding to arguments" },
                    { id: "d", text: "One response can address multiple related arguments efficiently" }
                ],
                correctAnswer: "d",
                explanation: "Thematic grouping allows one response to address multiple related arguments. If three opponent arguments share a common flaw, addressing the flaw once is more efficient than responding to each separately.",
            },
            {
                type: "content",
                title: "Building Case Flow",
                content: "Organize information for strategic response:\n\n**Flow Sheet Basics:**\n•Column for each speech\n• Arguments tracked across columns\n• Responses linked to what they answer\n\n**Organization Tips:**\n• Use abbreviations consistently\n• Note source names, not full citations\n• Track what's been addressed vs. dropped\n• Mark important arguments\n\n**Pre-Round Prep:**\n• Anticipate likely arguments\n• Have responses ready\n• Know where they fit in your structure\n\n**Mid-Round:**\n• Update flow constantly\n• Plan organization during prep time\n• Decide structure before speaking\n\n**The Benefit:**\nGood flow = comprehensive, organized refutation.",
                keyPoints: [
                    "Flow sheets track arguments across speeches",
                    "Use abbreviations and mark importance",
                    "Plan organization during prep time",
                ],
            },
            {
                type: "content",
                title: "Time Allocation in Refutation",
                content: "Distribute time strategically:\n\n**General Rule:**\nSpend time proportional to argument importance.\n\n**Avoid:**\n• Spending 2 minutes on minor points\n• Rushing through central arguments\n• Running out of time before key issues\n\n**Planning:**\n• Before speaking, estimate time per section\n• Watch the clock during speech\n• Have 'quick versions' ready if time runs short\n\n**Priority Triage:**\nIf time is limited:\n1. Must-address: central arguments\n2. Should-address: significant supporting points\n3. Nice-to-address: minor points\n\n**The Skill:**\nKnowing what to cut when time is short. Better to address three arguments fully than five arguments poorly.",
                keyPoints: [
                    "Time proportional to importance",
                    "Plan time allocations before speaking",
                    "Know what to cut when time is short",
                ],
            },
            {
                type: "content",
                title: "Signposting Refutation",
                content: "Make your organization clear:\n\n**Announce Structure:**\n'I'll start with responses to their main contentions, then address their attacks on our case.'\n\n**Number Clearly:**\n'On their first argument... On their second argument...'\n\n**Group Transparently:**\n'Their next three arguments share a common problem. I'll address them together.'\n\n**Priority Markers:**\n'The most important issue in this debate is... Let me address that first.'\n\n**Transition Explicitly:**\n'Moving now from their case to our defense...'\n\n**Recap:**\nBriefly summarize what you've covered before crystallizing.",
                keyPoints: [
                    "Announce your organizational structure upfront",
                    "Number and label responses clearly",
                    "Use transitions to signal movement between sections",
                ],
            },
            {
                type: "content",
                title: "Strategic Considerations",
                content: "Choose organization strategically:\n\n**Judge Preferences:**\nSome judges expect line-by-line. Know your audience.\n\n**Argument Relationships:**\nIf arguments are genuinely related, grouping makes sense. If distinct, line-by-line is clearer.\n\n**Time Available:**\nLimited time may require prioritization. Full time may allow comprehensive coverage.\n\n**Your Strengths:**\nPut your best responses where they'll have most impact.\n\n**Their Weaknesses:**\nAddress their weakest arguments quickly; spend time where their arguments are stronger.\n\n**Final Speech Needs:**\nRebuttals often benefit from prioritization and crystallization over comprehensive response.",
                keyPoints: [
                    "Match organization to judge preferences and argument structure",
                    "Consider time constraints and strategic priorities",
                    "Later speeches may need more focused organization",
                ],
            },
            {
                type: "question",
                id: "l20-04-q2",
                question: "In a final rebuttal with limited time, which organizational approach often works best?",
                options: [
                    { id: "a", text: "Complete line-by-line of every argument" },
                    { id: "b", text: "Priority-based: focus on the most important issues and crystallize" },
                    { id: "c", text: "Random order" },
                    { id: "d", text: "Alphabetical by topic" }
                ],
                correctAnswer: "b",
                explanation: "Final rebuttals with limited time benefit from priority-based organization. Focus on the key issues that determine the debate, crystallize why you win there, and don't waste time on minor points.",
            },
            {
                type: "content",
                title: "Conclusion: Structured Response",
                content: "Good refutation organization makes your responses clear, efficient, and persuasive. Choose structure based on the situation.\n\n**Key Takeaways:**\n• Organization options: line-by-line, thematic, priority-based, mixed\n• Announce your structure upfront\n• Number and label responses clearly\n• Use transitions to signal movement\n• Match organization to judge preferences and time constraints\n• Final speeches often benefit from prioritization\n\n**Looking Ahead:**\nIn the next lesson, we'll explore Affirming the Consequent.\n\n**Practice Challenge:**\nTake a sample opponent case and organize your refutation three different ways. Which works best for that case?",
                keyPoints: [
                    "Choose organization based on arguments and constraints",
                    "Clear signposting helps judges track responses",
                    "Strategic organization maximizes impact",
                ],
            },
            {
                type: "content",
                title: "The 'Block' Strategy",
                content: "Pre-written refutation chunks:\n\n**Definition:**\nA 'Block' is a prepared set of responses to a common argument.\n\n**Organization:**\nInstead of thinking on the fly, you read your 'Economy Block' which contains 4 numbered responses.\n\n**Integration:**\n'On their Economy point, apply my Consumption Block.' (Then read it).\n\n**Benefit:**\nPerfect organization, verified evidence, optimal time usage. All top debaters use blocks.",
                keyPoints: [
                    "Blocks are pre-written response sets",
                    "They ensure consistent quality and time management",
                    "Don't just read—adapt the block to the specific round",
                ],
            },
            {
                type: "content",
                title: "Split Decisions",
                content: "Handling complex flows:\n\n**The Situation:**\nOpponent groups 3 arguments. You want to answer 2 together and 1 separately.\n\n**Signposting:**\n'They grouped X, Y, and Z. I will address X and Y together as 'Implementation Issues', but Z requires a specific response.'\n\n**Why:**\nDon't let their bad grouping force you to give bad answers. Re-group as needed for your strategy.",
                keyPoints: [
                    "You control the organization, not the opponent",
                    "Re-group arguments if their grouping obscures the issues",
                    "Signpost your re-grouping clearly",
                ],
            },
        ],
    },
    {
        lessonId: "l20-05",
        pages: [
            {
                type: "content",
                title: "Introduction: Affirming the Consequent",
                content: "Affirming the consequent is a formal logical fallacy that confuses necessary and sufficient conditions. 'If A, then B. B is true. Therefore, A is true.' But B could have causes other than A.\n\nThis fallacy commonly appears in causal reasoning and evidence interpretation. Understanding it helps you identify flawed logic.\n\nIn this lesson, you'll learn to recognize and challenge this fallacy, and ensure your own reasoning doesn't commit it.",
            },
            {
                type: "content",
                title: "The Logical Structure",
                content: "Understanding the error:\n\n**Valid Form (Modus Ponens):**\n1. If A, then B.\n2. A is true.\n3. Therefore, B is true.\n\nThis is valid. If the premises are true, the conclusion must be true.\n\n**Invalid Form (Affirming the Consequent):**\n1. If A, then B.\n2. B is true.\n3. Therefore, A is true.\n\nThis is invalid. B could be true for reasons other than A.\n\n**Example:**\n'If it's raining, the ground is wet. The ground is wet. Therefore, it's raining.'\nInvalid! The ground could be wet from sprinklers, flood, spilled water, etc.\n\n**The Core Error:**\nAssuming the consequent (B) can only have one cause (A), when multiple causes are possible.",
                keyPoints: [
                    "Affirming the consequent confuses sufficient with necessary conditions",
                    "If A→B and B, you can't conclude A without eliminating other causes of B",
                    "The conclusion could be true, but isn't proven",
                ],
            },
            {
                type: "question",
                id: "l20-05-q1",
                question: "'If this policy was implemented, poverty would decrease. Poverty decreased. Therefore, the policy was implemented.' This commits what fallacy?",
                options: [
                    { id: "a", text: "No fallacy" },
                    { id: "b", text: "Straw man" },
                    { id: "c", text: "Affirming the consequent—poverty could have decreased for other reasons" },
                    { id: "d", text: "Ad hominem" }
                ],
                correctAnswer: "c",
                explanation: "This affirms the consequent. Poverty decreasing doesn't prove the policy was implemented—poverty could decrease for many other reasons (economic growth, other policies, demographic changes). The argument structure is invalid.",
            },
            {
                type: "content",
                title: "Related Logical Errors",
                content: "Distinguish similar fallacies:\n\n**Affirming the Consequent:**\nIf A→B. B. Therefore A.\n'If policy works, poverty drops. Poverty dropped. Policy worked.'\n\n**Denying the Antecedent (Also Invalid):**\nIf A→B. Not A. Therefore not B.\n'If policy is implemented, poverty drops. Policy not implemented. Poverty won't drop.'\n(Poverty could drop for other reasons)\n\n**Post Hoc Ergo Propter Hoc:**\n'B happened after A, so A caused B.'\n(Related causal fallacy)\n\n**Correlation ≠ Causation:**\nA and B occur together, so one causes the other.\n(Could be coincidence, third factor, or reverse causation)\n\n**The Common Thread:**\nAll confuse correlation, sequence, or prediction with causation.",
                keyPoints: [
                    "Affirming consequent and denying antecedent are both invalid",
                    "Post hoc and correlation fallacies are related errors",
                    "All confuse association with causation",
                ],
            },
            {
                type: "content",
                title: "Strengthening Causal Arguments",
                content: "Make causal reasoning valid:\n\n**Control for Alternatives:**\nShow that other explanations don't apply.\n\n**Mechanism:**\nExplain how the cause produces the effect.\n\n**Timing:**\nShow cause preceded effect (necessary but not sufficient).\n\n**Dose-Response:**\nMore cause = more effect supports causation.\n\n**Counterfactual:**\n'Without this cause, the effect wouldn't have occurred.'\n\n**Comparative Cases:**\nSimilar situations without the cause didn't see the effect.\n\n**Converging Evidence:**\nMultiple lines of evidence pointing to the same cause.\n\n**Honest Limitations:**\n'This evidence supports causation, though we can't rule out [X]' is better than overclaiming.",
                keyPoints: [
                    "Control for alternatives and explain mechanism",
                    "Dose-response and counterfactual reasoning help",
                    "Acknowledge limitations honestly",
                ],
            },
            {
                type: "content",
                title: "How It Appears in Debate",
                content: "Common manifestations:\n\n**Causal Claims:**\n'If our policy works, outcome X will occur. Outcome X occurred. Our policy worked!'\n(X could have other causes)\n\n**Evidence Interpretation:**\n'If our theory is true, we'd see pattern Y. We see pattern Y. Our theory is proven!'\n(Other theories could also predict Y)\n\n**Historical Arguments:**\n'If this factor caused the event, we'd expect these consequences. We see those consequences. The factor caused the event.'\n(Other factors could produce the same consequences)\n\n**The Fix:**\nYou need to eliminate alternative explanations or argue that A is the most likely explanation for B—merely showing B isn't enough.",
                keyPoints: [
                    "Appears in causal, interpretive, and historical arguments",
                    "Proving the outcome occurred doesn't prove your cause",
                    "Fix: eliminate alternatives or argue your explanation is most likely",
                ],
            },
            {
                type: "content",
                title: "Responding to and Avoiding the Fallacy",
                content: "How to challenge and prevent:\n\n**Challenging:**\n'They've shown outcome B occurred. But B has multiple possible causes. They've affirmed the consequent without eliminating alternatives.'\n\n'They claim X caused Y because Y happened. But Y would also occur if Z were the cause. They haven't distinguished between X and Z.'\n\n**Avoiding in Your Arguments:**\n• Don't just show outcome occurred—show your cause is responsible\n• Eliminate alternative explanations\n• Use controlled comparisons where possible\n• Be honest about uncertainty: 'This is consistent with our theory, though we can't rule out...'\n\n**Strengthening:**\nArgue that alternative explanations are implausible, not just that your explanation is possible.",
                keyPoints: [
                    "Challenge by pointing out alternative causes",
                    "Distinguish your cause from other possibilities",
                    "Honest acknowledgment of uncertainty is better than invalid logic",
                ],
            },
            {
                type: "question",
                id: "l20-05-q2",
                question: "How can you avoid committing affirming the consequent in your own arguments?",
                options: [
                    { id: "a", text: "Never make causal arguments" },
                    { id: "b", text: "Just show the outcome occurred" },
                    { id: "c", text: "When claiming your cause explains an outcome, address and eliminate alternative explanations" },
                    { id: "d", text: "Ignore the logical structure" }
                ],
                correctAnswer: "c",
                explanation: "Avoid the fallacy by addressing alternatives. Don't just show the outcome matches your prediction—show your cause is more likely than alternatives. Acknowledge uncertainty when you can't fully eliminate other explanations.",
            },
            {
                type: "content",
                title: "Conclusion: Valid Causal Reasoning",
                content: "Affirming the consequent is a common logical error in causal reasoning. Recognizing it helps you challenge flawed arguments and strengthen your own.\n\n**Key Takeaways:**\n• Affirming the consequent: If A→B and B, you can't conclude A\n• Multiple causes can produce the same effect\n• The fallacy is common in causal and interpretive arguments\n• Challenge by pointing out alternative explanations\n• Avoid by addressing and eliminating alternatives\n• Honest uncertainty is better than invalid logic\n\n**Looking Ahead:**\nIn the next lesson, we'll explore Writing Thesis Statements.\n\n**Practice Challenge:**\nFind an argument that commits affirming the consequent. What alternative explanations exist? How could the argument be strengthened?",
                keyPoints: [
                    "Showing the effect doesn't prove your cause",
                    "Eliminate alternatives to strengthen causal claims",
                    "Valid reasoning requires more than matching predictions",
                ],
            },
            {
                type: "content",
                title: "Necessary vs. Sufficient",
                content: "The core logical distinction:\n\n**Necessary:**\nMust be present for effect. (Fuel is necessary for fire).\n\n**Sufficient:**\nEnough on its own to produce effect. (Decapitation is sufficient for death, but not necessary—other things kill too).\n\n**The Fallacy Source:**\nAffirming the Consequent treats a Sufficient condition as a Necessary one.\n'If X (Sufficient), then Y. Y. Therefore X.' (Ignoring that Z is also Sufficient).",
                keyPoints: [
                    "Distinguish necessary from sufficient causes",
                    "Many things can be sufficient for one outcome",
                    "Logic requires identifying which type of condition you have",
                ],
            },
            {
                type: "content",
                title: "Probabilistic Causation",
                content: "Real world nuance:\n\n**Absolute Logic:**\nIf A, then B. (Rare in social science).\n\n**Probabilistic Logic:**\nA increases the probability of B.\n\n**Debate Use:**\n'We don't claim Policy A *guarantees* Outcome B (which would be affirming the consequent). We claim it *increases the likelihood* significantly based on [Mechanism].'\n\n**Defense:**\nSoftening claims from 'Always' to 'Likely' avoids many logical traps.",
                keyPoints: [
                    "Social science is usually probabilistic, not absolute",
                    "Nuanced claims are harder to disprove",
                    "Shift from 'Causes' to 'Increases risk/likelihood'",
                ],
            },
        ],
    },
    {
        lessonId: "l20-06",
        pages: [
            {
                type: "content",
                title: "Introduction: Writing Thesis Statements",
                content: "Your thesis statement is the core claim of your case—everything else supports or elaborates it. A clear, strong thesis focuses your entire argument and helps judges understand your position.\n\nWeak thesis statements leave judges unclear about what you're actually arguing. Strong ones provide clarity that runs through your entire case.\n\nIn this lesson, you'll learn to craft effective thesis statements that anchor your arguments.",
            },
            {
                type: "content",
                title: "Elements of Strong Thesis Statements",
                content: "What makes a thesis work:\n\n**Clear:**\nJudges should understand exactly what you're claiming. No ambiguity.\n\n**Specific:**\nDefine your position precisely. 'This policy is bad' is weak. 'This policy increases inequality without achieving its goals' is better.\n\n**Arguable:**\nA thesis should be something that can be debated. 'Murder is wrong' isn't debatable. 'The death penalty should be abolished' is.\n\n**Unified:**\nOne central claim your whole case supports. Multiple theses dilute focus.\n\n**Positioned:**\nMake clear what side you're on and what you need to prove.\n\n**Proportional:**\nMatch claim size to what you can support. Don't claim more than you can prove.",
                keyPoints: [
                    "Clear and specific—no ambiguity about your position",
                    "Arguable—something that can be debated",
                    "Unified and proportional—one claim you can support",
                ],
            },
            {
                type: "question",
                id: "l20-06-q1",
                question: "Which is a stronger thesis statement?",
                options: [
                    { id: "a", text: "'This policy increases costs while failing to achieve its stated goals, making it net harmful.'" },
                    { id: "b", text: "'I will discuss this policy.'" },
                    { id: "c", text: "'This policy is problematic.'" },
                    { id: "d", text: "'Some people disagree about this policy.'" }
                ],
                correctAnswer: "a",
                explanation: "Option B is strongest because it's specific (identifies what's problematic), arguable (claims net harm), and clear (states exactly what you'll prove). The others are vague or not argumentative.",
            },
            {
                type: "content",
                title: "Crafting Your Thesis",
                content: "A process for thesis development:\n\n**Step 1: Identify Your Position**\nWhat side are you on? What outcome do you want the judge to reach?\n\n**Step 2: State the Core Claim**\n'X should be adopted because...' or 'X is harmful because...'\n\n**Step 3: Add Specificity**\nWhat exactly makes X good/bad? Which specific effects matter?\n\n**Step 4: Test for Clarity**\nCould someone misunderstand your position? Refine until crystal clear.\n\n**Step 5: Check Scope**\nAre you claiming more than you can prove? Narrow if necessary.\n\n**Step 6: Connect to Arguments**\nEach argument should clearly support this thesis. If an argument doesn't connect, reconsider.\n\n**Common Forms:**\n'[Position] because [reasons]'\n'[Policy] should be adopted because it achieves [goals] without [harms]'\n'[Policy] should be rejected because [costs] outweigh [benefits]'",
                keyPoints: [
                    "Start with your position, then add specificity",
                    "Test for clarity and scope",
                    "Every argument should connect to your thesis",
                ],
            },
            {
                type: "content",
                title: "Common Thesis Mistakes",
                content: "Avoid these errors:\n\n**Too Vague:**\n'This issue is important' — doesn't state a position.\n\n**Too Broad:**\n'Everything about this system is wrong' — can't possibly prove everything.\n\n**Not Arguable:**\n'Helping people is good' — not contestable.\n\n**Multiple Claims:**\n'This policy is economically beneficial, environmentally harmful, and politically contentious' — which matters most?\n\n**Announcing Rather Than Claiming:**\n'I will talk about healthcare' — that's a topic, not a thesis.\n\n**Mismatched to Arguments:**\nThesis claims X, but arguments prove Y.\n\n**Overstated:**\n'This will definitely solve all problems' — can't prove 'definitely' or 'all.'",
                keyPoints: [
                    "Avoid vague, broad, or non-arguable statements",
                    "One unified claim, not multiple competing claims",
                    "Match your thesis to what you can actually prove",
                ],
            },
            {
                type: "question",
                id: "l20-06-q2",
                question: "Why should you avoid overstating your thesis (claiming more than you can prove)?",
                options: [
                    { id: "a", text: "Judges prefer modest claims" },
                    { id: "b", text: "It takes up too much time" },
                    { id: "c", text: "Overstatement is never a problem" },
                    { id: "d", text: "If you can't prove what you've claimed, you lose; a proportional claim is easier to support" }
                ],
                correctAnswer: "d",
                explanation: "Overstated theses set yourself up for failure. Claiming 'This will definitely solve all problems' requires proving certainty and comprehensiveness. A proportional claim—'This will significantly reduce the problem'—is easier to support.",
            },
            {
                type: "content",
                title: "Conclusion: Anchoring Your Case",
                content: "Your thesis statement anchors your entire case. A clear, specific, proportional thesis makes every argument more effective.\n\n**Key Takeaways:**\n• Strong theses are clear, specific, arguable, and unified\n• Match scope to what you can prove\n• Every argument should connect to your thesis\n• Avoid vague, broad, or overstated claims\n• Refine until crystal clear\n• The thesis appears in your opening and guides your case\n\n**Looking Ahead:**\nIn the next lesson, we'll review Unit 20 and conclude Section 2.\n\n**Practice Challenge:**\nWrite thesis statements for three debate topics. Have someone else read them and tell you what they think you're arguing. If they're confused, refine.",
                keyPoints: [
                    "Clear thesis anchors and unifies your case",
                    "Proportional claims are easier to prove",
                    "Test for clarity and connection to arguments",
                ],
            },
            {
                type: "content",
                title: "Iterative Refinement",
                content: "Thesis isn't static:\n\n**Draft 1:**\n'Social media is bad.' (Too broad).\n\n**Draft 2:**\n'Social media harms democracy.' (Better, still vague).\n\n**Draft 3:**\n'Algorithmic curation on social media creates polarization that undermines democratic consensus-building.' (Specific, arguable, causal).\n\n**The Process:**\nDon't settle for Draft 1. Ask 'How?' and 'Why?' until you reach Draft 3.",
                keyPoints: [
                    "Move from broad topics to specific mechanisms",
                    "Ask 'How' and 'Why' to deepen the thesis",
                    "Specific theses permit specific evidence",
                ],
            },
            {
                type: "content",
                title: "Scope Management",
                content: "The Goldilocks Logic:\n\n**Too Small:**\n'This policy helps 5 people.' (Who cares?)\n\n**Too Big:**\n'This policy saves the universe.' (Impossible to prove).\n\n**Just Right:**\n'This policy substantially improves the lives of millions in [Target Group].'\n\n**Debate Limit:**\nDebaters often lose by defending 'All' when they only needed 'Most' or 'Some'.\n'All cops are bad' (Lose).\n'Systemic incentives encourage bad policing' (Win).",
                keyPoints: [
                    "Don't defend 'All' when 'Most' suffices",
                    "Scope determines your burden of proof",
                    "Defend the defensible ground",
                ],
            },
        ],
    },
    {
        lessonId: "l20-07",
        pages: [
            {
                type: "content",
                title: "Introduction: Unit 20 and Section 2 Review",
                content: "Congratulations on completing Unit 20 and the entire Intermediate Section!\n\nThis unit covered final logic skills and debate mechanics. In this lesson, we'll review Unit 20 concepts and reflect on your growth throughout Section 2.",
            },
            {
                type: "content",
                title: "Review: Logic and Arguments",
                content: "**Common Refutation Mistakes:**\n• Straw man, missing the heart, bare assertion, dropping\n• Flow carefully; address cores; support refutations\n• Strategic concession differs from negligent dropping\n\n**Argument from Silence:**\n• Absence of evidence ≠ evidence of absence (usually)\n• Meaningful when evidence would be expected\n• Dropped debate arguments may indicate inability\n\n**Affirming the Consequent:**\n• If A→B and B, you can't conclude A\n• Multiple causes can produce the same effect\n• Eliminate alternatives to strengthen causal claims",
                keyPoints: [
                    "Avoid common refutation errors",
                    "Silence is meaningful when evidence is expected",
                    "Valid causal reasoning eliminates alternatives",
                ],
            },
            {
                type: "content",
                title: "Review: Speech Structure",
                content: "**Opening Statements:**\n• Hook + thesis + roadmap (30-60 seconds)\n• State position clearly; preview arguments\n• Avoid being too long, generic, or overconfident\n\n**Organizing Refutation:**\n• Options: line-by-line, thematic, priority-based\n• Signpost clearly; announce structure\n• Match to judge preferences and time constraints\n\n**Thesis Statements:**\n• Clear, specific, arguable, unified\n• Proportional to what you can prove\n• Every argument connects to thesis",
                keyPoints: [
                    "Strong openings set up success",
                    "Match refutation organization to the situation",
                    "Clear thesis anchors your entire case",
                ],
            },
            {
                type: "question",
                id: "l20-07-q1",
                question: "Someone argues 'The policy caused the improvement because the improvement happened after implementation.' What logical concern exists?",
                options: [
                    { id: "a", text: "No concern—causation is established" },
                    { id: "b", text: "Post hoc reasoning; the improvement could have other causes besides the policy" },
                    { id: "c", text: "Timing is always sufficient" },
                    { id: "d", text: "The policy definitely worked" }
                ],
                correctAnswer: "b",
                explanation: "This is post hoc reasoning (related to affirming the consequent). Just because improvement followed implementation doesn't prove causation. Other factors could explain the improvement. Alternative explanations need to be addressed.",
            },
            {
                type: "content",
                title: "Your Section 2 Toolkit",
                content: "Skills you've developed:\n\n**Fallacy Recognition:**\n20+ fallacy types with detection and response strategies.\n\n**Refutation Techniques:**\nDenial, turns, minimization, outweighing, preemption, warrant attacks, source criticism.\n\n**Strategic Skills:**\nGrouping, prioritization, crystallization, burden management, time allocation.\n\n**Speech Construction:**\nOpening statements, thesis development, signposting, transitions, organization.\n\n**Evidence Evaluation:**\nMisinformation detection, source verification, context checking.\n\n**Adaptability:**\nMatching technique to situation, judge adaptation, format awareness.\n\n**The Integration:**\nThese skills work together. Strong debaters deploy them seamlessly.",
                keyPoints: [
                    "Comprehensive fallacy and refutation toolkit",
                    "Strategic and structural skills for organization",
                    "Skills integrate for effective debate",
                ],
            },
            {
                type: "content",
                title: "Preparing for Section 3",
                content: "What comes next:\n\n**Section 3: Advanced**\nTournament-level skills, advanced case construction, judge theory, and preparation strategies.\n\n**Building on Section 2:**\nAdvanced skills assume mastery of intermediate concepts. Review any areas you're uncertain about.\n\n**Practice Recommendations:**\n• Participate in practice debates applying Section 2 skills\n• Record yourself and review for skill application\n• Watch experienced debaters and identify techniques\n• Get feedback from coaches or experienced debaters\n\n**Mindset:**\nYou've built substantial skills. Section 3 will refine and advance them.\n\n**Continuous Learning:**\nDebate skill development is ongoing. Even after Section 3, you'll continue growing through competition and practice.",
                keyPoints: [
                    "Section 3 builds on intermediate foundation",
                    "Practice applying Section 2 skills before advancing",
                    "Continuous learning through competition and review",
                ],
            },
            {
                type: "question",
                id: "l20-07-q2",
                question: "Throughout Section 2, what's been the overarching theme?",
                options: [
                    { id: "a", text: "Advanced fallacies, sophisticated refutation techniques, and strategic debate execution" },
                    { id: "b", text: "Basic definitions and getting started" },
                    { id: "c", text: "Only evidence and sources" },
                    { id: "d", text: "Memorizing rules" }
                ],
                correctAnswer: "a",
                explanation: "Section 2 (Intermediate) built on beginner skills with advanced fallacy recognition, sophisticated refutation techniques (turns, minimization, preemption), and strategic execution (organization, prioritization, crystallization).",
            },
            {
                type: "content",
                title: "Section 2 Accomplishments",
                content: "What you've learned in the Intermediate Section:\n\n**Advanced Fallacy Recognition:**\nGenetic, anecdotal, bandwagon, sunk cost, gambler's, ecological, nirvana, affirming the consequent, and many more.\n\n**Sophisticated Refutation:**\nTurns, minimization, outweighing, preemption, warrant attacks, source criticism, comparative refutation.\n\n**Evidence and Research:**\nMisinformation detection, cherry-picking, out-of-context quotes, verification strategies.\n\n**Strategic Execution:**\nGrouping, line-by-line, crystallization, prioritization, burden management, signposting, transitions.\n\n**Speech Construction:**\nOpening statements, thesis development, multi-point cases, refutation organization.\n\nYou now have a comprehensive toolkit for intermediate-level competitive debate!",
                keyPoints: [
                    "Advanced fallacy recognition across many types",
                    "Sophisticated refutation techniques beyond simple denial",
                    "Strategic execution for competitive success",
                ],
            },
            {
                type: "content",
                title: "Conclusion: Ready for Advanced Skills",
                content: "You've completed the Intermediate Section! You now possess substantial debate skills covering fallacy recognition, refutation techniques, and strategic execution.\n\n**Key Takeaways:**\n• Section 2 built advanced skills on beginner foundations\n• Fallacy recognition: 20+ fallacies and how to challenge them\n• Sophisticated refutation: multiple techniques for different situations\n• Strategic execution: how to organize and prioritize effectively\n• Speech construction: openings, thesis statements, organization\n• You're prepared for advanced competition and continued learning\n\n**What's Next:**\nSection 3 (Advanced) will cover tournament-level skills, judge theory, advanced case construction, and preparation strategies. You're well-prepared to begin!\n\n**Final Challenge:**\nDebate a topic using skills from across Section 2. Try to incorporate fallacy identification, sophisticated refutation, strategic prioritization, and clear crystallization in one round.",
                keyPoints: [
                    "Intermediate skills provide strong competitive foundation",
                    "You've built a comprehensive toolkit",
                    "Ready for advanced-level skills and competition",
                ],
            },
        ],
    },
];
