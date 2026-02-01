import { MultiPageLesson } from "./types";

// Unit 15: Strategic Refutation
// Topics: Loaded Question, Out-of-Context Quotes, Turning Arguments, Refutation by Minimization, Complex Question Fallacy, Preemptive Refutation

export const UNIT_15_LESSONS: MultiPageLesson[] = [
    {
        lessonId: "l15-01",
        pages: [
            {
                type: "content",
                title: "Introduction: The Loaded Question",
                content: "A loaded question contains a built-in assumption that, if answered directly, traps the responder into accepting something they might reject. The classic example: 'Have you stopped cheating on tests?' Either answer implies you were cheating.\n\nLoaded questions are rhetorical traps. In debate and cross-examination, both asking loaded questions strategically and recognizing when you're being set up are essential skills.\n\nIn this lesson, you'll learn to identify loaded questions, avoid being trapped by them, and use them strategically when appropriate.",
            },
            {
                type: "content",
                title: "How Loaded Questions Work",
                content: "Loaded questions embed assumptions:\n\n**Structure:**\nThe question assumes something contentious as if it were established fact. Any direct answer accepts the assumption.\n\n**Examples:**\n'Why does your policy hurt the economy?' (Assumes it does hurt the economy)\n'How do you justify ignoring the evidence?' (Assumes you're ignoring evidence)\n'When did you realize your approach was failing?' (Assumes your approach is failing)\n\n**The Trap:**\nAnswering 'because X' or 'that's not why' still accepts the premise. Even denying the conclusion validates the underlying assumption.\n\n**Goals of Loaded Questions:**\n• Force an unfavorable admission\n• Put opponent on defensive\n• Make assumptions seem established\n• Create sound bites that seem damaging",
                keyPoints: [
                    "Loaded questions embed unproven assumptions",
                    "Any direct answer accepts the hidden premise",
                    "Goals: force admissions, establish unfavorable framing",
                ],
            },
            {
                type: "question",
                id: "l15-01-q1",
                question: "'Why are you unwilling to compromise?' is a loaded question because:",
                options: [
                    { id: "a", text: "It's too long" },
                    { id: "b", text: "It assumes unwillingness to compromise, making any direct answer accept that characterization" },
                    { id: "c", text: "It's grammatically incorrect" },
                    { id: "d", text: "It's not actually a question" }
                ],
                correctAnswer: "b",
                explanation: "This question assumes you're unwilling to compromise. Answering directly—even 'I'm not unwilling'—engages with that framing. The proper response challenges the assumption: 'I reject your characterization. I've proposed X, Y, and Z compromises.'",
            },
            {
                type: "content",
                title: "Responding to Loaded Questions",
                content: "Escape the trap by addressing the assumption:\n\n**Reject the Premise:**\n'I don't accept your characterization. Let me clarify what's actually happening...'\n\n**Reframe the Question:**\n'The real question is X, not what you're assuming. Let me address that.'\n\n**Challenge Directly:**\n'That's a loaded question. It assumes [assumption], which I don't grant.'\n\n**Pivot:**\nBriefly address the hidden assumption, then move to your stronger ground.\n\n**Unpack:**\n'Before I can answer, we need to establish whether [assumption] is even true. Here's why it isn't.'\n\n**What to Avoid:**\n• Directly answering as if the assumption is granted\n• Getting flustered or defensive\n• Ignoring the question entirely (can seem evasive)",
                keyPoints: [
                    "Reject the premise explicitly before answering",
                    "Reframe or challenge the hidden assumption",
                    "Don't answer directly—that accepts the premise",
                ],
            },
            {
                type: "content",
                title: "Using Loaded Questions Strategically",
                content: "Ask loaded questions carefully:\n\n**Legitimate Strategic Use:**\nWhen your assumption is actually established or implicitly agreed, a loaded question can push the opponent to engage with inconvenient truths.\n\n**Risk:**\nIf your assumption is easily challenged, a loaded question can backfire. Skilled opponents will expose the trap and make you look manipulative.\n\n**Better Alternative:**\nFirst establish the premise through regular questioning, then ask a question that builds on it. This is harder to escape.\n\n**Example Sequence:**\n'Your policy costs $100 billion, correct?' (Establish fact)\n'What could that money achieve if spent elsewhere?' (Now you've earned the assumption)\n\n**Caution:**\nJudges may penalize obviously manipulative questioning. Building to your point is more credible than attempting rhetorical traps.",
                keyPoints: [
                    "Loaded questions work when premises are already established",
                    "Easily challenged assumptions backfire",
                    "Better: establish premises first, then build on them",
                ],
            },
            {
                type: "question",
                id: "l15-01-q2",
                question: "What's the most effective response if an opponent asks: 'Why does your plan ignore rural communities?'",
                options: [
                    { id: "a", text: "Answer with reasons why rural communities were ignored" },
                    { id: "b", text: "Challenge the assumption: 'Our plan doesn't ignore rural communities. In fact, here's specifically how it addresses them...'" },
                    { id: "c", text: "Refuse to answer entirely" },
                    { id: "d", text: "Ask them a loaded question back" }
                ],
                correctAnswer: "b",
                explanation: "Challenge the false assumption rather than accepting it. Explain how your plan actually addresses rural communities, turning their attack into an opportunity to present positive content. Answering the question directly would accept that you ignored rural communities.",
            },
            {
                type: "content",
                title: "Conclusion: Navigating Rhetorical Traps",
                content: "Loaded questions are rhetorical traps that embed assumptions. Recognizing them protects you from damaging admissions, and knowing when to use them adds to your strategic toolkit.\n\n**Key Takeaways:**\n• Loaded questions embed unproven assumptions\n• Direct answers accept the hidden premise\n• Respond by challenging the assumption explicitly\n• Reframe the question around what's actually established\n• When asking, first establish premises through regular questioning\n• Judges may penalize obviously manipulative questioning\n\n**Looking Ahead:**\nIn the next lesson, we'll explore Out-of-Context Quotes.\n\n**Practice Challenge:**\nIdentify three loaded questions in political debates or interviews. What assumptions do they embed? How could you respond without accepting the premise?",
                keyPoints: [
                    "Recognize embedded assumptions to avoid traps",
                    "Challenge premises before engaging",
                    "Build to loaded questions by establishing premises first",
                ],
            },
        ],
    },
    {
        lessonId: "l15-02",
        pages: [
            {
                type: "content",
                title: "Introduction: Out-of-Context Quotes",
                content: "Quotes taken out of context can dramatically misrepresent meaning. A statement that seems damning in isolation might be perfectly reasonable in its full context—or vice versa.\n\nIn debate, both identifying when opponents use decontextualized quotes and ensuring your own evidence is fairly contextualized are essential for maintaining credibility.\n\nIn this lesson, you'll learn to detect and challenge out-of-context quotes, and to use quotations ethically in your own arguments.",
            },
            {
                type: "content",
                title: "How Context Changes Meaning",
                content: "Context fundamentally affects interpretation:\n\n**Textual Context:**\nWhat comes before and after the quote? Sentences that seem absolute may be qualified by surrounding text.\n\n**Author's Intent:**\nIs the quote being used to represent what the author actually meant? Sarcasm, hypotheticals, and presenting opposing views can be misrepresented.\n\n**Historical Context:**\nWhen was it said? Circumstances may have made the statement reasonable then but seem unreasonable now (or vice versa).\n\n**Audience Context:**\nWho was the intended audience? Technical statements to experts may seem strange to lay audiences.\n\n**Examples of Distortion:**\n• Cutting qualifications: 'X is good in certain circumstances' → 'X is good'\n• Missing negation: 'Critics claim X is harmful' → 'X is harmful'\n• Sarcasm as sincerity: 'Of course that worked perfectly' (sarcastic) treated as endorsement",
                keyPoints: [
                    "Textual context: what surrounds the quote matters",
                    "Author intent: sarcasm, hypotheticals can be misrepresented",
                    "Historical/audience context affects interpretation",
                ],
            },
            {
                type: "question",
                id: "l15-02-q1",
                question: "An author writes: 'Some claim this policy helps the poor. But evidence shows otherwise.' An opponent quotes only 'this policy helps the poor.' What happened?",
                options: [
                    { id: "a", text: "Fair use of the quote" },
                    { id: "b", text: "The quote removes context showing the author was presenting and then rejecting that claim" },
                    { id: "c", text: "The author changed their mind" },
                    { id: "d", text: "This is valid paraphrasing" }
                ],
                correctAnswer: "b",
                explanation: "The full context shows the author was presenting a claim they then rejected. The quote removes this critical context, making it appear the author endorsed the claim when they actually argued against it. This is deeply misleading.",
            },
            {
                type: "content",
                title: "Identifying Out-of-Context Quotes",
                content: "Red flags and verification strategies:\n\n**Red Flags:**\n• Quote seems surprisingly extreme for the source\n• Quote perfectly supports the user's point (too convenient)\n• Quote is very short or obviously truncated (...)\n• The source wouldn't plausibly hold this view\n\n**Verification:**\n• Look up the original source\n• Read surrounding sentences and paragraphs\n• Consider the author's overall position\n• Check if the quote is presenting an opposing view\n\n**During Debate:**\n• Ask for more context: 'What's the full sentence?' 'What comes before that quote?'\n• Note when quotes seem too perfect: 'This seems like it might be missing context...'\n• Request the full source for review",
                keyPoints: [
                    "Red flags: too convenient, extreme for source, clearly truncated",
                    "Verify by finding and reading the original context",
                    "In debate, ask for more context or full sourcing",
                ],
            },
            {
                type: "content",
                title: "Using Quotes Ethically",
                content: "Maintain credibility through fair quotation:\n\n**Represent Meaning:**\nYour quote should accurately represent what the author meant, not just what words they used.\n\n**Include Key Qualifications:**\nIf the author qualified their claim, include the qualification. Don't remove 'sometimes' or 'in some circumstances.'\n\n**Don't Quote Hypotheticals as Positions:**\nIf an author is presenting a view to reject it, don't quote it as their position.\n\n**Acknowledge Complexity:**\n'The author primarily argues X, though they acknowledge Y...'\n\n**When Condensing:**\nIf you must shorten quotes, use ellipses (...) and don't remove content that changes meaning.\n\n**Strategic Advantage of Honesty:**\nFair quotation builds credibility. If opponents catch you distorting quotes, you lose trust on everything else.",
                keyPoints: [
                    "Represent the author's meaning, not just their words",
                    "Include qualifications; don't remove context that changes meaning",
                    "Honest quotation builds credibility; distortion destroys it",
                ],
            },
            {
                type: "question",
                id: "l15-02-q2",
                question: "You find a perfect quote that supports your case. What should you do before using it?",
                options: [
                    { id: "a", text: "Use it immediately—speed matters" },
                    { id: "b", text: "Check the full context to ensure the quote fairly represents the source's meaning" },
                    { id: "c", text: "Edit it slightly to be even more supportive" },
                    { id: "d", text: "Attribute it to a more impressive source" }
                ],
                correctAnswer: "b",
                explanation: "Before using any quote, verify the full context. A quote that seems perfect might be out of context. If opponents expose distortion, you lose credibility. Taking time to verify protects your reputation and ensures you're arguing honestly.",
            },
            {
                type: "content",
                title: "Conclusion: Fair Quotation",
                content: "Out-of-context quotes can severely distort meaning. Ethical debaters verify context before using quotes and challenge opponents who use decontextualized evidence.\n\n**Key Takeaways:**\n• Context fundamentally affects quote interpretation\n• Red flags: too convenient, extreme for source, truncated\n• Verify by finding and reading original context\n• Ask for more context when quotes seem suspicious\n• Represent meaning, not just words; include qualifications\n• Honest quotation builds credibility; distortion destroys it\n\n**Looking Ahead:**\nIn the next lesson, we'll explore Turning Arguments—using opponent reasoning against them.\n\n**Practice Challenge:**\nFind a quote being used in an article or social media post. Look up the original source. Does the quote fairly represent the author's meaning, or is key context missing?",
                keyPoints: [
                    "Always verify context before using quotes",
                    "Challenge suspicious quotes by asking for full context",
                    "Fair quotation is both ethical and strategically sound",
                ],
            },
        ],
    },
    {
        lessonId: "l15-03",
        pages: [
            {
                type: "content",
                title: "Introduction: Turning Arguments",
                content: "A turn is one of debate's most powerful moves—taking your opponent's argument and showing it actually supports your side. Instead of just defeating their point, you co-opt it as your own advantage.\n\nTurns are devastating because they don't just neutralize offense—they flip it. If successful, your opponent now wishes they hadn't made that argument at all.\n\nIn this lesson, you'll learn the two main types of turns and how to execute them effectively.",
            },
            {
                type: "content",
                title: "Types of Turns",
                content: "There are two main varieties:\n\n**Link Turn:**\nArguing the opposite of their causal claim. If they say 'X leads to harm,' you argue 'X actually leads to benefit.'\n\nExample:\n• Their argument: 'Raising minimum wage causes unemployment.'\n• Your link turn: 'Actually, raising minimum wage increases consumer spending and creates jobs.'\n\n**Impact Turn:**\nAccepting their causal claim but arguing the outcome is actually good. If they say 'X leads to Y,' you argue 'Y is actually beneficial.'\n\nExample:\n• Their argument: 'This policy increases government debt.'\n• Your impact turn: 'Increased government debt during a recession stimulates the economy—that's the point.'\n\n**Critical Warning:**\nNever do both a link turn AND impact turn on the same argument (a 'double turn'). That would be self-contradictory: 'X doesn't lead to Y, and Y is good anyway.'",
                keyPoints: [
                    "Link turn: the opposite effect actually occurs",
                    "Impact turn: the effect occurs but is actually beneficial",
                    "Never combine both on the same argument (double turn)",
                ],
            },
            {
                type: "question",
                id: "l15-03-q1",
                question: "Opponent argues: 'Free trade leads to job losses.' Which is an impact turn?",
                options: [
                    { id: "a", text: "'Free trade actually creates more jobs than it eliminates'" },
                    { id: "b", text: "'Some job displacement is necessary for economic progress and overall prosperity'" },
                    { id: "c", text: "'Our research shows the opposite effect'" },
                    { id: "d", text: "'Your evidence is outdated'" }
                ],
                correctAnswer: "b",
                explanation: "An impact turn accepts the link (job losses) but argues the outcome is beneficial (economic progress). Option A is a link turn (opposite effect occurs). Option B accepts jobs are lost but argues this is actually positive—that's an impact turn.",
            },
            {
                type: "content",
                title: "Executing Effective Turns",
                content: "Make your turns stick:\n\n**Evidence Required:**\nTurns require evidence. 'Actually the opposite happens' needs proof, not just assertion.\n\n**Explain the Mechanism:**\nWhy does the opposite occur? What's the causal story?\n\n**Distinguish from Defense:**\nTurns are offensive, not defensive. You're not saying 'their harm is small.' You're saying 'it's actually a benefit for us.'\n\n**Commit:**\nOnce you turn, you own that position. Make sure you're comfortable defending it.\n\n**Strategic Value:**\nTurns create double jeopardy. If you win the turn, their argument actually helps you. They wish they hadn't raised it.\n\n**Clear Signaling:**\n'This isn't just a reason to reject their argument—it's a reason to vote for us. They've actually identified one of our advantages.'",
                keyPoints: [
                    "Turns need evidence explaining why the opposite is true",
                    "Explain the causal mechanism for the turn",
                    "Signal clearly that their argument now supports you",
                ],
            },
            {
                type: "content",
                title: "Avoiding and Handling Turns",
                content: "Protect yourself and respond to opponent turns:\n\n**Preemptive Defense:**\nAnticipate likely turns and address them in your case. If there's an obvious impact turn, preempt it.\n\n**Don't Double Turn Yourself:**\nIf you make a link argument and later argue the impact is good, you've contradicted yourself. Keep track of your positions.\n\n**Responding to Turns:**\n• Challenge their turn evidence\n• Show their mechanism doesn't work\n• Outweigh: even if their turn is true, your other arguments are bigger\n• Show the turn is internally contradictory\n\n**If You're Being Turned:**\nDon't panic. Turns require winning both the link and impact comparison. Challenge either element.",
                keyPoints: [
                    "Anticipate and preempt likely turns",
                    "Track your positions to avoid contradicting yourself",
                    "Challenge turn evidence, mechanism, or significance",
                ],
            },
            {
                type: "question",
                id: "l15-03-q2",
                question: "Why is a 'double turn' (doing both link and impact turn on the same argument) problematic?",
                options: [
                    { id: "a", text: "It takes too much time" },
                    { id: "b", text: "It's self-contradictory: 'X doesn't cause Y, and also Y is good' doesn't make logical sense" },
                    { id: "c", text: "Judges don't understand it" },
                    { id: "d", text: "It's against debate rules" }
                ],
                correctAnswer: "b",
                explanation: "A double turn is self-contradictory. Saying 'X doesn't lead to Y' (link turn) AND 'Y is good anyway' (impact turn) undermines both arguments. If Y doesn't happen, why argue it's good? Pick one approach and commit to it.",
            },
            {
                type: "content",
                title: "Conclusion: Flipping the Script",
                content: "Turns are among debate's most powerful tools—converting opponent arguments into your advantages. Master them carefully and watch for contradictions.\n\n**Key Takeaways:**\n• Link turn: the opposite effect actually occurs\n• Impact turn: the effect occurs but is actually beneficial\n• Never double turn (both link and impact)—it's self-contradictory\n• Turns require evidence and mechanistic explanation\n• Successful turns create double jeopardy for opponents\n• Preempt likely turns; challenge turn evidence\n\n**Looking Ahead:**\nIn the next lesson, we'll explore Refutation by Minimization.\n\n**Practice Challenge:**\nTake a common debate argument. Develop both a link turn and an impact turn (separately). Which seems more viable? What evidence would you need?",
                keyPoints: [
                    "Turns flip opponent arguments to support you",
                    "Choose link OR impact turn, never both",
                    "Evidence and mechanism are essential for effective turns",
                ],
            },
        ],
    },
    {
        lessonId: "l15-04",
        pages: [
            {
                type: "content",
                title: "Introduction: Refutation by Minimization",
                content: "Sometimes you can't fully defeat an opponent's argument, but you can minimize its significance. Refutation by minimization concedes that a point is technically true but argues it doesn't matter much in the overall debate.\n\nThis technique is especially useful when you face arguments with solid evidence that's hard to challenge directly. Rather than fighting uphill, you reduce what's at stake.\n\nIn this lesson, you'll learn to effectively minimize opponent arguments and recognize when minimization is being used against you.",
            },
            {
                type: "content",
                title: "How Minimization Works",
                content: "Minimization reduces importance rather than denying truth:\n\n**Concede and Contextualize:**\n'Yes, this happens. But the scale is much smaller than they suggest.'\n\n**Relative Insignificance:**\n'Even if true, this is minor compared to the larger benefits.'\n\n**Limited Scope:**\n'This affects a small population for a short time.'\n\n**Containability:**\n'Even if this problem occurs, it can be easily addressed.'\n\n**Probability Reduction:**\n'They assume worst case. The likely outcome is much less severe.'\n\n**The Strategy:**\nYou're not winning this specific argument—you're winning the weighing. Their point is true but not important enough to determine the round.",
                keyPoints: [
                    "Concede the point while reducing its significance",
                    "Show limited scale, scope, probability, or duration",
                    "Win on weighing, not on the individual argument",
                ],
            },
            {
                type: "question",
                id: "l15-04-q1",
                question: "Opponent shows your policy has a small unintended cost. Which is refutation by minimization?",
                options: [
                    { id: "a", text: "'Your evidence is wrong; there's no cost'" },
                    { id: "b", text: "'That cost affects few people briefly and is far outweighed by our benefits'" },
                    { id: "c", text: "'The cost is actually a benefit'" },
                    { id: "d", text: "'Costs don't matter in debate'" }
                ],
                correctAnswer: "b",
                explanation: "Minimization concedes the point (there is a cost) while reducing its significance (few people, briefly, outweighed by benefits). You're not denying the argument—you're showing it doesn't matter enough to change the decision.",
            },
            {
                type: "content",
                title: "Effective Minimization Techniques",
                content: "Make minimization persuasive:\n\n**Quantify the Reduction:**\n'They claim harm. But their own evidence shows only X people affected for Y months.'\n\n**Comparison:**\n'Even accepting their numbers, our benefits are 10 times larger.'\n\n**Alternative Solutions:**\n'If this problem emerges, we can address it with minor adjustments.'\n\n**Probability Analysis:**\n'This is their worst-case scenario. The expected outcome is much less severe.'\n\n**Timeframe Limits:**\n'This is a short-term adjustment period. Long-term effects are positive.'\n\n**Evidence Support:**\nMinimization works best when you have evidence supporting reduced significance, not just assertion.",
                keyPoints: [
                    "Quantify: show actual scale is small",
                    "Compare: show other considerations are larger",
                    "Evidence strengthens minimization claims",
                ],
            },
            {
                type: "content",
                title: "When to Use Minimization",
                content: "Strategic decisions about when minimization fits:\n\n**Use When:**\n• Their evidence is solid and hard to attack directly\n• The point is true but relatively unimportant\n• You have stronger arguments elsewhere\n• Direct refutation would take too much time\n• Conceding builds credibility for your other arguments\n\n**Don't Use When:**\n• The argument is actually devastating—minimizing looks like denial\n• You can effectively defeat the argument directly\n• Repeated minimization makes you look like you're losing everywhere\n\n**Combine with Other Strategies:**\nMinimization works well combined with weighing. 'Even if all their arguments are true, here's why ours matter more.'",
                keyPoints: [
                    "Use when opponent evidence is solid but point is minor",
                    "Don't minimize truly devastating arguments",
                    "Combine with weighing for maximum effect",
                ],
            },
            {
                type: "question",
                id: "l15-04-q2",
                question: "When should you NOT use minimization?",
                options: [
                    { id: "a", text: "When opponent evidence is hard to challenge" },
                    { id: "b", text: "When the argument is truly devastating—minimizing would look like denial" },
                    { id: "c", text: "When you want to build credibility" },
                    { id: "d", text: "When you have stronger arguments elsewhere" }
                ],
                correctAnswer: "b",
                explanation: "Don't minimize truly devastating arguments—this makes you look disconnected from reality. If an argument is genuinely round-winning for your opponent, you need to defeat it, not minimize it. Minimization is for points that are true but not determinative.",
            },
            {
                type: "content",
                title: "Conclusion: Reducing Stakes",
                content: "Refutation by minimization is a valuable tool when direct attack isn't viable. Conceding minor points while winning on significance can be strategically superior to fighting every battle.\n\n**Key Takeaways:**\n• Minimization concedes truth while reducing significance\n• Use quantification, comparison, and probability analysis\n• Best when opponent evidence is solid but point is minor\n• Don't minimize devastating arguments—that looks like denial\n• Combine with weighing for strongest effect\n• Strategic concessions can build credibility\n\n**Looking Ahead:**\nIn the next lesson, we'll explore the Complex Question Fallacy.\n\n**Practice Challenge:**\nTake an argument against your position. How would you minimize it? What evidence would you need? Would minimization be stronger than direct refutation?",
                keyPoints: [
                    "Minimization wins on weighing, not on the specific argument",
                    "Strategic for solid-but-minor opponent points",
                    "Combine with weighing and avoid for truly devastating args",
                ],
            },
        ],
    },
    {
        lessonId: "l15-05",
        pages: [
            {
                type: "content",
                title: "Introduction: The Complex Question Fallacy",
                content: "The complex question fallacy (also called 'many questions') combines multiple questions into one, forcing the responder to give a single answer that accepts all embedded premises. It's closely related to loaded questions but specifically involves multiple issues packed together.\n\nThis fallacy appears in debate, journalism, and everyday arguments as a way to force unreasonable commitments.\n\nIn this lesson, you'll learn to recognize complex questions, unpack them effectively, and avoid asking them unintentionally.",
            },
            {
                type: "content",
                title: "How Complex Questions Work",
                content: "Multiple issues disguised as one:\n\n**Structure:**\nA question that can only be answered if you accept multiple premises, some of which you might reject.\n\n**Classic Example:**\n'Do you support the wasteful new government program?'\n\nThis actually asks:\n1. Is the program wasteful?\n2. Do you support it?\n\nAnswering 'yes' or 'no' accepts premise 1.\n\n**More Examples:**\n'Will you admit your policy both increases costs and reduces quality?' (Two separate claims)\n'Why do experts disagree with your harmful position?' (Assumes harm and expert disagreement)\n\n**The Trap:**\nYou're forced to give one answer to multiple questions, accepting premises you might otherwise challenge.",
                keyPoints: [
                    "Complex questions embed multiple issues in one question",
                    "Single answers force acceptance of all premises",
                    "Unpacking reveals hidden assumptions",
                ],
            },
            {
                type: "question",
                id: "l15-05-q1",
                question: "'Is your ineffective and expensive plan worth the risk?' contains how many embedded claims?",
                options: [
                    { id: "a", text: "One" },
                    { id: "b", text: "Two" },
                    { id: "c", text: "Three (ineffective, expensive, risky)" },
                    { id: "d", text: "None—it's a neutral question" }
                ],
                correctAnswer: "c",
                explanation: "The question embeds three claims: the plan is ineffective, the plan is expensive, and the plan is risky. A yes/no answer to 'is it worth it' implicitly accepts all three characterizations. Each should be addressed separately.",
            },
            {
                type: "content",
                title: "Responding to Complex Questions",
                content: "Unpack and address separately:\n\n**Divide the Question:**\n'You've asked multiple questions at once. Let me address each separately.'\n\n**Reject Embedded Claims:**\n'I don't accept your premise that [X]. Let me explain why that's inaccurate before addressing your actual question.'\n\n**Reframe:**\n'The question assumes [X, Y, and Z]. I'll address what I think the real question is...'\n\n**Call It Out:**\n'That's a complex question that combines several disputed claims. Let me separate them.'\n\n**Example Response:**\nTo 'Will you support the wasteful new program?':\n'Let me separate that. First, the characterization as wasteful is something I'd dispute—here's the value it provides. Second, regarding support, I favor implementation with these modifications.'",
                keyPoints: [
                    "Divide the question into its component parts",
                    "Explicitly reject false embedded premises",
                    "Address each issue on its own terms",
                ],
            },
            {
                type: "content",
                title: "Avoiding Complex Questions",
                content: "Ask fair questions that allow genuine answers:\n\n**Separate Your Questions:**\nAsk 'Is the program expensive?' and then 'Is the expense justified?' rather than combining them.\n\n**Avoid Loaded Adjectives:**\nInstead of 'wasteful program,' ask about 'the program' and then explore costs separately.\n\n**Check Your Assumptions:**\nBefore asking, consider: Am I building premises into this question that the respondent might reject?\n\n**Strategic Consideration:**\nComplex questions may seem clever but can make you look manipulative. Judges often notice unfair questioning.\n\n**Better Approach:**\nEstablish premises through earlier questions, then ask cleaner questions. This is harder to escape and more credible.",
                keyPoints: [
                    "Separate questions that embed multiple issues",
                    "Establish premises before asking dependent questions",
                    "Fair questioning builds credibility",
                ],
            },
            {
                type: "question",
                id: "l15-05-q2",
                question: "How can you transform a complex question into fair questioning?",
                options: [
                    { id: "a", text: "Make it longer and more complicated" },
                    { id: "b", text: "Break it into separate questions, each addressing one issue" },
                    { id: "c", text: "Add more embedded assumptions" },
                    { id: "d", text: "Ask it faster so they can't unpack it" }
                ],
                correctAnswer: "b",
                explanation: "Fair questioning separates issues so each can be addressed on its own terms. Instead of 'Is your expensive, ineffective plan worth it?', ask 'What are the costs?' 'What are the benefits?' 'How do they compare?' This is more credible and harder to dismiss.",
            },
            {
                type: "content",
                title: "Conclusion: One Question at a Time",
                content: "Complex questions force unfair commitments by bundling issues. Unpack them to respond fairly, and avoid asking them to maintain credibility.\n\n**Key Takeaways:**\n• Complex questions embed multiple issues in one question\n• Single answers force acceptance of all hidden premises\n• Respond by dividing the question and addressing parts separately\n• Reject false premises explicitly before answering\n• When asking, separate issues and avoid loaded adjectives\n• Fair questioning builds credibility; manipulation damages it\n\n**Looking Ahead:**\nIn the next lesson, we'll explore Preemptive Refutation.\n\n**Practice Challenge:**\nFind a complex question in a debate or interview. How many issues does it embed? How could the respondent unpack it effectively?",
                keyPoints: [
                    "Unpack complex questions into component issues",
                    "Address each premise on its own terms",
                    "Fair questioning is more credible and effective",
                ],
            },
        ],
    },
    {
        lessonId: "l15-06",
        pages: [
            {
                type: "content",
                title: "Introduction: Preemptive Refutation",
                content: "Preemptive refutation addresses counterarguments before your opponent makes them. By anticipating attacks and building responses into your case, you can defuse objections before they land.\n\nThis technique shows sophisticated understanding of the debate and can make your case feel unassailable. But it requires careful judgment about what to preempt and how.\n\nIn this lesson, you'll learn to anticipate likely attacks, integrate preemptive responses effectively, and recognize when preemption is and isn't appropriate.",
            },
            {
                type: "content",
                title: "Benefits of Preemption",
                content: "Why address arguments before they're made:\n\n**Shows Preparation:**\nAnticipating objections demonstrates you've thought deeply about your position.\n\n**Controls the Frame:**\nYou characterize the objection and your response before opponents do.\n\n**Defuses Impact:**\nWhen opponents make the argument, it seems predictable and already answered.\n\n**Time Management:**\nAddressing likely attacks in constructive speeches saves rebuttal time.\n\n**Credibility:**\n'Critics might say X. Here's why that concern is addressed...' shows intellectual honesty.\n\n**Strategic Advantage:**\nOpponents may avoid making arguments you've already refuted, narrowing their options.",
                keyPoints: [
                    "Demonstrates preparation and deep understanding",
                    "Controls framing before opponent characterizes the issue",
                    "Saves rebuttal time by addressing attacks in constructive",
                ],
            },
            {
                type: "content",
                title: "Identifying What to Preempt",
                content: "Not all arguments should be preempted:\n\n**Preempt When:**\n• The attack is highly likely and predictable\n• The response strengthens your case\n• Addressing it shows thorough thinking\n• The argument would be devastating if unanswered\n\n**Don't Preempt When:**\n• The attack might not be made (don't give them ideas)\n• Your response is weak (you might advertise vulnerability)\n• It distracts from your affirmative case\n• Time is better spent on positive content\n\n**Research-Based Anticipation:**\n• What arguments do opponents typically make on this topic?\n• What are the obvious objections to your position?\n• What would you argue if you were on the other side?\n\n**Prioritize:**\nPreempt the most likely and most dangerous arguments. You can't address everything.",
                keyPoints: [
                    "Preempt predictable, dangerous arguments",
                    "Don't preempt unlikely arguments—avoid giving ideas",
                    "Research typical opponent positions on your topic",
                ],
            },
            {
                type: "question",
                id: "l15-06-q1",
                question: "When should you NOT preemptively address an argument?",
                options: [
                    { id: "a", text: "When it's highly predictable" },
                    { id: "b", text: "When addressing it would give opponents ideas they might not have had" },
                    { id: "c", text: "When you have a strong response" },
                    { id: "d", text: "When the attack would be devastating if unanswered" }
                ],
                correctAnswer: "b",
                explanation: "Don't preempt arguments opponents might not think of—you'd be giving them ideas and potentially highlighting your weaknesses. Preemption is for predictable attacks, not for advertising every possible vulnerability.",
            },
            {
                type: "content",
                title: "Integrating Preemption Effectively",
                content: "How to preempt well:\n\n**Smooth Integration:**\nPreemption should flow naturally in your case, not feel tacked on.\n\n'Some might wonder about cost. Our analysis shows [cost is manageable because...]'\n\n**Fair Characterization:**\nState the objection fairly, not as a strawman. Strong preemption addresses the real argument.\n\n**Complete Response:**\nDon't just mention the objection—fully refute it. An incomplete preemption may highlight the problem without solving it.\n\n**Signposting:**\n'Addressing a likely concern...' or 'One might object that...' signals you're preempting.\n\n**Follow Through:**\nWhen opponents make the anticipated argument, reference your preemption: 'As I addressed in my case, we've already responded to this concern...'\n\n**Don't Overdo It:**\nToo much preemption can make your case seem defensive. Balance with positive content.",
                keyPoints: [
                    "Integrate smoothly and characterize objections fairly",
                    "Complete the refutation—incomplete preemption highlights problems",
                    "Reference your preemption when opponents make the argument",
                ],
            },
            {
                type: "question",
                id: "l15-06-q2",
                question: "Why should preemptive refutation characterize the objection fairly?",
                options: [
                    { id: "a", text: "To be polite to hypothetical opponents" },
                    { id: "b", text: "Addressing a strawman version means the real objection remains unanswered" },
                    { id: "c", text: "Judges award extra points for fairness" },
                    { id: "d", text: "It takes more time, which fills speeches" }
                ],
                correctAnswer: "b",
                explanation: "If you preempt a weak version of the argument, the real objection remains unanswered. When opponents make the stronger version, your preemption looks inadequate. Address the strongest form of likely objections.",
            },
            {
                type: "content",
                title: "Conclusion: Anticipate and Address",
                content: "Preemptive refutation demonstrates preparation and can defuse attacks before they land. Used wisely, it strengthens your case and narrows opponent options.\n\n**Key Takeaways:**\n• Preemption addresses arguments before opponents make them\n• Benefits: shows preparation, controls framing, saves rebuttal time\n• Preempt predictable, dangerous arguments\n• Don't preempt unlikely arguments—avoid giving ideas\n• Characterize objections fairly and completely refute them\n• Reference preemption when opponents make anticipated arguments\n\n**Looking Ahead:**\nIn the next lesson, we'll review Unit 15 concepts.\n\n**Practice Challenge:**\nFor a position you might defend, identify the three most likely counterarguments. How would you preempt each? Which would you address in your constructive versus saving for rebuttal?",
                keyPoints: [
                    "Preemption shows sophistication and preparation",
                    "Choose carefully what to preempt",
                    "Fair characterization and complete refutation are essential",
                ],
            },
        ],
    },
    {
        lessonId: "l15-07",
        pages: [
            {
                type: "content",
                title: "Introduction: Unit 15 Review",
                content: "Congratulations on completing Unit 15! This unit focused on strategic refutation techniques that go beyond basic attack and defense.\n\nIn this review, we'll consolidate loaded questions, out-of-context quotes, turning arguments, minimization, complex questions, and preemptive refutation. These tools expand your tactical repertoire in debate.",
            },
            {
                type: "content",
                title: "Review: Questions and Quotations",
                content: "**Loaded Questions:**\n• Embed unproven assumptions that any answer accepts\n• Respond by rejecting the premise explicitly\n• When asking, establish premises first through regular questions\n\n**Out-of-Context Quotes:**\n• Context fundamentally affects interpretation\n• Red flags: too convenient, extreme for source, truncated\n• Verify by finding and reading original context\n• Use quotes that fairly represent the author's meaning\n\n**Complex Questions:**\n• Bundle multiple issues into one question\n• Unpack by addressing each issue separately\n• When asking, separate issues for fair questioning",
                keyPoints: [
                    "Challenge assumptions in loaded and complex questions",
                    "Verify quote context before using",
                    "Fair questioning builds credibility",
                ],
            },
            {
                type: "content",
                title: "Review: Offensive and Defensive Techniques",
                content: "**Turning Arguments:**\n• Link turn: opposite effect actually occurs\n• Impact turn: effect occurs but is actually beneficial\n• Never double turn (both link and impact)—it's contradictory\n• Turns convert opponent arguments into your advantages\n\n**Refutation by Minimization:**\n• Concede truth while reducing significance\n• Use when opponent evidence is solid but point is minor\n• Don't minimize truly devastating arguments\n• Combine with weighing for maximum effect\n\n**Preemptive Refutation:**\n• Address likely attacks before opponents make them\n• Preempt predictable, dangerous arguments\n• Don't preempt unlikely arguments—avoid giving ideas\n• Characterize objections fairly and completely refute",
                keyPoints: [
                    "Turns flip opponent arguments to support you",
                    "Minimization wins on weighing, not the specific argument",
                    "Preemption shows preparation and controls framing",
                ],
            },
            {
                type: "question",
                id: "l15-07-q1",
                question: "Your opponent claims your policy reduces employment. You argue reduced employment in this sector frees workers for more productive industries. What type of turn is this?",
                options: [
                    { id: "a", text: "Link turn—you're saying employment doesn't decrease" },
                    { id: "b", text: "Impact turn—you accept employment decreases but argue this is beneficial" },
                    { id: "c", text: "Double turn" },
                    { id: "d", text: "Not a turn at all" }
                ],
                correctAnswer: "b",
                explanation: "This is an impact turn. You're accepting the link (employment does decrease in that sector) but turning the impact (this is beneficial because workers move to more productive industries). You're not disputing their causal claim—you're disputing whether it's bad.",
            },
            {
                type: "question",
                id: "l15-07-q2",
                question: "When should you choose minimization over direct refutation?",
                options: [
                    { id: "a", text: "When the argument is truly devastating and round-winning" },
                    { id: "b", text: "When opponent evidence is solid but the point is minor relative to other issues" },
                    { id: "c", text: "Always—minimization is always better" },
                    { id: "d", text: "Never—always directly refute" }
                ],
                correctAnswer: "b",
                explanation: "Minimization is best when opponent evidence is hard to challenge directly but the point isn't determinative. You concede the point while winning on significance. For truly devastating arguments, you need to defeat them, not minimize them.",
            },
            {
                type: "content",
                title: "Conclusion: Strategic Refutation Toolkit",
                content: "You've completed Unit 15, building a sophisticated toolkit for strategic refutation beyond basic point-by-point attacks.\n\n**Key Takeaways:**\n• Loaded/complex questions: challenge embedded assumptions\n• Out-of-context quotes: verify before using, challenge when suspicious\n• Turns: convert opponent arguments to your advantages (link OR impact)\n• Minimization: concede minor points while winning on weighing\n• Preemption: address predictable attacks proactively\n• Choose techniques based on the specific situation\n\n**Looking Ahead:**\nUnit 16 will explore Advanced Techniques including conceding strategically and sophisticated fallacy identification.\n\n**Practice Challenge:**\nFor each technique in this unit, identify a situation where it would be the best choice. What makes that technique optimal for that situation?",
                keyPoints: [
                    "Multiple techniques for different strategic situations",
                    "Match technique to the specific argument context",
                    "Sophisticated refutation goes beyond simple denial",
                ],
            },
        ],
    },
];
