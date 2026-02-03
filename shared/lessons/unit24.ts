import { MultiPageLesson } from "./types";

export const UNIT_24_LESSONS: MultiPageLesson[] = [
    {
        lessonId: "l24-01",
        pages: [
            {
                type: "content",
                title: "Introduction: The Power of Antithesis",
                content: "**Antithesis** is the juxtaposition of contrasting ideas in balanced phrases. It is the most powerful tool for simplifying the world for a judge.\n\n\"It was the **best** of times, it was the **worst** of times.\"\n\"Not that I loved **Caesar less**, but that I loved **Rome more**.\"\n\nThe human brain learns by contrast. We understand 'Hot' only because we know 'Cold'. Antithesis exploits this neural wiring to make your efficiency seem like objective truth.",
                keyPoints: ["Juxtaposition", "Balanced phrases", "Neural wiring"],
                tip: "Antithesis works best when the structure is identical. (Noun-Verb-Adjective; Noun-Verb-Adjective). The rhythm sells the contrast."
            },
            {
                type: "content",
                title: "Structural Antithesis (The Scale)",
                content: "Antithesis isn't just about opposite words; it's about opposite structure.\n\n*   **Weak Information:** \"The plan costs money, but it saves lives, which is good.\"\n*   **Strong Antithesis:** \"They count the **cost**; we count the **lives**.\"\n\nIn the second example, you aren't just comparing arguments; you are comparing *values*. You create a binary choice: Money vs. Life. The judge must pick one.",
                keyPoints: ["Structural Balance", "Value comparison", "Binary choice"],
                tip: "Use Antithesis in your Impact Calculus. 'They fear the **action**; we fear the **inaction**.'"
            },
            {
                type: "content",
                title: "The Double Antithesis",
                content: "Contrasting two pairs of things at once.\n\n\"To **err** is **human**; to **forgive**, **divine**.\"\n(Err vs Forgive / Human vs Divine).\n\nThis creates a sense of totality. It covers the Earth (Human) and the Heavens (Divine). Use this for Grand Style impacts that claim to solve everything.\n\nExample: \"Their plan saves the **banks** today; our plan saves the **people** forever.\"",
                keyPoints: ["Double contrast", "Totality", "Banks vs People"],
                tip: "This is a 'Mic Drop' device. Use it at the very end of your speech."
            },
            {
                type: "content",
                title: "Antithesis in Rebuttal (Simplification)",
                content: "Debate rounds get messy. Antithesis cleans them up.\n\n\"They offer you **Fear**; we offer you **Facts**.\"\n\"They want to **hide** history; we want to **teach** it.\"\n\nBy boiling the confused round down to a binary choice (Good vs Bad), you make the decision easy. The judge doesn't want to think hard; they want a clear path to the ballot. Give it to them.",
                keyPoints: ["Clean up the mess", "Fear vs Facts", "Path to ballot"],
                tip: "Start your Rebuttal instructions with Antithesis. 'Judge, this round comes down to one choice: Stability or Chaos.'"
            },
            {
                type: "question",
                id: "l24-01-q1",
                question: "Which of these is a structural Antithesis?",
                options: [
                    { id: "a", text: "The cat sat on the mat." },
                    { id: "b", text: "Float like a butterfly, sting like a bee." },
                    { id: "c", text: "I am hungry and tired." },
                    { id: "d", text: "Justice is blind." }
                ],
                correctAnswer: "b",
                explanation: "Though also Similes, it contracts 'Float' (Soft) with 'Sting' (Hard) and 'Butterfly' (Harmless) with 'Bee' (Harmful). The structure is perfectly balanced.",
                tip: "If you can put it on a T-Shirt, it's probably Antithesis."
            },
            {
                type: "content",
                title: "Chiasmus vs Antithesis",
                content: "We learned Chiasmus in Unit 23. It is often a form of Antithesis.\n\n\"When the **going** gets **tough**, the **tough** get **going**.\"\n\nAntithesis contrasts A and B. Chiasmus reverses them (AB -> BA). Both are valid, but Antithesis is easier to improvise in a round. Chiasmus usually requires pre-writing.",
                keyPoints: ["Chiasmus connection", "Improvisation"],
                tip: "Don't force a Chiasmus. If you mess up the grammar, you look silly. Stick to Antithesis if you are unsure."
            },
            {
                type: "content",
                title: "Defining by Negation",
                content: "Define what you are NOT to define what you ARE.\n\n\"I am **not** a crook.\"\n\"We are **not** seeking war; we are seeking security.\"\n\nDefining by negation clears the debris. It tells the judge exactly where the boundary lies. It is a defensive shield against Strawman arguments.",
                keyPoints: ["Define by negation", "Not seeking war", "Defensive shield"],
                tip: "Use this when the opponent misrepresents you. 'We are NOT arguing for X; we are arguing for Y.'"
            },
            {
                type: "content",
                title: "Antithesis of Scale",
                content: "Contrast the Small with the Large.\n\n\"That's one **small step for man**, one **giant leap to mankind**.\"\n\nThis puts specific actions in perspective. \"Investing $1 billion (Small) saves $100 billion (Large).\" Small cost, Huge gain. You minimize the harm and maximize the benefit in one sentence.",
                keyPoints: ["Small vs Large", "Perspective", "Cost/Benefit"],
                tip: "Use this for 'Solvency mechanisms'. 'A small tax for a massive future.'"
            },
            {
                type: "practice",
                id: "l24-01-p1",
                title: "The Contrast Machine",
                description: "Create a binary.",
                practice: {
                    type: "text-edit",
                    targetSkill: "Antithesis",
                    text: "Our plan is better than theirs.",
                    instructions: "Rewrite the text using Antithesis to contrast 'Hope' vs 'Despair'. use the structure 'They offer X; we offer Y'.",
                    successCriteria: ["'They offer despair; we offer hope.'", "'Their world is dark; ours is light.'", "Strong structural balance."]
                }
            },
            {
                type: "content",
                title: "Summary: Black and White",
                content: "Nuance is good for truth, but Antithesis is good for winning. Sometimes you need to paint the world in Black and White so the judge can see the edge.",
                keyPoints: ["Black and White", "Edge detection"],
                tip: "Paint with broad strokes."
            }
        ]
    },
    {
        lessonId: "l24-02",
        pages: [
            {
                type: "content",
                title: "Introduction: Distortion",
                content: "Sometimes Truth is too small. You need to stretch it (**Hyperbole**) or shrink it (**Understatement**).\n\n*   **Hyperbole:** Exaggeration for effect. \"I have told you a million times.\"\n*   **Understatement (Litotes):** Downplaying for effect. \"Einstein was not a bad mathematician.\"\n\nBoth manipulate scale to force the audience to recalibrate their expectations.",
                keyPoints: ["Hyperbole (Stretch)", "Understatement (Shrink)", "Recalibrate"],
                tip: "Don't use both in the same sentence. Choose one direction: Big or Small."
            },
            {
                type: "content",
                title: "Hyperbole: The Wake-Up Call",
                content: "Use Hyperbole to break apathy.\n\n\"If we pass this bill, we act. If we don't, we commit **suicide**.\"\n\nIs it literally suicide? No. But the emotional truth is that it is self-destructive. Hyperbole captures the *Emotional* Truth, not the Literal Truth.",
                keyPoints: ["Break apathy", "Emotional Truth", "Suicide framing"],
                tip: "Reserve Hyperbole for your Terminal Impact (Nuclear War, Extinction, Economic Collapse)."
            },
            {
                type: "content",
                title: "The Danger of Hyperbole",
                content: "If you overuse it, you sound like a child.\n\n\"This is the WORST plan EVER.\"\n(Judge rolls eyes).\n\n**Rule:** Only use Hyperbole for your single biggest Impact. If everything is huge, nothing is huge. If you scream for 4 minutes, the judge stops hearing the scream.",
                keyPoints: ["Boy who cried wolf", "Childish", "Use only once"],
                tip: "Save the scream for the last 30 seconds."
            },
            {
                type: "content",
                title: "Understatement: The Power Move",
                content: "Understatement projects confidence. It says \"I am so calm, I don't need to scream.\"\n\nScenario: Your opponent gives a screaming 4-minute speech.\nYou stand up calm: \"Well, my opponent is certainly... passionate.\"\n\nYou just dismissed their entire speech with one word. You are the adult in the room. This is high-status behavior.",
                keyPoints: ["Confidence", "Dismissal", "Adult in the room"],
                tip: "When they go high (loud), you go low (quiet). Contrast creates authority."
            },
            {
                type: "content",
                title: "Litotes (Double Negative)",
                content: "A specific type of understatement.\n\n*   \"He is **not ugly**.\" (He is handsome).\n*   \"This is **no small victory**.\" (It is huge).\n\nLitotes forces the judge to do the math. \"Not Ugly\" -> \"Handsome\". The mental effort makes it stick. It feels more objective than saying \"He is super handsome\".",
                keyPoints: ["Litotes", "Double Negative", "Mental math"],
                tip: "Use Litotes to sound humble while bragging. 'We are not displeased with these results.'"
            },
            {
                type: "question",
                id: "l24-02-q1",
                question: "Which is an example of Litotes?",
                options: [
                    { id: "a", text: "This is the best day ever!" },
                    { id: "b", text: "I am literally dying of hunger." },
                    { id: "c", text: "It's not exactly rocket science." },
                    { id: "d", text: "The car is a lemon." }
                ],
                correctAnswer: "c",
                explanation: "'Not exactly rocket science' means 'It is easy'. You are negating the opposite (Rocket Science/Hard) to prove the positive (Easy). This is classic Litotes.",
                tip: "Look for 'Not' or 'No'. Litotes usually relies on negation."
            },
            {
                type: "content",
                title: "Cultural Context (British vs American)",
                content: "Understatement is very British. Hyperbole is very American.\n\n*   **Crisis:** The titanic is sinking.\n*   **American Hyperbole:** \"We are DOOMED! It's a DISASTER!\"\n*   **British Understatement:** \"We may get a bit wet.\"\n\nIn a debate, the British style often wins on Ethos (Calmness). The American style wins on Pathos (Urgency). Choose your weapon based on the judge.",
                keyPoints: ["Cultural styles", "Calmness vs Urgency", "Judge adaptation"],
                tip: "For Lay Judges, use American Hyperbole. For Tech Judges, use British Understatement (they hate emotional manipulation)."
            },
            {
                type: "content",
                title: "Adynaton (Impossible Hyperbole)",
                content: "Exaggerating to the point of impossibility.\n\n\"I will believe that argument when pigs fly and hell freezes over.\"\n\nIt expresses total disbelief. It shuts the door on the argument completely. It is a rhetorical slam dunk.",
                keyPoints: ["Adynaton", "Pigs fly", "Total disbelief"],
                tip: "Be careful. Adynaton can sound rude. Only use it on truly terrible arguments."
            },
            {
                type: "content",
                title: "Irony",
                content: "Using a word to mean its opposite.\n\n\"Brilliant plan.\" (Meaning: Stupid plan).\n\n**Warning:** Irony doesn't translate well in text or bad audio. Ensure your **Tone** (Circumflex) makes the irony obvious, or the judge might think you actually like the plan.",
                keyPoints: ["Irony", "Tone dependency", "Don't confuse the judge"],
                tip: "Pause before the ironic word. \"That was a... 'brilliant' strategy.\""
            },
            {
                type: "practice",
                id: "l24-02-p1",
                title: "The Burn",
                description: "Use understatement.",
                practice: {
                    type: "text-edit",
                    targetSkill: "Litotes",
                    text: "Your plan fails completely and destroys the country.",
                    instructions: "Rewrite this as a 'Litotes' (Understatement) to sound cool and dismissive.",
                    successCriteria: ["'Your plan is not without its flaws.'", "'The outcome is less than ideal.'", "'We are not optimistic about the results.'"]
                }
            },
            {
                type: "content",
                title: "Summary: The Elastic Truth",
                content: "Rhetoric is not a court of law; it is a theatre. You stretch and shrink reality to make the audience feel the truth. Just don't snap the elastic.",
                keyPoints: ["Theatre", "Elastic reality", "Don't snap"],
                tip: "Truth is subjective in debate. Persuasion is objective."
            }
        ]
    },
    {
        lessonId: "l24-03",
        pages: [
            {
                type: "content",
                title: "Introduction: The Two Worlds",
                content: "Transition: We leave pure rhetoric now to talk about the **Arena** where you will fight.\n\nDebate exists in two worlds:\n1.  **Local Circuit:** Schools in your county. Lay judges (Parents). Traditional style.\n2.  **National Circuit:** Major universities. Hired judges (Ex-debaters). Technical style.\n\nYou must understand which world you are in. Using National tactics in a Local round is like bringing a machine gun to a knife fight; you will be disqualified for excessive force.",
                keyPoints: ["Local vs National", "Lay vs Tech", "Know your arena"],
                tip: "Look at the judge list. If you see 'Mom' or 'Dad', you are in the Local Circuit."
            },
            {
                type: "content",
                title: "The Local Circuit (Lay)",
                content: "The Local Circuit is about **Persuasion**.\n\n*   **Judges:** Parents, Bus drivers, Teachers.\n*   **Style:** Slow, Rhetorical, Public Speaking focus.\n*   **Arguments:** Big picture, Truth over Tech.\n*   **Goal:** Convince a normal person.\n\nHere, Unit 22/23 (Rhetoric) is your God. If you speak fast, you lose. If you are rude, you lose.",
                keyPoints: ["Persuasion focus", "Normal people", "Rhetoric is God"],
                tip: "Dress impeccably. In Local Circuits, appearance counts for 20% of the persuasion."
            },
            {
                type: "content",
                title: "The National Circuit (Flow)",
                content: "The National Circuit is about **Game Theory**.\n\n*   **Judges:** College debaters, Coaches.\n*   **Style:** Fast (Spreading), Technical, Jargon-heavy.\n*   **Arguments:** Critical Theory (Kritiks), Disadvantages, Counterplans.\n*   **Goal:** Out-maneuver on the Flow.\n\nHere, Unit 25/26 (Policy Structure) is your God. The judge doesn't care if you have a stain on your shirt; they care if you dropped the Disadvantage Link.",
                keyPoints: ["Game Theory", "Spreading", "Technical", "Flow is God"],
                tip: "Speed is the currency of the National Circuit. If you can't handle 300 WPM, you are bankrupt."
            },
            {
                type: "content",
                title: "The 'Nat Circ' Culture",
                content: "The National Circuit has its own language ('Cards', 'Turns', 'Perms', 'Solvency', 'Impact Turn').\n\nIt can feel exclusionary to outsiders. It is an elite, high-speed intellectual sport, closer to Chess than to a Political Speech.\n\n**Warning:** If you try 'Nat Circ' tricks on a Local judge, they will hate you. They will feel stupid, and people vote against people who make them feel stupid.",
                keyPoints: ["Own language", "Chess vs Speech", "Don't confuse the worlds"],
                tip: "Never urge a Parent Judge to 'Flow'. They don't want to work. They want to be entertained."
            },
            {
                type: "content",
                title: "Why does the Circuit exist?",
                content: "Why debate fast? Because there is too much information.\n\nIn the 1970s, debaters realized that if they spoke faster, they could make more arguments. If the opponent dropped one, they won.\n\nThis evolved into an 'Arms Race' of speed, creating the modern spread (300+ words per minute). It is an evolutionary adaptation to the rules of 'Flow-based' judging.",
                keyPoints: ["Speed arms race", "More arguments", "Evolution"],
                tip: "Don't hate the player, hate the game. Speed is not 'Bad'; it is just a maximizing strategy."
            },
            {
                type: "question",
                id: "l24-03-q1",
                question: "You are at a local tournament with a parent judge. You start 'Spreading' (talking fast). What happens?",
                options: [
                    { id: "a", text: "You win because you made more arguments." },
                    { id: "b", text: "The judge flows everything perfectly." },
                    { id: "c", text: "You lose. The judge stops listening and thinks you are rude." },
                    { id: "d", text: "It depends on the coin flip." }
                ],
                correctAnswer: "c",
                explanation: "To a normal person, Spreading sounds like a panic attack or a medical condition. They will not vote for it. They will vote for the person who speaks like a human. Adaptation is the #1 skill.",
                tip: "Watch the judge's pen. If the pen stops moving, you are talking too fast."
            },
            {
                type: "content",
                title: "Code Switching",
                content: "Most schools compete in both circuits. You need to be able to 'Code Switch'.\n\n*   **Friday Night (Tech Round):** Be a machine. Efficient. Fast. Brutal logic.\n*   **Saturday Morning (Lay Round):** Be a politician. Warm. Slow. Charming stories.\n\nThe best debaters can toggle this switch instantly. The worst debaters get stuck in one mode.",
                keyPoints: ["Code Switch", "Versatility", "Machine vs Politician"],
                tip: "Practice 'Translation Drills'. Take a Tech argument and explain it to your grandmother. If she gets it, you are ready for Lay Debate."
            },
            {
                type: "content",
                title: "Online Debate (The Equalizer)",
                content: "Post-COVID, Online Debate has merged the circuits.\n\nA student in rural Kansas can now debate Harvard Westlake online.\n\nThis means the 'National Style' is spreading everywhere. Even local leagues are becoming more technical. You cannot ignore the Tech. The walls are crumbling.",
                keyPoints: ["Online debate", "Merger", "Tech is spreading"],
                tip: "Invest in a good microphone. In online debate, Audio Quality = Ethos."
            },
            {
                type: "content",
                title: "The Wiki",
                content: "On the National Circuit, disclosure is mandatory.\n\nYou must post your case (The Wiki) before the round. The opponent reads it and preps.\n\n**Local:** Surprise is key. Ambush.\n**National:** Prep is key. Surprise is considered bad sportsmanship (and illegal in some rules).\n\nIf you don't post to the Wiki at the TOC, you might forfeit.",
                keyPoints: ["Disclosure", "The Wiki", "Prep vs Surprise"],
                tip: "Learn to use the NDCA Wiki. It is the library of modern debate."
            },
            {
                type: "practice",
                id: "l24-03-p1",
                title: "The Translation",
                description: "Translate Jargon.",
                practice: {
                    type: "text-edit",
                    targetSkill: "Adaptation",
                    text: "We turn the DA link and perm the CP.",
                    instructions: "Translate this into English for a Parent Judge.",
                    successCriteria: ["'We prove that our plan actually PREVENTS the bad outcome they fear.' (Turn Link)", "'And we can do both our plan and their suggestion at the same time.' (Perm CP)", "No jargon allowed."]
                }
            },
            {
                type: "content",
                title: "Summary: The Chameleon",
                content: "The Circuit is not a place; it is a style. Be a chameleon. Adapt your color to the environment. If you are green in a red room, you die. Survival belongs to the adaptable.",
                keyPoints: ["Chameleon", "Adapt", "Survival"],
                tip: "Ask the judge 'Do you have a paradigm?' before the round starts. Their answer tells you everything."
            }
        ]
    },
    {
        lessonId: "l24-04",
        pages: [
            {
                type: "content",
                title: "Introduction: The Tournament Landscape",
                content: "Debate is a seasonal sport (Sept-April). Tournaments happen almost every weekend, but they are not all created equal.\n\nKnowing the difference between a 'Local' and an 'Invitational' saves you money, time, and sanity. You must build a schedule that matches your goals. Do you want to be the State Champion? Or the National Champion? These are different paths.",
                keyPoints: ["Season", "Not all equal", "Goals vs Schedule"],
                tip: "Don't debate every weekend. You will burn out by February. Pick 2 weekends a month MAX."
            },
            {
                type: "content",
                title: "Local Tournaments (The League)",
                content: "These are run by your local league (e.g., 'Golden Gate Speech Association' or 'CFL').\n\n*   **Cost:** Low ($20-$40).\n*   **Travel:** Bus or Car (Same day). Sleep in your own bed.\n*   **Competition:** Variable. Beginners to State Champs.\n*   **Stakes:** Qualify for State Championship.\n\nThis is the bread and butter of your career. It is where you experiment with new arguments.",
                keyPoints: ["Low cost", "Local travel", "State Quals", "Lab"],
                tip: "Use Local tournaments to test risky strategies. If you lose, it costs $20. If you lose at Harvard, it costs $1000."
            },
            {
                type: "content",
                title: "Invitationals (The Majors)",
                content: "These are hosted by Universities (Harvard, Yale, Berkeley, Stanford).\n\n*   **Cost:** High ($150+ entry + Flights/Hotel).\n*   **Travel:** National. You miss school.\n*   **Competition:** The best in the nation.\n*   **Stakes:** TOC Bids (See next lesson).\n\nInvitationals are marathons. 3 days. 10+ rounds. Mental exhaustion is the real enemy.",
                keyPoints: ["Universities", "High cost", "Best competition", "Marathons"],
                tip: "Bring water and protein bars. You might not eat a real meal from 8 AM to 9 PM."
            },
            {
                type: "content",
                title: "The Financial Reality",
                content: "Debate can be expensive.\n\n*   **Local Season:** ~$300/year.\n*   **National Season:** ~$5,000 - $10,000/year (Flights, Hotels).\n\n**Strategy:** If you don't have a massive budget, focus on 'Regional Majors'—big tournaments within driving distance. You don't need to fly to Harvard to find good competition (unless you live in Boston).",
                keyPoints: ["Budgeting", "Regional Majors", "ROI"],
                tip: "Many tournaments offer 'Fee Waivers' for low-income students. ASK FOR THEM. It is not shameful; it is smart."
            },
            {
                type: "content",
                title: "Camp Tournaments",
                content: "Summer Camps (Simulacrums). These don't count for official rankings, but they set the 'Meta' for the year.\n\nWinning a Camp tournament puts a target on your back for the season. People will scout you. If you win 'Camp Nats', expect everyone to have answers to your case by September.",
                keyPoints: ["Summer", "Sets the Meta", "Scouting"],
                tip: "Hide your best arguments at Camp. Use 'Vanilla' cases to practice skills, and save the 'Secret Weapon' for the real season."
            },
            {
                type: "question",
                id: "l24-04-q1",
                question: "Why go to an Invitational (expensive) instead of a Local (cheap)?",
                options: [
                    { id: "a", text: "The pizza is better." },
                    { id: "b", text: "To define yourself against the best national talent and earn prestige." },
                    { id: "c", text: "To avoid your local rivals." },
                    { id: "d", text: "It is easier to win." }
                ],
                correctAnswer: "b",
                explanation: "Iron sharpens iron. You can be the King of your Local League but get destroyed at Harvard. You go to Invitationals to find your true ceiling and to get noticed by college recruiters.",
                tip: "If you want to debate in College, you MUST attend at least a few Invitationals."
            },
            {
                type: "content",
                title: "The Power Pools",
                content: "At big tournaments, round 1-2 might be random. But soon, 'Power Matching' (High-High) kicks in.\n\n*   **Round 1:** Random.\n*   **Round 3:** If you are 2-0, you hit another 2-0.\n*   **Round 6:** The 'Shark Tank'. Everyone is 4-1 or 5-0.\n\nThis means the tournament gets harder the longer you survive. A 4-2 record at Harvard is worth more than a 6-0 record at a Local.",
                keyPoints: ["Power Matching", "Shark Tank", "Gets harder"],
                tip: "Do not underestimate the 0-2 team in Round 3. They might be a great team that just had bad luck. Treat every opponent like a champion."
            },
            {
                type: "content",
                title: "The Break",
                content: "After preliminary rounds (usually 6), the top teams 'Break' to elimination rounds.\n\n*   **Triples/Doubles:** Top 64/32.\n*   **Octos:** Top 16.\n*   **Quarters:** Top 8.\n*   **Semis:** Top 4.\n*   **Finals:** Top 2.\n\n'Breaking' at a major tournament is a huge achievement. A 'Double-Octofinalist' at Berkeley is a resume line.",
                keyPoints: ["The Break", "Elimination rounds", "Achievement"],
                tip: "Elim rounds are 'Win or Go Home'. The pressure is different. You must be more aggressive."
            },
            {
                type: "content",
                title: "The Bubble",
                content: "The 'Bubble' is the cut-off point for breaking.\n\nUsually, you need a 4-2 record or better to break.\n\nGoing 3-3 is the heartbreak. You are 'On the Bubble', but usually pop. Every single round matters. One dropped argument in Round 1 can keep you out of finals in Round 6. **Speaker Points** often decide who breaks on the bubble.",
                keyPoints: ["The Bubble", "4-2 record", "Speaker Points"],
                tip: "Never be rude. High Speaker Points are your insurance policy against a 3-3 record."
            },
            {
                type: "question",
                id: "l24-04-q2",
                question: "The Schedule (Scenario): You have a Biology final on Monday. There is a Local tournament on Saturday and a Major Invitational (travel required) Fri-Mon. Which do you choose?",
                options: [
                    { id: "a", text: "The Major. Debate is life." },
                    { id: "b", text: "The Local. It allows study time on Sunday." },
                    { id: "c", text: "Neither. Study." },
                ],
                correctAnswer: "b",
                explanation: "Balance. Failing school to win a trophy is a bad trade. The Local keeps your skills sharp without destroying your GPA. Debate is a marathon, not a sprint.",
                tip: "Mental health > Trophies."
            },
            {
                type: "content",
                title: "Summary: Choose Your Battles",
                content: "Don't fight every war. Choose the tournaments that match your goals. If you want State, go Local. If you want National Fame, go Invitational. But always, always respect your budget and your sleep.",
                keyPoints: ["Choose battles", "Goals determine schedule"]
            }
        ]
    },
    {
        lessonId: "l24-05",
        pages: [
            {
                type: "content",
                title: "Introduction: The Holy Grail",
                content: "The **Tournament of Champions (TOC)** is the Super Bowl of high school debate.\n\nIt is held at the University of Kentucky every April.\n\nYou cannot just sign up. You must **Qualify** by earning 'Bids'. It is the most exclusive tournament in the world.",
                keyPoints: ["TOC", "Super Bowl", "Kentucky", "Bids"],
                tip: "Watch the TOC Finals recordings on YouTube. It is the highest level of debate play on the planet."
            },
            {
                type: "content",
                title: "What is a Bid?",
                content: "A 'Bid' is a qualification leg.\n\n*   **Gold Bid:** A full qualification leg. You usually need **2 Gold Bids** to qualify for the TOC.\n*   **Silver Bid:** A partial/secondary leg. (Sometimes used for a lower tier TOC bracket).\n\nBids are scarce. Only specific 'Bid Tournaments' award them, and only to teams that reach a certain level (e.g., Quarterfinals).",
                keyPoints: ["Gold Bid", "Silver Bid", "2 to Qualify"],
                tip: "A 'Bid Round' is the specific round where, if you win, you get the Bid. It is the most stressful round in debate."
            },
            {
                type: "content",
                title: "Tier Levels",
                content: "Bid Tournaments are tiered by difficulty.\n\n*   **Octos Bid:** You get a bid if you reach the Top 16. (Hard tournament - e.g. Harvard).\n*   **Quarters Bid:** You get a bid if you reach Top 8. (Medium).\n*   **Semis Bid:** Top 4. (Smaller tournament).\n*   **Finals Bid:** You must reach the Finals. (Small tournament).\n\n**Strategy:** Go to Octos Bids. You have 16 chances to get a bid, instead of 2. It is statistically safer.",
                keyPoints: ["Octos vs Finals", "Harder is easier", "Stats"],
                tip: "Don't chase Finals Bids. Winning a tournament is really, really hard. Reaching Octos is manageable."
            },
            {
                type: "content",
                title: "The Ghost Bid",
                content: "If you earn a bid but cannot attend the TOC, or if one partner drops, it is a 'Ghost Bid'.\n\nSometimes, if you have 1 Bid, you can apply for an 'At-Large' spot. The committee decides if you are good enough. It is stressful. Don't rely on it. Get 2 Bids.",
                keyPoints: ["Ghost Bid", "At-Large", "Committee"],
                tip: "Keep a 'Resume Document' of all your wins to submit for an At-Large application."
            },
            {
                type: "content",
                title: "The Gold Letter",
                content: "Qualifying for the TOC is a 'Gold Letter' on your college resume.\n\nIt proves you are in the top ~1% of debaters nationwide.\n\nEven if you go 0-6 at the TOC, just *getting there* is the victory. You are in the Hall of Fame.",
                keyPoints: ["College resume", "Top 1%", "Getting there is the win"]
            },
            {
                type: "question",
                id: "l24-05-q1",
                question: "You are in the 'Bid Round' (Octofinals). If you win, you get a Gold Bid. If you lose, you get nothing. The judge looks tired. What is the play?",
                options: [
                    { id: "a", text: "Go for high-speed technical tricks to confuse the opponent." },
                    { id: "b", text: "Slow down, focus on the biggest, simplest Impact, and ensure clarity." },
                    { id: "c", text: "Offer a draw." },
                    { id: "d", text: "Complain about the schedule." }
                ],
                correctAnswer: "b",
                explanation: "High stakes + Tired Judge = Risk Aversion. Don't get cute. Technical tricks often backfire when a judge is exhausted. Big, clear, undeniable impacts win bubble rounds. 'Even if they win X, we save the world.'",
                tip: "Write 'SLOW DOWN' on your flow paper in big letters."
            },
            {
                type: "content",
                title: "Bid Hunting",
                content: "Some teams travel across the country 'hunting' for easier Bids.\n\n\"Let's go to that small tournament in Florida; the competition is weaker.\"\n\nThis is expensive and risky. If you fly to Florida and lose, you wasted $1000. It is better to get good enough to win the hard bids near home.",
                keyPoints: ["Bid Hunting", "Expensive", "Get good locally"],
                tip: "Home field advantage is real. You sleep better, eat better, and know the local judges."
            },
            {
                type: "content",
                title: "The TOC Meta",
                content: "The TOC has its own Meta. Arguments that work in September are 'stale' by April.\n\nTo win the TOC, you need 'Breaking News'. You need a new argument that nobody has prepped for.\n\nTOC Prep begins months in advance. Teams hire researchers just for this tournament.",
                keyPoints: ["Breaking News", "New arguments", "Stale"]
            },
            {
                type: "content",
                title: "Beyond TOC: NSDA and NCFL",
                content: "TOC is for the Tech Circuit.\n\n*   **NSDA Nationals:** Huge, prestigious, but more Lay/Traditional. Qualify through local districts.\n*   **NCFL:** Catholic League Nationals. Very Traditional.\n\nYou can qualify for all three. The 'Triple Crown' (Winning local state, NSDA, and TOC) is legendary.",
                keyPoints: ["NSDA", "NCFL", "Triple Crown"],
                tip: "NSDA Nationals is a marathon (one week long). It requires endurance more than speed."
            },
            {
                type: "practice",
                id: "l24-05-p1",
                title: "The Bid Round Check",
                description: "Manage pressure.",
                practice: {
                    type: "speech",
                    targetSkill: "Mental Game",
                    topic: "Pressure",
                    instructions: "Visualize the Bid Round. Heart pounding. Write a mantra to calm down.",
                    successCriteria: ["'I have done the work.'", "'Just another round.'", "'Focus on the flow.'"]
                }
            },
            {
                type: "content",
                title: "Summary: The Climb",
                content: "The road to the TOC is a mountain. Most die on the slopes. But the view from the top is worth it. Even if you don't make it, the climb makes you stronger.",
                keyPoints: ["Mountain", "Climb", "Growth"]
            }
        ]
    },
    {
        lessonId: "l24-06",
        pages: [
            {
                type: "content",
                title: "Introduction: The Two-Headed Monster",
                content: "Most debaters have one case. This is a mistake. If you want to win Locals AND Circuits, you need a **Two-Headed Monster**.\n\nA Case that is flexible enough to be read slowly for parents OR passed quickly for tech judges. It is the Swiss Army Knife of cases.",
                keyPoints: ["Two-Headed Monster", "Flexible", "Swiss Army Knife"],
                tip: "Don't write two separate cases. Write one case with 'Expansion Packs'."
            },
            {
                type: "content",
                title: "The 'Shell' Strategy",
                content: "Write a Core Shell (The Skeleton).\n\n*   Inherency (The Problem)\n*   Plan (The Action)\n*   Solvency (The Fix)\n*   Advantage (The Good Stuff)\n\n**Adaptation:**\n*   **Lay Version:** Add Rhetoric. Read slowly. Explain links clearly. Use analogies.\n*   **Tech Version:** Add 5 more cards of Evidence. Read fast. Add a 'Pre-empt' block against common attacks.",
                keyPoints: ["Core Shell", "Lay Version", "Tech Version"],
                tip: "Highlight your evidence in two colors. Green for 'Read every round'. Yellow for 'Tech rounds only'."
            },
            {
                type: "content",
                title: "Collapsible Advantages",
                content: "Write a huge advantage with 4 scenarios.\n\n**Tech Round:** Read all 4 scenarios (Spread).\n**Lay Round:** Read only Scenario 1 (The simplest/biggest one) and expand on the story.\n\nThis saves you from writing two completely different cases. It is modular. You just 'Collapse' the advantage down to its core.",
                keyPoints: ["Collapsible", "Modular", "4 vs 1"],
                tip: "The 'Lay Scenario' should always be something tangible (e.g., Children, Health, Money). Abstract philosophy is for Tech."
            },
            {
                type: "content",
                title: "The 'K' Lite",
                content: "Tech judges love kritiks (Philosophical Challenges). Lay judges hate them.\n\n**The Solution:** 'K Lite'.\n\nRun the Kritik argument (e.g., Capitalism is bad), but frame it as a Disadvantage (DA).\n\n*   **Tech:** \"Here is the Cap K links...\"\n*   **Lay:** \"My opponent's plan gives money to corporations, which hurts the poor. Here is why...\"\n\nSame argument. Different label. You sneak the philosophy in under the radar.",
                keyPoints: ["K Lite", "Kritik as DA", "Labeling"],
                tip: "Never use the word 'Ontology' or 'Epistemology' in front of a Lay judge. You will sound pretentious."
            },
            {
                type: "content",
                title: "Vocabulary Swap",
                content: "Have synonyms ready.\n\n*   Tech: \"Turn\"\n*   **Lay:** \"The Reverse is true\"\n\n*   Tech: \"Non-Unique\"\n*   **Lay:** \"The problem already exists\"\n\n*   Tech: \"No Link\"\n*   **Lay:** \"They didn't cause this\"\n\nReal-time translation is the mark of a master.",
                keyPoints: ["Vocabulary Swap", "Real-time translation"],
                tip: "Drill this. Have a partner shout Tech terms, and you must instantly shout the Lay translation."
            },
            {
                type: "question",
                id: "l24-06-q1",
                question: "You checked the judge pairings. You have a 'Tabula Rasa' (Clean Slate) judge. How do you adapt?",
                options: [
                    { id: "a", text: "Debate exactly how you want." },
                    { id: "b", text: "Ask them 'Do you prefer Speed or Rhetoric?' before the round." },
                    { id: "c", text: "Assume they are Lay." },
                    { id: "d", text: "Assume they are Tech." }
                ],
                correctAnswer: "b",
                explanation: "The 'Tabula Rasa' judge claims to have no preference, but they always do. Asking specific paradigm questions (Speed, K's, Theory) before the round is the only safe play. B is the professional move.",
                tip: "If they say 'Anything goes', start at 70% speed and watch their face."
            },
            {
                type: "content",
                title: "Scouting and Adaptation",
                content: "How do you know what the judge wants? **Paradigm Pages** (Tabroom.com).\n\nEvery Circuit judge has a Paradigm. READ IT.\n\n\"I hate spreading.\" -> Slow down.\n\"I love K's.\" -> Run the K.\n\nIgnoring the Paradigm is suicide. It is like ignoring the prompt on an essay.",
                keyPoints: ["Paradigm", "Tabroom", "Read it"],
                tip: "If a judge has no paradigm, Google them. If they are a lawyer, use Logic. If they are a teacher, use Clarity."
            },
            {
                type: "content",
                title: "The Flex Cites",
                content: "Keep two descriptions for every card.\n\n*   **Tech:** \"Smith 24 says...\" (Efficiency).\n*   **Lay:** \"Professor Smith, the chair of economics at Yale, wrote in 2024 that...\" (Authority).\n\nUse the full description for Lay judges to build Ethos. Lay judges respect Titles; Tech judges respect Data.",
                keyPoints: ["Flex Cites", "Efficiency vs Authority", "Titles vs Data"],
                tip: "If the author has no credentials, don't read them to a Lay judge."
            },
            {
                type: "content",
                title: "Reading the Room (Mid-Round)",
                content: "Sometimes you guess wrong. You thought they were Tech, but they are scowling at your speed.\n\n**Pivot.**\n\n\"Judge, let me slow down and crystallize this point...\"\n\nThe ability to shift gears mid-race saves lives. Don't drive the car off the cliff just because you planned to go fast.",
                keyPoints: ["Pivot", "Shift gears", "Don't crash"],
                tip: "Apologize if you lose them. 'I apologize if I was moving too fast, let me clarify...'"
            },
            {
                type: "content",
                title: "Drill: The Elevator Pitch",
                content: "Take your complicated Case.\nExplain it in 30 seconds to a 5-year-old.\nExplain it in 30 seconds to a Theory Professor.\n\nIf you can't do the 5-year-old version, you don't understand your case. Confusion is not complexity; it is just confusion.",
                keyPoints: ["Elevator Pitch", "Feynman Technique"],
                tip: "Your 'Thesis Statement' should be understandable by a 5-year-old."
            },
            {
                type: "question",
                id: "l24-06-q2",
                question: "Paradigm Check (Scenario): Paradigm says: 'I am a math teacher. I vote on logic. I dislike aggressive confusion.' Case strategy?",
                options: [
                    { id: "a", text: "Run a high-level philosophy K." },
                    { id: "b", text: "Spread 400 words per minute." },
                    { id: "c", text: "Moderate speed, Syllogistic Logic, clear Impact Calculus." },
                ],
                correctAnswer: "c",
                explanation: "Math teacher = Logic. Dislike confusion = Clarity. This is a perfect profile for a clean, structural Policy case. No tricks. Just geometry of argumentation.",
                tip: "Math teachers love 'If P, then Q' arguments."
            },
            {
                type: "content",
                title: "Summary: Be Water",
                content: "Bruce Lee said: 'Be Water'. Water shapes itself to the vessel.\n\nIf the judge is a cup, become the cup. If the judge is a teapot, become the teapot.\n\nRigid debaters break. Fluid debaters win.",
                keyPoints: ["Be Water", "Bruce Lee", "Fluidity"]
            }
        ]
    },
    {
        lessonId: "l24-07",
        pages: [
            {
                type: "content",
                title: "Review: Advanced Rhetoric",
                content: "Unit 24 has been a journey from the Micro (Antithesis/Hyperbole) to the Macro (Circuit Logistics).\n\nYou now have the verbal tools to win the argument, and the logistical knowledge to win the tournament. You are no longer just a speaker; you are a strategic player in a game.",
                keyPoints: ["Micro to Macro", "Verbal tools", "Logistical knowledge", "Game player"]
            },
            {
                type: "content",
                title: "The Complete Package",
                content: "Combining Unit 22, 23, and 24 gives you a 'Master's Degree' in Debating Arts.\n\n*   **Voice** (Unit 22): How you sound.\n*   **Devices** (Unit 23): How you structure words.\n*   **Style** (Unit 24): How you adapt.\n\nNow, all that is left is the Content itself (Policy Debate).",
                keyPoints: ["Master's Degree", "Voice/Devices/Style", "Next: Content"],
                tip: "Review these 3 units before every tournament. They are your toolkit."
            },
            {
                type: "question",
                id: "l24-07-q1",
                question: "Final concept check: What is a 'Ghost Bid'?",
                options: [
                    { id: "a", text: "A scary argument." },
                    { id: "b", text: "A bid earned but not used/usable." },
                    { id: "c", text: "A bid you buy." },
                    { id: "d", text: "A fake bid." }
                ],
                correctAnswer: "b",
                explanation: "It counts for your resume (and sometimes for At-Large qualification) but isn't a direct automatic entry ticket if the team composition changes or you can't go."
            },
            {
                type: "question",
                id: "l24-07-q2",
                question: "Which rhetorical device is best for 'Defining a Choice'?",
                options: [
                    { id: "a", text: "Hyperbole" },
                    { id: "b", text: "Antithesis" },
                    { id: "c", text: "Metaphor" },
                    { id: "d", text: "Understatement" }
                ],
                correctAnswer: "b",
                explanation: "Antithesis helps contrasting two ideas. 'Liberty or Death'. It creates a binary choice for the judge. It forces a decision."
            },
            {
                type: "content",
                title: "The Road Ahead",
                content: "Units 21-24 were about **How to Say It**.\nUnits 25-30 are about **What to Say**.\n\nWe are entering the world of Policy Debate: Plans, Counterplans, Disadvantages, and Kritiks.\n\nGet your flowsheet ready. The speed is about to increase. The arguments will get technical. But you are ready.",
                keyPoints: ["Next: Policy Debate", "How vs What", "Speed increase"],
                tip: "Buy G-2 Pens and Legal Pads. You will need them for Unit 25."
            },
            {
                type: "content",
                title: "Final Assignment",
                content: "Open Tabroom.com.\nFind the next 3 tournaments in your area.\nRead the paradigms of the top 3 judges.\n\nResearch is not just for topics; it is for people. Know your audience before you ever walk into the room.",
                keyPoints: ["Tabroom", "Research people", "Know audience"]
            },
            {
                type: "content",
                title: "Conclusion",
                content: "The greatest rhetoric is the truth, well told. You have the tools. Now go find the truth.",
                keyPoints: ["Truth well told"]
            }
        ]
    }
];
