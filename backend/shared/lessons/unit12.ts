import { MultiPageLesson } from "./types";

export const UNIT_12_LESSONS: MultiPageLesson[] = [
    {
        lessonId: "l12-01",
        pages: [
            {
                type: "content",
                title: "Introduction: Knowing When You're Wrong",
                content: "One of the most valuable intellectual skills is recognizing when you're wrong—and updating your beliefs accordingly. This isn't weakness; it's intellectual strength. The best thinkers actively seek out errors in their own reasoning.\n\nIn debate, you'll sometimes realize mid-round that an argument isn't working or that your opponent has made a valid point. How you handle those moments affects both the round outcome and your development as a thinker.\n\nIn this lesson, you'll learn to recognize signs you might be wrong, respond constructively to strong counterarguments, and build the habit of intellectual humility.",
            },
            {
                type: "content",
                title: "Signs You Might Be Wrong",
                content: "Watch for these indicators:\n\n**Emotional Resistance:**\nStrong defensive emotions when challenged may indicate you're protecting a belief rather than evaluating it fairly.\n\n**Circular Justification:**\nIf you find yourself giving the same answer to repeated 'why?' questions, you may not have independent support.\n\n**Smart People Disagree:**\nWhen thoughtful, well-informed people hold the opposite view, that's worth considering—not dismissing.\n\n**Evidence Keeps Pointing Elsewhere:**\nIf you have to explain away lots of evidence, the evidence might be right.\n\n**Your Best Arguments Feel Weak:**\nWhen you can sense your own arguments aren't compelling, trust that instinct.\n\n**The Position Has Evolved:**\nIf you've had to modify your position multiple times to accommodate objections, consider whether the core claim is sound.\n\n**Confirmation Seeking:**\nIf you only seek information that confirms your view, that's a red flag about objectivity.",
                keyPoints: [
                    "Emotional defensiveness may signal protected beliefs",
                    "When smart people disagree, consider their view seriously",
                    "Repeated modifications may indicate flawed foundations",
                ],
            },
            {
                type: "content",
                title: "The Scout Mindset",
                content: "Julia Galef distinguishes two mindsets:\n\n**Soldier Mindset:**\nMotivated reasoning. The goal is to defend your 'tribe' or idea. Evidence is an ally or an enemy. You ask: 'Must I believe this?' (for bad news) or 'Can I believe this?' (for good news).\n\n**Scout Mindset:**\nAccuracy reasoning. The goal is to see the map clearly. Evidence is just information. You ask: 'Is this true?'\n\n**In Debate:**\nSoldiers win battles but lose wars (because they don't see reality). Scouts adjust their strategy to reality and win.",
                keyPoints: [
                    "Soldiers defend; Scouts explore",
                    "Motivated reasoning distorts evidence processing",
                    "Accuracy is the ultimate strategic advantage",
                ],
            },
            {
                type: "content",
                title: "Bayesian Thinking Basics",
                content: "Thinking in probabilities, not binaries:\n\n**Priors:** Your initial belief.\n**Update:** New evidence shifts the probability.\n**Posterior:** Your new belief.\n\n**The Lesson:**\nDon't go from 'True' to 'False' instantly. Go from '90% confident' to '60% confident' when you see counter-evidence. This makes it easier to change your mind without losing face.",
                keyPoints: [
                    "Beliefs are probabilities, not off/on switches",
                    "Update incrementally based on evidence strength",
                    "Softening confidence is easier than admitting total defeat",
                ],
            },
            {
                type: "content",
                title: "Kill Your Darlings",
                content: "A writing rule that applies to arguments:\n\n**The Concept:**\nSometimes you love an argument. It's clever, witty, and original. But it's flawed. You ignore the flaw because you love the argument.\n\n**The Discipline:**\nBe ruthless. If your favorite argument has a hole, cut it. Better to win with boring, solid arguments than lose with clever, broken ones.",
                keyPoints: [
                    "Emotional attachment to arguments causes blindness",
                    "Ruthlessly cut flawed arguments, even if you like them",
                    "Effectiveness > Cleverness",
                ],
            },
            {
                type: "question",
                id: "l12-01-q1",
                question: "What does strong emotional defensiveness when your argument is challenged potentially indicate?",
                options: [
                    { id: "a", text: "That you're definitely correct" },
                    { id: "b", text: "That your opponent is being unfair" },
                    { id: "c", text: "That you should speak louder" },
                    { id: "d", text: "That you might be protecting a belief rather than evaluating it fairly" }
                ],
                correctAnswer: "d",
                explanation: "Strong emotional defensiveness can indicate you're protecting a belief rather than objectively evaluating it. This doesn't mean you're wrong, but it's a signal to examine your reasoning more carefully and consider whether you're being fair to opposing arguments.",
            },
            {
                type: "content",
                title: "What To Do When You Realize You're Wrong",
                content: "When you recognize an error:\n\n**In Preparation:**\nThis is the best time to find problems. Welcome them. Revise your case based on what you learn.\n\n**In a Debate Round:**\n• You probably can't completely change positions\n• But you can acknowledge limitations: 'Even if my opponent is right about X, I still win because Y...'\n• Pivot to your strongest remaining arguments\n• Don't throw away a round—salvage what you can\n\n**After a Round:**\nReflect honestly on what went wrong. Update your evidence and arguments for next time.\n\n**In Your Thinking Generally:**\nUpdate your beliefs based on evidence. The goal isn't to be right—it's to believe true things. Being wrong is just information about what's true.\n\n**The Mindset Shift:**\nFrom: 'I must defend this position.'\nTo: 'I'm trying to figure out what's true, and being wrong helps me learn.'",
                keyPoints: [
                    "In preparation, revise cases based on discovered problems",
                    "In rounds, pivot to strongest remaining arguments",
                    "Generally, update beliefs—the goal is truth, not consistency",
                ],
            },
            {
                type: "content",
                title: "Intellectual Humility in Practice",
                content: "Cultivating intellectual humility:\n\n**Hold Beliefs Proportionally:**\nStronger evidence = stronger belief. Not everything you believe should be held with the same certainty.\n\n**Seek Disconfirmation:**\nActively look for evidence against your position. This is how scientists think.\n\n**Steel-Man Opposition:**\nUnderstand the strongest version of opposing views. If you can't explain why smart people believe the opposite, you don't fully understand the issue.\n\n**Separate Identity from Ideas:**\nYour ideas aren't you. Being wrong about an idea doesn't diminish your worth.\n\n**Practice Saying:**\n'I was wrong about that.'\n'That's a good point I hadn't considered.'\n'I'm not sure—I need to think about it more.'\n\n**Create Learning Loops:**\nAfter debates and decisions, review what you got wrong. Identify patterns in your errors.\n\n**Surround Yourself:**\nWith people who will disagree with you honestly. Echo chambers prevent learning.",
                keyPoints: [
                    "Hold beliefs proportionally to evidence",
                    "Actively seek disconfirming evidence",
                    "Separate identity from ideas—being wrong is okay",
                ],
            },
            {
                type: "question",
                id: "l12-01-q2",
                question: "Why is actively seeking evidence against your position intellectually valuable?",
                options: [
                    { id: "a", text: "It proves you're wrong" },
                    { id: "b", text: "It prevents you from believing false things and strengthens your understanding" },
                    { id: "c", text: "It weakens your argument for debates" },
                    { id: "d", text: "It's not valuable—always seek confirming evidence" }
                ],
                correctAnswer: "b",
                explanation: "Seeking disconfirming evidence is how scientists think and it serves two purposes: if you're wrong, it helps you find out before committing to error; if you're right, you'll understand the strongest objections and be prepared to address them.",
            },
            {
                type: "content",
                title: "Conclusion: The Strength in Doubt",
                content: "Knowing when you're wrong is one of the most valuable intellectual skills you can develop. It improves your thinking across all domains.\n\n**Key Takeaways:**\n• Watch for signs of protected beliefs: emotional defensiveness, circular justification\n• When thoughtful people disagree, consider their view seriously\n• In rounds, pivot to strongest arguments if positions weaken\n• Update beliefs based on evidence—truth matters more than consistency\n• Intellectual humility is strength, not weakness\n• Seek disconfirmation actively and separate identity from ideas\n\n**Looking Ahead:**\nIn the next lesson, we'll explore Composition and Division Fallacies—errors in reasoning from parts to wholes.\n\n**Practice Challenge:**\nChoose a belief you hold strongly. Spend 15 minutes genuinely trying to find the best arguments against it. Did you learn anything?",
                keyPoints: [
                    "Recognizing error is intellectual strength",
                    "Update beliefs based on evidence",
                    "Seek out challenges to your thinking",
                ],
            },
        ],
    },
    {
        lessonId: "l12-02",
        pages: [
            {
                type: "content",
                title: "Introduction: Composition and Division Fallacies",
                content: "Composition and division are two related fallacies about the relationship between parts and wholes. Composition assumes what's true of parts is true of the whole. Division assumes what's true of the whole is true of each part.\n\nThese fallacies are subtle because sometimes parts and wholes DO share properties—but not always. Understanding when part-whole reasoning is valid and when it fails is crucial for sophisticated argumentation.\n\nIn this lesson, you'll learn to identify both fallacies, understand when part-whole reasoning fails, and challenge these errors effectively.",
            },
            {
                type: "content",
                title: "The Fallacy of Composition",
                content: "Composition reasons from parts to whole:\n\n**The Structure:**\n'Each part has property X. Therefore, the whole has property X.'\n\n**Examples:**\n'Each tile in this mosaic is beautiful. Therefore, the mosaic is beautiful.'\nMaybe—but beautiful parts can make ugly wholes if arranged poorly.\n\n'Each player on this team is excellent. Therefore, this is an excellent team.'\nNot necessarily—excellent individuals might not work well together.\n\n'Atoms aren't conscious. The brain is made of atoms. Therefore, the brain isn't conscious.'\nBut consciousness might emerge from organization of unconscious parts.\n\n**Why It Fails:**\nSome properties don't aggregate simply. The whole can have properties that parts lack (emergent properties), or lack properties that parts have.\n\n**When It Works:**\nSome properties DO transfer: if every brick weighs 5 lbs, the total weight is the sum. Weight transfers; beauty doesn't.",
                keyPoints: [
                    "Composition falsely assumes part properties apply to wholes",
                    "Emergent properties arise only at the whole level",
                    "Some properties transfer (weight); some don't (beauty, function)",
                ],
            },
            {
                type: "content",
                title: "The Fallacy of Division",
                content: "Division reasons from whole to parts:\n\n**The Structure:**\n'The whole has property X. Therefore, each part has property X.'\n\n**Examples:**\n'This is a wealthy country. Therefore, everyone in it is wealthy.'\nFallacious—national wealth doesn't mean individual wealth.\n\n'The team is slow. Therefore, every player is slow.'\nThe team's overall pace might come from strategy or weak links, not every player.\n\n'This soup is delicious. Therefore, each ingredient is delicious.'\nBut some ingredients (salt, garlic) aren't delicious alone.\n\n**Why It Fails:**\nThe whole's properties might result from the arrangement of parts, not the parts themselves. Or averages might hide variation.\n\n**When It Works:**\nSome properties do divide: if the whole is made of gold, each part is gold. Material composition transfers; aggregate properties often don't.",
                keyPoints: [
                    "Division falsely assumes whole properties apply to parts",
                    "Aggregate properties often hide individual variation",
                    "Material composition transfers; quality and function may not",
                ],
            },
            {
                type: "content",
                title: "The Ecological Fallacy",
                content: "A statistical version of Division:\n\n**The Error:**\nMaking inferences about individuals based on group statistics.\n\n**Example:**\n'Rich states vote Democrat. John lives in a rich state. Therefore, John is likely Democrat.'\n*Reality:* Actually, within rich states, rich PEOPLE often vote Republican. The state aggregate hides the individual correlation.\n\n**Debate Application:**\nWhen an opponent cites state/national level data to prove individual behavior, call Ecological Fallacy.",
                keyPoints: [
                    "Group correlations do not necessarily apply to individuals",
                    "Specific individual data > Aggregate group data",
                    "Common in demographic and political arguments",
                ],
            },
            {
                type: "content",
                title: "Emergence: More Than The Sum",
                content: "When Composition fails hard:\n\n**Emergent Properties:**\nProperties that exist ONLY at the system level.\n• A neuron isn't conscious; a brain is.\n• One ant isn't smart; a colony is.\n• One trader isn't a panic; a market is.\n\n**The Argument:**\n'You can't understand the system by looking at the parts. The system has rules of its own.'\nThis is a powerful response to reductionist arguments.",
                keyPoints: [
                    "Systems have properties their parts lack",
                    "Reductionism (looking only at parts) misses system-level truth",
                    "Complexity theory refutes simple composition logic",
                ],
            },
            {
                type: "content",
                title: "Systemic Risk",
                content: "A financial example of Composition Failure:\n\n**The Logic:**\n'It is safe for Bank A to sell this asset.' (True)\n'It is safe for Bank B to sell this asset.' (True)\n'Therefore, it is safe for ALL banks to sell this asset at once.' (FALSE)\n\n**The Crash:**\nIf everyone sells at once, the price crashes, and everyone goes bust. Individual safety does not compose to collective safety.\n\n**Debate Use:**\nWhenever an opponent argues 'This is good for X, so it's good for everyone,' check for systemic effects.",
                keyPoints: [
                    "Individual rationality can lead to collective irrationality",
                    "Market crashes are composition fallacies in action",
                    "Always check for feedback loops",
                ],
            },
            {
                type: "question",
                id: "l12-02-q1",
                question: "'This is an expensive car, so every part in it must be expensive.' What fallacy is this?",
                options: [
                    { id: "a", text: "Composition" },
                    { id: "b", text: "Hasty generalization" },
                    { id: "c", text: "Division" },
                    { id: "d", text: "This is valid reasoning" }
                ],
                correctAnswer: "c",
                explanation: "This is the fallacy of division—reasoning from a property of the whole (expensive car) to properties of parts (expensive parts). But expensive cars might have many standard parts, with cost coming from design, brand, or specific premium components.",
            },
            {
                type: "content",
                title: "Real-World Applications",
                content: "These fallacies appear frequently in political and economic arguments:\n\n**Economic Composition:**\n'Saving is good for individuals. Therefore, if everyone saves more, the economy will be better.'\nFallacious—mass saving can reduce demand and cause recession (paradox of thrift).\n\n**Statistical Division:**\n'This country's average income rose. Therefore, most people are better off.'\nNot necessarily—if the wealthy got much richer and everyone else stagnated, the average rises but most people aren't better off.\n\n**Social Composition:**\n'Each person acting in self-interest produces the best outcome for all.'\nSometimes true, but collective action problems show this can fail.\n\n**Political Division:**\n'Democrats won this state. Therefore, all areas of the state are Democratic.'\nFallacious—states can have significant regional variation despite overall leanings.\n\n**Detecting These Fallacies:**\nAsk: 'Is this property one that aggregates/distributes simply, or is it more complex?'",
                keyPoints: [
                    "Economic policies often involve composition/division errors",
                    "Statistical averages can hide individual variation",
                    "Ask whether the property aggregates or distributes simply",
                ],
            },
            {
                type: "question",
                id: "l12-02-q2",
                question: "'Each person acting in their self-interest will collectively produce the best outcome for society.' What fallacy might this involve?",
                options: [
                    { id: "a", text: "Composition—individual benefit doesn't automatically aggregate to collective benefit" },
                    { id: "b", text: "Is always true" },
                    { id: "c", text: "Ad hominem" },
                    { id: "d", text: "Division" }
                ],
                correctAnswer: "a",
                explanation: "This is potentially a composition fallacy—what's good for each individual doesn't necessarily aggregate to what's best for all. Collective action problems, externalities, and tragedy of the commons show cases where individual rationality produces collective harm.",
            },
            {
                type: "content",
                title: "Responding to Composition and Division",
                content: "When opponents use these fallacies:\n\n**Identify the Property:**\n'My opponent assumes [property] transfers from parts to whole [or whole to parts].'\n\n**Explain Why It Doesn't Transfer:**\n'But [property] doesn't aggregate simply because [explanation].'\n\n**Provide Counter-Examples:**\n'Each molecule of water is neither wet nor dry, but water is wet. Part properties don't always indicate whole properties.'\n\n**Offer Alternative Analysis:**\n'Rather than assuming the whole has these properties because parts do, let's look at actual evidence about the whole...'\n\n**In Your Own Arguments:**\n• Be explicit about whether you're reasoning from parts to whole or vice versa\n• Justify why the property in question would transfer\n• Use direct evidence about wholes rather than inferring from parts when possible",
                keyPoints: [
                    "Identify which direction the reasoning goes",
                    "Explain why the specific property doesn't transfer",
                    "Use direct evidence rather than part/whole inference",
                ],
            },
            {
                type: "content",
                title: "Conclusion: Parts and Wholes",
                content: "You've learned to recognize and challenge composition and division fallacies—errors in reasoning about how properties relate between parts and wholes.\n\n**Key Takeaways:**\n• Composition wrongly assumes part properties apply to wholes\n• Division wrongly assumes whole properties apply to parts\n• Some properties transfer (mass, material); many don't (function, quality)\n• These fallacies are common in economic and political reasoning\n• Challenge by explaining why the property doesn't transfer\n• Use direct evidence rather than part/whole inference\n\n**Looking Ahead:**\nIn the next lesson, we'll explore Charitable Interpretation—engaging with the best version of opposing arguments.\n\n**Practice Challenge:**\nFind an argument that reasons from parts to whole or vice versa. Does the property in question actually transfer? Why or why not?",
                keyPoints: [
                    "Parts and wholes don't always share properties",
                    "Ask whether the specific property aggregates/divides",
                    "Use direct evidence when possible",
                ],
            },
            {
                type: "practice",
                id: "l12-02-p1",
                title: "Identifying Part-Whole Fallacies",
                description: "Practice distinguishing between valid part-whole reasoning and composition/division fallacies.",
                practice: {
                    type: "fallacy-spotter",
                    topic: "Composition and Division",
                    targetSkill: "Identifying when properties fail to transfer correctly",
                    instructions: "You will be presented with an argument. Identify if it contains a Composition or Division fallacy, or if the reasoning is valid.",
                    exampleResponse: "That's a Division fallacy—just because the average income is high doesn't mean every individual is wealthy. Averages hide inequality.",
                    successCriteria: [
                        "Correctly identifies the type of fallacy",
                        "Explanation focuses on why the property doesn't transfer"
                    ],
                },
            },
        ],
    },
    {
        lessonId: "l12-03",
        pages: [
            {
                type: "content",
                title: "Introduction: Charitable Interpretation",
                content: "Charitable interpretation—also called the principle of charity—means engaging with the strongest, most reasonable version of an opponent's argument rather than the weakest version you could attack.\n\nThis might seem counterproductive for winning debates. But it actually serves you well: defeating strong arguments is more impressive than attacking weak ones, and it protects you from accusations of misrepresentation.\n\nIn this lesson, you'll learn why charitable interpretation matters, how to apply it in practice, and how it differs from straw-manning.",
            },
            {
                type: "content",
                title: "Why Interpret Charitably",
                content: "The case for charitability:\n\n**Intellectual Integrity:**\nEngaging with what opponents actually mean, not convenient misinterpretations, is honest discourse.\n\n**Strategic Advantage:**\nDefeating a strong version of an argument is more impressive than knocking down a weak one. Judges notice when you engage substantively.\n\n**Protection from Backfire:**\nIf you strawman and get called out, you lose credibility. Charitable interpretation protects against this.\n\n**Better Understanding:**\nActually considering the best version of opposing views helps you understand the issue more deeply.\n\n**Reciprocity:**\nYou want opponents to engage with your strongest arguments. Model this behavior.\n\n**Real-World Transfer:**\nUnderstanding opposing views charitably is essential in professional and civic life. Debate practice should build this skill.\n\n**The Underlying Principle:**\nThe goal is finding truth, not just winning. Charitable engagement serves this goal.",
                keyPoints: [
                    "Defeating strong arguments is more impressive",
                    "Strawmanning can backfire and damage credibility",
                    "Understanding opposition strengthens your own thinking",
                ],
            },
            {
                type: "content",
                title: "The Ideological Turing Test",
                content: "A mental model proposed by Bryan Caplan:\n\n**The Test:**\nCan you state your opponent's view so well that a neutral observer can't tell the difference between you and a real believer?\n\n**The Challenge:**\nIf you can't pass this test, you don't understand the argument well enough to refute it effectively. You are refuting a caricature.\n\n**Practice:**\nWrite down your opponent's argument. Ask yourself: 'Would they sign this?' If not, revise until they would.",
                keyPoints: [
                    "Can you explain their view as well as they can?",
                    "If not, you are likely attacking a strawman",
                    "Pass the test before you start the rebuttal",
                ],
            },
            {
                type: "content",
                title: "Rapoport's Rules",
                content: "Daniel Dennett popularized these rules for critical commentary:\n\n1. **Re-express:** State their position so clearly/vividly that they say, 'Thanks, I wish I'd thought of putting it that way.'\n2. **List Agreement:** Mention anything you agree with.\n3. **Mention Learning:** Mention anything you learned from them.\n4. **Rebut:** Only then are you permitted to say a word of rebuttal.\n\n**Why:**\nThis disarms defensiveness. It proves you are a fair partner in truth-seeking, making your eventual attack devastatingly effective.",
                keyPoints: [
                    "Re-state clearly, Agree, Learn, THEN Rebut",
                    "Disarms opponents and wins audience trust",
                    "Makes the final variety (rebuttal) hit harder",
                ],
            },
            {
                type: "content",
                title: "Intellectual Generosity",
                content: "Generosity is persuasive.\n\n**The Effect:**\nWhen you are generous to an opponent's intent and meaning, you look confident. It signals: 'I am so secure in my position that I don't need to twist your words to win.'\n\n**The Contrast:**\nNitpicking over minor verbal slips looks weak/insecure. It signals: 'I need to catch you on a technicality because I can't beat your core idea.'",
                keyPoints: [
                    "Generosity signals confidence",
                    "Nitpicking signals insecurity",
                    "Audience psychology favors the fair player",
                ],
            },
            {
                type: "content",
                title: "How to Interpret Charitably",
                content: "Practical techniques:\n\n**Listen Carefully:**\nBefore formulating responses, make sure you understand what was actually said.\n\n**Assume Intelligence:**\nAssume your opponent is making a sensible point, even if poorly expressed. What's the most reasonable version of their argument?\n\n**Resolve Ambiguity Favorably:**\nIf a statement could mean something weak or something strong, assume the strong version.\n\n**Acknowledge Intent:**\n'What I think my opponent means is...' followed by a fair representation.\n\n**Ask Clarifying Questions:**\nIn cross-examination, seek to understand their position accurately before attacking it.\n\n**Separate Content from Presentation:**\nPoor delivery or organization doesn't make an argument substantively wrong.\n\n**Test Yourself:**\nWould your opponent recognize your characterization of their argument? If not, you may be misrepresenting.",
                keyPoints: [
                    "Listen to understand, not just to respond",
                    "Resolve ambiguity in favor of the stronger interpretation",
                    "Test: Would opponents recognize your characterization?",
                ],
            },
            {
                type: "question",
                id: "l12-03-q1",
                question: "An opponent makes an unclear argument. What's the most charitable approach?",
                options: [
                    { id: "a", text: "Attack the weakest possible interpretation" },
                    { id: "b", text: "Ignore the argument entirely" },
                    { id: "c", text: "Mock them for being unclear" },
                    { id: "d", text: "Interpret it in the strongest, most sensible way before responding" }
                ],
                correctAnswer: "d",
                explanation: "Charitable interpretation means giving opponents the benefit of the doubt and engaging with the strongest version of their argument. This is more intellectually honest, more impressive to judges, and protects you from accusations of misrepresentation.",
            },
            {
                type: "content",
                title: "Straw-Man vs. Steel-Man",
                content: "Understanding the contrast:\n\n**Straw-Man:**\nMisrepresenting an opponent's position to make it easier to attack.\n• Attacks a weaker version than what was argued\n• Often exaggerates or distorts claims\n• Unfair and can backfire\n\n**Charitable/Steel-Man:**\nEngaging with the strongest version of the opposing argument.\n• Takes the best interpretation of unclear points\n• Acknowledges valid aspects before critiquing\n• Defeats the real argument, not a caricature\n\n**Examples:**\nOpponent says: 'We should consider reducing military spending.'\n\nStraw-Man: 'My opponent wants to leave us defenseless!'\n\nSteel-Man: 'My opponent suggests some military spending might be redirected. Even granting that we might achieve equal security at lower cost, the implementation risks and global stability concerns outweigh potential savings...'\n\n**Which Wins?**\nSteel-manning wins the actual argument. Straw-manning might fool inattentive judges but loses to anyone paying attention.",
                keyPoints: [
                    "Straw-man attacks a weakened version of the argument",
                    "Steel-man engages with the strongest version",
                    "Steel-manning is both more honest and more impressive",
                ],
            },
            {
                type: "question",
                id: "l12-03-q2",
                question: "Your opponent says 'We should reconsider our approach to education funding.' A straw-man response would be:",
                options: [
                    { id: "a", text: "'Let me address the strongest version of this proposal...'" },
                    { id: "b", text: "'My opponent wants to destroy public schools and leave children uneducated!'" },
                    { id: "c", text: "'This is an interesting proposal that deserves consideration, but...'" },
                    { id: "d", text: "'Can you clarify what changes you're proposing?'" }
                ],
                correctAnswer: "b",
                explanation: "The straw-man response exaggerates 'reconsider funding' into 'destroy schools and abandon children.' This misrepresents the actual argument to make it easier to attack. The other options engage more charitably with what was actually said.",
            },
            {
                type: "content",
                title: "When and How Much to Be Charitable",
                content: "Charitable interpretation has limits:\n\n**Be Charitable About:**\n• Ambiguous wording or unclear expression\n• Intent behind arguments\n• Technical errors in presentation\n• Minor logical gaps that don't affect the core point\n\n**Don't Be Charitable About:**\n• Clear factual errors—if they claimed something false, address it\n• Logical fallacies—naming and explaining fallacies is fair\n• Actual positions—don't pretend they said something different\n• Evidence problems—fabrication or misrepresentation deserves critique\n\n**The Balance:**\nBe charitable about HOW they expressed themselves.\nBe accurate about WHAT they actually argued.\nBe fair about exposing genuine problems.\n\n**The Test:**\nAre you trying to understand and engage with their real view, even while critiquing it? Or are you looking for the easiest attack regardless of their actual position?",
                keyPoints: [
                    "Charitable about expression, accurate about content",
                    "Fair critique of genuine errors is appropriate",
                    "The goal is understanding and engagement, not cheap wins",
                ],
            },
            {
                type: "content",
                title: "Conclusion: Engagement Over Exploitation",
                content: "Charitable interpretation makes you a better debater and thinker. It's both ethical and strategic.\n\n**Key Takeaways:**\n• Charitable interpretation engages with strong versions of arguments\n• It's more impressive than attacking strawmen\n• Listen to understand; resolve ambiguity favorably\n• Steel-manning defeats real arguments, not caricatures\n• Be charitable about expression, accurate about content\n• Fair critique of genuine problems is still appropriate\n\n**Looking Ahead:**\nIn the next lesson, we'll explore Equivocation and Ambiguity—how shifting word meanings undermines arguments.\n\n**Practice Challenge:**\nIn your next disagreement, consciously state your opponent's position as they would state it before responding. Do you engage differently?",
                keyPoints: [
                    "Charitable interpretation is both ethical and strategic",
                    "Defeating strong arguments is more impressive",
                    "Model the engagement you want from opponents",
                ],
            },
        ],
    },
    {
        lessonId: "l12-04",
        pages: [
            {
                type: "content",
                title: "Introduction: Equivocation and Ambiguity",
                content: "Equivocation occurs when a word or phrase is used with different meanings at different points in an argument, creating the illusion of valid reasoning. The argument seems to flow logically, but the shifting meaning breaks the logical chain.\n\nLanguage is inherently ambiguous—most words have multiple meanings. Skilled thinkers are alert to when meanings shift and when precision is needed.\n\nIn this lesson, you'll learn to identify equivocation, spot ambiguous terms that need clarification, and challenge arguments that rely on semantic confusion.",
            },
            {
                type: "content",
                title: "The Structure of Equivocation",
                content: "Equivocation uses the same word with different meanings:\n\n**The Structure:**\nPremise 1: A (meaning 1)\nPremise 2: A (meaning 2)\nConclusion: Therefore... [something that only follows if both meanings were the same]\n\n**Classic Example:**\n'Nothing is better than eternal happiness.'\n'A ham sandwich is better than nothing.'\n'Therefore, a ham sandwich is better than eternal happiness.'\n\n'Nothing' means different things: 'no thing exists that is better' vs. 'having zero things.'\n\n**Another Example:**\n'Evolution is just a theory.'\n'So we shouldn't treat it as fact.'\n\nBut 'theory' in science means an explanatory framework supported by evidence, not 'unproven guess.'\n\n**The Problem:**\nThe argument appears logical only because the same word is used. But different meanings invalidate the logical connection.",
                keyPoints: [
                    "Equivocation uses the same word with different meanings",
                    "The logical chain breaks when meanings shift",
                    "Common with terms that have technical and everyday meanings",
                ],
            },
            {
                type: "question",
                id: "l12-04-q1",
                question: "'The end of life is its goal. Death is the end of life. Therefore, death is life's goal.' What's the problem?",
                options: [
                    { id: "a", text: "The argument is too long" },
                    { id: "b", text: "Death isn't real" },
                    { id: "c", text: "'End' means 'purpose' in premise 1 and 'termination' in premise 2—equivocation" },
                    { id: "d", text: "Nothing is wrong; this is valid logic" }
                ],
                correctAnswer: "c",
                explanation: "This argument equivocates on 'end.' In premise 1, 'end' means 'purpose' or 'goal.' In premise 2, 'end' means 'termination' or 'conclusion.' The argument only seems logical because the same word is used, but the meanings are completely different.",
            },
            {
                type: "content",
                title: "Common Equivocation Patterns",
                content: "Watch for these common ambiguities:\n\n**Technical vs. Colloquial:**\n'Theory' (scientific vs. guess)\n'Natural' (occurs in nature vs. good)\n'Organic' (carbon-based vs. farming method)\n\n**Political Terms:**\n'Freedom' (absence of constraint vs. ability to act)\n'Democracy' (voting system vs. liberal values)\n'Violence' (physical harm vs. any harm)\n\n**Normative vs. Descriptive:**\n'Is' vs. 'ought'—what exists vs. what should exist\n'Normal' (statistically typical vs. acceptable)\n\n**Quantifier Shifts:**\n'Some' vs. 'all' confusion\n'Most' vs. 'all' slippage\n\n**Abstract Terms:**\n'Justice,' 'rights,' 'fair'—can mean many things\n\n**Detection Strategy:**\nWhen an argument seems surprisingly strong, check whether key terms are being used consistently throughout.",
                keyPoints: [
                    "Technical and colloquial meanings often differ",
                    "Political and abstract terms have multiple meanings",
                    "Check key terms for consistent usage throughout",
                ],
            },
            {
                type: "content",
                title: "Motte and Bailey Fallacy",
                content: "A strategic form of equivocation:\n\n**The Bailey:** (Desirable but indefensible)\nA bold, controversial claim. 'All morality is subjective.'\n\n**The Motte:** (Defensible but boring)\nA weak, obvious claim. 'People have different opinions on morality.'\n\n**The Tactic:**\nThe arguer lives in the Bailey (making bold claims). When attacked, they retreat to the Motte ('I just meant people disagree!'). Once the attack stops, they return to the Bailey.\n\n**The Defense:**\nForce them to choose ONE definition and stick to it. 'Are you arguing the bold claim or the safe one?'",
                keyPoints: [
                    "Conflating a bold claim with a trivial one",
                    "Retreating to the trivial definition when challenged",
                    "Force a choice: defend the bold claim or admit the triviality",
                ],
            },
            {
                type: "content",
                title: "Deepities",
                content: "A term coined by Dennett for statements that are ambiguity traps:\n\n**Example:** 'Love is just a word.'\n\n**Review:**\nOn one reading, it's TRUE but trivial (yes, 'love' is a four-letter word in English).\nOn the other reading, it's profound but FALSE (love is a strong emotion/bond, not just ink on page).\n\n**The Trick:**\nIt sounds profound because it borrows truth from the trivial side and importance from the false side.",
                keyPoints: [
                    "Deepities oscillate between 'True but Trivial' and 'False but Profound'",
                    "They sound wise but say nothing",
                    "Disambiguate the two meanings to destroy the 'depth'",
                ],
            },
            {
                type: "content",
                title: "Operational Definitions",
                content: "How to fix ambiguity:\n\n**The Fix:**\nDefine terms by how they are measured.\n\n**Ambiguous:** 'This program improves education.'\n**Operational:** 'This program increases SAT math scores by 50 points.'\n\n**Effect:**\nNow we can debate facts. We aren't arguing about the meaning of 'improve' anymore. In debate, ask for operational definitions: 'What metric are you using to measure 'Freedom'?'",
                keyPoints: [
                    "Define abstract terms by their measurement",
                    "Moves debate from semantics to data",
                    "Clarifies exactly what is being claimed",
                ],
            },
            {
                type: "content",
                title: "Identifying Ambiguity in Debate",
                content: "In debate contexts, ambiguity often goes unnoticed:\n\n**Resolution Ambiguity:**\nDebate resolutions often contain ambiguous terms. How 'should' the US act? What counts as 'substantially'? Who is 'the government'?\n\n**Definitional Debates:**\nSometimes the entire debate turns on definitions. 'Is water-boarding torture?' depends on what 'torture' means.\n\n**Hidden Equivocation:**\n'Freedom of speech protects all speech.'\n'Advertising is speech.'\n'Therefore, freedom of speech protects all advertising.'\n\nBut does 'speech' in the first premise include commercial speech?\n\n**When to Challenge:**\n• When an argument relies on an ambiguous term\n• When the opponent hasn't defined key concepts\n• When you can show different meanings break the argument\n\n**When to Ignore:**\n• Minor ambiguities that don't affect the core argument\n• Cases where the intended meaning is obvious\n• Semantic disputes that avoid substantive engagement",
                keyPoints: [
                    "Resolution terms are often ambiguous",
                    "Definitional debates turn on what key terms mean",
                    "Challenge when ambiguity affects the argument's validity",
                ],
            },
            {
                type: "question",
                id: "l12-04-q2",
                question: "An opponent argues: 'We believe in freedom, so we should remove all regulations.' What might be the equivocation?",
                options: [
                    { id: "a", text: "'Freedom' in political values might not mean 'absence of all regulations'" },
                    { id: "b", text: "There's no equivocation—freedom clearly means no rules" },
                    { id: "c", text: "The argument is about freedom, not regulations" },
                    { id: "d", text: "'We' is ambiguous" }
                ],
                correctAnswer: "a",
                explanation: "This equivocates on 'freedom.' Political freedom typically means protection from tyranny and ability to exercise rights—which may actually require some regulations. Equating 'freedom' with 'no regulations whatsoever' stretches the term beyond its accepted meaning.",
            },
            {
                type: "content",
                title: "Responding to Equivocation",
                content: "When opponents equivocate:\n\n**Identify the Term:**\n'The key term in this argument is [X], which my opponent uses in two different senses.'\n\n**Specify the Meanings:**\n'In premise 1, [X] means [definition 1]. In premise 2, [X] means [definition 2].'\n\n**Explain the Breakdown:**\n'Once we recognize these different meanings, the logical connection dissolves.'\n\n**Offer Charitable Options:**\n'If they mean [definition 1], then premise 2 is false. If they mean [definition 2], then premise 1 is false. Either way, the argument fails.'\n\n**Request Clarification:**\nIn cross-examination: 'When you say [X], do you mean [definition 1] or [definition 2]?'\n\n**Your Own Arguments:**\n• Define key terms explicitly\n• Use consistent meanings throughout\n• Choose precise language over ambiguous terms\n• Acknowledge when terms have multiple meanings",
                keyPoints: [
                    "Identify the term and specify different meanings",
                    "Show how the logical chain breaks when meanings differ",
                    "Define your own key terms explicitly",
                ],
            },
            {
                type: "content",
                title: "Conclusion: Words Matter",
                content: "Equivocation exploits language's ambiguity to create apparent logical connections where none exist. Spotting these shifts makes you more analytically rigorous.\n\n**Key Takeaways:**\n• Equivocation uses the same word with different meanings\n• Technical vs. colloquial meanings are common sources\n• Check whether key terms are used consistently throughout arguments\n• Identify the term, specify meanings, and show logical breakdown\n• Define your own terms and use language precisely\n• Resolution and definition debates often involve ambiguity\n\n**Looking Ahead:**\nIn the next lesson, we'll explore Citation and Attribution—properly crediting sources and ideas.\n\n**Practice Challenge:**\nFind an argument in public discourse that relies on an ambiguous term. How would you clarify the equivocation?",
                keyPoints: [
                    "Equivocation hides logical gaps behind shared words",
                    "Precision in language prevents and exposes this fallacy",
                    "Define terms explicitly in your own arguments",
                ],
            },
            {
                type: "practice",
                id: "l12-04-p1",
                title: "Equivocation Spotter",
                description: "Practice identifying ambiguous terms that break the flow of logic.",
                practice: {
                    type: "fallacy-spotter",
                    topic: "Equivocation",
                    targetSkill: "Identifying when words are used with different meanings",
                    instructions: "The AI will present an argument that equivocates on a specific word. Identify the word and explain the two different meanings being conflated.",
                    exampleResponse: "The argument equivocates on 'law.' In the first part it means 'scientific law,' but in the conclusion it means 'legislative law.' These are not the same thing.",
                    successCriteria: [
                        "Correctly identifies the equivocated term",
                        "Clearly explains the two distinct meanings"
                    ],
                },
            },
        ],
    },
    {
        lessonId: "l12-05",
        pages: [
            {
                type: "content",
                title: "Introduction: Citation and Attribution",
                content: "Proper citation isn't just academic formality—it's fundamental to credibility, intellectual honesty, and building on others' work. In debate, how you attribute claims affects both the strength of your evidence and your reputation.\n\nGood citation practices serve multiple purposes: they allow verification, they assign credit fairly, they distinguish your ideas from others', and they demonstrate the research depth behind your arguments.\n\nIn this lesson, you'll learn best practices for citing sources in debate, common attribution errors to avoid, and how proper citation strengthens your credibility.",
            },
            {
                type: "content",
                title: "Why Citation Matters in Debate",
                content: "Citation serves essential functions:\n\n**Credibility:**\nWell-cited evidence is more believable. Judges can assess source quality when you name your sources explicitly.\n\n**Verifiability:**\nCitations allow opponents and judges to verify claims. This distinguishes debate from mere assertion.\n\n**Intellectual Honesty:**\nClaiming someone else's ideas or words as your own is dishonest, even if unintentional.\n\n**Evidence Standards:**\nDebate organizations have rules about evidence ethics. Understanding citation helps you comply.\n\n**Distinguishing Claim Types:**\n• Your analysis: No citation needed\n• Someone else's research: Must cite\n• Common knowledge: No citation needed\n\n**The Research Trail:**\nGood citations show judges you've done real research. Poor citations suggest sloppiness or fabrication.",
                keyPoints: [
                    "Citations enable verification and build credibility",
                    "They distinguish your ideas from others'",
                    "Evidence quality partly depends on source quality",
                ],
            },
            {
                type: "content",
                title: "What to Include in Citations",
                content: "Complete citations include several elements:\n\n**Author:**\nWho conducted the research or made the claim? What are their qualifications?\n\n**Date:**\nWhen was this published? Older sources may be outdated.\n\n**Publication:**\nWhere did this appear? Peer-reviewed journal? Major newspaper? Blog?\n\n**Full Citation Example:**\n'According to Dr. Jane Smith, epidemiologist at Johns Hopkins, writing in the New England Journal of Medicine last March...'\n\n**Minimum in Debate:**\nAt least: Author name + date + publication type\nIdeal: Add credentials and specific publication\n\n**Verbal Citation Tips:**\n• Lead with credentials when impressive: 'Nobel laureate Paul Krugman'\n• Lead with publication when more credible: 'The New York Times reports'\n• Include dates for recency-dependent claims\n• Be specific, not vague: 'A 2023 study' beats 'Studies show'\n\n**For Later Verification:**\nKeep complete citation information in your evidence files, even if you don't read all of it verbally.",
                keyPoints: [
                    "Include author, date, and publication at minimum",
                    "Lead with most credibility-building element",
                    "Keep complete information for verification",
                ],
            },
            {
                type: "content",
                title: "Primary vs. Secondary Sources",
                content: "Know the difference:\n\n**Primary Source:** The original study, the raw data, the eyewitness account.\n**Secondary Source:** A news article ABOUT the study. An opinion piece summing up data.\n\n**The Strategy:**\nAlways try to find the primary source. Secondary sources often misinterpret, exaggerate, or cherry-pick the primary data ('Source Laundering'). Reading the original study often reveals that the headline is wrong.",
                keyPoints: [
                    "Primary sources are the raw truth",
                    "Secondary sources introduce interpretation error",
                    "Go to the source to find the nuanced reality",
                ],
            },
            {
                type: "content",
                title: "Peer Review Value",
                content: "Why cite journals?\n\n**The Process:**\nExperts in the field check the methodology BEFORE publication. It's a filter for basic competence.\n\n**vs. Think Tanks/Blogs:**\nThink Tanks publish whatever they want. Blogs have no filter. Peer review isn't perfect, but it's the gold standard for a reason. Citing a peer-reviewed meta-analysis beats citing a blog post every time.",
                keyPoints: [
                    "Peer review is an expert quality filter",
                    "Think tanks and blogs lack this verification step",
                    "Prioritize academic/peer-reviewed sources for authority",
                ],
            },
            {
                type: "content",
                title: "Zombie Statistics",
                content: "Stats that never die, even when debunked.\n\n**Example:**\n'Women make 77 cents on the dollar.'\n(Often cited as 'equal work' but the stat is 'aggregate earnings'—ignoring hours/job type. The 'controlled' gap is much smaller).\n\n**The Lesson:**\nCheck the *origin* date. Some stats from 1980 are still quoted today as if current. Always ask: 'Is this a Zombie Stat?'",
                keyPoints: [
                    "Check the birthdate of famous statistics",
                    "Debunked stats persist because they are catchy",
                    "Trace citations back to see if the root data is real",
                ],
            },
            {
                type: "question",
                id: "l12-05-q1",
                question: "Why is 'Studies show...' a weak citation?",
                options: [
                    { id: "a", text: "It uses the word 'studies'" },
                    { id: "b", text: "Studies aren't reliable" },
                    { id: "c", text: "It's too short" },
                    { id: "d", text: "It can't be verified—judges don't know what studies, by whom, when, or where" }
                ],
                correctAnswer: "d",
                explanation: "'Studies show' is unverifiable—it doesn't specify which studies, conducted by whom, published where, or when. Without this information, judges can't assess source quality, and opponents can't check accuracy. It might as well be invented.",
            },
            {
                type: "content",
                title: "Common Attribution Errors",
                content: "Avoid these citation mistakes:\n\n**Vague Attribution:**\n'Scientists say...' or 'Experts claim...'\nWithout naming specific scientists or experts, this is meaningless.\n\n**Source Laundering:**\nCiting a summary of a study as if it were the original study. 'A study from Harvard' when you mean 'a news article about a Harvard study.'\n\n**Credential Inflation:**\nExaggerating qualifications. A blogger becomes an 'analyst'; anyone with a Ph.D. becomes a 'leading expert.'\n\n**Outdated Sources:**\nCiting old research without acknowledging that understanding may have evolved.\n\n**Misattribution:**\nAssigning a claim to the wrong source of citing something that doesn't say what you claim.\n\n**Orphan Claims:**\nMaking factual assertions without any citation, presenting them as established fact.\n\n**The Standard:**\nCould someone verify this claim based on your citation? If not, improve it.",
                keyPoints: [
                    "Vague and anonymous attributions are meaningless",
                    "Source laundering misrepresents where information came from",
                    "All factual claims should be traceable to sources",
                ],
            },
            {
                type: "content",
                title: "Citing vs. Quoting vs. Paraphrasing",
                content: "Different forms of using sources:\n\n**Direct Quotation:**\nUsing exact words from a source. Must be word-for-word accurate.\n'Dr. Smith wrote, and I quote: [exact words]'\n\n**Paraphrasing:**\nPutting someone else's ideas in your own words. Must accurately represent meaning.\n'Dr. Smith argues that [your summary of their position]'\n\n**Citation Without Quote:**\nReferencing a source's general finding or position.\n'Smith's 2023 study found a correlation between X and Y.'\n\n**When to Quote Directly:**\n• Precise wording matters (legal text, specific claims)\n• The original is particularly well-expressed\n• You want unimpeachable accuracy\n\n**When to Paraphrase:**\n• You're summarizing general findings\n• The original is technical and needs translation\n• You're combining multiple sources\n\n**Either Way:**\nGive proper attribution. Paraphrasing without credit is still presenting others' ideas as your own.",
                keyPoints: [
                    "Quotes use exact words; paraphrasing uses your words for their ideas",
                    "Both require attribution to the source",
                    "Quote when precision matters; paraphrase when summarizing",
                ],
            },
            {
                type: "question",
                id: "l12-05-q2",
                question: "You summarize a researcher's findings in your own words. Do you need to cite them?",
                options: [
                    { id: "a", text: "No—you used your own words, so it's yours" },
                    { id: "b", text: "Yes—the ideas came from their research, even if the words are yours" },
                    { id: "c", text: "Only if they're famous" },
                    { id: "d", text: "Only in academic debate" }
                ],
                correctAnswer: "b",
                explanation: "Paraphrasing—putting someone else's ideas in your own words—still requires attribution. The ideas and findings came from their research. Presenting them without credit suggests they're your own discoveries, which is intellectually dishonest.",
            },
            {
                type: "content",
                title: "Conclusion: Credit Where Due",
                content: "Proper citation practices strengthen your credibility and demonstrate intellectual integrity. They're not just rules—they're how we build on shared knowledge.\n\n**Key Takeaways:**\n• Citations enable verification and build credibility\n• Include at minimum: author, date, publication\n• Avoid vague attribution, source laundering, and credential inflation\n• Both quotes and paraphrases require attribution\n• Keep complete citation information for verification\n• The test: Could someone verify this based on your citation?\n\n**Looking Ahead:**\nIn the next lesson, we'll explore the No True Scotsman fallacy—how definitions shift to protect claims from counterexamples.\n\n**Practice Challenge:**\nReview your evidence files. Are your citations complete enough for verification? Could you improve any vague attributions?",
                keyPoints: [
                    "Complete citations enable verification",
                    "Vague attributions undermine credibility",
                    "All ideas from others need attribution, not just quotes",
                ],
            },
        ],
    },
    {
        lessonId: "l12-06",
        pages: [
            {
                type: "content",
                title: "Introduction: No True Scotsman",
                content: "The No True Scotsman fallacy occurs when someone modifies a claim to exclude counterexamples through an ad hoc definitional change, rather than admitting the claim is false.\n\nThe name comes from a joke: 'No Scotsman puts sugar in his porridge.' When shown a Scotsman who does, the response is: 'Well, no TRUE Scotsman would do that.' The definition shifts to protect the claim.\n\nIn this lesson, you'll learn to identify this fallacy, understand why ad hoc definitional shifts are problematic, and challenge claims protected by moving definitions.",
            },
            {
                type: "content",
                title: "The Structure of the Fallacy",
                content: "No True Scotsman follows a predictable pattern:\n\n**Step 1:** Make a universal claim about a group.\n'All X do Y' or 'No X does Z'\n\n**Step 2:** Receive a counterexample.\n'Here's an X that doesn't do Y' or 'Here's an X that does Z'\n\n**Step 3:** Dismiss the counterexample by redefining the group.\n'Well, that's not a REAL/TRUE X'\n\n**The Classic Example:**\n'No true Christian would support violence.'\n'But this Christian supported violence.'\n'Then they're not a TRUE Christian.'\n\n**Why It's Fallacious:**\nThe definition changed to exclude the counterexample. But the original claim was about Christians (defined by belief/membership), not about some subset that excludes violent supporters.\n\n**The Goal:**\nProtect a claim from any possible refutation by continuously narrowing the definition.",
                keyPoints: [
                    "The definition shifts to exclude counterexamples",
                    "The original claim is modified rather than admitted false",
                    "This protects claims from any possible refutation",
                ],
            },
            {
                type: "content",
                title: "Recognizing the Pattern",
                content: "Watch for these indicators:\n\n**Moving Goalposts:**\nNo matter what counterexample you provide, the definition shifts to exclude it. 'That doesn't count because...'\n\n**Unfalsifiable Claims:**\nIf no possible evidence could disprove the claim (because any counterexample would be redefined away), the claim is meaningless.\n\n**'True' or 'Real' Qualifiers:**\n'True believers,' 'real Americans,' 'genuine supporters'—these often signal potential No True Scotsman.\n\n**Post-Hoc Exclusion:**\nThe counterexample was clearly a member of the group until it became inconvenient to include them.\n\n**Examples:**\n'No real socialist supports market reforms.'\n'Real patriots don't question the government.'\n'True scientists don't get results wrong.'\n\n**The Test:**\nWas the definition specified before or after the counterexample? If after, it may be No True Scotsman.",
                keyPoints: [
                    "Watch for 'true' or 'real' qualifiers added after counterexamples",
                    "Post-hoc definitional changes are the key indicator",
                    "If no evidence could ever disprove the claim, it's meaningless",
                ],
            },
            {
                type: "question",
                id: "l12-06-q1",
                question: "'No real artist would sell their work.' When shown artists who sell their work, responding 'Those aren't real artists' is an example of:",
                options: [
                    { id: "a", text: "A valid distinction between artists" },
                    { id: "b", text: "Appeal to authority" },
                    { id: "c", text: "The No True Scotsman fallacy—the definition shifted to exclude the counterexample" },
                    { id: "d", text: "Hasty generalization" }
                ],
                correctAnswer: "c",
                explanation: "This is No True Scotsman. The original claim was about artists generally. When confronted with counterexamples (artists who sell work), the definition was modified to exclude them. But selling work doesn't disqualify someone from being an artist—the definition shifted to protect the claim.",
            },
            {
                type: "content",
                title: "Real-World Examples",
                content: "This fallacy appears in many contexts:\n\n**Political:**\n'Conservatives believe in small government.' / 'But this conservative expanded government.' / 'Then they weren't a real conservative.'\n\n**Religious:**\n'True believers are peaceful.' / 'But this believer was violent.' / 'Then they didn't truly believe.'\n\n**Cultural:**\n'Real fans know all the original material.' / 'I'm a fan but haven't read the books.' / 'You're not a real fan.'\n\n**Professional:**\n'Good managers never lose employees.' / 'This good manager lost an employee.' / 'Then they weren't really good.'\n\n**Scientific:**\n'Astrology works for true practitioners.' / 'It didn't work for this practitioner.' / 'They weren't doing it right.'\n\n**The Pattern:**\nThe claim is protected from any counterexample by narrowing the group until only confirming examples remain—but this makes the claim trivial or circular.",
                keyPoints: [
                    "Common in political, religious, and cultural arguments",
                    "Protects claims by narrowing groups until only confirming cases remain",
                    "Makes claims either trivial or circular",
                ],
            },
            {
                type: "content",
                title: "Falsifiability",
                content: "Karl Popper's standard for science:\n\n**The Principle:**\nFor a theory to be scientific/meaningful, there must be some evidence that COULD prove it wrong.\n\n**Connection:**\nNo True Scotsman makes claims unfalsifiable. If every counter-example is 'fake,' then the theory can never be disproven. That makes the theory useless.\n\n**Debate Use:**\n'Judge, their definition makes their claim unfalsifiable. If nothing can disprove it, it asserts nothing about reality.'",
                keyPoints: [
                    "Scientific claims must be falsifiable",
                    "No True Scotsman removes falsifiability",
                    "Unfalsifiable claims are analytically empty",
                ],
            },
            {
                type: "content",
                title: "Moving Goalposts vs. Refining Theory",
                content: "Not all changes are fallacies.\n\n**Legitimate Refinement:**\n'All birds fly.' -> 'Ah, penguins don't.' -> 'Okay, all birds EXCEPT flightless species fly.'\n(This narrows scope openly based on evidence).\n\n**Fallacious Move:**\n'Penguins aren't TRUE birds.'\n(This redefines the category to save the original claim).\n\n**The Difference:**\nRefinement admits the original error and specifies the new scope. No True Scotsman denies the error and pretends the word always meant that.",
                keyPoints: [
                    "Refining theories based on evidence is good science",
                    "Redefining words to hide error is fallacious",
                    "Look for admission of error vs. denial",
                ],
            },
            {
                type: "content",
                title: "Conceptual Stretching",
                content: "The opposite problem: Stretching definitions to include everything.\n\n**Example:**\n'Everything is violence.' (Speech, silence, inaction).\n\n**Result:**\nIf everything is violence, the word 'violence' loses all utility. We can no longer distinguish between a punch and an insult.\n\n**Balance:**\nDefinitions shouldn't be so narrow they exclude real examples (No True Scotsman) nor so broad they include everything (Stretching).",
                keyPoints: [
                    "Definitions lose value if they include everything",
                    "Conceptual stretching dilutes meaning",
                    "Aim for precise boundaries",
                ],
            },
            {
                type: "content",
                title: "Challenging No True Scotsman",
                content: "When opponents use this fallacy:\n\n**Identify the Shift:**\n'My opponent is changing the definition of [X] to exclude my counterexample. Originally, [X] meant [original definition], but now apparently it means [new narrow definition].'\n\n**Show It's Ad Hoc:**\n'This new definition was created specifically to dismiss my example. It wasn't specified in advance.'\n\n**Demand Pre-Specification:**\n'What exactly defines a 'true' member of this group? Can you give me this definition BEFORE I provide counterexamples?'\n\n**Show Circularity:**\n'Under this definition, 'true Xs do Y' becomes circular: anyone who does Y is true, and anyone who doesn't isn't. It says nothing.'\n\n**Offer the Dilemma:**\n'Either [X] includes these counterexamples (and your universal claim is false), or you're using 'true [X]' in a way that makes your claim unfalsifiable and meaningless.'\n\n**In Your Own Arguments:**\nDefine groups clearly before making claims. Accept valid counterexamples rather than redefining.",
                keyPoints: [
                    "Identify that the definition shifted after the counterexample",
                    "Show the new definition is ad hoc, not principled",
                    "Demand pre-specified definitions before further examples",
                ],
            },
            {
                type: "question",
                id: "l12-06-q2",
                question: "If every counterexample can be dismissed by saying 'that's not a REAL example,' what does this mean for the claim?",
                options: [
                    { id: "a", text: "The claim is unfalsifiable and therefore meaningless" },
                    { id: "b", text: "The claim is very strong" },
                    { id: "c", text: "The claim is proven true" },
                    { id: "d", text: "More counterexamples are needed" }
                ],
                correctAnswer: "a",
                explanation: "A claim that can't possibly be disproven—because any counterexample is simply redefined out of the category—is unfalsifiable and therefore meaningless. It makes no substantive prediction that could be tested. Such claims say nothing about the actual world.",
            },
            {
                type: "content",
                title: "Conclusion: Definitions Before Debates",
                content: "The No True Scotsman fallacy protects claims by redefining terms to exclude counterexamples. Recognizing this pattern helps you demand genuine definitions.\n\n**Key Takeaways:**\n• No True Scotsman shifts definitions to exclude counterexamples\n• Watch for 'true' or 'real' qualifiers added after challenges\n• If no evidence could disprove a claim, it's meaningless\n• Demand pre-specified definitions before providing examples\n• In your own arguments, accept valid counterexamples\n• Good definitions don't change to protect claims\n\n**Looking Ahead:**\nIn the next lesson, we'll review Unit 12 concepts—language and logic.\n\n**Practice Challenge:**\nNotice when someone (including yourself) uses 'true' or 'real' to exclude examples. Is this a principled distinction or a No True Scotsman?",
                keyPoints: [
                    "Definitions shouldn't change to protect claims",
                    "Pre-specified definitions prevent this fallacy",
                    "Unfalsifiable claims are meaningless claims",
                ],
            },
            {
                type: "practice",
                id: "l12-06-p1",
                title: "Definitional Defense",
                description: "Practice separating valid definitional distinctions from ad hoc fallacies.",
                practice: {
                    type: "refutation",
                    topic: "Definitional Fallacies",
                    targetSkill: "Challenging ad hoc redefinitions",
                    instructions: "The AI will present a claim and then dismiss a counterexample by redefining the group (e.g., 'No real scientist believes...'). Your goal is to expose why this redefinition is Fallacious.",
                    exampleResponse: "That's a No True Scotsman fallacy. You're redefining 'scientist' simply to exclude my example, rather than admitting your original claim was false.",
                    successCriteria: [
                        "Identifies the definition shift",
                        "Explains why the redefinition is problematic (ad hoc/circular)",
                        "Demands a non-circular definition"
                    ],
                },
            },
        ],
    },
    {
        lessonId: "l12-07",
        pages: [
            {
                type: "content",
                title: "Introduction: Unit 12 Review",
                content: "Congratulations on completing Unit 12! This unit explored the intersection of language and logic—how words, meanings, and reasoning interact.\n\nIn this review lesson, we'll consolidate everything you've learned: knowing when you're wrong, composition and division fallacies, charitable interpretation, equivocation, citation practices, and No True Scotsman. These skills enhance both your critical analysis and your own argumentation.",
            },
            {
                type: "content",
                title: "Review: Self-Correction and Part-Whole Reasoning",
                content: "**Knowing When You're Wrong:**\n• Watch for emotional defensiveness and circular justification\n• When thoughtful people disagree, consider their views seriously\n• Update beliefs based on evidence—truth matters more than consistency\n• Intellectual humility is strength, not weakness\n\n**Composition and Division:**\n• Composition: falsely assumes part properties apply to wholes\n• Division: falsely assumes whole properties apply to parts\n• Some properties transfer (material); others don't (function, quality)\n• Ask whether the specific property aggregates or divides simply\n• Use direct evidence rather than part/whole inference",
                keyPoints: [
                    "Recognizing error is intellectual strength",
                    "Parts and wholes don't always share properties",
                    "Both require testing assumptions explicitly",
                ],
            },
            {
                type: "content",
                title: "Review: Interpretation and Language",
                content: "**Charitable Interpretation:**\n• Engage with the strongest version of opposing arguments\n• Defeating strong arguments is more impressive than attacking straw men\n• Test: Would opponents recognize your characterization?\n• Be charitable about expression, accurate about content\n\n**Equivocation and Ambiguity:**\n• Equivocation uses the same word with different meanings\n• Check key terms for consistent usage throughout arguments\n• Technical vs. colloquial meanings are common sources\n• Define your own terms explicitly",
                keyPoints: [
                    "Charitable interpretation is both ethical and strategic",
                    "Equivocation hides logical gaps behind shared words",
                    "Clear, consistent definitions prevent both problems",
                ],
            },
            {
                type: "content",
                title: "Review: Citation and Definitions",
                content: "**Citation and Attribution:**\n• Include author, date, and publication at minimum\n• Avoid vague attribution and source laundering\n• Both quotes and paraphrases require attribution\n• The test: Could someone verify this?\n\n**No True Scotsman:**\n• Shifts definitions to exclude counterexamples\n• Watch for 'true' or 'real' qualifiers added after challenges\n• Demand pre-specified definitions\n• If no evidence could disprove a claim, it's meaningless",
                keyPoints: [
                    "Complete citations enable verification",
                    "Definitions shouldn't change to protect claims",
                    "Both involve clarity about what terms and claims mean",
                ],
            },
            {
                type: "question",
                id: "l12-07-q1",
                question: "'Every citizen benefits when GDP grows.' But if growth goes entirely to the wealthy while most citizens' real wages stagnate, what fallacy is committed?",
                options: [
                    { id: "a", text: "No True Scotsman" },
                    { id: "b", text: "Equivocation" },
                    { id: "c", text: "Appeal to authority" },
                    { id: "d", text: "Division—whole (economy) properties don't automatically apply to parts (citizens)" }
                ],
                correctAnswer: "d",
                explanation: "This is the fallacy of division. GDP growth is a property of the whole economy, but it doesn't automatically distribute to each citizen. 'The economy' growing doesn't mean each person is better off—aggregate properties don't necessarily apply to individual parts.",
            },
            {
                type: "question",
                id: "l12-07-q2",
                question: "An opponent's argument could mean something weak or strong. The charitable approach is to:",
                options: [
                    { id: "a", text: "Ignore the argument" },
                    { id: "b", text: "Engage with the strongest, most reasonable interpretation" },
                    { id: "c", text: "Attack the weakest possible version" },
                    { id: "d", text: "Ask the judge to dismiss it" }
                ],
                correctAnswer: "b",
                explanation: "Charitable interpretation means engaging with the strongest version of the argument. This is more intellectually honest, more impressive to judges, and protects you from accusations of strawmanning. Defeating strong arguments demonstrates genuine refutation.",
            },
            {
                type: "content",
                title: "Applying Unit 12 Skills",
                content: "These language and logic skills work together:\n\n**In Understanding Arguments:**\nInterpret charitably, check for equivocation, verify citations. Understand what an argument actually claims before evaluating it.\n\n**In Constructing Arguments:**\nDefine terms precisely, cite completely, use consistent meanings. Make your own arguments clear and well-supported.\n\n**In Self-Evaluation:**\nRecognize when you might be wrong. Don't shift definitions to protect your claims. Accept valid counterexamples.\n\n**In Critical Analysis:**\nWatch for part-whole fallacies, No True Scotsman, and equivocation. These tools expose hidden problems in reasoning.",
                keyPoints: [
                    "Understanding and constructing arguments require the same precision",
                    "Self-awareness prevents making the fallacies you detect in others",
                    "Language clarity is foundational to logical clarity",
                ],
            },
            {
                type: "content",
                title: "Conclusion: Clear Words, Clear Thinking",
                content: "You've completed Unit 12, exploring how language and logic interact. Clear thinking requires clear language.\n\n**Key Takeaways:**\n• Intellectual humility lets you update beliefs when wrong\n• Part-whole reasoning fails when properties don't transfer\n• Charitable interpretation engages with strongest versions\n• Equivocation hides logical gaps behind shared words\n• Complete citations enable verification and build credibility\n• No True Scotsman protects claims through ad hoc definitions\n\n**Looking Ahead:**\nUnit 13 introduces Refutation Types—different strategies for attacking opposing arguments.\n\n**Practice Challenge:**\nIn your next analysis, apply at least one skill from this unit. Notice how attention to language affects your understanding.",
                keyPoints: [
                    "Language precision enables logical precision",
                    "These skills apply across all areas of thinking",
                    "Practice makes these analyses automatic",
                ],
            },
            {
                type: "practice",
                id: "l12-07-p1",
                title: "Section 2: Language & Logic Review",
                description: "Review and apply the language, definition, and logic skills from Unit 12.",
                practice: {
                    type: "fallacy-spotter",
                    topic: "Language and Logic Fallacies",
                    targetSkill: "Identifying Equivocation, Composition/Division, and No True Scotsman",
                    instructions: "The AI will present arguments containing linguistic or Part-Whole fallacies. Identify the specific error and explain the flaw.",
                    exampleResponse: "That's equivocation on 'natural'. First it means 'from nature', then it means 'good'. Poison ivy is natural but not good.",
                    successCriteria: [
                        "Correctly identifies the Fallacy",
                        "Explains the specific logical breakdown"
                    ],
                },
            },
        ],
    },
];
