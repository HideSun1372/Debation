import { MultiPageLesson } from "./types";

export const UNIT_23_LESSONS: MultiPageLesson[] = [
    {
        lessonId: "l23-01",
        pages: [
            {
                type: "content",
                title: "Introduction: The Hidden Language",
                content: "Words are not just containers for meaning. They are musical notes. How you play the note changes the song.\n\n**Inflection** and **Emphasis** allow you to say one thing but mean another.\n\nConsider the sentence: \"I never said she stole my money.\"\n\nDepending on which word you stress, this sentence has 7 different meanings. This is the **Hidden Language**. A master debater speaks two languages at once: the Text (Logic) and the Subtext (Rhetoric).",
                keyPoints: ["Musical notes", "Inflection", "Text vs Subtext"],
                tip: "When you read evidence, do not just read the words. Read the *implication*. Stress the verb to imply action. Stress the noun to imply importance."
            },
            {
                type: "content",
                title: "The 7 Meanings Drill (Subtext)",
                content: "Let's break it down to see how powerful Emphasis is:\n\n1.  **I** never said she stole my money. (Implication: Someone else said it).\n2.  I **NEVER** said she stole my money. (Implication: Strong denial/Indignation).\n3.  I never **SAID** she stole my money. (Implication: I implied it, but didn't say it).\n4.  I never said **SHE** stole my money. (Implication: Someone else stole it).\n5.  I never said she **STOLE** my money. (Implication: She borrowed it).\n6.  I never said she stole **MY** money. (Implication: She stole his money).\n7.  I never said she stole my **MONEY**. (Implication: She stole my heart).\n\n**Lesson:** If you don't choose the emphasis, the audience will choose it for you (and they will choose wrong).",
                keyPoints: ["Drill", "Control the meaning", "Ambiguity is dangerous"],
                tip: "Practice your Case Tags. 'The **Economy** is failing' vs 'The Economy is **Failing**'. The first emphasizes the topic; the second emphasizes the disaster."
            },
            {
                type: "content",
                title: "Upward vs Downward Inflection",
                content: "We touched on this in Voice, but let's go deeper. This is about Status.\n\n*   **Upward (The Question):** Signals uncertainty, submission, or invitation. \"This is true?\"\n*   **Downward (The Command):** Signals certainty, dominance, or finality. \"This is true.\"\n\n**The 'Valley Girl' Problem:** Many speakers end every sentence with an upward inflection (High Rising Terminal). It makes them sound unsure of their own name. \"I'm John?\"\n\n**The Fix:** Visualize the period at the end of the sentence as a heavy stone dropping to the floor. Don't let it float.",
                keyPoints: ["Upward = Weak", "Downward = Strong", "High Rising Terminal"],
                tip: "Record yourself. If you hear upward inflection on a statement of fact, you are losing credibility points every second."
            },
            {
                type: "content",
                title: "The Circumflex Inflection (Sarcasm)",
                content: "This is the 'Up-Down' wave. It signals Sarcasm or Doubt.\n\n\"Oh, *suuuure* he did.\"\n\nUse this sparingly to mock an opponent's weak argument without using words. A well-placed \"Really?\" with a circumflex curve can destroy a 4-minute speech better than a paragraph of logic.\n\n**Warning:** Use this only on *arguments*, never on *people*. Mocking the argument is witty; mocking the person is bullying.",
                keyPoints: ["Curved inflection", "Sarcasm", "Mockery"],
                tip: "The 'Eyebrow Flash'. When you use the Circumflex, raise one eyebrow. It signals to the judge 'We both know this is nonsense'."
            },
            {
                type: "content",
                title: "Volume Dynamics",
                content: "Emphasis isn't just about pitch; it's about volume (Dynamics).\n\n**Crescendo:** Getting gradually louder. Builds excitement. Use for the buildup to an impact.\n**Decrescendo:** Getting gradually softer. Draws attention. Use for the final tragic statistic.\n**Subito Forte:** Sudden loudness. Wakes up the room.\n\n**Example:** \"We have tried (soft)... we have failed (medium)... and now we must **ACT** (loud).\"",
                keyPoints: ["Crescendo", "Decrescendo", "Subito Forte"],
                tip: "Mark your script with musical notation. '<' for louder, '>' for softer. Treat it like sheet music."
            },
            {
                type: "question",
                id: "l23-01-q1",
                question: "You want to emphasize that your opponent is LYING (without saying the word 'Liar'). Which word do you stress in: 'They claim to have evidence.'",
                options: [
                    { id: "a", text: "They" },
                    { id: "b", text: "Claim" },
                    { id: "c", text: "Have" },
                    { id: "d", text: "Evidence" }
                ],
                correctAnswer: "b",
                explanation: "Stressing 'CLAIM' implies: 'It is ONLY a claim. It is not a fact.' It casts doubt on the veracity of their statement. Stressing 'Evidence' (d) would sound like you are impressed by their evidence.",
                tip: "Elongate the vowel when you stress it. 'They claaaaaim to have evidence.' The stretch adds skepticism."
            },
            {
                type: "content",
                title: "Staccato vs Legato",
                content: "Musical terms apply to speech.\n\n*   **Staccato:** Short. Detached. Choppy. \"Cut. It. Out.\" (Use for aggression, urgency, or lists of failures).\n*   **Legato:** Smooth. Connected. Flowing. \"We are all in this together.\" (Use for unity, peace, or philosophy).\n\nIf you argue for War using Legato, you sound like a psychopath. If you argue for Peace using Staccato, you sound like a hypocrite. Match the sound to the meaning.",
                keyPoints: ["Staccato (Choppy)", "Legato (Smooth)", "Match the mood"],
                tip: "For Cross-Ex, use Legato when asking (to seem polite) and Staccato when answering (to seem firm)."
            },
            {
                type: "content",
                title: "The Strategic Pause (Caesura)",
                content: "In poetry, a midline pause is a Caesura.\n\n\"To be, || or not to be.\"\n\nThat pause is the fulcrum of the sentence. It balances the two sides.\n\nUse it when contrasting ideas. \"They promised wealth, || they delivered debt.\" The pause lets the contrast sink in. If you rush it, the contrast blurs.",
                keyPoints: ["Caesura", "Midline pause", "Fulcrum"],
                tip: "Tap your foot during the pause. Don't speak until your foot hits the floor."
            },
            {
                type: "content",
                title: "Emphasis for Clarity",
                content: "Sometimes emphasis is just about grammar.\n\n\"The **Government** should tax the **Rich**.\"\n\nIf you mumble the nouns, the plan is unclear. Always punch the **Subject** and the **Verb** and the **Object**. The adjectives can perform themselves.\n\n**The Mumble Test:** If I only hear the stressed words, do I still get the gist? \"Government... Tax... Rich...\" Yes.",
                keyPoints: ["Punch the Nouns/Verbs", "Grammatical clarity", "Mumble Test"],
                tip: "Underline the Subject-Verb-Object in your main contention. These are your 'Punch Words'."
            },
            {
                type: "practice",
                id: "l23-01-p1",
                title: "The Inflection Doctor",
                description: "Fix the tone.",
                practice: {
                    type: "text-analysis",
                    text: "We must fight for our freedom.",
                    targetSkill: "Inflection",
                    instructions: "How would you say this to sound: 1. Desperate? 2. Confident? 3. Sarcastic?",
                    successCriteria: ["Desperate: Upward inflection, fast pace.", "Confident: Downward inflection, heavy stress on 'Must' and 'Freedom'.", "Sarcastic: Circumflex on 'Fight', rolled eyes."]
                }
            },
            {
                type: "content",
                title: "Summary: The Music",
                content: "Don't just read the words. Conduct the orchestra. If you are boring, you are losing. You are not a Text-to-Speech robot; you are a performer.",
                keyPoints: ["Conduct", "Not a robot"]
            }
        ]
    },
    {
        lessonId: "l23-02",
        pages: [
            {
                type: "content",
                title: "Introduction: Painting with Words",
                content: "A **Metaphor** asserts that one thing *is* another thing. \"Time is money.\"\nA **Simile** says one thing is *like* another. \"Time is like money.\"\n\nMetaphors are stronger. They bypass the brain's logic filters and hit the imagination directly.\n\n**The Power:** \"My opponent's argument is a house of cards.\" We instantly know it is fragile, complicated, and will collapse, without needing a physics lecture. You transferred the properties of 'Cards' to 'Argument' instantly.",
                keyPoints: ["Metaphor (Is)", "Simile (Like)", "Instant Transfer"],
                tip: "Avoid 'Mixed Metaphors'. Don't say 'We need to step up to the plate and score a touchdown'. It breaks the spell."
            },
            {
                type: "content",
                title: "The Concept Metaphor (Lakoff)",
                content: "George Lakoff (Linguist) argues our brain implies metaphors for everything.\n\n*   **Argument is War:** We 'attack' points, 'defend' ground, 'shot down' ideas. (Aggressive).\n*   **Argument is Building:** We 'construct' a case, 'support' a claim, 'foundation' of logic. (Solid).\n\nIf you want to sound constructive, use Building words (\"Let's build on that\"). If you want to destroy, use War words (\"Let's demolish that\").",
                keyPoints: ["Lakoff", "Argument is War", "Argument is Building"],
                tip: "Use 'Journey' metaphors for the round itself. 'Walk with me down this path...' or 'We have arrived at the conclusion...'"
            },
            {
                type: "content",
                title: "Extended Metaphor (Allegory)",
                content: "This is taking a metaphor and running with it for the whole speech.\n\n\"This policy is a cancer.\"\n*   **Stage 1:** It started small (The Pilot Program).\n*   **Stage 2:** It metastasized to the states (The Rollout).\n*   **Stage 4:** Now it is threatening the vital organs of the constitution.\n*   **Conclusion:** We need surgery (The Ballot), not aspirin (The Counterplan).\n\nThis is incredibly hard to refute because it is so cohesive. It frames the entire debate.",
                keyPoints: ["Extended Metaphor", "Cancer", "Cohesion"],
                tip: "If you start an Extended Metaphor, you MUST finish it. Don't drop it halfway through."
            },
            {
                type: "question",
                id: "l23-02-q1",
                question: "Which is the strongest metaphor for a 'Fragile Peace Treaty'?",
                options: [
                    { id: "a", text: "The treaty is weak." },
                    { id: "b", text: "The treaty is like a thin stick." },
                    { id: "c", text: "This treaty is a dam made of paper, holding back a flood." },
                    { id: "d", text: "The treaty is not good." }
                ],
                correctAnswer: "c",
                explanation: "Option C is vivid. 'Dam made of paper' implies specific failure mode (soggy, collapse) and 'Flood' implies the result (catastrophe/war). It creates a movie in the judge's mind.",
                tip: "Good metaphors imply the Consequence (The Flood), not just the State (Fragile)."
            },
            {
                type: "content",
                title: "Catachresis: The Wrong Metaphor",
                content: "Sometimes, using a metaphor 'wrongly' creates a new meaning.\n\n\"Mow the grass.\" (Literal).\n\"Mow the people.\" (Catachresis - creates a horror image of war).\n\nUse this for shock value. \"My opponent is trying to **mute** the poverty.\" (Mixing Audio metaphor with visual problem). It implies they are treating humans like a TV remote.",
                keyPoints: ["Catachresis", "Shock value", "New meaning"],
                tip: "Use verbing. Turn nouns into verbs. 'They are **weaponizing** compassion.' 'They are **auctioning** our future.'"
            },
            {
                type: "content",
                title: "Dead Metaphors (Clichés)",
                content: "Avoid these at all costs.\n\n*   \"Low hanging fruit.\"\n*   \"At the end of the day.\"\n*   \"Think outside the box.\"\n\nThese used to be metaphors, but they died from overuse. They now mean nothing. Using them makes you sound like a corporate robot. Invent fresh images or use plain speech.\n\n**Better:** Instead of \"Low hanging fruit\", say \"The easy win.\"",
                keyPoints: ["Clichés", "Dead language", "Be fresh"],
                tip: "If you hear a cliché in your head, pause and ask: 'How would a poet say this?' Then say that."
            },
            {
                type: "practice",
                id: "l23-02-p1",
                title: "Metaphor Lab",
                description: "Create a fresh metaphor.",
                practice: {
                    type: "argument-builder",
                    targetSkill: "Metaphor",
                    topic: "National Debt",
                    instructions: "Describe the National Debt without using numbers. Use a metaphor of a messy house or a ticking bomb.",
                    successCriteria: ["'We are sweeping the bills under the rug.'", "'The basement is full of toxic waste.'", "Avoid clichés like 'digging a hole'."]
                }
            },
            {
                type: "content",
                title: "Summary: The Lens",
                content: "A metaphor is a lens. If I give you rose-colored glasses, the world looks pink. If I give you the 'War' metaphor, the debate looks violent. Choose the lens you want the judge to wear. If you don't provide a lens, they will bring their own (and it might not favor you).",
                keyPoints: ["Lens", "Rose-colored glasses", "Control the view"],
                tip: "The best metaphors are physical. Use things you can touch (Walls, Water, Fire, Stone)."
            }
        ]
    },
    {
        lessonId: "l23-03",
        pages: [
            {
                type: "content",
                title: "Introduction: The Body Speaks",
                content: "Studies suggest 55% of communication is non-verbal. In a debate, your body is screaming at the judge before you open your mouth.\n\nIf you slouch, you scream \"I am lazy.\"\nIf you fidget, you scream \"I am scared.\"\nIf you lean in, you scream \"This is important.\"\n\n**Congruence:** You must align your body with your words. If your words say 'Confident' but your hands say 'Terrified', the judge believes the hands.",
                keyPoints: ["55% Non-verbal", "Slouching", "Fidgeting", "Alignment"],
                tip: "Film yourself with the sound OFF. Do you look like a winner? If not, fix the body first."
            },
            {
                type: "content",
                title: "The Stance (The Base)",
                content: "Everything starts from the feet.\n\n*   **The Podium Lean:** Leaning on the podium makes you look tired and weak. Don't touch the podium. It is a shield, not a crutch.\n*   **The Fig Leaf:** Hands covering the groin. Signals protection/fear/submission.\n*   **The T-Rex:** Elbows tucked into ribs, tiny hand waves. Signals restriction.\n\n**Correct Stance:** Feet shoulder-width. Knees loose. Hands open at waist level (The 'Holding the Box' pose). This signals willingness to engage.",
                keyPoints: ["Podium Lean", "Fig Leaf", "T-Rex", "Open Stance"],
                tip: "Imagine a string pulling the top of your head to the ceiling. This straightens the spine naturally."
            },
            {
                type: "content",
                title: "Gestures: The Illustrator",
                content: "Hands should illustrate content.\n\n*   **The Chop:** Hand chops down. Use for precise facts or stops. \"We. Must. Stop.\"\n*   **The Give:** Open palms up. Use for offering a solution or asking a question. \"What is the answer?\"\n*   **The Scale:** Hands weighing two options. Use for comparison. \"On one hand... on the other...\"\n*   **The Claw:** Grasping air. Signals intensity/anger. Use sparingly for 'crushing' arguments.\n\nAgruement: Gestures must be **Above the Waist**. Anything below the waist looks like you are drowning.",
                keyPoints: ["Chop", "Give", "Scale", "Above the waist"],
                tip: "Don't choreograph too much. Let the hands move naturally with the thought. If you think about your hands, they will look robotic."
            },
            {
                type: "content",
                title: "Eye Contact: The Laser",
                content: "Don't scan the room like a lighthouse. That is fake.\n\n**Lock and Hold:** Look at one person (the judge) for a full sentence or thought. Then move to the next person.\n\n**The Triangle:** Look at Left Judge -> Look at Right Judge -> Look at Center Judge.\n\n**Why?** Eye contact triggers 'Oxytocin' (bonding). If you don't look at them, they don't bond with you. If you look at your paper, you bond with the paper.",
                keyPoints: ["No Lighthouse", "Lock and Hold", "Oxytocin"],
                tip: "Memorize your intro and outro perfectly so you can deliver them with 100% eye contact. No reading."
            },
            {
                type: "content",
                title: "Facial Expressions (Micro-expressions)",
                content: "Your face is the scoreboard. It reveals your true feelings.\n\n*   **While Speaking:** Match the emotion. Furrow brows for problems ('Concern'). Raise brows for solutions ('Hope').\n*   **While Listening:** This is critical. If your opponent speaks, do not scowl or laugh. Sit with a 'Neutral, Interested' face (The Poker Face). If you look terrified when they make a point, the judge assumes they scored a hit.\n\n**The Smirk:** Never smirk. It signals arrogance. Judges hate arrogance more than incompetence.",
                keyPoints: ["Face = Scoreboard", "Poker Face", "The Smirk"],
                tip: "Practice your 'Listening Face' in the mirror. It should look like you are watching a mild documentary. Interested, but not emotional."
            },
            {
                type: "question",
                id: "l23-03-q1",
                question: "Your opponent is making a terrible argument. What should you do?",
                options: [
                    { id: "a", text: "Laugh out loud so the judge knows it's bad." },
                    { id: "b", text: "Shake your head aggressively." },
                    { id: "c", text: "Look neutral or slightly confused, scribbling notes." },
                    { id: "d", text: "Facepalm." }
                ],
                correctAnswer: "c",
                explanation: "Option C is professional. It signals ' I am taking this seriously, but I don't quite see the logic.' Option A and D make you look like a jerk. Judges punish jerks.",
                tip: "Scribbling notes is a power move. It says 'I am busy defeating you'."
            },
            {
                type: "content",
                title: "Proxemics: Usage of Space",
                content: "If you have a wireless mic or no podium, **MOVE**.\n\n**The Triangle Walk:**\n1.  Start Center (Intro).\n2.  Move Right for Point 1.\n3.  Move Left for Point 2.\n4.  Return Center for Conclusion.\n\nMovement signals a transition. It physically moves the judge's eyes, which resets their attention span.",
                keyPoints: ["Triangle Walk", "Move on transitions", "Reset attention"],
                tip: "Do not pace (walk back and forth aimlessly). That signals anxiety. Move with purpose, then plant your feet."
            },
            {
                type: "content",
                title: "The Pen as a Prop",
                content: "Holding a pen is fine. Clicking it is death.\n\n*   **Good:** Use the pen as a pointer to emphasize a chop gesture.\n*   **Bad:** Clicking, spinning, chewing.\n\n**The Magic Trick:** If you want to signal openness, put the pen down. Showing empty palms is a primal signal of 'Truth' (I have no weapons). Use this for the final appeal.",
                keyPoints: ["Pen = Pointer", "Clicking = Death", "Empty palms"],
                tip: "Buy a silent pen (twist top). It saves you from your own nervous habits."
            },
            {
                type: "practice",
                id: "l23-03-p1",
                title: "The Statue Challenge",
                description: "Eliminate fidgeting.",
                practice: {
                    type: "speech",
                    targetSkill: "Delivery",
                    topic: "Stillness",
                    instructions: "Deliver a 1-minute speech while standing perfectly still. Only your mouth can move. No hands. No feet.",
                    successCriteria: ["Zero unnecessary movement", "Feel the tension", "Learn to ground yourself"]
                }
            },
            {
                type: "content",
                title: "Summary: Total Communication",
                content: "When your Body, Voice, and Words all say the same thing, you achieve **Congruence**. Congruence is indistinguishable from Truth. If even one element is off (e.g., Shaking hands while saying 'I am confident'), the lie is revealed.",
                keyPoints: ["Congruence", "Truth"],
                tip: "Fake it 'til you make it. If you stand like a winner, your brain releases testosterone and you *become* a winner."
            }
        ]
    },
    {
        lessonId: "l23-04",
        pages: [
            {
                type: "content",
                title: "Introduction: The Bridge of Understanding",
                content: "An **Analogy** creates a relationship of resemblance between two things. A : B :: C : D.\n\n\"A Fish is to Water as a Human is to Air.\"\n\nAnalogies are the supreme tool for explaining complex technical policies to Lay judges. If you can't explain your tax plan with an analogy, you don't understand it well enough to win.\n\n**The Rule:** Connect the Unknown (Your Argument) to the Known (Something the judge deals with every day, like money, family, or cars).",
                keyPoints: ["A:B :: C:D", "Explain complexity", "Lay judge tool", "Connect Unknown to Known"],
                tip: "Start an analogy with the phrase 'Judge, think of it this way...' It signals a shift from 'Math Mode' to 'Story Mode'."
            },
            {
                type: "content",
                title: "Literal vs Figurative Analogies",
                content: "*   **Literal Analogy:** Comparing two things of the same class.\n    *   \"Prohibition failed for Alcohol (1920s), so it will fail for Marijuana (today).\" (Both are drug bans).\n    *   **Strength:** High logical proof. It worked before, it will work again.\n*   **Figurative Analogy:** Comparing two things of different classes.\n    *   \"The National Debt is like a Credit Card.\" (One is macro-econ, one is plastic).\n    *   **Strength:** High explanatory power. It helps people understand the concept.",
                keyPoints: ["Literal (Same class)", "Figurative (Different class)", "Proof vs Explanation"],
                tip: "Use Literal Analogies for Tech Judges. Use Figurative Analogies for Lay Judges."
            },
            {
                type: "content",
                title: "The Difference: Analogy vs Metaphor",
                content: "Students often confuse them.\n*   **Metaphor:** \"My opponent is a dinosaur.\" (Fusion. A = B).\n*   **Analogy:** \"My opponent's policy is like a dinosaur; it is big, old, and about to go extinct.\" (Comparison. A is like B because of X, Y, Z).\n\nAnalogy explains *why*. Metaphor just asserts *what*.",
                keyPoints: ["Fusion vs Comparison", "The Why"],
                tip: "If you need to make a logical argument, use Analogy. If you need to make an emotional impact, use Metaphor."
            },
            {
                type: "content",
                title: "The 'Credit Card' Analogy (Deep Dive)",
                content: "Why is this the most famous political analogy?\n\nBecause everyone understands credit cards. \"If you spend more than you earn, the bank takes your house.\"\n\n**The Counter-Analogy (Breaking the Link):** You beat an analogy by extending it or breaking it.\n\"Actually, the government is not a household. It prints its own money. A household cannot print dollars. If I could print money in my basement, I would never go bankrupt. The analogy fails.\"",
                keyPoints: ["Household analogy", "Printing press", "Breaking the link"],
                tip: "To kill an analogy, find the 'Disanalogy' (The one feature that is different). Then argue that feature is the most important one."
            },
            {
                type: "content",
                title: "Argument by Precedent (Stare Decisis)",
                content: "This is a form of detailed Literal Analogy.\n\n\"We should do X because we did Y before, and it worked.\"\n\n**Debate Application:**\n\"We are worried about Universal Healthcare? Look at the Fire Department. That is 'Universal Firecare'. You don't pay a credit card when your house burns down; the government pays. We aren't proposing a radical new idea. We are proposing to do for heavy bodies what we already do for burning houses.\"",
                keyPoints: ["Precedent", "Universal Firecare", "It worked before"],
                tip: "Use the phrase 'We have crossed this bridge before.' It makes your plan seem safe and tested."
            },
            {
                type: "question",
                id: "l23-04-q1",
                question: "Which is a 'False Analogy' (Fallacy)?",
                options: [
                    { id: "a", text: "Comparing the Vietnam War to the Iraq War." },
                    { id: "b", text: "Comparing owning a gun to owning a car (both dangerous tools)." },
                    { id: "c", text: "Comparing employees to slaves." },
                    { id: "d", text: "Comparing a school to a workplace." }
                ],
                correctAnswer: "c",
                explanation: "This is standard False Analogy. Employees can quit; Slaves cannot. The defining feature (Consent) is absent in one. It offends the logic and the audience. Comparing Gun/Car is valid (both licensed tools). Comparing Vietnam/Iraq is valid (both counter-insurgencies).",
                tip: "If an analogy insults the victim (e.g. comparing taxes to rape), it is a False Analogy and an Ethos suicide. Never do it."
            },
            {
                type: "content",
                title: "Testing an Analogy",
                content: "Before using an analogy, give it the **Stress Test**:\n\n1.  **Similarities:** Are the key features actually shared?\n2.  **Differences:** Are the differences relevant to the conclusion?\n\nIf the differences outweigh the similarities, the analogy will explode in your face during Cross-Ex.\n\n**Example:** \"School is like Prison.\" (Both have bells, schedules, confined spaces). **Difference:** You go home at night. You aren't murdered. Result: Weak Analogy.",
                keyPoints: ["Stress Test", "Weigh similarities vs differences"],
                tip: "Admit the difference yourself. 'Now, obviously school isn't exactly prison, but the structure of control is identical.'"
            },
            {
                type: "content",
                title: "The Reductio Analogy",
                content: "Use analogy to show absurdity.\n\nOpponent: \"We should ban cars because they are dangerous.\"\nYou: \"That is like saying we should ban forks because they make people fat. The tool is not the cause; the usage is.\"\n\nBy shifting the domain to 'Forks' (which are absurd to ban), you make the 'Ban' logic look silly without attacking it directly.",
                keyPoints: ["Reductio", "Forks make you fat", "Shift domain"],
                tip: "Use this in Rebuttal. 'My opponent's logic implies X. If we followed that logic, we would have to [Absurd Result].'"
            },
            {
                type: "practice",
                id: "l23-04-p1",
                title: "The Analogy Defeat",
                description: "Break the link.",
                practice: {
                    type: "argument-builder",
                    targetSkill: "Analogy",
                    topic: "Gun Control",
                    instructions: "Opponent says: 'Cars kill people too, but we don't ban them. We license them. So we should just license guns.' Defeat this analogy using the 'Primary Purpose' argument.",
                    successCriteria: ["Primary Purpose of Car = Transport.", "Primary Purpose of Gun = Killing/Injuring.", "Therefore, the risk profile is totally different."]
                }
            },
            {
                type: "content",
                title: "Summary: The Universal Translator",
                content: "Analogy is the Universal Translator. It takes 'Debate Speak' and turns it into 'Human Speak'. Use it to bring the Lay judge onto your boat. If they understand the story, they will accept the math.",
                keyPoints: ["Universal Translator", "Human Speak"],
                tip: "A bad analogy is better than no explanation. A good analogy draws a map for the judge's brain."
            }
        ]
    },
    {
        lessonId: "l23-05",
        pages: [
            {
                type: "content",
                title: "Introduction: The Rhythm of Persuasion",
                content: "Repetition is not redundancy. Redundancy is boring (\"I am hungry and I want food\"). Repetition is **Rhythm** (\"I want food. I want it now. I want it all.\").\n\nWhen a phrase repeats, it gains weight. It becomes a chant. It becomes a memory.\n\n\"I have a dream\" was repeated 8 times in MLK's speech. Imagine if he only said it once. It would be a forgettable sentence.",
                keyPoints: ["Repetition != Redundancy", "Gains weight", "MLK"],
                tip: "Pick ONE phrase to be your 'Theme'. Repeat it in the Intro, Con 1, Con 2, and Conclusion. It anchors the round."
            },
            {
                type: "content",
                title: "Anaphora (The Hammer)",
                content: "**Anaphora** is repeating a phrase at the *start* of successive sentences.\n\n*   \"**We shall fight** on the beaches.\"\n*   \"**We shall fight** on the landing grounds.\"\n*   \"**We shall fight** in the fields.\"\n\nEffect: Determination. Relentlessness. A drum beat of war. It feels like waves crashing on the shore, one after another.",
                keyPoints: ["Anaphora", "Start of sentence", "Churchill", "Waves"],
                tip: "Use Anaphora for your Plan Mandates or Solvency logic. 'The Plan solves poverty. The Plan solves crime. The Plan solves despair.'"
            },
            {
                type: "content",
                title: "Epistrophe (The Nail)",
                content: "**Epistrophe** is repeating a phrase at the *end* of successive sentences.\n\n*   \"There is no **problem**.\"\n*   \"There is no Southern **problem**.\"\n*   \"There is no Northern **problem**.\"\n*   \"There is only an American **problem**.\"\n\nEffect: Focus. Conversion. All roads lead to one destination (The Problem). It hammers the point home.",
                keyPoints: ["Epistrophe", "End of sentence", "LBJ", "Focus"],
                tip: "Use Epistrophe for your Impacts. 'If we fail, we lose **justice**. If we wait, we lose **justice**. If we compromise, we lose **justice**.'"
            },
            {
                type: "content",
                title: "The Tricolon (Rule of Three)",
                content: "The human brain loves the number 3. It is the smallest number required to create a pattern.\n\n*   \"Life, Liberty, and the Pursuit of Happiness.\"\n*   \"Government of the people, by the people, for the people.\"\n*   \"Blood, Sweat, and Tears.\"\n\nTwo is a comparison. Three is a complete geometric shape (Triangle). Four is just a list.\n\n**Strategy:** Always group your adjectives in threes. \"This plan is unsafe, unjust, and un-American.\"",
                keyPoints: ["Rule of Three", "Pattern", "Tricolon", "Triangle"],
                tip: "When you list contentions, try to have 3. If you have 2, split one. If you have 4, combine two. 3 is the magic number."
            },
            {
                type: "content",
                title: "Parallelism (Grammar Ease)",
                content: "Structure your sentences to match.\n\n*   **Bad:** \"We like hiking, to swim is fun, and riding bikes.\"\n*   **Good (Parallel):** \"We like hiking, swimming, and biking.\"\n\nParallel structure reduces cognitive load for the judge. It sounds 'right' and balanced.\n\n**Debate Use:** \"They argue for cost; we argue for value. They argue for today; we argue for tomorrow.\"",
                keyPoints: ["Parallel structure", "Cognitive load", "Balance"],
                tip: "Use Parallelism in comparisons for side-by-side contrast. 'They built walls; we built bridges.'"
            },
            {
                type: "question",
                id: "l23-05-q1",
                question: "Which of these famous quotes utilizes a 'Tricolon'?",
                options: [
                    { id: "a", text: "I came, I saw, I conquered." },
                    { id: "b", text: "To be or not to be." },
                    { id: "c", text: "Ask not what your country can do for you." },
                    { id: "d", text: "Four score and seven years ago." }
                ],
                correctAnswer: "a",
                explanation: "Veni, Vidi, Vici. Three verbs. Short. Punchy. It implies completeness. Start, Middle, End.",
                tip: "If you want to sound definitive, use three short words. 'Done. Dusted. Delivered.'"
            },
            {
                type: "content",
                title: "Chiasmus (The Mirror)",
                content: "Reversing the structure of a sentence.\n\n*   \"Ask not what your **country** can do for **you**...\"\n*   \"...ask what **you** can do for your **country**.\"\n\nAB -> BA.\n\nEffect: Wisdom. Balance. It sounds like a timeless truth. Use this for your Thesis Statement or Moral Framework.",
                keyPoints: ["Chiasmus", "Mirror structure", "AB -> BA", "JFK"],
                tip: "Chiasmus is hard to write on the fly. Pre-write one for your specific topic and memorize it."
            },
            {
                type: "content",
                title: "Polysyndeton vs Asyndeton",
                content: "*   **Polysyndeton:** Using 'And' every time. \"We have ships **and** men **and** money **and** resolve.\" (Effect: Overwhelming abundance).\n*   **Asyndeton:** No conjunctions. \"We have ships, men, money, resolve.\" (Effect: Speed, efficiency, inevitability).\n\nUse Polysyndeton when listing Impacts (make them feel endless). Use Asyndeton when listing Plan Steps (make them feel fast and easy).",
                keyPoints: ["Polysyndeton (Many Ands)", "Asyndeton (No Ands)", "Abundance vs Speed"],
                tip: "Speed up your voice for Asyndeton. Slow down for Polysyndeton."
            },
            {
                type: "content",
                title: "Diacope (Interruption)",
                content: "Repetition broken by a word.\n\n\"The horror... the horror.\"\n\"Bond. James Bond.\"\n\nIt puts a spotlight on the repeated word. \"Free at last, free at last, thank God almighty, we are free at last.\"\n\nIt emphasizes the *persistence* of the concept.",
                keyPoints: ["Diacope", "Spotlight", "Bond"],
                tip: "This is great for dramatic pauses. Say the word. Pause. Say filler. Pause. Say the word again."
            },
            {
                type: "content",
                title: "Drill: The Rewrite",
                content: "Rewrite this boring sentence using Anaphora:\n\n\"We need to fix schools, and the roads are bad, and also healthcare is a mess.\"\n\n**Rewrite:**\n\"**We have failed** our schools. **We have failed** our roads. **We have failed** our hospitals.\"\n\nSee how the second one sounds like a campaign speech? It turns a laundry list into an indictment.",
                keyPoints: ["Rewrite Drill", "Boring to Epic"],
                tip: "Find the 'Power Verb' (Failed, Betrayed, Forgotten) and repeat it."
            },
            {
                type: "practice",
                id: "l23-05-p1",
                title: "The Rule of Three Builder",
                description: "Create a Tricolon.",
                practice: {
                    type: "text-edit",
                    targetSkill: "Tricolon",
                    text: "This plan is bad.",
                    instructions: "Rewrite this using a negative Tricolon (3 adjectives) to make it sound catastrophic.",
                    successCriteria: ["Dangerous, Delusional, and Destructive.", "Costly, Corrupt, and Cruel.", "Rhythm must match."]
                }
            },
            {
                type: "content",
                title: "Summary: The Heartbeat",
                content: "Repetition creates the heartbeat of the speech. If you have no repetition, the speech flatlines. Give it a pulse. The audience breathes in your rhythm.",
                keyPoints: ["Pulse", "Flatline", "Rhythm"],
                tip: "Music is math. Rhetoric is music. Therefore, Rhetoric is math."
            }
        ]
    },
    {
        lessonId: "l23-06",
        pages: [
            {
                type: "content",
                title: "Introduction: The Weaponized Question",
                content: "A **Rhetorical Question** is a question not meant to be answered out loud.\n\nIt forces the audience to answer it in their own mind.\n\n\"Do we want to live in a world where children starve?\"\n\nThe judge thinks \"No.\"\n\nCongratulations. You just forced the judge to agree with you. You bypassed their skepticism. When *you* say a fact, they can doubt it. When *they* think a fact, they believe it.",
                keyPoints: ["Don't answer out loud", "Judge answers in mind", "Forced agreement"],
                tip: "Use Rhetorical Questions to wake up a sleeping judge. The human brain is hard-wired to pay attention when asked a question."
            },
            {
                type: "content",
                title: "Hypophora (Ask and Answer)",
                content: "This is where the speaker asks a question and then immediately answers it.\n\n\"Why do they oppose this bill? Is it conflict of interest? **Yes.** Is it stupidity? **Maybe.** Is it malice? **Likely.**\"\n\nEffect: You control the dialogue. You simulate a debate where you play both sides, and you win both sides.",
                keyPoints: ["Hypophora", "Ask and Answer", "Control the dialogue"],
                tip: "Use Hypophora to structure your Rebuttal. 'What is their first point? Costs. Here is why they are wrong...'"
            },
            {
                type: "content",
                title: "The Erotesis (Passionate Question)",
                content: "A question asked in anger or disbelief.\n\n\"How long, O Catiline, will you abuse our patience?\"\n\nThis implies the answer is obvious and shameful. Use this for heavy Cross-Examination or the Final Rebuttal. \"Does the Affirmative truly believe that money is worth more than life?\"",
                keyPoints: ["Erotesis", "Anger/Disbelief", "Shame"],
                tip: "Do not wait for an answer. Move immediately to the next sentence. The silence *is* the answer."
            },
            {
                type: "content",
                title: "The Trap Question (The Void)",
                content: "Designing a question with no good answer.\n\n\"Judge, ask yourself: If their plan is so good, why has no country on Earth adopted it?\"\n\nIf the judge tries to answer, they find a void. That void is your point. (The answer is: 'Because the plan sucks').",
                keyPoints: ["The Void", "No good answer", "Trap"],
                tip: "Pause for 3 full seconds after a Trap Question. Let the judge search for the answer and fail to find it."
            },
            {
                type: "content",
                title: "Overusing Questions (The Nag)",
                content: "Warning: Do not ask too many questions.\n\n\"Why are we here? What is the goal? Who is to blame?\"\n\nThe judge will think: \"I don't know, you tell me! That's your job!\"\n\n**Rule:** For every question you ask, provide three answers/statements. Questions are spice, not the meal.",
                keyPoints: ["Don't be annoying", "Answers > Questions", "Spice not Meal"],
                tip: "Never end a Constructive Speech with a question. End with a Command ('Vote Neg')."
            },
            {
                type: "question",
                id: "l23-06-q1",
                question: "Which usage of a rhetorical question is WEAK?",
                options: [
                    { id: "a", text: "Hypophora: Asking then answering." },
                    { id: "b", text: "Erotesis: Asking in indignation." },
                    { id: "c", text: "Uncertainty: 'I wonder what the data suggests?'" },
                    { id: "d", text: "Trap: Asking why no one else does it." }
                ],
                correctAnswer: "c",
                explanation: "Never ask a question that implies YOU don't know the answer. 'I wonder' signals ignorance. You are the expert. You should KNOW what the data suggests.",
                tip: "If you don't know, don't ask. If you do know, ask then answer."
            },
            {
                type: "content",
                title: "The 'Statement-Question' in Cross-Ex",
                content: "In CX, you can't make speeches. But you can make Statement-Questions.\n\n\"Are you aware that the 2024 IPCC report specifically contradicts your claim on page 50?\"\n\nThis is not really a question. It is a fact wrapped in a question mark. It destroys their credibility even if they answer 'No' (Then they are ignorant) or 'Yes' (Then they are lying).",
                keyPoints: ["CX trick", "Fact wrapped in question mark", "Double bind"],
                tip: "Start with 'Is it true that...' or 'Are you aware that...'. These are the gateways to Statement-Questions."
            },
            {
                type: "content",
                title: "Drill: The Conversion",
                content: "Turn these statements into Rhetorical Questions.\n\n1.  \"This is unfair.\" -> \"Where is the fairness in this?\"\n2.  \"It is too expensive.\" -> \"At what price do we say 'enough'?\"\n3.  \"They are lying.\" -> \"Do they take us for fools?\"\n\nNotice how the question version feels more emotional and engaging. It invites the judge to participate.",
                keyPoints: ["Conversion Drill", "More emotional", "Invitation"],
                tip: "Use 'We'. 'Do *we* accept this?' instead of 'Do *you* accept this?'. It makes you and the judge a team."
            },
            {
                type: "practice",
                id: "l23-06-p1",
                title: "Hypophora Master",
                description: "Ask and Answer.",
                practice: {
                    type: "speech",
                    targetSkill: "Delivery",
                    topic: "Why vote Aff?",
                    instructions: "Write a paragraph using Hypophora to explain why your team wins.",
                    successCriteria: ["Ask: 'Why vote Aff?'", "Answer 1: 'Because we save lives.'", "Answer 2: 'Because we follow the law.'", "Answer 3: 'Because logic demands it.'"]
                }
            },
            {
                type: "content",
                title: "Summary: The Hook",
                content: "A statement pushes at the audience. A question hooks into them and pulls. Use the hook to pull the judge over to your side.",
                keyPoints: ["Push vs Pull", "The Hook"],
                tip: "The ultimate question is 'So what?'. Answer it before the judge asks it."
            }
        ]
    },
    {
        lessonId: "l23-07",
        pages: [
            {
                type: "content",
                title: "Review: The Master Toolbox",
                content: "Unit 23 is complete. You now possess the tools of the ancient masters.\n\n*   **Inflection:** The music. (Status/Sarcasm).\n*   **Metaphor:** The image. (Lens/Framing).\n*   **Body:** The statue. (Congruence).\n*   **Analogy:** The bridge. (Unknown to Known).\n*   **Repetition:** The drum. (Anaphora/Tricolon).\n*   **Questions:** The hook. (Hypophora/Trap).\n\nUsed together, these creates 'Eloquence'. Eloquence is not just sound; it is power.",
                keyPoints: ["Eloquence", "Toolbox summary", "Power"],
                tip: "Print this list. Before every round, pick ONE tool to focus on. 'This round, I will focus on Anaphora'."
            },
            {
                type: "content",
                title: "The Rhetorical Analysis (Defense)",
                content: "When you listen to opponents now, stop listening to *what* they say. Listen to *how*.\n\n\"Ah, she used a Tricolon there. Nice rhythm.\"\n\"He is using a bad Metaphor. I can break that.\"\n\"She is using Anaphora to hide a weak warrant. I will expose the logic gap.\"\n\nDeconstruct their magic. It makes you immune to it. You see the strings on the puppet.",
                keyPoints: ["Deconstruct magic", "Immunity", "See strings"],
                tip: "Call it out in Rebuttal. 'My opponent uses beautiful metaphors to hide ugly facts.'"
            },
            {
                type: "question",
                id: "l23-07-q1",
                question: "Final Challenge: Identify the device. 'Ask not what your country can do for you...'",
                options: [
                    { id: "a", text: "Anaphora" },
                    { id: "b", text: "Chiasmus" },
                    { id: "c", text: "Metaphor" },
                    { id: "d", text: "Asyndeton" }
                ],
                correctAnswer: "b",
                explanation: "It reverses the structure (AB -> BA). Country/You -> You/Country. It is the classic example of Chiasmus.",
                tip: "Chiasmus is the 'Mirror'. Look for the reflection."
            },
            {
                type: "question",
                id: "l23-07-q2",
                question: "Which device is best for explaining a complex Crypto-currency policy to a Lay judge?",
                options: [
                    { id: "a", text: "Tricolon" },
                    { id: "b", text: "Rhetorical Question" },
                    { id: "c", text: "Analogy" },
                    { id: "d", text: "Staccato Rhythm" }
                ],
                correctAnswer: "c",
                explanation: "Analogy. 'Crypto is like digital gold.' or 'Crypto is like a public ledger.' You bridge the unknown (Crypto) with the known (Gold/Ledger). The other devices just add style, not understanding.",
                tip: "When in doubt, use 'Like'. 'It's like X'. It saves you every time."
            },
            {
                type: "content",
                title: "Style vs Substance",
                content: "A warning: Style without Substance is sophistry. It is empty lies.\n\nSubstance without Style is boring. It is ignored truth.\n\nYou need **Substance DELIVERED with Style**.\n\nUse Unit 21 (Logic) for the Substance. Use Unit 23 (Rhetoric) for the Style. Marry them, and you win.",
                keyPoints: ["Sophistry", "Boring", "The Combination"],
                tip: "Logic is the bullet. Rhetoric is the gun. You need both."
            },
            {
                type: "practice",
                id: "l23-07-p1",
                title: "Final Exercise: The Chef",
                description: "Mix the ingredients.",
                practice: {
                    type: "speech",
                    targetSkill: "Delivery",
                    topic: "Pizza",
                    instructions: "Write a 30-second speech on 'Why Pizza is the Best'.\n\nInclude:\n1.  One Metaphor ('Disc of joy').\n2.  One Tricolon ('Cheese, sauce, and crust').\n3.  One Rhetorical Question ('Who can deny it?').\n\nIf you can do it for Pizza, you can do it for Peace.",
                    successCriteria: ["Used Metaphor", "Used Tricolon", "Used Question", "Sounded Passionate by accident"]
                }
            },
            {
                type: "content",
                title: "Conclusion",
                content: "Go forth and speak. But speak beautifully. The world has enough noise. Be the music.",
                keyPoints: ["Speak beautifully", "Be the music"],
                tip: "Your voice is a gift. Don't waste it on mumbling."
            }
        ]
    }
];
