import { MultiPageLesson } from "./types";

// Unit 18: Comparison and Standards
// Topics: Nirvana Fallacy, Reductio ad Absurdum, Multi-Point Cases, Comparative Refutation, Moving Goalposts Fallacy, Prioritizing Arguments

export const UNIT_18_LESSONS: MultiPageLesson[] = [
    {
        lessonId: "l18-01",
        pages: [
            {
                type: "content",
                title: "Introduction: The Nirvana Fallacy",
                content: "The nirvana fallacy compares real solutions to idealized, unrealistic alternatives. It rejects good options because they're not perfect, ignoring that perfection may be unattainable.\n\nIn debate, this fallacy appears when opponents attack your proposal for not solving everything, or when standards for success are unrealistically high.\n\nIn this lesson, you'll learn to identify the nirvana fallacy and defend practical solutions against perfectionist criticisms.",
            },
            {
                type: "content",
                title: "Understanding the Fallacy",
                content: "Perfect vs. Better:\n\n**The Pattern:**\n'This solution doesn't completely solve the problem, so it's worthless.'\n'There are still flaws, so we shouldn't implement it.'\n\n**Examples:**\n'Seatbelts don't prevent all traffic deaths, so they're pointless.'\n'This policy won't solve poverty completely, so we shouldn't try.'\n'Your proposal still has some disadvantages, so the status quo is better.'\n\n**Why It Fails:**\n• Perfection is rarely achievable in policy\n• Improvement has value even without complete solution\n• Comparing real options to impossible ideals is unfair\n• The relevant comparison is to other real options, not perfection\n\n**The Correct Question:**\n'Is this better than the alternatives?' Not 'Is this perfect?'",
                keyPoints: [
                    "Rejects good options because they're not perfect",
                    "Compares reality to impossible ideals",
                    "Correct question: Is this better than alternatives?",
                ],
            },
            {
                type: "question",
                id: "l18-01-q1",
                question: "'Renewable energy can't meet 100% of our needs immediately, so it's not worth investing in.' Why is this nirvana fallacy?",
                options: [
                    { id: "a", text: "It's not a fallacy—perfection should be required" },
                    { id: "b", text: "It demands immediate perfection when partial progress still has value compared to alternatives" },
                    { id: "c", text: "Renewable energy is perfect" },
                    { id: "d", text: "The numbers are wrong" }
                ],
                correctAnswer: "b",
                explanation: "This is nirvana fallacy—demanding immediate complete solution as the standard for worth. Partial progress in renewable energy reduces fossil fuel dependence, even without immediately meeting 100% of needs. Compare to alternatives, not to perfection.",
            },
            {
                type: "content",
                title: "Defending Against Nirvana Fallacy",
                content: "Respond when opponents demand perfection:\n\n**Call It Out:**\n'My opponent is comparing our real solution to an imaginary perfect alternative. That's not how policy works.'\n\n**Reframe the Comparison:**\n'The question isn't whether our proposal is perfect. It's whether it's better than the status quo or other alternatives.'\n\n**Acknowledge Limitations:**\n'Yes, our solution isn't perfect. No solution is. But it reduces the problem by X%, which is significant improvement.'\n\n**Demand Their Alternative:**\n'If they reject our imperfect solution, what's their perfect one? If they don't have one, improvement is the best available option.'\n\n**Proportional Expectations:**\n'Perfect solutions don't exist in policy. Our proposal is a meaningful improvement, and that's the relevant standard.'",
                keyPoints: [
                    "Reframe comparison to real alternatives, not perfection",
                    "Acknowledge limitations while showing improvement value",
                    "Demand: what's their better alternative?",
                ],
            },
            {
                type: "content",
                title: "Avoiding Nirvana Fallacy in Your Arguments",
                content: "Don't commit it yourself:\n\n**When Attacking Proposals:**\nShow that the proposal is worse than alternatives, not just imperfect.\n\n**Fair Standards:**\n'Their solution doesn't work because [specific problem], and our alternative handles this better'—not 'Their solution isn't perfect.'\n\n**Status Quo Comparison:**\nIf attacking for failing to solve completely, show the failure is worse than accepting the status quo.\n\n**Consistent Standards:**\nApply the same standards to your proposals as to opponents'. If you demand perfection from them, they can demand it from you.\n\n**Acknowledging Trade-offs:**\nGood policy analysis acknowledges that all options have costs. The question is which costs are most acceptable.",
                keyPoints: [
                    "Attack for being worse than alternatives, not for imperfection",
                    "Apply consistent standards to both sides",
                    "All options have costs—compare them fairly",
                ],
            },
            {
                type: "question",
                id: "l18-01-q2",
                question: "What's the correct standard when evaluating policy proposals?",
                options: [
                    { id: "a", text: "Does it solve the problem completely?" },
                    { id: "b", text: "Is it better than the available alternatives, including the status quo?" },
                    { id: "c", text: "Does everyone agree it's the best?" },
                    { id: "d", text: "Is it free of any possible criticism?" }
                ],
                correctAnswer: "b",
                explanation: "The correct standard is comparison to alternatives. Perfect solutions rarely exist. The relevant question is whether the proposal improves on the status quo and available alternatives—not whether it achieves perfection.",
            },
            {
                type: "content",
                title: "Conclusion: Better, Not Perfect",
                content: "The nirvana fallacy demands impossible perfection. Good policy analysis compares real options fairly, seeking improvement rather than perfection.\n\n**Key Takeaways:**\n• Nirvana fallacy rejects good options because they're not perfect\n• Compare real options to each other, not to impossible ideals\n• Defend by reframing the comparison to alternatives\n• Acknowledge limitations while showing improvement value\n• Don't commit it yourself—attack for being worse, not imperfect\n• Apply consistent standards to both sides\n\n**Looking Ahead:**\nIn the next lesson, we'll explore Reductio ad Absurdum.\n\n**Practice Challenge:**\nFind a policy debate where someone commits nirvana fallacy. How could the defender respond? What's the appropriate comparison?",
                keyPoints: [
                    "Seek improvement, not perfection",
                    "Compare real options, not real vs. ideal",
                    "Consistent standards for all proposals",
                ],
            },
        ],
    },
    {
        lessonId: "l18-02",
        pages: [
            {
                type: "content",
                title: "Introduction: Reductio ad Absurdum",
                content: "Reductio ad absurdum ('reduction to absurdity') disproves a position by showing it leads to absurd or unacceptable conclusions. If accepting a premise leads to something clearly false, the premise itself must be problematic.\n\nThis is a legitimate and powerful logical technique—not a fallacy like most of our other topics. Learning to use it properly adds a sophisticated tool to your arsenal.\n\nIn this lesson, you'll learn to construct valid reductio arguments and distinguish them from improper dismissals.",
            },
            {
                type: "content",
                title: "How Reductio Works",
                content: "Follow the logic to its conclusion:\n\n**The Structure:**\n1. Assume opponent's position is true\n2. Show that accepting this leads to absurd/unacceptable conclusion\n3. Therefore, the original position must be false\n\n**Example:**\n'If we accept that any restriction on freedom is always wrong, we must accept that laws against murder are wrong. Since that's absurd, unlimited freedom can't be the correct principle.'\n\n**Logical Foundation:**\nIf P implies Q, and Q is false, then P must be false. (Modus tollens)\n\n**Why It Works:**\nWe draw out implications the opponent might not have considered. Showing their position has unacceptable implications challenges them to revise it.\n\n**The Power:**\nReductio doesn't just disagree—it shows the internal inconsistency or extreme implications of a position.",
                keyPoints: [
                    "Assume the opponent's position and show it leads to absurdity",
                    "If the conclusion is unacceptable, the premise must be flawed",
                    "Logically valid when the connection is genuine",
                ],
            },
            {
                type: "question",
                id: "l18-02-q1",
                question: "Someone argues 'All speech should be protected without exception.' You respond: 'That would protect direct incitement to violence, meaning we couldn't stop someone yelling instructions to harm specific people.' What are you doing?",
                options: [
                    { id: "a", text: "Making a personal attack" },
                    { id: "b", text: "Using reductio ad absurdum—showing their principle leads to unacceptable conclusions" },
                    { id: "c", text: "Changing the subject" },
                    { id: "d", text: "Agreeing with them" }
                ],
                correctAnswer: "b",
                explanation: "This is reductio ad absurdum. You're accepting their principle ('all speech protected without exception') and showing it leads to unacceptable implications (protecting incitement to violence). This challenges them to revise the principle.",
            },
            {
                type: "content",
                title: "Constructing Valid Reductio Arguments",
                content: "Make your reductio work:\n\n**Genuine Implications:**\nThe absurd conclusion must actually follow from their position. Forced or strained connections undermine your argument.\n\n**Clearly Absurd:**\nThe conclusion should be genuinely unacceptable, not just something you disagree with. Universal agreement that it's absurd is strongest.\n\n**Fair Interpretation:**\nStart from a fair understanding of their position. Straw man + reductio is unconvincing.\n\n**Example Quality:**\nHypotheticals should be realistic enough to be compelling. Extremely far-fetched scenarios may not persuade.\n\n**Presentation:**\n'If we accept your principle, we'd have to accept [absurd consequence]. I don't think you actually believe [absurd consequence], which means we need a more nuanced principle.'",
                keyPoints: [
                    "The absurd conclusion must genuinely follow",
                    "The conclusion should be universally recognized as absurd",
                    "Start from fair interpretation; avoid straw man",
                ],
            },
            {
                type: "content",
                title: "Defending Against Reductio",
                content: "How to respond when your position is reduced:\n\n**Deny the Implication:**\n'Actually, my position doesn't lead to that conclusion because [distinction].'\n\n**Accept and Defend:**\nIn rare cases, you might accept the 'absurd' conclusion: 'Actually, I do believe that, and here's why it's not actually absurd...'\n\n**Modify Your Position:**\n'Fair point—let me nuance my position to exclude that implication.'\n\n**Challenge the Absurdity:**\n'You're calling that absurd, but is it really? Here's why it might be acceptable...'\n\n**Distinguish Cases:**\n'My principle applies in normal circumstances. Your extreme example is different because...'\n\n**Best Defense:**\nHave a principled reason for why the supposedly absurd implication doesn't actually follow.",
                keyPoints: [
                    "Deny the implication if it doesn't genuinely follow",
                    "Modify position to exclude the problematic implication",
                    "Distinguish normal cases from extreme hypotheticals",
                ],
            },
            {
                type: "question",
                id: "l18-02-q2",
                question: "What's the key requirement for a valid reductio ad absurdum argument?",
                options: [
                    { id: "a", text: "The conclusion must sound dramatic" },
                    { id: "b", text: "The absurd conclusion must genuinely follow from the opponent's position" },
                    { id: "c", text: "The opponent must admit they're wrong" },
                    { id: "d", text: "You must be louder" }
                ],
                correctAnswer: "b",
                explanation: "The absurd conclusion must genuinely, logically follow from the opponent's stated position. If the connection is forced or doesn't truly follow, the reductio fails. The strength comes from the inevitability of the implication.",
            },
            {
                type: "content",
                title: "Conclusion: Showing Absurd Implications",
                content: "Reductio ad absurdum is a powerful legitimate technique for exposing problems in opponent positions by showing where their logic leads.\n\n**Key Takeaways:**\n• Reductio shows that a position leads to absurd/unacceptable conclusions\n• The absurd conclusion must genuinely follow from the position\n• Start from fair interpretation; avoid straw man versions\n• The 'absurd' conclusion should be universally recognized as problematic\n• Defend by denying the implication, modifying position, or distinguishing cases\n• This is valid reasoning, not a fallacy\n\n**Looking Ahead:**\nIn the next lesson, we'll explore Making Multi-Point Cases.\n\n**Practice Challenge:**\nTake a position you disagree with. Construct a reductio ad absurdum argument against it. Does your absurd conclusion genuinely follow? Is it clearly absurd?",
                keyPoints: [
                    "Reductio is a valid logical technique",
                    "Connection must be genuine, not forced",
                    "Defend by showing the implication doesn't follow or has limits",
                ],
            },
        ],
    },
    {
        lessonId: "l18-03",
        pages: [
            {
                type: "content",
                title: "Introduction: Making Multi-Point Cases",
                content: "A multi-point case presents multiple independent arguments for your position. Rather than relying on one line of reasoning, you build redundancy—opponents must defeat all your arguments to win, while you only need to win one.\n\nThis strategic advantage makes multi-point cases the standard approach in formal debate. But quality matters more than quantity.\n\nIn this lesson, you'll learn to construct effective multi-point cases and avoid common pitfalls.",
            },
            {
                type: "content",
                title: "Benefits of Multi-Point Cases",
                content: "Why present multiple arguments:\n\n**Redundancy:**\nIf one argument falls, others remain. Opponents must defeat all your points.\n\n**Comprehensive:**\nDifferent arguments may appeal to different judges or cover different aspects.\n\n**Flexibility:**\nYou can focus rebuttals on your strongest points, letting weaker ones go.\n\n**Pressure:**\nOpponents have limited time. Addressing five arguments takes longer than addressing one.\n\n**Coverage:**\nMultiple arguments from different angles present a complete picture.\n\n**Strategic Value:**\nIn close debates, any one argument can be the margin. More chances to hit.",
                keyPoints: [
                    "Redundancy: opponents must defeat all points",
                    "Flexibility: focus rebuttals on strongest arguments",
                    "Pressure: limited time forces opponents to choose",
                ],
            },
            {
                type: "question",
                id: "l18-03-q1",
                question: "Why is it strategically advantageous to have multiple independent arguments?",
                options: [
                    { id: "a", text: "Judges prefer longer speeches" },
                    { id: "b", text: "If opponents defeat one argument, others remain; you only need to win one key argument to win the debate" },
                    { id: "c", text: "It fills more time" },
                    { id: "d", text: "It's required by debate rules" }
                ],
                correctAnswer: "b",
                explanation: "Multiple independent arguments create redundancy. Opponents must defeat all of them, while you only need one surviving winning argument. This asymmetry heavily favors having multiple lines of attack.",
            },
            {
                type: "content",
                title: "Constructing Effective Multi-Point Cases",
                content: "Build quality cases:\n\n**Independence:**\nEach argument should stand alone. If one falls, others shouldn't be affected.\n\n**Quality Over Quantity:**\nThree strong arguments beat five weak ones. Don't add filler.\n\n**Clear Structure:**\n'First, X. Second, Y. Third, Z.' Signpost clearly so judges track your arguments.\n\n**Priority Order:**\nLead with your strongest arguments. Some judges stop taking notes after the first few points.\n\n**Coherent Theme:**\nWhile independent, arguments can share a unifying narrative. 'There are three reasons this policy fails: [economically, socially, practically].'\n\n**Don't Contradict:**\nArguments should be consistent. Don't say 'This won't work' AND 'This is dangerous'—if it won't work, the danger is less relevant.",
                keyPoints: [
                    "Arguments should be independent—one falling doesn't collapse others",
                    "Quality over quantity; avoid filler arguments",
                    "Lead with strongest arguments; signpost clearly",
                ],
            },
            {
                type: "content",
                title: "Common Mistakes",
                content: "Avoid these pitfalls:\n\n**Interdependence:**\nIf defeating one argument defeats another, you've wasted time on two points when you really only have one.\n\n**Quantity Obsession:**\nRushing through ten weak arguments is worse than developing three strong ones.\n\n**Contradiction:**\nArguments that undermine each other hurt your credibility. 'It's too expensive' and 'It won't work' can coexist; 'It's too radical' and 'It changes nothing' cannot.\n\n**Poor Development:**\nBrief mentions without development don't create winning arguments. Give each point enough support.\n\n**Unclear Structure:**\nIf judges can't identify your distinct arguments, they can't flow them. Signpost explicitly.\n\n**Ignoring Best Points:**\nIn rebuttals, don't feel obligated to defend weak arguments. Focus on your strongest case.",
                keyPoints: [
                    "Ensure true independence of arguments",
                    "Develop each argument sufficiently",
                    "Avoid contradictions between your own points",
                ],
            },
            {
                type: "question",
                id: "l18-03-q2",
                question: "What makes arguments truly 'independent' in a multi-point case?",
                options: [
                    { id: "a", text: "They're about different topics" },
                    { id: "b", text: "Defeating one argument doesn't affect the validity of the others" },
                    { id: "c", text: "They're presented in separate speeches" },
                    { id: "d", text: "They use different sources" }
                ],
                correctAnswer: "b",
                explanation: "True independence means each argument stands alone. If defeating one automatically defeats another, they're really one argument presented twice. Independent arguments maintain their force even if others fall.",
            },
            {
                type: "content",
                title: "Conclusion: Strategic Multiplicity",
                content: "Multi-point cases create strategic advantage through redundancy and pressure. Quality and independence are essential for effectiveness.\n\n**Key Takeaways:**\n• Multiple independent arguments create strategic redundancy\n• Opponents must defeat all points; you only need to win key ones\n• Quality beats quantity—avoid filler arguments\n• Ensure true independence—defeating one shouldn't collapse others\n• Avoid contradictions between your own arguments\n• Signpost clearly; lead with strongest points\n\n**Looking Ahead:**\nIn the next lesson, we'll explore Comparative Refutation.\n\n**Practice Challenge:**\nTake a position and develop three truly independent arguments for it. How would an opponent have to respond to defeat all three?",
                keyPoints: [
                    "Multi-point cases create redundancy advantage",
                    "Quality and independence matter more than quantity",
                    "Coherent but independent arguments are the goal",
                ],
            },
        ],
    },
    {
        lessonId: "l18-04",
        pages: [
            {
                type: "content",
                title: "Introduction: Comparative Refutation",
                content: "Comparative refutation doesn't just attack opponent arguments—it shows why your position is relatively better. Instead of only 'They're wrong,' you argue 'Our approach is better because...'\n\nThis comparative approach reflects how debates are actually decided. Judges typically choose between positions rather than simply ruling one right or wrong.\n\nIn this lesson, you'll learn to refute comparatively, showing relative advantage rather than just absolute criticism.",
            },
            {
                type: "content",
                title: "Why Comparative Refutation",
                content: "The value of relative comparison:\n\n**Realistic:** \nJudges choose between flawed options. Showing your flaws are lesser is more realistic than claiming perfection.\n\n**Offensive:**\nComparative refutation attacks their position AND advances your own simultaneously.\n\n**Resilient:**\nEven if your attacks don't fully succeed, showing relative advantage survives.\n\n**Persuasive:**\n'We're better' is more compelling than 'They're wrong.'\n\n**Decision-Focused:**\nIt mirrors how judges actually decide—by comparing alternatives.\n\n**Examples:**\n'Their approach costs more while achieving less.'\n'Both have risks, but ours are smaller and more manageable.'\n'Their solution creates new problems; ours doesn't.'",
                keyPoints: [
                    "Comparative refutation shows relative advantage",
                    "Mirrors how judges actually decide between options",
                    "Resilient even if absolute attacks don't fully succeed",
                ],
            },
            {
                type: "question",
                id: "l18-04-q1",
                question: "What distinguishes comparative refutation from simple refutation?",
                options: [
                    { id: "a", text: "Comparative refutation is longer" },
                    { id: "b", text: "Simple refutation says 'they're wrong'; comparative says 'our approach is better because...'" },
                    { id: "c", text: "Comparative refutation is always weaker" },
                    { id: "d", text: "Simple refutation uses evidence" }
                ],
                correctAnswer: "b",
                explanation: "Simple refutation attacks the opponent; comparative refutation shows your position is relatively better. This gives judges a reason to choose you, not just reject them—more aligned with how decisions are made.",
            },
            {
                type: "content",
                title: "Executing Comparative Refutation",
                content: "Make comparisons effectively:\n\n**Structure:**\n'Their approach fails because X. Our approach succeeds because we address X through [method].'\n\n**Consistent Criteria:**\nCompare on the same dimensions. 'Their plan costs more AND achieves less' is comparative. 'Their plan is expensive, ours has moral value' is changing subjects.\n\n**Concede and Compare:**\n'Both approaches have costs. But their costs are [greater/less manageable/more harmful] because...'\n\n**Relative Language:**\n'Better,' 'less risky,' 'more effective,' 'fewer downsides.'\n\n**Show Trade-offs:**\n'We accept [cost] in exchange for [benefit]. They get [smaller benefit] for [larger cost].'\n\n**Evidence:**\nSupport comparative claims with evidence about both sides when possible.",
                keyPoints: [
                    "Attack their weakness AND show how you're stronger",
                    "Use consistent criteria for fair comparison",
                    "Relative language: better, less risky, more effective",
                ],
            },
            {
                type: "content",
                title: "Comparative Refutation in Practice",
                content: "Apply strategically:\n\n**When Both Have Weaknesses:**\n'Yes, our approach isn't perfect. But their weaknesses are more serious because...'\n\n**When They Attack You:**\n'They criticize us for X. But X is a smaller problem than their Y, which they haven't addressed.'\n\n**Weighing Impacts:**\n'Their harm is significant. But our benefits are more significant because [weighing criteria].'\n\n**Opportunity Cost:**\n'Choosing their approach means losing what our approach would provide...'\n\n**Combining with Other Refutation:**\nComparative refutation works with other techniques. You might turn an argument AND show relative advantage.\n\n**Crystallization:**\n'The choice is between our approach with [smaller costs] and theirs with [larger costs]. The comparison favors us.'",
                keyPoints: [
                    "Use when both positions have weaknesses",
                    "Respond to attacks by showing relative advantage",
                    "Incorporate into weighing and crystallization",
                ],
            },
            {
                type: "question",
                id: "l18-04-q2",
                question: "Your position has been attacked for a weakness. What's the comparative response?",
                options: [
                    { id: "a", text: "Deny the weakness exists" },
                    { id: "b", text: "Acknowledge the weakness while showing the opponent's position has worse weaknesses" },
                    { id: "c", text: "Change the subject" },
                    { id: "d", text: "Attack the opponent personally" }
                ],
                correctAnswer: "b",
                explanation: "The comparative response acknowledges your weakness while showing opponents have worse weaknesses. 'Yes, our approach has this cost. But their approach has larger costs in these areas.' This maintains credibility while winning the comparison.",
            },
            {
                type: "content",
                title: "Conclusion: The Relative Win",
                content: "Comparative refutation shows why your position is relatively better, even in a world of imperfect alternatives.\n\n**Key Takeaways:**\n• Comparative refutation shows relative advantage, not just opponent weakness\n• Mirrors how judges decide between flawed options\n• Use consistent criteria for fair comparison\n• Acknowledge your weaknesses while showing theirs are worse\n• Combine with weighing and crystallization\n• Comparative framing is more persuasive than absolute claims\n\n**Looking Ahead:**\nIn the next lesson, we'll explore the Moving Goalposts Fallacy.\n\n**Practice Challenge:**\nTake a debate you've had. Reframe your refutation comparatively. Instead of just attacking, show why your position was relatively better.",
                keyPoints: [
                    "Show relative advantage, not just opponent failure",
                    "Consistent criteria make comparisons fair",
                    "Comparative framing often more persuasive than absolute claims",
                ],
            },
        ],
    },
    {
        lessonId: "l18-05",
        pages: [
            {
                type: "content",
                title: "Introduction: The Moving Goalposts Fallacy",
                content: "Moving the goalposts is changing what counts as success after criteria have been established or met. Originally: 'If you show X, I'll accept your point.' After X is shown: 'Actually, you need to show Y.'\n\nThis fallacy unfairly prevents any evidence from ever being sufficient. No matter what you prove, the standard keeps moving.\n\nIn this lesson, you'll learn to identify when goalposts are being moved and how to hold opponents to consistent standards.",
            },
            {
                type: "content",
                title: "How Goalposts Move",
                content: "The evasive standard shift:\n\n**Pattern:**\n1. A standard is set (explicitly or implicitly)\n2. You meet that standard\n3. A new, higher standard is introduced\n4. The process repeats indefinitely\n\n**Examples:**\n'Prove it works.' → [Evidence provided] → 'Prove it works everywhere.'\n'Show one example.' → [Example shown] → 'That's just one case—show a pattern.'\n'Address my main concern.' → [Concern addressed] → 'Now address this other concern.'\n\n**Why It's Fallacious:**\nThe goal is to avoid ever accepting evidence, not to genuinely evaluate it. Standards should be stable or at least transparently revised.\n\n**The Giveaway:**\nIf the new standard wasn't mentioned until the old one was met, the goalposts have moved.",
                keyPoints: [
                    "Standards keep shifting after being met",
                    "Goal is to never accept evidence",
                    "New standards appear only after old ones are met",
                ],
            },
            {
                type: "question",
                id: "l18-05-q1",
                question: "Opponent says 'Show me evidence this works.' You cite three studies. They respond: 'But those are just studies—where's real-world proof?' What happened?",
                options: [
                    { id: "a", text: "Reasonable refinement of standards" },
                    { id: "b", text: "Moving the goalposts—they demanded evidence, you provided it, now they want something different" },
                    { id: "c", text: "Good epistemology" },
                    { id: "d", text: "Nothing unusual" }
                ],
                correctAnswer: "b",
                explanation: "This is moving the goalposts. They asked for evidence, and studies are evidence. The new requirement for 'real-world proof' appeared only after studies were provided. If real-world proof was required, that should have been stated upfront.",
            },
            {
                type: "content",
                title: "Responding to Moving Goalposts",
                content: "Hold opponents to consistent standards:\n\n**Document the Shift:**\n'You asked for X. I provided X. Now you're asking for Y. The goalposts have moved.'\n\n**Demand Upfront Standards:**\n'What would satisfy you? Let's establish that now.' If they can't articulate a standard, their objection is in bad faith.\n\n**Highlight the Pattern:**\n'Every time I meet your standard, you change it. This suggests no evidence would be accepted.'\n\n**Pin Them Down:**\n'If I show you [evidence], will that address your concern?' Get explicit commitment before providing evidence.\n\n**Appeal to Judge:**\n'Note that I've met each standard as stated. Their continued objection isn't based on insufficient evidence but on unwillingness to acknowledge it.'",
                keyPoints: [
                    "Document when standards shift after being met",
                    "Demand upfront standards before providing evidence",
                    "Highlight patterns of repeated goalpost movement",
                ],
            },
            {
                type: "content",
                title: "Legitimate Standard Revision",
                content: "Not all standard shifts are fallacious:\n\n**Legitimate Revision:**\n• New information genuinely changes what's needed\n• The revision is acknowledged transparently\n• It addresses a genuine gap in the original standard\n• It's not repeated indefinitely\n\n**Still Fallacious:**\n• The shift happens only after the original standard is met\n• No acknowledgment that standards have changed\n• Pattern of endless escalation\n• New standard is similarly vague and moveable\n\n**The Key Question:**\n'Is this a genuine refinement or an evasion?'\n\n**Good Faith Indicator:**\nA good-faith reviser says 'You met X; I realize I also need Y. Here's why Y matters...' A goalpost-mover says 'X isn't really what I meant. I need Y.'",
                keyPoints: [
                    "Legitimate revision is transparent and doesn't repeat infinitely",
                    "Goalpost-moving happens only after standards are met",
                    "Good faith revisers acknowledge the change",
                ],
            },
            {
                type: "question",
                id: "l18-05-q2",
                question: "How can you preemptively prevent goalpost-moving?",
                options: [
                    { id: "a", text: "Never provide evidence" },
                    { id: "b", text: "Ask opponents to specify their standard upfront: 'What would satisfy this concern?'" },
                    { id: "c", text: "Move your own goalposts first" },
                    { id: "d", text: "Refuse to engage with the point" }
                ],
                correctAnswer: "b",
                explanation: "Pin down the standard before providing evidence. 'What would address this concern?' gets explicit commitment. If they later move goalposts, you can reference their stated standard. If they can't articulate one, their objection is vague.",
            },
            {
                type: "content",
                title: "Conclusion: Stable Standards",
                content: "Moving the goalposts unfairly prevents evidence from ever being sufficient. Hold opponents to consistent, stated standards.\n\n**Key Takeaways:**\n• Moving goalposts = changing success criteria after they're met\n• Goal is to never accept evidence\n• Document shifts: 'You asked for X. I provided X. Now you want Y.'\n• Demand upfront standards before providing evidence\n• Legitimate revision is transparent and finite\n• Pin down standards; highlight evasion patterns\n\n**Looking Ahead:**\nIn the next lesson, we'll explore Prioritizing Arguments.\n\n**Practice Challenge:**\nThink of a time someone moved the goalposts on you. How could you have responded to hold them to the original standard?",
                keyPoints: [
                    "Standards should be stable or transparently revised",
                    "Demand explicit standards upfront",
                    "Document and call out goalpost movement",
                ],
            },
        ],
    },
    {
        lessonId: "l18-06",
        pages: [
            {
                type: "content",
                title: "Introduction: Prioritizing Arguments",
                content: "You can't fully develop every argument—time is finite. Prioritizing arguments means identifying which points deserve the most attention based on their importance to the round.\n\nGood debaters don't give equal time to all arguments. They invest heavily in decisive points and briefly address or drop minor ones.\n\nIn this lesson, you'll learn to identify priority arguments and allocate time strategically.",
            },
            {
                type: "content",
                title: "Criteria for Prioritization",
                content: "What makes an argument high-priority:\n\n**Decisive:**\nWinning this argument wins the round. Focus here.\n\n**Opponent's Strength:**\nTheir strongest argument needs substantial response. Letting it stand may cost you the round.\n\n**Evidence Quality:**\nArguments supported by strong evidence may deserve development; weak ones may be better to abandon.\n\n**Complexity:**\nSome arguments need more explanation to work. Simple ones need less time.\n\n**Judge Interest:**\nSome arguments clearly resonate with the judge. Follow their focus.\n\n**Your Position:**\nArguments central to your thesis get more time than peripheral ones.\n\n**Time Economics:**\nSome arguments are 'cheap'—quick to make effectively. Others are 'expensive'—need substantial time. Consider the investment.",
                keyPoints: [
                    "Decisive arguments deserve the most attention",
                    "Opponent's strongest arguments need substantial response",
                    "Consider time economics: quick wins vs. time-intensive arguments",
                ],
            },
            {
                type: "question",
                id: "l18-06-q1",
                question: "Which argument should typically receive the most time in your speech?",
                options: [
                    { id: "a", text: "The first one you thought of" },
                    { id: "b", text: "The one most likely to be decisive for winning the round" },
                    { id: "c", text: "The one that's easiest to make" },
                    { id: "d", text: "All arguments should get equal time" }
                ],
                correctAnswer: "b",
                explanation: "Decisive arguments—those most likely to determine who wins—should receive the most attention. Your job is to win the round, so invest time where winning is most possible and important.",
            },
            {
                type: "content",
                title: "Executing Prioritization",
                content: "Implement strategic time allocation:\n\n**Triage:**\nBefore speaking, identify your top 2-3 arguments. These get most of your time.\n\n**Signpost Priority:**\n'The most important issue in this debate is X. Let me address that first and thoroughly.'\n\n**Brief Lower Priority:**\n'I'll briefly note on their minor point...' signals it's not central.\n\n**Strategic Drops:**\nSome arguments aren't worth addressing at all. Implicitly dropping minor points is often fine.\n\n**Flexibility:**\nBe willing to adjust based on what's happening. If an argument is resonating with the judge, spend more time there.\n\n**Rebuttal Focus:**\nRebuttals especially require prioritization. You can't respond to everything at length. Choose wisely.",
                keyPoints: [
                    "Identify top 2-3 arguments before speaking",
                    "Signpost to indicate what you're prioritizing",
                    "Be willing to drop minor arguments",
                ],
            },
            {
                type: "content",
                title: "Common Prioritization Mistakes",
                content: "Avoid these errors:\n\n**Equal Time:**\nTreating all arguments equally wastes time on unimportant ones and underdevelops important ones.\n\n**Chronological:**\nAddressing arguments in order presented, not importance. Your strongest point might come last when time is gone.\n\n**Comfort Zone:**\nSpending time on arguments you like rather than ones that matter.\n\n**Missing Key Issues:**\nFocusing on minor arguments while ignoring the decisive one.\n\n**Over-Responding:**\nSpending too much time on weak opponent arguments you could briefly dismiss.\n\n**Under-Responding:**\nGiving brief response to their crucial arguments that needed more.\n\n**Ignoring Judge:**\nNot adjusting when the judge clearly cares about a particular issue.",
                keyPoints: [
                    "Don't give equal time to unequal arguments",
                    "Don't follow opponent's structure if it's not strategic",
                    "Watch judge reactions and adjust",
                ],
            },
            {
                type: "question",
                id: "l18-06-q2",
                question: "When is it strategically appropriate to 'drop' an argument (not respond to it at all)?",
                options: [
                    { id: "a", text: "Never—you must respond to everything" },
                    { id: "b", text: "When the argument is minor and responding would take time from more important issues" },
                    { id: "c", text: "Whenever you're losing that argument" },
                    { id: "d", text: "At the start of every speech" }
                ],
                correctAnswer: "b",
                explanation: "Strategic drops are appropriate for minor arguments when your time is better spent elsewhere. Not every argument needs response—judges care about the central issues, not whether you touched every minor point.",
            },
            {
                type: "content",
                title: "Conclusion: Strategic Focus",
                content: "Prioritizing arguments allows you to invest time where it matters most. Not all arguments deserve equal attention.\n\n**Key Takeaways:**\n• Decisive arguments deserve most attention\n• Respond substantially to opponent's strongest points\n• Brief or drop minor arguments\n• Signpost priority to guide judge focus\n• Don't give equal time to unequal arguments\n• Watch judge reactions and adjust prioritization\n\n**Looking Ahead:**\nIn the next lesson, we'll review Unit 18 concepts.\n\n**Practice Challenge:**\nIn your next debate, consciously prioritize. Identify your top two arguments and ensure they get the most time. Track whether this affects outcomes.",
                keyPoints: [
                    "Invest time where winning is possible and important",
                    "Strategic drops and brief responses save time for priorities",
                    "Adjust based on what resonates with judges",
                ],
            },
        ],
    },
    {
        lessonId: "l18-07",
        pages: [
            {
                type: "content",
                title: "Introduction: Unit 18 Review",
                content: "Congratulations on completing Unit 18! This unit focused on comparison and standards in debate—how to evaluate arguments relative to each other.\n\nIn this review, we'll consolidate the nirvana fallacy, reductio ad absurdum, multi-point cases, comparative refutation, moving goalposts, and prioritizing arguments.",
            },
            {
                type: "content",
                title: "Review: Standards and Comparison",
                content: "**Nirvana Fallacy:**\n• Rejects good options because they're not perfect\n• Compare real alternatives, not real vs. ideal\n• Correct question: Is this better than alternatives?\n\n**Reductio ad Absurdum:**\n• Shows a position leads to absurd conclusions\n• Valid when the connection genuinely follows\n• Defend by denying implication or distinguishing cases\n\n**Moving Goalposts:**\n• Changing success criteria after they're met\n• Demand upfront standards; document shifts\n• Legitimate revision is transparent and finite",
                keyPoints: [
                    "Compare to alternatives, not to perfection",
                    "Reductio is valid technique, not a fallacy",
                    "Standards should be stable or transparently revised",
                ],
            },
            {
                type: "content",
                title: "Review: Case Strategy",
                content: "**Multi-Point Cases:**\n• Multiple independent arguments create redundancy\n• Quality over quantity; ensure true independence\n• Lead with strongest; avoid contradictions\n\n**Comparative Refutation:**\n• Shows relative advantage, not just opponent weakness\n• Mirrors how judges actually decide\n• Use consistent criteria for fair comparison\n\n**Prioritizing Arguments:**\n• Decisive arguments deserve most time\n• Strategic drops save time for priorities\n• Watch judge reactions and adjust",
                keyPoints: [
                    "Independent arguments create strategic redundancy",
                    "Show why you're better, not just that they're wrong",
                    "Invest time where winning is possible and important",
                ],
            },
            {
                type: "question",
                id: "l18-07-q1",
                question: "Someone argues your proposal is worthless because it doesn't solve the entire problem. What fallacy is this?",
                options: [
                    { id: "a", text: "Moving goalposts" },
                    { id: "b", text: "Nirvana fallacy—demanding perfection when improvement has value" },
                    { id: "c", text: "Reductio ad absurdum" },
                    { id: "d", text: "Ad hominem" }
                ],
                correctAnswer: "b",
                explanation: "This is nirvana fallacy—rejecting a proposal because it's not perfect. The correct standard is whether it improves on alternatives, not whether it achieves perfection. Improvement has value even without complete solution.",
            },
            {
                type: "question",
                id: "l18-07-q2",
                question: "What makes comparative refutation more persuasive than simple refutation?",
                options: [
                    { id: "a", text: "It's longer" },
                    { id: "b", text: "It shows why you're better, not just that they're wrong—matching how judges actually decide" },
                    { id: "c", text: "It uses more evidence" },
                    { id: "d", text: "Judges prefer it for arbitrary reasons" }
                ],
                correctAnswer: "b",
                explanation: "Comparative refutation gives judges a reason to choose you, not just reject opponents. Since judges decide between flawed options, showing you're relatively better matches their decision process.",
            },
            {
                type: "content",
                title: "Conclusion: Comparative Excellence",
                content: "You've completed Unit 18, building tools for comparing arguments and applying appropriate standards.\n\n**Key Takeaways:**\n• Compare to alternatives, not perfection (avoid nirvana fallacy)\n• Reductio shows positions lead to absurd conclusions\n• Multi-point cases create redundancy; quality matters most\n• Comparative refutation shows relative advantage\n• Stable standards prevent goalpost-moving\n• Prioritize based on what's decisive for winning\n\n**Looking Ahead:**\nUnit 19 will explore Application—putting skills together in practice.\n\n**Practice Challenge:**\nFor your next debate, consciously apply comparative refutation. Instead of just attacking, show why your position is relatively better.",
                keyPoints: [
                    "Standards for comparison should be realistic and stable",
                    "Multi-point and comparative approaches strengthen cases",
                    "Strategic prioritization maximizes limited time",
                ],
            },
        ],
    },
];
