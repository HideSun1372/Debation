import { MultiPageLesson } from "./types";

// Unit 14: More Refutation
// Topics: Genetic Fallacy, Misinformation/Disinformation, Cherry-Picking, Counterexamples, Middle Ground Fallacy, Attacking Warrants

export const UNIT_14_LESSONS: MultiPageLesson[] = [
    {
        lessonId: "l14-01",
        pages: [
            {
                type: "content",
                title: "Introduction: The Genetic Fallacy",
                content: "The genetic fallacy judges an argument based on its origin rather than its merits. Where an idea comes from doesn't determine whether it's true or false.\n\nThis fallacy appears in many forms: dismissing evidence because of who funded the research, rejecting arguments because of who makes them, or accepting claims simply because they come from respected sources.\n\nIn this lesson, you'll learn to identify the genetic fallacy and understand when origins do and don't matter for evaluating arguments.",
            },
            {
                type: "content",
                title: "Understanding the Genetic Fallacy",
                content: "The fallacy takes two main forms:\n\n**Negative Genetic Fallacy:**\n'That research was funded by a corporation, so the findings are false.'\n'He's biased, so nothing he says can be trusted.'\n'That argument originated with [disliked group], so it's wrong.'\n\n**Positive Genetic Fallacy:**\n'This must be true because it comes from [respected source].'\n'She's an expert, so everything she says is correct.'\n'This tradition has ancient origins, so it must be valuable.'\n\n**The Core Error:**\nConfusing the source of an argument with the argument's validity. Good arguments can come from bad sources. Bad arguments can come from good sources.\n\n**Why It's Tempting:**\nOrigins can be relevant to credibility and warrant investigation. But they don't automatically prove or disprove claims.",
                keyPoints: [
                    "Genetic fallacy judges arguments by origin, not merit",
                    "Works both ways: dismissing or accepting based on source",
                    "Origins may warrant investigation but don't prove/disprove claims",
                ],
            },
            {
                type: "question",
                id: "l14-01-q1",
                question: "Someone dismisses climate research because some studies were funded by environmental organizations. Is this the genetic fallacy?",
                options: [
                    { id: "a", text: "No—funding source always determines validity" },
                    { id: "b", text: "Yes—the research should be evaluated on its methodology and findings, not just its funding source" },
                    { id: "c", text: "No—environmental organizations are always biased" },
                    { id: "d", text: "It depends on whether you agree with the conclusions" }
                ],
                correctAnswer: "b",
                explanation: "This is the genetic fallacy. While funding source may warrant scrutiny of methodology, it doesn't automatically invalidate findings. The research should be evaluated on its own merits—methodology, data quality, replicability—not dismissed solely based on who paid for it.",
            },
            {
                type: "content",
                title: "When Origins Do Matter",
                content: "Origins aren't always irrelevant—they can be legitimate considerations:\n\n**Conflict of Interest:**\nFunding sources may create incentives for bias. This justifies scrutiny, not automatic dismissal.\n\n**Expertise Questions:**\nWhether someone has relevant expertise affects how much weight to give their opinion. This isn't genetic fallacy—it's proper source evaluation.\n\n**Track Record:**\nA source's history of accuracy or deception is relevant to credibility.\n\n**The Key Distinction:**\nOrigins can affect how much we should trust a claim or how carefully we should verify it. But they don't automatically make claims true or false.\n\n**Appropriate Response:**\n'Given the funding source, we should carefully examine the methodology' is reasonable.\n'The funding source proves the findings are false' is genetic fallacy.",
                keyPoints: [
                    "Conflict of interest justifies scrutiny, not automatic dismissal",
                    "Expertise evaluation is legitimate, not genetic fallacy",
                    "Origins affect required verification level, not truth value",
                ],
            },
            {
                type: "content",
                title: "Using This in Debate",
                content: "Apply genetic fallacy understanding strategically:\n\n**When Opponents Commit It:**\n'My opponent dismisses this evidence because of its source, but the methodology is sound and the findings have been replicated. Attack the argument, not its origin.'\n\n**When Attacking Sources:**\nAvoid committing it yourself. Instead of 'This source is biased, so it's wrong,' say 'This source has a conflict of interest, and here's why that undermines this specific claim...'\n\n**Preempting Attacks:**\n'Yes, this research was industry-funded, but note that the methodology was peer-reviewed and the findings have been independently replicated. The origin doesn't affect the validity.'\n\n**Building Your Case:**\nWhen using evidence from potentially questioned sources, proactively address origins by emphasizing methodological strength and independent verification.",
                keyPoints: [
                    "Call out when opponents attack origin rather than argument",
                    "Attack source credibility without committing genetic fallacy",
                    "Preempt origin-based attacks with methodological defense",
                ],
            },
            {
                type: "question",
                id: "l14-01-q2",
                question: "How should you properly challenge evidence from a potentially biased source?",
                options: [
                    { id: "a", text: "Simply point out the source is biased, and the evidence is automatically invalid" },
                    { id: "b", text: "Show how the bias may have affected methodology or interpretation, with specific concerns" },
                    { id: "c", text: "Ignore the source entirely" },
                    { id: "d", text: "Accept the evidence without question" }
                ],
                correctAnswer: "b",
                explanation: "Proper source criticism explains how potential bias might have affected the specific evidence—through methodology, sampling, interpretation, or selective reporting. General claims of bias without specific concerns commit the genetic fallacy.",
            },
            {
                type: "content",
                title: "Conclusion: Evaluate Arguments on Merit",
                content: "The genetic fallacy reminds us to evaluate arguments based on their content, not just their source. Origins matter for credibility but don't determine truth.\n\n**Key Takeaways:**\n• Genetic fallacy judges arguments by origin rather than merit\n• Works both ways: illegitimate dismissal and illegitimate acceptance\n• Origins may justify scrutiny but don't prove or disprove claims\n• Proper source criticism shows how bias affected specific evidence\n• Preempt origin attacks by emphasizing methodology and verification\n\n**Looking Ahead:**\nIn the next lesson, we'll explore Identifying Misinformation and Disinformation.\n\n**Practice Challenge:**\nFind an example where someone dismisses evidence based on its source. Is this genetic fallacy, or legitimate source criticism? What would make the criticism valid?",
                keyPoints: [
                    "Evaluate arguments on content, not just source",
                    "Origins affect credibility, not truth value",
                    "Proper criticism shows specific methodological concerns",
                ],
            },
        ],
    },
    {
        lessonId: "l14-02",
        pages: [
            {
                type: "content",
                title: "Introduction: Misinformation and Disinformation",
                content: "In the information age, distinguishing truth from falsehood is a critical skill. Understanding the difference between misinformation (false information spread without intent to deceive) and disinformation (deliberately false information) helps you navigate complex information landscapes.\n\nDebaters must both avoid spreading false information and effectively identify it in opponent arguments. Your credibility depends on accuracy.\n\nIn this lesson, you'll learn to identify common patterns of false information and develop strategies for verification.",
            },
            {
                type: "content",
                title: "Misinformation vs. Disinformation",
                content: "Understanding the distinction:\n\n**Misinformation:**\n• False information spread without intent to deceive\n• Often results from honest mistakes, misunderstanding, or outdated information\n• Spreader believes the information is true\n• Example: Sharing a satirical article thinking it's real news\n\n**Disinformation:**\n• Deliberately false information created to deceive\n• Intentionally crafted to mislead or manipulate\n• Spreader knows the information is false\n• Example: Fabricated evidence to support a political agenda\n\n**Malinformation:**\n• True information used to cause harm\n• Accurate but shared with malicious intent or misleading context\n• Example: Sharing someone's private information to damage them\n\n**Why the Distinction Matters:**\nIntent affects how you respond. Misinformation may require gentle correction; disinformation requires exposure of the deception.",
                keyPoints: [
                    "Misinformation: false, spread without intent to deceive",
                    "Disinformation: false, deliberately created to deceive",
                    "Intent affects appropriate response strategies",
                ],
            },
            {
                type: "question",
                id: "l14-02-q1",
                question: "What distinguishes disinformation from misinformation?",
                options: [
                    { id: "a", text: "Disinformation is more widely spread" },
                    { id: "b", text: "Disinformation is deliberately created to deceive, while misinformation is spread without intent to mislead" },
                    { id: "c", text: "Misinformation is always political" },
                    { id: "d", text: "There is no meaningful difference" }
                ],
                correctAnswer: "b",
                explanation: "The key distinction is intent. Disinformation is deliberately false, created with the intention to deceive. Misinformation is also false but spread by people who believe it's true or don't realize it's false. Both are problematic but require different responses.",
            },
            {
                type: "content",
                title: "Red Flags for False Information",
                content: "Common patterns that suggest false information:\n\n**Source Issues:**\n• Unknown or unverifiable origin\n• No author or organization credited\n• Unreliable publication history\n• URLs that mimic legitimate sites\n\n**Content Issues:**\n• Extreme emotional appeal with little substance\n• Headlines that don't match article content\n• No supporting evidence or citations\n• Too good/bad to be true\n• Confirms biases perfectly\n\n**Presentation Issues:**\n• Many spelling/grammatical errors\n• Low-quality design (but sophisticated disinfo can look professional)\n• Urgent calls to share immediately\n• Conspiracy framing: 'they don't want you to know'\n\n**Context Issues:**\n• Old information presented as new\n• Selective quotes taken out of context\n• Statistics without context or comparison",
                keyPoints: [
                    "Check source credibility and verifiability",
                    "Extreme emotional appeal with no substance is suspicious",
                    "Too-perfect confirmation of biases warrants scrutiny",
                ],
            },
            {
                type: "content",
                title: "Verification Strategies",
                content: "How to verify information effectively:\n\n**Lateral Reading:**\nDon't just evaluate the source itself—see what other sources say about it. Search for information about the publication/author.\n\n**Source Triangulation:**\nLook for independent verification from multiple credible sources. If only one source reports something major, be skeptical.\n\n**Check Original Sources:**\nTrack claims back to primary sources. Does the original say what's claimed?\n\n**Reverse Image Search:**\nVerify photos haven't been manipulated or taken from different contexts.\n\n**Fact-Checking Organizations:**\nConsult established fact-checkers (Snopes, PolitiFact, FactCheck.org) but remember they can have limitations too.\n\n**Expert Consultation:**\nFor technical claims, check what relevant experts say. Look for consensus, not cherry-picked outliers.\n\n**Time Check:**\nVerify information is current and not outdated material being recirculated.",
                keyPoints: [
                    "Lateral reading: check what others say about the source",
                    "Triangulate with multiple independent sources",
                    "Track claims back to original sources",
                ],
            },
            {
                type: "question",
                id: "l14-02-q2",
                question: "Why is lateral reading (checking what other sources say about a source) effective for verification?",
                options: [
                    { id: "a", text: "It takes less time than reading the original" },
                    { id: "b", text: "External sources can reveal credibility issues, bias, or track record that the source itself won't disclose" },
                    { id: "c", text: "All sources agree with each other" },
                    { id: "d", text: "It's not actually effective" }
                ],
                correctAnswer: "b",
                explanation: "Lateral reading works because sources don't disclose their own reliability problems. By checking what independent sources say about a publication or author, you can discover credibility issues, documented biases, or history of inaccuracy that wouldn't be apparent from reading the source alone.",
            },
            {
                type: "content",
                title: "Conclusion: Navigating the Information Landscape",
                content: "The ability to distinguish true from false information is essential for debaters and citizens. Developing verification habits protects your credibility and strengthens your arguments.\n\n**Key Takeaways:**\n• Misinformation is false and spread unintentionally; disinformation is false and deliberate\n• Red flags: unverifiable sources, extreme emotion, perfect bias confirmation\n• Lateral reading checks what others say about sources\n• Triangulate claims across multiple independent sources\n• Track claims to original sources; verify currency\n• Use fact-checkers as one tool among many\n\n**Looking Ahead:**\nIn the next lesson, we'll explore Cherry-Picking Evidence—a form of misleading information presentation.\n\n**Practice Challenge:**\nFind a claim that seems questionable online. Apply verification strategies: lateral reading, source triangulation, and original source checking. What did you discover?",
                keyPoints: [
                    "Verification is essential for debater credibility",
                    "Multiple strategies combined are most effective",
                    "Build verification habits for all information consumption",
                ],
            },
        ],
    },
    {
        lessonId: "l14-03",
        pages: [
            {
                type: "content",
                title: "Introduction: Cherry-Picking Evidence",
                content: "Cherry-picking is selecting only evidence that supports your conclusion while ignoring contradictory evidence. It's one of the most common forms of misleading argumentation.\n\nEven true evidence can create false impressions when context is omitted. A debater who cherry-picks may win in the short term but loses credibility when the full picture emerges.\n\nIn this lesson, you'll learn to identify cherry-picking in opponent arguments and avoid it in your own.",
            },
            {
                type: "content",
                title: "How Cherry-Picking Works",
                content: "Cherry-picking takes many forms:\n\n**Selective Statistics:**\nChoosing the time frame, sample, or metric that supports your conclusion while ignoring others.\n'Crime is up 20%!' (compared to last year, but down 40% from five years ago)\n\n**Quote Mining:**\nTaking quotes out of context to suggest meanings the speaker didn't intend.\n\n**Anecdotal Selection:**\nHighlighting cases that support your point while ignoring numerous counterexamples.\n\n**Literature Selection:**\nCiting studies that support your view while ignoring the weight of contradictory research.\n\n**Timeframe Selection:**\nStarting data at a point that creates your preferred trend.\n\n**The Deception:**\nEach individual piece of evidence may be accurate. The deception lies in what's omitted, creating a misleading overall picture.",
                keyPoints: [
                    "Cherry-picking selects supporting evidence while hiding contradictions",
                    "Each piece may be true, but the selection creates false impressions",
                    "Forms include selective statistics, quote mining, and literature selection",
                ],
            },
            {
                type: "question",
                id: "l14-03-q1",
                question: "An article claims a stock is a great investment, showing it rose 50% this year. What question should you ask?",
                options: [
                    { id: "a", text: "No questions—50% is impressive" },
                    { id: "b", text: "What happened in previous years? What's the overall trend and comparison to alternatives?" },
                    { id: "c", text: "Who wrote the article?" },
                    { id: "d", text: "What stock is it?" }
                ],
                correctAnswer: "b",
                explanation: "This could be cherry-picking. The stock might have dropped 80% the previous year, making the 50% gain a partial recovery, not a success story. You need broader context: previous years' performance, comparison to market averages, and long-term trends.",
            },
            {
                type: "content",
                title: "Identifying Cherry-Picking",
                content: "Questions to expose cherry-picking:\n\n**Ask About the Full Picture:**\n'What does the complete data show?' 'What happens if we use a different time frame?' 'What about contradictory studies?'\n\n**Challenge Selection Criteria:**\n'Why did you choose this metric/time frame/sample?' 'Is this representative of the broader evidence?'\n\n**Request Context:**\n'What's the baseline for comparison?' 'What's the typical range?' 'What happened before and after?'\n\n**Check for Omissions:**\n'Are there studies that found different results?' 'What about counterexamples?' 'What evidence was excluded?'\n\n**Warning Signs:**\n• Only one study cited when many exist\n• Oddly specific time frames or samples\n• Claims that seem too clean or dramatic\n• Reluctance to discuss contradictory evidence",
                keyPoints: [
                    "Ask for complete data, not just selected points",
                    "Challenge why specific metrics or time frames were chosen",
                    "Request context and acknowledge of contradictory evidence",
                ],
            },
            {
                type: "content",
                title: "Avoiding Cherry-Picking Yourself",
                content: "Maintain credibility through honest evidence use:\n\n**Represent the Field:**\nWhen citing research, acknowledge the weight of evidence. If most studies support your view, say so. If you're citing a minority view, acknowledge it.\n\n**Use Representative Examples:**\nDon't just find the most extreme supporting case. Use examples that represent the typical situation.\n\n**Acknowledge Counter-Evidence:**\nAddress contradictory evidence rather than ignoring it. Explain why you find it less compelling.\n\n**Provide Context:**\nGive enough context for the evidence to be fairly evaluated. Include relevant baselines and comparisons.\n\n**Check Your Selection:**\nAsk yourself: 'If someone saw all the evidence, would this selection seem fair?'\n\n**Benefits of Honesty:**\nAddressing counter-evidence builds credibility. Judges trust debaters who engage fairly with complexity.",
                keyPoints: [
                    "Represent the weight of evidence fairly",
                    "Acknowledge and address counter-evidence",
                    "Context makes evidence more credible, not less",
                ],
            },
            {
                type: "question",
                id: "l14-03-q2",
                question: "Why does acknowledging counter-evidence actually strengthen your position?",
                options: [
                    { id: "a", text: "It doesn't—it weakens your case" },
                    { id: "b", text: "It builds credibility and shows you've considered the full picture, making your conclusions more trustworthy" },
                    { id: "c", text: "Judges require it in the rules" },
                    { id: "d", text: "It confuses your opponent" }
                ],
                correctAnswer: "b",
                explanation: "Acknowledging counter-evidence builds credibility because it shows intellectual honesty. Judges trust debaters who engage with complexity rather than pretending it doesn't exist. Your conclusions are more persuasive when they emerge from fair consideration of all evidence.",
            },
            {
                type: "content",
                title: "Conclusion: The Full Picture",
                content: "Cherry-picking creates misleading impressions even with accurate individual facts. Ethical and effective debaters represent evidence fairly.\n\n**Key Takeaways:**\n• Cherry-picking selects favorable evidence while ignoring contradictions\n• Forms: selective statistics, quote mining, literature selection, timeframe selection\n• Identify by asking for full data, context, and acknowledgment of counter-evidence\n• Avoid by representing the weight of evidence fairly\n• Acknowledging counter-evidence builds credibility\n• Context makes arguments stronger, not weaker\n\n**Looking Ahead:**\nIn the next lesson, we'll explore Refutation by Example/Counterexample.\n\n**Practice Challenge:**\nFind a persuasive statistic or claim. Research the fuller context. Does the broader picture support the same conclusion, or was cherry-picking involved?",
                keyPoints: [
                    "Fair evidence representation builds credibility",
                    "Ask for full context to expose cherry-picking",
                    "Honest engagement with counter-evidence strengthens arguments",
                ],
            },
        ],
    },
    {
        lessonId: "l14-04",
        pages: [
            {
                type: "content",
                title: "Introduction: Refutation by Example/Counterexample",
                content: "A single well-chosen counterexample can demolish a sweeping claim. If someone argues 'All X are Y,' showing one X that isn't Y refutes the claim entirely.\n\nRefutation by example is powerful but must be used carefully. Not all claims are absolute, and examples must be genuine and relevant to work.\n\nIn this lesson, you'll learn to use counterexamples effectively and defend against example-based attacks.",
            },
            {
                type: "content",
                title: "How Counterexamples Work",
                content: "Counterexamples directly disprove universal claims:\n\n**Against Universal Claims:**\n'All politicians are corrupt.' → A single honest politician refutes this.\n'This intervention never works.' → One success story refutes 'never.'\n\n**Against Causal Claims:**\n'X always causes Y.' → Cases where X occurred without Y challenge the causation.\n\n**Against Definitions:**\n'A good leader must be charismatic.' → Successful non-charismatic leaders show this isn't necessary.\n\n**The Logic:**\nUniversal claims (all, every, always, never) are disproved by a single exception. That's their logical weakness.\n\n**Modifying Claims:**\n'Most politicians are corrupt' can't be refuted by a single counterexample—it only requires most, not all. The claim already accounts for exceptions.",
                keyPoints: [
                    "Counterexamples disprove universal claims (all, never, always)",
                    "One genuine exception refutes a universal claim",
                    "Claims with 'most' or 'often' already account for exceptions",
                ],
            },
            {
                type: "question",
                id: "l14-04-q1",
                question: "Which claim can be refuted by a single counterexample?",
                options: [
                    { id: "a", text: "Most democracies are stable" },
                    { id: "b", text: "Renewable energy is often cost-effective" },
                    { id: "c", text: "Private companies never provide public services efficiently" },
                    { id: "d", text: "Foreign aid sometimes helps development" }
                ],
                correctAnswer: "c",
                explanation: "The claim 'private companies NEVER provide public services efficiently' is universal (never = no exceptions). One example of a private company efficiently providing public services refutes it. The other claims use 'most,' 'often,' or 'sometimes,' which already allow for exceptions.",
            },
            {
                type: "content",
                title: "Using Examples Effectively",
                content: "Make your examples compelling:\n\n**Relevance:**\nThe example must genuinely fit the category being discussed. Definitional debates about whether it 'counts' weaken your refutation.\n\n**Quality Over Quantity:**\nOne undeniable example is more powerful than several debatable ones.\n\n**Detail Matters:**\nSpecific, detailed examples are more persuasive than vague references.\n\n**Anticipate Objections:**\nConsider how opponents might dismiss your example. Address potential objections preemptively.\n\n**Strategic Placement:**\n'You claim X never works. Here's a clearly documented case where X worked exactly as proposed. Their universal claim fails.'\n\n**Evidence Support:**\nBack your example with credible evidence. Undocumented examples are easily dismissed.",
                keyPoints: [
                    "Examples must clearly fit the relevant category",
                    "One undeniable example beats several debatable ones",
                    "Anticipate and preemptively address objections",
                ],
            },
            {
                type: "content",
                title: "Defending Against Counterexamples",
                content: "When opponents use examples against you:\n\n**Avoid Absolute Claims:**\nDon't claim 'always' or 'never' unless you can defend it. Use 'typically,' 'usually,' or 'in most cases.'\n\n**Challenge Relevance:**\n'That example isn't comparable because [key differences].'\n'That's an outlier due to unique circumstances that don't apply here.'\n\n**Distinguish the Example:**\n'That case worked because of [unusual factor]. Remove that factor and the approach fails.'\n\n**Acknowledge and Minimize:**\n'Yes, there are exceptions. But the general pattern strongly supports our claim, and exceptions don't change the overall picture.'\n\n**Reframe Your Claim:**\nIf caught in an overstatement, acknowledge it: 'Fair point—let me be more precise. In most cases...'",
                keyPoints: [
                    "Avoid absolute claims you can't defend",
                    "Challenge example relevance or distinguish circumstances",
                    "Acknowledge exceptions while maintaining your overall claim",
                ],
            },
            {
                type: "question",
                id: "l14-04-q2",
                question: "Your opponent offers a counterexample to your claim. Which response is weakest?",
                options: [
                    { id: "a", text: "Acknowledging the exception while showing the general pattern still holds" },
                    { id: "b", text: "Distinguishing the example due to unique circumstances" },
                    { id: "c", text: "Insisting the example doesn't exist or didn't happen" },
                    { id: "d", text: "Challenging whether the example is truly comparable" }
                ],
                correctAnswer: "c",
                explanation: "Denying documented reality is the weakest response—it damages credibility. Better approaches acknowledge the example while showing it doesn't undermine your broader claim (distinguishing circumstances, showing it's an outlier, or refining your claim to accommodate exceptions).",
            },
            {
                type: "content",
                title: "Conclusion: The Power of Examples",
                content: "Counterexamples are powerful tools against universal claims. Use them strategically and protect yourself by avoiding unnecessary absolutes.\n\n**Key Takeaways:**\n• Counterexamples refute universal claims (all, never, always)\n• One genuine exception disproves a universal claim\n• Examples must be relevant, specific, and well-documented\n• Defend by challenging relevance or distinguishing circumstances\n• Avoid absolute claims unless you can defend them\n• Acknowledge exceptions while maintaining broader claims\n\n**Looking Ahead:**\nIn the next lesson, we'll explore the Middle Ground/False Compromise fallacy.\n\n**Practice Challenge:**\nFind a universal claim in a debate or article. Can you identify a genuine counterexample? How might the claim be reformulated to survive the counterexample?",
                keyPoints: [
                    "Universal claims are vulnerable to counterexamples",
                    "Use specific, documented, clearly relevant examples",
                    "Avoid absolutes; use qualifiers that allow for exceptions",
                ],
            },
        ],
    },
    {
        lessonId: "l14-05",
        pages: [
            {
                type: "content",
                title: "Introduction: Middle Ground/False Compromise",
                content: "The middle ground fallacy assumes that the truth always lies between two positions. While compromise is sometimes wise, splitting the difference between a true claim and a false one doesn't produce truth.\n\nIn debate, this fallacy appears when someone suggests that because positions are opposed, the correct answer must be in the middle. But sometimes one side is simply right.\n\nIn this lesson, you'll learn to identify false compromise and argue for positions at the 'edges' when they're correct.",
            },
            {
                type: "content",
                title: "Understanding the Fallacy",
                content: "The false compromise assumes moderation is always correct:\n\n**The Pattern:**\n'Position A says X. Position B says Y. The truth must be somewhere in between.'\n\n**Why It Fails:**\nTruth isn't determined by averaging positions. If one side claims 2+2=4 and another claims 2+2=10, the answer isn't 7.\n\n**Examples:**\n'Scientists say the Earth is 4.5 billion years old; creationists say 6,000 years. The truth must be in the middle.' (No—the scientific estimate is correct.)\n\n'One side says the policy is harmful; the other says it's beneficial. Let's call it neutral.' (But it might actually be harmful.)\n\n**Why It's Tempting:**\n• Compromise often seems reasonable and fair\n• It avoids taking a firm stand\n• Moderation is socially valued\n• Splitting differences feels balanced",
                keyPoints: [
                    "Middle ground fallacy assumes truth lies between positions",
                    "Averaging positions doesn't produce truth",
                    "Sometimes one side is simply correct",
                ],
            },
            {
                type: "question",
                id: "l14-05-q1",
                question: "Someone argues: 'Experts say vaccines are safe; some claim they're dangerous. The truth is probably that they're somewhat risky.' Is this reasoning valid?",
                options: [
                    { id: "a", text: "Yes—moderation is always wisest" },
                    { id: "b", text: "No—this is the middle ground fallacy. The evidence overwhelmingly supports vaccine safety; splitting the difference ignores that evidence" },
                    { id: "c", text: "Yes—both sides should be given equal weight" },
                    { id: "d", text: "No—vaccines are definitely dangerous" }
                ],
                correctAnswer: "b",
                explanation: "This is the middle ground fallacy. The evidence strongly favors one position (vaccine safety). Splitting the difference treats both positions as equally credible when they're not. The moderate-sounding conclusion actually misrepresents the evidence.",
            },
            {
                type: "content",
                title: "When Compromise Is and Isn't Appropriate",
                content: "Not all middle positions are fallacious:\n\n**Legitimate Compromise:**\n• Value trade-offs where both values matter\n• Practical negotiations where both parties have legitimate interests\n• Questions of degree where evidence is genuinely mixed\n• Policy questions where partial solutions are feasible\n\n**Fallacious Compromise:**\n• Factual questions where one answer is correct\n• When splitting the difference ignores weight of evidence\n• When 'moderate' positions are framed to seem reasonable but misrepresent the situation\n\n**The Test:**\nIs this a question of fact or a question of values/preferences? Factual questions have correct answers not determined by averaging positions. Value questions may legitimately involve trade-offs.\n\n**Example:**\n'How much should we invest in education?' involves value trade-offs—compromise may be appropriate.\n'Does this education approach work?' is factual—evidence determines the answer, not averaging claims.",
                keyPoints: [
                    "Compromise is appropriate for value trade-offs and negotiations",
                    "Compromise is fallacious for factual questions with correct answers",
                    "Ask: Is this fact or values? Is the middle position supported by evidence?",
                ],
            },
            {
                type: "content",
                title: "Using This in Debate",
                content: "Apply understanding of false compromise strategically:\n\n**Calling Out the Fallacy:**\n'My opponent suggests the truth is in the middle. But this isn't a matter of opinion—the evidence strongly supports one conclusion. Averaging positions doesn't create truth.'\n\n**Defending 'Extreme' Positions:**\n'My position may seem strong, but on factual questions, extreme can be correct. The evidence supports my claim, not a moderated version.'\n\n**Exposing False Balance:**\n'My opponent creates false equivalence between our positions. But the weight of evidence isn't equal. Their moderate-sounding conclusion misrepresents the actual support for each side.'\n\n**When You Advocate Compromise:**\nMake clear why compromise is appropriate: 'This involves genuine trade-offs between values we both care about. Finding middle ground respects both concerns rather than ignoring evidence.'",
                keyPoints: [
                    "Call out when opponents average positions on factual questions",
                    "Defend 'extreme' positions by showing evidence supports them",
                    "When advocating compromise, explain why trade-offs are appropriate",
                ],
            },
            {
                type: "question",
                id: "l14-05-q2",
                question: "In which situation is finding a middle ground most appropriate?",
                options: [
                    { id: "a", text: "Determining historical facts" },
                    { id: "b", text: "Balancing economic growth against environmental protection—both legitimate values" },
                    { id: "c", text: "Deciding whether a medical treatment is effective" },
                    { id: "d", text: "Calculating scientific measurements" }
                ],
                correctAnswer: "b",
                explanation: "Balancing economic growth against environmental protection involves genuine value trade-offs where compromise is appropriate—both values matter and we might reasonably find middle ground. The other options involve factual questions where evidence determines the answer, not averaging positions.",
            },
            {
                type: "content",
                title: "Conclusion: Beyond False Moderation",
                content: "The middle ground fallacy wrongly assumes truth lies between positions. Sometimes one side is simply correct, and moderation misrepresents reality.\n\n**Key Takeaways:**\n• Middle ground fallacy assumes truth always lies between positions\n• Averaging positions doesn't produce correct answers to factual questions\n• Compromise is appropriate for value trade-offs, not factual disputes\n• Call out false balance that treats unequal positions as equivalent\n• Defend strong positions when evidence supports them\n• When advocating compromise, explain why trade-offs are appropriate\n\n**Looking Ahead:**\nIn the next lesson, we'll explore Attacking Warrants and Logic.\n\n**Practice Challenge:**\nFind a debate where someone suggests a middle position between two views. Is this legitimate compromise or false moderation? What would determine the correct answer?",
                keyPoints: [
                    "Truth isn't determined by averaging positions",
                    "Distinguish factual questions from value trade-offs",
                    "Strong positions are appropriate when evidence supports them",
                ],
            },
        ],
    },
    {
        lessonId: "l14-06",
        pages: [
            {
                type: "content",
                title: "Introduction: Attacking Warrants and Logic",
                content: "Every argument has three core components: the claim (what you're asserting), the evidence (what supports it), and the warrant (why the evidence proves the claim). Attacking warrants targets the logical connection—accepting the evidence while showing it doesn't prove what's claimed.\n\nWarrant attacks are often more powerful than evidence attacks because they can't be fixed by finding more evidence. If the logical connection is flawed, no amount of evidence helps.\n\nIn this lesson, you'll learn to identify and attack weak warrants in opponent arguments.",
            },
            {
                type: "content",
                title: "Understanding Warrants",
                content: "The warrant is the logical bridge:\n\n**Structure Reminder:**\n• Claim: 'We should implement policy X.'\n• Evidence: 'Studies show X reduces problem Y.'\n• Warrant: 'Reducing problem Y is beneficial and achievable through policy implementation.'\n\n**Where Warrants Hide:**\nWarrants are often unstated, assumed to be obvious. This makes them vulnerable—unstated assumptions can be challenged.\n\n**Types of Warrants:**\n• Causal warrants: 'X causes Y' (challengeable on mechanism, confounders)\n• Generalization warrants: 'This example represents the general case' (challengeable on representativeness)\n• Value warrants: 'Y is a good outcome' (challengeable on value premises)\n• Authority warrants: 'Expert says, so it's true' (challengeable on expertise relevance)\n\n**The Power of Warrant Attacks:**\nAccepting the evidence while rejecting the conclusion is often surprising and effective. 'Yes, the study found X. But that doesn't prove your claim because...'",
                keyPoints: [
                    "Warrants are the logical bridge from evidence to claim",
                    "Warrants are often unstated and assumed",
                    "Attacking warrants accepts evidence while rejecting the conclusion",
                ],
            },
            {
                type: "question",
                id: "l14-06-q1",
                question: "An argument states: 'Country A grew economically after cutting taxes. We should cut taxes.' What's the unstated warrant?",
                options: [
                    { id: "a", text: "Taxes are always bad" },
                    { id: "b", text: "Tax cuts caused the growth, and our situation is similar enough for the same result" },
                    { id: "c", text: "Country A is a model for all policies" },
                    { id: "d", text: "Economic growth is the only goal" }
                ],
                correctAnswer: "b",
                explanation: "The unstated warrant assumes causation (tax cuts caused the growth, not just correlation with other factors) and generalization (our situation is similar enough to expect the same outcome). Both assumptions are challengeable.",
            },
            {
                type: "content",
                title: "Common Warrant Weaknesses",
                content: "Target these logical gaps:\n\n**Correlation vs. Causation:**\n'Yes, they occurred together, but where's the evidence one caused the other? Alternative explanations exist.'\n\n**Generalizability:**\n'This worked in one context, but our situation differs in key ways. What works there may not work here.'\n\n**Unstated Values:**\n'Your argument assumes we should prioritize X. But why should X be our primary concern?'\n\n**Missing Mechanisms:**\n'How exactly does A lead to B? Without a plausible mechanism, the connection is speculation.'\n\n**Logical Gaps:**\n'I accept your evidence but don't see how it proves your specific claim. The jump is too large.'\n\n**Hidden Assumptions:**\n'Your argument assumes [unstated premise]. But that assumption is questionable because...'",
                keyPoints: [
                    "Challenge causal claims with alternative explanations",
                    "Question generalizability across different contexts",
                    "Expose unstated value assumptions and logical gaps",
                ],
            },
            {
                type: "content",
                title: "Constructing Warrant Attacks",
                content: "Build effective warrant attacks:\n\n**Accept-Then-Challenge Structure:**\n'We accept that [evidence]. However, this doesn't prove [claim] because [warrant weakness].'\n\n**Provide Alternatives:**\n'Their evidence is consistent with multiple explanations. Our alternative explanation is more plausible because...'\n\n**Identify Hidden Assumptions:**\n'Their argument only works if we assume [hidden premise]. But that premise is questionable.'\n\n**Demand the Mechanism:**\n'How does this work? What's the actual pathway from evidence to conclusion? Without a mechanism, it's just correlation.'\n\n**Strategic Advantage:**\nWarrant attacks are harder to answer than evidence attacks. Your opponent can't just read more evidence—they have to defend the logical connection itself.",
                keyPoints: [
                    "Accept evidence while challenging the logical connection",
                    "Offer alternative explanations for the same evidence",
                    "Identify and challenge hidden assumptions",
                ],
            },
            {
                type: "question",
                id: "l14-06-q2",
                question: "Why are warrant attacks often more powerful than evidence attacks?",
                options: [
                    { id: "a", text: "They're easier to make" },
                    { id: "b", text: "Judges prefer them" },
                    { id: "c", text: "They can't be fixed by reading more evidence—the logical connection itself is flawed" },
                    { id: "d", text: "They're more emotional" }
                ],
                correctAnswer: "c",
                explanation: "Evidence attacks can be answered by reading more or better evidence. But warrant attacks target the logical connection—if the reasoning is flawed, more evidence doesn't help. Opponents must defend the logic itself, which is often harder.",
            },
            {
                type: "content",
                title: "Conclusion: Targeting Logic",
                content: "Attacking warrants strikes at the heart of arguments—the logical connection between evidence and claims. Master this skill to make powerful, hard-to-answer refutations.\n\n**Key Takeaways:**\n• Warrants connect evidence to claims; they're often unstated\n• Accept evidence while challenging the logical connection\n• Target causation, generalizability, values, and mechanisms\n• Provide alternative explanations for the same evidence\n• Identify and challenge hidden assumptions\n• Warrant attacks can't be fixed by reading more evidence\n\n**Looking Ahead:**\nIn the next lesson, we'll review Unit 14 concepts.\n\n**Practice Challenge:**\nTake an argument you've heard recently. Identify the (often unstated) warrant. How could you challenge that logical connection while accepting the evidence?",
                keyPoints: [
                    "Warrants are vulnerable to logical challenges",
                    "More evidence doesn't fix flawed reasoning",
                    "Practice identifying unstated warrants to find attack points",
                ],
            },
        ],
    },
    {
        lessonId: "l14-07",
        pages: [
            {
                type: "content",
                title: "Introduction: Unit 14 Review",
                content: "Congratulations on completing Unit 14! This unit focused on more advanced refutation techniques and evidence ethics.\n\nIn this review, we'll consolidate the genetic fallacy, misinformation identification, cherry-picking, counterexamples, false compromise, and warrant attacks. These skills strengthen your ability to challenge opponent arguments and maintain your own credibility.",
            },
            {
                type: "content",
                title: "Review: Evidence and Source Issues",
                content: "**Genetic Fallacy:**\n• Judges arguments by origin rather than merit\n• Origins may justify scrutiny but don't prove/disprove claims\n• Proper source criticism shows specific methodological concerns\n\n**Misinformation/Disinformation:**\n• Misinformation: false, spread unintentionally\n• Disinformation: false, deliberately created to deceive\n• Red flags: unverifiable sources, extreme emotion, perfect bias confirmation\n• Verify through lateral reading, triangulation, and original sources\n\n**Cherry-Picking:**\n• Selects favorable evidence while hiding contradictions\n• Ask for full data, context, and counter-evidence\n• Acknowledging counter-evidence builds credibility",
                keyPoints: [
                    "Evaluate arguments on merit, not just source",
                    "Verify information through multiple strategies",
                    "Fair evidence representation strengthens credibility",
                ],
            },
            {
                type: "content",
                title: "Review: Refutation Techniques",
                content: "**Counterexamples:**\n• One genuine exception refutes universal claims (all, never, always)\n• Examples must be relevant, specific, and well-documented\n• Defend by avoiding absolutes or distinguishing circumstances\n\n**Middle Ground Fallacy:**\n• Assumes truth always lies between positions\n• Appropriate for value trade-offs, not factual questions\n• Sometimes one side is simply correct\n\n**Attacking Warrants:**\n• Target the logical connection between evidence and claim\n• Accept evidence while challenging the reasoning\n• Can't be fixed by reading more evidence\n• Target causation, generalizability, and hidden assumptions",
                keyPoints: [
                    "Counterexamples demolish universal claims",
                    "False compromise ignores evidence weight",
                    "Warrant attacks are powerful and hard to answer",
                ],
            },
            {
                type: "question",
                id: "l14-07-q1",
                question: "Which fallacy dismisses evidence based on its source rather than evaluating its merits?",
                options: [
                    { id: "a", text: "Cherry-picking" },
                    { id: "b", text: "Middle ground fallacy" },
                    { id: "c", text: "Genetic fallacy" },
                    { id: "d", text: "False dilemma" }
                ],
                correctAnswer: "c",
                explanation: "The genetic fallacy judges arguments by their origin rather than their merit. It dismisses (or accepts) evidence based on who produced it rather than evaluating the evidence itself. Origins may warrant scrutiny but don't determine truth.",
            },
            {
                type: "question",
                id: "l14-07-q2",
                question: "You accept opponent's evidence but argue it doesn't prove their claim. What are you attacking?",
                options: [
                    { id: "a", text: "Their evidence quality" },
                    { id: "b", text: "Their warrant (the logical connection)" },
                    { id: "c", text: "Their source credibility" },
                    { id: "d", text: "Their speaking style" }
                ],
                correctAnswer: "b",
                explanation: "When you accept evidence but challenge the conclusion, you're attacking the warrant—the logical connection between evidence and claim. This is often powerful because more evidence doesn't fix flawed reasoning.",
            },
            {
                type: "content",
                title: "Conclusion: Advanced Refutation Skills",
                content: "You've completed Unit 14, building sophisticated refutation techniques beyond basic evidence attacks.\n\n**Key Takeaways:**\n• Genetic fallacy: evaluate arguments on merit, not source\n• Misinformation: verify through lateral reading and triangulation\n• Cherry-picking: ask for full context and counter-evidence\n• Counterexamples: one exception refutes universal claims\n• Middle ground: truth isn't determined by averaging positions\n• Warrant attacks: target logic, not just evidence\n\n**Looking Ahead:**\nUnit 15 will explore Strategic Refutation techniques.\n\n**Practice Challenge:**\nTake an argument you disagree with. Which technique from this unit would be most effective against it? Why?",
                keyPoints: [
                    "Multiple refutation tools for different situations",
                    "Evidence ethics protects your credibility",
                    "Logical attacks are often more powerful than evidence attacks",
                ],
            },
        ],
    },
];
