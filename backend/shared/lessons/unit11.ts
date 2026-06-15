import { MultiPageLesson } from "./types";

export const UNIT_11_LESSONS: MultiPageLesson[] = [
    {
        lessonId: "l11-01",
        pages: [
            {
                type: "content",
                title: "Introduction: Handling Disagreement Gracefully",
                content: "Debate involves deep disagreement, yet the best debaters maintain civility and respect throughout. Handling disagreement gracefully isn't weakness—it's a strategic advantage that builds credibility with judges and contributes to productive discourse.\n\nIn competitive debate and real-world discussions, how you disagree matters as much as what you argue. Personal attacks, dismissiveness, and hostility undermine your credibility even when your arguments are strong.\n\nIn this lesson, you'll learn techniques for maintaining composure, disagreeing substantively while respecting opponents, and turning graceful engagement into a competitive advantage.",
            },
            {
                type: "content",
                title: "Why Graceful Disagreement Matters",
                content: "Handling disagreement well serves multiple purposes:\n\n**Credibility with Judges:**\nJudges notice demeanor. Aggressive or dismissive behavior makes you seem less credible, even if your arguments are strong. Calm, respectful engagement signals confidence and maturity.\n\n**Strategic Advantage:**\nIf your opponent becomes hostile while you remain composed, the contrast works in your favor. Their aggression looks unprofessional.\n\n**Better Thinking:**\nMaintaining composure keeps you clear-headed. Anger and frustration cloud judgment and lead to mistakes.\n\n**Long-term Reputation:**\nDebate communities are small. How you treat people matters. A reputation for graciousness serves you well.\n\n**Real-world Transfer:**\nThese skills apply in professional settings, relationships, and civic life. You're practicing something valuable beyond debate.",
                keyPoints: [
                    "Judges reward composure and professionalism",
                    "Graceful behavior creates favorable contrast",
                    "Emotional control improves strategic thinking",
                ],
            },
            {
                type: "content",
                title: "Steelmanning",
                content: "The opposite of strawmanning:\n\n**The Concept:**\nAddress the STRONGEST possible version of your opponent's argument. Fix their errors, improve their phrasing, and THEN refute it.\n\n**Why Do This?**\nIt proves your argument is superior to the *best* the other side offers, not just their fumbling attempt. It shows supreme confidence and intellectual honesty.\n\n**Example:**\n'My opponent argued X, which is weak. But even if they had argued Y (a stronger version), it would still fail because...'",
                keyPoints: [
                    "Attack the strongest version of the argument",
                    "Demonstrates confidence and dominance",
                    "Prevents 'you misunderstood me' defenses",
                ],
            },
            {
                type: "content",
                title: "Tone Policing",
                content: "A debate meta-tactic to avoid:\n\n**The Tactic:**\nDismissing an argument because it was delivered with emotion or anger, rather than addressing the substance.\n\n**Why It's a Fallacy:**\nAn angry truth is still true. A polite lie is still false. While composure is strategic for *you* (to persuade), demanding it from *others* as a condition of listening is often a dodge.\n\n**Debate Response:**\n'My opponent attacks my tone because they cannot answer my argument. Let's look at the facts regardless of how they were delivered.'",
                keyPoints: [
                    "Tone doesn't determine truth",
                    "Don't dismiss substance just because of delivery",
                    "Distinguish between strategic composure and tone policing",
                ],
            },
            {
                type: "content",
                title: "Argument vs. Assertion",
                content: "Graceful disagreement requires arguments, not just 'No.'\n\n**Assertion:**\n'That's wrong.' 'I disagree.'\n(These are just statements of position).\n\n**Argument:**\n'That's wrong BECAUSE [reason] and [evidence].'\n\n**The Rule:**\nNever disagree without a 'because.' Naked disagreement looks like stubbornness. Reasoned disagreement looks like intellect.",
                keyPoints: [
                    "Disagreeing without reasons is childish",
                    "Always attach a 'because' clause",
                    "Elevate contradiction to refutation",
                ],
            },
            {
                type: "question",
                id: "l11-01-q1",
                question: "Why is maintaining composure during heated debate strategically advantageous?",
                options: [
                    { id: "a", text: "It shows you don't care about winning" },
                    { id: "b", text: "It makes your arguments stronger automatically" },
                    { id: "c", text: "It creates favorable contrast if opponents become aggressive and keeps you thinking clearly" },
                    { id: "d", text: "It's not advantageous—aggression wins debates" }
                ],
                correctAnswer: "c",
                explanation: "Maintaining composure provides dual advantages: if opponents become aggressive while you stay calm, judges notice the contrast favorably. Additionally, staying calm keeps you clear-headed and better able to think strategically, while anger leads to mistakes.",
            },
            {
                type: "content",
                title: "Techniques for Graceful Disagreement",
                content: "Practice these specific techniques:\n\n**Separate Person from Position:**\nAttack arguments, not people. 'This argument fails because...' not 'My opponent is wrong because...'\n\n**Use Neutral Language:**\nReplace 'My opponent is lying' with 'This claim isn't supported by the evidence.' Replace 'That's ridiculous' with 'Let me explain why I disagree.'\n\n**Acknowledge Valid Points:**\n'My opponent makes a fair point about costs. However...' This builds credibility and shows you're engaging honestly.\n\n**Express Disagreement Clearly but Respectfully:**\n'I disagree with this analysis because...' is direct without being personal.\n\n**Pause Before Responding:**\nIf you feel defensive or angry, take a breath. Responding from emotion rarely helps.\n\n**Assume Good Faith:**\nOpponents aren't trying to deceive. They genuinely believe their position. Engage with that belief respectfully.",
                keyPoints: [
                    "Attack arguments, not people",
                    "Use neutral, professional language",
                    "Acknowledge valid points before disagreeing",
                ],
            },
            {
                type: "content",
                title: "When Opponents Are Aggressive",
                content: "Sometimes you'll face hostile opponents. Here's how to respond:\n\n**Don't Match Their Energy:**\nReturning aggression escalates the situation and hurts you both. Stay calm even when they don't.\n\n**Redirect to Substance:**\n'I'd rather focus on the arguments. Here's why their position is problematic...'\n\n**Name the Behavior (If Necessary):**\n'My opponent seems frustrated, but let's return to the substance.' Only if egregious—don't make a big deal of minor hostility.\n\n**Let Judges Notice:**\nOvert calling out can backfire. Sometimes quietly demonstrating professionalism while they're unprofessional is more effective.\n\n**Maintain Eye Contact:**\nLooking down or away suggests they're intimidating you. Calm, steady eye contact conveys confidence.\n\n**Kill Them With Kindness:**\nStaying genuinely pleasant frustrates aggressive opponents and makes them look worse by comparison.",
                keyPoints: [
                    "Never match opponent aggression",
                    "Redirect focus to substantive arguments",
                    "Let your composure speak for itself",
                ],
            },
            {
                type: "question",
                id: "l11-01-q2",
                question: "Your opponent makes a personal attack during cross-examination. What's the best response?",
                options: [
                    { id: "a", text: "Attack them back to show strength" },
                    { id: "b", text: "Calmly redirect to substance: 'Let's focus on the arguments. My position is...'" },
                    { id: "c", text: "Complain to the judge immediately" },
                    { id: "d", text: "Remain silent until they apologize" }
                ],
                correctAnswer: "b",
                explanation: "Calmly redirecting to substance is the strongest response. It demonstrates composure, keeps you focused on winning the debate, and lets judges notice the contrast between your professionalism and their attack without you having to explicitly call it out.",
            },
            {
                type: "content",
                title: "Internal Emotional Management",
                content: "Managing your visible demeanor starts with managing internal emotions:\n\n**Prepare for Disagreement:**\nExpect opponents to attack your best arguments. Surprise makes emotional reactions more likely.\n\n**Reframe Attacks:**\nInstead of 'They're attacking me,' think 'This is an opportunity to demonstrate why my position is strong.'\n\n**Physical Techniques:**\n• Slow, deep breaths lower heart rate\n• Relax your jaw and shoulders\n• Plant your feet to feel grounded\n• Maintain relaxed posture\n\n**Remember the Goal:**\nYou're trying to persuade a judge, not defeat an enemy. Strong emotions don't serve that goal.\n\n**Post-Round Processing:**\nIf a round was frustrating, process those emotions after—not during. Write notes about what bothered you, then let go.\n\n**Long-term Perspective:**\nOne round doesn't define you. Even difficult experiences are learning opportunities.",
                keyPoints: [
                    "Expect attacks so you're not surprised",
                    "Reframe attacks as opportunities",
                    "Use physical techniques to maintain calm",
                ],
            },
            {
                type: "content",
                title: "Conclusion: Disagreement as Skill",
                content: "You've learned that how you disagree is as important as the substance of your disagreement. Graceful handling of conflict is a skill that improves with practice.\n\n**Key Takeaways:**\n• Graceful disagreement builds credibility and creates strategic advantage\n• Attack arguments, not people; use neutral language\n• Acknowledge valid points before disagreeing\n• When opponents are aggressive, don't match their energy\n• Manage internal emotions through preparation and reframing\n• Composure reflects confidence and enhances persuasion\n\n**Looking Ahead:**\nIn the next lesson, we'll explore Begging the Question—a subtle logical fallacy where conclusions are assumed in the premises.\n\n**Practice Challenge:**\nIn your next disagreement (debate or otherwise), consciously apply one technique from this lesson. Notice how it affects the interaction.",
                keyPoints: [
                    "Graceful disagreement is strategic, not weak",
                    "Composure enhances credibility and thinking",
                    "These skills transfer to all areas of life",
                ],
            },
            {
                type: "practice",
                id: "l11-01-p1",
                title: "Graceful Disagreement Drills",
                description: "Practice responding to aggressive or unfair comments with grace and professionalism.",
                practice: {
                    type: "refutation",
                    topic: "Professional Conduct",
                    targetSkill: "Maintaining composure and redirecting personal attacks",
                    instructions: "The AI will play the role of an aggressive opponent who makes personal attacks or dismissive comments. Your goal is to respond by calmly redirecting to the substance of the argument without getting defensive or aggressive.",
                    exampleResponse: "I understand you feel strongly, but let's look at the evidence I presented...",
                    successCriteria: [
                        "Avoids defensiveness or counter-attacks",
                        "Redirects conversation to substantive arguments",
                        "Maintains professional tone",
                        "Acknowledges valid points if any exist"
                    ],
                },
            },
        ],
    },
    {
        lessonId: "l11-02",
        pages: [
            {
                type: "content",
                title: "Introduction: Begging the Question",
                content: "Begging the question—also called circular reasoning—is one of the most subtle logical fallacies. It occurs when an argument's conclusion is assumed in its premise, creating the illusion of logical support without actually providing any.\n\nThis fallacy is particularly tricky because circular arguments can sound logical. The language of reasoning is present, but genuine reasoning is absent. The argument essentially says: 'A is true because A is true.'\n\nIn this lesson, you'll learn to identify circular reasoning in various forms, understand why it fails as logical support, and practice calling out this fallacy effectively.",
            },
            {
                type: "content",
                title: "The Structure of Circular Reasoning",
                content: "Circular arguments take the destination as the starting point:\n\n**The Basic Structure:**\nPremise: [Statement that assumes the conclusion]\nConclusion: [What we're trying to prove]\n\n**Simple Example:**\n'The Bible is true because it's the word of God, and we know it's the word of God because the Bible says so.'\n\nThe conclusion (Bible is true) is assumed in the premise (it's God's word). You'd need to prove it's God's word—but that proof relies on it being true.\n\n**Why It Fails:**\n• The conclusion is already contained in the premise\n• No new evidence or reasoning is provided\n• Those who don't already accept the conclusion won't accept the premise\n\n**The Test:**\nAsk: 'Would someone who doesn't already believe the conclusion accept this premise?' If not, the reasoning may be circular.",
                keyPoints: [
                    "Circular reasoning assumes the conclusion in the premise",
                    "No new evidence is actually provided",
                    "The test: Would skeptics accept the premise independently?",
                ],
            },
            {
                type: "content",
                title: "Tautologies",
                content: "The ultimate circle:\n\n**Definition:**\nA statement that is true by its own definition. 'All bachelors are unmarried men.'\n\n**In Debate:**\nTautologies are empty. They say nothing about the world.\nArgument: 'Our policy is the right thing to do because it is correct.'\nAnalysis: 'Right' and 'Correct' mean the same thing. You haven't given a reason; you've given a synonym.\n\n**Response:**\n'That's a tautology. It's true by definition but empty of meaning.'",
                keyPoints: [
                    "Tautologies are necessarily true but information-free",
                    "They restate definitions instead of proving claims",
                    "Watch for 'X is X' structures",
                ],
            },
            {
                type: "content",
                title: "Infinite Regress",
                content: "When circles spiral:\n\n**The Problem:**\nIf A requires B, and B requires C, and C requires A... where does it start?\n\n**Example:**\n'It's illegal because it's against the law.' (Why is it against the law? Because it's illegal.)\n\n**Breaking the Regress:**\nYou must eventually ground an argument in something independent—a value, a fact, or a consequence. You can't just circle back to the start.",
                keyPoints: [
                    "Circular arguments often lead to infinite loops",
                    "Arguments must anchor in independent ground",
                    "Identify where the reasoning loops back",
                ],
            },
            {
                type: "content",
                title: "Defining Terms Circularly",
                content: "A common trap in definitions:\n\n**Example:**\n'A good leader is someone who leads well.'\n\n**Usefulness:**\nZero. It tells us nothing about the qualities of leadership.\n\n**Non-Circular:**\n'A good leader is someone who inspires action, maintains integrity, and achieves group goals.'\n(Now we have criteria to debate).\n\n**Debate Tip:**\nCheck your opponent's definitions. Are they just using the word to define itself?",
                keyPoints: [
                    "Definitions must add descriptive content",
                    "Repetitive definitions prevent real debate",
                    "Demand criteria, not synonyms",
                ],
            },
            {
                type: "question",
                id: "l11-02-q1",
                question: "What makes an argument 'circular'?",
                options: [
                    { id: "a", text: "The conclusion is assumed in the premise, providing no independent support" },
                    { id: "b", text: "It uses statistics from multiple sources" },
                    { id: "c", text: "It goes around in circles physically" },
                    { id: "d", text: "It addresses multiple topics" }
                ],
                correctAnswer: "a",
                explanation: "Circular reasoning occurs when the conclusion is already assumed or embedded in the premise. This means no independent evidence or reasoning actually supports the conclusion—you'd have to already believe the conclusion to accept the premise.",
            },
            {
                type: "content",
                title: "Hidden Circularity",
                content: "Circular reasoning often hides behind sophisticated language:\n\n**Synonym Substitution:**\n'Murder is wrong because it's immoral.'\n'Murder' already means 'wrongful killing.' This doesn't explain WHY it's wrong.\n\n**Definitional Circularity:**\n'Democracy is the best system because it represents the will of the people.'\nBut representing the will of the people IS what democracy means. Why is that good?\n\n**Buried Assumptions:**\n'We should trust experts because they know what they're talking about.'\nBeing an 'expert' means knowing—but why should we trust their knowledge? This needs independent support.\n\n**Complex Examples:**\n'Free markets are efficient because prices reflect supply and demand, and supply and demand represent all available information about value.'\nThis may sound sophisticated but essentially says markets are efficient because they work how markets work.\n\n**Detection Strategy:**\nSimplify the argument to its core. Remove the complex language. Does the conclusion still have independent support?",
                keyPoints: [
                    "Synonyms can disguise circular reasoning",
                    "Complex language often hides simple circularity",
                    "Simplify arguments to test for independent support",
                ],
            },
            {
                type: "content",
                title: "Real-World Circular Arguments",
                content: "Circularity appears frequently in debates and public discourse:\n\n**Political Arguments:**\n'We need this law because society demands it.'\nBut what is 'society demanding it' based on? Often just that people want the law—circular.\n\n**Moral Arguments:**\n'Drugs should be illegal because they're wrong.'\nThis restates illegality as wrongness without explaining the underlying harm.\n\n**Authority Arguments:**\n'This policy is good because experts support it, and we should trust experts because they support good policies.'\nCircular connection between expertise and policy quality.\n\n**Economic Arguments:**\n'Capitalism is natural because people naturally seek profit.'\nDefining human nature based on capitalist assumptions.\n\n**Religious Arguments:**\n'God exists because the universe exists, and the universe exists because God created it.'\nEach claim depends on the other being true already.\n\n**How to Respond:**\n'This argument is circular—it assumes what it's trying to prove. We need independent evidence that...'",
                keyPoints: [
                    "Circular reasoning appears in politics, ethics, and economics",
                    "Look for conclusions restated as premises",
                    "Demand independent evidence for claims",
                ],
            },
            {
                type: "question",
                id: "l11-02-q2",
                question: "'We should trust the news because it reports the facts, and we know these are facts because the news reports them.' What fallacy is this?",
                options: [
                    { id: "a", text: "Ad hominem" },
                    { id: "b", text: "False dichotomy" },
                    { id: "c", text: "Appeal to emotion" },
                    { id: "d", text: "Begging the question (circular reasoning)" }
                ],
                correctAnswer: "d",
                explanation: "This is circular reasoning: we should trust the news because it's factual, but we're told it's factual because the news says so. The truth of the news is assumed to prove the truth of the news—a clear circle with no independent verification.",
            },
            {
                type: "content",
                title: "Calling Out Circularity in Debate",
                content: "When you spot circular reasoning, address it effectively:\n\n**Name It Clearly:**\n'This argument is circular. My opponent says X is true because of Y, but Y is just another way of saying X.'\n\n**Demonstrate the Circle:**\nWalk through the logic: 'They claim A proves B, but A assumes B. Watch: [demonstrate the assumption].'\n\n**Demand Independent Evidence:**\n'What we need is evidence for this claim that doesn't already assume the conclusion. Without that, the argument provides no support.'\n\n**Simplify for the Judge:**\n'Essentially, my opponent is saying X is true because X is true. That's not an argument—it's a restatement.'\n\n**Contrast with Real Evidence:**\n'Unlike my opponent's circular reasoning, I'll provide independent evidence: [your actual evidence].'\n\n**Avoid Overclaiming:**\nCircularity doesn't prove the conclusion is false—just that this argument doesn't support it. The conclusion might still be true for other reasons.",
                keyPoints: [
                    "Name the fallacy and demonstrate the circle",
                    "Demand independent evidence",
                    "Contrast with your own substantive evidence",
                ],
            },
            {
                type: "content",
                title: "Conclusion: Breaking the Circle",
                content: "You've learned to identify and challenge circular reasoning, a subtle but common logical fallacy.\n\n**Key Takeaways:**\n• Circular reasoning assumes the conclusion in the premise\n• Synonyms and complex language often hide circularity\n• Test: Would skeptics accept the premise independently?\n• Demand independent evidence that doesn't assume what it tries to prove\n• Circularity doesn't prove the conclusion false—just unsupported\n\n**Looking Ahead:**\nIn the next lesson, we'll examine avoiding fabricated evidence—the ethics and consequences of evidence integrity.\n\n**Practice Challenge:**\nListen for circular reasoning in political speeches or advertisements. Can you identify the hidden assumptions? This skill becomes automatic with practice.",
                keyPoints: [
                    "Circular reasoning provides no actual support",
                    "Test for independent acceptance of premises",
                    "Break the circle by demanding real evidence",
                ],
            },
        ],
    },
    {
        lessonId: "l11-03",
        pages: [
            {
                type: "content",
                title: "Introduction: Avoiding Fabricated Evidence",
                content: "Evidence integrity is the foundation of debate. Fabricating, falsifying, or significantly misrepresenting evidence isn't just against the rules—it undermines the entire purpose of reasoned discourse.\n\nEvery major debate organization treats evidence fabrication as one of the most serious violations possible, often resulting in disqualification and bans. Beyond competitive consequences, fabrication damages your credibility and the debate community's integrity.\n\nIn this lesson, you'll understand what constitutes evidence fabrication, why it's tempting, and how to maintain integrity while still advocating effectively.",
            },
            {
                type: "content",
                title: "What Counts as Evidence Fabrication",
                content: "Evidence fabrication takes several forms:\n\n**Complete Fabrication:**\nInventing sources, quotes, or studies that don't exist. Creating fictional experts or institutions.\n\n**Falsification:**\nAltering real evidence—changing numbers, modifying quotes, omitting crucial qualifiers.\n\n**Significant Misrepresentation:**\nUsing evidence for claims it doesn't support. Quoting out of context to change meaning.\n\n**Source Laundering:**\nCiting a secondary source as if it were primary. Claiming 'Harvard study' when you mean 'blog post citing a Harvard study.'\n\n**Expert Inflation:**\nExaggerating credentials. A blogger becomes an 'analyst'; a retired scientist becomes a 'leading researcher.'\n\n**The Gray Area:**\nSome interpretation is inevitable. The question is: Would the original author recognize your use as fair? Would a fact-checker find it accurate?\n\n**The Bright Line:**\nIf you know a claim isn't true as stated, you've crossed it.",
                keyPoints: [
                    "Fabrication includes invention, falsification, and significant misrepresentation",
                    "Source laundering and credential inflation are common violations",
                    "Ask: Would the original author recognize this as fair?",
                ],
            },
            {
                type: "content",
                title: "Contextomy (Quote Mining)",
                content: "The art of cutting words to change meaning.\n\n**Example:**\nOriginal: 'There is no evidence that X causes Y, though some suspect it might under extreme conditions.'\nQuote Mine: 'Some suspect X causes Y.'\n\n**The Deception:**\nBy cutting the 'no evidence' part, the meaning is inverted. This is a form of lying.\n\n**Defense:**\nRead the full sentence. Read the sentence before. Read the sentence after. Context creates meaning.",
                keyPoints: [
                    "Removing context can invert meaning",
                    "This is intellectually dishonest",
                    "Always check surrounding sentences",
                ],
            },
            {
                type: "content",
                title: "Palming a Card",
                content: "A magic trick metaphor for debate:\n\n**The Trick:**\nHiding evidence that hurts your case while showing only what helps.\n\n**The Ethics:**\nWhile you advocate for your side, ignoring a direct 'Not' in your own evidence source is fabrication by omission. If your study says 'The program failed in 90% of cases,' and you only read 'The program succeeded in 10% of cases' without mentioning the failure... you are misleading.",
                keyPoints: [
                    "Omission of central findings is falsification",
                    "Don't hide the headline to quote the footnote",
                    "Full disclosure builds trust",
                ],
            },
            {
                type: "content",
                title: "Ghost-Citing",
                content: "Citing sources that don't actually support the claim.\n\n**The Tactic:**\nThrowing out a citation '[Author, Year]' after a sentence, hoping no one checks.\n\n**The Risk:**\nIf the judge or opponent checks and the source says nothing about that topic, you lose instantly. It's a ' bluff' that risks the entire round.\n\n**Rule:**\nNever cite a source you haven't read or verified. A bad citation is worse than no citation.",
                keyPoints: [
                    "Don't bluff with citations",
                    "Citing irrelevant sources is a form of fabrication",
                    "Verification is easier than ever—don't risk it",
                ],
            },
            {
                type: "question",
                id: "l11-03-q1",
                question: "A debater finds a quote but removes a key qualifier that changes its meaning. Is this evidence fabrication?",
                options: [
                    { id: "a", text: "Only if they get caught" },
                    { id: "b", text: "No, they're using a real source" },
                    { id: "c", text: "Yes, intentionally removing meaning-changing qualifiers is falsification" },
                    { id: "d", text: "It depends on how important the debate is" }
                ],
                correctAnswer: "c",
                explanation: "Intentionally removing qualifiers that change the meaning of a quote is a form of falsification. Even though the source is real, you're misrepresenting what it actually says. This violates evidence integrity standards in competitive debate.",
            },
            {
                type: "content",
                title: "Why Fabrication Is Tempting (and Why to Resist)",
                content: "Understanding temptation helps you resist it:\n\n**The Temptations:**\n• You need evidence you can't find\n• Time pressure before a tournament\n• The other side seems to be winning\n• 'Just this once' mentality\n• Belief that your conclusion is right anyway\n\n**Why People Rationalize:**\n'The conclusion is true, I just need evidence.'\n'Everyone does it.'\n'I'll never get caught.'\n'It's just a debate round.'\n\n**Why to Resist:**\n• Getting caught ends your reputation and possibly your debate career\n• It becomes easier each time—a slippery slope\n• It undermines your own learning\n• It violates opponents' right to a fair contest\n• Debate skills include research—you're cheating yourself\n\n**The Real Problem:**\nIf you can't find evidence for your position, perhaps the position needs reconsidering. That's valuable feedback you lose by fabricating.",
                keyPoints: [
                    "Temptation increases under time pressure and desperation",
                    "Rationalization makes fabrication seem acceptable",
                    "Consequences include reputation damage and lost learning",
                ],
            },
            {
                type: "content",
                title: "Maintaining Integrity Under Pressure",
                content: "Practical strategies for staying honest:\n\n**Better Research:**\nOften the evidence exists—you just haven't found it. Develop stronger research skills rather than fabricating.\n\n**Adapt Your Case:**\nIf evidence doesn't support an argument, modify or drop the argument. This is intellectually honest and often strategically wise.\n\n**Use What You Have:**\nBe clear about what evidence shows and doesn't show. 'The evidence suggests...' rather than overclaiming.\n\n**Cite Accurately:**\nDouble-check quotes and sources. Easy mistakes can look like intentional fabrication.\n\n**Keep Documentation:**\nMaintain records of where evidence came from. This protects you if challenged.\n\n**Develop Analytical Arguments:**\nSometimes logical reasoning can substitute for empirical evidence. Analyze rather than claim if evidence is weak.\n\n**Time Management:**\nRushed research leads to temptation. Build adequate prep time into your schedule.",
                keyPoints: [
                    "Better research is the alternative to fabrication",
                    "Adapt arguments to available evidence",
                    "Good documentation protects against false accusations",
                ],
            },
            {
                type: "question",
                id: "l11-03-q2",
                question: "You can't find evidence for an important argument. What's the most ethical approach?",
                options: [
                    { id: "a", text: "Modify or drop the argument, or make an analytical case without empirical claims" },
                    { id: "b", text: "Make up a study that supports your position" },
                    { id: "c", text: "Cite a source that says something similar enough" },
                    { id: "d", text: "Ask a teammate to fabricate evidence so you're not responsible" }
                ],
                correctAnswer: "a",
                explanation: "The ethical approach is to work with what you have. Modify the argument to match available evidence, drop unsupported claims, or make analytical arguments without empirical claims. Fabricating or misrepresenting sources violates evidence integrity rules regardless of who does it.",
            },
            {
                type: "content",
                title: "When You Suspect Opponent Fabrication",
                content: "How to handle suspected fabrication:\n\n**First: Verify:**\nMaybe you misheard, or the source exists and you don't know it. Request evidence in cross-examination if allowed by format.\n\n**Request Sources:**\nAsking for author, date, and publication is legitimate. Vague citations warrant scrutiny.\n\n**Point Out Problems:**\nIf evidence sounds suspicious: 'My opponent cites a source but hasn't provided verification. Until they can confirm this, the judge should discount it.'\n\n**After the Round:**\nIf you have serious concerns about fabrication, most tournaments have procedures for evidence challenges. Use them appropriately.\n\n**What NOT to Do:**\n• Don't accuse without basis—false accusations are also serious\n• Don't make a big scene—calm, procedural is better\n• Don't fabricate yourself in response\n\n**Good Faith:**\nMost evidence problems are mistakes, not intentional fabrication. Give opponents the benefit of the doubt initially.",
                keyPoints: [
                    "Verify before accusing—many issues are honest mistakes",
                    "Request source details through proper procedures",
                    "Use tournament evidence challenge processes appropriately",
                ],
            },
            {
                type: "content",
                title: "Conclusion: Integrity as Foundation",
                content: "Evidence integrity isn't just a rule—it's the foundation that makes debate meaningful. Without trust in evidence, reasoned discourse becomes impossible.\n\n**Key Takeaways:**\n• Fabrication includes invention, falsification, and significant misrepresentation\n• Temptation increases under pressure; prepare strategies to resist\n• Better research and adaptive argumentation are ethical alternatives\n• Maintain documentation to protect against false accusations\n• Handle suspected opponent fabrication through proper channels\n\n**Looking Ahead:**\nIn the next lesson, we'll explore Hasty Generalization—drawing broad conclusions from insufficient evidence.\n\n**Practice Challenge:**\nReview your evidence files. Is everything accurately cited? Are qualifiers preserved? Do your sources say what you claim? Regular auditing maintains integrity.",
                keyPoints: [
                    "Evidence integrity makes debate meaningful",
                    "Alternatives to fabrication include better research and argument adaptation",
                    "Treat suspected fabrication with due process, not accusations",
                ],
            },
            {
                type: "practice",
                id: "l11-03-p1",
                title: "Evaluating Sourcing Integrity",
                description: "Practice identifying ethical and unethical evidence practices.",
                practice: {
                    type: "fallacy-spotter",
                    topic: "Research Ethics",
                    targetSkill: "Distinguishing valid citation from fabrication and source laundering",
                    instructions: "You will be presented with a scenario where a debater uses evidence. Determine if their usage is ethical, questionable, or a violation of integrity, and explain why.",
                    exampleResponse: "This is a violation (source laundering). They cited the secondary source (the blog) as if it were the primary authority (the Harvard study), which misrepresents the reliability of the evidence.",
                    successCriteria: [
                        "Correctly identifies integrity violations",
                        "Distinguishes between minor errors and fabrication",
                        "Explains the specific ethical problem (e.g., laundering vs. falsification)"
                    ],
                },
            },
        ],
    },
    {
        lessonId: "l11-04",
        pages: [
            {
                type: "content",
                title: "Introduction: Hasty Generalization",
                content: "Hasty generalization occurs when we draw broad conclusions from insufficient evidence—typically too few examples or an unrepresentative sample. It's one of the most common reasoning errors in everyday argument.\n\n'I met two rude New Yorkers, so New Yorkers are rude.' This generalizes from two instances to millions of people. The sample is far too small and probably not representative.\n\nIn this lesson, you'll learn to identify hasty generalizations, understand what makes samples adequate for conclusions, and effectively challenge overgeneralized claims.",
            },
            {
                type: "content",
                title: "The Structure of Hasty Generalization",
                content: "Hasty generalization follows a predictable pattern:\n\n**The Structure:**\n1. Observe a small number of cases\n2. Draw a conclusion about all or most cases\n3. The sample is too small or unrepresentative\n\n**Examples:**\n'My uncle smoked and lived to 95. Smoking isn't dangerous.'\nOne person's experience doesn't override population-level evidence.\n\n'This school's test scores dropped after the new curriculum. The curriculum doesn't work.'\nOne school, one year—insufficient to evaluate an educational approach.\n\n'I tried this diet and didn't lose weight. It doesn't work.'\nOne person's experience with many potential confounders.\n\n**Why It's Tempting:**\nWe naturally generalize from experience—it's how we learn. But knowing when samples are adequate requires statistical thinking that doesn't come naturally.\n\n**The Problem:**\nSmall, convenient samples often differ from the broader population. What's true for them may not be true generally.",
                keyPoints: [
                    "Hasty generalization draws broad conclusions from too few cases",
                    "Small samples may not represent the broader population",
                    "Personal experience is often too limited for general conclusions",
                ],
            },
            {
                type: "content",
                title: "The N=1 Fallacy",
                content: "The danger of the single anecdote:\n\n**The Logic:**\n'I did X and got Y result. Therefore X causes Y.'\n\n**The Problem:**\nYou are a sample of one. Maybe you were lucky. Maybe you have special genes. Maybe you just worked harder.\n\n**In Arguments:**\n'My grandfather smoked and lived to 90.'\n(N=1 outlier).\n'My cousin got sick after the vaccine.'\n(N=1 correlation).\n\n**Response:**\n'That is an N of 1. What does the N of 1,000,000 say?'",
                keyPoints: [
                    "Single anecdotes (N=1) prove nothing about general trends",
                    "Individual variation overwhelms general rules in small samples",
                    "Shift focus to population-level data",
                ],
            },
            {
                type: "content",
                title: "Outliers",
                content: "Extreme cases that skew perception.\n\n**The Concept:**\nMost data points cluster in the middle (the average). A few are far away (outliers).\n\n**The Fallacy:**\nGeneralizing from outliers.\n'Basketball players are all 7 feet tall.' (No, you just notice the tall ones).\n'Tech startups make billions.' (No, most fail; you only hear about the unicorns).\n\n**Debate Use:**\n'Is this example typical or an outlier?'",
                keyPoints: [
                    "Outliers are memorable but unrepresentative",
                    "Generalizing from outliers creates false realities",
                    "Always ask for the median/average experience",
                ],
            },
            {
                type: "content",
                title: "Law of Small Numbers",
                content: "A cognitive bias:\n\n**The Bias:**\nWe expect small samples to look like the whole population. We trust small samples too much.\n\n**The Math:**\nSmall samples have EXTREME results more often than large samples.\n(A hospital with 2 babies a day might have 100% boys. A hospital with 100 babies a day never will).\n\n**Lesson:**\nBe skeptical of extreme results from small studies. They are often just statistical noise.",
                keyPoints: [
                    "Small samples produce extreme results by chance",
                    "Don't confuse small-sample variance with real trends",
                    "Require larger samples for bold claims",
                ],
            },
            {
                type: "question",
                id: "l11-04-q1",
                question: "'I've asked three friends and they all agree with me, so most people must agree.' What fallacy is this?",
                options: [
                    { id: "a", text: "Begging the question" },
                    { id: "b", text: "Ad hominem" },
                    { id: "c", text: "Hasty generalization" },
                    { id: "d", text: "False dichotomy" }
                ],
                correctAnswer: "c",
                explanation: "This is hasty generalization—drawing a conclusion about 'most people' from only three friends. The sample is both too small and unrepresentative (friends likely share similar views). Proper polling with adequate sample size would be needed for such claims.",
            },
            {
                type: "content",
                title: "What Makes Samples Adequate",
                content: "Understanding adequate samples helps you evaluate claims:\n\n**Sample Size:**\nLarger samples are more reliable. Thirty isn't enough to generalize about millions. But how many is enough depends on what you're measuring and the variability involved.\n\n**Representativeness:**\nSamples must represent the broader population. Surveying only college students about national opinions gives biased results regardless of size.\n\n**Selection Method:**\nRandom selection produces representative samples. Convenience sampling (whoever's easiest to reach) often doesn't.\n\n**Effect Size:**\nSmaller effects require larger samples to detect reliably. A subtle difference needs thousands of observations; an obvious one might show in dozens.\n\n**Practical Guidelines:**\n• National polls typically need 1,000+ respondents\n• Medical trials need enough participants to detect the expected effect\n• Personal anecdotes almost never justify general claims\n\n**The Principle:**\nThe broader your claim, the more evidence you need. 'Some X do Y' requires less evidence than 'All X do Y.'",
                keyPoints: [
                    "Size, representativeness, and selection method all matter",
                    "Random selection produces better samples than convenience",
                    "Broader claims require more evidence",
                ],
            },
            {
                type: "content",
                title: "Hasty Generalization in Debate",
                content: "Watch for overgeneralization in common debate contexts:\n\n**Policy Arguments:**\n'This program failed in one city, so it will fail everywhere.'\nOne implementation doesn't prove universal failure—context matters.\n\n**Trend Arguments:**\n'Crime rose this year, showing the policy failed.'\nOne year's fluctuation doesn't establish a trend. Multi-year data is more reliable.\n\n**Comparative Arguments:**\n'Country X does Y and succeeds, so we should too.'\nOne country's experience may not generalize. Cultural, economic, and institutional differences matter.\n\n**Example Arguments:**\n'Here's a case where this happened.'\nExamples illustrate possibilities but don't prove frequencies. Ask: 'What percentage of cases look like this?'\n\n**The Attack:**\n• Challenge sample size: 'How many cases were examined?'\n• Challenge representativeness: 'Is this typical or cherry-picked?'\n• Demand broader evidence: 'What do systematic studies show?'",
                keyPoints: [
                    "Single cases rarely prove general patterns",
                    "Multi-year data is more reliable than single-year fluctuations",
                    "Examples illustrate possibilities, not frequencies",
                ],
            },
            {
                type: "question",
                id: "l11-04-q2",
                question: "An opponent cites one country where a policy succeeded. What's the best challenge?",
                options: [
                    { id: "a", text: "Ask whether the example is typical or cherry-picked, and what broader comparisons show" },
                    { id: "b", text: "That country doesn't exist" },
                    { id: "c", text: "Personal attacks on that country's leaders" },
                    { id: "d", text: "Ignore the example entirely" }
                ],
                correctAnswer: "a",
                explanation: "One country's experience doesn't prove a policy works everywhere. Challenge whether this example is representative or cherry-picked, and ask for broader comparative evidence. Countries differ in ways that affect policy outcomes.",
            },
            {
                type: "content",
                title: "Responding to Hasty Generalization",
                content: "When opponents overgeneralize:\n\n**Identify the Fallacy:**\n'My opponent generalizes from one case to all cases. That's insufficient evidence for such a broad claim.'\n\n**Question Sample Adequacy:**\n'How many data points support this conclusion? Is this sample representative or cherry-picked?'\n\n**Provide Counter-Examples:**\n'Here's evidence showing the opposite pattern.' Counter-examples prove the generalization isn't universal.\n\n**Demand Systematic Evidence:**\n'Rather than isolated examples, what do comprehensive studies show?'\n\n**Qualify the Claim:**\n'Perhaps this is true in some cases, but we can't generalize from limited evidence.'\n\n**Compare Anecdote to Data:**\n'My opponent offers anecdotes; I offer systematic research. Data trumps stories.'\n\n**Explain Why the Sample Might Be Biased:**\n'This example was selected to support their position. What about cases that don't fit?'",
                keyPoints: [
                    "Question sample size and representativeness",
                    "Counter-examples show generalizations aren't universal",
                    "Contrast anecdotes with systematic data",
                ],
            },
            {
                type: "content",
                title: "Conclusion: From Part to Whole",
                content: "You've learned to identify hasty generalization and understand what makes samples adequate for supporting claims.\n\n**Key Takeaways:**\n• Hasty generalization draws broad conclusions from too few cases\n• Adequate samples require sufficient size and representativeness\n• Single examples rarely justify universal claims\n• Challenge overgeneralizations by questioning sample adequacy\n• Counter-examples disprove universal claims\n• Systematic evidence trumps anecdotes\n\n**Looking Ahead:**\nIn the next lesson, we'll explore Fact-Checking Techniques—practical skills for verifying claims in real-time.\n\n**Practice Challenge:**\nNotice generalizations in news and advertising. How many cases were observed? Is the sample representative? Most everyday claims are more generalized than the evidence warrants.",
                keyPoints: [
                    "Hasty generalization is extremely common",
                    "Sample adequacy depends on size and representativeness",
                    "Always ask: 'How many cases? Were they typical?'",
                ],
            },
        ],
    },
    {
        lessonId: "l11-05",
        pages: [
            {
                type: "content",
                title: "Introduction: Fact-Checking Techniques",
                content: "In the age of misinformation, the ability to verify claims quickly is essential. Whether in debate rounds, research, or daily life, fact-checking skills help you distinguish truth from fiction.\n\nEffective fact-checking isn't just about finding confirming sources—it's about systematic verification. A claim might appear in many places but originate from a single unreliable source. The goal is to trace claims to their origins and evaluate reliability.\n\nIn this lesson, you'll learn practical techniques for verifying claims, from lateral reading to source tracing to using fact-checking organizations effectively.",
            },
            {
                type: "content",
                title: "Lateral Reading",
                content: "Experts verify claims by reading laterally—leaving a source to verify it elsewhere:\n\n**What Lateral Reading Means:**\nInstead of reading deeply within an unfamiliar source, open new tabs to see what OTHER sources say about this source. What's its reputation? Who runs it? Is it reliable?\n\n**The Process:**\n1. See an unfamiliar claim or source\n2. Open new tabs\n3. Search for information ABOUT the source\n4. Only then decide whether to trust it\n\n**Example:**\nYou find an impressive-sounding 'Institute for Policy Research.' Before reading their report:\n• Search: 'Institute for Policy Research credibility'\n• Check: Who funds them? What's their ideological orientation?\n• Verify: Do experts cite them favorably?\n\n**Why It Works:**\nSources can look credible but be unreliable. Lateral reading uses the broader internet to assess reliability rather than just the source's self-presentation.\n\n**The Key Insight:**\nSpend less time on the original source initially and more time verifying whether it deserves your attention.",
                keyPoints: [
                    "Lateral reading checks sources in new tabs before reading deeply",
                    "Search for what others say ABOUT the source",
                    "Don't trust self-presentation—verify externally",
                ],
            },
            {
                type: "content",
                title: "Click Restraint",
                content: "A skill of digital detectives:\n\n**The Problem:**\nMost people click the first result on Google. The first result is often an ad or optimized SEO spam.\n\n**The Skill:**\nScan the whole search results page. Look at the snippets. Look at the URLs.\nWho is publishing this?\nWhen was it published?\n\n**The Act:**\nDon't click immediately. Restrain yourself. Choose the *best* result, not the *first* result.",
                keyPoints: [
                    "First results are often ads or SEO spam",
                    "Scan the Search Engine Results Page (SERP) fully",
                    "Choose reliability over immediacy",
                ],
            },
            {
                type: "content",
                title: "Deepfakes Awareness",
                content: "Seeing isn't believing anymore:\n\n**The Reality:**\nAI can generate photorealistic faces, voices, and videos.\n\n**Verification:**\n• Look for unnatural blinking or mouth movements\n• Check authoritative sources (did legit news confirm this video?)\n• Reverse image search (often deepfakes use old stock photos as bases)\n\n**Debate:**\nBe careful using 'video evidence' from unverified social media accounts.",
                keyPoints: [
                    "Media can be synthesized",
                    "Verify provenance (origin) of video/audio",
                    "Rely on trusted verification outlets",
                ],
            },
            {
                type: "content",
                title: "Sibling Sites",
                content: "When verification is a loop:\n\n**The Trap:**\nSite A says 'X'.\nSite B cites Site A.\nSite C cites Site B.\nThey all look independent, but they are owned by the same network.\n\n**The Check:**\n'Who owns this domain?'\n'Are these sites actually independent?'\nReal corroboration comes from UNCONNECTED sources.",
                keyPoints: [
                    "Networks of fake sites simulate consensus",
                    "Check ownership and affiliation",
                    "Seek truly independent confirmation",
                ],
            },
            {
                type: "question",
                id: "l11-05-q1",
                question: "You find an article from an organization you've never heard of. What should you do first?",
                options: [
                    { id: "a", text: "Read the entire article carefully" },
                    { id: "b", text: "Open new tabs to see what independent sources say about this organization" },
                    { id: "c", text: "Assume it's reliable because it looks professional" },
                    { id: "d", text: "Share it on social media immediately" }
                ],
                correctAnswer: "b",
                explanation: "Before investing time in an unfamiliar source, verify its credibility through lateral reading. Open new tabs to search for what independent, reliable sources say about this organization. Professional appearance doesn't guarantee reliability.",
            },
            {
                type: "content",
                title: "Tracing Claims to Sources",
                content: "Many claims circulate without proper sourcing. Trace them back:\n\n**The Problem:**\nA claim might be repeated by dozens of sources that all trace back to one original source. If that source is unreliable, the claim is too—regardless of how widely it's repeated.\n\n**The Process:**\n1. Where did this specific claim originate?\n2. What evidence supports the original claim?\n3. Is that evidence reliable and well-documented?\n\n**Follow the Chain:**\nNews article → cites blog post → cites tweet → cites anonymous source\nThis chain is weaker than it appears. The claim has one actual source.\n\n**Red Flags:**\n• 'Studies show...' without naming the study\n• Circular sourcing (sites citing each other)\n• Single-source stories amplified widely\n• Claims that disappear when you look for primary sources\n\n**What to Look For:**\n• Named researchers and institutions\n• Published in identifiable venues\n• Methodology described or available\n• Primary data accessible\n\n**The Principle:**\nA claim's credibility depends on its origin, not its amplification.",
                keyPoints: [
                    "Trace claims to their original source",
                    "Widespread repetition doesn't equal credibility",
                    "Look for primary sources with verifiable methodology",
                ],
            },
            {
                type: "content",
                title: "Using Fact-Check Organizations",
                content: "Professional fact-checkers can help verify claims:\n\n**Major Fact-Checkers:**\n• FactCheck.org (Annenberg Public Policy Center)\n• PolitiFact (Poynter Institute)\n• Snopes (older, covers broad range)\n• Washington Post Fact Checker\n• AP Fact Check\n• Full Fact (UK-based)\n\n**How to Use Them:**\n• Search the claim + 'fact check'\n• Read the full analysis, not just the rating\n• Note what evidence they used\n• Check if multiple fact-checkers agree\n\n**Limitations:**\n• May not have checked your specific claim\n• Can have subtle biases\n• Ratings are sometimes contested\n• Not always up-to-date on evolving claims\n\n**Best Practice:**\nFact-checkers are a starting point, not the final word. Use their methodology and sources as a model for your own verification.\n\n**For Debate:**\nFact-check organizations aren't usually cited as evidence, but they point you to original sources that are citable.",
                keyPoints: [
                    "Professional fact-checkers provide verification of common claims",
                    "Read full analyses, not just ratings",
                    "Use them as starting points, not final authorities",
                ],
            },
            {
                type: "question",
                id: "l11-05-q2",
                question: "A viral claim cites 'a new study' but doesn't name the study or researchers. What's the appropriate level of skepticism?",
                options: [
                    { id: "a", text: "None—if it's viral, it must be true" },
                    { id: "b", text: "Believe it but don't share it" },
                    { id: "c", text: "High—unspecified studies are red flags that require verification" },
                    { id: "d", text: "Only trust it if a celebrity shared it" }
                ],
                correctAnswer: "c",
                explanation: "Vague references to unnamed studies are red flags. Legitimate claims can specify who conducted the research, where it was published, and basic methodology. Absence of these details warrants high skepticism and further verification before accepting or sharing.",
            },
            {
                type: "content",
                title: "Quick Verification Strategies",
                content: "Practical techniques for fast fact-checking:\n\n**Search the Claim Exactly:**\nCopy the exact claim into a search engine. See if it's disputed or verified elsewhere.\n\n**Reverse Image Search:**\nImages can be misrepresented. Reverse search to find origin and context.\n\n**Check Date and Context:**\nOld news stories sometimes recirculate as new. Real events can be misrepresented.\n\n**Look for Original Documents:**\nIf a claim is about a study, law, or statement, find the original. Is it accurately represented?\n\n**Verify Quotes:**\nQuotes are often fabricated or altered. Search for the exact quote with the speaker's name.\n\n**Check Multiple Perspectives:**\nIf only partisan sources report something, be skeptical. Major news should be reported by multiple neutral outlets.\n\n**Consider Source Quality:**\nWho benefits from this claim? Does the source have expertise? What's their track record?\n\n**Apply the Ridiculous Test:**\nIf true, would this be major news? If major outlets aren't reporting it, ask why.",
                keyPoints: [
                    "Search exact claims to find verification or disputes",
                    "Reverse image search catches misrepresented images",
                    "Verify quotes—they're often fabricated or altered",
                ],
            },
            {
                type: "content",
                title: "Conclusion: Verification as Habit",
                content: "Fact-checking is a skill that improves with practice. Making verification habitual protects you from misinformation and strengthens your arguments.\n\n**Key Takeaways:**\n• Use lateral reading—verify sources before investing time\n• Trace claims to primary sources; amplification isn't credibility\n• Fact-checking organizations are helpful starting points\n• Quick checks: exact searches, reverse image, original documents\n• Multiple independent sources are more reliable than many citing one\n\n**Looking Ahead:**\nIn the next lesson, we'll explore the Texas Sharpshooter Fallacy—cherry-picking data to create misleading patterns.\n\n**Practice Challenge:**\nPick a viral claim you've seen recently. Spend 10 minutes fact-checking it using lateral reading and source tracing. What did you discover?",
                keyPoints: [
                    "Verification should become automatic habit",
                    "Trace claims to origins; check sources laterally",
                    "Quick checks can reveal most misinformation",
                ],
            },
            {
                type: "practice",
                id: "l11-05-p1",
                title: "Fact-Checking Simulation",
                description: "Practice quickly verifying suspicious claims using lateral reading techniques.",
                practice: {
                    type: "fallacy-spotter",
                    topic: "Misinformation Verification",
                    targetSkill: "Identifying red flags and specifying verification steps",
                    instructions: "You will be presented with a suspicious claim (e.g., a viral image or study). Identify the potential red flags and describe the specific steps you would take to verify it (e.g., 'I would reverse image search the photo' or 'I would search for the organization's funding').",
                    exampleResponse: "Red flag: No link to the study and the website seems biased. Steps: 1. Search the study title in Google Scholar. 2. Look up the author's credentials. 3. Check if reputable news outlets have covered it.",
                    successCriteria: [
                        "Identifies credible red flags (vague attribution, sensational language)",
                        "Proposes concrete verification steps (lateral reading, reverse search)",
                        "Demonstrates skepticism appropriate to the claim"
                    ],
                },
            },
        ],
    },
    {
        lessonId: "l11-06",
        pages: [
            {
                type: "content",
                title: "Introduction: The Texas Sharpshooter Fallacy",
                content: "The Texas Sharpshooter fallacy gets its name from a story: A shooter fires at a barn, then paints a bullseye around wherever the bullets landed. It looks like impressive accuracy, but the 'target' was drawn after the fact.\n\nThis fallacy occurs when patterns are identified or highlighted after the data is collected, making random variation look meaningful. It's a form of cherry-picking that creates the illusion of significant findings.\n\nIn this lesson, you'll learn to identify Texas Sharpshooter reasoning, understand why post-hoc pattern finding is problematic, and challenge this type of misleading analysis.",
            },
            {
                type: "content",
                title: "The Structure of the Fallacy",
                content: "Understanding how this fallacy works:\n\n**The Process:**\n1. Collect or encounter data\n2. After seeing the data, identify a cluster or pattern\n3. Claim this pattern is meaningful\n4. Ignore all the data that doesn't fit the pattern\n\n**Why It Fails:**\nIn any dataset, some apparent patterns will appear by chance. If you look at enough data points, you'll find clusters—but they're meaningful only if predicted in advance.\n\n**Simple Example:**\nA stock picker brags: 'I predicted these 5 stocks would rise!' But they predicted 100 stocks would rise, and only mentioned the 5 that did.\n\n**Cancer Cluster Example:**\nA town notices multiple cancer cases on one street. Is there a cause? Maybe—or maybe it's random variation. You'd find 'clusters' somewhere if you looked at enough data points.\n\n**The Key Problem:**\nThe pattern was identified after looking at the data. Predictions made in advance can be tested; patterns found afterward might be coincidence.",
                keyPoints: [
                    "Patterns identified after seeing data may be random",
                    "Cherry-picking confirming cases while ignoring others",
                    "Advance predictions are testable; post-hoc patterns may be noise",
                ],
            },
            {
                type: "content",
                title: "P-Hacking",
                content: "How scientists (accidentally) cheat:\n\n**The Concept:**\n'P-value' measures statistical significance. Scientists want a p-value below 0.05.\n\n**The Hack:**\nTesting variables in many different ways until one combination yields p < 0.05.\n'Demopcats didn't vote differently... but *young female* Democrats in *rural* areas did!'\n\n**The Result:**\nA false positive presented as a major discovery.\n\n**Defense:**\n'Was this specific subgroup analysis planned before the study started?'",
                keyPoints: [
                    "Manipulating analysis to find 'significance'",
                    "Subgroup analysis is a common hiding place for p-hacking",
                    "Demand pre-registered analysis plans",
                ],
            },
            {
                type: "content",
                title: "Data Dredging",
                content: "Fishing for correlations:\n\n**The Analogy:**\nDragging a net along the bottom of the ocean. You'll catch *something*.\n\n**The Fallacy:**\nIf you have a massive database and look for ANY correlation, you will find bogus ones. (e.g., 'US spending on science correlates with hanging suicides').\n\n**Spurious Correlations:**\nPatterns without cause. Texas Sharpshooters love them because they look like perfect hits.",
                keyPoints: [
                    "Big data guarantees random correlations",
                    "Correlation without theory is suspect",
                    "Check for causality mechanisms",
                ],
            },
            {
                type: "content",
                title: "The Bonferroni Correction",
                content: "The statistical fix:\n\n**The Logic:**\nIf you test 20 things, your chance of a false positive is high.\n\n**The Correction:**\nDivide your significance threshold by the number of tests. If testing 20 things, you need p < 0.0025, not 0.05.\n\n**Debate Use:**\n'My opponent cites a study that tested 100 variables. Did they correct for multiple comparisons? If not, their 'significant' finding is likely noise.'",
                keyPoints: [
                    "More tests require stricter evidence standards",
                    "Correcting for multiple comparisons prevents false positives",
                    "Ask: Did they adjust for the number of attempts?",
                ],
            },
            {
                type: "question",
                id: "l11-06-q1",
                question: "A researcher tests 100 health factors and finds one correlates with a disease. What's the concern?",
                options: [
                    { id: "a", text: "The research took too long" },
                    { id: "b", text: "With enough tests, some correlations appear by chance—this may be random" },
                    { id: "c", text: "One factor is too few to matter" },
                    { id: "d", text: "100 factors is too many to test" }
                ],
                correctAnswer: "b",
                explanation: "This is the multiple comparisons problem. If you test 100 things at a 5% significance level, you'd expect about 5 false positives by chance. Finding one correlation among many tests may be random variation, not a real effect. This requires additional verification.",
            },
            {
                type: "content",
                title: "Real-World Examples",
                content: "The Texas Sharpshooter appears in many contexts:\n\n**Scientific Research:**\nTesting dozens of outcomes, then reporting only the significant one. 'The drug improved heart function!' (but didn't help any of the 20 other measured outcomes)\n\n**Investment Performance:**\nHighlighting successful investments, hiding failures. Creating a fund that looks consistently good by closing losing funds and keeping winners.\n\n**Economic Policy:**\nChoosing metrics that improved, ignoring ones that worsened. Picking comparison dates that favor your narrative.\n\n**Prediction After the Fact:**\n'I knew that would happen!' after a random event. Reinterpreting vague prophecies to fit events.\n\n**Sports Streaks:**\n'This team is on a hot streak!' But streaks happen randomly in any data. Is this 'streak' meaningfully different from random variation?\n\n**The Pattern:**\nLook for cases where success was defined after the results were known, or where only favorable data points are mentioned.",
                keyPoints: [
                    "Post-hoc outcome selection in research is problematic",
                    "Investment performance often involves survivorship bias",
                    "Streaks and clusters occur randomly; they need testing to confirm meaning",
                ],
            },
            {
                type: "content",
                title: "Identifying the Fallacy in Debate",
                content: "Watch for Texas Sharpshooter reasoning in arguments:\n\n**Cherry-Picked Time Frames:**\n'Since 2017, unemployment decreased!' But why start at 2017? What happens with other starting points?\n\n**Selected Metrics:**\n'GDP grew!' But what about wages, employment, inequality? Many metrics exist; which were chosen and why?\n\n**Convenient Examples:**\n'Three countries tried this and succeeded.' What about countries that tried and failed?\n\n**Survivorship Bias:**\n'These companies followed this strategy and became successful.' What about companies that followed the same strategy and failed?\n\n**Pattern Recognition:**\n'Notice these cases all have X in common.' Were you looking for X before finding these cases?\n\n**Questions to Ask:**\n• Was this outcome specified in advance?\n• What data was excluded?\n• How many things were tested?\n• Would different starting points or metrics show different results?",
                keyPoints: [
                    "Cherry-picked time frames and metrics indicate this fallacy",
                    "Ask what data was excluded or not tested",
                    "Survivorship bias often accompanies Texas Sharpshooter",
                ],
            },
            {
                type: "question",
                id: "l11-06-q2",
                question: "'These 5 successful entrepreneurs all woke up at 5 AM!' What's the problem with this reasoning?",
                options: [
                    { id: "a", text: "Waking early is impossible" },
                    { id: "b", text: "Successful people don't use alarm clocks" },
                    { id: "c", text: "This ignores successful people with different schedules and unsuccessful early risers" },
                    { id: "d", text: "5 examples is too many" }
                ],
                correctAnswer: "c",
                explanation: "This is Texas Sharpshooter combined with survivorship bias. The analysis selected entrepreneurs who fit a narrative while ignoring successful people with different habits and all the early risers who didn't become successful. The 'pattern' may be coincidental.",
            },
            {
                type: "content",
                title: "Challenging Texas Sharpshooter Reasoning",
                content: "When opponents use this fallacy:\n\n**Ask About Pre-Specification:**\n'Was this prediction made before or after seeing the results?'\n\n**Request the Full Dataset:**\n'What else was tested? What does the complete picture show?'\n\n**Propose Alternative Framings:**\n'If we use different dates/metrics/examples, we get a different result...'\n\n**Highlight Cherry-Picking:**\n'My opponent shows the data that supports their case while ignoring contradicting evidence.'\n\n**Invoke Multiple Comparisons:**\n'When you test enough things, some will appear significant by chance. This likely reflects statistical noise rather than real effect.'\n\n**Demand Replication:**\n'Has this pattern been replicated when predicted in advance, or only found in hindsight?'\n\n**In Your Own Arguments:**\n• Pre-specify what you're testing when possible\n• Report negative findings alongside positive ones\n• Use complete data, not selected points\n• Acknowledge limitations honestly",
                keyPoints: [
                    "Ask whether findings were predicted in advance",
                    "Request the full dataset, not just selected points",
                    "Propose alternative framings that might show different results",
                ],
            },
            {
                type: "content",
                title: "Conclusion: Targets Before Shooting",
                content: "The Texas Sharpshooter fallacy reminds us that patterns can emerge from random data. True findings are predicted in advance and replicate; cherry-picked patterns often don't.\n\n**Key Takeaways:**\n• Patterns found after seeing data may be coincidental\n• Cherry-picking favorable data points creates misleading narratives\n• Ask: Was this predicted in advance? What was excluded?\n• Multiple comparisons mean some 'findings' are statistical noise\n• Replication separates real patterns from random variation\n\n**Looking Ahead:**\nIn the next lesson, we'll review Unit 11 concepts—advanced fallacies and their applications.\n\n**Practice Challenge:**\nFind an article claiming a pattern or trend. Consider: Was the time frame/metric cherry-picked? What does the full data show? Would alternative framings tell a different story?",
                keyPoints: [
                    "Draw the target before shooting",
                    "Cherry-picking creates misleading narratives",
                    "Replication tests whether patterns are real",
                ],
            },
        ],
    },
    {
        lessonId: "l11-07",
        pages: [
            {
                type: "content",
                title: "Introduction: Unit 11 Review",
                content: "Congratulations on completing Unit 11! This unit focused on advanced fallacies and ethical practices that strengthen your critical thinking.\n\nIn this review lesson, we'll consolidate everything you've learned: handling disagreement gracefully, circular reasoning, evidence integrity, hasty generalization, fact-checking, and the Texas Sharpshooter fallacy. These skills build on beginner foundations to create sophisticated analytical capabilities.",
            },
            {
                type: "content",
                title: "Review: Disagreement and Circular Reasoning",
                content: "**Handling Disagreement Gracefully:**\n• Attack arguments, not people; use neutral language\n• Acknowledge valid points before disagreeing\n• When opponents are aggressive, don't match their energy\n• Manage internal emotions through preparation and reframing\n• Composure builds credibility and enhances thinking\n\n**Begging the Question (Circular Reasoning):**\n• The conclusion is assumed in the premise\n• No independent evidence is actually provided\n• Test: Would skeptics accept the premise independently?\n• Common in political, moral, and religious arguments\n• Demand independent evidence that doesn't assume the conclusion",
                keyPoints: [
                    "Graceful disagreement is strategic and builds credibility",
                    "Circular reasoning assumes what it's trying to prove",
                    "Both require testing claims for independent support",
                ],
            },
            {
                type: "content",
                title: "Review: Evidence and Generalization",
                content: "**Avoiding Fabricated Evidence:**\n• Fabrication includes invention, falsification, and significant misrepresentation\n• Source laundering and credential inflation are violations\n• Better research is the alternative to fabrication\n• Maintain documentation to protect against accusations\n\n**Hasty Generalization:**\n• Drawing broad conclusions from too few cases\n• Sample adequacy requires sufficient size and representativeness\n• Single examples rarely justify universal claims\n• Counter-examples disprove universal generalizations\n• Systematic evidence trumps anecdotes",
                keyPoints: [
                    "Evidence integrity is foundational to debate",
                    "Generalization requires adequate, representative samples",
                    "Both involve assessing whether evidence supports claims",
                ],
            },
            {
                type: "content",
                title: "Review: Verification and Cherry-Picking",
                content: "**Fact-Checking Techniques:**\n• Lateral reading verifies sources through external checks\n• Trace claims to primary sources; amplification isn't credibility\n• Professional fact-checkers provide helpful starting points\n• Quick checks: exact searches, reverse image, original documents\n\n**Texas Sharpshooter Fallacy:**\n• Patterns found after seeing data may be coincidental\n• Cherry-picking time frames and metrics creates misleading narratives\n• Ask: Was this predicted in advance? What was excluded?\n• Multiple comparisons generate false positives\n• Replication tests whether patterns are real",
                keyPoints: [
                    "Verification should become automatic habit",
                    "Cherry-picking creates illusion of meaningful patterns",
                    "Both require asking what's been excluded or not tested",
                ],
            },
            {
                type: "question",
                id: "l11-07-q1",
                question: "Someone argues: 'This policy is good because good people support it, and we know they're good because they support good policies.' What fallacy is this?",
                options: [
                    { id: "a", text: "Hasty generalization" },
                    { id: "b", text: "Texas Sharpshooter" },
                    { id: "c", text: "Ad hominem" },
                    { id: "d", text: "Begging the question (circular reasoning)" }
                ],
                correctAnswer: "d",
                explanation: "This is circular reasoning: the policy's goodness is proved by supporters being good, but their goodness is proved by supporting good policies. Each claim depends on the other, with no independent evidence for either. The conclusion is assumed in the premise.",
            },
            {
                type: "question",
                id: "l11-07-q2",
                question: "A study tests 50 different potential side effects and finds one statistically significant result. What's the appropriate concern?",
                options: [
                    { id: "a", text: "The study was too short" },
                    { id: "b", text: "One side effect is too few to matter" },
                    { id: "c", text: "With 50 tests at 5% significance, 2-3 false positives are expected—this may be chance" },
                    { id: "d", text: "Statistical significance isn't relevant to medicine" }
                ],
                correctAnswer: "c",
                explanation: "The multiple comparisons problem: testing 50 outcomes at p<0.05 means you'd expect about 2-3 'significant' results by chance alone. Finding one significant result among many tests is consistent with random variation and requires replication to confirm.",
            },
            {
                type: "content",
                title: "Applying Unit 11 Skills",
                content: "These skills work together:\n\n**In Research:**\nVerify sources laterally (fact-checking), trace claims to origins, and check for cherry-picked patterns (Texas Sharpshooter). Ensure your own evidence is accurate (avoiding fabrication).\n\n**In Argumentation:**\nTest claims for circular reasoning, challenge generalizations from too few cases, and identify post-hoc pattern selection. Maintain integrity in your own claims.\n\n**In Debate Rounds:**\nHandle disagreement gracefully for credibility, use fallacy knowledge to expose opponent errors, and present your own evidence ethically and accurately.\n\n**In Daily Life:**\nThese critical thinking skills apply to news consumption, political discourse, and everyday decision-making. Practice makes them automatic.",
                keyPoints: [
                    "These skills combine for comprehensive critical analysis",
                    "Verification, fallacy detection, and integrity work together",
                    "Practice in debate transfers to all intellectual contexts",
                ],
            },
            {
                type: "content",
                title: "Conclusion: Advanced Critical Thinking",
                content: "You've now completed Unit 11, building advanced fallacy recognition on your beginner foundation.\n\n**Key Takeaways:**\n• Graceful disagreement builds credibility and strategic advantage\n• Circular reasoning provides no independent support for claims\n• Evidence integrity is foundational; fabrication destroys credibility\n• Hasty generalization requires challenging sample adequacy\n• Fact-checking through lateral reading and source tracing\n• Texas Sharpshooter reveals post-hoc cherry-picking\n\n**Looking Ahead:**\nUnit 12 continues with Language and Logic—exploring how words and reasoning interact.\n\n**Practice Challenge:**\nIn your next debate or discussion, consciously apply at least one skill from this unit. Notice how it affects your analysis and arguments.",
                keyPoints: [
                    "Unit 11 advanced your fallacy detection capabilities",
                    "These skills integrate with beginner foundations",
                    "Practice makes critical thinking automatic",
                ],
            },
            {
                type: "practice",
                id: "l11-07-p1",
                title: "Section 2: Comprehensive Review",
                description: "Review and apply the advanced fallacy skills from Unit 11.",
                practice: {
                    type: "fallacy-spotter",
                    topic: "Multiple Advanced Fallacies",
                    targetSkill: "Identifying Circular Reasoning, Hasty Generalization, and Texas Sharpshooter",
                    instructions: "The AI will present complex arguments containing one of the advanced fallacies from this unit. Identify the fallacy and explain why the reasoning is flawed.",
                    exampleResponse: "That's circular reasoning—it says we should do X because X is the right thing to do, which assumes the conclusion.",
                    successCriteria: [
                        "Correctly identifies the specific fallacy",
                        "Explanation focuses on the logical flaw (e.g., sample size, post-hoc pattern, circularity)",
                        "Distinguishes between similar fallacies"
                    ],
                },
            },
        ],
    },
];
