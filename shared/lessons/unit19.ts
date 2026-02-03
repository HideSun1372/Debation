import { MultiPageLesson } from "./types";

// Unit 19: Application
// Topics: Special Pleading, When to Use Each Refutation Type, Making Arguments flow (Signposting), Combining Refutation Strategies, Burden of Proof Reversal, Transitions

export const UNIT_19_LESSONS: MultiPageLesson[] = [
    {
        lessonId: "l19-01",
        pages: [
            {
                type: "content",
                title: "Introduction: Special Pleading",
                content: "Special pleading claims an exception to a rule or standard without justifying why the exception should apply. 'The rule applies to everyone else, but not to me/my case, for reasons I won't explain.'\n\nThis fallacy appears when people apply standards inconsistently—demanding others meet criteria they exempt themselves from.\n\nIn this lesson, you'll learn to identify special pleading and demand consistent application of standards.",
            },
            {
                type: "content",
                title: "Understanding the Fallacy",
                content: "Unjustified exceptions:\n\n**The Pattern:**\n'This principle applies generally, but my case is different.' [No explanation of why.]\n\n**Examples:**\n'Violence is wrong, but our violence is justified.' [Without further justification]\n'That argument is fallacious when they use it, but acceptable when we use it.'\n'This evidence would be dismissed if they cited it, but it counts when we cite it.'\n\n**Why It Fails:**\nEither the principle applies universally, or there's a relevant distinction. If you're claiming an exception, you must explain what makes your case different.\n\n**The Test:**\n'What makes this case different from others where the rule applies?' If there's no good answer, it's special pleading.\n\n**Legitimate Exceptions:**\nExceptions with reasons aren't special pleading. 'Self-defense differs from aggression because...' provides the relevant distinction.",
                keyPoints: [
                    "Claims exception to rule without justifying the difference",
                    "Either the principle is universal or there's a relevant distinction",
                    "Legitimate exceptions explain what makes the case different",
                ],
            },
            {
                type: "question",
                id: "l19-01-q1",
                question: "'Nepotism is wrong, but hiring my nephew is fine.' This is special pleading because:",
                options: [
                    { id: "a", text: "Hiring relatives is always wrong" },
                    { id: "b", text: "The speaker claims exemption from anti-nepotism principles without explaining what makes their case different" },
                    { id: "c", text: "The nephew isn't qualified" },
                    { id: "d", text: "It's not special pleading" }
                ],
                correctAnswer: "b",
                explanation: "This is special pleading—claiming the anti-nepotism principle doesn't apply to their case without explaining why. If there's a legitimate distinction (the nephew is the most qualified candidate, the hiring process was fair), that would need to be stated.",
            },
            {
                type: "content",
                title: "Types of Special Pleading",
                content: "Special pleading takes many forms:\n\n**Personal Exception:**\n'The rules apply to everyone else, but I'm special.'\n\n**Group Exception:**\n'That criticism applies to other groups, but not to ours.'\n\n**Situational Exception:**\n'Normally I'd agree, but this situation is different.' [Without explaining  how.]\n\n**Double Standard:**\n'It's wrong when they do it, but acceptable when we do it.'\n\n**The Common Thread:**\nAll versions claim exemption without principled justification.\n\n**Detection:**\nAsk: 'What specifically makes this case different?' If there's no good answer, it's special pleading.",
                keyPoints: [
                    "Personal, group, and situational exceptions",
                    "Double standards for self vs. others",
                    "Ask what specifically makes the case different",
                ],
            },
            {
                type: "content",
                title: "Special Pleading in Debate",
                content: "Watch for this fallacy in debates:\n\n**Standard Shifting:**\n'Their evidence needs to be peer-reviewed, but our anecdotes are fine.'\n\n**Evidence Double Standards:**\n'Their source is biased, but ours with the same conflict of interest is reliable.'\n\n**Logic Double Standards:**\n'Their correlation doesn't prove causation, but ours does.'\n\n**Calling It Out:**\n'They're applying different standards to their case than to ours. That's special pleading. Either the standard applies universally or they need to explain the relevant distinction.'\n\n**Testing Yourself:**\nBefore criticizing opponent evidence or logic, ask: 'Would I accept this criticism if applied to my own arguments?'",
                keyPoints: [
                    "Standard shifting between sides is special pleading",
                    "Call it out explicitly in debate",
                    "Test your own criticisms for consistency",
                ],
            },
            {
                type: "content",
                title: "Responding to Special Pleading",
                content: "Demand consistency:\n\n**Ask for Justification:**\n'You're claiming an exception. What makes your case different from others where this principle applies?'\n\n**Apply Their Standard:**\n'If we applied your standard consistently, it would also mean [consequence you'd reject]. Why does it apply there but not here?'\n\n**Highlight Inconsistency:**\n'You've criticized opponents for X while doing X yourself. That's special pleading.'\n\n**Demand Principles:**\n'What's your principle for when this rule applies? It can't just be \"when it helps me.\"'\n\n**Mirror:**\n'If I claimed the same exception as you, would you accept it? If not, why should we accept it from you?'",
                keyPoints: [
                    "Demand explicit justification for the exception",
                    "Apply their standard consistently to expose the inconsistency",
                    "Test: would they accept this exception from opponents?",
                ],
            },
            {
                type: "content",
                title: "Avoiding Special Pleading",
                content: "Be consistent in your own reasoning:\n\n**Universal Application:**\nBefore asserting a principle, consider: would I accept this if it worked against me?\n\n**Explain Distinctions:**\nIf you need to distinguish your case, explain the relevant difference explicitly.\n\n**Self-Check:**\n'Am I applying this standard the same way to both sides?'\n\n**Credibility Value:**\nConsistency builds credibility. Judges notice when debaters apply standards fairly to both sides.\n\n**Acknowledge Trade-offs:**\nSometimes your principles do cut against you. Acknowledging this honestly is better than special pleading.\n\n**Example:**\n'I believe in free speech, which means protecting speech I disagree with, not just speech I like.'",
                keyPoints: [
                    "Apply your own standards consistently",
                    "Explain distinctions explicitly when claiming them",
                    "Consistency builds credibility with judges",
                ],
            },
            {
                type: "question",
                id: "l19-01-q2",
                question: "How can you prevent accusations of special pleading in your own arguments?",
                options: [
                    { id: "a", text: "Never use general principles" },
                    { id: "b", text: "Ignore consistency concerns" },
                    { id: "c", text: "Claim more exceptions" },
                    { id: "d", text: "Apply your standards consistently to both sides and explain any distinctions explicitly" }
                ],
                correctAnswer: "d",
                explanation: "Prevent special pleading accusations by applying your standards consistently. If you need to distinguish cases, explain the relevant difference explicitly. 'Our situation differs because [specific reason]' is not special pleading; 'We're just different' is.",
            },
            {
                type: "content",
                title: "Conclusion: Consistent Standards",
                content: "Special pleading claims unjustified exceptions. Consistent application of principles—to your own side as well—builds credibility.\n\n**Key Takeaways:**\n• Special pleading claims exemptions without justification\n• Either principles are universal or distinctions must be explained\n• Demand justification: 'What makes your case different?'\n• Apply your own standards consistently\n• Legitimate exceptions have explicit reasons\n• Consistency builds credibility with judges\n\n**Looking Ahead:**\nIn the next lesson, we'll explore When to Use Each Refutation Type.\n\n**Practice Challenge:**\nIdentify a case of special pleading in public discourse. What standard is being applied inconsistently? What explanation would make the exception legitimate?",
                keyPoints: [
                    "Claim exceptions only with explicit justification",
                    "Consistent application builds credibility",
                    "Test your own reasoning for special pleading",
                ],
            },
            {
                type: "content",
                title: "The 'Self-Refutation' Test",
                content: "A powerful way to check for special pleading:\n\n**The Method:**\nImagine the principle you're using was applied against you. Does it refute your own case?\n\n**Example:**\nDebater argues: 'Expert consensus is always right' to support their point. But expert consensus opposes their second contention.\n\n**The Fix:**\nRefine the principle: 'Expert consensus is reliable mainly in settled science, but less so in policy prediction.' This avoids the contradiction (and the special pleading accusation).\n\n**Strategic Value:**\nSelf-testing pre-empts opponent attacks.",
                keyPoints: [
                    "Test your principles against your own case",
                    "Refine broad principles to avoid contradictions",
                    "Pre-emption is better than defense",
                ],
            },
            {
                type: "content",
                title: "Nuance vs. Inconsistency",
                content: "Distinguishing valid nuance from invalid inconsistency:\n\n**Nuance:**\n'Free speech is vital, but incitement to violence is different because it causes immediate physical harm.' (Clear principle for the distinction).\n\n**Inconsistency:**\n'Free speech protects my unpopular views but shouldn't protect theirs.' (No principle).\n\n**Debate Tip:**\nWhen accusing opponents of special pleading, listen for their principle. If they give one, argue against the principle. If they don't, argue against the inconsistency.",
                keyPoints: [
                    "Nuance relies on principled distinctions",
                    "Inconsistency lacks justifying principles",
                    "Attack the lack of principle in special pleading",
                ],
            },
            {
                type: "question",
                id: "l19-01-q3",
                question: "Which of the following is an example of valid nuance rather than special pleading?",
                options: [
                    { id: "a", text: "'I can speed because I'm a good driver'" },
                    { id: "b", text: "'Taxation is theft, except when it pays for things I use'" },
                    { id: "c", text: "'Freedom of movement is a right, but prisons are justified to prevent immediate harm to others'" },
                    { id: "d", text: "'Everyone should tell the truth, except me right now'" }
                ],
                correctAnswer: "c",
                explanation: "Option C provides a principled distinction (preventing immediate harm) to justify the exception to freedom of movement. The others claim exceptions based on self-interest or lack of justification.",
            },
            {
                type: "content",
                title: "Advanced: Strategic Standard Shifting",
                content: "Using standards offensively:\n\n**The Move:**\n'My opponent demands 100% certainty for my plan. By that standard, their counter-plan also fails, because nothing is 100% certain. But looking at probability (the reasonable standard), my plan works.'\n\n**Why It Works:**\nIt exposes their unreasonable standard (Special Pleading) and re-establishes a reasonable one.\n\n**The 'Tu Quoque' Relation:**\nSpecial pleading accusations are often a sophisticated form of 'You too'—showing that if their criticism were valid, it would hurt them too.",
                keyPoints: [
                    "Hold opponents to their own excessive standards",
                    "Re-establish reasonable standards via comparison",
                    "Use their standards to defeat their own arguments",
                ],
            },
        ],
    },
    {
        lessonId: "l19-02",
        pages: [
            {
                type: "content",
                title: "Introduction: When to Use Each Refutation Type",
                content: "You've learned many refutation techniques throughout this curriculum. The skill now is knowing which to deploy in which situations.\n\nDifferent arguments call for different responses. Direct denial works for false claims; minimization works for true but minor points; turns work when you can flip the logic.\n\nIn this lesson, we'll provide a decision framework for selecting the right refutation technique.",
            },
            {
                type: "content",
                title: "The Refutation Decision Tree",
                content: "Match technique to situation:\n\n**Is the claim factually false?**\n→ Direct denial with evidence\n\n**Is the claim true but minor?**\n→ Minimization: concede and show insignificance\n\n**Can you flip it to support your side?**\n→ Turn (link or impact)\n\n**Is the logic flawed?**\n→ Attack the warrant/reasoning\n\n**Is their evidence weak?**\n→ Source criticism\n\n**Does accepting their claim still mean you win?**\n→ Outweigh: concede and compare\n\n**Is the argument a version of a fallacy?**\n→ Identify and explain the fallacy\n\n**Are multiple arguments related?**\n→ Group and address thematically",
                keyPoints: [
                    "False claims → direct denial",
                    "True but minor → minimization",
                    "Flippable → turn; can still win → outweigh",
                ],
            },
            {
                type: "question",
                id: "l19-02-q1",
                question: "Opponent makes a technically true argument that's very minor compared to the overall issues. What refutation type fits best?",
                options: [
                    { id: "a", text: "Minimization—concede the point but show it's insignificant" },
                    { id: "b", text: "Turn—flip it to your side" },
                    { id: "c", text: "Direct denial—claim it's false" },
                    { id: "d", text: "Ad hominem attack" }
                ],
                correctAnswer: "a",
                explanation: "Minimization is appropriate for true but minor points. 'Yes, this is accurate. But it's insignificant compared to [larger issues].' You don't fight the truth; you fight the importance.",
            },
            {
                type: "content",
                title: "Refutation Complexity Ladder",
                content: "Choose based on argument strength:\n\n**Weak Arguments:**\nSimple denial or quick dismissal.\n\n**Moderate Arguments:**\nWarrant attack or minimization.\n\n**Strong Arguments:**\nTurn (create offense) or outweigh with comparative analysis.\n\n**Critical Arguments:**\nFull layered defense: multiple techniques combined.\n\n**The Principle:**\nMatching response complexity to argument strength conserves time for what matters.\n\n**Don't Over-Respond:**\nSpending 2 minutes on a 10-second point wastes time.\n\n**Don't Under-Respond:**\nQuick dismissal of their central argument won't convince.",
                keyPoints: [
                    "Match response complexity to argument importance",
                    "Reserve extensive refutation for key arguments",
                    "Quick dismissal for minor points; full defense for critical ones",
                ],
            },
            {
                type: "content",
                title: "Adapting Mid-Round",
                content: "Refutation strategy evolves as debates progress:\n\n**Early Round:**\nAssess opponent's case. Identify which arguments are most threatening.\n\n**Mid-Round:**\nNote what's working and what isn't. Adjust technique choices.\n\n**Late Round:**\nFocus on what remains contested. The arguments that matter have narrowed.\n\n**Adaptive Signals:**\n• Judge reactions (confusion, nodding, note-taking)\n• Opponent struggles to respond to certain techniques\n• Time remaining forces prioritization\n\n**The Skill:**\nFlexibility—being able to switch techniques based on what the debate needs.",
                keyPoints: [
                    "Strategy should evolve as the debate progresses",
                    "Read judge reactions and opponent struggles",
                    "Flexibility is key to effective refutation",
                ],
            },
            {
                type: "content",
                title: "Combining Refutation Types",
                content: "Often, multiple techniques work together:\n\n**Layered Defense:**\n'First, their evidence doesn't prove what they claim [warrant attack]. But even if it did, the effect would be minor [minimization]. And even granting their full argument, we still outweigh [outweighing].'\n\n**Backup Positions:**\nIf your primary refutation doesn't convince, fallback positions remain.\n\n**Situational Flexibility:**\nAs the debate develops, you may need to shift strategies. Be ready with alternatives.\n\n**What Not to Combine:**\nLink turn + impact turn on the same argument is contradictory.\nDenying something AND minimizing it ('It's false, but even if true it's minor') can work if framed carefully.\n\n**Signposting:**\n'Even if all of that fails...' signals backup positions without undermining primary arguments.",
                keyPoints: [
                    "Layered defense: warrant attack + minimization + outweighing",
                    "Backup positions provide resilience",
                    "Don't contradict yourself (no double turns)",
                ],
            },
            {
                type: "content",
                title: "Choosing Based on Resources",
                content: "Consider what you have available:\n\n**Evidence-Based:**\nIf you have strong counter-evidence, direct refutation works best.\n\n**Logic-Based:**\nIf their reasoning is flawed but evidence is solid, attack warrants.\n\n**Time-Based:**\nQuick techniques (minimization, grouping) for minor points when time is short.\n\n**Strategic:**\nWhat does the debate need? If they're winning on amount of offense, you need turns or offense of your own, not just defense.\n\n**Judgment:**\nUltimately, this is a judgment call. Consider: Which technique am I most likely to win with? Which will be most convincing to this judge?",
                keyPoints: [
                    "Match technique to your available resources",
                    "Consider what the debate strategically needs",
                    "Use judgment: what's most likely to succeed?",
                ],
            },
            {
                type: "question",
                id: "l19-02-q2",
                question: "When should you consider using a turn rather than simple refutation?",
                options: [
                    { id: "a", text: "When you want to take longer" },
                    { id: "b", text: "Always—turns are always better" },
                    { id: "c", text: "When you can flip their argument to actually support your position—creating offense rather than just defense" },
                    { id: "d", text: "When you have no other options" }
                ],
                correctAnswer: "c",
                explanation: "Turns are valuable when you can genuinely flip opponent reasoning to support you. This creates offense rather than just defense. If you can't legitimately flip it, turns don't apply—use other techniques.",
            },
            {
                type: "content",
                title: "Conclusion: Strategic Selection",
                content: "Choosing the right refutation technique is a strategic skill. Match your response to the nature of the argument you're facing.\n\n**Key Takeaways:**\n• False claims → denial; true but minor → minimization\n• Logic flaws → warrant attack; flippable → turn\n• Can still win if they're right → outweigh\n• Layer defenses for resilience\n• Don't contradict yourself (no double turns)\n• Consider resources, time, and strategic needs\n\n**Looking Ahead:**\nIn the next lesson, we'll explore Signposting.\n\n**Practice Challenge:**\nTake an opponent case with 5 arguments. For each, identify the best refutation technique and explain why.",
                keyPoints: [
                    "Match refutation type to argument type",
                    "Layer techniques for resilience",
                    "Consider resources and strategic needs",
                ],
            },
            {
                type: "content",
                title: "The 'Double-Bind' Strategy",
                content: "Using refutation selection to trap opponents:\n\n**The Tactic:**\nPresent two responses where escaping one leads into the other.\n\n**Example:**\n'Either their plan is effective (in which case it causes this massive cost), OR it avoids the cost (in which case it's ineffective). They can't have it both ways.'\n\n**Technique Mix:**\nMatches a 'Link Turn' (it causes cost) with a 'Solvency Attack' (it doesn't work).\n\n**Power:**\nForces the opponent to concede one of your points to save their argument.",
                keyPoints: [
                    "Create dilemmas where any escape helps you",
                    "Combine solvency attacks with disadvantage links",
                    "Force hard choices on the opponent",
                ],
            },
            {
                type: "content",
                title: "Refuting Definitions",
                content: "When to attack words vs. ideas:\n\n**Technique:**\nRedefinition or contextual definition.\n\n**When to Use:**\nWhen their whole argument relies on a twisted meaning of a word.\n\n**When NOT to Use:**\nWhen definitions are standard and you just dislike the conclusion. Don't fight helpful definitions.\n\n**Standard:**\n'The best definition provides the fairest ground for debate.'",
                keyPoints: [
                    "Attack definitions only when they skew the debate",
                    "Propose clearer or fairer alternatives",
                    "Don't quibble over standard terms",
                ],
            },
            {
                type: "question",
                id: "l19-02-q3",
                question: "What is a 'Double-Bind' in refutation?",
                options: [
                    { id: "a", text: "Refuting the same argument twice" },
                    { id: "b", text: "Presenting two options where both hurt the opponent's position" },
                    { id: "c", text: "Getting tied up in your own logic" },
                    { id: "d", text: "Agreeing with the opponent" }
                ],
                correctAnswer: "b",
                explanation: "A double-bind presents a dilemma: 'Either A or B. If A, you lose because X. If B, you lose because Y.' It effectively covers all bases and traps the opponent.",
            },
            {
                type: "content",
                title: "Grouping and Triage",
                content: "Handling volume:\n\n**Scenario:**\nOpponent dumps 7 arguments in 4 minutes.\n\n**Response Strategy:**\n1. Group 4 of them as 'Implementation Speculation'. Refute the group.\n2. Minimization on 2 minor points.\n3. Turn the 1 strong argument.\n\n**Result:**\n7 arguments handled efficiently. Grouping is a survival skill in fast debates.",
                keyPoints: [
                    "Group weak arguments to save time",
                    "Focus energy on turning the strong argument",
                    "Efficiency beats volume",
                ],
            },
        ],
    },
    {
        lessonId: "l19-03",
        pages: [
            {
                type: "content",
                title: "Introduction: Signposting",
                content: "Signposting is verbally indicating the structure of your speech—telling the audience what you're addressing and when you're moving to new topics. 'First, I'll address X. Now, moving to Y...'\n\nGood signposting helps judges follow your arguments, keeps your speech organized, and ensures your points are tracked correctly.\n\nIn this lesson, you'll learn effective signposting techniques and common mistakes to avoid.",
            },
            {
                type: "content",
                title: "Why Signposting Matters",
                content: "Benefits of clear structure signals:\n\n**Judge Comprehension:**\nJudges taking notes need to know which argument you're addressing. Clear signposting makes their job easier.\n\n**Organization:**\nSignposting forces you to think about structure—you can't signpost chaos.\n\n**Credit:**\nIf the judge doesn't know which argument you're responding to, you might not get credit for the response.\n\n**Completeness:**\nSignposting helps you track what you've covered and what remains.\n\n**Opponent Understanding:**\nClear structure helps opponents follow your arguments—which is fine. Confusion doesn't help you.\n\n**Professionalism:**\nWell-signposted speeches sound more polished and prepared.",
                keyPoints: [
                    "Helps judges follow and note your arguments",
                    "Ensures you get credit for responses",
                    "Forces organized thinking",
                ],
            },
            {
                type: "question",
                id: "l19-03-q1",
                question: "Why does poor signposting hurt you in a debate?",
                options: [
                    { id: "a", text: "Judges might not credit your responses if they can't tell what you're addressing" },
                    { id: "b", text: "Opponents will signpost better" },
                    { id: "c", text: "Judges prefer complicated speeches" },
                    { id: "d", text: "It doesn't hurt you" }
                ],
                correctAnswer: "a",
                explanation: "Without clear signposting, judges might not connect your responses to opponent arguments. You could make a good response but not get credit because the judge didn't know what you were addressing.",
            },
            {
                type: "content",
                title: "Signposting Structure Templates",
                content: "Useful patterns for different situations:\n\n**Constructive Speech:**\n'I have three contentions. Contention One: [title]... Contention Two: [title]... Contention Three: [title]...'\n\n**Rebuttal Speech:**\n'On their first argument about X... On their second point regarding Y... On their final contention...'\n\n**Response Layers:**\n'I have two responses. First... Second...'\n\n**Moving Between Flows:**\n'Moving from their case to my own...' 'Returning to our constructive case...'\n\n**Crystallization:**\n'The debate comes down to two issues: X and Y. On X... On Y...'\n\n**Summary:**\n'To summarize, we've shown [main points]. Therefore...'",
                keyPoints: [
                    "Templates provide reliable structures",
                    "Adapt templates to your actual speech needs",
                    "Consistency helps both you and judges",
                ],
            },
            {
                type: "content",
                title: "Signposting for Different Judges",
                content: "Adapt to your audience:\n\n**Flow Judges:**\nThese judges track everything on paper. Be precise about which argument you're addressing. Label clearly.\n\n**Holistic Judges:**\nThese judges form overall impressions. Signposting still matters for clarity but can be slightly less granular.\n\n**Experienced Judges:**\nKnow debate conventions. Can use technical signposting like 'cross-apply' or 'extend with new analysis.'\n\n**Lay Judges:**\nAvoid jargon. Use plain language: 'On their first point...' rather than 'On the A1.'\n\n**Universal Rule:**\nWhen in doubt, be clearer. Over-signposting is rarely penalized; under-signposting costs you credit.",
                keyPoints: [
                    "Adapt signposting precision to judge type",
                    "Flow judges need precise labels; lay judges need plain language",
                    "When in doubt, be clearer",
                ],
            },
            {
                type: "content",
                title: "Effective Signposting Techniques",
                content: "How to signpost well:\n\n**Numbering:**\n'First... Second... Third...' Simple and clear.\n\n**Explicit Reference:**\n'On their economic argument...' 'Regarding their first contention...'\n\n**Transitions:**\n'Moving now to their second point...' 'Next, I'll address...'\n\n**Grouping Signals:**\n'I'll address their next three points together because they share a common flaw.'\n\n**Priority Indicators:**\n'The most important issue in this debate is...' 'Let me focus on the central question...'\n\n**Structure Previews:**\n'I have three responses to their case: X, Y, and Z. Starting with X...'\n\n**Summary Markers:**\n'To summarize what we've established...' 'In conclusion on this point...'",
                keyPoints: [
                    "Use numbering, explicit reference, transitions",
                    "Preview structure at the start",
                    "Signal priority and grouping",
                ],
            },
            {
                type: "content",
                title: "Common Signposting Mistakes",
                content: "Avoid these errors:\n\n**No Signposting:**\nRambling without indication of structure. Judges lose track.\n\n**Vague Reference:**\n'On their argument...' (Which one?) Be specific.\n\n**Inconsistent Numbering:**\n'First... and also... another point...' Use consistent markers.\n\n**Mismatch:**\nSignposting 'three points' and giving four (or two). Count accurately.\n\n**Over-Signposting:**\n'Now I'm going to signpost. This is the signpost. I'm moving to...' Just do it directly.\n\n**Wrong Address:**\nCalling it their 'second argument' when it was their third. Match their labels.\n\n**Late Signposting:**\nRevealing what you were addressing after making the point. Signpost first.",
                keyPoints: [
                    "Be specific—don't use vague references",
                    "Match numbering to actual content",
                    "Signpost at the start of each section, not the end",
                ],
            },
            {
                type: "question",
                id: "l19-03-q2",
                question: "What's wrong with saying 'On their argument, I respond...' without further specification?",
                options: [
                    { id: "a", text: "Nothing—it's fine" },
                    { id: "b", text: "It's too long" },
                    { id: "c", text: "Arguments shouldn't be addressed" },
                    { id: "d", text: "It's too vague—which argument? The judge needs specificity to track your response" }
                ],
                correctAnswer: "d",
                explanation: "Vague signposting doesn't help judges track responses. 'On their economic harm argument...' or 'On their second contention...' is much clearer than just 'On their argument.'",
            },
            {
                type: "content",
                title: "Conclusion: Clear Structure",
                content: "Signposting makes your speeches organized and followable. Clear structure helps judges credit your arguments properly.\n\n**Key Takeaways:**\n• Signposting helps judges follow and note arguments\n• Use numbering, explicit references, transitions\n• Preview structure at the start of sections\n• Be specific; avoid vague references\n• Match numbering to actual content\n• Signpost at the start of each section\n\n**Looking Ahead:**\nIn the next lesson, we'll explore Combining Refutation Strategies.\n\n**Practice Challenge:**\nRecord yourself giving a speech. Listen for signposting. Is it clear? Specific? Consistent? Practice improving.",
                keyPoints: [
                    "Clear signposting ensures credit for responses",
                    "Specific references beat vague ones",
                    "Consistent structure markers aid comprehension",
                ],
            },
            {
                type: "content",
                title: "Internal Summaries",
                content: "Micro-signposting within points:\n\n**The Technique:**\nAfter a complex explanation, summarize it in one sentence before moving on.\n\n**Example:**\n'...[Complex economic logic]... So, in short: raising rates lowers inflation. Now, how does this affect employment?'\n\n**Why:**\nIt locks in the point's understanding before adding the next layer. It serves as a checkpoint for the judge.",
                keyPoints: [
                    "Summarize complex points briefly before moving on",
                    "Locks in understanding",
                    "Acts as a cognitive checkpoint",
                ],
            },
            {
                type: "content",
                title: "Roadmaps in Rebuttal",
                content: "Mapping the chaos:\n\n**Challenge:**\nRebuttals are messy. Opponent arguments are scattered.\n\n**Solution:**\n'Off-Case, then On-Case.' or 'I'll follow the order of their speech.'\n\n**The 'Cluster' Roadmap:**\n'I'll address the Economy, then the Environment, then the Voting Issue.' (Grouping disparate arguments into themes).\n\n**Value:**\nIf you impose structure on a messy round, you look like the one in control.",
                keyPoints: [
                    " impose structure on chaotic rounds",
                    "Group arguments into themes for roadmaps",
                    "Control the flow, control the round",
                ],
            },
            {
                type: "question",
                id: "l19-03-q3",
                question: "What is an 'Internal Summary'?",
                options: [
                    { id: "a", text: "Summarizing the whole debate at the end" },
                    { id: "b", text: "Summarizing a specific point before moving to the next one" },
                    { id: "c", text: "Thinking silently" },
                    { id: "d", text: "Writing notes to yourself" }
                ],
                correctAnswer: "b",
                explanation: "An internal summary captures the essence of a specific point you just made ('So, X leads to Y') before moving to the next point. It helps judges digest complex arguments.",
            },
            {
                type: "content",
                title: "Verbal Formatting",
                content: "Using your voice to signpost:\n\n**Tone Shift:**\nSlightly pause and lower pitch when starting a new contention.\n\n**Volume:**\nEmphasizing the NUMBER of the point. 'Second...' (Louder, then normal).\n\n**Pacing:**\nSlow down for the signpost. Speed up for the details.\n\n**Integration:**\nVerbal cues reinforce the structural words. Even if a judge misses the word 'Next', they hear the tone shift.",
                keyPoints: [
                    "Voice modulation reinforces structure",
                    "Pause before transitions",
                    "Emphasize numbers and headers",
                ],
            },
        ],
    },
    {
        lessonId: "l19-04",
        pages: [
            {
                type: "content",
                title: "Introduction: Combining Refutation Strategies",
                content: "Individual refutation techniques are tools. Mastery comes from combining them strategically—knowing how different techniques work together to build comprehensive responses.\n\nA sophisticated debater might attack an argument's evidence, warrant, and significance all in one response, creating layered defense that's hard to overcome.\n\nIn this lesson, you'll learn to integrate multiple refutation techniques into cohesive, powerful responses.",
            },
            {
                type: "content",
                title: "Layered Refutation",
                content: "Build multiple lines of defense:\n\n**Structure:**\n'Their argument fails for several reasons.'\n1. Evidence problems [source criticism]\n2. Logic problems [warrant attack]\n3. Even if true, minor [minimization]\n4. Even if significant, we still outweigh [outweighing]\n\n**Why Layer:**\n• Resilience: if one response fails, others remain\n• Comprehensive: addresses different aspects\n• Persuasive: multiple angles accumulate\n\n**Prioritization Within Layering:**\nLead with your strongest response. Additional layers are backup.\n\n**Time Management:**\nNot every argument needs full layering. Reserve comprehensive responses for important arguments.",
                keyPoints: [
                    "Layer evidence + logic + significance attacks",
                    "Resilience: if one fails, others remain",
                    "Lead with strongest response; additional layers are backup",
                ],
            },
            {
                type: "question",
                id: "l19-04-q1",
                question: "Why is layered refutation more effective than single-point response?",
                options: [
                    { id: "a", text: "It takes more time" },
                    { id: "b", text: "If one refutation line fails, others remain; comprehensive attack is harder to defend" },
                    { id: "c", text: "It's not actually more effective" },
                    { id: "d", text: "Judges prefer longer responses" }
                ],
                correctAnswer: "b",
                explanation: "Layered refutation provides resilience. If the judge doesn't buy your evidence attack, maybe they accept your warrant attack. Multiple lines of defense accumulate and are harder to fully overcome.",
            },
            {
                type: "content",
                title: "Sequencing Refutation Layers",
                content: "Order matters for layered refutation:\n\n**Standard Sequence:**\n1. Strongest argument first (don't bury the lead)\n2. Evidence attack (challenge their foundation)\n3. Logic attack (challenge their reasoning)\n4. Impact minimization (even if true, it's minor)\n5. Outweighing (even if major, we still win)\n\n**'Even If' Chaining:**\nEach layer becomes a fallback: 'Even if you don't buy that, consider this...'\n\n**Alternative Sequence:**\nSometimes lead with the attack that fits the debate's current focus.\n\n**Time Allocation:**\nSpend most time on your strongest layer; brief mentions for backups.\n\n**The Goal:**\nJudge has multiple reasons to vote your way; opponents must defeat all of them.",
                keyPoints: [
                    "Lead with your strongest layer",
                    "'Even if' chaining creates fallback positions",
                    "Spend most time on your best argument",
                ],
            },
            {
                type: "content",
                title: "Defensive vs. Offensive Layers",
                content: "Distinguish the types of responses:\n\n**Defensive Layers:**\n• Their claim is false (denial)\n• Their evidence doesn't prove their claim (warrant attack)\n• Their impact is minor (minimization)\n\n**These prevent the argument from winning for them but don't win for you.**\n\n**Offensive Layers:**\n• Turn: their argument actually supports us\n• Counter-argument: independent reason to vote our way\n• Outweighing: our argument beats theirs\n\n**These create reasons to vote for you, not just against them.**\n\n**The Balance:**\nBest responses combine defensive (stop their offense) and offensive (create your own) layers.",
                keyPoints: [
                    "Defensive layers stop their offense",
                    "Offensive layers create your own offense",
                    "Best responses combine both",
                ],
            },
            {
                type: "content",
                title: "Compatible Combinations",
                content: "Some techniques work well together:\n\n**Evidence + Warrant:**\n'Their evidence is weak AND even if it were strong, it wouldn't prove their claim.'\n\n**Minimization + Outweighing:**\n'This is a minor point AND even if it were major, we still win on balance.'\n\n**Source Criticism + Substantive:**\n'Their source is questionable AND even taking it at face value, the argument fails because...'\n\n**Alternative Causality + Denial:**\n'Another explanation exists AND further, their proposed causal mechanism doesn't work.'\n\n**Fallacy + Consequence:**\n'This is a fallacious argument because... AND the position it supports would have negative consequences.'",
                keyPoints: [
                    "Evidence + warrant: attack both foundation and logic",
                    "Minimization + outweighing: minor + still win on balance",
                    "Substantive + source: content + credibility attack",
                ],
            },
            {
                type: "content",
                title: "Incompatible Combinations",
                content: "Avoid contradictory combinations:\n\n**Link Turn + Impact Turn:**\n'It won't happen' AND 'If it happens, it's good' contradicts. Pick one.\n\n**Full Denial + Minimization:**\n'This is completely false' AND 'But even if true, it's minor' is awkward. Frame carefully if you need both: 'Primarily, this is false. Even in the unlikely event I'm wrong, it remains minor.'\n\n**Acceptance + Attack:**\nFully accepting the premise and fully attacking it simultaneously confuses. Be clear about concession scope.\n\n**The Test:**\nDoes my combination sound contradictory? Would I be embarrassed if an opponent pointed out the tension?\n\n**Resolution:**\nIf techniques seem to conflict, present one as primary and the other as 'even if': 'Primarily X. But even if X fails, Y.'",
                keyPoints: [
                    "Never combine link turn + impact turn (double turn)",
                    "Resolve tension with 'even if' framing",
                    "Test: does your combination sound contradictory?",
                ],
            },
            {
                type: "question",
                id: "l19-04-q2",
                question: "How can you combine denial ('it's false') with minimization ('even if true, it's minor') without sounding contradictory?",
                options: [
                    { id: "a", text: "You can't—they're incompatible" },
                    { id: "b", text: "Say them at the same time quickly" },
                    { id: "c", text: "Frame clearly: 'This is primarily false. But even in the unlikely event I'm wrong, it remains a minor point.'" },
                    { id: "d", text: "Use them in different speeches" }
                ],
                correctAnswer: "c",
                explanation: "The 'even if' framing resolves the tension. You're presenting denial as primary and minimization as backup: 'I believe it's false, but hypothetically, even if you disagree, it still doesn't matter much.' Clear framing avoids the contradiction.",
            },
            {
                type: "content",
                title: "Conclusion: Integrated Defense",
                content: "Combining refutation strategies creates comprehensive, resilient responses. Layered defense with compatible techniques is more powerful than single-point responses.\n\n**Key Takeaways:**\n• Layer evidence + logic + significance attacks\n• Resilience: if one line fails, others remain\n• Compatible: evidence + warrant, minimization + outweighing\n• Incompatible: link turn + impact turn (double turn)\n• Resolve tension with 'even if' framing\n• Reserve comprehensive responses for important arguments\n\n**Looking Ahead:**\nIn the next lesson, we'll explore Burden of Proof Reversal.\n\n**Practice Challenge:**\nTake an opponent argument. Build a comprehensive response using at least three compatible techniques. Check for contradictions.",
                keyPoints: [
                    "Layer compatible techniques for resilient defense",
                    "Avoid contradictory combinations",
                    "Use 'even if' framing to handle tension",
                ],
            },
            {
                type: "content",
                title: "The 'Pincer' Movement",
                content: "Advanced combinations:\n\n**Concept:**\nAttacking from two sides that meet in the middle.\n\n**Example:**\n'They claim the problem is huge (A) and their plan solves it (B). Pincer: Actually, the problem is small (Minimization on A) AND the plan wouldn't fix it anyway (Solvency on B).'\n\n**Effect:**\nEven if the problem is real, they assume no solvency. Even if the plan works, there's no problem. They lose either way.\n\n**Difference from Contradiction:**\nThese don't contradict. A problem can be small AND a plan can be ineffective. They are independent defensive layers.",
                keyPoints: [
                    "Attack both Significance and Solvency",
                    "Independent layers don't contradict",
                    "Reduces opponent's path to victory",
                ],
            },
            {
                type: "content",
                title: "Pre-Emptive Combinations",
                content: "Answering before they ask:\n\n**Technique:**\n'They will likely say X. But that fails because Y. And even if X were true, Z.'\n\n**Benefits:**\n• Steals their thunder\n• Shows deep preparation\n• Forces them off their script\n\n**Risk:**\nDon't make better arguments for them than they would make for themselves. Only pre-empt obvious or strong arguments.",
                keyPoints: [
                    "Anticipate and refute opponent moves",
                    "Demonstrates command of the topic",
                    "Don't build their case for them",
                ],
            },
            {
                type: "question",
                id: "l19-04-q3",
                question: "Which combination is a valid 'Pincer' attack?",
                options: [
                    { id: "a", text: "It's not a problem AND your plan causes the problem" },
                    { id: "b", text: "The problem is small AND your plan doesn't solve it" },
                    { id: "c", text: "It won't happen AND it will be good" },
                    { id: "d", text: "I agree AND I disagree" }
                ],
                correctAnswer: "b",
                explanation: "Minimizing the problem ('it's small') and attacking solvency ('plan won't work') are compatible defensive layers. They squeeze the argument from both ends without contradiction.",
            },
            {
                type: "content",
                title: "Integration Drill",
                content: "Practice combining:\n\n**The Argument:**\n'Universal Basic Income destroys work ethic.'\n\n**Combined Response:**\n1. **Evidence:** 'Studies from pilot programs show work hours barely drop.'\n2. **Turn:** 'Actually, it increases entrepreneurship, creating NEW work.'\n3. **Outweigh:** 'Even if work hours drop 5%, ending poverty is more important.'\n\n**Result:**\nEvidence defense + Link Turn + Impact Outweigh. A complete package.",
                keyPoints: [
                    "Practice layering on common arguments",
                    "Ensure layers flow logically",
                    "End with the impact comparison",
                ],
            },
        ],
    },
    {
        lessonId: "l19-05",
        pages: [
            {
                type: "content",
                title: "Introduction: Burden of Proof Reversal",
                content: "Burden of proof reversal attempts to shift the responsibility for proving claims from where it naturally belongs. 'You can't disprove my claim, so it must be true' or 'Prove to me why I'm wrong.'\n\nUnderstanding burden of proof helps you identify when opponents are improperly shifting it to you and ensures you meet your own burdens appropriately.\n\nIn this lesson, you'll learn about proper burden allocation and how to respond to reversal attempts.",
            },
            {
                type: "content",
                title: "Understanding Burden of Proof",
                content: "Who needs to prove what:\n\n**The Basic Principle:**\nThe person making a claim has the burden of proving it. 'Extraordinary claims require extraordinary evidence.'\n\n**Why It Matters:**\n• Without this principle, anyone could assert anything and demand others disprove it\n• Some things can't be disproven (negatives are often hard to prove)\n• It ensures claims are backed by reasoning and evidence\n\n**Default Allocation:**\n• Affirmative/Proposing side: proves the resolution is true or the policy should be adopted\n• Negative/Opposing side: doesn't independently need to prove an alternative—just that affirmative hasn't met their burden\n\n**But Also:**\nAny claim you make, you must support. The negative's counter-arguments also need evidence.",
                keyPoints: [
                    "Whoever makes a claim has the burden to prove it",
                    "Without this, any assertion would need to be disproven",
                    "Both sides have burdens for their specific claims",
                ],
            },
            {
                type: "question",
                id: "l19-05-q1",
                question: "'You can't prove my policy won't work, so you should support it.' What's wrong with this reasoning?",
                options: [
                    { id: "a", text: "Burden reversal—the proposer must prove the policy works, not demand opponents prove it won't" },
                    { id: "b", text: "The policy definitely won't work" },
                    { id: "c", text: "Nothing—it's good logic" },
                    { id: "d", text: "It's too confident" }
                ],
                correctAnswer: "a",
                explanation: "This is burden reversal. The proposer bears the burden to prove the policy works. You can't shift that burden by demanding others prove it won't. Inability to disprove doesn't constitute proof.",
            },
            {
                type: "content",
                title: "Common Burden Manipulation Tactics",
                content: "Watch for these burden tricks:\n\n**Argument from Ignorance:**\n'You can't prove X is false, so X must be true.'\nResponse: Burden lies with the person claiming X.\n\n**Demanding Proof of Negative:**\n'Prove this has never happened.'\nResponse: Negatives are often impossible to prove. Burden is on the one claiming it happened.\n\n**The Gish Gallop:**\nMaking so many claims you can't possibly respond to all.\nResponse: Point out unbacked assertions can be dismissed; address the strongest claims.\n\n**Appeals to Future Evidence:**\n'Evidence will eventually prove me right.'\nResponse: We judge based on current evidence, not hopes for future evidence.\n\n**The Pattern:**\nAll of these try to avoid meeting their own burden. Call it out.",
                keyPoints: [
                    "Argument from ignorance reverses burden",
                    "Demanding proof of negative is often impossible",
                    "Call out unbacked assertions",
                ],
            },
            {
                type: "content",
                title: "Burden Allocation in Different Debate Formats",
                content: "Burdens vary by format:\n\n**Policy Debate:**\nAffirmative: prove a policy change is needed and would work (stock issues).\nNegative: disprove any one stock issue, OR prove the plan has disadvantages, OR prove an alternative is better.\n\n**Lincoln-Douglas:**\nAffirmative: prove the resolution is true under the value/criterion.\nNegative: prove it's false, OR prove a better value/criterion, OR prove Aff fails under their own framework.\n\n**Public Forum:**\nPro: prove the resolution is correct on balance.\nCon: prove it's incorrect on balance.\n\n**The Key:**\nKnow what you need to prove in your format. Build your case to meet those specific burdens.",
                keyPoints: [
                    "Different formats have different burden structures",
                    "Know what you specifically need to prove",
                    "Build cases that meet format-specific burdens",
                ],
            },
            {
                type: "content",
                title: "Responding to Burden Reversal",
                content: "When opponents improperly shift burden:\n\n**Name It:**\n'My opponent is reversing the burden of proof. They made the claim—they need to support it.'\n\n**Explain the Standard:**\n'The burden of proof lies with the person making the claim, not with those who question it.'\n\n**Highlight the Absurdity:**\n'By this logic, any unsupported claim would be true unless disproven. That can't be right.'\n\n**Return the Burden:**\n'I'm not required to disprove their unsupported assertion. I'm waiting for them to prove it.'\n\n**Fulfill When Appropriate:**\nSometimes the burden has genuinely shifted. If you've made claims that now need support, provide that support rather than arguing about burdens.",
                keyPoints: [
                    "Name the burden reversal explicitly",
                    "The claim-maker must prove their claim",
                    "Recognize when burden has legitimately shifted",
                ],
            },
            {
                type: "content",
                title: "Meeting Your Own Burdens",
                content: "Ensure you meet your own burdens:\n\n**Support Claims:**\nEvery claim you make should have reasoning or evidence. Unsupported assertions can be dismissed.\n\n**Proportional Support:**\nBigger claims need bigger evidence. 'This policy has minor benefits' needs less support than 'This will transform society.'\n\n**Prima Facie Case:**\nYour constructive should meet your burden before opponents even respond. Don't leave burdens unmet expecting they won't be challenged.\n\n**Responsive Burden:**\nWhen you make new claims in rebuttals (like counter-arguments), those also need support.\n\n**Burden Awareness:**\nKnow what you need to prove. In policy debate, typically: harm, inherency, plan, solvency. In value debate: criterion application.",
                keyPoints: [
                    "Support all claims with reasoning or evidence",
                    "Bigger claims require proportionally bigger evidence",
                    "Meet your burdens before opponents challenge",
                ],
            },
            {
                type: "question",
                id: "l19-05-q2",
                question: "When does burden legitimately shift to you?",
                options: [
                    { id: "a", text: "Whenever opponents demand proof" },
                    { id: "b", text: "When you make claims that now need support, or when opponents have met their burden and you're contesting their conclusions" },
                    { id: "c", text: "Never—burden never shifts" },
                    { id: "d", text: "In every speech" }
                ],
                correctAnswer: "b",
                explanation: "Burden shifts when you make claims requiring support, or when opponents have established a prima facie case and you're now contesting it. You can't just say 'prove it' to met burdens—you need to contest their evidence or reasoning.",
            },
            {
                type: "content",
                title: "Conclusion: Burden Management",
                content: "Burden of proof determines who must prove what. Avoid improper reversal while ensuring you meet your own burdens.\n\n**Key Takeaways:**\n• Claim-makers bear the burden to prove their claims\n• Burden reversal improperly shifts this to opponents\n• Name burden reversal when opponents do it\n• Meet your own burdens with proportional support\n• Burden can legitimately shift when claims require support\n• Unsupported assertions can be dismissed\n\n**Looking Ahead:**\nIn the next lesson, we'll explore Improving Transitions.\n\n**Practice Challenge:**\nIn your next debate, identify moments where burden is being discussed. Is the allocation correct? Is anyone improperly reversing burden?",
                keyPoints: [
                    "Claims need support proportional to their size",
                    "Name burden reversal when it happens",
                    "Meet your own burdens proactively",
                ],
            },
            {
                type: "content",
                title: "Presumption",
                content: "The tie-breaker of burdens:\n\n**Concept:**\nPresumption lies against the change. If the debate is a perfect tie—neither side proved their case—who wins?\n\n**Default:**\nUsually the Negative (Status Quo). We stick with what we have unless there's a good reason to switch.\n\n**Flipping Presumption:**\n'The status quo is killing people. Presumption should be for change.' (A strategic argument).\n\n**Use:**\n'They haven't met their burden. Since they're proposing change, the tie goes to us.'",
                keyPoints: [
                    "Presumption usually favors the status quo",
                    "A tie goes to the side with presumption",
                    "Use unmet burdens to claim presumption ground",
                ],
            },
            {
                type: "content",
                title: "Burden in Real World vs Debate",
                content: "Context differences:\n\n**Science:**\nBurden is intense (p < 0.05). Heavy proof required.\n\n**Law:**\n'Preponderance of evidence' (Civil) vs 'Beyond reasonable doubt' (Criminal).\n\n**Debate:**\nUsually 'Preponderance' (51%). You just have to be slightly better than the opponent.\n\n**Strategy:**\nDon't let them hold you to a Criminal Court standard in a policy debate. 'We don't need absolute certainty, just that it's more likely than not.'",
                keyPoints: [
                    "Debate standard is usually 'more likely than not'",
                    "Don't accept impossible standards of proof",
                    "Clarify the winning threshold",
                ],
            },
            {
                type: "question",
                id: "l19-05-q3",
                question: "In most debates, what is the standard of proof required?",
                options: [
                    { id: "a", text: "Beyond a reasonable doubt (100% certainty)" },
                    { id: "b", text: "Preponderance of evidence (More likely than not)" },
                    { id: "c", text: "Absolute truth" },
                    { id: "d", text: "Personal belief" }
                ],
                correctAnswer: "b",
                explanation: "Most debates operate on 'preponderance of evidence'—is it more likely true than false? Demanding 100% certainty (beyond reasonable doubt) is an unreasonable burden in policy topics.",
            },
            {
                type: "content",
                title: "Handling the 'Not Disproven' Trap",
                content: "When they say 'You haven't proven me wrong':\n\n**The Trap:**\nThey state a wild theory. You have no evidence on it (because it's wild). They claim victory.\n\n**The Escape:**\n'Hitchens's Razor: What can be asserted without evidence can be dismissed without evidence.'\n\n**Application:**\nDon't scramble to disprove. Calmly state: 'They have provided zero evidence. Therefore, this argument carries zero weight. I don't need to disprove a fantasy.'",
                keyPoints: [
                    "Hitchens's Razor: Assertions without evidence require no refutation",
                    "Don't accept the burden to disprove wild claims",
                    "Dismiss, don't engage, if evidence is zero",
                ],
            },
        ],
    },
    {
        lessonId: "l19-06",
        pages: [
            {
                type: "content",
                title: "Introduction: Improving Transitions",
                content: "Transitions connect parts of your speech, guiding listeners from one idea to the next. While they might seem minor, effective transitions significantly improve clarity and flow.\n\nPoor transitions make speeches choppy and hard to follow. Skilled transitions create a sense of logical progression that enhances persuasiveness.\n\nIn this lesson, you'll learn to craft smooth transitions that improve your overall delivery.",
            },
            {
                type: "content",
                title: "Why Transitions Matter",
                content: "The connective tissue of speeches:\n\n**Flow:**\nTransitions create a sense of logical progression rather than disconnected points.\n\n**Clarity:**\nListeners know when you're moving to new topics versus developing existing ones.\n\n**Comprehension:**\nJudges tracking arguments benefit from clear 'movement signals.'\n\n**Persuasiveness:**\n'Therefore,' 'as a result,' and 'building on this' show logical connection, making arguments feel more unified.\n\n**Professionalism:**\nSmooth transitions sound polished and prepared.\n\n**Avoiding:**\n'Um, next...' 'Uh, also...' 'Another thing...' These non-transitions break flow and sound unprepared.",
                keyPoints: [
                    "Transitions create logical flow between points",
                    "Help judges track when you're moving vs. developing",
                    "Improve overall polish and persuasiveness",
                ],
            },
            {
                type: "question",
                id: "l19-06-q1",
                question: "Why do good transitions improve persuasiveness?",
                options: [
                    { id: "a", text: "Judges are told to prefer transitions" },
                    { id: "b", text: "They leave the judge confused" },
                    { id: "c", text: "They make speeches longer" },
                    { id: "d", text: "They show logical connection between points, making arguments feel unified and well-constructed" }
                ],
                correctAnswer: "d",
                explanation: "Transitions like 'therefore,' 'building on this,' and 'as a result' show logical relationships between points. This makes your argument feel like a unified case rather than disconnected assertions.",
            },
            {
                type: "content",
                title: "Building Transition Habits",
                content: "Make transitions automatic:\n\n**Preparation:**\nPlan transitions in advance. Know how each section connects to the next.\n\n**Practice:**\nDeliberately practice transitions during prep. Record yourself and listen.\n\n**Templates:**\nHave go-to phrases ready: 'Building on this...' 'Moving to their second point...' 'Therefore...'\n\n**Mental Model:**\nThink of your speech as a series of connected nodes, not isolated points.\n\n**Common Fix:**\nIf you catch yourself saying 'Um, next...' or 'Also...' too often, consciously replace with meaningful transitions.\n\n**The Goal:**\nSmooth, automatic transitions that require no conscious effort during speeches.",
                keyPoints: [
                    "Plan transitions during preparation",
                    "Have go-to phrases ready",
                    "Practice until transitions are automatic",
                ],
            },
            {
                type: "content",
                title: "Advanced Transition Techniques",
                content: "Beyond basic transitions:\n\n**Callback Transitions:**\n'Remember when I said X? That connects to Y because...'\n\n**Opponent Integration:**\n'They mentioned Z. That actually supports my point about...'\n\n**Structural Transitions:**\n'Having established the problem, now let me address the solution...'\n\n**Concession Transitions:**\n'Granting their point about X, this actually strengthens our position because...'\n\n**Crystallization Transitions:**\n'Everything I've said leads to one conclusion...'\n\n**The Effect:**\nAdvanced transitions demonstrate sophisticated argumentation and help judges see connections they might miss.",
                keyPoints: [
                    "Callback transitions link to earlier points",
                    "Integrate opponent content into your flow",
                    "Crystallization transitions draw conclusions",
                ],
            },
            {
                type: "content",
                title: "Types of Transitions",
                content: "Different transitions for different purposes:\n\n**Sequential:**\n'First... Second... Third...' 'Next... Following that...'\nUse for ordered lists or procedures.\n\n**Logical Consequence:**\n'Therefore... As a result... Consequently...'\nUse to show outcomes follow from premises.\n\n**Contrast:**\n'However... On the other hand... In contrast...'\nUse when moving to opposing considerations.\n\n**Addition:**\n'Furthermore... Additionally... Moreover...'\nUse when adding compatible points.\n\n**Refutation Markers:**\n'On their first argument... Turning to their second point...'\nUse when moving between responses to different arguments.\n\n**Crystallization:**\n'Taking all this together... In sum... The bottom line is...'\nUse when synthesizing conclusions.",
                keyPoints: [
                    "Sequential for ordered points",
                    "Logical consequence for outcomes/conclusions",
                    "Contrast for opposing considerations",
                ],
            },
            {
                type: "content",
                title: "Crafting Smooth Transitions",
                content: "Make transitions work:\n\n**Appropriate Length:**\nTransitions should be brief—one phrase or sentence. Long transitions waste time.\n\n**Logical Fit:**\nChoose transitions that accurately represent the relationship between points. Don't say 'Therefore' if there's no causal connection.\n\n**Variation:**\nDon't repeat the same transition constantly. Vary your markers to avoid monotony.\n\n**Natural Delivery:**\nTransitions should flow naturally, not sound mechanical. Practice until they're smooth.\n\n**Pause Slightly:**\nA brief pause before a transition signals to listeners that you're moving to something new.\n\n**Practice:**\nTransitions come from preparation. Know your speech structure well enough that transitions are automatic.",
                keyPoints: [
                    "Keep transitions brief—one phrase",
                    "Match transition type to actual relationship",
                    "Vary transitions; practice for natural delivery",
                ],
            },
            {
                type: "question",
                id: "l19-06-q2",
                question: "Which transition is appropriate when moving from a claim to its logical consequence?",
                options: [
                    { id: "a", text: "'However...' " },
                    { id: "b", text: "'Next...' " },
                    { id: "c", text: "'Therefore...' or 'As a result...'" },
                    { id: "d", text: "'In contrast...'" }
                ],
                correctAnswer: "c",
                explanation: "'Therefore' and 'As a result' indicate logical consequence—the conclusion follows from the premises. Use these when showing what results from or follows from what you've established.",
            },
            {
                type: "content",
                title: "Conclusion: Seamless Flow",
                content: "Effective transitions create logical flow and improve both clarity and persuasiveness. Small polish improvements compound into significantly better speeches.\n\n**Key Takeaways:**\n• Transitions connect ideas and signal movement\n• Use appropriate types: sequential, logical, contrast, addition\n• Keep transitions brief—one phrase or sentence\n• Match transition type to actual relationship\n• Vary transitions; avoid monotonous repetition\n• Practice for natural, smooth delivery\n\n**Looking Ahead:**\nIn the next lesson, we'll review Unit 19 concepts.\n\n**Practice Challenge:**\nGive a short speech, recording yourself. Listen specifically for transitions. Are they smooth? Appropriate? Varied? Practice improving them.",
                keyPoints: [
                    "Transitions signal logical relationships",
                    "Match type to relationship; vary for interest",
                    "Brief, natural transitions improve overall delivery",
                ],
            },
            {
                type: "content",
                title: "The 'Therefore' Test",
                content: "Checking your logic flow:\n\n**The Test:**\nCan you put 'Therefore' between your points? does it make sense?\n\n**Pass:**\n'Economy is down. Therefore, we need stimulus.' (Logical).\n\n**Fail:**\n'Economy is down. Therefore, penguins are birds.' (Illogical sequence).\n\n**Value:**\nIf 'Therefore' doesn't fit, your case structure might be disjointed. You might need a bridge explanation: 'Economy is down. This affects zoos. Therefore, penguins...'",
                keyPoints: [
                    "Use 'Therefore' to test logical connection",
                    "Disjointed points need explanatory bridges",
                    "Coherence relies on invisible logical links",
                ],
            },
            {
                type: "content",
                title: "Micro-Transitions in Rebuttal",
                content: "Speed transitions:\n\n**The Problem:**\nFull sentences take too long in fast rebuttal.\n\n**The Fix:**\nTaglines as transitions. 'Now: Solvency.' 'Next: Impact.'\n\n**Efficiency:**\nReplacing 'Now I would like to move on to their solvency argument' (11 words) with 'On Solvency:' (2 words).\n\n**Clarity:**\nThe tone shift and the header word do the work.",
                keyPoints: [
                    "Use tags for high-speed transitions",
                    "Save seconds for argumentation",
                    "Tone shift replaces connecting words",
                ],
            },
            {
                type: "question",
                id: "l19-06-q3",
                question: "What is the 'Therefore Test' used for?",
                options: [
                    { id: "a", text: "Checking if a transition is grammatical" },
                    { id: "b", text: "Checking if there is a logical connection between points" },
                    { id: "c", text: "Seeing if you are speaking too fast" },
                    { id: "d", text: "Testing microphone volume" }
                ],
                correctAnswer: "b",
                explanation: "The Therefore Test checks logic. If you can't logically say 'Therefore' between two points, they don't flow from one another, and you need to explain the connection or reorder them.",
            },
            {
                type: "content",
                title: "Linking Disparate Ideas",
                content: "How to connect unrelated arguments:\n\n**The Bridge:**\nFind a common theme.\n\n**Example:**\nMoving from 'Economic Cost' to 'Moral Duty'.\n\n**Transition:**\n'We've seen the practical cost is high. But even more importantly, the moral cost is unacceptable.'\n\n**The Link:**\nComparison of 'Cost' (Practical vs Moral). This feels smoother than just 'Next point conflict.'",
                keyPoints: [
                    "Find common themes to bridge unrelated points",
                    "Use comparison as a transition tool",
                    "Smooth jumps between different types of arguments",
                ],
            },
        ],
    },
    {
        lessonId: "l19-07",
        pages: [
            {
                type: "content",
                title: "Introduction: Unit 19 Review",
                content: "Congratulations on completing Unit 19! This unit focused on applying debate skills in practice—pulling together techniques and executing them effectively.\n\nIn this review, we'll consolidate special pleading, refutation selection, signposting, combining strategies, burden of proof, and transitions.",
            },
            {
                type: "content",
                title: "Review: Reasoning and Standards",
                content: "**Special Pleading:**\n• Claims exception to rules without justification\n• Demand: 'What makes your case different?'\n• Apply your own standards consistently\n\n**Burden of Proof:**\n• Claim-makers bear the burden to prove claims\n• Burden reversal improperly shifts this to opponents\n• Meet your own burdens proactively\n\n**Refutation Selection:**\n• Match technique to situation: false→denial, true but minor→minimization, flippable→turn\n• Layer techniques for resilience\n• Consider resources and strategic needs",
                keyPoints: [
                    "Consistent standards prevent special pleading",
                    "Claim-makers bear burden of proof",
                    "Select refutation techniques strategically",
                ],
            },
            {
                type: "content",
                title: "Review: Execution Skills",
                content: "**Signposting:**\n• Helps judges follow and credit your arguments\n• Use specific references, not vague identifiers\n• Preview structure; signpost at section beginnings\n\n**Combining Strategies:**\n• Layer compatible techniques for resilience\n• Avoid contradictory combinations (no double turns)\n• Use 'even if' framing to handle tension\n\n**Transitions:**\n• Signal movement between and relationships among ideas\n• Use appropriate types: sequential, logical, contrast\n• Brief, varied, natural transitions improve flow",
                keyPoints: [
                    "Clear signposting ensures credit",
                    "Compatible layers strengthen defense",
                    "Smooth transitions improve comprehension and polish",
                ],
            },
            {
                type: "question",
                id: "l19-07-q1",
                question: "What distinguishes special pleading from a legitimate distinction?",
                options: [
                    { id: "a", text: "Legitimate distinctions explain what makes the case different; special pleading claims exemption without justification" },
                    { id: "b", text: "Special pleading is always correct" },
                    { id: "c", text: "Legitimate distinctions are longer" },
                    { id: "d", text: "There's no difference" }
                ],
                correctAnswer: "a",
                explanation: "The key difference is justification. Legitimate distinctions explain what makes your case different and why the standard shouldn't apply. Special pleading just claims exemption without explaining the relevant difference.",
            },
            {
                type: "content",
                title: "Integrating Unit 19 Skills",
                content: "These skills work together:\n\n**Example Scenario:**\nYou're addressing a complex opponent argument:\n1. Signpost clearly: 'On their economic harm argument...'\n2. Select appropriate refutation: their evidence is weak → source criticism\n3. Layer defenses: source + warrant + minimization\n4. Transition smoothly: 'Having addressed that, moving now to...'\n5. Watch for special pleading: are you applying consistent standards?\n6. Manage burdens: meet yours proactively\n\n**The Compound Effect:**\nEach skill is valuable alone. Together, they create polished, effective debate performance.\n\n**Practice Focus:**\nWork on integrating all these skills until they're automatic.",
                keyPoints: [
                    "These skills compound when used together",
                    "Signposting + refutation selection + layering + transitions",
                    "Practice integration until automatic",
                ],
            },
            {
                type: "content",
                title: "Practice Scenarios for Unit 19",
                content: "Apply these skills:\n\n**Scenario 1:**\nOpponent applies a standard to you but claims exemption for themselves.\n→ Call out special pleading. Demand justification.\n\n**Scenario 2:**\nYou face 5 opponent arguments with limited time.\n→ Refutation selection: identify which need full layered defense vs. quick dismissal.\n\n**Scenario 3:**\nJudge seems lost in your rebuttal.\n→ Improve signposting. Be more explicit about what you're addressing.\n\n**Scenario 4:**\nOpponent says 'You can't prove it won't work.'\n→ Burden reversal. They must prove it will work.\n\n**Scenario 5:**\nYour speech feels choppy.\n→ Work on transitions between points.",
                keyPoints: [
                    "Recognize which skill each situation requires",
                    "Practice applying skills in realistic scenarios",
                    "Reflection builds application instincts",
                ],
            },
            {
                type: "question",
                id: "l19-07-q2",
                question: "When combining refutation techniques, what must you avoid?",
                options: [
                    { id: "a", text: "Using multiple techniques" },
                    { id: "b", text: "Contradictory combinations like link turn + impact turn on the same argument" },
                    { id: "c", text: "Any layered defense" },
                    { id: "d", text: "Signposting" }
                ],
                correctAnswer: "b",
                explanation: "Contradictory combinations undermine your credibility. Link turn ('it won't happen') + impact turn ('if it happens, it's good') is self-contradicting. Layer compatible techniques instead.",
            },
            {
                type: "content",
                title: "Conclusion: Applied Skills",
                content: "You've completed Unit 19, learning to apply and integrate debate skills effectively.\n\n**Key Takeaways:**\n• Special pleading: demand justification for exceptions\n• Burden of proof: claim-makers must prove claims\n• Refutation selection: match technique to argument type\n• Signposting: clear structure helps judges follow\n• Combining: layer compatible techniques; avoid contradictions\n• Transitions: connect ideas smoothly with appropriate markers\n\n**Looking Ahead:**\nUnit 20 will provide final logic skills and synthesis.\n\n**Practice Challenge:**\nIn your next practice debate, consciously apply all the skills from this unit. How do they work together?",
                keyPoints: [
                    "Integrate skills: knowing when and how to use each",
                    "Execution details compound into polished performance",
                    "Practice combining techniques in actual debates",
                ],
            },
            {
                type: "content",
                title: "Section 2 Final Exam Prep",
                content: "Prepare for the Section 2 assessment:\n\n**Key Areas:**\n• Detecting advanced fallacies (Straw Man, Ad Hominem, Circular, etc.)\n• Naming the correct refutation technique for a situation\n• Organizing a rebuttal speech (Signposting)\n• Identifying burdens of proof\n\n**Study Tip:**\nReview the 'Key Takeaways' from Units 11-20. Can you explain each concept in one sentence?\n\n**Simulation:**\nImagine an opponent argument. Rapid-fire: Name the Fallacy, Name the Refutation, Signpost the response.",
                keyPoints: [
                    "Review all advanced fallacies",
                    "Test valid vs invalid logic",
                    "Practice rapid identification",
                ],
            },
            {
                type: "content",
                title: "Integration Challenges",
                content: "Where students struggle:\n\n**The Overload:**\nCreating a layered response but forgetting to signpost it.\n\n**The Drift:**\nResponding well but losing track of the thesis.\n\n**The Fix:**\nDrills. Focus on ONE skill at a time, then TWO. Don't try to do all 5 at once until you've mastered them individually.\n\n**Example:**\nDrill 1: Just Signposting. Drill 2: Just Layering. Drill 3: Both.",
                keyPoints: [
                    "Don't overload your cognitive capacity",
                    "Master skills individually, then combine",
                    "Drill specific weaknesses",
                ],
            },
            {
                type: "question",
                id: "l19-07-q3",
                question: "What is the best way to master the integration of multiple debate skills?",
                options: [
                    { id: "a", text: "Try to do everything at once immediately" },
                    { id: "b", text: "Master each skill individually, then combine them progressively" },
                    { id: "c", text: "Watch videos only" },
                    { id: "d", text: "Give up on structure" }
                ],
                correctAnswer: "b",
                explanation: "Cognitive overload is real. Master signposting. Then master layering. Then combine them. Trying to juggle too many new skills simultaneously usually leads to failure in all of them.",
            },
            {
                type: "content",
                title: "Moving Forward",
                content: "The bridge to Advanced Debate:\n\n**From Mechanics to Strategy:**\nSection 2 taught you the *mechanics* (how to refute, how to organize). Section 3 will teach you *strategy* (how to win tournaments, judge adaptation, case construction theory).\n\n**Foundation:**\nYou can't win strategically if you can't execute mechanically. Verify your Section 2 skills are solid before moving on.",
                keyPoints: [
                    "Section 2 = Mechanics",
                    "Section 3 = Strategy",
                    "Mechanics are the foundation of strategy",
                ],
            },
        ],
    },
];
