import { MultiPageLesson } from "./types";

export const UNIT_25_LESSONS: MultiPageLesson[] = [
    {
        lessonId: "l25-01",
        pages: [
            {
                type: "content",
                title: "Introduction: The Rules of the Game",
                content: "Policy Debate is a simulation of the United States Government. It is not a casual argument; it is legisalative combat.\n\nThe **Affirmative (Aff)** is the Government. They propose a specific law (The Plan) to change the world.\nThe **Negative (Neg)** is the Opposition. They defend the Status Quo (The way things are now).\n\nBecause the Aff wants to change reality, they have the **Burden of Proof**. They must prove that change is necessary and safe. The Neg has the **Presumption**; if the Aff fails to prove their case, the default vote is Negative.",
                keyPoints: ["Government Simulation", "Burden of Proof", "Presumption"],
                tip: "Think of Presumption like a criminal trial. 'Innocent until proven guilty.' The Status Quo is innocent until the Aff proves it guilty."
            },
            {
                type: "content",
                title: "The Stock Issues (SHITS)",
                content: "To win, the Affirmative must win 5 specific categories of argument, known as the **Stock Issues**.\n\nMemory Aid: **SHITS** (Significance, Harms, Inherency, Topicality, Solvency).\n\n**The Rule:** The Aff must win 100% of the Stock Issues to win the round. The Neg only needs to win ONE to win the round.\n\nIf the Plan is a good idea (Solvency) but not necessary (Significance), Aff loses. If it is necessary but doesn't work (Solvency), Aff loses. It is a house of cards.",
                keyPoints: ["Stock Issues", "SHITS", "Aff wins all", "Neg wins one"],
                tip: "As a Neg debater, you are a sniper. You don't need to destroy the whole case; you just need to take out one key support leg."
            },
            {
                type: "content",
                title: "1. Significance (The Scope)",
                content: "Significance asks: **How big is the problem?**\n\nThe judge won't vote to change US Law for a minor inconvenience. You need a crisis.\n\n*   **Quantitative Significance:** Numbers. \"10 million people are unemployed.\" \"GDP is down 4%.\"\n*   **Qualitative Significance:** Values. \"Justice is being denied.\" \"Rights are violated.\"\n\nIf you don't have Significance, the Neg argues **'De Minimis'** (The problem is too small to matter).",
                keyPoints: ["How big?", "Quantitative", "Qualitative", "De Minimis"],
                tip: "Always quantify your significance. Don't say 'Many people'; say '4.5 million people'."
            },
            {
                type: "content",
                title: "2. Harms (The Injury)",
                content: "Significance is the number; Harms is the pain.\n\nIt is not enough to say 'Unemployment is high' (Significance). You must explain why that is *bad* (Harms).\n\n*   **Scenario:** High unemployment leads to poverty -> starvation -> death.\n*   **Scenario:** High unemployment leads to crime -> instability -> failed state.\n\nWithout a Harm, you have a condition, not a problem. (e.g., 'There are 50 million clouds in the sky.' Significant? Yes. Harmful? No.)",
                keyPoints: ["Pain", "Scenario", "Condition vs Problem"],
                tip: "Chain your impacts. Don't stop at 'It's bad'. Ask 'And then what happens?' until you hit a wall."
            },
            {
                type: "content",
                title: "3. Inherency (The Barrier)",
                content: "This is the most technical stock issue. It asks: **Why hasn't this problem been fixed yet?**\n\nIf the plan is so great, why isn't the government doing it already?\n\nThe Aff must prove there is a **Barrier** preventing the solution in the Status Quo.\n\nIf there is no barrier, the Status Quo will fix itself, and the Aff Plan is a waste of time.",
                keyPoints: ["Why hasn't it been fixed?", "Barrier", "Status Quo solves"],
                tip: "Inherency is your defense against the argument 'Congress is already working on this'."
            },
            {
                type: "content",
                title: "Types of Inherency",
                content: "There are three main types barriers you can identify:\n\n1.  **Structural Inherency (Laws):** A specific law prevents the solution. (e.g., 'The law bans organ sales. We must repeal the law.').\n2.  **Attitudinal Inherency (Mindset):** The government hates the idea. (e.g., 'The President is opposed to climate action. We must force a mandate.').\n3.  **Existential Inherency (Gap):** It just hasn't been done yet. A gap in knowledge or technology.",
                keyPoints: ["Structural (Laws)", "Attitudinal (Hate)", "Existential (Gap)"],
                tip: "Structural Inherency is the strongest. It is physical proof that the status quo CANNOT solve."
            },
            {
                type: "content",
                title: "4. Topicality (The Jurisdiction)",
                content: "Topicality (T) asks: **Is the Plan part of the Resolution?**\n\nTopic: \"Reform the Police.\"\nAff Plan: \"Increase funding for Firefighters.\"\n\nWait! Firefighters are essential, but they are NOT Police. The Aff is **Off-Topic**.\n\nThis is a jurisdictional issue. The judge cannot vote for a plan that isn't on the ballot. If the Neg wins Topicality, the Aff loses immediately, even if the plan saves the world.",
                keyPoints: ["On Topic?", "Jurisdiction", "Immediate Loss"],
                tip: "T is a voting issue. It comes before everything else. If you are not Topical, you are not in the debate."
            },
            {
                type: "content",
                title: "5. Solvency (The Mechanism)",
                content: "Solvency asks: **Will the plan work?**\n\nSignificance/Harms prove the world is on fire. Solvency proves your water hose is connected.\n\nYou need **Solvency Advocates**: Experts who say your specific idea will fix the specific problem.\n\nNeg Attack: **Solvency Deficit**. \"The plan tries to ban guns, but criminals will keep them. The plan fails to solve the murder rate.\"",
                keyPoints: ["Will it work?", "Advocates", "Solvency Deficit"],
                tip: "You don't need to solve 100% of the problem. Solving 1% is better than 0%. But you must solve *something*."
            },
            {
                type: "content",
                title: "The Prima Facie Case",
                content: "The First Affirmative Constructive (1AC) speech is called **Prima Facie** (Latin for 'On its first face').\n\nIt must present ALL 5 stock issues clearly.\n\nIf the 1AC reads a Plan and Solvency but forgets Harms, the Neg doesn't even need to debate meanings. They just stand up and say: \"No Harms presented. Prima Facie failure. Judged should vote Neg on Presumption.\" It is an automatic Technical Knockout (TKO).",
                keyPoints: ["Prima Facie", "First face", "TKO"],
                tip: "Check your 1AC before every round. Do I have S, H, I, T, S? If one is missing, write it in."
            },
            {
                type: "question",
                id: "l25-01-q1",
                question: "The Plan argues we should build a moon base. The Neg argues 'NASA is already building a moon base next year'. Which Stock Issue is the Aff losing?",
                options: [
                    { id: "a", text: "Topicality" },
                    { id: "b", text: "Inherency" },
                    { id: "c", text: "Solvency" },
                    { id: "d", text: "Harms" }
                ],
                correctAnswer: "b",
                explanation: "Inherency requires a BARRIER. If the status quo (NASA) is already doing the plan, there is no barrier. The plan is unnecessary/redundant. The Aff loses on Inherency."
            },
            {
                type: "content",
                title: "Neg Strategy: The Table Leg",
                content: "Think of the Aff Case as a table supported by 5 legs (Stock Issues).\n\nThe Neg only needs to kick out ONE leg to collapse the table.\n\n*   **Round 1 Strategy:** Kick all 5 legs. (Attack everything).\n*   **Round 3 Strategy:** See which leg is wobbly (e.g., they have bad Solvency evidence).\n*   **Final Rebuttal:** Ignore the other 4 legs and focus 100% of your time smashing the Solvency leg.",
                keyPoints: ["Table Leg theory", "Attack all then focus", "Collapse strategy"],
                tip: "Don't try to win every argument in the last speech. Win the ONE argument that kills the case."
            },
            {
                type: "practice",
                id: "l25-01-p1",
                title: "Diagnose the Case",
                description: "Find the missing stock issue.",
                practice: {
                    type: "text-analysis",
                    targetSkill: "Stock Issues",
                    text: "Case: 'Poverty is terrible (Harms). Millions suffer (Sig). We should pass a Universal Basic Income (Plan). This fits the topic of Economic Reform (Topicality).'",
                    instructions: "What is missing? Why is this case vulnerable to a 'Prima Facie' attack?",
                    successCriteria: ["Missing Solvency (Does UBI work?)", "Missing Inherency (Why don't we have UBI now?)", "Without Solvency, it's just a wish list."]
                }
            },
            {
                type: "content",
                title: "Summary: The Checklist",
                content: "Before you write a single practice case, write 'SHITS' on a post-it note. Every argument you make must serve one of these 5 masters. If it doesn't, cut it.",
                keyPoints: ["Checklist", "Discipline", "Cut the fluff"]
            }
        ]
    },
    {
        lessonId: "l25-02",
        pages: [
            {
                type: "content",
                title: "Introduction: The 'So What?'",
                content: "You proved the Plan works (Solvency). You proved the problem is real (Harms).\n\nThe Judge asks: **\"So what?\"**\n\nThis is the **Impact**. The Impact is the reason we care. Without an Impact, a debate is just a conversation about logistics. You must give the judge a reason to vote for you that connects to human suffering or survival.",
                keyPoints: ["So What?", "Reason to care", "Suffering or Survival"],
                tip: "Impacts are the currency of debate. He who has the biggest impact usually wins."
            },
            {
                type: "content",
                title: "Terminal Impacts",
                content: "You must chain your argument until it hits a **Terminal Impact** (The End of the Line).\n\n*   **Initial Harm:** Students fail math.\n*   **Internal Link:** Failed math -> No jobs.\n*   **Internal Link:** No jobs -> Poverty.\n*   **Terminal Impact:** Poverty -> Death / Suffering.\n\nYou cannot stop at \"Students fail math\". Why does that matter? Keep asking \"Why?\" until you reach Death, War, or Dehumanization.",
                keyPoints: ["Terminal Impact", "End of line", "Chain logic"],
                tip: "If your impact isn't Terminal, the Neg will say 'So what?' and you will lose."
            },
            {
                type: "content",
                title: "The Big Three: M.P.T.",
                content: "Every Impact has three dimensions:\n\n1.  **M**agnitude: How big is it? (Nuclear War = Big. Stubbed Toe = Small).\n2.  **P**robability: How likely is it? (Stubbed Toe = 100%. Nuclear War = 1%).\n3.  **T**imeframe: When does it happen? (Stubbed Toe = Now. Nuclear War = ?).\n\nDebate is the art of weighing these three against each other.",
                keyPoints: ["Magnitude", "Probability", "Timeframe", "Weighing"]
            },
            {
                type: "content",
                title: "Magnitude I: Scope vs Severity",
                content: "Magnitude has two sub-types:\n\n*   **Scope:** The number of people affected. (e.g., \"1 Billion people lose $1\").\n*   **Severity:** The intensity of the harm. (e.g., \"1 person is tortured forever\").\n\n**The Debate:** Util debates emphasize Scope (\"Max happiness for max people\"). Human Rights debates emphasize Severity (\"We cannot allow torture, no matter the cost\").",
                keyPoints: ["Scope (Count)", "Severity (Intensity)", "Util vs Rights"],
                tip: "If you have small numbers, argue Severity. 'A single injustice is a threat to justice everywhere.'"
            },
            {
                type: "content",
                title: "Magnitude II: Structural Violence",
                content: "Not all violence is a bomb explusion. **Structural Violence** is silent.\n\nPoverty, Racism, and TB kill millions every year, but slowly. This is arguably a **Larger Magnitude** than a hypothetical war.\n\nArgument: \"Systemic violence is happening NOW (100% Probability). Your war is a fantasy (1% Probability). Prioritize the real suffering.\"",
                keyPoints: ["Structural Violence", "Silent killers", "100% Probability"],
                tip: "Use the 'Ongoing' frame. 'This tragedy happens every single day until you sign the ballot.'"
            },
            {
                type: "content",
                title: "Extinction First?",
                content: "The trump card of debate.\n\n**Argument:** \"Extinction outweighs everything. You can't have rights/economy/justice if everyone is dead.\"\n\n**Defense:** \"Probability Checks\". If the risk is 0.00001%, it is negligible. Don't let opponents scare you with ghost stories.",
                keyPoints: ["Extinction", "Trump card", "Prerequisite"],
                tip: "If they run Extinction, attack the Link Probability. 'Sure, extinction is bad, but you don't cause it.'"
            },
            {
                type: "content",
                title: "Timeframe (The Discount Rate)",
                content: "Humans value the present more than the future.\n\n\"Save 1 life today\" vs \"Save 10 lives in 100 years.\"\n\n**Argument for Now:** \"People are dying as we speak.\"\n**Argument for Later:** \"Future generations have no voice. We must protect them (The Longtermism Framework).\"",
                keyPoints: ["Present bias", "Future generations", "Longtermism"],
                tip: "Timeframe is the best tie-breaker. If impacts are equal in size, the one happening SOONER wins."
            },
            {
                type: "content",
                title: "Impact Turns (The Spark)",
                content: "The most aggressive move: **Good is Bad.**\n\nOpponent: \"Plan causes Economic Collapse!\"\nYou: \"**Turn:** Economic Collapse is GOOD. Growth kills the environment and fuels war. We need de-growth to save the planet.\"\n\nThis turns their biggest weapon into your biggest shield. It is risky (the judge might think you are crazy), but high reward.",
                keyPoints: ["Impact Turn", "Bad is Good", "High Risk High Reward"],
                tip: "Never Impact Turn 'Racism' or 'Genocide'. You will be disqualified for hate speech. Only turn 'Economy', 'Hegemony', or 'Democracy'."
            },
            {
                type: "content",
                title: "Moral Frameworks: Util vs Deon",
                content: "How do we count?\n\n*   **Utilitarianism (Util):** The greatest good for the greatest number. (Math-based). \"Kill 1 to save 5.\"\n*   **Deontology (Deon):** Moral rules are absolute. (Rule-based). \"Killing is wrong, even to save 5.\"\n\nMost Policy debate defaults to Util, but you can challenge this.",
                keyPoints: ["Util", "Deon", "Math vs Rules"],
                tip: "If you are losing the body count, switch to Deontology. 'We have a moral obligation regardless of the outcome.'"
            },
            {
                type: "question",
                id: "l25-02-q1",
                question: "You have two impacts. A: High Magnitude (Nuke War), Low Probability (1%). B: Medium Magnitude (Recession), High Probability (100%). Which one wins under 'Expected Value'?",
                options: [
                    { id: "a", text: "Impact A (Nuke War) because it's scary." },
                    { id: "b", text: "Impact B (Recession) because it's guaranteed." },
                    { id: "c", text: "Impact A, because infinity x 1% is still infinity." },
                    { id: "d", text: "Neither." }
                ],
                correctAnswer: "b",
                explanation: "Expected Value = Impact x Probability. Smart judges often prefer a guaranteed harm over a sci-fi fantasy. 'Any risk of extinction' is a fallacy if the risk is effectively zero."
            },
            {
                type: "content",
                title: "Drill: The Weighing Game",
                content: "Write a short speech weighing these two scenarios:\n\n1.  **Scenario A:** A terrorist attack kills 100 people (Happening tomorrow).\n2.  **Scenario B:** A climate shift kills 1 million people (Happening in 50 years).\n\nWeigh A using **Timeframe**. Weigh B using **Magnitude**. Which is more persuasive to a parent judge? Which to a tech judge?",
                keyPoints: ["Weighing scenarios", "Timeframe vs Magnitude", "Audience adaptation"]
            },
            {
                type: "practice",
                id: "l25-02-p1",
                title: "Impact Manager",
                description: "Terminalize the impact.",
                practice: {
                    type: "argument-builder",
                    targetSkill: "Impacts",
                    topic: "Free Trade",
                    instructions: "Link 'Tariffs' to 'Nuclear War'. (This is a classic debate stretch).",
                    successCriteria: ["Tariffs -> Trade War", "Trade War -> Real War", "Real War -> Escalation -> Nuclear", "Show the chain clearly."]
                }
            },
            {
                type: "content",
                title: "Summary: The Scale",
                content: "The Judge is a scale. You put Impacts on your side. The heavier impact wins. Use Magnitude, Probability, and Timeframe to make your impact feel like a mountain.",
                keyPoints: ["Scale", "Heavy wins", "MPT"]
            }
        ]
    },
    {
        lessonId: "l25-03",
        pages: [
            {
                type: "content",
                title: "Introduction: The Blueprint",
                content: "The **Plan** is the specific law the Affirmative wants to pass.\n\nIt is written out formally, like a bill in Congress.\n\nIt is the *only* thing the Affirmative can defend. Most 1ACs (First Affirmative Constructive) spend 8 minutes talking about how great the world *could* be, but the only thing that matters is the 10 seconds where they read the Plan Text.",
                keyPoints: ["Blueprint", "Bill", "Defend the Plan"],
                tip: "If the Plan isn't written down, it doesn't exist. Always have a text."
            },
            {
                type: "content",
                title: "Plank 1: The Mandates",
                content: "What exactly are you doing?\n\n\"The US Federal Government should...\"\n\n*   **Bad:** \"Increase space funding.\"\n*   **Good:** \"Allocate $50 billion to NASA for a Mars Mission.\"\n\nVagueness is fatal. If you are vague, the Neg will say: \"Your plan doesn't say you will build rockets, so you don't solve Mars.\" Be painfully specific.",
                keyPoints: ["Mandates", "Specifics", "Avoid vagueness"],
                tip: "The more specific your plan, the harder it is for the Neg to find loopholes."
            },
            {
                type: "content",
                title: "Plank 2: The Agent of Action",
                content: "**Who** is doing it? This choice determines your strategy.\n\n*   **USFG (Congress):** Standard. Good for budget/laws. Vulnerable to 'Politics DAs'.\n*   **Supreme Court (SCOTUS):** Good for Rights. Can't spend money. Immune to politics.\n*   **Executive Order (The President):** Fast. Can be overturned.\n*   **The 50 States:** Good for local issues (e.g., Education). Hard to coordinate.",
                keyPoints: ["Agent", "Congress", "SCOTUS", "President"],
                tip: "Choosing the Agent is a strategic choice. A 'Court Plan' avoids 'Politics DAs' but loses 'Spending Power'."
            },
            {
                type: "content",
                title: "Plank 3: Enforcement & Funding",
                content: "**Funding:** Where does the money come from?\n*   Deficit Spending (Borrowing).\n*   Carbon Tax.\n*   Cut Military Spending.\n\n**Enforcement:** Who makes sure it happens?\n*   EPA (Environment).\n*   DoJ (Justice).\n\n\"Enforcement through normal means\" is a standard phrase that means 'We use the usual agencies'.",
                keyPoints: ["Funding Source", "Enforcement Agency", "Normal Means"],
                tip: "If you don't specify funding, the Neg will assume you are printing money (Inflation DA)."
            },
            {
                type: "content",
                title: "Fiat Power: The Magic Wand",
                content: "The most important rule in Policy Debate.\n\n**Fiat** (Latin: \"Let it be done\") means the Aff gets to assume the plan passes.\n\nThe Neg CANNOT argue \"Congress won't vote for this.\"\nWe debate **Should** it happen, not **Would** it happen.\n\nWithout Fiat, every debate would end with \"The Senate is deadlocked. Nothing happens.\"",
                keyPoints: ["Fiat", "Magic wand", "Should vs Would"],
                tip: "Fiat only covers the PASSAGE of the plan. It does not cover the OUTCOME. You can Fiat that we spend $1 Trillion; you cannot Fiat that it fixes the economy."
            },
            {
                type: "content",
                title: "Normal Means",
                content: "When a plan is silent on details, we assume **Normal Means**.\n\nExample: \"Build a road.\"\nNormal Means assumes: We buy concrete, we hire workers, we follow OSHA safety rules.\n\nIf the Neg argues: \"Your road plan uses slave labor!\", you reply: \"No. Normal means implies legal labor contracts in the US.\"",
                keyPoints: ["Normal Means", "Status Quo procedures", "Default settings"],
                tip: "Use 'Normal Means' as a shield against weird Neg arguments about implementation details."
            },
            {
                type: "content",
                title: "The Spike",
                content: "A 'Spike' is a tiny clause added to a plan to stop a specific Neg argument.\n\nNeg Attack: \"The plan destroys the Coal Industry!\"\nPlan Spike: \"...and allocate $20 billion for Coal Miner Retraining programs.\"\n\nYou have 'Spiked' out of the Disadvantage. You pre-solved the problem before they even raised it.",
                keyPoints: ["Spike", "Pre-empt", "Trap"],
                tip: "Spikes are smart, but if you have too many, it looks defensive. Use them for the obvious attacks."
            },
            {
                type: "question",
                id: "l25-03-q1",
                question: "The Neg argues: 'The Republicans in the Senate will never pass this plan.' How does the Aff respond?",
                options: [
                    { id: "a", text: "You're right, we lose." },
                    { id: "b", text: "We will lobby them very hard." },
                    { id: "c", text: "Fiat. We debate the merits of the plan, not the political possibility. Assume it passes." },
                    { id: "d", text: "We will bribe them." }
                ],
                correctAnswer: "c",
                explanation: "Fiat is the foundational rule of Policy Debate. It bypasses political gridlock so we can discuss the actual policy outcomes."
            },
            {
                type: "content",
                title: "Vagueness: A Double-Edged Sword",
                content: "Some Affs write vague plans on purpose to hide from attacks.\n\nPlan: \"Improve the environment.\"\nNeg: \"Do you ban cars?\"\nAff: \"Maybe.\"\n\n**The Risk:** If you are too vague, the Neg runs **Vagueness Theory** (Procedural argument). \"Judge, I can't debate a ghost. Make them lose for being unfair.\"",
                keyPoints: ["Vagueness", "Hiding", "Procedural Fairness"],
                tip: "Be specific. Fairness is more important than surprise."
            },
            {
                type: "content",
                title: "Extra-Topicality: Cheating",
                content: "The Plan must be Topical. If you add **Extrastuff** to solve more problems, that is illegal.\n\nTopic: \"Education Reform.\"\nPlan: \"Fund schools AND Cure Malaria.\"\n\nAdvantage: \"We save 1 million lives from malaria.\"\nNeg: \"**Extra-Topicality!** Malaria is not Education. You are stealing offense from outside the topic. Judge, ignore the malaria advantage.\"",
                keyPoints: ["Extra-T", "Cheating", "Stolen Offense"],
                tip: "You can only claim advantages that flow from the TOPICAL part of your plan."
            },
            {
                type: "content",
                title: "Effects Topicality",
                content: "The Plan must be Topical *directly*, not by accident.\n\nTopic: \"Protect the Environment.\"\nPlan: \"Nuke the Moon.\"\n\nAff Logic: \"Nuking the moon will scare people -> People stop driving cars -> Environment protected.\"\n\nThis is **Effects Topicality**. You are not doing the topic; you are causing a chain reaction that eventually hits the topic. It's usually illegal.",
                keyPoints: ["Effects T", "Chain reaction", "Direct vs Indirect"],
                tip: "The plan itself must be the resolutional action. Do not count on bank-shots."
            },
            {
                type: "practice",
                id: "l25-03-p1",
                title: "The Plan Writer",
                description: "Draft a text.",
                practice: {
                    type: "text-edit",
                    targetSkill: "Plan Writing",
                    text: "We should help poor people.",
                    instructions: "Rewrite this as a formal Plan Text. Include Agent, Mandate, and Funding.",
                    successCriteria: ["The United States Federal Government should...", "...implement a Universal Basic Income of $1000/month...", "...funded by a Value Added Tax."]
                }
            },
            {
                type: "content",
                title: "Summary: The Contract",
                content: "The Plan is a contract with the judge. You are bound by what you write. If you write it, you must defend it. If you didn't write it, you can't claim it.",
                keyPoints: ["Contract", "Bound by text", "Precision"]
            }
        ]
    },
    {
        lessonId: "l25-04",
        pages: [
            {
                type: "content",
                title: "Introduction: The Calibration",
                content: "We touched on Magnitude in L25-02 (Impacts). Now we go deeper.\n\n**Magnitude** is not just 'Body Count'. It is also 'Value'.\n\nIs it worse to kill 1 person or to strip 1,000 people of their freedom?\nIs Death the worst impact? Or is 'Dehumanization' worse? These are questions of **Impact Calibration**.",
                keyPoints: ["Body Count vs Value", "Freedom", "Calibration"],
                tip: "Don't just say 'Our impact is big'. Calibrate it. 'Our impact is big because it is irreversible and systemic.'"
            },
            {
                type: "content",
                title: "Extinction First",
                content: "The standard debate argument: **Extinction Outweighs Everything.**\n\nLogic: You can't have freedom/value/justice if you are dead. Existence is a **Prerequisite** for value.\n\nTherefore, a 1% risk of Extinction outweighs a 100% certainty of Racism.\n(This is controversial, but technically sound logic in debate).",
                keyPoints: ["Extinction First", "Prerequisite", "1% > 100%"]
            },
            {
                type: "content",
                title: "Value to Life",
                content: "The counter-argument: **Value to Life Outweighs Life Itself.**\n\n\"Mere survival is not enough. If we survive in a totalitarian slave state, that is a fate worse than death.\"\n\nThis argument attacks the 'Extinction' logic. It says Magnitude is measured in *Dignity*, not pulse. A life without dignity has zero magnitude.",
                keyPoints: ["Value to Life", "Fate worse than death", "Dignity"],
                tip: "Use this against 'Security' arguments. 'They promise safety, but they steal our liberty. Safety without liberty is a prison.'"
            },
            {
                type: "content",
                title: "Scope vs Severity",
                content: "*   **Scope:** How many people? (1 Billion).\n*   **Severity:** How much do they suffer? (Itchy nose vs Torture).\n\nA high scope (Everyone gets an itchy nose) is annoying. A low scope (One person gets tortured) is tragic.\n\nDebaters usually prioritize Severity over Scope when the number is small, but Scope over Severity when the number is global. You must argue WHY your metric matters more.",
                keyPoints: ["Scope (Count)", "Severity (Pain)", "Metric debate"]
            },
            {
                type: "content",
                title: "Systemic Impacts (The Silent Killer)",
                content: "Big wars get headlines. Systemic Violence gets ignored.\n\n**Systemic Impacts:** Poverty, Disease, Racism.\n\nArgument: \"These kill more people than all wars combined. They just do it slowly. If you vote Neg to prevent a 'Possible War', you are endorsing 'Certain Death' from poverty.\"\n\nThis uses **Timeframe** (Now) and **Probability** (100%) to outweigh Magnitude (Nuke War).",
                keyPoints: ["Systemic vs Episodic", "Slow death", "Silent Killer"]
            },
            {
                type: "content",
                title: "Infinite Impact (Bad Math)",
                content: "Arguments involving AI or Nanotech often claim 'Infinite' impact.\n\n\"If AI takes over, it conquers the galaxy. That is infinite value lost.\"\n\nInfinity breaks math. Infinity x 1% Probability = Infinity.\n\n**Defense:** \"Probability Checks\". If Probability is Zero, Infinity is Zero. Also, proving 'Infinite Value' is impossible because we can't measure the future galaxy.",
                keyPoints: ["Infinite Impact", "Galaxy", "Breaks math"],
                tip: "Ridicule the 'Sci-Fi' impact. 'Judge, are we debating policy or writing a screenplay?'"
            },
            {
                type: "content",
                title: "Reversibility",
                content: "A key weighing mechanism. If we make a mistake, can we fix it?\n\n*   **Irreversible:** Extinction, Death, Environmental Tipping Points. (You can't come back).\n*   **Reversible:** Economic decline, War, Political loss (You can rebuild).\n\n\"Judge, you must vote against the Irreversible impact. We can fix the economy later. We can't fix dead people. Err on the side of caution.\"",
                keyPoints: ["Reversibility", "Can't fix death", "Caution"],
                tip: "Use this when you are losing the Probability debate but winning Magnitude."
            },
            {
                type: "content",
                title: "Moral Hazard",
                content: "Sometimes helping people increases Magnitude later.\n\n\"If we bail out the banks, they will take bigger risks next time, leading to a BIGGER crash.\"\n\nThis argues that solving a small impact NOW causes a huge impact LATER. It turns the 'Benevolence' of the Aff into a 'Danger'.",
                keyPoints: ["Moral Hazard", "Bailouts", "Worse later"]
            },
            {
                type: "content",
                title: "Root Cause Analysis",
                content: "The ultimate Magnitude argument: **The Root Cause.**\n\n\"War is just a symptom. Capitalism is the disease. If you stop this war but leave Capitalism, another war will start.\"\n\nYou argue that your impact is the SOURCE of all other impacts. Therefore, solving it solves everything else.",
                keyPoints: ["Root Cause", "Disease vs Symptom", "Solve the Source"],
                tip: "Kritiks (Ks) love Root Cause arguments. 'Racism is the root cause of the violence.'"
            },
            {
                type: "question",
                id: "l25-04-q1",
                question: "Which represents a 'Systemic Impact'?",
                options: [
                    { id: "a", text: "A meteor strike." },
                    { id: "b", text: "Structural poverty killing 10,000 children daily." },
                    { id: "c", text: "A terrorist attack." },
                    { id: "d", text: "A computer glitch." }
                ],
                correctAnswer: "b",
                explanation: "Systemic means 'Ongoing' and 'Built into the system'. Meteors and Terrorists are events (Episodic). Poverty is a condition (Systemic). Systemic impacts accumulate huge magnitude over time (Timeframe)."
            },
            {
                type: "content",
                title: "Drill: The Comparison",
                content: "You have two bad options. Choose one and justify it.\n\nOption A: A dictator takes over (Loss of Liberty for 100 years).\nOption B: A civil war starts (Death of 1 million people, but freedom after).\n\nThere is no right answer. Justify based on Magnitude (Death) vs Value (Liberty).",
                keyPoints: ["Dictator vs War", "Justify the tradeoff"]
            },
            {
                type: "question",
                id: "l25-04-p1",
                question: "Opponent argues: 'Economic growth is key to solving climate change.' How do you weigh this?",
                options: [
                    { id: "a", text: "Agree." },
                    { id: "b", text: "Turn: Growth CAUSES climate change (Industrialization). The impact (Extinction) outweighs the benefit (Money)." },
                    { id: "c", text: "Say economy changes are temporary." },
                ],
                correctAnswer: "b",
                explanation: "This is a 'Link Turn' combined with 'Magnitude Weighing'. You prove their 'Good' thing is actually the cause of the 'Bad' thing (Extinction), which is the biggest impact."
            },
            {
                type: "content",
                title: "Summary: The Telescope",
                content: "Magnitude is looking through a telescope. Things look bigger or smaller depending on which end you look through. Make your impacts look like mountains and theirs like molehills.",
                keyPoints: ["Telescope", "Mountains vs Molehills"]
            }
        ]
    },
    {
        lessonId: "l25-05",
        pages: [
            {
                type: "content",
                title: "Introduction: The Trap",
                content: "The **Disadvantage (DA)** is the Negative's primary weapon.\n\nIt allows you to argue that the Plan is a *bad idea* regardless of whether it solves the problem.\n\nIt is a trap. The Aff walks in (Plan), triggers the wire (Link), and the rock falls (Impact).",
                keyPoints: ["DA Structure", "The Trap", "Net Benefits"],
                tip: "A good DA is better than a good Solvency attack. It is active offense."
            },
            {
                type: "content",
                title: "Part 1: Uniqueness (The Cliff)",
                content: "You must prove the bad thing *won't* happen in the Status Quo.\n\nImagine the Status Quo is walking along a cliff edge (Uniqueness). The view is nice.\nIf the Status Quo is ALREADY falling off the cliff, then pushing them (Link) doesn't matter.\n\n**Key Phrase:** \"The Economy is high and stable right now (Uniqueness).\"",
                keyPoints: ["Uniqueness", "Cliff edge", "Status Quo is okay"],
                tip: "If you don't have Uniqueness, you don't have a Disadvantage."
            },
            {
                type: "content",
                title: "Part 2: The Link (The Push)",
                content: "How does the plan trigger the disaster?\n\nPlan: \"Spend $1 Trillion.\"\nLink: \"Spending causes Inflation.\"\n\n**Specific Links** are better/stronger than **Generic Links**.\nGeneric: \"Change is bad.\"\nSpecific: \"This specific tax will crush the specific solar panel industry.\"",
                keyPoints: ["Link", "Trigger", "Specifics"],
                tip: "Quote the Aff's own plan text in your link card to make it undeniable."
            },
            {
                type: "content",
                title: "Part 3: The Internal Link (The Chain)",
                content: "You must connect the Link to the Impact.\n\nStart: Inflation.\nEnd: Nuclear War.\nHow??\n\n**Chain:** Inflation -> Economic Collapse -> Resource Scarcity -> Global War -> Nuclear Usage.\n\nAttempt to skip steps? The Aff will shout **\"Logic Gap!\"**.",
                keyPoints: ["Internal Link", "Chain of logic", "No Gaps"]
            },
            {
                type: "content",
                title: "Part 4: The Impact (The Boom)",
                content: "We covered this in L25-02. It must be Terminal.\n\nDon't stop at \"Economy crashes\". Who cares? Rich people lose money?\n\nGo all the way: \"Economy crashes -> Poverty -> Starvation -> Death.\"\n\n**Magnitude, Probability, Timeframe.** Use them.",
                keyPoints: ["Terminal Impact", "Death", "MPT"]
            },
            {
                type: "content",
                title: "Defending: Non-Unique",
                content: "How does the Aff defeat a DA? Attack the Uniqueness.\n\nDA: \"Plan causes Recession.\"\nAff Response: \"**Non-Unique:** We are already in a recession! Look at the stock market!\"\n\nIf the disaster is already happening, the plan didn't cause it.",
                keyPoints: ["Non-Unique", "Already happening", "Not our fault"]
            },
            {
                type: "content",
                title: "Defending: Thumpers",
                content: "A 'Thumper' is an event that happened recently that SHOULD have triggered the DA, but didn't.\n\nNeg: \"Spending causes Inflation.\"\nAff: \"**Thumper:** We spent $2 Trillion last year on COVID relief. Inflation didn't spike. Your link theory is empirically denied.\"",
                keyPoints: ["Thumper", "Empirical Denial", "History check"]
            },
            {
                type: "content",
                title: "Link Turn: The Pivot",
                content: "The most powerful move in debate.\n\nNeg: \"Plan causes Inflation.\"\nAff: \"**Turn:** Plan SOLVES Inflation. Investing in infrastructure lowers costs and deflation occurs.\"\n\nNow the Neg's DA is an Advantage for the Aff. The Neg must now answer their own argument.",
                keyPoints: ["Link Turn", "180 degree", "Offense"]
            },
            {
                type: "content",
                title: "Impact Turn: The Spark",
                content: "Scary but effective.\n\nNeg: \"Plan hurts the Economy.\"\nAff: \"**Turn:** Growth is bad. It kills the environment. De-growth saves the planet.\"\n\n**Warning:** NEVER Link Turn and Impact Turn the same DA. This is a \"Double Turn\".\n(You say: \"We stop the economy!\" AND \"Stopping the economy is bad!\"). You literally debate yourself.",
                keyPoints: ["Impact Turn", "Double Turn", "Don't debate yourself"],
                tip: "Double Turns are instant losses. Choose ONE turn."
            },
            {
                type: "content",
                title: "Types of DAs",
                content: "*   **Politics DA:** Plan hurts political capital -> Agenda fails -> War.\n*   **Spending DA:** Plan costs money -> Deficit -> Collapse.\n*   **Federalism DA:** Plan usurps State power -> Tyranny.\n*   **Biz Confidence DA:** Plan scares investors -> Flight -> Recession.",
                keyPoints: ["Politics", "Spending", "Federalism", "Biz Con"]
            },
            {
                type: "question",
                id: "l25-05-q1",
                question: "Which represents a 'Double Turn'?",
                options: [
                    { id: "a", text: "Link Turn + Impact Turn." },
                    { id: "b", text: "Non-Unique + Link Turn." },
                    { id: "c", text: "Thumper + Impact Defense." },
                    { id: "d", text: "Solvency Takeout + DA." }
                ],
                correctAnswer: "a",
                explanation: "If you Link Turn ('We INCREASE the economy') and Impact Turn ('Economy is BAD'), you are effectively saying 'We INCREASE the BAD thing'. You just built a Disadvantage against yourself. Congrats, you played yourself."
            },
            {
                type: "practice",
                id: "l25-05-p1",
                title: "Build a DA",
                description: "Construct the shell.",
                practice: {
                    type: "argument-builder",
                    targetSkill: "Disadvantages",
                    topic: "Ban Cars",
                    instructions: "Write a DA for 'Banning Cars'.",
                    successCriteria: ["Uniqueness: Auto industry is currently stable.", "Link: Banning cars bankrupts Ford/GM.", "Internal Link: Bankruptcy causes glorious recession.", "Impact: Recession causes global poverty/war."]
                }
            },
            {
                type: "content",
                title: "Summary: The Trap Mechanics",
                content: "The DA is a four-part machine. Uniqueness, Link, Internal Link, Impact. If any part breaks, the machine fails. Keep your machine oiled.",
                keyPoints: ["Four parts", "Machine", "Keep it oiled"]
            }
        ]
    },
    {
        lessonId: "l25-06",
        pages: [
            {
                type: "content",
                title: "Introduction: The Gambler",
                content: "Policy makers are professional gamblers. They bet on outcomes.\n\n**Probability Analysis** asks: \"What are the odds?\"\n\nA 100% chance of saving $10 is worth more than a 0.000001% chance of saving $1 Billion (Expected Value: $10 vs $1). Debate is the art of proving your odds are better than theirs.",
                keyPoints: ["Gamblers", "Odds", "Expected Value"],
                tip: "Use the phrase 'Expected Value Flip'. 'Even if their impact is bigger, our probability is so much higher that we win the EV calculation.'"
            },
            {
                type: "content",
                title: "Risk = Impact x Probability",
                content: "This is the 'Golden Formula' of debate judging.\n\n*   **Aff Impact:** 1,000,000 deaths x 1% Probability = 10,000 effective deaths.\n*   **Neg Impact:** 50,000 deaths x 100% Probability = 50,000 effective deaths.\n\nNeg wins. Even though the Aff number is bigger, the **Risk** is smaller. Judges are math nerds.",
                keyPoints: ["Golden Formula", "Effective Impact", "Math wins"]
            },
            {
                type: "content",
                title: "Attacking Probability: Internal Links",
                content: "How do you lower their probability? Attack the chain.\n\nArgument: \"This chain is too long.\"\nIf each step has a 50% chance, and there are 10 steps, the final odds are 0.1% (0.5^10).\n\n\"Judge, for their impact to happen, A, B, C, D, and E must all go wrong. For our impact, only A needs to happen.\"",
                keyPoints: ["Long chains", "Probability decay", "A-E vs A"],
                tip: "Count the steps in their logic. 'Their scenario requires 7 miracles. Ours requires 1 law.'"
            },
            {
                type: "content",
                title: "Attacking Probability: Evidence Quality",
                content: "Who says it will happen?\n\n*   **Good:** Peer-reviewed study, Consensus of experts.\n*   **Bad:** Blog post, Sci-Fi writer, Clickbait headline.\n\nArgument: \"Their author is a journalist selling fear. Our author is a professor analyzing data. Prefer data over drama.\"",
                keyPoints: ["Source quality", "Data vs Drama", "Consensus"]
            },
            {
                type: "content",
                title: "Conjunctive Probability",
                content: "This is the mathematical term for 'The Chain'.\n\n**Rule:** The probability of a chain is ALWAYS lower than the probability of its weakest link.\n\nIf the 'War' link is 10%, the entire impact cannot be more than 10%. You can't have a 100% nuclear war from a 10% trade war.",
                keyPoints: ["Conjunctive Probability", "Weakest Link", "Math Cap"]
            },
            {
                type: "content",
                title: "Epistemic Modality (The Language of 'Might')",
                content: "Look at the author's verbs. Do they say 'Will' or 'Could'?\n\n*   \"**Could** cause war\" = Low Probability (Speculation).\n*   \"**Will** cause war\" = High Probability (Prediction).\n\nQuote their own uncertain words against them. \"Judge, their own author says it 'might' happen. We don't destroy the economy for a 'might'.\"",
                keyPoints: ["Author language", "Could vs Will", "Modality"],
                tip: "CTRL+F their evidence for 'could', 'possibly', 'maybe'. Highlight it."
            },
            {
                type: "content",
                title: "Scenario Planning (Occam's Razor)",
                content: "Good probability analysis paints a picture.\n\n**Complexity is Bad.**\n\"For their war to happen: Russia invades -> NATO responds -> China joins -> Nukes fly. That is 4 unlikely steps.\"\n\"For our impact: People get hungry. That is 1 guaranteed step.\"\n\n**Occam's Razor:** The simplest path is usually the truth.",
                keyPoints: ["Scenario Planning", "Step counting", "Occam's Razor"]
            },
            {
                type: "content",
                title: "Defense: 'Any Risk' Fallacy",
                content: "Opponents will say: \"Even a 1% risk of Extinction is infinite badness!\"\n\n**Response:** \"There is a risk a meteor hits us right now. We don't live our lives in fear of 0.0001% risks. Policy making requires ignoring negligible risks to solve real problems.\"\n\nCall it 'Paralysis'. If we fear every shadow, we never move.",
                keyPoints: ["Any Risk", "Paralysis", "Negligible risk"]
            },
            {
                type: "content",
                title: "Framework: Precautionary Principle",
                content: "How should the judge evaluate risk?\n\n1.  **Cost-Benefit Analysis (CBA):** Multiply Impact x Probability. (Risk).\n2.  **Precautionary Principle:** If the impact is irreversible (Extinction), we must avoid it at all costs, even if probability is low.\n\nIf you have a Low Prob / High Impact scenario, argue for the **Precautionary Principle**.",
                keyPoints: ["CBA", "Precautionary Principle", "Safety First"]
            },
            {
                type: "content",
                title: "Drill: The Risk Calculus Speech",
                content: "Give a 30-second speech weighing these two:\n\n1.  **Status Quo:** 100% chance of 1 million people staying in poverty.\n2.  **Plan:** 10% chance of a Global Recession (Everyone gets poorer).\n\nWhy should we take the risk? Or why should we play it safe?",
                keyPoints: ["Poverty vs Recession", "Risk vs Reward"]
            },
            {
                type: "question",
                id: "l25-06-p1",
                question: "Which argument attacks Probability?",
                options: [
                    { id: "a", text: "Nuclear war would be bad." },
                    { id: "b", text: "There are too many safeguards for a nuclear launch to happen accidentally." },
                    { id: "c", text: "We should focus on the economy." },
                    { id: "d", text: "The plan costs money." }
                ],
                correctAnswer: "b",
                explanation: "It argues that the EVENT is unlikely to occur (Safeguards prevent it). It attacks the likelihood, not the size. It is a defensive argument on the 'Link' level."
            },
            {
                type: "content",
                title: "Summary: The Casino",
                content: "Debate is a casino. The Aff bets on the Plan. The Neg bets on the Status Quo. The Judge is the dealer. If you know the odds better than your opponent, you will break the bank.",
                keyPoints: ["Casino", "Dealer", "Know the odds"]
            }
        ]
    },
    {
        lessonId: "l25-07",
        pages: [
            {
                type: "content",
                title: "Review: The Policy Machine",
                content: "Unit 25 is the engine room of Policy Debate. We learned:\n\n1.  **Stock Issues:** The definition of a problem (Harms/Inherency/Solvency).\n2.  **Plan:** The specific legislative solution.\n3.  **Impacts:** Why it matters (Magnitude/Probability/Timeframe).\n4.  **Disadvantages:** The unintended consequences.\n5.  **Risk Calculus:** How to weigh it all.\n\nYou now have the tools to build a world.",
                keyPoints: ["Engine room", "Summary", "Tools"]
            },
            {
                type: "content",
                title: "Stock Issues Review",
                content: "**S.H.I.T.S.**\n\n*   **S**olvency: Does it work?\n*   **H**arms: Is it bad?\n*   **I**nherency: Is it happening now?\n*   **T**opicality: Is it on topic?\n*   **S**ignificance: Does it matter?\n\nIf the Aff loses ANY of these, they lose the round (except Significance, usually).",
                keyPoints: ["SHITS", "Burden of Proof", "All 5 needed"]
            },
            {
                type: "content",
                title: "The Plan Text Review",
                content: "Be specific. Use 'Normal Means' to cover holes. Use 'Spikes' to preempt attacks.\n\nUse **Fiat** to bypass 'Would' arguments and focus on 'Should' arguments. The Plan is your shield; stand behind it.",
                keyPoints: ["Specifics", "Fiat", "Shield"]
            },
            {
                type: "content",
                title: "Impact & Risk Review",
                content: "**Impact = Magnitude x Probability x Timeframe.**\n\n*   **Magnitude:** Size/Severity.\n*   **Probability:** Likelihood.\n*   **Timeframe:** Urgency.\n\nUse 'Extinction First' to win Magnitude. Use 'Systemic Impacts' to win Probability/Timeframe.",
                keyPoints: ["MPT formula", "Weighing mechanisms"]
            },
            {
                type: "content",
                title: "The Disadvantage Review",
                content: "The DA is a 4-part Trap.\n\n1.  **Uniqueness:** Cliff edge (Status Quo nice).\n2.  **Link:** The Push (Plan changes it).\n3.  **Internal Link:** The Fall (Logic chain).\n4.  **Impact:** The Splat (Terminal harm).\n\nDefend with: Non-Unique, Link Turn, Impact Turn.",
                keyPoints: ["Uniqueness", "Link", "Internal", "Impact", "Turns"]
            },
            {
                type: "content",
                title: "The Flowsheet",
                content: "In Policy debate, you MUST FLOW (take notes). You cannot track Stock Issues + 3 DAs + Impact Calc in your head.\n\nUse different colors for Aff and Neg. Use abbreviations. If you lose paper, you lose the round.",
                keyPoints: ["Flowing", "Colors", "Paper = Survival"]
            },
            {
                type: "question",
                id: "l25-07-q1",
                question: "Final Scenario: Neg runs a 'Nuclear War' DA. Aff proves the Link Probability is 0.0001%. Who wins?",
                options: [
                    { id: "a", text: "Neg, because Nuclear War is infinite magnitude." },
                    { id: "b", text: "Aff, because Risk = Impact x Probability. Near zero probability means near zero risk." },
                    { id: "c", text: "Draw." },
                    { id: "d", text: "Neg, because fear is powerful." }
                ],
                correctAnswer: "b",
                explanation: "Smart judges do the math. An impossible nuke war is less scary than a guaranteed recession. Zero times Infinity is undefined, but Zero times 'Big Number' is Zero."
            },
            {
                type: "question",
                id: "l25-07-q2",
                question: "Which Stock Issue is the 'Roadblock'?",
                options: [
                    { id: "a", text: "Solvency" },
                    { id: "b", text: "Harms" },
                    { id: "c", text: "Inherency" },
                    { id: "d", text: "Topicality" }
                ],
                correctAnswer: "c",
                explanation: "Inherency asks 'What is blocking the solution in the status quo?' It acts as the barrier to the plan. Without Inherency, the plan is unnecessary."
            },
            {
                type: "content",
                title: "Looking Ahead",
                content: "In Unit 26, we flip the script. We look at **Advanced Negative Strategy**.\n\nCounterplans (CPs). Kritiks (Ks). Theory.\n\nUnit 25 taught you how to build the house. Unit 26 will teach you how to blow it up.",
                keyPoints: ["Next: Unit 26", "Blow it up", "Advanced Neg"]
            },
            {
                type: "content",
                title: "Final Exercise: The Full Shell",
                content: "Write a complete 1AC outline for 'Required Voting'.\n\n1.  **Inherency:** It's voluntary now; turnout is low.\n2.  **Harms:** Low turnout = Extremism.\n3.  **Plan:** Mandate voting with $50 fine. (Revenue funds polls).\n4.  **Solvency:** Australia did it; 95% turnout.\n5.  **Impact:** Saves Democracy.\n\nIf you can write this, you are a Policy Debater.",
                keyPoints: ["Full Shell", "Required Voting", "Australia example"]
            },
            {
                type: "content",
                title: "Conclusion",
                content: "Policy debate is the sport of kings and presidents. It teaches you how the world actually works. Respect the structure, and the structure will serve you.",
                keyPoints: ["Sport of Kings", "Respect structure"]
            }
        ]
    }
];
