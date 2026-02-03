import { MultiPageLesson } from "./types";

export const UNIT_29_LESSONS: MultiPageLesson[] = [
    {
        lessonId: "l29-01",
        pages: [
            {
                type: "content",
                title: "Introduction: The Tabula Rasa Ideal",
                content: "**Tabula Rasa** is Latin for \"Blank Slate\".\n\nA true Tab Judge tries to enter the round knowing NOTHING.\n\n*   They ignore their own political opinions.\n*   They ignore \"Common Sense\".\n*   They ignore the \"Truth\".\n\nThey only vote on what is said in the round. If you argue \"The sky is green\" and the opponent doesn't respond, the Tab judge accepts \"The sky is green\" as a fact for the round.\n\nThis is the ultimate \"Gamer\" judge.",
                keyPoints: ["Blank Slate", "Ignore opinions", "Inside the round only"]
            },
            {
                type: "content",
                title: "The Burden of Rejoinder",
                content: "For a Tab judge, the **Burden of Rejoinder** (Duty to Reply) is absolute.\n\nEverything you say is true until the opponent says it isn't.\n\nThis makes them very susceptible to **Spreading** (Speed). If you make 50 arguments and the opponent only answers 40, you win 10 arguments automatically.\n\n**Strategy:** Overwhelm the flow. Use many independent arguments. The Tab judge is a scoreboard, not a referee. They count points, they don't judge fouls (unless you tell them to).",
                keyPoints: ["Burden of Rejoinder", "Silence is consent", "Overwhelm"]
            },
            {
                type: "content",
                title: "Theory and Metadebate",
                content: "Because Tab judges have no fixed rules, you can debate the rules (Theory).\n\n\"Judge, you should vote for me because my opponent used a font that is too small (meaningful accessibility violation).\"\n\nIf the opponent drops it... you win.\n\nTab judges *love* Theory. It validates their blank slate nature. \"I didn't have a rule against small fonts, but the Aff proved I should have one.\" You are building the rulebook in real-time.",
                keyPoints: ["Theory", "Debate the rules", "Metadebate", "Building the rulebook"]
            },
            {
                type: "content",
                title: "Deep Dive: Technical Truth vs Real Truth",
                content: "**Real Truth:** The sky is blue.\n**Technical Truth:** The sky is green (because the Aff dropped the card).\n\nTab judges value Technical Truth over Real Truth. This is hard for beginners to grasp.\n\nIt feels wrong. \"But I KNOW the sky is blue!\" It doesn't matter. In the universe of this round hour, you lost the argument. Debate is about who defends their universe better.",
                keyPoints: ["Technical Truth", "Real Truth", "Universe of the round"]
            },
            {
                type: "content",
                title: "Default Settings",
                content: "Even Tab judges have 'Defaults' if nobody argues anything.\n\n*   **Utilitarianism:** Unless told otherwise, saving lives is good.\n*   **Presumption:** In a tie, they usually vote Neg (because change is risky).\n\nKnowledge of these defaults saves you time. You don't need to prove 'Death is bad' unless the opponent argues 'Death is good'.",
                keyPoints: ["Defaults", "Utilitarianism", "Presumption"]
            },
            {
                type: "question",
                id: "l29-01-q1",
                question: "You are debating in front of a Tab judge. Your opponent makes a brilliant point but forgets to extend it in the summary. What happens?",
                options: [
                    { id: "a", text: "The judge votes on it because it was brilliant." },
                    { id: "b", text: "The judge ignores it completely. It wasn't extended." },
                    { id: "c", text: "The judge prompts them to remember." }
                ],
                correctAnswer: "b",
                explanation: "Tab judges are strict about the 'Flow'. If an argument is not in the Final Speech, it does not exist. It effectively evaporated. You can ignore it."
            },
            {
                type: "content",
                title: "Summary: The Mirror",
                content: "A Tab judge is a mirror. They reflect exactly what you give them. If you give them garbage, they vote on garbage. If you give them gold, they vote on gold. You have total agency.",
                keyPoints: ["Mirror", "Garbage in Garbage out", "Total agency"]
            }
        ]
    },
    {
        lessonId: "l29-02",
        pages: [
            {
                type: "content",
                title: "Introduction: Analyzing Your Own Performance",
                content: "We discussed 'Learning from Losses' in Unit 28. Now we learn the **Methodology**.\n\nMost students just watch the video and cringe. \"I sound so weird.\"\n\nThis is not analysis. This is vanity.\n\nYou need a **Structured Review System**. You need to watch yourself like a coach watches a player.",
                keyPoints: ["Methodology", "Structured Review", "Not vanity"]
            },
            {
                type: "content",
                title: "The 3-Pass Method",
                content: "When watching your recording, watch it THREE times.\n\n1.  **Pass 1 (Content):** Did I answer the argument? Was the evidence correct? (Look at flow).\n2.  **Pass 2 (Visual):** Am I swaying? Am I making eye contact? Do I look confident? (Mute audio).\n3.  **Pass 3 (Audio):** Close your eyes. Do I sound distinct? Are my tags clear? Do I sound annoying? (Audio only).\n\nIsolate the variables. You cannot fix everything at once.",
                keyPoints: ["3-Pass Method", "Content", "Visual", "Audio"]
            },
            {
                type: "content",
                title: "The Video Recall Protocol",
                content: "Watch a 1-minute clip of your speech. Pause it.\n\nAsk: \"What did I just say?\"\n\nIf you can't remember, or if it was a blur of words, it was bad. The best arguments stick in memory.\n\n**Goal:** Be memorable. If you are forgettable, you are losing.",
                keyPoints: ["Video Recall", "Memorable", "Blur"]
            },
            {
                type: "content",
                title: "Flowing Yourself",
                content: "Try to flow your own speech from the recording.\n\nIf YOU can't flow it, the judge certainly couldn't.\n\nIf you find yourself pausing the video to catch what you said, you failed. You were too fast or too unclear. A judge cannot pause time.",
                keyPoints: ["Flow yourself", "Judge controls time", "Unclear"]
            },
            {
                type: "content",
                title: "Transcription Drill",
                content: "Transcribe your speech word-for-word for 1 minute.\n\nCount the 'Ums', 'Likes', and 'Uhhs'.\n\nCount the empty words (\"Basically\", \"Essentially\", \"I mean\").\n\nCalculate your **Signal-to-Noise Ratio**. High signal (Arguments). Low noise (Filler).",
                keyPoints: ["Transcription", "Signal-to-Noise", "Filler words"]
            },
            {
                type: "practice",
                id: "l29-02-p1",
                title: "Self-Critique",
                description: "Critique a sample speech fragment.",
                practice: {
                    type: "argument-builder",
                    targetSkill: "Analysis",
                    topic: "Speech Review",
                    instructions: "Debater said: 'And so like, the economy is bad, and um, we fix it.' Critique this.",
                    successCriteria: ["Filler words ('like', 'um')", "Vague impact ('bad')", "Lack of warrant ('we fix it')"]
                }
            },
            {
                type: "content",
                title: "Summary: The Mirrors",
                content: "The camera does not lie. The microphone does not lie. They are your harshest critics and your best friends. Use them to debug your software.",
                keyPoints: ["Camera doesn't lie", "Debug"]
            }
        ]
    },
    {
        lessonId: "l29-03",
        pages: [
            {
                type: "content",
                title: "Introduction: The Interventionist",
                content: "The **Interventionist** is the opposite of the Tab judge.\n\nThey believe it is their DUTY to intervene.\n\n*   \"I won't vote for a bad argument.\"\n*   \"I felt the Aff was morally right.\"\n*   \"I stepped in to protect the novice.\"\n\nThey view themselves as Guardians of Truth or Justice, not just scorekeepers. You are pleading a case to a moral authority.",
                keyPoints: ["Interventionist", "Duty to intervene", "Guardians"]
            },
            {
                type: "content",
                title: "Predicting Intervention",
                content: "When will they intervene?\n\n1.  **Cruelty:** If you are mean, they kill you.\n2.  **Falsehood:** If you lie, they kill you.\n3.  **Boredom:** If you are boring, they vote for the interesting team.\n\n**Strategy:** You must charm them. You must appeal to their sense of justice. You cannot win on technicalities.",
                keyPoints: ["Cruelty", "Falsehood", "Boredom", "Charm offensive"]
            },
            {
                type: "content",
                title: "The 'Judge's Argument'",
                content: "Sometimes an Interventionist will vote on an argument nobody made.\n\n\"I voted Neg because I know about the topic and I think the plan won't work.\"\n\nThis is frustrating. But you can prevent it by **Pre-empting the Judge's Mind**.\n\n\"Judge, you might be thinking X. But here is why X is wrong...\"\n\nRead their mind before they make up their mind.",
                keyPoints: ["ghost arguments", "Pre-empting", "Read their mind"]
            },
            {
                type: "content",
                title: "The 'Moral Hazard' Strategy",
                content: "With Interventionists, frame your opponent's argument as 'Dangerous'.\n\n\"Judge, voting for this argument sets a bad precedent. It encourages X.\"\n\nGive the judge a moral reason to reject the technical argument. Empower their intervention.",
                keyPoints: ["Moral Hazard", "Dangerous", "Empower intervention"]
            },
            {
                type: "question",
                id: "l29-03-q1",
                question: "An Interventionist judge stops the round and says 'Stop being so aggressive.' What do you do?",
                options: [
                    { id: "a", text: "Argue 'I am just debating hard!'" },
                    { id: "b", text: "Apologize immediately, lower your volume, and change tone." },
                    { id: "c", text: "Ignore them." }
                ],
                correctAnswer: "b",
                explanation: "This is a direct order from the 'King' of the room. If you disobey, you die. Immediate compliance is the only survival strategy. Do not argue with a referee who has already blown the whistle."
            },
            {
                type: "content",
                title: "Summary: The King",
                content: "In their courtroom, their word is law. You are a guest. Behave accordingly. Respect the throne.",
                keyPoints: ["King", "Guest", "Respect"]
            }
        ]
    },
    {
        lessonId: "l29-04",
        pages: [
            {
                type: "content",
                title: "Introduction: The Ballot",
                content: "The round is over. You get the **Ballot** (the decision paper).\n\nIt contains the most valuable data in debate.\n\n*   **RFD (Reason for Decision):** Why you won/lost.\n*   **Speaker Points:** How good you looked.\n*   **Comments:** Random thoughts.\n\nMost debaters only look at 'Win/Loss'. This is a waste.",
                keyPoints: ["Ballot", "Data", "RFD"]
            },
            {
                type: "content",
                title: "Decoding the RFD",
                content: "Judges speak in code.\n\n*   \"I didn't buy the link.\" -> \"Your warrant was unclear.\"\n*   \"The Neg was more organized.\" -> \"You were messy.\"\n*   \"Clash was lacking.\" -> \"You read prepared speeches and didn't listen.\"\n\nYou must translate 'Nice Judge Talk' into 'Brutal Truth'.",
                keyPoints: ["Code", "Translation", "Brutal Truth"]
            },
            {
                type: "content",
                title: "The Speaker Point Matrix",
                content: "**30:** God Level (Tournament winner).\n**29:** Excellent (Finals quality).\n**28:** Good (Break rounds).\n**27:** Average (Needs work).\n**26 and below:** You did something wrong (Rude, Offensive, or unintelligible).\n\nUse this to benchmark your 'Soft Skills'.",
                keyPoints: ["Speaker Points", "Benchmark", "Soft Skills"]
            },
            {
                type: "content",
                title: "Asking Questions (Post-Round)",
                content: "If the tournament allows, ask questions after the decision (Oral Critique).\n\n**Good Question:** \"How could I have made the link story clearer?\"\n**Bad Question:** \"Why didn't you vote for the link?\" (Argumentative)\n\nAsk for **Advice**, not **Justification**. Judges love to give advice. They hate defending their verdict.",
                keyPoints: ["Oral Critique", "Advice vs Justification"]
            },
            {
                type: "content",
                title: "The Graph",
                content: "Track your Speaker Points over time.\n\nAre they going up? Down? Flat?\n\nSpeaker points are a rough proxy for 'Charisma' and 'Clarity'. If you win but get low points (26-27), you are winning ugly. You need to work on style.",
                keyPoints: ["Speaker Points", "Trend line", "Winning ugly"]
            },
            {
                type: "practice",
                id: "l29-04-p1",
                title: "Ballot Analysis",
                description: "Interpret a judge comment.",
                practice: {
                    type: "argument-builder",
                    targetSkill: "Analysis",
                    topic: "Feedback",
                    instructions: "Judge wrote: 'Aff needs to weigh more at the end.' What does this mean?",
                    successCriteria: ["Final speech failed to compare impacts", "Did not explain WHY Aff wins", "Asserted winning without proof"]
                }
            },
            {
                type: "content",
                title: "Summary: The Feedback Loop",
                content: "The Ballot is the compass. It tells you if you are heading North or South. Read it. Believe it. Act on it.",
                keyPoints: ["Compass"]
            }
        ]
    },
    {
        lessonId: "l29-05",
        pages: [
            {
                type: "content",
                title: "Introduction: The Policy Judge",
                content: "Policy Judges judge... Policy Debate. But they also judge LD and PF sometimes.\n\nThey bring their specific baggage: **The Paradigm of Policymaking**.\n\nThey view the round as a simulation of the US Congress. They want to pass the best law.",
                keyPoints: ["Policy baggage", "Simulation", "Congress"]
            },
            {
                type: "content",
                title: "The Checkbox",
                content: "Policy Judges have a mental checkbox:\n\n1.  **Topicality:** Is the plan legal?\n2.  **Solvency:** Does it work?\n3.  **Inherency:** Is it new?\n4.  **Net Benefits:** Do Advantages > Disadvantages?\n\nIf you skip any box, they get anxious. You must check every box explicitly.",
                keyPoints: ["Checkbox", "Stock Issues", "Net Benefits"]
            },
            {
                type: "content",
                title: "Love of DAs",
                content: "Policy Judges LOVE Disadvantages (DAs).\n\nPolitics DAs. Trade DAs. Federalism DAs.\n\nThey understand the 'Butterfly Effect' of policy. Small plan -> Big reaction.\n\n**Strategy:** Give them a clear Link Chain. Plan -> Action -> Reaction -> Impact.",
                keyPoints: ["Love DAs", "Butterfly Effect", "Link Chain"]
            },
            {
                type: "content",
                title: "The Counterplan (CP)",
                content: "To a Policy judge, a Counterplan is the ultimate logical weapon.\n\n\"The Aff is good. But this CP is better.\"\n\nThey are very comfortable comparing Plan A vs Plan B. They are less comfortable comparing Plan A vs \"Philosophy of Justice\". Stick to the mechanical comparison of plans.",
                keyPoints: ["Counterplan", "Plan A vs Plan B", "Mechanical"]
            },
            {
                type: "question",
                id: "l29-05-q1",
                question: "A Policy judge is judging Lincoln-Douglas (Values). You run a 'nuclear war' impact. They run a 'loss of dignity' impact. Who wins?",
                options: [
                    { id: "a", text: "Dignity (it's LD)." },
                    { id: "b", text: "Nuclear War (probably)." },
                    { id: "c", text: "It's a tie." }
                ],
                correctAnswer: "b",
                explanation: "Policy judges are trained to count bodies (Utilitarianism). 'Dignity' is hard to quantify. 'Dead people' is easy to quantify. Policy judges default to 'Big Body Counts' unless told otherwise."
            },
            {
                type: "content",
                title: "CP Competition",
                content: "For a Policy judge, the CP must be **Competitive**.\n\nIt must be impossible (or bad) to do both. If you say \"Do X\", and CP is \"Do Y\", the judge asks: \"Why not both?\"\n\nYou must prove **Permutation Fails**. \"We cannot do both because...\"\n\nThis is the key test of a Policy round.",
                keyPoints: ["Competition", "Mutually Exclusive", "Permutation", "Key Test"]
            },
            {
                type: "content",
                title: "Summary: The Legislator",
                content: "Treat them like a Senator who is late for lunch. Give them the plan, the cost, and the benefit. Make it snappy. Count the votes.",
                keyPoints: ["Senator", "Snappy", "Vote counting"]
            }
        ]
    },
    {
        lessonId: "l29-06",
        pages: [
            {
                type: "content",
                title: "Introduction: The LD Judge",
                content: "The **LD Judge** focuses on **Value** and **Morality**.\n\nThey are philosophers. They care about the 'Why', not just the 'What'.\n\n*   Policy Judge: \"Does the plan work?\"\n*   LD Judge: \"Is the plan RIGHT?\"",
                keyPoints: ["Philosopher", "Morality", "Right vs Works"]
            },
            {
                type: "content",
                title: "The Value Prerequisite",
                content: "For an LD judge, you assume nothing matters until you prove it matters.\n\n\"Saving lives is good.\" -> PROVE IT.\n\"Freedom is good.\" -> PROVE IT.\n\nYou must establish a **Framework** (Value + Criterion). If you win the Framework, you win the round. If you lose the Framework, your impacts don't matter.",
                keyPoints: ["Prove it", "Framework first", "Value Criterion"]
            },
            {
                type: "content",
                title: "Analytic Arguments",
                content: "LD judges love **Analytics** (Pure Logic).\n\nThey often prefer a brilliant logical deduction over a stack of statistics.\n\n\"Judge, logically, if we ban X, Y must follow because of the nature of Z.\"\n\nIf the logic holds, they buy it. They respect the human mind more than the spreadsheet.",
                keyPoints: ["Analytics", "Pure Logic", "Deduction"]
            },
            {
                type: "content",
                title: "The 'K' in LD",
                content: "Modern LD judges are very open to Kritiks (Philosophy).\n\nKant, Rawls, Nietzsche, Foucault.\n\nThey treat these philosophers like celebrities. If you drop the name 'Kant' correctly, their eyes light up.\n\n**Warning:** If you drop the name wrong, they will destroy you. Don't fake philosophy.",
                keyPoints: ["Kritiks", "Name dropping", "Celebrities", "Don't fake"]
            },
            {
                type: "question",
                id: "l29-06-q1",
                question: "You read a statistic: '90% of people benefit.' The LD judge looks unimpressed. Why?",
                options: [
                    { id: "a", text: "They hate math." },
                    { id: "b", text: "You haven't proved that 'benefit' is the goal. Maybe 'Justice' is the goal, and the 10% are being treated unjustly." },
                    { id: "c", text: "The stat is old." }
                ],
                correctAnswer: "b",
                explanation: "Utilitarianism (Greatest good for greatest number) is just ONE framework. In LD, Tyanny of the Majority is a real concern. Justice for the 1 minority might outweigh benefit for the 99."
            },
            {
                type: "content",
                title: "Value/Criterion Clash",
                content: "The battle in LD is often: **My Value eats your Value**.\n\n\"Justice includes Freedom. You cannot have Justice without Freedom. Therefore, by achieving Freedom, I also achieve Justice.\"\n\nSwallow their value. Show yours is the parent concept.",
                keyPoints: ["Value Clash", "Parent concept", "Swallow"]
            },
            {
                type: "content",
                title: "Summary: The Professor",
                content: "Treat them like a philosophy professor. Be deep. Be logical. Be ethical. Do not bore them with spreadsheets.",
                keyPoints: ["Professor", "Ethical", "No spreadsheets"]
            }
        ]
    },
    {
        lessonId: "l29-07",
        pages: [
            {
                type: "content",
                title: "Unit Review: The Human Palette",
                content: "We have now profiled the major judge archetypes.\n\n*   **Tab:** The Mirror.\n*   **Interventionist:** The King.\n*   **Policy:** The Senator.\n*   **LD:** The Philosopher.\n\nDifferent brains. Different triggers. Different ballots. You are a salesman selling to 4 different customers.",
                keyPoints: ["Archetypes", "Palette", "Salesman"]
            },
            {
                type: "content",
                title: "The Chameleon",
                content: "The best debater is a **Chameleon**.\n\nIn Round 1, you represent the ACLU (LD Judge).\nIn Round 2, you represent the Pentagon (Policy Judge).\nIn Round 3, you represent a Storyteller (Lay Judge).\n\nYou change your color to match the environment. This is not 'inauthentic'; this is 'skill'.",
                keyPoints: ["Chameleon", "Adaptation", "Skill"]
            },
            {
                type: "content",
                title: "The One Constant",
                content: "What never changes?\n\n**Clarity.**\n**Respect.**\n**Logic.**\n\nThese work on everyone. Even a chaotic judge respects a clear, respectful, logical speaker.",
                keyPoints: ["Clarity", "Respect", "Logic"]
            },
            {
                type: "content",
                title: "Looking Ahead",
                content: "We have reached the final unit of Section 3.\n\n**Unit 30: Format Judges.**\n\nWe will look at specific formats: Public Forum, Congress, and the National Circuit. This is the final layer of adaptation.",
                keyPoints: ["Unit 30", "Formats"]
            },
            {
                type: "content",
                title: "Final Homework",
                content: "Find a ballot from an old round (or ask a friend). Read the RFD. Translate it. What did the judge *really* mean? Then fix it.",
                keyPoints: ["Translate RFD"]
            }
        ]
    }
];
