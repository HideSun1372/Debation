import { MultiPageLesson } from "./types";

export const UNIT_28_LESSONS: MultiPageLesson[] = [
    {
        lessonId: "l28-01",
        pages: [
            {
                type: "content",
                title: "Introduction: The Hybrid Zone",
                content: "We have discussed 'Lay' judges (who know nothing) and 'Flow' judges (who know everything). But most judges exist in the grey area: The **Flay Judge**.\n\n'Flay' = Flow + Lay.\n\nThey *try* to flow. They *know* some terms. But at their core, they possess the soul of a lay judge. They want to vote on logic, but they are swayed by rhetoric.\n\nThis is the most dangerous judge in debate because you never know which version you will get.\n\nWill they vote on the dropped subpoint C? Or will they vote because your tie was crooked? You must treat them with extreme caution.",
                keyPoints: ["Flay = Flow + Lay", "The Hybrid Danger", "Unpredictable"]
            },
            {
                type: "content",
                title: "Identifying the Flay Judge",
                content: "How do you spot a Flay judge? They often reveal themselves in the pre-round paradigm check.\n\n**Common Quotes:**\n*   \"I debated in high school, but that was 20 years ago.\"\n*   \"I flow, but don't go too fast.\"\n*   \"I dislike speed, but I like good arguments.\"\n*   \"Keep it logical.\"\n\nThey have the *vocabulary* of a debater (Contentions, Rebuttals) but the *processing speed* of a normal human. If you treat them like a circuit judge, you will leave them in the dust. If you treat them like a parent, you will insult their intelligence.",
                keyPoints: ["The '20 years ago' sign", "Vocabulary vs Speed", "The Middle Path"]
            },
            {
                type: "content",
                title: "The Speed Limit",
                content: "Flay judges have a hard speed limit. It is usually 'Conversational Plus'.\n\nYou can talk faster than a normal conversation, but every word must be distinct.\n\n**The Pen Test:** Watch their pen. If they stop writing, YOU stop talking (or slow down). If their pen is moving, you are winning. If they put the pen down and cross their arms, you have lost them. They have switched to 'Lay Mode' and are now judging your outfit.\n\n**Strategy:** Use 'Variable Speed'. Read evidence fast, but slow down to 50% speed for your tags and analysis. This gives them time to write firmly.",
                keyPoints: ["Conversational Plus", "The Pen Test", "Variable Speed", "Write firmly"]
            },
            {
                type: "content",
                title: "Argument Structure for Flays",
                content: "Flay judges love **Structure**. They want to feel smart. They want to follow the flow.\n\n**Signposting is Critical:**\n\"On the first contention...\"\n\"Subpoint A...\"\n\"The Impact is...\"\n\nUse heavy, explicit signposting. Number your responses. \"I have three responses to their economic argument. One... Two... Three...\"\n\nThis helps them keep their flow clean. A Flay judge with a clean flow is a happy judge. A Flay judge with a messy flow panics and votes on 'vibes'.",
                keyPoints: ["Structure is safety", "Heavy Signposting", "Clean Flow = Happy Judge"]
            },
            {
                type: "question",
                id: "l28-01-q1",
                question: "A Flay judge nods enthusiastically during your speech but their flow pad is empty. What does this mean?",
                options: [
                    { id: "a", text: "They are memorizing your speech." },
                    { id: "b", text: "They have switched to Lay Mode. They are enjoying the 'performance' but missing the 'arguments'." },
                    { id: "c", text: "They are a Tech judge in disguise." },
                    { id: "d", text: "They are bored." }
                ],
                correctAnswer: "b",
                explanation: "This is the 'Bobblehead' trap. A nodding Flay judge is often just being polite or enjoying your charisma. If they aren't writing, they aren't recording your technical wins. You need to slow down and force them to write: 'Judge, please write this down. This is the winning point.'"
            },
            {
                type: "content",
                title: "Deep Dive: The Bobblehead Trap",
                content: "The most dangerous moment is when the judge is smiling and nodding, but not writing.\n\nThey are happy, but you are losing.\n\n**Fix:** Break the spell. State a number loudly. \"POINT NUMBER TWO.\" Pause. Wait for them to look at their paper. Then dictate.\n\nYou must transform them from an 'Audience Member' back into a 'Scribe'.",
                keyPoints: ["Bobblehead", "Smiling but losing", "Break the spell", "Dictate"]
            },
            {
                type: "content",
                title: "The 'Truth' Bias",
                content: "Unlike Tech judges, Flay judges care about Truth.\n\nIf you run a hyper-technical argument that is obviously false (e.g., 'Nuclear war is good because it solves overpopulation'), a Tech judge might vote for it if the other side drops it.\n\nA Flay judge will NOT. They will intervene.\n\n\"I just couldn't vote for nuclear war, even if your opponent dropped it.\"\n\n**Rule:** Do not run 'Squirrelly' arguments. Stick to 'Truth-adjacent' arguments. Your arguments must pass the 'Smell Test'.",
                keyPoints: ["Truth Bias", "No Squirrels", "The Smell Test", "Intervention"]
            },
            {
                type: "practice",
                id: "l28-01-p1",
                title: "The Flay Adjustment",
                description: "Adjust a technical argument for a Flay judge.",
                practice: {
                    type: "argument-builder",
                    targetSkill: "Adaptation",
                    topic: "Economic Collapse",
                    instructions: "Convert this Tech tag: 'Econ Decline causes Global Nuclear War via Powers Transition Theory' into a Flay-friendly explanation.",
                    successCriteria: ["Remove jargon", "Explain the 'Why'", "Slow down the logic chain", "Use 'Instability' instead of 'Powers Transition'"]
                }
            },
            {
                type: "content",
                title: "Summary: The Bridge",
                content: "The Flay judge is the bridge between the real world and the debate world. To win them, you must be a 'Technical Rhetorician'.\n\nBe organized enough for their flow, but persuasive enough for their heart. This is the art of the 'Mullet': Business Flow, Party Rhetoric.",
                keyPoints: ["Technical Rhetorician", "Bridge", "Organization + Heart", "Mullet"]
            }
        ]
    },
    {
        lessonId: "l28-02",
        pages: [
            {
                type: "content",
                title: "Introduction: The Mental Game",
                content: "Debate is 10% research, 10% speaking, and 80% psychology.\n\nIn high-pressure rounds, the debater who cracks first loses. The judge can smell fear.\n\n**Maintaining Composure** is not just about being polite; it is a tactical weapon. A calm debater appears in control. A frantic debater appears to be losing.\n\nThis lesson is about 'Stoicism in the Round'.",
                keyPoints: ["Mental Game", "Smell of Fear", "Stoicism", "Tactical Calm"]
            },
            {
                type: "content",
                title: "The Poker Face",
                content: "When your opponent reads a piece of evidence that destroys your case, what do you do?\n\n**Bad Reaction:** Gasp, scribble furiously, whisper frantically to your partner.\n**Stoic Reaction:** Take a sip of water. Note it calmly on your flow. Look bored.\n\nIf you react to their argument, you validate it. You tell the judge: \"This is a big deal.\"\nIf you ignore it (physically), you tell the judge: \"This is nothing. I expected this.\"",
                keyPoints: ["Poker Face", "Don't validate bullets", "Look bored", "Status"]
            },
            {
                type: "content",
                title: "Handling Aggression",
                content: "Some opponents use aggression as a tactic. They interrupt in Cross-Ex. They shout. They sneer.\n\n**The Mirror Trap:** The instinct is to mirror them. They yell, you yell. They are rude, you are rude.\n\n**The Contrast Strategy:** The ruder they get, the colder you get.\n\nOpponent: \"YOU DON'T KNOW WHAT YOU'RE TALKING ABOUT!\"\nYou (Ice Cold): \"I believe the evidence speaks for itself. Next question.\"\n\nThe contrast makes them look like a maniac and you look like the adult. Judges vote for adults.",
                keyPoints: ["Mirror Trap", "Contrast Strategy", "Ice Cold", "Be the Adult"]
            },
            {
                type: "content",
                title: "Box Breathing",
                content: "Panic is physiological. Your heart rates spikes. You can't think.\n\nUse **Box Breathing** between speeches:\n1.  Inhale for 4 seconds.\n2.  Hold for 4 seconds.\n3.  Exhale for 4 seconds.\n4.  Hold for 4 seconds.\n\nDo this twice. It hacks your nervous system and forces calm. Intellectual performance requires oxygen.",
                keyPoints: ["Box Breathing", "Physiology", "Force calm", "Oxygen"]
            },
            {
                type: "content",
                title: "The 'Lost Round' Mindset",
                content: "Sometimes you realize mid-round: \"I am losing. I dropped the impact. It's over.\"\n\nPanic sets in. You start throwing 'Hail Mary' arguments.\n\n**Stop.**\n\nA round is never lost until the ballot is signed.\n\nJudges miss things. Opponents mess up the extension. Stick to the plan. Sell your winning path as if it is the ONLY path. Fake confidence until the buzzer.",
                keyPoints: ["No Hail Marys", "Fake Confidence", "Judges miss things"]
            },
            {
                type: "question",
                id: "l28-02-q1",
                question: "Your computer crashes and you lose all your files 1 minute before your speech. What do you do?",
                options: [
                    { id: "a", text: "Ask for tech time (if allowed) calmly. If not, borrow paper and speak from memory/flow." },
                    { id: "b", text: "Cry." },
                    { id: "c", text: "Forfeit." },
                    { id: "d", text: "Yell at the computer." }
                ],
                correctAnswer: "a",
                explanation: "Tech failures happen. This is the ultimate test of composure. Judges are human; they will sympathize IF you handle it with grace. If you melt down, they get uncomfortable. Take a breath. Debate is oral. You have your brain. Use it."
            },
            {
                type: "content",
                title: "Post-Round Composure",
                content: "The round ends. You think the judge made a terrible decision against you.\n\n**The Parking Lot Rule:** Do not complain until you are in the parking lot (or the bus).\n\nIf you roll your eyes at the decision, or argue with the judge, you effectively 'Poison the Pool'. That judge will hate you forever. They will tell other judges.\n\nSmile. Shake hands. Say \"Thank you for your feedback.\" Scream later.",
                keyPoints: ["Parking Lot Rule", "Poisoning the Pool", "Smile through pain"]
            },
            {
                type: "practice",
                id: "l28-02-p1",
                title: "The Heckler",
                description: "Practice staying calm under fire.",
                practice: {
                    type: "argument-builder",
                    targetSkill: "Composure",
                    topic: "Interruption",
                    instructions: "Imagine an opponent keeps interrupting you in Cross-Ex. Respond.",
                    successCriteria: ["'Please let me finish.'", "'I will answer if you stop interrupting.'", "No shouting", "Steady volume"]
                }
            },
            {
                type: "content",
                title: "Summary: Ice in Veins",
                content: "The best debaters have ice in their veins. They are unshakeable. Be the rock that breaks the waves. Emotional control wins championships.",
                keyPoints: ["Ice in veins", "Unshakeable", "Emotional control"]
            }
        ]
    },
    {
        lessonId: "l28-03",
        pages: [
            {
                type: "content",
                title: "Introduction: The Technocrat",
                content: "The **Tech Judge** is the opposite of the Lay judge.\n\nThey don't care about your tie. They don't care about your voice. They don't care about 'Truth' (mostly).\n\nThey care about **The Flow**.\n\nDebate to them is a technical game of chess. If you checkmate the opponent on the flow, you win, even if your argument is \"The moon is made of cheese.\"\n\nIf the opponent drops the \"Moon Cheese\" argument, the Tech judge treats it as a fact.",
                keyPoints: ["Technocrat", "Flow is God", "Moon Cheese", "Game of Chess"]
            },
            {
                type: "content",
                title: "The Line-by-Line",
                content: "Tech judges demand rigorous **Line-by-Line** debate.\n\nYou cannot just tell a story. You must answer every single subpoint.\n\nOpponent: \"1. Cost, 2. Time, 3. Will.\"\nYou: \"On 1... On 2... On 3...\"\n\nIf you answer 1 and 3 but miss 2, the Tech judge considers 2 'Dropped' and conceded. If 2 was an impact, you lose.",
                keyPoints: ["Line-by-Line", "No Drops", "Conceded = True"]
            },
            {
                type: "content",
                title: "Speed and Efficiency",
                content: "Tech judges usually tolerate (or love) Speed (Spreading).\n\nWhy? Because speed allows for more arguments. More arguments = More technical skill.\n\n**Efficiency:** It's not just fast talking; it's word economy. Don't say \"I would like to respond to the opponent's first point by saying...\" (12 words). Say \"On One: No link.\" (3 words).\n\nEvery second matters. Remove all filler words.",
                keyPoints: ["Spreading", "Word Economy", "Efficiency", "No filler"]
            },
            {
                type: "content",
                title: "Drill: Word Efficiency",
                content: "Take a paragraph. Reduce the word count by 50% without losing the meaning.\n\nOriginal: \"The reason why this argument is incorrect is because the date of the evidence is from 1999, which is very old.\"\n\nEfficient: \"Prefer our evidence: Post-dates 1999.\"\n\nSay less, win more.",
                keyPoints: ["Reduction", "Say less", "Win more"]
            },
            {
                type: "content",
                title: "Impact Calculus",
                content: "Tech judges do not intervene. They will not weigh arguments for you.\n\nIf you have a Nuclear War impact and they have a Poverty impact, do not assume Nuclear War wins.\n\nYou MUST say: \"Nuclear War outweighs Poverty because of Magnitude, Reversibility, and Timeframe.\"\n\nIf you don't do the calculus, the judge shrugs. \"Maybe poverty is worse? You didn't tell me.\"",
                keyPoints: ["No intervention", "Explicit Weighing", "Judge Shrug"]
            },
            {
                type: "question",
                id: "l28-03-q1",
                question: "You drop a 'Theory Shell' (Procedural argument) in the 1AR. The Tech judge looks at you expectantly. Why?",
                options: [
                    { id: "a", text: "They want you to apologize." },
                    { id: "b", text: "Theory is a 'Highest Layer' argument. If you dropped it, they strictly have to vote against you on fairness grounds." },
                    { id: "c", text: "They are confused." }
                ],
                correctAnswer: "b",
                explanation: "For Tech judges, 'Theory' comes before 'Substance'. If you drop a fairness argument (e.g., 'The Aff must be topical'), the round ends there. It doesn't matter how good your plan is if you broke the rules. Tech judges enforce the rules ruthlessly."
            },
            {
                type: "content",
                title: "The 'Clean' Flow",
                content: "A Tech judge respects a 'Clean' round.\n\n*   Clear structure.\n*   Explicit tags.\n*   Direct clash.\n\nA 'Messy' round (arguments floating everywhere, no structure) makes a Tech judge angry. They feel like you are wasting their intellect. Give them a beautiful flow.",
                keyPoints: ["Clean vs Messy", "Respect the Flow", "Beautiful flow"]
            },
            {
                type: "content",
                title: "Summary: The Operator",
                content: "To win a Tech judge, you must be a surgeon. Precision, speed, calculation. No fluff. Just arguments. Do not try to charm them; convince them with math.",
                keyPoints: ["Surgeon", "Precision", "No fluff", "Math"]
            }
        ]
    },
    {
        lessonId: "l28-04",
        pages: [
            {
                type: "content",
                title: "Introduction: The Psychology of Improvement",
                content: "Why do some debaters plateau while others become champions?\n\nIt is rarely intelligence. It is **Mindset**.\n\nCarol Dweck's concept of **Growth Mindset** is essential for debate.\n\n*   **Fixed Mindset:** \"I lost because I'm bad at debate. I lost because the judge was stupid.\"\n*   **Growth Mindset:** \"I lost because my 2NR strategy was flawed. I can fix that.\"",
                keyPoints: ["Plateau", "Growth vs Fixed", "Feedback loop"]
            },
            {
                type: "content",
                title: "The Ego Trap",
                content: "Debaters have big egos. We hate looking stupid.\n\nThis leads to **Risk Aversion**. We stick to arguments we know. We avoid scary judges. We avoid tough opponents.\n\nThis kills growth.\n\nTo grow, you must be willing to lose. You must try the new K. You must try to spread. You must fail spectacularly in front of people to learn how to stand.",
                keyPoints: ["Ego", "Risk Aversion", "Must fail"]
            },
            {
                type: "content",
                title: "Reframing Failure",
                content: "In debate, a Loss is better than a Win.\n\n*   **A Win (on easy mode):** Teaches you nothing. It confirms bad habits.\n*   **A Loss (against a beast):** Exposes your weaknesses. It shows you exactly where your armor has holes.\n\nCherish your clear losses. They are the roadmap to mastery. Record them. Analyze them. Fix them.",
                keyPoints: ["Loss > Win", "Exposing weakness", "Roadmap"]
            },
            {
                type: "content",
                title: "The Plateau Breaker",
                content: "When you stop improving, you have hit a Plateau.\n\nTo break it, you must **change your inputs**.\n\nIf you just debate more, you reinforce the plateau. You must study differently. Watch a new format. Read a book on philosophy. Do a drill you hate.\n\nDiscomfort is the sign of growth.",
                keyPoints: ["Plateau", "Change inputs", "Discomfort", "Growth"]
            },
            {
                type: "content",
                title: "The 'Yet' Technique",
                content: "Change your internal monologue.\n\nInstead of \"I can't spread,\" say \"I can't spread **YET**.\"\nInstead of \"I don't understand Kritiks,\" say \"I don't understand Key **YET**.\"\n\nDebate is a skill tree. You just haven't unlocked that branch yet. Grind the XP.",
                keyPoints: ["Power of Yet", "Skill Tree", "Grind XP"]
            },
            {
                type: "question",
                id: "l28-04-q1",
                question: "You go 0-4 at a tournament. You feel terrible. What is the Growth Mindset response?",
                options: [
                    { id: "a", text: "Quit debate. It's clearly not for you." },
                    { id: "b", text: "Blame the judges (they were all lay)." },
                    { id: "c", text: "Analyze the flows. Identify the one recurring mistake (e.g., 'I always lose on impact calc'). Drill that mistake for a week." },
                    { id: "d", text: "Pretend it didn't happen." }
                ],
                correctAnswer: "c",
                explanation: "0-4 is a data mine. It gives you 4 samples of failure. Identifying the PATTERN is the key. Fixing one recurring error can turn 0-4 into 3-1 next time."
            },
            {
                type: "content",
                title: "Specific Drill for Growth",
                content: "Don't just 'debate more'. **Drill specifically**.\n\nIf you suck at cross-ex, do 10 cross-ex drills against a wall.\nIf you suck at speed, do speaking drills with a pen in your mouth.\n\nTargeted practice beats mindless repetition. This is 'Deliberate Practice'.",
                keyPoints: ["Deliberate Practice", "Drills", "Targeted"]
            },
            {
                type: "content",
                title: "Summary: Embracing the Grind",
                content: "Champion debaters are not born. They are built, one loss at a time. Love the grind. The pain of losing is the price of winning.",
                keyPoints: ["Built not born", "Love the grind", "Price of winning"]
            }
        ]
    },
    {
        lessonId: "l28-05",
        pages: [
            {
                type: "content",
                title: "Introduction: The Truth Seekers",
                content: "There is a subset of judges (often older, or academics) who follow the **Truth Over Tech** paradigm.\n\nThey reject the 'Game' of debate.\n\n*   **Tech Judge:** \"You dropped the argument that the sky is green, so the sky is green.\"\n*   **Truth Judge:** \"I don't care that he dropped it. The sky is blue. I will not vote for a lie.\"\n\nThey believe debate should model real-world advocacy, where facts matter more than tricks.",
                keyPoints: ["Truth over Tech", "Reject the Game", "Real world advocacy"]
            },
            {
                type: "content",
                title: "The Problem with Tricks",
                content: "Truth judges HATE generic debate tricks.\n\n*   Theory shells meant to trap opponents.\n*   Spreading to overwhelm opponents.\n*   Semantics/Grammar arguments.\n\nIf you run these, a Truth judge will punish you. They see it as intellectual cowardice. \"Why can't you win on the merits of the policy?\"",
                keyPoints: ["Hate tricks", "Intellectual cowardice", "Win on merits"]
            },
            {
                type: "content",
                title: "Evidence Fidelity",
                content: "These judges actually **READ** your evidence.\n\nIf you 'Power Tag' (claim the card says X when it really says Y), they will catch you. And they will vote against you for ethics.\n\n**Strategy:** Be hyper-conservative with your evidence citations. Do not exaggerate. \"The evidence suggests X may happen,\" not \"The evidence PROVES X WILL happen.\"",
                keyPoints: ["Read evidence", "Power Tagging", "Ethics", "Understate don't overstate"]
            },
            {
                type: "content",
                title: "Common Sense Logic",
                content: "Truth judges value **Coherence**.\n\nDoes your story make sense?\n\nTech arguments often rely on 'Link Chains' that are fragile (A->B->C->D->E->Nuclear War). A Truth judge looks at that and says \"That is highly unlikely.\"\n\nThey prefer: \"A->B. Bad thing happens.\" (Short, probable chain). Simplicity is Truth.",
                keyPoints: ["Coherence", "Probability", "Short chains", "Simplicity"]
            },
            {
                type: "question",
                id: "l28-05-q1",
                question: "You are winning on the technical flow (opponent dropped 5 arguments), but your case is based on a conspiracy theory. The judge is 'Truth Over Tech'. Consequence?",
                options: [
                    { id: "a", text: "You win easily." },
                    { id: "b", text: "You lose. The judge rejects the premise." },
                    { id: "c", text: "It's a tie." }
                ],
                correctAnswer: "b",
                explanation: "The Truth judge effectively has a 'Veto' on nonsense. They view themselves as an educator. Educators do not affirm conspiracy theories. You must adapt by running 'True' arguments."
            },
            {
                type: "content",
                title: "Ethos Checks",
                content: "With Truth judges, your **Ethos** (Credibility) is your best weapon.\n\nIf you sound reasonable, honest, and smart, they trust your truth. If you sound tricky, evasive, or robotic, they doubt your truth.\n\nBuild Ethos by admitting nuance. \"Judge, our plan isn't perfect, but it's the best option.\"",
                keyPoints: ["Ethos", "Credibility", "Nuance", "Honesty"]
            },
            {
                type: "content",
                title: "How to Spot Them",
                content: "Paradigms like:\n*   \"I vote for the better policy.\"\n*   \"I hate spreading.\"\n*   \"Don't be silly.\"\n*   \"I am a communications judge.\"\n\nThese signal a preference for Truth/Realism. Adjust your case instantly.",
                keyPoints: ["Better policy", "Communications", "Realism", "Adjust"]
            },
            {
                type: "content",
                title: "Summary: The Realist",
                content: "For Truth judges, you are not playing a game. You are auditioning for leadership. Act like a leader, not a gamer. Speak truth to power.",
                keyPoints: ["Auditioning for leadership", "Not a gamer", "Speak truth"]
            }
        ]
    },
    {
        lessonId: "l28-06",
        pages: [
            {
                type: "content",
                title: "Introduction: The Autopsy",
                content: "After a tournament, most debaters throw their flows away and go eat pizza.\n\nChampions perform an **Autopsy**.\n\nYou cannot learn from a loss if you bury the body. You must examine it to find the cause of death.\n\nWas it: Research failure? Strategy failure? Speed failure? Adaptation failure?",
                keyPoints: ["Autopsy", "Cause of death", "Don't bury the body"]
            },
            {
                type: "content",
                title: "Step 1: The Flow Review",
                content: "Look at your flowsheet from the round.\n\nWhere did the winning argument start? Usually, it started in the Constructive.\n\nDid you answer it? Did the answer fail?\n\nTrace the bullet that killed you back to the gun. \"I lost because I didn't put a 'No Link' on their DA in the 2AC.\" Be precise about the fatal moment.",
                keyPoints: ["Trace the bullet", "Flow analysis", "Origin point", "Fatal moment"]
            },
            {
                type: "content",
                title: "Step 2: The Judge Ballot",
                content: "Read the Reason for Decision (RFD).\n\nJudges heavily hint at why they voted. \"I voted Neg because the Aff failed to extend Solvency.\"\n\nEven if you disagree, **The Judge is Always Right** (in that round). Why did they *think* you failed? Was you unclear? Did you mumble?\n\nPerception is reality. If they didn't hear it, you didn't say it.",
                keyPoints: ["RFD", "Perception is reality", "Why did they think that?"]
            },
            {
                type: "content",
                title: "Step 3: The Redo",
                content: "This is the most painful and effective drill: **The Re-Do**.\n\nGive your losing speech again. To the wall.\n\nFix the mistake. Respond to the argument you dropped. Make the ratio perfect.\n\nBy re-doing the speech, you rewrite the muscle memory. Next time, your brain will take the correct path. Do not skip this step.",
                keyPoints: ["The Re-Do", "Painful but effective", "Rewrite muscle memory"]
            },
            {
                type: "question",
                id: "l28-06-q1",
                question: "You realize you lost because you didn't have a card on 'Inflation'. What is the fix?",
                options: [
                    { id: "a", text: "Hope nobody runs Inflation again." },
                    { id: "b", text: "Create an 'Inflation' block (file) with 5 new cards. Do a practice speech using them." },
                    { id: "c", text: "Complaint about the topic." }
                ],
                correctAnswer: "b",
                explanation: "Research holes are the easiest failure to fix. Plug the hole. Build the block. Now you are immune to that weapon."
            },
            {
                type: "content",
                title: "The Emotional Recovery",
                content: "It hurts to lose. Give yourself 24 hours to mope.\n\nThen, turn the page. The next tournament is a clean slate.\n\nYour past record does not determine your future potential. Only your current work ethic does. Champions have short memories for failure and long memories for lessons.",
                keyPoints: ["24 hour rule", "Clean slate", "Work ethic"]
            },
            {
                type: "content",
                title: "Summary: Fail Forward",
                content: "Failure is fuel. Burn it to get better. If you aren't failing, you aren't trying hard enough.",
                keyPoints: ["Failure is fuel", "Try harder"]
            }
        ]
    },
    {
        lessonId: "l28-07",
        pages: [
            {
                type: "content",
                title: "Unit Review: The Philosophy of Judging",
                content: "We have explored the deep waters of judge psychology.\n\n*   **Flay Judges:** The hybrid challenge. Structure + Rhetoric.\n*   **Tech Judges:** The chess masters. Speed + Precision.\n*   **Truth Judges:** The realists. Facts + Coherence.\n\nKnowing *who* is judging you is more important than knowing *what* you are debating.",
                keyPoints: ["Flay", "Tech", "Truth", "Adaptation"]
            },
            {
                type: "content",
                title: "The Ultimate Skill: Empathy",
                content: "Judge adaptation is really just **Empathy**.\n\nIt is the ability to see the world through someone else's eyes.\n\n\"If I were this judge, what would I need to hear to vote Aff?\"\n\nDebate teaches you to step outside your own brain and hack into someone else's. It is a superpower.",
                keyPoints: ["Empathy", " Perspective taking", "Superpower"]
            },
            {
                type: "content",
                title: "Mindset Review",
                content: "We also covered the internal game.\n\n*   **Growth Mindset:** Yet.\n*   **Composure:** Ice in veins.\n*   **Autopsy:** Learning from death.\n\nThe strongest debater is the one who can lose 100 times and still show up with a smile for round 101.",
                keyPoints: ["Internal game", "Resilience"]
            },
            {
                type: "content",
                title: "Looking Ahead",
                content: "Next, in Unit 29, we get specific.\n\nWe will look at specific judge demographics: The 'Tab' Judge, The 'Policy' Judge, and The 'Interventionist'.\n\nWe are building a complete profile of every human you will ever face.",
                keyPoints: ["Unit 29", "Specific demographics"]
            },
            {
                type: "content",
                title: "Final Homework",
                content: "Write a 'Judge Paradigm' for yourself.\n\nIf YOU were a judge, what kind would you be? Tech? Truth? Flay?\n\nWriting it down helps you understand your own biases. And it helps you understand how others see the world.",
                keyPoints: ["Self-reflection", "Write your paradigm"]
            }
        ]
    }
];
