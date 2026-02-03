import { MultiPageLesson } from "./types";

export const UNIT_21_LESSONS: MultiPageLesson[] = [
    {
        lessonId: "l21-01",
        pages: [
            {
                type: "content",
                title: "Introduction: The Hidden Error",
                content: "Welcome to Advanced Logic. In earlier units, we discussed informal fallacies like Ad Hominem or Slippery Slope. These are errors in *content*—the premises are weak.\n\nToday, we look at **Formal Fallacies**. These are errors in *structure*. You can have perfect premises, true facts, and great evidence, but if the mathematical structure of your logic is broken, the argument is invalid.\n\nThe most common and dangerous of these is **Denying the Antecedent**.",
                keyPoints: ["Formal Logic vs Informal Logic", "Structure vs Content", "Validity is Mathematical"]
            },
            {
                type: "content",
                title: "Review: The Valid Laws",
                content: "To understand the error, we must remember the Truth. The standard conditional statement is:\n\n**If P, then Q.**\n*   P is the **Antecedent** (The 'If' part).\n*   Q is the **Consequent** (The 'Then' part).\n\nThere are two VALID ways to use this:\n1.  **Modus Ponens:** P is true -> Therefore Q is true.\n2.  **Modus Tollens:** Q is false -> Therefore P is false.",
                keyPoints: ["Antecedent = First part", "Consequent = Second part", "Modus Ponens/Tollens are valid"]
            },
            {
                type: "content",
                title: "The Fallacy Defined",
                content: "**Denying the Antecedent** happens when you say:\n\n1.  If P, then Q.\n2.  **Not P** (You deny the antecedent).\n3.  Therefore, **Not Q**.\n\nThis *feels* right, but it is **100% WRONG**.\n\n**Example:**\n1.  If I am a dog, I am a mammal.\n2.  I am NOT a dog.\n3.  Therefore, I am NOT a mammal.\n\nWait... I could be a cat. Or a human. Being 'Not a dog' does not prove I am 'Not a mammal'.",
                keyPoints: ["If P -> Q", "Not P -> Not Q (INVALID)", "The Cat Counterexample"]
            },
            {
                type: "content",
                title: "Why Our Brains Get Tricked",
                content: "Why do we fall for this? Because we confuse **Sufficiency** with **Necessity**.\n\n\"If it rains, the grass gets wet.\"\n*   Rain is *sufficient* to make grass wet.\n*   But rain is NOT *necessary* to make grass wet. (I could use a sprinkler).\n\nWhen you deny the antecedent (\"It didn't rain\"), you are ignoring all the *other* ways the result could happen (The sprinkler).",
                keyPoints: ["Sufficiency vs Necessity", "The Sprinkler Effect", "Don't confuse inputs"]
            },
            {
                type: "question",
                id: "l21-01-q1",
                question: "Evaluate this argument: 'If you study hard, you will pass. You did not study hard. Therefore, you will not pass.'",
                options: [
                    { id: "a", text: "Valid" },
                    { id: "b", text: "Invalid: Denying the Antecedent" },
                    { id: "c", text: "Invalid: Affirming the Consequent" },
                    { id: "d", text: "Sound" }
                ],
                correctAnswer: "b",
                explanation: "This is invalid. You might pass because you are lucky, or already knew the material. Lack of studying (Not P) does not guarantee failure (Not Q)."
            },
            {
                type: "content",
                title: "Real World Example: Crime",
                content: "This fallacy appears constantly in legal and political debates.\n\n**Argument:** \"If the defendant committed the murder, he would have blood on his shoes. He does NOT have blood on his shoes. Therefore, he did NOT commit the murder.\"\n\n**Analysis:** Structure: If Murder -> Blood. No Blood -> No Murder.\nThis is **Modus Tollens** (Denying the Consequent). It IS valid!\n\n**Contrast:** \"If he is guilty, he will run. He didn't run. Therefore he is innocent.\" -> **INVALID**. He might not have run because he's arrogant."
            },
            {
                type: "content",
                title: "Real World Example: Economy",
                content: "**Politicians love this trick.**\n\n\"If we pass the tax cut, the economy will grow.\"\n\"We didn't pass the tax cut.\"\n\"Therefore, the economy will NOT grow.\"\n\n**The Error:** The economy could grow for a million other reasons (Tech boom, Global trade, etc). The politician wants you to believe their plan is the *only* path to success. Logic proves them wrong.",
                keyPoints: ["Political manipulation", "Single-cause fallacy", "Exposing the error"]
            },
            {
                type: "content",
                title: "Advanced Strategy: The 'Many Paths' Defense",
                content: "When an opponent uses this fallacy, use the **Many Paths Defense**.\n\nOpponent: \"They dropped the argument that the Plan solves warming. Therefore, warming isn't solved.\"\n\nYou: \"Judge, that is Denying the Antecedent. Just because we dropped *one* solution (P) doesn't mean the problem (Q) isn't solved by our *other* advantages. There are Many Paths to the ballot.\"",
                keyPoints: ["Call it out", "Show alternative paths", "Protect your impact"]
            },
            {
                type: "question",
                id: "l21-01-q2",
                question: "Which of these is the Logical Equivalent to 'If it snows, schools close'?",
                options: [
                    { id: "a", text: "If schools close, it must have snowed." },
                    { id: "b", text: "If it doesn't snow, schools won't close." },
                    { id: "c", text: "If schools do NOT close, it did NOT snow." },
                    { id: "d", text: "Schools reduce snow." }
                ],
                correctAnswer: "c",
                explanation: "This is the Contrapositive (~Q -> ~P). If the necessary result (Closing) didn't happen, the cause (Snow) couldn't have happened. Option B is the fallacy of Denying the Antecedent."
            },
            {
                type: "content",
                title: "Affirming the Consequent",
                content: "The evil twin of Denying the Antecedent.\n\nStructure: If P -> Q. **Q is True**. Therefore **P is True**.\n\nExample:\n1. If I have the flu, I have a fever.\n2. I have a fever.\n3. Therefore, I have the flu.\n\n**Wrong.** You could have Covid. You could have an infection. A fever (Q) can be caused by many things, not just the flu (P)."
            },
            {
                type: "content",
                title: "The Confusion of Correlation",
                content: "Affirming the Consequent is why people mistake Correlation for Causation.\n\n\"If Video Games cause violence, we see violent kids.\"\n\"We see violent kids.\"\n\"Therefore Video Games cause violence.\"\n\n**No.** Many things cause violence. Just seeing the result does not prove the specific cause.",
                keyPoints: ["Correlation != Causation", "The Video Game Fallacy"]
            },
            {
                type: "practice",
                id: "l21-01-p1",
                title: "Logic Police",
                description: "Identify if the argument is Valid or Invalid.",
                practice: {
                    type: "fallacy-spotter",
                    targetSkill: "Formal Logic",
                    instructions: "Argument: If you are in Paris, you are in France. You are not in Paris. Therefore, you are not in France.",
                    successCriteria: ["Invalid", "Denying the Antecedent", "Counterexample: You could be in Lyon or Marseille."]
                }
            },
            {
                type: "content",
                title: "The Inverse Error",
                content: "In formal logic notation, this is called the **Inverse Error**.\n\nOriginal: P -> Q\nInverse: ~P -> ~Q (This is NOT logically equivalent)\n\nThe only thing equivalent to the original statement is the **Contrapositive** (~Q -> ~P).\n\nIf you want to argue Not Q, you must prove Not Q directly. You cannot prove it just by disproving P.",
                keyPoints: ["Inverse is not Equivalent", "Contrapositive IS Equivalent", "Proving negatives"]
            },
            {
                type: "content",
                title: "Advanced: Necessity Arguments",
                content: "The only time 'Denying the Antecedent' works is if the condition is **Necessary**.\n\n\"If and ONLY If (IFF) you are 18, you can vote.\"\n\"You are not 18.\"\n\"Therefore, you cannot vote.\"\n\nThis is valid because of the \"Only\". In debate, if you want to make a 'Not P -> Not Q' argument, you must first prove that P is the **only** way to get Q.",
                keyPoints: ["If and Only If (IFF)", "Biconditional", "Proving Exclusivity"]
            },
            {
                type: "content",
                title: "Summary: Spotting the Trap",
                content: "1.  Listen for \"If/Then\" statements.\n2.  Wait for them to deny the \"If\".\n3.  Check if they conclude the \"Then\" is dead.\n4.  If yes -> **ATTACK**.\n\n\"Judge, they confuse a sufficient condition for a necessary one.\"",
                keyPoints: ["Listen", "Wait", "Attack"]
            }
        ]
    },
    {
        lessonId: "l21-02",
        pages: [
            {
                type: "content",
                title: "Introduction: The Power of Frames",
                content: "Facts do not speak for themselves. Facts are just dots. **Framing** connects the dots.\n\nImagine a photograph. If you frame it close up, you see a person crying. If you frame it wide, you see they are crying tears of joy at a wedding. The reality didn't change, but the *meaning* flipped.\n\nIn debate, the person who holds the frame controls the meaning.",
                keyPoints: ["Facts are dots", "Frame connects them", "Control the meaning"]
            },
            {
                type: "content",
                title: "The Default Frame",
                content: "Every topic has a 'Default Frame'—the common sense way people view it.\n\nTopic: **\"The US should ban plastic straws.\"**\n\n*   **Default Frame (Aff):** Environmentalism. Saving turtles > Convenience.\n*   **Default Frame (Neg):** Freedom. Personal choice > Micro-management.\n\nIf you accept the default frame, you are fighting a fair fight. Elite debaters don't fight fair. They **Re-frame**.",
                keyPoints: ["Common sense view", "Don't just accept it", "Re-frame to win"]
            },
            {
                type: "content",
                title: "The Re-Frame: Shifting the Axis",
                content: "Instead of arguing 'Environment vs Freedom', shift the axis.\n\n**Neg Re-Frame:** \"This isn't about freedom. This is about **Ableism**. Plastic straws are medical necessities for people with disabilities. The Aff ban excludes them from society.\"\n\nNow the debate is 'Environment vs Civil Rights'. The Aff is suddenly the villain. The facts about plastic didn't change, but the moral weight shifted instantly.",
                keyPoints: ["Shift the axis", "Change the moral weight", "Environment vs Civil Rights"]
            },
            {
                type: "content",
                title: "Narrative Arcs: The Underdog",
                content: "Judges love the Underdog. It is a primal human instinct.\n\nIf you frame yourself as the protector of the weak against the strong, you win ties.\n\n*   **Topic:** Free Trade.\n*   **Aff Frame:** Efficiency. GDP growth. Big numbers.\n*   **Neg Frame:** The Forgotten Worker. The factory town destroyed. The family losing their home.\n\nThe Aff has 'Better Math'. The Neg has 'The Underdog'. Who do you think the judge *wants* to vote for?",
                keyPoints: ["Primal instinct", "Protect the weak", "Math vs Heart"]
            },
            {
                type: "content",
                title: "The Reciprocity Frame",
                content: "A powerful frame for taxation or duty arguments.\n\n\"The Rich should pay taxes not because we hate them, but because **Reciprocity** demands it. They used our roads, our schools, and our police to build their wealth. They are merely paying back the investment.\"\n\nThis kills the 'Theft' frame. Theft is taking what isn't yours. Reciprocity is returning what you owe.",
                keyPoints: ["Reciprocity", "Investment", "Killing the Theft frame"]
            },
            {
                type: "question",
                id: "l21-02-q1",
                question: "Which framing strategy makes the 'Tax the Rich' argument most persuasive?",
                options: [
                    { id: "a", text: "Punishment Frame: Rich people are evil and deserve to pay." },
                    { id: "b", text: "Fairness Frame: They use public roads/schools to get rich, so they should pay back." },
                    { id: "c", text: "Envy Frame: It's not fair they have yachts." },
                    { id: "d", text: "Math Frame: We need money." }
                ],
                correctAnswer: "b",
                explanation: "The Fairness Frame (Reciprocity) appeals to universal values. The Punishment/Envy frames can backfire by looking petty. Framing it as 'paying back investment' makes taxes sound like a duty rather than a theft."
            },
            {
                type: "content",
                title: "Systemic vs Individual Frame",
                content: "This is a classic clash.\n\n**Individual Frame:** \"People are poor because they make bad choices.\"\n**Systemic Frame:** \"People are poor because the system removes their choices.\"\n\nIf you are Aff on a social program, you MUST win the Systemic Frame. If poverty is an individual choice, your program is a waste. If poverty is a trap, your program is a ladder.\n\n**Tagline:** \"We aren't solving bad choices; we are fixing broken ladders.\"",
                keyPoints: ["Choice vs Trap", "Systemic Failure", "Fixing ladders"]
            },
            {
                type: "content",
                title: "The 'Scope' Frame",
                content: "You can frame an issue by zooming In or Out.\n\n*   **Zoom In (Individual):** \"This policy hurts this specific grandmother.\"\n*   **Zoom Out (Utilitarian):** \"This policy saves 10,000 lives, even if it hurts one person.\"\n\nIf you have the numbers, Zoom Out. If you have the story, Zoom In. Force the opponent to fight on your zoom level.",
                keyPoints: ["Zoom In (Story)", "Zoom Out (Stats)", "Fight on your level"]
            },
            {
                type: "content",
                title: "Timeframe Framing",
                content: "Framing isn't just about 'Who', it is about 'When'.\n\n**Short Term vs Long Term.**\n\nNeg: \"The cost is too high today.\"\nAff: \"The cost of inaction is higher tomorrow. We are framing this as an **Investment**. We pay $1 now to save $100 later.\"\n\nIf you win the Timeframe, you win the Impact.",
                keyPoints: ["Investment", "Cost of Inaction", "Short term pain vs Long term gain"]
            },
            {
                type: "practice",
                id: "l21-02-p1",
                title: "Frame Shifter",
                description: "Re-frame the topic.",
                practice: {
                    type: "argument-builder",
                    targetSkill: "Framing",
                    topic: "School Uniforms",
                    instructions: "The opponent argues Uniforms allow Conformity (Bad). Re-frame Uniforms as 'Equality' (Good).",
                    successCriteria: ["Shift focus from 'expression' to 'class difference'", "Uniforms hide poverty", "Equality > Conformity"]
                }
            },
            {
                type: "content",
                title: "Pre-empting Frames",
                content: "Don't wait for them to frame it. Set the frame in the first 30 seconds.\n\n**Introduction:**\n\"Judge, this debate is not about cost. It is about **obligation**. If we owe a debt, we pay it, regardless of the price. Today, we debating the debt owed to veterans...\"\n\nNow, if the Neg talks about 'Cost', they sound immoral. You have pre-set the lens.",
                keyPoints: ["First 30 seconds", "Set the lens", "Make their frame sound immoral"]
            },
            {
                type: "content",
                title: "The Pivot",
                content: "What if you are losing the frame? **Pivot**.\n\n\"My opponent talks a lot about Short Term Costs. And they are right, it IS expensive. But the correct frame is Long Term Investment. Logic dictates we shouldn't save a penny today to lose a dollar tomorrow.\"\n\nAckowledge their frame -> Explain why it's too small -> Widen to your frame.",
                keyPoints: ["Acknowledge", "Diminish", "Widen"]
            },
            {
                type: "question",
                id: "l21-02-q2",
                question: "In a debate about Surveillance vs Privacy, how do you frame Surveillance positively?",
                options: [
                    { id: "a", text: "Big Brother is watching." },
                    { id: "b", text: "Security Frame: Surveillance is the shield that protects freedom." },
                    { id: "c", text: "Privacy doesn't matter." },
                    { id: "d", text: "The government owns you." }
                ],
                correctAnswer: "b",
                explanation: "You don't fight Freedom with Tyranny. You fight Freedom with Security-that-enables-Freedom. 'You can't have privacy if you are dead.' Frame security as the prerequisite to all rights."
            },
            {
                type: "content",
                title: "Summary: The Photographer",
                content: "Be the photographer. Don't just show the judge the world. choose the angle, the lighting, and the zoom that makes your argument beautiful and your opponent's argument ugly.",
                keyPoints: ["You are the artist", "Choose the angles"]
            }
        ]
    },
    {
        lessonId: "l21-03",
        pages: [
            {
                type: "content",
                title: "Introduction: The Fallacy Fallacy",
                content: "We have taught you to hunt fallacies. Now we must teach you restraint.\n\nThere is a trap called the **Fallacy Fallacy** (Argumentum ad Logicam).\n\n**The Trap:** Assuming that because an argument *contains* a fallacy, its *conclusion* must be false.\n\n**Example:**\n\"You insulted me (Ad Hominem) while saying the sky is blue. Therefore, the sky is NOT blue.\"\n\nSee the problem? The sky is still blue. The argument was rude, but the conclusion remains true.",
                keyPoints: ["Argumentum ad Logicam", "Bad argument != False conclusion", "Truth is resilient"]
            },
            {
                type: "content",
                title: "Logic vs Truth",
                content: "This brings us back to Validity vs Truth.\n\n*   **A Fallacy destroys Validity.** It means the conclusion does not *necessarily* follow from the premises.\n*   **A Fallacy does NOT destroy Truth.** The conclusion *might* still be true by accident or for other reasons.\n\n**In Debate:** You cannot just shout \"Fallacy!\" and sit down. You must explain why the *conclusion* is actually wrong, or at least unproven.",
                keyPoints: ["Validity is dead", "Truth might survive", "Don't sit down yet"]
            },
            {
                type: "content",
                title: "The Logic Cop Problem",
                content: "Judges hate \"Logic Cops\".\n\nA Logic Cop is a debater who spends the whole round saying: \"That's a Strawman! That's a Red Herring! That's a Slippery Slope!\" without actually debating the topic.\n\nIt feels petty. It feels technical. It ignores the substance.\n\n**Rule:** Use fallacy claims as a *scalpel*, not a *bludgeon*. Use them sparingly to cut the most dangerous cords.",
                keyPoints: ["Don't be a Logic Cop", "Petty vs Substantive", "Scalpel not Bludgeon"]
            },
            {
                type: "question",
                id: "l21-03-q1",
                question: "Your opponent uses a Slippery Slope argument ('If A, then disaster Z'). It is a fallacy. How should you respond?",
                options: [
                    { id: "a", text: "Yell 'Slippery Slope!' and move on." },
                    { id: "b", text: "Ignore it." },
                    { id: "c", text: "Identify the fallacy via name, AND explain why the specific link from B to C is broken." },
                    { id: "d", text: "Admit defeat." }
                ],
                correctAnswer: "c",
                explanation: "Name it AND Explain it. 'Judge, this is a Slippery Slope fallacy. Specifically, they have zero evidence that A leads to B. Without that link, the chain snaps.' This addresses both the logic and the substance."
            },
            {
                type: "content",
                title: "The 'Even If' Strategy",
                content: "The best way to avoid the Fallacy Fallacy is the **\"Even If\"**.\n\n\"Judge, their argument is a Strawman (Fallacy). But **Even If** we accepted their premise, they still lose because...\"\n\nThis is a power move. It says: \"I can beat you on logic. And even if I spot you the logic, I can beat you on facts.\"\n\n**Layers of Defense:**\n1.  Bad Logic (Fallacy)\n2.  Bad Facts (Empirics)\n3.  Bad Impact (Turn)",
                keyPoints: ["Even If", "Layers of Defense", "Safety net"]
            },
            {
                type: "content",
                title: "Steelmanning: The Anti-Fallacy",
                content: "Instead of calling out the fallacy, try **Steelmanning** it.\n\n**Opponent:** \"We should ban cars because they smell bad.\" (Weak Argument).\n**You:** \"My opponent argues cars are a nuisance. Let's look at the *strongest* version of that: Cars cause climate change. Even if we look at the climate impact...\"\n\n**Why do this?** creates massive Ethos. You look so confident that you are willing to fix their bad arguments just to knock them down. Judges trust Steelmanners.",
                keyPoints: ["Fix their argument", "Then destroy it", "Massive Ethos boost"]
            },
            {
                type: "content",
                title: "Charity as a Weapon",
                content: "Most debaters think charity (being nice) is weak. It is a weapon.\n\nWhen you interpret your opponent's vague argument in the *best possible way* and THEN disprove it, they have nowhere to hide.\n\nIf you attack a weak version (Strawman), they can say \"That's not what I meant!\"\nIf you attack the Steelman, they are silent.",
                keyPoints: ["Charity", "No hiding place", "Silence them"]
            },
            {
                type: "content",
                title: "When to Call It Out",
                content: "So when SHOULD you call out a fallacy directly?\n\n1.  **When it's abusive:** Ad Hominem, Strawman. These ruin the debate.\n2.  **When it's the crux:** If their whole case rests on a single Circular Reasoning loop, popping that bubble kills the whole case.\n3.  **When it saves time:** \"Judge, that's a Red Herring, let's get back to the topic.\" (Saves 2 minutes of arguing).",
                keyPoints: ["Abuse", "Crux", "Efficiency"]
            },
            {
                type: "practice",
                id: "l21-03-p1",
                title: "The Charitable Debater",
                description: "Respond to a fallacious argument without being a Logic Cop.",
                practice: {
                    type: "refutation",
                    targetSkill: "Steelmanning",
                    topic: "Taxes",
                    instructions: "Opponent: 'Taxes are theft!' (Slogan/Fallacy). Respond by addressing the underlying concern (Coercion) without dismissing it.",
                    successCriteria: ["Acknowledge the coercion point", "Counter with Social Contract theory", "Don't just yell 'Fallacy'"]
                }
            },
            {
                type: "content",
                title: "The Ethos Impact",
                content: "Calling out fallacies makes you look smart. Explaining *why* they matter makes you look wise.\n\nJudge Perception:\n*   \"Fallacy!\" = Annoying Nerd.\n*   \"Here is why that logic doesn't hold up in the real world.\" = Leader.\n\nBe the Leader.",
                keyPoints: ["Smart vs Wise", "Nerd vs Leader", "Real world application"]
            },
            {
                type: "content",
                title: "Drill: The Fallacy Translation",
                content: "Take a fallacy name and translate it into plain English for a lay judge.\n\n*   **Strawman:** \"They are attacking a ghost, not our actual plan.\"\n*   **Ad Hominem:** \"They are attacking my character because they can't attack my evidence.\"\n*   **Slippery Slope:** \"They are telling a scary story without proving the steps.\"",
                keyPoints: ["Translate to English", "No Latin", "Lay appeal"]
            },
            {
                type: "content",
                title: "Summary",
                content: "Logic is a tool, not a crutch. Don't assume you've won just because you found a glich in their matrix. You still have to win the reality of the debate.",
                keyPoints: ["Tool not crutch", "Win reality"]
            }
        ]
    },
    {
        lessonId: "l21-04",
        pages: [
            {
                type: "content",
                title: "Introduction: Words are Weapons",
                content: "Words have two meanings:\n1.  **Denotation:** The dictionary definition.\n2.  **Connotation:** The emotional baggage and hidden meaning.\n\nIn debate, debates are won and lost in the Connotation. The side that picks the best words controls the subconscious mind of the judge.",
                keyPoints: ["Denotation vs Connotation", "Emotional baggage", "Subconscious control"]
            },
            {
                type: "content",
                title: "Loaded Language",
                content: "Compare these two sentences describing the SAME event:\n\nA. \"The government **invested** in public safety.\"\nB. \"The regime **squandered** money on policing.\"\n\n*   Invested vs Squandered.\n*   Government vs Regime.\n*   Safety vs Policing.\n\nFunctionally, they mean the same thing. Rhetorically, A is a hero and B is a villain. **Never let your opponent choose the labels.**",
                keyPoints: ["Invest vs Squander", "Hero vs Villain", "Reject their labels"]
            },
            {
                type: "content",
                title: "Euphemisms and Dysphemisms",
                content: "*   **Euphemism:** Making something bad sound good. (\"Collateral Damage\" instead of \"Dead Civilians\").\n*   **Dysphemism:** Making something good sound bad. (\"Brainwashing\" instead of \"Education\").\n\n**Strategy:**\nIf you defend the Status Quo, use Euphemisms. (\"Efficiency corrections\").\nIf you attack the Status Quo, strip the Euphemisms away. (\"Judge, don't call it 'efficiency'. Call it 'firing 500 parents'.\")",
                keyPoints: ["Masking reality", "Exposing reality", "Strategic Naming"]
            },
            {
                type: "question",
                id: "l21-04-q1",
                question: "You want to argue AGAINST deep sea drilling. Which term should you use?",
                options: [
                    { id: "a", text: "Energy extraction" },
                    { id: "b", text: "Resource development" },
                    { id: "c", text: "Ecological strip-mining" },
                    { id: "d", text: "Offshore operations" }
                ],
                correctAnswer: "c",
                explanation: "'Extraction' and 'Development' are clinical and positive. 'Strip-mining' invokes violent imagery of destruction. 'Ecological' reminds the judge of the victim (Nature). Word choice sets the visual scene."
            },
            {
                type: "content",
                title: "Active vs Passive Voice",
                content: "Grammar is political.\n\n*   **Active Voice:** \"Starting a war.\"\n*   **Passive Voice:** \"Mistakes were made.\"\n\nPassive voice hides the blame. It removes the 'Subject' from the sentence.\n\n**Attack Strategy:** If your opponent uses passive voice (\"Lives are lost\"), demand the Active Voice. \"Judge, lives aren't just 'lost' like car keys. The Policy *kills* them. Restore the agency.\"",
                keyPoints: ["Hiding the Agent", "Restoring Agency", "Mistakes were made"]
            },
            {
                type: "content",
                title: "Strategic Ambiguity",
                content: "Sometimes, you WANT to be vague.\n\nIf you have a Plan, and the funding is tricky, you might say: \"We will mobilize fiscal resources.\"\n\nThis is **Strategic Ambiguity**. It prevents the opponent from attacking a specific tax.\n\n**Defense:** Force Specificity. \"Mobilize resources from WHERE? Your grandma's purse? The deficit? We need a noun.\"",
                keyPoints: ["Vagueness as shield", "Force Specificity", "We need a noun"]
            },
            {
                type: "content",
                title: "Metaphorical Implications",
                content: "Metaphors aren't just decoration; they are arguments.\n\n\"The national debt is a **ticking time bomb**.\"\n(Implication: Explosion is imminent, we must panic/act fast).\n\n\"The national debt is a **weight** on our back.\"\n(Implication: It's heavy/slow, but manageable).\n\nIf you accept the \"Bomb\" metaphor, you lose the \"We can wait\" argument. **Break the metaphor.** \"Judge, debt isn't a bomb. It doesn't explore. It's a mortgage.\"",
                keyPoints: ["Metaphor = Argument", "Time Bomb vs Mortgage", "Break the Metaphor"]
            },
            {
                type: "content",
                title: "Labeling the Opponent",
                content: "You can label the opposing team to prime the judge.\n\n*   \"The **Pessimistic** Negative team...\" (Implies they just hate progress).\n*   \"The **Reckless** Affirmative team...\" (Implies they are dangerous).\n\nUse these labels subtly in your transitions. \"Let's look at the Reckless Plan...\"",
                keyPoints: ["Prime the judge", "Subtle repetition", "Define their identity"]
            },
            {
                type: "practice",
                id: "l21-04-p1",
                title: "The Spin Doctor",
                description: "Rewrite the headline.",
                practice: {
                    type: "argument-builder",
                    targetSkill: "Connotation",
                    topic: "School Lunch",
                    instructions: "Fact: The school is replacing pizza with salad. Task: Write one headline attacking this (Dysphemism) and one defending it (Euphemism).",
                    successCriteria: ["Attack: 'School bans comfort food'", "Defense: 'School promotes wellness'", "Strong emotional words"]
                }
            },
            {
                type: "content",
                title: "The 'Just Semantics' Defense",
                content: "Weak debaters say: \"That's just semantics!\" (Meaning: That's just word games).\n\nStrong debaters say: \"Semantics are Meaning. If we don't agree on what words mean, we can't debate. Precision is a requirement, not a luxury.\"",
                keyPoints: ["Semantics = Meaning", "Precision is required", "Don't dismiss words"]
            },
            {
                type: "content",
                title: "Defining Terms",
                content: "He who defines the terms wins the round.\n\nIf 'Justice' means 'Equality', the Aff wins.\nIf 'Justice' means 'Freedom', the Neg wins.\n\nDon't let them define the key words. Offer a **Counter-Definition** early. \"My opponent defines Justice as equality of outcome. We prefer Oxford's definition: equality of opportunity.\"",
                keyPoints: ["Definition warfare", "Counter-definitions", "Dictionary wars"]
            },
            {
                type: "content",
                title: "Summary",
                content: "Words create worlds. If you live in your opponent's world (using their labels, their metaphors, their passive voice), you are a guest in their house. You will lose.\n\nBuild your own house. Use your own words.",
                keyPoints: ["Words create worlds", "Don't be a guest", "Build your house"]
            }
        ]
    },
    {
        lessonId: "l21-05",
        pages: [
            {
                type: "content",
                title: "Comprehensive Review: The Zoo of Fallacies",
                content: "We have covered dozens of fallacies across 3 units. It's time to organize the zoo.\n\nClassification helps memory. We will group them into 5 Families:\n1.  **Relevance** (Distractions)\n2.  **Ambiguity** (Language Tricks)\n3.  **Presumption** (Bad Assumptions)\n4.  **Weak Induction** (Bad Data)\n5.  **Formal** (Bad Math)",
                keyPoints: ["Organize the Zoo", "5 Families", "Classification"]
            },
            {
                type: "content",
                title: "Family 1: Relevance (The Distractors)",
                content: "These arguments miss the point entirely.\n\n*   **Ad Hominem:** Attacking the person.\n*   **Red Herring:** Switching the topic.\n*   **Tu Quoque:** \"You do it too!\"\n*   **Appeal to Popularity:** \"Everyone agrees.\"\n*   **Appeal to Authority:** \"Einstein said so.\"\n\n**Defense:** \"That is interesting, but Irrelevant to the Impact.\"",
                keyPoints: ["Missing the point", "Attack the connection", "Irrelevance"]
            },
            {
                type: "content",
                title: "Family 2: Ambiguity (The Word Games)",
                content: "These exploit confusing definitions.\n\n*   **Strawman:** Distorting the opponent's picture.\n*   **Equivocation:** Using one word two ways (e.g., \"Rights\" vs \"Right\").\n*   **Loaded Question:** \"Have you stopped beating your dog?\"\n\n**Defense:** \"Clarify the Definition. You are twisting the words.\"",
                keyPoints: ["Twisting words", "Definitions", "Clarify"]
            },
            {
                type: "content",
                title: "Family 3: Presumption (The Jumpers)",
                content: "These assume things they haven't proved.\n\n*   **Begging the Question:** Circular logic.\n*   **False Dichotomy:** Only two choices.\n*   **Complex Question:** Hiding an assumption.\n\n**Defense:** \"You are assuming X. Prove X first.\"",
                keyPoints: ["Unproven assumptions", "Circles", "Prove your premises"]
            },
            {
                type: "content",
                title: "Family 4: Weak Induction (The Bad Scientists)",
                content: "These use bad data to make big claims.\n\n*   **Hasty Generalization:** One example -> All examples.\n*   **Slippery Slope:** A -> Z without proof.\n*   **False Cause (Post Hoc):** Correlation isn't causation.\n*   **Weak Analogy:** Apples are like Oranges.\n\n**Defense:** \"Your sample size is too small\" or \"The link is broken.\"",
                keyPoints: ["Bad science", "Correlation/Causation", "Sample size"]
            },
            {
                type: "content",
                title: "Family 5: Formal (The Bad Mathematicians)",
                content: "The structural errors we learned in Lesson 1.\n\n*   **Affirming the Consequent:** If P->Q, & Q, then P. (False).\n*   **Denying the Antecedent:** If P->Q, & ~P, then ~Q. (False).\n\n**Defense:** \"Your logic is structurally invalid. Use a Venn Diagram.\"",
                keyPoints: ["Bad Math", "Structural Invalidity", "P and Q"]
            },
            {
                type: "question",
                id: "l21-05-q1",
                question: "Which fallacy is this? 'We haven't proven that aliens usually don't exist, therefore they must exist.'",
                options: [
                    { id: "a", text: "Appeal to Ignorance" },
                    { id: "b", text: "Ad Hominem" },
                    { id: "c", text: "Strawman" },
                    { id: "d", text: "Red Herring" }
                ],
                correctAnswer: "a",
                explanation: "Appeal to Ignorance (Ad Ignorantiam). Arguing that a lack of proof for one side constitutes proof for the other side. Absence of evidence is not evidence of presence."
            },
            {
                type: "content",
                title: "Interactions and Combinations",
                content: "In the wild, fallacies travel in packs.\n\n**The Trumpet:** A Strawman + Ad Hominem + Slippery Slope Combo.\n\"My crazy opponent (Ad Hom) wants to ban all fun (Strawman) which will destroy America (Slope).\"\n\nDon't get overwhelmed. Pick the 'Alpha' fallacy—usually the **Strawman** (the false premise)—and kill that. The rest die with it.",
                keyPoints: ["Fallacies travel in packs", "Kill the Alpha", "Ignore the noise"]
            },
            {
                type: "content",
                title: "The Hierarchy of Fallacies",
                content: "Not all fallacies are equal.\n\n1.  **Tier 1 (Fatal):** Circular Reasoning, Strawman, Formal Errors. These kill the argument instantly.\n2.  **Tier 2 (Weak):** Slippery Slope, Hasty Generalization. These weaken the argument but might be fixable with more evidence.\n3.  **Tier 3 (Annoying):** Ad Hominem, Tone Policing. These are rude but don't strictly disprove the logic.\n\nFocus your time on Tier 1.",
                keyPoints: ["Prioritize attacks", "Fatal errors first", "Don't whine about rudeness"]
            },
            {
                type: "content",
                title: "The 'Fallacy Name Drop' Risk",
                content: "We warned you about the Fallacy Fallacy. The risk of naming them is sounding pretentious.\n\n**Pro Tip:** Describe the fallacy without naming it.\n\nInstead of \"That's a False Dichotomy!\", say: \"My opponent suggests we only have two choices, A or B. But aren't there other options, like C and D?\"\n\nIt sounds more reasonable and less academic.",
                keyPoints: ["Don't be pretentious", "Describe don't name", "Reasonable"]
            },
            {
                type: "practice",
                id: "l21-05-p1",
                title: "Fallacy Gauntlet",
                description: "Identify the family.",
                practice: {
                    type: "argument-builder",
                    targetSkill: "Fallacy Categorization",
                    instructions: "Fallacy: 'Either we ban cars or the planet dies.' Identify the fallacy family and specific type.",
                    successCriteria: ["Presumption", "False Dichotomy", "False Dilemma"]
                }
            },
            {
                type: "content",
                title: "Summary: The Toolkit",
                content: "You now possess a complete taxonomy of human error. Use this power responsibly. Don't go home and dismantle your parents' arguments over dinner (unless you want to be grounded). Use it to find Truth.",
                keyPoints: ["Complete Taxonomy", "Responsible use"]
            }
        ]
    },
    {
        lessonId: "l21-06",
        pages: [
            {
                type: "content",
                title: "Introduction: The Holy Trinity",
                content: "2,300 years ago, Aristotle wrote *Rhetoric*. He identified three modes of persuasion. We have yet to improve on them.\n\n1.  **Logos** (Logic/Message)\n2.  **Pathos** (Emotion/Audience)\n3.  **Ethos** (Credibility/Speaker)\n\nA winning debate argument is a stool with these three legs. Remove one, and it falls over.",
                keyPoints: ["Aristotle", "Logos/Pathos/Ethos", "The Three-Legged Stool"]
            },
            {
                type: "content",
                title: "Logos: The Blueprint",
                content: "**Logos** is the appeal to reason. It is the data, the warrant, the syllogism.\n\n*   **Without Logos:** Your speech is just a nice poem. It proves nothing.\n*   **Over-using Logos:** You sound like a robot. You might be 'technically' right, but no one cares.\n\nLogos provides the **Necessity** of your victory.",
                keyPoints: ["The Brain", "Data/Logic", "Necessity"]
            },
            {
                type: "content",
                title: "Pathos: The Engine",
                content: "**Pathos** is the appeal to emotion. It is the story of the victim, the fear of the threat, the hope of the solution.\n\n*   **Without Pathos:** The judge has no reason to *act*. Humans act on feeling.\n*   **Over-using Pathos:** You sound manipulative and hysterical.\n\nPathos provides the **Motivation** for your victory.",
                keyPoints: ["The Heart", "Emotion/Story", "Motivation"]
            },
            {
                type: "content",
                title: "Ethos: The Permit",
                content: "**Ethos** is the appeal to character. It is your trustworthiness, your expertise, your fair-mindedness.\n\n*   **Without Ethos:** The judge doesn't believe your Logos or Pathos. \"They are lying.\"\n*   **Over-using Ethos:** \"Believe me because I'm smart.\" (Arrogance).\n\nEthos provides the **Permission** for the judge to vote for you.",
                keyPoints: ["The Soul", "Trust/Character", "Permission"]
            },
            {
                type: "question",
                id: "l21-06-q1",
                question: "Which appeal is missing? 'The data clearly shows a 5% GDP drop. The economic theory of Keynes proves this leads to recession. The math is undeniable.'",
                options: [
                    { id: "a", text: "Logos" },
                    { id: "b", text: "Pathos" },
                    { id: "c", text: "Ethos" },
                    { id: "d", text: "None" }
                ],
                correctAnswer: "b",
                explanation: "This is pure Logos (Data, Theory, Math). It lacks Pathos (Why does the recession matter? Who loses their job? Who goes hungry?). Without Pathos, the judge sees a math problem, not a crisis."
            },
            {
                type: "content",
                title: "The Golden Ratio",
                content: "What is the perfect mix?\n\nIt depends on the Audience (Judge).\n\n*   **Lay Judge (Parent):** 50% Pathos, 30% Ethos, 20% Logos.\n*   **Flow Judge (Expert):** 70% Logos, 20% Ethos, 10% Pathos.\n\n**Adaptability** is the master skill. You must tweak the dials of the radio for every round.",
                keyPoints: ["Know your audience", "Lay = Heart", "Flow = Brain", "Tweak the dials"]
            },
            {
                type: "content",
                title: "Self-Diagnosis",
                content: "Most debaters have a default setting.\n\n*   **The Professor:** High Logos, Low Pathos. (Boring, right but loses).\n*   **The Actor:** High Pathos, Low Logos. (Entertaining, but shallow).\n*   **The Bully:** High Confidence (Fake Ethos), Low substance.\n\nIdentify your weak leg. Force yourself to train it. If you are a Professor, tell a story. If you are an Actor, read a statistic.",
                keyPoints: ["Know your default", "Train your weakness", "Balance the stool"]
            },
            {
                type: "content",
                title: "The Synthesis",
                content: "The best arguments weave them together in a single sentence.\n\n\"We cannot crush the dreams of this generation (Pathos) for a policy that 99% of economists (Ethos) agree will fail to solve the deficit (Logos).\"\n\nBoom. All three buttons pressed at once.",
                keyPoints: ["Weave them", "Simultaneous impact", "Total persuasion"]
            },
            {
                type: "content",
                title: "Ethos in Action: The Concession",
                content: "One of the best ways to gain Ethos is to **Concede** a small point.\n\n\"My opponent is right that the short-term cost is high. I admit that.\"\n\nJudge thinks: \"Wow, they are honest. I trust them.\"\n\n\"BUT, the long term gain justifies it.\"\n\nBecause you admitted the fault, the judge trusts your solution. If you had lied about the cost, they would doubt the solution.",
                keyPoints: ["Strategic Concession", "Honesty = Trust", "Buy credibility"]
            },
            {
                type: "practice",
                id: "l21-06-p1",
                title: "The Alchemist",
                description: "Add the missing element.",
                practice: {
                    type: "argument-builder",
                    targetSkill: "Rhetorical Triad",
                    topic: "Climate Change",
                    instructions: "Current Argument: 'Temps rising 2 degrees is bad.' (Logos). Add Pathos and Ethos.",
                    successCriteria: ["Pathos: Mention specific victims (Islands drowning)", "Ethos: Cite NASA or 97% consensus"]
                }
            },
            {
                type: "content",
                title: "Summary",
                content: "You are not a calculator. You are not an actor. You are a Debater. You must be everything. Logic, Emotion, Character. Master the triangle.",
                keyPoints: ["Be everything", "Master the triangle"]
            }
        ]
    },
    {
        lessonId: "l21-07",
        pages: [
            {
                type: "content",
                title: "Review: Logic Mastery",
                content: "We have reached the end of Unit 21. You have stripped the matrix code of debate bare.\n\nYou know that Logic is the tool, not the goal. You know that validity is not truth. You know that words can lie even when facts don't.",
                keyPoints: ["The Matrix Revealed", "Logic is the tool"]
            },
            {
                type: "content",
                title: "Key Concepts Recap",
                content: "1.  **Formal Logic:** Denying the Antecedent. Don't confuse Necessary and Sufficient.\n2.  **Framing:** The lens determines the winner. Control the narrative.\n3.  **Fallacy Fallacy:** Don't be a Logic Cop. Even if they are Fallacious, you must prove them Wrong.\n4.  **Word Choice:** Connotation, Euphemism, Passive Voice. Words are weapons.\n5.  **The Triad:** Ethos, Pathos, Logos. The three engines of persuasion.",
                keyPoints: ["Recap", "The Big 5"]
            },
            {
                type: "question",
                id: "l21-07-q1",
                question: "Final Logic Check: 'If we invade, we win. We invade. Therefore, we win.' Valid or Invalid?",
                options: [
                    { id: "a", text: "Invalid" },
                    { id: "b", text: "Valid" }
                ],
                correctAnswer: "b",
                explanation: "This is Valid (Modus Ponens). If P->Q, and P, then Q. The structure is perfect. (However, the premise 'If we invade, we win' might be unsound, but the logic holds)."
            },
            {
                type: "question",
                id: "l21-07-q2",
                question: "Final Framing Check: If you are arguing AGAINST a 'Safety Net', how do you re-frame it to sound bad?",
                options: [
                    { id: "a", text: "It's too expensive." },
                    { id: "b", text: "Call it a 'Hammock' that traps people in dependency." },
                    { id: "c", text: "Say poor people are lazy." },
                    { id: "d", text: "Safety is unnecessary." }
                ],
                correctAnswer: "b",
                explanation: "The 'Hammock' metaphor reframes the Safety Net from something that 'catches' you (Good) to something that 'traps' you (Bad). It attacks the intent of the policy using a visual frame."
            },
            {
                type: "content",
                title: "Checklist for Every Round",
                content: "Before every speech, ask yourself:\n\n1.  **Frame:** Have I set the lens? (Unit 21-02)\n2.  **Logic:** Is my structure valid? Are there formal errors? (Unit 21-01)\n3.  **Words:** Am I using their labels or mine? (Unit 21-04)\n4.  **Balance:** Do I have data (Logos) AND a story (Pathos)? (Unit 21-06)\n\nIf you check these 4 boxes, you will win more rounds.",
                keyPoints: ["Pre-speech checklist", "Routine"]
            },
            {
                type: "content",
                title: "Advanced Exercise: The Devil's Alternate",
                content: "Take a truth you believe in deeply (e.g., 'Democracy is good').\n\nNow, use 3 fallacies to defend it.\nNow, use the 'Framing' technique to attack it.\n\nThis mental flexibility—being able to detach your personal beliefs from the mechanics of argument—is the mark of a true master.",
                keyPoints: ["Mental flexibility", "Detach beliefs", "Mastery"]
            },
            {
                type: "content",
                title: "Real World Application: Fallacy of the Week",
                content: "Let's apply this to a real scenario you might see in the news.\n\n**Headline:** \"Senator X voted against the 'Save the Puppies Act'. He hates animals.\"\n\n**Analysis:**\n1.  **Strawman:** Did the act *actually* save puppies? Or was it a pork-barrel spending bill with a cute name?\n2.  **Ad Hominem:** Attacking his character (\"hates animals\") instead of his vote reasoning.\n3.  **False Dichotomy:** Assuming 'Vote No' = 'Hate Animals'. Maybe he hated the budget impact.\n\nAlways read past the headline.",
                keyPoints: ["Read past headlines", "Analyze the Bill", "Don't fall for names"]
            },
            {
                type: "practice",
                id: "l21-07-p1",
                title: "Speed Drill: Name That Frame",
                description: "Re-frame these negative events positively.",
                practice: {
                    type: "argument-builder",
                    targetSkill: "Rapid Framing",
                    topic: "Framing Drills",
                    instructions: "1. 'Tax Hike' -> ?\n2. 'Censorship' -> ?\n3. 'Spying' -> ?",
                    successCriteria: ["1. 'Investment in Future'", "2. 'Community Standards / Safety'", "3. 'Surveillance / Intelligence Gathering'"]
                }
            },
            {
                type: "question",
                id: "l21-07-q3",
                question: "**Final Exam: The Combined Attack**\n\nScenario: Your opponent argues that 'Nuclear Power is too dangerous because of Chernobyl.' (Pathos/Fear). How do you respond using the full Triad (Logos, Ethos, Pathos)?",
                options: [
                    { id: "a", text: "Logos only: 'Chernobyl was a specific reactor type RBMK-1000 not used anymore.'" },
                    { id: "b", text: "Pathos only: 'You are scaremongering.'" },
                    { id: "c", text: "Triad Response: 'We shouldn't let the ghost of 1986 (Pathos) scare us away from the only zero-carbon energy source (Logos) that 98% of climate scientists agree we need to save the planet (Ethos).'" },
                    { id: "d", text: "Ethos only: 'Trust me, it's safe.'" }
                ],
                correctAnswer: "c",
                explanation: "Option C uses all three: 'Ghost of 1986' acknowledges the fear (Pathos/Reframing), 'Zero-carbon source' provides the logical reason (Logos), and '98% of climate scientists' provides the credibility (Ethos)."
            },
            {
                type: "content",
                title: "Evaluation",
                content: "Take a moment to self-evaluate. Are you a Logic Debater? A Story Debater? A Technical Debater?\n\nIn Unit 22 (Persuasion), we will take these raw logical tools and learn how to dress them up in style. Logic is the skeleton; Persuasion is the skin.",
                keyPoints: ["Self-Evaluate", "Prepare for Unit 22", "Skeleton vs Skin"]
            },
            {
                type: "content",
                title: "Conclusion",
                content: "Good luck. The world is full of bad arguments. Go fix them.",
                keyPoints: ["Go fix them"]
            }
        ]
    }
];
