import { MultiPageLesson } from "./types";

export const UNIT_29_LESSONS: MultiPageLesson[] = [
    {
        lessonId: "l29-01",
        pages: [
            {
                type: "content",
                title: "Introduction: The Tabula Rasa Ideal",
                content: "**Tabula Rasa** is Latin for \"Blank Slate.\" Understanding this concept is essential for any debater who wants to succeed in competitive rounds where technical judges are common.\n\nA true Tab judge tries to enter the round knowing nothing. They set aside everything they believe about the world. They ignore their own political opinions, their personal sense of right and wrong, and even what we might call \"common sense\" or \"the truth.\" Their only job is to evaluate what was said in the room and vote on the flow.\n\nThat means if you argue \"The sky is green\" and the opponent never responds to that argument, the Tab judge will accept \"The sky is green\" as a fact for the purposes of that round. It does not matter that the sky is actually blue. What matters is that you made a claim and the other side did not refute it. In the universe of that debate, the sky is green.\n\nThis style of judging is sometimes called the \"tabula rasa\" or \"tech\" paradigm. Judges who subscribe to it view themselves as scorekeepers or referees who apply the rules of the game without injecting their own beliefs. They are the ultimate \"gamer\" judge: the round is a game with rules, and they enforce only what was argued.",
                keyPoints: [
                    "Tabula rasa means the judge enters with a blank slate and no prior beliefs",
                    "Judges ignore their own opinions, common sense, and external truth",
                    "Only what is said in the round matters for the decision"
                ]
            },
            {
                type: "content",
                title: "Why Tabula Rasa Matters for Your Strategy",
                content: "Once you understand that a Tab judge will accept any argument that goes unanswered, your strategy must change. You cannot assume the judge \"knows\" something is true or false. You cannot rely on the judge to fill in gaps or reject bad arguments on their own. If your opponent makes a claim and you do not answer it, that claim stands.\n\nThis is why flowing is so critical in front of Tab judges. You must track every argument and ensure you have a response in the right speech. Dropped arguments are not \"obviously wrong\"—they are won by the side that made them. Many debaters have lost rounds because they assumed the judge would not vote on an argument they thought was weak, only to discover that the judge was strictly evaluating the flow.\n\nYour preparation should include anticipating arguments and having responses ready. In the round, your job is to extend your arguments through the final speech and answer every argument the other side makes. There are no shortcuts with a true Tab judge.",
                keyPoints: [
                    "You cannot assume the judge will reject bad or unsupported arguments",
                    "Every unanswered argument is treated as true for the round",
                    "Flowing and extending through the final speech are essential"
                ]
            },
            {
                type: "content",
                title: "The Burden of Rejoinder",
                content: "For a Tab judge, the **Burden of Rejoinder**—sometimes called the duty to reply—is absolute. Everything you say is true until the opponent says it isn't. Silence is consent. If they do not respond, they have conceded the argument.\n\nThis principle makes Tab judges very susceptible to **spreading** (speaking at high speed to make many arguments). If you make 50 arguments and the opponent only answers 40, you win those 10 arguments automatically. The judge will not step in and say \"those 10 were weak.\" They will vote on them if they are in your final speech and unrebutted.\n\nYour strategy in front of a Tab judge should therefore include overwhelming the flow when you can. Use many independent arguments. Make the other side choose what to answer; whatever they leave behind, you win. Think of the Tab judge as a scoreboard, not a referee. They count points. They do not judge fouls or decide that an argument was \"unfair\"—unless you give them a theory argument that says so. Then they will evaluate that like any other argument.",
                keyPoints: [
                    "Burden of rejoinder means every argument stands until it is answered",
                    "Tab judges are susceptible to speed and number of arguments",
                    "Use many independent arguments and extend what goes dropped"
                ]
            },
            {
                type: "content",
                title: "Theory and Metadebate",
                content: "Because Tab judges have no fixed rules beyond \"vote on what was argued,\" you can debate the rules themselves. This is called **theory** or **metadebate**. You are not just arguing the topic; you are arguing about how the round should be evaluated.\n\nFor example, you might say: \"Judge, you should vote for me because my opponent used a font that is too small, creating a meaningful accessibility violation. They have excluded debaters with visual impairments.\" If the opponent never responds to that theory argument, many Tab judges will vote on it. You have, in effect, created a new rule for the round: \"Font must be at least 12pt.\" The judge did not have that rule when they walked in, but you argued for it and it was not answered.\n\nTab judges often enjoy theory for this reason. It validates their blank-slate nature. They are not imposing their own preferences; they are voting on what you proved. \"I didn't have a rule against small fonts,\" the judge might think, \"but the Aff proved I should have one.\" You are building the rulebook in real time. That said, theory can backfire if you run it poorly or the other side answers it well. Use it when you have a real violation and can explain the abuse clearly.",
                keyPoints: [
                    "Theory arguments let you debate the rules of the round",
                    "Tab judges will vote on theory if it is dropped",
                    "You can build the rulebook in real time through metadebate"
                ]
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
                explanation: "Tab judges are strict about the flow. If an argument is not in the final speech, it does not exist for the round. It effectively evaporated. You can ignore it and the judge will not consider it in their decision."
            },
            {
                type: "content",
                title: "Deep Dive: Technical Truth vs Real Truth",
                content: "One of the hardest ideas for new debaters to grasp is the difference between **technical truth** and **real truth** in a Tab round.\n\n**Real truth** is what we believe in the real world. The sky is blue. Water is wet. Killing is wrong. We carry these beliefs with us every day.\n\n**Technical truth** is what is true *in the universe of the round* based on what was argued and what was answered. If the Aff read a card that said \"The sky is green\" and the Neg never answered it, then for that round, the sky is green. The judge does not get to say \"But I know the sky is blue\" and vote Neg. In the universe of that hour, the Aff won the argument.\n\nTab judges value technical truth over real truth. This can feel wrong. \"But I KNOW the sky is blue!\" It does not matter. Debate is not a test of what the judge believes. It is a test of who defended their universe better. If you want to win in front of a Tab judge, you must answer every argument. You cannot rely on the judge to reject something because it is false in the real world.",
                keyPoints: [
                    "Technical truth is what was won in the round; real truth is what we believe outside",
                    "Tab judges vote on technical truth, not real-world knowledge",
                    "You must answer every argument; the judge will not reject \"false\" claims for you"
                ]
            },
            {
                type: "content",
                title: "Default Settings",
                content: "Even Tab judges have some default assumptions when nobody in the round argues otherwise. Knowing these can save you time and help you focus on what you actually need to prove.\n\n**Utilitarianism** is a common default. Unless the round establishes a different framework, many judges will assume that saving lives or maximizing welfare is good. You usually do not need to spend time proving \"death is bad\" unless the opponent has made an argument that death is good or that some other value outweighs lives.\n\n**Presumption** often favors the negative. In a tie, or when the judge is unsure, they may vote Neg because they assume that change is risky and the status quo gets the benefit of the doubt. As the Affirmative, you need to win clearly; you may not get the tie. As the Negative, you can sometimes win by creating a tie or casting doubt, depending on the judge's stated paradigm.\n\nThese defaults are not universal—some judges will state different ones in their paradigm. Always read the judge's paradigm before the round. But when they say \"tabula rasa\" or \"tech,\" they often mean something like the above: minimal assumptions, vote on the flow, and when in doubt, presumption to Neg.",
                keyPoints: [
                    "Tab judges often assume utilitarianism (saving lives is good) unless argued otherwise",
                    "Presumption in a tie often goes to the negative",
                    "Read the judge's paradigm to confirm their defaults"
                ]
            },
            {
                type: "content",
                title: "Real-World Applications: When You Have a Tab Judge",
                content: "When you see \"tabula rasa\" or \"tech\" on the judge's paradigm, you should adjust your round strategy.\n\nFirst, do not skip arguments because you think they are \"obvious\" or \"stupid.\" If the other side said it and you do not answer it, you lose it. Second, extend your arguments through the final speech. Do not assume the judge will remember your first speech. Write it on the flow; say it in the summary and the final focus. Third, consider theory when you have a genuine violation. Tab judges will vote on it if it is won. Fourth, do not waste time with arguments that assume the judge will intervene (e.g., \"Judge, you know this is wrong\"). They will not. Make the argument, extend it, and force the other side to answer.\n\nFinally, use the burden of rejoinder to your advantage. If you can make more arguments than the other side can answer, you will win those arguments. That does not mean you should spread for its own sake—quality still matters—but it does mean that in front of a Tab judge, quantity and coverage matter more than in front of a judge who is willing to intervene.",
                keyPoints: [
                    "Answer every argument; do not assume anything is obvious",
                    "Extend your arguments through your final speech",
                    "Use theory when you have a real violation; use the burden of rejoinder to create dropped arguments"
                ]
            },
            {
                type: "question",
                id: "l29-01-q2",
                question: "Your opponent reads a card that says \"Unicorns exist.\" You think it is ridiculous and don't answer it. The judge is a strict Tab judge. What happens?",
                options: [
                    { id: "a", text: "The judge ignores it because it is obviously false." },
                    { id: "b", text: "The judge treats it as true for the round because you did not refute it." },
                    { id: "c", text: "The judge asks you to respond." }
                ],
                correctAnswer: "b",
                explanation: "A Tab judge votes on the flow. If you do not answer an argument, it stands. The judge will not intervene and say the argument is false. You must respond if you want to defeat it."
            },
            {
                type: "content",
                title: "Summary: The Mirror",
                content: "A Tab judge is often described as a mirror. They reflect exactly what you give them. If you give them clear arguments, extended through the final speech, and answers to every opposing argument, they will vote on that. If you give them a messy flow, dropped arguments, and unexplained claims, they will vote on that too. You have total agency: the round is in your hands and your opponent's. The judge is not there to save you or to fix the other side's mistakes.\n\nThat can feel intimidating, but it is also liberating. You do not have to guess what the judge \"really\" thinks. You do not have to appeal to their politics or their sense of fairness. You just have to win the flow. For debaters who are willing to prepare thoroughly, extend carefully, and answer everything, the Tab judge is one of the most predictable and fair judges in the activity. They will vote for whoever won the debate on the flow—nothing more, nothing less.",
                keyPoints: [
                    "Tab judges reflect what was argued; they do not add or subtract",
                    "You have total agency: the round is won or lost on the flow",
                    "For prepared debaters, Tab judges are predictable and fair"
                ]
            }
        ]
    },
    {
        lessonId: "l29-02",
        pages: [
            {
                type: "content",
                title: "Introduction: Analyzing Your Own Performance",
                content: "In Unit 28 we discussed the importance of learning from losses. Now we focus on *how* to do that. Simply watching a recording and cringing is not enough. \"I sound so weird\" is a reaction, not an analysis. To improve, you need a **structured review system**—a method that turns raw footage into actionable feedback.\n\nMost students watch their rounds once, feel embarrassed, and move on. That is a missed opportunity. Every round you have on video is a free coaching session. The camera and the microphone capture exactly what you did. Your job is to watch yourself the way a coach would watch a player: with a clear framework, specific criteria, and a plan for what to fix first.\n\nThis lesson gives you that framework. You will learn the 3-Pass Method for reviewing recordings, the Video Recall Protocol for testing clarity, how to flow your own speech, and how to measure your signal-to-noise ratio. By the end, you will have a repeatable process for turning every loss (and every win) into a lesson.",
                keyPoints: [
                    "Learning from losses requires a structured method, not just watching once",
                    "Treat every recording as a coaching session with clear criteria",
                    "Use a repeatable process to turn rounds into actionable feedback"
                ]
            },
            {
                type: "content",
                title: "The 3-Pass Method",
                content: "When you watch your recording, do not try to notice everything at once. Your brain cannot process content, delivery, and strategy simultaneously. Instead, watch the round **three times**, each time with a single focus.\n\n**Pass 1 – Content:** Turn off the part of your brain that cares how you look or sound. Focus only on what you said. Did you answer each of the opponent's arguments? Was your evidence accurate and well explained? Did you extend your key arguments through the final speech? Use your flow (or the opponent's) to check. If you do not have a flow, make one while watching. This pass answers: \"Did I win the debate on the flow?\"\n\n**Pass 2 – Visual:** Mute the audio. Watch yourself. Are you swaying, fidgeting, or looking at the ceiling? Are you making eye contact with the judge? Do you look confident or nervous? Your body language sends a message. Many debaters lose speaker points (and sometimes the round) because they look uncertain or defensive. This pass answers: \"Would a judge want to listen to me based on how I look?\"\n\n**Pass 3 – Audio:** Close your eyes or look away. Listen only. Are your tags clear? Can you understand every word? Do you sound monotone or dynamic? Do you have filler words (um, like, basically)? This pass answers: \"Would a judge want to listen to me based on how I sound?\"\n\nIsolate the variables. You cannot fix everything at once. Use each pass to generate a short list of improvements, then work on one area before the next round.",
                keyPoints: [
                    "Watch the round three times: once for content, once for visual, once for audio",
                    "Isolating variables helps you notice what to fix without overload",
                    "Use each pass to build a short, actionable list of improvements"
                ]
            },
            {
                type: "content",
                title: "The Video Recall Protocol",
                content: "One of the best tests of whether your speech was clear and memorable is the **Video Recall Protocol**. Here is how it works.\n\nWatch a one-minute clip of your speech. Then pause the video. Ask yourself: \"What did I just say?\" Can you summarize the main points in one or two sentences? If you cannot remember, or if it was a blur of words, that is a problem. The judge heard it once, in real time, without a rewind button. If you cannot recall your own argument after just one minute, the judge almost certainly could not flow it clearly.\n\nThe goal is to be **memorable**. The best arguments stick. They have clear tags, a simple structure, and a punchy conclusion. If your speech feels like a blur even to you, work on signposting (\"My first point is...\", \"My second point is...\"), slowing down on key claims, and cutting filler so that your core argument stands out. Run the Video Recall Protocol on every major speech you have on tape. It is a fast way to see if your clarity is good enough.",
                keyPoints: [
                    "After watching one minute of your speech, pause and ask what you said",
                    "If you cannot recall it, the judge likely could not flow it clearly",
                    "Use this test to improve signposting, pacing, and memorability"
                ]
            },
            {
                type: "question",
                id: "l29-02-q1",
                question: "Why is it useful to watch your speech with the audio muted (Pass 2)?",
                options: [
                    { id: "a", text: "To isolate and evaluate your body language and visual delivery without being distracted by content." },
                    { id: "b", text: "So you can focus on the opponent's arguments." },
                    { id: "c", text: "To save time." }
                ],
                correctAnswer: "a",
                explanation: "Muting the audio lets you focus only on how you look: eye contact, posture, gestures, and confidence. You cannot fix what you do not notice. Isolating visual delivery makes it easier to improve."
            },
            {
                type: "content",
                title: "Flowing Yourself",
                content: "Here is a humbling exercise: try to **flow your own speech** from the recording. Sit down with a piece of paper or a flow template. Press play. Write down every argument you make, in order, with clear labels. Can you do it?\n\nIf you cannot flow your own speech, the judge certainly could not. Judges do not get to pause, rewind, or ask you to repeat. They hear it once. If your arguments are too fast, too jumbled, or too poorly signposted, they will miss things. Flowing yourself forces you to experience the round from the judge's perspective. You will quickly discover if you were spreading too fast, if your tags were unclear, or if you jumped between points without transitions.\n\nIf you find yourself pausing the video repeatedly to catch what you said, you have your answer: you were too fast or too unclear. A judge cannot pause time. Use this exercise to set a target for clarity. Your speech should be flowable in real time by someone who has never heard it before.",
                keyPoints: [
                    "Try to flow your own speech from the recording as if you were the judge",
                    "If you cannot flow it, the judge could not; you were likely too fast or unclear",
                    "Use this to set a clarity target: your speech should be flowable in real time"
                ]
            },
            {
                type: "content",
                title: "Transcription Drill",
                content: "Another powerful tool is the **Transcription Drill**. Take one minute of your speech and transcribe it word for word. Type or write every \"um,\" \"like,\" \"uh,\" and \"basically.\" Count them. Then count the number of substantive words—words that actually advance your argument. The ratio of substance to filler is your **signal-to-noise ratio**.\n\nHigh signal means most of what you said was argument, evidence, or structure. Low signal means a lot of filler, repetition, or vagueness. Many debaters are shocked when they first do this drill. They think they sound clear, but the transcript reveals dozens of filler words in a single minute. Those words waste time, dilute your message, and can make you sound less confident.\n\nSet a goal: reduce filler by 50% in your next round. Practice with a timer and a transcript. Record yourself again and compare. Over time, your signal-to-noise ratio will improve, and your speeches will become more persuasive and easier to flow.",
                keyPoints: [
                    "Transcribe one minute of your speech word for word and count filler words",
                    "Signal-to-noise ratio is the balance of substantive content vs filler",
                    "Use the drill to set goals and track improvement over time"
                ]
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
                title: "Building a Habit: Review After Every Round",
                content: "The methods in this lesson only work if you use them consistently. Make it a habit: after every round you have on video, block out 20–30 minutes before the next one. Run the 3-Pass Method. Do the Video Recall on your best and worst speech. Flow one speech. If you have time, do a one-minute transcription. Write down three specific things to improve in the next round. Then go do it.\n\nTop debaters do not have magic talent. They have systems. They treat every round as data. The camera and the microphone are your harshest critics and your best friends—they do not lie, and they do not forget. Use them to debug your \"software\": your content, your delivery, and your strategy. Over a season, debaters who review systematically improve faster than those who only \"watch and cringe.\" You have the tools. Now build the habit.",
                keyPoints: [
                    "Use the 3-Pass Method and other drills after every round you have on video",
                    "Write down three specific improvements before the next round",
                    "Systematic review leads to faster improvement than occasional watching"
                ]
            },
            {
                type: "content",
                title: "Summary: The Mirrors",
                content: "The camera does not lie. The microphone does not lie. They capture exactly what you did—every dropped argument, every filler word, every moment you looked at the ceiling instead of the judge. That can be uncomfortable, but it is also invaluable. They are your harshest critics and your best friends. Use them to debug your software. Use the 3-Pass Method to isolate content, visual, and audio. Use the Video Recall Protocol to test memorability. Flow yourself to see the round from the judge's perspective. Transcribe to measure signal-to-noise. Then go fix what you find. Improvement is not accidental; it is systematic.",
                keyPoints: [
                    "Recordings give you honest feedback; use them regularly",
                    "Combine the 3-Pass Method, Video Recall, flowing yourself, and transcription",
                    "Improvement comes from systematic review and targeted fixes"
                ]
            }
        ]
    },
    {
        lessonId: "l29-03",
        pages: [
            {
                type: "content",
                title: "Introduction: The Interventionist",
                content: "The **Interventionist** judge is the opposite of the Tabula Rasa judge. Where the Tab judge tries to know nothing and vote only on the flow, the Interventionist believes it is their **duty** to step in. They will not vote for an argument they think is bad, even if it was dropped. They may vote based on what they think is morally right or fair, not just on what was argued. They might say things like: \"I won't vote for a bad argument,\" \"I felt the Aff was morally right,\" or \"I stepped in to protect the novice.\"\n\nInterventionist judges view themselves as guardians of truth or justice, not just scorekeepers. They see the round as a place where right and wrong matter. That means you are not just winning arguments—you are pleading a case to a moral authority. Your job is to persuade them that your side is correct, not just that you had more arguments on the flow. Technical wins (e.g., \"they dropped our theory\") may not be enough. You need to win on substance, fairness, and sometimes on how you made them *feel*.",
                keyPoints: [
                    "Interventionist judges believe they should step in and vote on what they think is right",
                    "They may reject arguments they consider bad or unfair even if those arguments were dropped",
                    "You must persuade them on substance and sometimes on fairness or tone"
                ]
            },
            {
                type: "content",
                title: "Predicting When They Will Intervene",
                content: "Interventionist judges do not intervene randomly. They usually step in when they feel something is wrong. Three common triggers are **cruelty**, **falsehood**, and **boredom**.\n\n**Cruelty:** If you are mean to your opponent—mocking them, attacking them personally, or being condescending—many Interventionist judges will punish you even if you are winning on the flow. They see it as their job to protect civility. If you are aggressive in a way that feels like bullying, they may vote against you or tank your speaker points.\n\n**Falsehood:** If they believe you are lying or misrepresenting evidence, they may refuse to vote for you. They will not accept \"they didn't answer it\" as a reason to vote for a claim they think is false. Your evidence and explanations must be accurate and honest.\n\n**Boredom:** Some Interventionist judges will vote for the team that was more engaging, clear, or interesting—even if the other team had more arguments on the flow. They want to reward good communication. If you are dry, confusing, or tedious, you may lose their ballot.\n\n**Strategy:** You must charm them. Appeal to their sense of justice. Be clear, respectful, and substantive. You cannot win on technicalities alone; you have to win their approval.",
                keyPoints: [
                    "Intervention often follows cruelty, perceived falsehood, or boredom",
                    "Avoid personal attacks and misrepresentation; aim to be clear and engaging",
                    "Win on substance and tone, not only on the flow"
                ]
            },
            {
                type: "content",
                title: "The 'Judge's Argument'",
                content: "Sometimes an Interventionist will vote on an argument that **nobody in the round made**. They might say, \"I voted Neg because I know about the topic and I think the plan won't work.\" That can be frustrating—you may have won every argument on the flow, but the judge voted on something in their own head.\n\nYou cannot always prevent this, but you can reduce it by **pre-empting the judge's mind**. If you suspect the judge is thinking something that hurts you (e.g., \"This plan is unrealistic\"), address it before they decide. Say: \"Judge, you might be thinking that this plan is too idealistic. But here is why it is actually feasible...\" or \"You might be wondering about X. Let me explain why X is not a problem.\" You are not putting words in their mouth; you are giving them a reason to set aside the concern they might have. Read their mind before they make it up. The best debaters anticipate judge skepticism and answer it proactively.",
                keyPoints: [
                    "Interventionist judges sometimes vote on arguments no one made",
                    "Pre-empt the judge's likely objections by addressing them before the decision",
                    "Anticipate skepticism and answer it clearly in your speeches"
                ]
            },
            {
                type: "content",
                title: "The 'Moral Hazard' Strategy",
                content: "With Interventionist judges, you can sometimes turn their tendency to intervene into an advantage. Frame your opponent's argument as **dangerous** or **unfair**. For example: \"Judge, voting for this argument sets a bad precedent. It encourages debaters to make arguments that are offensive (or false, or exploitative). You have the power to reject it—and you should.\"\n\nYou are giving the judge a moral reason to reject the other side. You are empowering their intervention in your favor. They want to do the \"right\" thing; you are telling them what the right thing is. This works best when the other side has actually done something questionable—run a shady argument, been rude, or relied on a technicality that feels unfair. Do not invent abuse; use real weaknesses and frame them in terms of justice, fairness, or precedent. Interventionist judges are often receptive to this kind of framing.",
                keyPoints: [
                    "Frame the other side's argument as dangerous or unfair to trigger intervention in your favor",
                    "Give the judge a moral reason to reject their argument",
                    "Use real weaknesses; do not invent abuse"
                ]
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
                explanation: "This is a direct instruction from the judge. Disobeying will almost certainly cost you the round and your speaker points. Apologize, adjust your tone, and continue in a more measured way. Do not argue with the referee."
            },
            {
                type: "content",
                title: "Adapting Your Style: Respect and Clarity",
                content: "In front of an Interventionist judge, your style matters as much as your arguments. Speak clearly and at a pace they can follow. Do not spread if they have indicated they dislike it. Make eye contact. Be respectful to your opponent and to the judge. Avoid sarcasm, condescension, or anything that could be read as mean-spirited. If you have to choose between making one more argument and being clearly understood, choose clarity. Interventionist judges often prefer a fewer, well-explained arguments to a blizzard of technical ones. They want to feel that they are voting for the right outcome. Help them feel that way by being the debater they want to reward.",
                keyPoints: [
                    "Adapt your style: clarity and respect matter as much as argument count",
                    "Avoid spreading or aggression if the judge has signaled they dislike it",
                    "Be the debater the judge wants to reward"
                ]
            },
            {
                type: "content",
                title: "Reading the Paradigm: When to Expect Intervention",
                content: "Before the round, read the judge's paradigm. Many judges will say whether they are Tab or Interventionist (or something in between). Look for phrases like \"I will not vote for arguments I find morally repugnant,\" \"I believe debate is about persuasion, not just the flow,\" or \"I will intervene to protect fairness.\" Those are signals that they will use their own judgment. Some judges will say they are \"Tab with a few exceptions\"—for example, they might refuse to vote for racism or misrepresentation even if dropped. Note those exceptions and do not run (or do not drop) arguments that trigger them. The more you know about when and why a judge will intervene, the better you can adapt your strategy and avoid surprises.",
                keyPoints: [
                    "Read the judge's paradigm for clues about when they will intervene",
                    "Note any stated exceptions (e.g., no voting for racism even if dropped)",
                    "Use the paradigm to adapt strategy and avoid triggering intervention against you"
                ]
            },
            {
                type: "question",
                id: "l29-03-q2",
                question: "Your opponent drops your best argument. The judge's paradigm says they are 'mostly Tab but will not vote for arguments they think are false.' What should you do?",
                options: [
                    { id: "a", text: "Briefly extend the argument and add one clear piece of support so the judge is confident it is true." },
                    { id: "b", text: "Run theory on the drop." },
                    { id: "c", text: "Assume you will win the argument and move on." }
                ],
                correctAnswer: "a",
                explanation: "Because the judge may intervene if they think the argument is false, you should give them a reason to believe it. A short extension with one clear warrant or piece of evidence reduces the chance they will reject it on intervention grounds."
            },
            {
                type: "content",
                title: "Summary: The King",
                content: "In the Interventionist judge's courtroom, their word is law. They are not a mirror; they are a decision-maker who will use their own judgment. You are a guest. Behave accordingly. Respect the throne. That does not mean you cannot be passionate or assertive—it means you must stay within the bounds of what they consider fair and civil. If you do that, and you win on substance and tone, you can win their ballot even when the flow is messy. If you violate their sense of fairness, you can lose even when you are ahead on the flow. Know your judge, and adapt.",
                keyPoints: [
                    "The Interventionist judge's judgment is final; respect their role",
                    "Stay within bounds of fairness and civility they expect",
                    "Adapt to the judge: substance and tone both matter"
                ]
            }
        ]
    },
    {
        lessonId: "l29-04",
        pages: [
            {
                type: "content",
                title: "Introduction: The Ballot",
                content: "The round is over. The judge hands you the **ballot**—the decision sheet that records who won, the reason for the decision, and your speaker points. Many debaters glance at \"Win\" or \"Loss\" and then stuff the ballot in a bag. That is a waste. The ballot is one of the most valuable pieces of data you will get in debate.\n\nIt contains three main elements. The **RFD (Reason for Decision)** explains why the judge voted the way they did. Sometimes it is one sentence; sometimes it is a paragraph. The **speaker points** (often on a scale of 1–30 or similar) reflect how the judge evaluated your delivery, clarity, and professionalism. The **comments** section may have additional notes—praise, criticism, or suggestions. Every part of the ballot is feedback. If you want to improve, you need to read it carefully, decode what the judge really meant, and turn it into a plan for the next round.",
                keyPoints: [
                    "The ballot contains the RFD, speaker points, and comments—all are valuable feedback",
                    "Do not only look at win/loss; use the whole ballot to improve",
                    "Decode the judge's language and turn it into actionable next steps"
                ]
            },
            {
                type: "content",
                title: "Decoding the RFD",
                content: "Judges often write in a kind of code. They want to be constructive, not harsh, so they soften their language. Your job is to translate \"nice judge talk\" into \"brutal truth\" so you know what to fix.\n\nFor example: \"I didn't buy the link\" usually means your warrant was unclear or underdeveloped. The judge did not understand how your evidence or reasoning connected to your impact. \"The Neg was more organized\" often means you were messy—your speeches were hard to follow or your flow was jumbled. \"Clash was lacking\" frequently means you read prepared speeches and did not listen to or directly answer the other side. \"I would have liked to see more weighing\" means you did not compare your impacts to theirs in the final speech; you asserted you won without proving it.\n\nKeep a list of common RFD phrases and what they really mean. Over time, you will get better at reading between the lines and identifying the one or two things that actually decided the round.",
                keyPoints: [
                    "Judges soften criticism; translate their phrases into specific weaknesses",
                    "Common phrases have recurring meanings (e.g., 'didn't buy the link' = unclear warrant)",
                    "Use the RFD to identify the one or two things that decided the round"
                ]
            },
            {
                type: "content",
                title: "The Speaker Point Matrix",
                content: "Speaker points are a rough proxy for how the judge felt about your delivery, clarity, and professionalism. Different tournaments use different scales, but a common one runs from about 26 to 30. **30** is reserved for exceptional, tournament-winning-level performances. **29** is excellent—finals quality. **28** is good—break rounds. **27** is average—you did fine but there is clear room to grow. **26 and below** usually means something went wrong: you were rude, offensive, unintelligible, or otherwise left a bad impression.\n\nUse this as a benchmark for your \"soft skills.\" If you are consistently at 27, your content may be fine but your delivery or clarity needs work. If you win rounds but get 26–27, you are \"winning ugly\"—you need to work on style so that judges want to vote for you. Track your points over time. Are they going up? If not, the ballot comments and your own video review should tell you why.",
                keyPoints: [
                    "Speaker points reflect delivery, clarity, and professionalism; learn the scale your circuit uses",
                    "Use points to benchmark soft skills and identify 'winning ugly'",
                    "Track points over time and connect them to ballot comments and video review"
                ]
            },
            {
                type: "content",
                title: "Asking Questions (Post-Round)",
                content: "Many tournaments allow a short period after the round for the judge to give oral feedback or for debaters to ask questions. Use this wisely. **Good questions** ask for advice: \"How could I have made the link story clearer?\" or \"What would you have wanted to see in my final speech?\" **Bad questions** ask for justification: \"Why didn't you vote for the link?\" or \"Don't you think we won that argument?\" The first type invites the judge to teach you. The second type puts them on the defensive. Judges generally love to give advice; they hate defending their verdict. If you make them defend it, they may shut down or give you less useful feedback. So ask for **advice**, not **justification**. Take notes. Thank them. Then go apply what you learned.",
                keyPoints: [
                    "Post-round: ask for advice, not justification",
                    "Good questions focus on how to improve; bad questions challenge the decision",
                    "Judges are more helpful when they feel they are teaching, not defending"
                ]
            },
            {
                type: "question",
                id: "l29-04-q1",
                question: "The judge wrote: 'Neg had better organization.' What is the most useful way to interpret this?",
                options: [
                    { id: "a", text: "My speeches were probably harder to follow; I should work on structure and signposting." },
                    { id: "b", text: "The Neg was smarter." },
                    { id: "c", text: "The judge preferred the Neg's arguments." }
                ],
                correctAnswer: "a",
                explanation: "Organization usually refers to how clear and structured the speeches were, not to who was smarter or who had better arguments. Use this as a signal to improve your own structure, signposting, and flow."
            },
            {
                type: "content",
                title: "The Graph: Tracking Speaker Points Over Time",
                content: "If you compete regularly, keep a simple log of your speaker points (and win/loss) after each round. Plot them over time. Are they going up? Down? Flat? Speaker points are a rough measure of how judges experience you—your charisma, clarity, and professionalism. If you are winning but your points are stuck at 26–27, you are winning ugly. You are probably making enough arguments to win the flow, but judges do not enjoy listening to you. That will catch up with you in close rounds or when you hit a judge who values style more. Use the trend line to decide whether you need to invest more in delivery, clarity, or respect. The ballot tells you what to fix; the graph tells you whether you are actually improving.",
                keyPoints: [
                    "Track speaker points over time to see if you are improving",
                    "Winning with low points means you need to work on style and clarity",
                    "Use the trend line to decide where to focus practice"
                ]
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
                content: "The ballot is your compass. It tells you whether you are heading north or south. It does not lie. If the judge says you were disorganized, you were. If they say you did not weigh, you did not. Read the ballot. Believe it. Then act on it. Add one or two improvements to your plan for the next round. Over a season, debaters who treat every ballot as data improve faster than those who only look at the result. You have the feedback. Now close the loop.",
                keyPoints: [
                    "Treat the ballot as honest feedback and a compass for improvement",
                    "Believe what the judge wrote and turn it into specific next steps",
                    "Closing the feedback loop consistently leads to faster improvement"
                ]
            }
        ]
    },
    {
        lessonId: "l29-05",
        pages: [
            {
                type: "content",
                title: "Introduction: The Policy Judge",
                content: "Policy judges primarily judge policy debate, but they often judge Lincoln-Douglas and Public Forum as well. When they do, they bring a specific set of expectations: **the paradigm of policymaking**. They are used to evaluating rounds as if they were a simulation of government—comparing plans, weighing costs and benefits, and asking whether a given policy would work and whether it is worth the trade-offs.\n\nThey view the round as a kind of legislative hearing. They want to know: What is the plan? What problem does it solve? What are the disadvantages? Is there a better alternative? They are comfortable with evidence, with impact calculus, and with the language of \"advantages,\" \"disadvantages,\" \"solvency,\" and \"net benefits.\" If you are in an LD or PF round in front of a policy judge, you will do better if you speak their language: be clear about your \"plan\" or \"advocacy,\" make your impacts concrete (lives, money, etc.), and compare your world to the other side's in a way that feels like a policy comparison.",
                keyPoints: [
                    "Policy judges bring a policymaking paradigm even when judging LD or PF",
                    "They think in terms of plans, advantages, disadvantages, and net benefits",
                    "Speak their language: concrete impacts and clear plan comparison"
                ]
            },
            {
                type: "content",
                title: "The Checkbox: Stock Issues",
                content: "Policy judges have a mental **checkbox** shaped by years of judging policy debate. They want to see certain issues addressed. If you skip a box, they get anxious—even in LD or PF.\n\n**Topicality (or resolutional focus):** Is the affirmative's advocacy legal under the topic? In LD/PF, this might mean: does the case fit the resolution?\n\n**Solvency:** Does the plan (or advocacy) actually solve the problem? Policy judges are skeptical of \"we just need to try\" without a mechanism.\n\n**Inherency:** Is there a reason the status quo has not already done this? Why is the plan new or necessary?\n\n**Net benefits:** Do the advantages outweigh the disadvantages? Policy judges want a clear comparison. You must check every box explicitly. Do not assume they will fill in the blanks. In your final speech, give them a quick roadmap: \"We are topical, we solve, we are inherent, and on net benefits we outweigh.\"",
                keyPoints: [
                    "Policy judges expect topicality, solvency, inherency, and net benefits to be addressed",
                    "Skipping any of these can make them anxious; address each explicitly",
                    "In the final speech, give a clear roadmap that checks every box"
                ]
            },
            {
                type: "content",
                title: "Love of Disadvantages",
                content: "Policy judges **love** disadvantages (DAs). They are used to thinking in terms of \"the plan causes X, X causes Y, Y causes extinction.\" They understand the butterfly effect of policy—small changes can have big, unintended consequences. Politics DAs, trade DAs, federalism DAs—these are the bread and butter of policy debate, and policy judges find them intuitive and persuasive.\n\n**Strategy:** Give them a clear **link chain**. Plan → action → reaction → impact. Make the causal story explicit. \"If we pass this plan, the president will be angry (link). That will cause the other bill to fail (internal link). That will cause the economy to collapse (impact).\" The more you break down the steps, the more comfortable they will be. Avoid vague \"and then bad things happen\" arguments. Policy judges want to see the mechanism.",
                keyPoints: [
                    "Policy judges are very receptive to disadvantages and link chains",
                    "Spell out the causal story: plan → action → reaction → impact",
                    "Make mechanisms explicit; avoid vague impact stories"
                ]
            },
            {
                type: "content",
                title: "The Counterplan",
                content: "To a policy judge, a **counterplan** (CP)—an alternative plan that the negative supports—is a natural and persuasive tool. \"The Aff plan is okay, but our counterplan is better.\" Policy judges are very comfortable comparing Plan A vs Plan B. They are used to evaluating permutations (\"why not do both?\") and competition. They are *less* comfortable with purely philosophical or value-based arguments. If you are the negative in front of a policy judge, a well-explained counterplan that competes with the affirmative plan can be very effective. If you are the affirmative, you must be ready to explain why the plan and the CP can coexist (permutation) or why your plan is better. Stick to the mechanical comparison of plans; avoid relying only on \"justice\" or \"dignity\" without tying them to concrete policy outcomes.",
                keyPoints: [
                    "Policy judges are comfortable with counterplans and plan comparison",
                    "They prefer mechanical Plan A vs Plan B comparison over purely philosophical argument",
                    "Aff must be ready to answer the CP with permutation or net-benefits comparison"
                ]
            },
            {
                type: "question",
                id: "l29-05-q1",
                question: "A Policy judge is judging Lincoln-Douglas (Values). You run a 'nuclear war' impact. They run a 'loss of dignity' impact. Who wins?",
                options: [
                    { id: "a", text: "Nuclear War (probably)." },
                    { id: "b", text: "Dignity (it's LD)." },
                    { id: "c", text: "It's a tie." }
                ],
                correctAnswer: "a",
                explanation: "Policy judges are trained to think in terms of measurable impacts (bodies, dollars). 'Dignity' is hard to quantify; 'nuclear war' is easy. They often default to big, concrete impacts unless you give them a framework that explicitly prioritizes the value impact."
            },
            {
                type: "content",
                title: "CP Competition and Permutation",
                content: "For a policy judge, a counterplan must be **competitive**. It must be impossible or bad to do both the plan and the CP. If you say \"Do X\" and the CP is \"Do Y,\" the judge will ask: \"Why not both?\" The affirmative will usually argue a **permutation**—we can do both, so the CP does not compete. The negative must prove **permutation fails**: we cannot do both because of X, Y, or Z. This is one of the key tests of a policy round. If you are negative and your CP is not competitive, you will lose. If you are affirmative and you do not answer the CP or the permutation debate, you will lose. Policy judges are used to this dance; they expect both sides to engage it clearly.",
                keyPoints: [
                    "The CP must be competitive—doing both must be impossible or bad",
                    "Aff argues permutation (we can do both); Neg argues permutation fails",
                    "Engage the competition debate explicitly; policy judges expect it"
                ]
            },
            {
                type: "content",
                title: "Impact Weighing for Policy Judges",
                content: "Policy judges are used to explicit **impact weighing**. They want to hear you compare magnitude (how big?), probability (how likely?), and timeframe (how soon?). Saying \"our impact is bigger\" is not enough; you need to say *why*—more lives, more irreversible, more certain, or sooner. They are also used to **risk calculus**: even a small probability of a huge impact can outweigh a large probability of a small impact. Give them the math (or the clear comparison). \"Even if the link is only 1%, extinction outweighs a recession.\" They will follow. If you do not weigh, they may default to the side that did the weighing for them, or they may intervene and do it themselves—and you may not like how they do it. So do it first, and do it clearly.",
                keyPoints: [
                    "Policy judges expect explicit weighing: magnitude, probability, timeframe",
                    "Use risk calculus when relevant (e.g., small risk of extinction vs high risk of recession)",
                    "If you do not weigh, the judge may do it for you—or vote for the side that did"
                ]
            },
            {
                type: "question",
                id: "l29-05-q2",
                question: "You are Aff in front of a policy judge. The Neg runs a politics DA. What should you do?",
                options: [
                    { id: "a", text: "Answer the link, internal link, and impact; give a clear comparison to your advantages." },
                    { id: "b", text: "Run theory on the DA." },
                    { id: "c", text: "Ignore it and focus on your case." }
                ],
                correctAnswer: "a",
                explanation: "Policy judges expect you to engage the DA. Answer each part of the link chain and weigh your advantages against the DA impact. Ignoring it will not work; they will vote on the flow."
            },
            {
                type: "content",
                title: "Summary: The Legislator",
                content: "Treat the policy judge like a busy legislator who wants the bottom line. Give them the plan, the cost, and the benefit. Make it snappy. Check the stock-issue boxes. Give them a clear link chain on DAs or a clear comparison on the CP. Count the votes: \"On balance, we outweigh because...\" They will reward clarity, structure, and concrete impact comparison. They will be less impressed by abstract philosophy unless you tie it to policy outcomes. Know your judge, and give them what they are used to hearing.",
                keyPoints: [
                    "Give them the plan, cost, benefit, and net comparison in a clear, snappy way",
                    "Check stock issues and make impact comparison explicit",
                    "Clarity and concrete impact calculus are rewarded"
                ]
            }
        ]
    },
    {
        lessonId: "l29-06",
        pages: [
            {
                type: "content",
                title: "Introduction: The LD Judge",
                content: "The **LD (Lincoln-Douglas) judge** is often a **philosopher** at heart. They care about values, morality, and the \"why\" behind the \"what.\" Where a policy judge might ask \"Does the plan work?,\" an LD judge asks \"Is the plan *right*?\" They want to know what framework we should use to evaluate the round, what values are at stake, and why one outcome is better than another from an ethical or philosophical standpoint.\n\nThat does not mean they ignore evidence or logic. It means they want the evidence and logic to serve a larger argument about what we ought to do and why. If you are debating in front of an LD judge—whether in an LD round or in PF or policy—you will do better if you give them a clear value and criterion, use analytic (purely logical) arguments when you can, and connect your impacts to a framework that tells them how to weigh. Do not assume they will default to \"saving the most lives.\" They may care more about justice, freedom, or dignity, and you have to prove why your impact matters under the right standard.",
                keyPoints: [
                    "LD judges focus on values and morality, not just policy effectiveness",
                    "They ask whether the advocacy is right, not only whether it works",
                    "Give them a clear framework and connect impacts to it"
                ]
            },
            {
                type: "content",
                title: "The Value Prerequisite",
                content: "For an LD judge, you often cannot assume that anything matters until you **prove** it matters. \"Saving lives is good\"—prove it. \"Freedom is good\"—prove it. You must establish a **framework**: a value (what we care about) and a criterion (how we measure it). For example: Value = Justice, Criterion = Protecting the vulnerable. Or Value = Liberty, Criterion = Minimizing government coercion.\n\nIf you win the framework, you win the round more often than not. Your impacts will be weighed under your standard, and the judge will see the round through your lens. If you lose the framework, your impacts may not matter—the judge may say \"even if you're right that people benefit, that's not what we're measuring.\" So framework is not optional in front of an LD judge. It is the first battle, and often the decisive one. Spend time on it. Make it clear. Defend it.",
                keyPoints: [
                    "LD judges often require you to prove that your impacts matter under a standard",
                    "Establish a clear value and criterion (framework) early",
                    "Winning the framework usually means your impacts get weighed; losing it can make them irrelevant"
                ]
            },
            {
                type: "content",
                title: "Analytic Arguments",
                content: "LD judges often love **analytics**—arguments that rely on pure logic rather than evidence. A well-constructed deductive argument can be more persuasive to them than a stack of cards. For example: \"Judge, logically, if we ban X, then Y must follow, because of the nature of Z. No evidence is needed; the logic is sufficient.\"\n\nIf the logic holds, they will often buy it. They respect the human mind's ability to reason from first principles. That does not mean you should avoid evidence; it means you should not be afraid to make logical, a priori arguments when they apply. Analytics are also useful when you do not have evidence—you can still make a philosophical case. LD judges are trained to evaluate that kind of argument. Use it when you have it.",
                keyPoints: [
                    "LD judges value analytic (purely logical) arguments, often as much as evidence",
                    "A clear deductive argument can be very persuasive",
                    "Use analytics when the logic is strong; they respect reasoning from first principles"
                ]
            },
            {
                type: "content",
                title: "The 'K' in LD",
                content: "Modern LD judges are often very open to **kritiks** (K)—arguments that draw on philosophy, critical theory, or structural critique. Kant, Rawls, Nietzsche, Foucault, and others show up regularly. Many LD judges treat these philosophers as central to the activity. If you deploy a K correctly—with a clear link, impact, and alternative—they may be very receptive. Their eyes may light up when you cite the right author in the right way.\n\n**Warning:** If you drop a name wrong or misuse a concept, they will notice and they may punish you. Do not fake philosophy. If you are going to run a K, understand it. If you are going to answer one, take it seriously. LD judges who love Ks will reward good engagement and punish shallow or dishonest engagement. So either invest in understanding the literature or stick to more traditional value debate—but do not pretend to know something you do not.",
                keyPoints: [
                    "Many LD judges are receptive to kritiks and philosophy",
                    "Use philosophers and concepts you actually understand",
                    "Faking or misusing philosophy can backfire badly"
                ]
            },
            {
                type: "question",
                id: "l29-06-q1",
                question: "You read a statistic: '90% of people benefit.' The LD judge looks unimpressed. Why?",
                options: [
                    { id: "a", text: "You haven't proved that 'benefit' is the goal. Maybe 'Justice' is the goal, and the 10% are being treated unjustly." },
                    { id: "b", text: "They hate math." },
                    { id: "c", text: "The stat is old." }
                ],
                correctAnswer: "a",
                explanation: "In LD, utilitarianism (greatest good for the greatest number) is only one framework. Tyranny of the majority is a real concern. Justice for the minority might outweigh benefit for the majority. You need to win the framework first."
            },
            {
                type: "content",
                title: "Value and Criterion Clash",
                content: "A lot of LD debate is **value/criterion clash**. You are trying to show that your value or criterion \"eats\" the other side's—that your framework is the parent concept under which theirs falls. For example: \"Justice includes freedom. You cannot have justice without freedom. Therefore, by achieving freedom, I also achieve justice, and I do it better than they do.\" You are not just comparing impacts; you are comparing the standards by which impacts are measured. If you can show that your value subsumes theirs, you can often win that your impacts matter more or that their impacts do not count. So listen to their framework, and have a strategy: either beat it (your value is broader or more important) or meet it (you satisfy their standard better than they do).",
                keyPoints: [
                    "Value/criterion clash is central: show your framework subsumes or beats theirs",
                    "If your value 'eats' theirs, your impacts can outweigh under your standard",
                    "Either beat their framework or meet it better than they do"
                ]
            },
            {
                type: "content",
                title: "Weighing Under the Framework",
                content: "In LD, **weighing** does not happen in a vacuum. You weigh under the framework you have won. If your criterion is \"protecting the vulnerable,\" you do not just say \"we save more people.\" You say \"we protect the vulnerable better—the 10% who lose under their plan are exactly the vulnerable population our criterion prioritizes.\" Tie every impact back to the value and criterion. That way the judge sees the round through your lens and applies your standard. If you forget to weigh under your framework, the judge may default to their own intuition or to the other side's standard. Do not let that happen. Remind them: under the framework we have won, our impacts matter more. That is how you close the round.",
                keyPoints: [
                    "Weigh under the framework you have won, not in the abstract",
                    "Tie every impact to your value and criterion",
                    "Close the round by reminding the judge to apply your standard"
                ]
            },
            {
                type: "content",
                title: "When LD Judges Judge Other Formats",
                content: "LD judges sometimes judge PF or policy. When they do, they often bring their preferences with them. They may still want a clear framework or value. They may still prefer analytics and philosophy over pure evidence dumps. If you know your judge has an LD background, consider giving them a value or criterion even in PF or policy—\"Our standard today is justice; under justice, our impacts outweigh.\" You do not have to turn the round into full LD, but a little bit of framework can go a long way. It shows you speak their language and respect the way they think. That can be the difference between a close decision and a clear win.",
                keyPoints: [
                    "LD judges in PF or policy often still want framework and values",
                    "A brief value or criterion can speak their language",
                    "Adapt your style to the judge's background when you know it"
                ]
            },
            {
                type: "question",
                id: "l29-06-q2",
                question: "Your opponent wins that their value is 'Justice' and their criterion is 'Protecting the vulnerable.' You have a lot of evidence that your plan helps the majority. What should you do?",
                options: [
                    { id: "a", text: "Argue that under Justice and protecting the vulnerable, your plan helps the most vulnerable (e.g., the worst-off) and theirs leaves them behind." },
                    { id: "b", text: "Say 'Framework doesn't matter' and move on." },
                    { id: "c", text: "Ignore framework and just extend your evidence." }
                ],
                correctAnswer: "a",
                explanation: "You must engage the framework. The best move is to meet their standard: show that under Justice and protecting the vulnerable, you do it better. Use their framework to tell your story."
            },
            {
                type: "content",
                title: "Summary: The Professor",
                content: "Treat the LD judge like a philosophy professor. Be deep. Be logical. Be ethical. Give them a framework and weigh under it. Use analytics when they work. Engage Ks seriously if you run them or answer them. Do not bore them with spreadsheets and body counts unless you have tied those to a value they care about. They want to think, not just to count. Give them something to think about.",
                keyPoints: [
                    "Be deep, logical, and ethical; give them a framework and weigh under it",
                    "Use analytics and engage philosophy seriously",
                    "Connect evidence to values; do not rely only on raw impact calculus"
                ]
            }
        ]
    },
    {
        lessonId: "l29-07",
        pages: [
            {
                type: "content",
                title: "Unit Review: The Human Palette",
                content: "We have now profiled the major judge archetypes. The **Tab** is the mirror: they vote on what you tell them and avoid intervention. The **Interventionist** is the king: they have strong opinions and may vote on what they think is true. The **Policy** judge is the senator: they want solvency, evidence, and impact calculus. The **LD** judge is the philosopher: they want framework, values, and analytic depth. Different brains, different triggers, different ballots. You are a salesman, and you are selling to four different kinds of customers. The same product—your case—must be presented in different ways. To the Tab you give clean flow and clear voting issues. To the Interventionist you give persuasion and narrative. To the Policy judge you give evidence and impact comparison. To the LD judge you give framework and philosophy. Knowing which judge you have is the first step. Adapting is the second.",
                keyPoints: [
                    "Tab, Interventionist, Policy, and LD are four major archetypes with different preferences",
                    "You must present your case differently for each type",
                    "Identifying the judge is step one; adapting your style is step two"
                ]
            },
            {
                type: "content",
                title: "The Chameleon",
                content: "The best debater is a **chameleon**. In round one you might have an LD judge: you emphasize values, framework, and ethics. In round two you might have a policy judge: you emphasize solvency, evidence, and impact calculus. In round three you might have a lay or storytelling judge: you emphasize narrative, clarity, and real-world stakes. You change your color to match the environment. That is not inauthentic; it is skill. You are not lying or changing your position. You are presenting the same argument in the language and structure that this particular judge can hear. The chameleon does not become a different animal—it adapts its presentation to survive and win. So should you.",
                keyPoints: [
                    "Adapt your style to the judge: LD one round, policy the next, lay the next",
                    "Changing how you present is skill, not dishonesty",
                    "Same argument, different language and structure for each judge"
                ]
            },
            {
                type: "content",
                title: "The One Constant",
                content: "What never changes? **Clarity.** **Respect.** **Logic.** These work on everyone. Even a chaotic or interventionist judge respects a clear, respectful, logical speaker. Even a tab judge rewards clarity because it makes the flow easy. So no matter who is in the back of the room, speak clearly. Be respectful to the other team and to the judge. Make logical arguments and explain your reasoning. If you do those three things, you will never go wrong. They are the floor. The judge adaptation is the ceiling—how high you can go. But the floor has to be there first.",
                keyPoints: [
                    "Clarity, respect, and logic work on every judge type",
                    "They are the floor; judge adaptation is the ceiling",
                    "Never sacrifice clarity, respect, or logic for the sake of style"
                ]
            },
            {
                type: "content",
                title: "Mixing Types",
                content: "In the real world, judges are often **mixed**. You might have a policy judge who also cares about framework, or an LD judge who loves evidence. The archetypes are guides, not boxes. Use them to decide what to emphasize first—framework or solvency, narrative or flow—but stay alert. If the judge is nodding at your evidence, give them more. If they are nodding at your framework, go deeper there. Read the room. The best debaters have a default style for each archetype but are ready to blend when the judge sends signals. Do not be so rigid that you miss the mixed judge in front of you.",
                keyPoints: [
                    "Many judges are mixes of archetypes; use types as guides, not strict boxes",
                    "Read the room and adjust—if they respond to evidence, give more; if to framework, go deeper",
                    "Have a default for each type but be ready to blend"
                ]
            },
            {
                type: "content",
                title: "Looking Ahead",
                content: "We have reached the final lesson of Unit 29. **Unit 30: Format Judges** is next. There we will look at format-specific expectations: Public Forum, Congress, and the National Circuit. That is the final layer of adaptation. After that you will have a full palette—archetype plus format—so you can walk into any round and know how to tailor your message. Unit 30 will complete Section 3 and give you the tools to adapt to almost any judge and any format.",
                keyPoints: [
                    "Unit 30 covers format-specific judges: PF, Congress, National Circuit",
                    "Format is the final layer of adaptation on top of archetype",
                    "After Unit 30 you can tailor your message to almost any round"
                ]
            },
            {
                type: "question",
                id: "l29-07-q1",
                question: "You have a judge who seems to love evidence but also writes 'framework' on their paradigm. How should you approach the round?",
                options: [
                    { id: "a", text: "Give both: a clear framework first, then evidence that fits under it." },
                    { id: "b", text: "Only do framework and skip evidence." },
                    { id: "c", text: "Ignore framework and only give evidence." }
                ],
                correctAnswer: "a",
                explanation: "Mixed judges want both. Give them a clear framework so they know how to weigh, then support it with evidence. That way you satisfy both preferences."
            },
            {
                type: "content",
                title: "Final Homework",
                content: "Find a ballot from an old round—yours or a friend's. Read the RFD (reason for decision). Translate it. What did the judge *really* mean? Were they tab, interventionist, policy, or LD? What could the losing team have done differently? Then fix it: write one paragraph on how you would have adapted the same arguments for that judge. This exercise turns past losses into future wins. It also trains you to read judges and to see the human behind the ballot.",
                keyPoints: [
                    "Use old ballots to translate RFDs and identify judge type",
                    "Ask what the losing team could have done differently",
                    "Practice adapting the same arguments for that judge in writing"
                ]
            },
            {
                type: "content",
                title: "Building the Habit",
                content: "Judge adaptation becomes a habit when you do it every round. Before the round: read the paradigm, decide the type, plan your emphasis. After the round: read the ballot, translate the RFD, note what worked and what did not. Over time you will build a mental database. \"This judge said X in the paradigm and voted on Y—so next time I see X, I will do Y.\" The best debaters are not just good at one style; they are good at switching. That only comes with practice. Start with this unit: identify one judge type per tournament and consciously adapt. By the end of the season, it will feel natural.",
                keyPoints: [
                    "Make adaptation a habit: read paradigm before, read ballot after",
                    "Build a mental database of what paradigms lead to what votes",
                    "Practice switching styles; it becomes natural over time"
                ]
            },
            {
                type: "question",
                id: "l29-07-q2",
                question: "Your judge's paradigm says 'Tabula Rasa' but also 'I will vote on what I think is true.' How should you treat them?",
                options: [
                    { id: "a", text: "Mixed—give clean flow and clear issues, but also make sure your arguments are persuasive and logical so they 'think it's true.'" },
                    { id: "b", text: "Interventionist—they will vote on what they believe, so persuade them." },
                    { id: "c", text: "Pure tab—they will only vote on what's on the flow." }
                ],
                correctAnswer: "a",
                explanation: "Paradigms can send mixed signals. 'Tabula Rasa' plus 'vote on what I think is true' suggests they want a clean flow but will intervene if something does not make sense. Give them both: clear issues and persuasive, logical arguments."
            },
            {
                type: "content",
                title: "Summary: The Human Palette",
                content: "You now have a palette of judge types. Use it. Before each round, if you have a paradigm, read it and decide: Tab, Interventionist, Policy, or LD? Then plan your emphasis—flow and issues, narrative and persuasion, evidence and impacts, or framework and values. In round, be a chameleon. Stay clear, respectful, and logical. After the round, learn from the ballot. The human in the back of the room is the one who decides. Give them what they need to vote for you.",
                keyPoints: [
                    "Before the round: read the paradigm and choose your emphasis",
                    "In round: be a chameleon; stay clear, respectful, and logical",
                    "After the round: learn from the ballot and refine your adaptation"
                ]
            }
        ]
    }
];
