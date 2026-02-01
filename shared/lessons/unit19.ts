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
                    { id: "b", text: "Apply your standards consistently to both sides and explain any distinctions explicitly" },
                    { id: "c", text: "Ignore consistency concerns" },
                    { id: "d", text: "Claim more exceptions" }
                ],
                correctAnswer: "b",
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
                    { id: "a", text: "Direct denial—claim it's false" },
                    { id: "b", text: "Minimization—concede the point but show it's insignificant" },
                    { id: "c", text: "Turn—flip it to your side" },
                    { id: "d", text: "Ad hominem attack" }
                ],
                correctAnswer: "b",
                explanation: "Minimization is appropriate for true but minor points. 'Yes, this is accurate. But it's insignificant compared to [larger issues].' You don't fight the truth; you fight the importance.",
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
                    { id: "b", text: "When you can flip their argument to actually support your position—creating offense rather than just defense" },
                    { id: "c", text: "Always—turns are always better" },
                    { id: "d", text: "When you have no other options" }
                ],
                correctAnswer: "b",
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
                    { id: "a", text: "Judges prefer complicated speeches" },
                    { id: "b", text: "Judges might not credit your responses if they can't tell what you're addressing" },
                    { id: "c", text: "Opponents will signpost better" },
                    { id: "d", text: "It doesn't hurt you" }
                ],
                correctAnswer: "b",
                explanation: "Without clear signposting, judges might not connect your responses to opponent arguments. You could make a good response but not get credit because the judge didn't know what you were addressing.",
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
                    { id: "b", text: "It's too vague—which argument? The judge needs specificity to track your response" },
                    { id: "c", text: "It's too long" },
                    { id: "d", text: "Arguments shouldn't be addressed" }
                ],
                correctAnswer: "b",
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
                    { id: "c", text: "Judges prefer longer responses" },
                    { id: "d", text: "It's not actually more effective" }
                ],
                correctAnswer: "b",
                explanation: "Layered refutation provides resilience. If the judge doesn't buy your evidence attack, maybe they accept your warrant attack. Multiple lines of defense accumulate and are harder to fully overcome.",
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
                    { id: "b", text: "Frame clearly: 'This is primarily false. But even in the unlikely event I'm wrong, it remains a minor point.'" },
                    { id: "c", text: "Say them at the same time quickly" },
                    { id: "d", text: "Use them in different speeches" }
                ],
                correctAnswer: "b",
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
                    { id: "a", text: "Nothing—it's good logic" },
                    { id: "b", text: "Burden reversal—the proposer must prove the policy works, not demand opponents prove it won't" },
                    { id: "c", text: "The policy definitely won't work" },
                    { id: "d", text: "It's too confident" }
                ],
                correctAnswer: "b",
                explanation: "This is burden reversal. The proposer bears the burden to prove the policy works. You can't shift that burden by demanding others prove it won't. Inability to disprove doesn't constitute proof.",
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
                    { id: "a", text: "They make speeches longer" },
                    { id: "b", text: "They show logical connection between points, making arguments feel unified and well-constructed" },
                    { id: "c", text: "Judges are told to prefer transitions" },
                    { id: "d", text: "They don't improve persuasiveness" }
                ],
                correctAnswer: "b",
                explanation: "Transitions like 'therefore,' 'building on this,' and 'as a result' show logical relationships between points. This makes your argument feel like a unified case rather than disconnected assertions.",
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
                    { id: "b", text: "'Therefore...' or 'As a result...'" },
                    { id: "c", text: "'Next...' " },
                    { id: "d", text: "'In contrast...'" }
                ],
                correctAnswer: "b",
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
                    { id: "a", text: "There's no difference" },
                    { id: "b", text: "Legitimate distinctions explain what makes the case different; special pleading claims exemption without justification" },
                    { id: "c", text: "Special pleading is always correct" },
                    { id: "d", text: "Legitimate distinctions are longer" }
                ],
                correctAnswer: "b",
                explanation: "The key difference is justification. Legitimate distinctions explain what makes your case different and why the standard shouldn't apply. Special pleading just claims exemption without explaining the relevant difference.",
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
        ],
    },
];
