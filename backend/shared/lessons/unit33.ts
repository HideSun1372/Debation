import { MultiPageLesson } from "./types";

export const UNIT_33_LESSONS: MultiPageLesson[] = [
  {
    lessonId: "l33-01",
    pages: [
      {
        type: "content",
        title: "Introduction: What Different Judges Value",
        content:
          "Every debate round is ultimately decided by a judge, and every judge brings their own set of values, priorities, and preferences to the ballot. Understanding what different judges value is one of the most important strategic skills in competitive debate. Two debaters can give the exact same speeches and receive completely different decisions depending on who is judging.\n\nThis lesson provides a comprehensive analysis of the major judge value systems you will encounter in debate. Rather than simply categorizing judges into boxes, we will explore the deeper philosophies that drive judicial decision-making. When you understand why a judge values what they do, you can adapt far more effectively than if you just memorize surface-level categories.\n\nBy the end of this lesson, you will be able to identify judge value systems quickly, understand the reasoning behind their preferences, and begin thinking about how to present your arguments in the most persuasive way for each type of judge.",
        keyPoints: [
          "Judge values directly determine round outcomes",
          "Understanding the 'why' behind judge preferences enables better adaptation",
          "No two judges are identical, but common value systems exist",
        ],
      },
      {
        type: "content",
        title: "The Evidence-Driven Judge",
        content:
          "Evidence-driven judges believe that debate should be grounded in facts, data, and expert testimony. For these judges, an unsourced claim is barely worth considering. They want to hear author names, publication dates, study methodologies, and specific statistics. When two teams clash, evidence judges typically decide by asking: whose evidence is stronger, more recent, and more credible?\n\n**What they reward:**\n• Specific citations with author credentials\n• Peer-reviewed or high-quality sources\n• Direct quotations from experts\n• Evidence comparison (explaining why your source outweighs theirs)\n• Acknowledgment of evidence limitations\n\n**What frustrates them:**\n• Vague claims like 'studies show' without naming the study\n• Logical arguments without empirical backing\n• Emotional appeals used as substitutes for data\n• Refusal to share evidence cards when requested\n\nEvidence judges often come from policy debate backgrounds or academic research environments. They believe that debate trains students to engage with real-world information, and they see sourcing rigor as a core skill. When debating in front of an evidence judge, your preparation should focus on having the strongest, best-documented sources available for every major claim.",
        keyPoints: [
          "Evidence judges prioritize sourcing quality over argument creativity",
          "Always cite author names, dates, and credentials",
          "Be ready to compare your evidence directly against your opponent's",
          "Have evidence cards accessible and organized",
        ],
      },
      {
        type: "content",
        title: "The Logic and Reasoning Judge",
        content:
          "Logic judges care most about the internal consistency and reasoning quality of arguments. They want to see clear warrants connecting claims to impacts. For a logic judge, a well-reasoned argument with moderate evidence will often beat a poorly-reasoned argument with strong evidence. They are looking for sound reasoning structures, valid inferences, and the ability to identify and exploit logical gaps.\n\n**What they reward:**\n• Clear claim-warrant-impact structure\n• Logical connections between arguments\n• Identification of opponent's logical fallacies\n• Consistent reasoning throughout the round\n• Creative but sound analytical thinking\n\n**What frustrates them:**\n• Arguments that rely solely on authority ('this expert says so')\n• Logical leaps without explanation\n• Contradictions within your own case\n• Ignoring logical problems your opponent identifies\n• Emotional substitutes for reasoning\n\nLogic judges often have backgrounds in philosophy, law, or analytical disciplines. They view debate as an exercise in critical thinking. When a logic judge watches a round, they are mentally mapping the argument structure: does the claim actually follow from the evidence? Does the impact actually result from the scenario described? Are there hidden assumptions that need to be addressed? To succeed with these judges, focus on making every link in your argument chain explicit and airtight.",
        keyPoints: [
          "Logic judges value reasoning quality over evidence quantity",
          "Make every warrant and link explicit",
          "Identify and attack opponent's logical gaps",
          "Avoid contradictions within your own case",
        ],
      },
      {
        type: "question",
        id: "l33-01-q1",
        question:
          "A judge who prioritizes clear claim-warrant-impact structure and gets frustrated by logical leaps is most likely what type of judge?",
        options: [
          { id: "a", text: "A logic and reasoning judge" },
          { id: "b", text: "A framework judge" },
          { id: "c", text: "An evidence-driven judge" },
          { id: "d", text: "A holistic judge" },
        ],
        correctAnswer: "a",
        explanation:
          "Logic and reasoning judges care most about argument structure and valid inferences. They want to see clear connections between claims, warrants, and impacts, and they penalize logical gaps.",
      },
      {
        type: "content",
        title: "The Framework Judge",
        content:
          "Framework judges believe that every debate round needs a clear evaluative lens through which arguments are assessed. They care deeply about value premises, criteria, and standards. For these judges, winning the framework debate often means winning the round, because the framework determines what counts as important.\n\n**What they reward:**\n• Explicit value/criterion pairing\n• Arguments that link clearly back to the framework\n• Engagement with your opponent's framework\n• Philosophical depth and understanding\n• Framework weighing (why your framework is the right lens)\n\n**What frustrates them:**\n• Ignoring the framework debate entirely\n• Making arguments that don't connect to any evaluative standard\n• Treating framework as a formality rather than a substantive argument\n• Failing to clash on the framework level when opponents present a competing one\n\nFramework judges are common in Lincoln-Douglas debate but appear in all formats. They often have backgrounds in philosophy or ethics. Their fundamental belief is that without an agreed-upon standard for evaluation, debate becomes arbitrary. To impress a framework judge, invest time in developing a thoughtful value/criterion structure, and show how every contention links back to it. When your opponent presents a competing framework, engage with it directly rather than ignoring it.",
        keyPoints: [
          "Framework judges see the evaluative lens as the most important part of the debate",
          "Link every argument back to your framework explicitly",
          "Engage with competing frameworks rather than ignoring them",
          "Develop philosophical depth in your value/criterion pairing",
        ],
      },
      {
        type: "content",
        title: "The Policymaker and the Communication Judge",
        content:
          "**The Policymaker Judge:**\nPolicymaker judges evaluate debate as if they are legislators deciding on a real policy. They care about real-world impacts, cost-benefit analysis, and practical implementation. For these judges, the question is simple: which side's position would produce better outcomes if actually implemented?\n\n• They want to hear about scope, magnitude, and probability of impacts\n• They appreciate practical solvency arguments (how does this actually work?)\n• They weigh disadvantages against advantages like a cost-benefit ledger\n• They are less interested in abstract philosophy and more interested in concrete outcomes\n• They respond well to real-world examples and case studies\n\n**The Communication Judge:**\nCommunication judges prioritize how you speak as much as what you say. They believe debate is fundamentally a persuasion activity, and persuasion requires effective delivery. They evaluate eye contact, vocal variety, organization, clarity, and overall presentation quality.\n\n• They reward clear, accessible language over jargon\n• They notice and appreciate confident body language\n• They penalize excessive speed that sacrifices clarity\n• They value storytelling and real-world examples\n• They care about whether the audience would be convinced, not just whether the argument is technically correct\n\nBoth of these judge types remind us that debate is not purely an academic exercise. It connects to real-world decision-making and real-world communication. Understanding these judges helps you become not just a better debater, but a better advocate.",
        keyPoints: [
          "Policymaker judges use cost-benefit analysis and care about real-world outcomes",
          "Communication judges evaluate delivery, clarity, and persuasion quality",
          "Both types connect debate to practical, real-world skills",
          "Adapt your emphasis based on which values your judge holds",
        ],
      },
      {
        type: "question",
        id: "l33-01-q2",
        question:
          "Which approach would be MOST effective for a policymaker judge?",
        options: [
          {
            id: "a",
            text: "A detailed philosophical framework establishing value premises",
          },
          {
            id: "b",
            text: "A cost-benefit analysis showing real-world impacts with specific numbers",
          },
          {
            id: "c",
            text: "An emotionally compelling personal narrative",
          },
          {
            id: "d",
            text: "A rapid-fire list of 15 independent arguments",
          },
        ],
        correctAnswer: "b",
        explanation:
          "Policymaker judges think like legislators. They want to see cost-benefit analysis, real-world impacts, and specific data about magnitude, scope, and probability of outcomes.",
      },
      {
        type: "content",
        title: "The Holistic Judge and Mixed-Value Judges",
        content:
          "**The Holistic Judge:**\nHolistic judges resist categorization. They evaluate the round as a complete experience, considering evidence, logic, framework, delivery, and clash all together. They do not have a single dominant value but instead look at the overall picture. Who was more persuasive? Who engaged more thoroughly? Who demonstrated the best combination of skills?\n\nHolistic judges are often the most experienced and the hardest to game. You cannot win them over with one trick. Instead, you need to be well-rounded: solid evidence, clear reasoning, good delivery, and genuine engagement with your opponent's arguments.\n\n**Mixed-Value Judges:**\nMany judges combine values in unique ways. A judge might be primarily evidence-focused but also care deeply about delivery. Another might prioritize framework but also want to see real-world impacts. The key insight is that judge categories are guidelines, not rigid boxes.\n\n**How to Handle Uncertainty:**\nWhen you do not know what a judge values, default to being well-rounded. Present strong evidence, clear reasoning, explicit framework links, and confident delivery. Cover your bases. As the round progresses, watch for signals: What does the judge write down? When do they nod? What questions do they ask? These cues help you adjust in real time.\n\nThe best debaters do not rely on one style. They develop strength across all dimensions so they can adapt to any judge they face.",
        keyPoints: [
          "Holistic judges evaluate the complete picture, not just one dimension",
          "Most judges combine values in unique ways",
          "When uncertain, be well-rounded and watch for in-round cues",
          "Developing strength across all dimensions is the long-term goal",
        ],
      },
      {
        type: "content",
        title: "Identifying Judge Values Quickly",
        content:
          "In tournament settings, you often have limited time to figure out what your judge values. Here are practical strategies for quick identification:\n\n**Before the Round:**\n• Read paradigm statements on Tabroom or tournament websites\n• Ask coaches or teammates who have had this judge before\n• Check the judge's debate background (former debater? coach? parent?)\n• Look at their judging history if available\n\n**During Judge Introduction:**\n• Listen to what they emphasize (speed preferences, argument preferences)\n• Note what they say they want to see\n• Pay attention to their tone and formality level\n• Their speaking style often mirrors what they want from debaters\n\n**During the Round:**\n• Watch their pen: what are they writing down?\n• Note their reactions to different argument types\n• Observe their body language during evidence-heavy vs. logic-heavy sections\n• Their cross-examination questions reveal priorities\n\n**Common Signals:**\n• 'I want to see evidence' = evidence judge\n• 'Tell me why this matters' = policymaker or holistic judge\n• 'What's your framework?' = framework judge\n• 'Slow down' = communication or holistic judge\n• 'Explain your reasoning' = logic judge\n\nThe ability to read these signals and adjust mid-round is what separates good debaters from great ones. Practice noticing these cues in every round, even practice rounds.",
        keyPoints: [
          "Use paradigm statements and team intel before the round",
          "Judge introductions contain valuable information about preferences",
          "Watch body language and note-taking during the round",
          "Specific phrases from judges signal their value systems",
        ],
      },
      {
        type: "question",
        id: "l33-01-q3",
        question:
          "During a round, you notice the judge writes extensively when your opponent cites expert sources but barely writes during your logical analysis. What does this suggest?",
        options: [
          {
            id: "a",
            text: "The judge is likely evidence-driven and you should increase your source citations",
          },
          {
            id: "b",
            text: "The judge only writes when they disagree with an argument",
          },
          {
            id: "c",
            text: "The judge agrees with your opponent and you should give up",
          },
          {
            id: "d",
            text: "The judge is bored by the entire round",
          },
        ],
        correctAnswer: "a",
        explanation:
          "When a judge writes more during evidence-heavy sections, it signals they value sourcing. You should adapt by increasing your own source citations and evidence comparison in your remaining speeches.",
      },
    ],
  },
  {
    lessonId: "l33-02",
    pages: [
      {
        type: "content",
        title: "Introduction: Pre-Round Judge Research",
        content:
          "Walking into a debate round without knowing anything about your judge is like giving a presentation without knowing your audience. Pre-round judge research is the process of gathering information about your judge before the round begins so you can tailor your strategy accordingly. The best debaters treat judge research as an essential part of tournament preparation, not an afterthought.\n\nJudge research matters because it lets you make informed strategic decisions before you even open your mouth. Should you run your philosophical framework-heavy case or your evidence-dense policy case? Should you speak quickly or slow down? Should you emphasize impacts or values? These decisions can mean the difference between a win and a loss, and they all depend on who is judging.\n\nThis lesson covers the practical tools and techniques for researching judges before rounds, how to synthesize what you find into an actionable strategy, and how to handle situations where you have limited or no information about your judge.",
        keyPoints: [
          "Pre-round research is essential, not optional",
          "Research drives strategic decisions about case selection and delivery",
          "Every piece of judge information is an advantage",
        ],
      },
      {
        type: "content",
        title: "Using Tabroom and Online Resources",
        content:
          "The most accessible source of judge information is Tabroom.com (or whatever platform your circuit uses). Most tournaments post judge assignments before rounds, giving you time to research. Here is how to use these platforms effectively:\n\n**Tabroom Paradigm Statements:**\nMany judges write paradigm statements describing their preferences. Look for:\n• Speed preferences ('I can handle speed' vs. 'Please speak conversationally')\n• Argument preferences ('I love creative arguments' vs. 'Stick to the basics')\n• Framework views ('I default to a policymaker paradigm' vs. 'I need an explicit framework')\n• Pet peeves ('Don't be rude in CX' or 'Don't spread in front of me')\n• Background information (former debater, coach, parent judge)\n\n**Judging History:**\nSome platforms show a judge's past decisions. Look for patterns:\n• Do they tend to vote for one side more often?\n• What formats have they judged?\n• How experienced are they?\n• What tournaments do they typically judge at?\n\n**Social Media and Coaching Profiles:**\nSome judges are coaches with public profiles. You might find:\n• What school they coach for\n• Their debate philosophy posts\n• Their students' debate styles (which often reflect the coach's values)\n• Articles or blog posts they've written about debate\n\nSpend 5-10 minutes on research before each round. Even a quick paradigm read is better than nothing. Over time, you will build a mental database of judges you encounter regularly.",
        keyPoints: [
          "Check Tabroom for paradigm statements before every round",
          "Look for speed preferences, argument preferences, and pet peeves",
          "Judging history reveals patterns in decision-making",
          "Even 5 minutes of research gives you a strategic advantage",
        ],
      },
      {
        type: "question",
        id: "l33-02-q1",
        question:
          "A judge's paradigm statement says: 'I default to a policymaker paradigm. Show me real-world impacts and weigh them clearly. Don't run theory or kritiks without very good reasons.' What should you prioritize?",
        options: [
          {
            id: "a",
            text: "Run a theory argument to show you're a skilled debater",
          },
          {
            id: "b",
            text: "Focus on abstract philosophical frameworks",
          },
          {
            id: "c",
            text: "Emphasize real-world impacts, cost-benefit analysis, and practical outcomes",
          },
          {
            id: "d",
            text: "Ignore the paradigm and debate your usual style",
          },
        ],
        correctAnswer: "c",
        explanation:
          "When a judge explicitly states a policymaker paradigm and warns against theory/kritiks, you should adapt by emphasizing real-world impacts, practical outcomes, and clear impact weighing. Going against stated preferences is almost always a losing strategy.",
      },
      {
        type: "content",
        title: "Gathering Intel from Coaches and Teammates",
        content:
          "Your team is one of your best research resources. Coaches and teammates who have debated in front of a judge before can provide invaluable insider knowledge that no paradigm statement can capture.\n\n**What to Ask Your Coach:**\n• 'Have you seen this judge before? What do they tend to care about?'\n• 'Do they have any known preferences we should know about?'\n• 'How do they handle speed? Are they a flow judge or a holistic listener?'\n• 'Any specific advice for debating in front of them?'\n\n**What to Ask Teammates:**\n• 'What was your experience with this judge?'\n• 'What arguments did they seem to respond to?'\n• 'Did they give any verbal feedback after the round?'\n• 'How did they react during CX? Did they take notes?'\n• 'What was their RFD (reason for decision)?'\n\n**Building a Team Knowledge Base:**\nSome teams maintain judge files or shared documents where they record information about judges they encounter. After every round, jot down key observations:\n• What the judge seemed to value\n• How they reacted to different argument types\n• Their stated RFD\n• Any notable preferences or pet peeves\n• Their speed tolerance\n\nThis collective intelligence becomes incredibly powerful over a season. A team that systematically records judge information has a significant advantage over teams that start fresh every round. Even informal conversations about judges before rounds can make a big difference.",
        keyPoints: [
          "Coaches and teammates provide information paradigms don't capture",
          "Ask specific questions about judge reactions and preferences",
          "Build and maintain a team judge knowledge base",
          "Record observations after every round for future reference",
        ],
      },
      {
        type: "content",
        title: "Synthesizing Research into Strategy",
        content:
          "Raw information about a judge is only useful if you turn it into an actionable strategy. Here is a framework for converting research into round preparation:\n\n**Step 1: Identify the Judge's Core Value**\nBased on your research, determine the primary value system: evidence, logic, framework, communication, policymaker, or holistic. Most judges lean toward one or two of these.\n\n**Step 2: Select Your Case Approach**\nChoose which version of your case to run, or adjust emphasis:\n• Evidence judge: Lead with your strongest-sourced arguments\n• Logic judge: Emphasize reasoning chains and warrant quality\n• Framework judge: Invest heavily in your value/criterion\n• Policymaker: Focus on impacts, solvency, and real-world outcomes\n• Communication judge: Prioritize clarity, pacing, and delivery\n\n**Step 3: Plan Your Delivery**\nAdjust your speaking style:\n• Speed: Match the judge's stated or implied tolerance\n• Language: Technical jargon for experienced judges, plain language for parent judges\n• Organization: Explicit signposting for flow judges, narrative structure for holistic judges\n\n**Step 4: Prepare Your CX Strategy**\nAlign your cross-examination with judge values:\n• Evidence judge: Ask about sources and methodology\n• Logic judge: Ask about reasoning gaps\n• Framework judge: Ask about value/criterion tensions\n\n**Step 5: Plan Your Weighing**\nDecide how you will frame your weighing analysis:\n• Use the judge's own language and priorities\n• Frame impacts in terms the judge cares about\n• Compare your case to your opponent's through the judge's evaluative lens\n\nThis five-step process should take 5-10 minutes before a round. With practice, it becomes second nature.",
        keyPoints: [
          "Convert research into a five-step strategic plan",
          "Match case selection, delivery, and CX to judge values",
          "Plan your weighing analysis around the judge's priorities",
          "With practice, strategic adaptation becomes automatic",
        ],
      },
      {
        type: "question",
        id: "l33-02-q2",
        question:
          "Your teammate tells you a judge gave an RFD last tournament saying: 'I voted for the team that explained their reasoning more clearly. The winning team had fewer sources but every argument made logical sense.' What type of judge is this likely?",
        options: [
          {
            id: "a",
            text: "A logic and reasoning judge",
          },
          {
            id: "b",
            text: "A communication judge",
          },
          {
            id: "c",
            text: "An evidence-driven judge",
          },
          {
            id: "d",
            text: "A policymaker judge",
          },
        ],
        correctAnswer: "a",
        explanation:
          "The RFD explicitly values clear reasoning over source quantity. This judge prioritizes logical sense and explanation quality, which are hallmarks of a logic and reasoning judge.",
      },
      {
        type: "content",
        title: "Handling Unknown Judges and Parent Judges",
        content:
          "Sometimes you walk into a round with zero information about your judge. Maybe they are new to judging, maybe they are a parent volunteer, or maybe they simply have not left a digital footprint. Here is how to handle these situations:\n\n**The Default Strategy:**\nWhen you know nothing, default to being well-rounded and accessible:\n• Speak at a moderate pace (never spread)\n• Use clear, jargon-free language\n• Explain debate-specific terms if you use them\n• Balance evidence with reasoning\n• Tell a compelling story, not just a technical case\n• Be polite and professional\n\n**Parent Judges:**\nParent judges are community members volunteering their time. They often:\n• Have no debate background\n• Value clarity and persuasion over technical skill\n• Appreciate politeness and professionalism\n• Judge based on who was 'more convincing' overall\n• May not flow (take detailed notes)\n\nFor parent judges: slow down, be clear, use real-world examples, and be the debater they would want their own child to be. Condescension or frustration will cost you rounds.\n\n**Reading an Unknown Judge in Real Time:**\nDuring the judge's introduction, pay close attention:\n• If they mention flowing, they likely have experience\n• If they say 'I just want to learn,' be accessible\n• If they describe specific preferences, take them at face value\n• If they seem nervous, be extra organized and clear to make their job easier\n\nAdapting to unknown judges is a skill that rewards flexibility and emotional intelligence. The debaters who treat every judge with respect and adjust to the situation consistently outperform those who complain about 'bad judges.'",
        keyPoints: [
          "Default to accessible, well-rounded debate when you know nothing",
          "Parent judges value clarity, persuasion, and professionalism",
          "Never condescend to inexperienced judges",
          "Read real-time cues during judge introductions to adapt quickly",
        ],
      },
      {
        type: "content",
        title: "Common Research Mistakes to Avoid",
        content:
          "Judge research is powerful, but it can backfire if done incorrectly. Here are the most common mistakes and how to avoid them:\n\n**Mistake 1: Over-Relying on Paradigm Statements**\nParadigm statements describe what judges think they value, which does not always match how they actually vote. A judge might say 'I'm tabula rasa' (blank slate) but consistently vote for the team with better evidence. Use paradigms as a starting point, not the final word.\n\n**Mistake 2: Changing Your Entire Case Last-Minute**\nAdaptation means adjusting emphasis and delivery, not scrapping your prepared case and running something you have not practiced. A well-executed version of your regular case will almost always beat a poorly-executed version of a 'perfect' case for this judge.\n\n**Mistake 3: Stereotyping Judges**\nAssuming all parent judges are bad, all former policy debaters want speed, or all LD coaches want philosophy is lazy and often wrong. Treat each judge as an individual.\n\n**Mistake 4: Ignoring Contradictory Information**\nIf your teammate says a judge loves evidence but their paradigm says 'I value clear reasoning,' do not just pick the information that suits you. Consider that the judge might value both, or that your teammate's experience might have been unusual.\n\n**Mistake 5: Spending Too Much Time on Research**\nResearch should take 5-10 minutes, not your entire prep time. Diminishing returns set in quickly. Get the key information and move on to actually preparing your arguments.\n\nThe goal of research is informed flexibility, not rigid prediction. Use it to make better decisions, not to lock yourself into a single approach.",
        keyPoints: [
          "Paradigm statements don't always match actual voting patterns",
          "Adapt emphasis and delivery, don't scrap your prepared case",
          "Avoid stereotyping judges based on background",
          "Keep research to 5-10 minutes and focus on key insights",
        ],
      },
      {
        type: "question",
        id: "l33-02-q3",
        question:
          "You've researched your judge and found their paradigm says 'tabula rasa' (blank slate), but a teammate says they always seem to vote for the team with better evidence. What should you do?",
        options: [
          {
            id: "a",
            text: "Ignore the teammate and trust the paradigm completely",
          },
          {
            id: "b",
            text: "Ignore the paradigm and only rely on the teammate's experience",
          },
          {
            id: "c",
            text: "Consider both sources and prepare strong evidence while also covering other bases",
          },
          {
            id: "d",
            text: "Assume the judge is unreliable and don't bother adapting",
          },
        ],
        correctAnswer: "c",
        explanation:
          "The best approach is to synthesize both pieces of information. Prepare strong evidence (since that seems to influence this judge's decisions) while also being well-rounded, since they claim to be open to all approaches.",
      },
    ],
  },
  {
    lessonId: "l33-03",
    pages: [
      {
        type: "content",
        title: "Introduction: Purpose of Cross-Examination",
        content:
          "Cross-examination, commonly called CX or cross-x, is the questioning period in a debate round where one debater directly questions another. It is one of the most dynamic and strategically important parts of any debate round. While constructive speeches let you present your own arguments and rebuttals let you attack your opponent's, cross-examination is where you engage face-to-face with the other side.\n\nMany beginning debaters treat CX as a formality or an afterthought. They ask generic questions, fail to listen to answers, and never use CX exchanges in their speeches. This is a massive missed opportunity. Skilled debaters understand that CX can be the turning point of a round. A single well-crafted question can expose a fatal flaw in your opponent's case. A series of strategic questions can set up your entire rebuttal.\n\nIn this lesson, we will take a deep dive into the objectives and strategic purposes of cross-examination. You will learn the multiple goals CX can serve, how to prioritize those goals in different situations, and how CX fits into your overall debate strategy.",
        keyPoints: [
          "CX is a dynamic, strategically critical part of every debate round",
          "Beginning debaters underuse CX; skilled debaters use it as a turning point",
          "CX serves multiple strategic purposes beyond just asking questions",
        ],
      },
      {
        type: "content",
        title: "The Four Core Purposes of CX",
        content:
          "Cross-examination serves four core strategic purposes. Understanding these purposes helps you plan your questioning and make the most of limited CX time.\n\n**Purpose 1: Clarification**\nSometimes you genuinely need to understand what your opponent said. Maybe they spoke quickly, used unfamiliar terminology, or presented a complex argument. Clarification questions help you understand their position so you can respond effectively. Examples: 'Can you explain what you mean by systemic harm?' or 'What is the mechanism by which your plan solves?'\n\n**Purpose 2: Exposing Weaknesses**\nThis is what most people think of when they think of CX. You ask questions that reveal flaws, gaps, contradictions, or unsupported claims in your opponent's case. The key is that you are not arguing—you are asking questions that let the weakness speak for itself. Example: 'Your evidence is from 2008. Are you aware that the law changed in 2015?'\n\n**Purpose 3: Securing Concessions**\nConcessions are admissions from your opponent that help your case. You ask questions designed to get your opponent to agree with facts or principles that support your arguments. Example: 'Would you agree that protecting individual rights is important?' If they say yes, you can use that agreement in your next speech to support your own framework.\n\n**Purpose 4: Setting Up Arguments**\nThe most advanced use of CX is asking questions that create a foundation for arguments you will make in your next speech. You are not just gathering information—you are building a narrative that you will complete in your speech. Example: You ask three questions that establish your opponent cannot solve their own harm, then in your speech you say 'As they admitted in CX, their plan cannot actually solve the problem they identified.'",
        keyPoints: [
          "The four purposes are: clarification, exposing weaknesses, securing concessions, and setting up arguments",
          "Clarification ensures you understand what you're responding to",
          "Exposing weaknesses reveals flaws without you having to argue",
          "Concessions and setup questions are the most strategically advanced uses",
        ],
      },
      {
        type: "content",
        title: "How CX Connects to Your Speeches",
        content:
          "CX is not a standalone performance. It is a bridge between your opponent's speech and your next speech. Every question you ask should have a purpose that connects to something you plan to say later. Think of CX as the setup and your speech as the payoff.\n\n**The CX-to-Speech Pipeline:**\n1. During your opponent's speech, note 2-3 areas you want to question\n2. In CX, ask questions that clarify, expose, or secure concessions on those areas\n3. In your next speech, reference the CX exchange explicitly: 'In cross-examination, my opponent admitted that...'\n4. Use the CX exchange to strengthen your argument or weaken theirs\n\n**Why This Matters:**\nJudges pay attention during CX, but they make decisions based on speeches. If you get a great concession in CX but never mention it in your speech, it might as well not have happened. The concession only matters when you explain its significance to the judge.\n\n**Example Pipeline:**\n• Opponent claims their policy saves money\n• In CX: 'Does your evidence account for implementation costs?' (Answer: No)\n• In CX: 'So the cost savings you claim don't include the cost of actually implementing the policy?' (Answer: Correct)\n• In your speech: 'In CX, they admitted their cost analysis ignores implementation costs. This means their claimed savings are incomplete and unreliable. When you factor in implementation, our evidence shows the policy actually costs more than the status quo.'\n\nThis pipeline transforms a CX exchange into a powerful argument. Without the speech follow-up, the CX moment is wasted. Without the CX setup, the speech argument lacks the dramatic punch of 'they admitted it themselves.'",
        keyPoints: [
          "CX is a bridge between opponent's speech and your response",
          "Always reference CX concessions explicitly in your speeches",
          "Plan your CX questions around arguments you want to make",
          "The CX-to-speech pipeline is: note, question, reference, argue",
        ],
      },
      {
        type: "question",
        id: "l33-03-q1",
        question:
          "You get your opponent to admit in CX that their evidence doesn't account for a key variable. What should you do next?",
        options: [
          {
            id: "a",
            text: "Feel satisfied and move on to unrelated questions",
          },
          {
            id: "b",
            text: "Declare that you've won the argument right there in CX",
          },
          {
            id: "c",
            text: "Reference the admission in your next speech and explain why it undermines their argument",
          },
          {
            id: "d",
            text: "Hope the judge noticed and don't bring it up again",
          },
        ],
        correctAnswer: "c",
        explanation:
          "CX concessions only matter when you use them in your speeches. Reference the admission explicitly, explain its significance, and show how it weakens your opponent's position.",
      },
      {
        type: "content",
        title: "Prioritizing CX Goals Under Time Pressure",
        content:
          "CX time is limited, usually 3 minutes. You cannot accomplish everything. Learning to prioritize is essential.\n\n**High Priority (Always Do):**\n• Clarify any argument you did not understand (you cannot refute what you do not understand)\n• Ask about the single biggest weakness in their case\n• Secure at least one concession you can use in your speech\n\n**Medium Priority (Do If Time Allows):**\n• Probe secondary weaknesses\n• Ask about evidence quality or recency\n• Test the strength of their warrants\n• Set up multiple lines of attack\n\n**Low Priority (Skip If Short on Time):**\n• Ask about arguments you are not planning to engage with\n• Seek clarification on points that are already clear\n• Ask questions purely for the audience's benefit\n\n**Time Management Tips:**\n• Plan your top 3-5 questions before CX begins\n• Start with your most important questions (do not save the best for last)\n• If an answer is unhelpful, move on quickly rather than arguing\n• Use closed questions to move faster when time is running low\n• Keep a mental timer and know when you need to wrap up\n\n**Adapting in Real Time:**\nSometimes your opponent gives an unexpected answer that opens a new line of questioning. Be flexible enough to pursue it, but disciplined enough to return to your priorities. The best CX practitioners balance preparation with improvisation.",
        keyPoints: [
          "Prioritize clarification, biggest weakness, and at least one concession",
          "Start with your most important questions",
          "Use closed questions to save time when needed",
          "Balance preparation with flexibility to follow unexpected openings",
        ],
      },
      {
        type: "content",
        title: "CX Etiquette and Professionalism",
        content:
          "How you conduct yourself during CX affects your persuasiveness and speaker points. Judges form impressions based on your demeanor, and those impressions influence their decisions.\n\n**Do:**\n• Maintain a confident, respectful tone\n• Make eye contact with both your opponent and the judge\n• Listen actively to answers before asking follow-ups\n• Thank your opponent if they give a helpful answer\n• Stay calm when answers are evasive or frustrating\n• Stand (if format allows) and project confidence through body language\n\n**Don't:**\n• Interrupt answers before your opponent finishes\n• Use a hostile, condescending, or sarcastic tone\n• Make faces or roll your eyes at answers\n• Argue with your opponent instead of asking questions\n• Talk over your opponent\n• Get visibly frustrated or angry\n\n**The Professional Edge:**\nJudges consistently reward debaters who are tough but fair during CX. You can ask devastating questions while remaining completely professional. In fact, the most effective CX practitioners are calm and methodical, not aggressive. When you calmly expose a flaw, it looks like confident mastery. When you aggressively attack, it often looks like desperation.\n\n**Handling Evasive Opponents:**\nIf your opponent refuses to answer directly, do not argue. Instead:\n1. Repeat the question simply: 'Let me rephrase: yes or no, does your evidence address X?'\n2. If they continue evading, note it: 'I'll move on, but I'll note for the judge that a direct answer wasn't given.'\n3. In your speech: 'When I asked about X, they could not provide a direct answer, which suggests...'",
        keyPoints: [
          "Professional demeanor improves persuasiveness and speaker points",
          "Be tough but fair—devastating questions work best with a calm tone",
          "Handle evasive opponents by rephrasing and noting evasion for the judge",
          "Never argue during CX; ask questions and let answers speak",
        ],
      },
      {
        type: "question",
        id: "l33-03-q2",
        question:
          "Your opponent keeps dodging a direct question during CX. What is the best approach?",
        options: [
          {
            id: "a",
            text: "Get louder and more aggressive until they answer",
          },
          {
            id: "b",
            text: "Give up and move to different questions",
          },
          {
            id: "c",
            text: "Rephrase the question once, note the evasion for the judge if they still dodge, then move on",
          },
          {
            id: "d",
            text: "Tell the judge the opponent is cheating",
          },
        ],
        correctAnswer: "c",
        explanation:
          "Rephrase the question once for clarity. If they still evade, calmly note it for the judge and move on. Aggression hurts you, and giving up wastes an opportunity to highlight their evasion in your speech.",
      },
      {
        type: "content",
        title: "CX as a Persuasion Tool",
        content:
          "Beyond its strategic functions, CX is also a persuasion opportunity. The judge is watching. How you ask questions and how your opponent responds shapes the judge's perception of both debaters.\n\n**Building Credibility:**\nWell-prepared, specific questions show the judge you understand the topic deeply. When you ask 'Your Smith 2019 evidence discusses urban areas, but this resolution covers rural communities too—how does your evidence apply?' the judge sees a debater who has done their homework.\n\n**Creating Narrative Momentum:**\nA skilled CX practitioner can build a narrative through sequential questions:\n• Question 1: Establish a fact ('Your plan requires federal funding, correct?')\n• Question 2: Introduce a complication ('And Congress has not approved new spending in this area for 5 years, right?')\n• Question 3: Reveal the problem ('So your plan depends on funding that has no realistic path to approval?')\n\nEach question builds on the last, creating a story that the judge follows. By the end, the conclusion feels inevitable.\n\n**Demonstrating Confidence:**\nCX is the most visible display of confidence in a debate round. A debater who asks clear, purposeful questions and handles answers smoothly projects competence. A debater who stumbles through vague questions or gets flustered by unexpected answers projects uncertainty.\n\n**The Audience Effect:**\nEven though judges make the decision, the overall atmosphere matters. A strong CX performance energizes the room and creates a sense of momentum. It can shift the psychological dynamic of the round in your favor.",
        keyPoints: [
          "CX shapes the judge's perception of both debaters",
          "Specific, well-prepared questions demonstrate deep topic knowledge",
          "Sequential questions build narrative momentum toward a conclusion",
          "Confident CX performance creates psychological momentum",
        ],
      },
      {
        type: "content",
        title: "Review: Purposes of Cross-Examination",
        content:
          "Cross-examination is far more than a questioning period. It is a strategic tool with multiple purposes that, when used skillfully, can determine the outcome of a round.\n\n**The Four Core Purposes:**\n1. Clarification: Understanding what your opponent actually argues\n2. Exposing weaknesses: Revealing flaws through questions, not arguments\n3. Securing concessions: Getting admissions that support your case\n4. Setting up arguments: Building foundations for your next speech\n\n**Key Strategic Principles:**\n• Always connect CX to your speeches through the CX-to-speech pipeline\n• Prioritize your most important questions when time is limited\n• Start with high-priority questions, not low-priority ones\n• Balance preparation with flexibility to pursue unexpected openings\n\n**Professionalism Matters:**\n• Calm confidence is more effective than aggression\n• Handle evasion by rephrasing and noting, not by arguing\n• Your CX demeanor affects speaker points and judge perception\n\n**CX as Persuasion:**\n• Well-crafted questions demonstrate knowledge and preparation\n• Sequential questions build narrative momentum\n• Confidence in CX creates psychological advantage\n\nAs you move into the next lessons, you will learn the specific types of questions available to you and how to craft questions that accomplish these purposes effectively.",
        keyPoints: [
          "CX serves four purposes: clarify, expose, concede, and set up",
          "Always connect CX exchanges to your speeches",
          "Professionalism and confidence are more effective than aggression",
          "Mastering CX is one of the highest-impact skills in debate",
        ],
      },
    ],
  },
  {
    lessonId: "l33-04",
    pages: [
      {
        type: "content",
        title: "Introduction: Types of Questions",
        content:
          "Not all questions are created equal. The type of question you ask in cross-examination determines what kind of answer you get, how much control you have over the exchange, and how useful the response will be for your strategy. Mastering different question types is like mastering different tools in a toolkit—each one has a specific purpose, and the best practitioners know exactly when to use each one.\n\nIn this lesson, we will explore three fundamental question types: open questions, closed questions, and leading questions. You will learn the mechanics of each type, understand when each is most effective, and practice recognizing which type to deploy in different strategic situations.\n\nThink of these question types as existing on a spectrum of control. Open questions give your opponent maximum freedom to respond. Closed questions limit responses to yes or no. Leading questions suggest the answer you want. Each position on this spectrum has advantages and risks, and skilled debaters move fluidly between them.",
        keyPoints: [
          "Different question types serve different strategic purposes",
          "Open, closed, and leading questions form a spectrum of control",
          "Mastering all three types gives you maximum CX flexibility",
        ],
      },
      {
        type: "content",
        title: "Open Questions: Exploring and Exposing",
        content:
          "Open questions invite extended responses. They begin with words like 'how,' 'why,' 'what,' 'explain,' or 'describe.' When you ask an open question, you are giving your opponent space to talk, which means you are giving up some control of the exchange.\n\n**When to Use Open Questions:**\n• When you genuinely need to understand something about their case\n• When you want them to explain a weak argument in detail (sometimes the more they explain, the worse it sounds)\n• When you want to eat their time by getting them to talk at length\n• When you are fishing for information and do not know exactly where the weakness is\n• Early in CX to get the lay of the land before narrowing down\n\n**Examples of Open Questions:**\n• 'How does your plan actually solve the problem you identified?'\n• 'What evidence supports your claim about economic impact?'\n• 'Why should we prioritize your framework over ours?'\n• 'Explain the mechanism by which your policy achieves its goals.'\n\n**Risks of Open Questions:**\n• Your opponent can use the time to give a mini-speech reinforcing their case\n• You lose control of the narrative since they choose what to emphasize\n• Vague open questions get vague answers that are hard to use\n• You may use up CX time without getting anything useful\n\n**Making Open Questions Work:**\nThe key to effective open questions is specificity. 'Tell me about your case' is a bad open question. 'Explain specifically how your plan addresses the implementation timeline your evidence describes' is a good one. The more specific your open question, the harder it is for your opponent to dodge or give a rehearsed general answer.",
        keyPoints: [
          "Open questions begin with how, why, what, explain, or describe",
          "Best used for genuine clarification or getting opponents to over-explain weak points",
          "Risk losing control if questions are too vague",
          "Make open questions specific to prevent rehearsed general answers",
        ],
      },
      {
        type: "content",
        title: "Closed Questions: Controlling the Exchange",
        content:
          "Closed questions can be answered with 'yes,' 'no,' or a very short factual response. They give you maximum control over the CX exchange because you determine the frame of each question and your opponent can only confirm or deny.\n\n**When to Use Closed Questions:**\n• When you want to establish specific facts quickly\n• When you want to lock your opponent into a position\n• When you are building a sequence of admissions\n• When time is running short and you need efficient answers\n• When you already know the answer and want it on the record\n\n**Examples of Closed Questions:**\n• 'Your plan requires congressional approval, correct?'\n• 'Does your evidence come from before 2020?'\n• 'Is it true that your framework values individual liberty?'\n• 'Did your study control for income level?'\n• 'You mentioned three impacts. Is the economic impact the largest one?'\n\n**Building Sequences:**\nClosed questions are most powerful in sequence. Each question establishes a small fact, and together they build toward a conclusion:\n1. 'Your policy requires new government spending, correct?' (Yes)\n2. 'That spending would come from tax revenue?' (Yes)\n3. 'And your own evidence says the economy is fragile right now?' (Yes)\n4. 'So your plan adds a tax burden during a fragile economy?'\n\nEach individual admission seems harmless, but together they create a devastating argument.\n\n**Risks of Closed Questions:**\n• Skilled opponents will add qualifications ('Yes, but...')\n• If you frame the question poorly, a 'no' can hurt your narrative\n• Overusing closed questions can feel robotic or interrogative\n• They do not help you understand complex arguments you genuinely need explained",
        keyPoints: [
          "Closed questions get yes/no answers and give you maximum control",
          "Most powerful in sequences that build toward a conclusion",
          "Each admission seems harmless alone but devastating together",
          "Risk: skilled opponents will add qualifications to yes/no answers",
        ],
      },
      {
        type: "question",
        id: "l33-04-q1",
        question:
          "You want to quickly establish that your opponent's evidence is outdated without giving them a chance to spin it. Which question type is best?",
        options: [
          {
            id: "a",
            text: "Open question: 'Tell me about your evidence.'",
          },
          {
            id: "b",
            text: "Closed question: 'Your primary source was published in 2015, correct?'",
          },
          {
            id: "c",
            text: "Leading question: 'Don't you think your evidence is outdated?'",
          },
          {
            id: "d",
            text: "No question—just point it out in your speech",
          },
        ],
        correctAnswer: "b",
        explanation:
          "A closed question establishes the specific fact (2015 publication date) on the record without giving your opponent room to spin or explain. You can then argue the significance of the outdated evidence in your speech.",
      },
      {
        type: "content",
        title: "Leading Questions: Suggesting the Answer",
        content:
          "Leading questions contain the answer within the question itself. They are phrased in a way that pushes the respondent toward a specific answer, usually the one the questioner wants. In courtroom settings, leading questions are often restricted, but in debate CX, they are completely fair game and extremely powerful.\n\n**Recognizing Leading Questions:**\nLeading questions typically use these structures:\n• 'Isn't it true that...?'\n• 'Wouldn't you agree that...?'\n• 'Don't you think...?'\n• 'So you're saying that...?' (reframing their argument)\n• 'Since [fact], doesn't that mean [conclusion]?'\n\n**When to Use Leading Questions:**\n• When you want to put your spin on your opponent's argument\n• When you want to force a concession on a specific point\n• When you are summarizing their position in a way that helps your case\n• When you want to make a point through a question rather than a statement\n\n**Examples of Leading Questions:**\n• 'Since your evidence only covers urban areas, wouldn't you agree that it doesn't apply to rural communities?'\n• 'Isn't it true that your plan has no enforcement mechanism?'\n• 'So you're essentially saying that economic growth matters more than environmental protection?'\n• 'Given that your own source acknowledges limitations, don't you think your claim is overstated?'\n\n**Risks of Leading Questions:**\n• Savvy opponents will reject the framing: 'No, that's not what I'm saying at all'\n• If phrased poorly, they can come across as argumentative rather than questioning\n• Judges may view overly aggressive leading questions as unfair\n• They do not work well for genuine information gathering\n\n**The Sweet Spot:**\nThe best leading questions use your opponent's own words against them. When you can say 'You just said X. Doesn't that mean Y?' using their actual language, it is very hard for them to reject the premise without contradicting themselves.",
        keyPoints: [
          "Leading questions contain or suggest the desired answer",
          "Most effective when using the opponent's own words",
          "Powerful for forcing concessions and reframing arguments",
          "Risk: savvy opponents will reject the framing entirely",
        ],
      },
      {
        type: "content",
        title: "Combining Question Types Strategically",
        content:
          "Expert CX practitioners do not stick to one question type. They combine all three types in strategic sequences that build toward their goals. Here is how to combine them effectively:\n\n**The Funnel Technique:**\nStart broad, then narrow down:\n1. Open question: 'How does your plan address healthcare costs?' (Get them talking)\n2. Closed question: 'So the primary mechanism is subsidies, correct?' (Pin down the key fact)\n3. Leading question: 'Since subsidies have historically failed to control costs, isn't your mechanism flawed?' (Drive home the point)\n\n**The Concession Chain:**\nBuild agreement, then pivot:\n1. Closed: 'You value protecting human rights, correct?' (Easy yes)\n2. Closed: 'And you agree that freedom of speech is a human right?' (Another easy yes)\n3. Leading: 'Then wouldn't restricting speech in the way your case proposes violate the very rights you claim to protect?'\n\n**The Clarify-and-Strike:**\n1. Open: 'Can you explain your solvency mechanism?' (Understand their position)\n2. Closed: 'Does that mechanism require [specific condition]?' (Identify the weak link)\n3. Closed: 'And is [specific condition] currently met?' (Expose the gap)\n4. Leading: 'So your solvency depends on a condition that doesn't currently exist?' (Deliver the blow)\n\n**Adapting in Real Time:**\nYour planned sequence might change based on answers. If your opponent gives an unexpected answer to an open question, you might need to switch to closed questions to pin them down. If a closed question gets a 'yes, but...' response, you might need an open question to understand their qualification. Flexibility is key.\n\n**General Guidelines:**\n• Start CX with 1-2 open questions for clarification\n• Move to closed questions to establish facts and secure concessions\n• Use leading questions sparingly for maximum impact\n• End CX with your strongest question if possible",
        keyPoints: [
          "The funnel technique moves from open to closed to leading",
          "Concession chains build agreement before pivoting to your point",
          "Adapt your question type based on the answers you receive",
          "Start with open questions, use closed to establish facts, save leading for key moments",
        ],
      },
      {
        type: "question",
        id: "l33-04-q2",
        question:
          "In the 'funnel technique,' what is the correct order of question types?",
        options: [
          {
            id: "a",
            text: "Leading → Closed → Open",
          },
          {
            id: "b",
            text: "Closed → Open → Leading",
          },
          {
            id: "c",
            text: "Open → Closed → Leading",
          },
          {
            id: "d",
            text: "Open → Leading → Closed",
          },
        ],
        correctAnswer: "c",
        explanation:
          "The funnel technique starts broad with an open question (to get information), narrows with a closed question (to pin down a fact), and finishes with a leading question (to drive home your point).",
      },
      {
        type: "content",
        title: "Recognizing and Countering Question Types as a Respondent",
        content:
          "Understanding question types is not just useful for asking questions—it is equally valuable when you are being questioned. If you can identify the type of question being asked, you can respond more strategically.\n\n**When Facing Open Questions:**\n• Answer directly but concisely—do not ramble\n• Use the opportunity to reinforce your strongest points\n• Stay focused on what was asked; do not volunteer extra information\n• If the question is vague, ask for clarification before answering\n\n**When Facing Closed Questions:**\n• Answer yes or no first, then qualify if needed\n• Watch for sequences—if you see a pattern building toward a trap, address the underlying assumption\n• It is okay to say 'That's an oversimplification' before providing context\n• Do not let a series of yeses lock you into a conclusion you disagree with\n\n**When Facing Leading Questions:**\n• Identify the assumption embedded in the question\n• Challenge the premise if it is inaccurate: 'I don't accept that framing because...'\n• Restate your actual position: 'What I'm actually saying is...'\n• Do not accept a reframing of your argument that distorts your position\n\n**General Answering Principles:**\n• Be honest—never lie or obviously dodge\n• Be direct—answer the question that was asked\n• Be strategic—provide helpful context without giving a speech\n• Be calm—never get defensive or flustered\n• Know your case—confident answers come from deep preparation\n\nThe best debate rounds feature skilled questioners facing skilled respondents. Both sides are playing strategic chess, trying to control the narrative through questions and answers.",
        keyPoints: [
          "Identify question types to respond strategically",
          "Answer closed questions with yes/no first, then qualify",
          "Challenge the premise of leading questions you disagree with",
          "Be honest, direct, and calm in all answers",
        ],
      },
      {
        type: "content",
        title: "Common Question Type Mistakes",
        content:
          "Debaters at every level make mistakes with question types. Here are the most common errors and how to fix them:\n\n**Mistake 1: Only Using Open Questions**\nSome debaters ask 'why' or 'how' for everything. This gives their opponent too much control and often wastes time. Fix: Plan closed questions to pin down specific facts and build sequences.\n\n**Mistake 2: Asking Closed Questions You Don't Know the Answer To**\n'Did your study use a control group?' sounds powerful, but if the answer is 'Yes, it did,' you have just strengthened their case. Before asking a closed question, be reasonably confident you know the answer. Fix: Save closed questions for facts you have already verified.\n\n**Mistake 3: Overusing Leading Questions**\nToo many leading questions makes CX feel like you are arguing, not questioning. Judges notice and may penalize it. Fix: Use leading questions only 2-3 times in a CX period, at strategic moments.\n\n**Mistake 4: Not Listening to Answers**\nSome debaters have a pre-written list of questions and ask them in order regardless of what the opponent says. This misses opportunities to follow up on revealing answers. Fix: Have a plan, but adapt based on what you hear.\n\n**Mistake 5: Asking Compound Questions**\n'Did your evidence account for inflation and did the author consider rural areas and was the study peer-reviewed?' This lets your opponent choose which part to answer and dodge the rest. Fix: Ask one question at a time.\n\n**Mistake 6: Telegraphing Your Strategy**\nIf your questions make it obvious what argument you plan to run, your opponent can preempt it in their next speech. Fix: Mix in neutral questions alongside strategic ones so your intent is less obvious.",
        keyPoints: [
          "Don't ask closed questions you don't know the answer to",
          "Use leading questions sparingly for maximum impact",
          "Always listen to answers and adapt your follow-ups",
          "Ask one question at a time, never compound questions",
        ],
      },
      {
        type: "question",
        id: "l33-04-q3",
        question:
          "You ask your opponent a closed question: 'Your plan requires $50 billion in funding, correct?' They respond: 'Yes, and our evidence shows it pays for itself within 5 years.' What happened?",
        options: [
          {
            id: "a",
            text: "They answered incorrectly",
          },
          {
            id: "b",
            text: "They dodged the question",
          },
          {
            id: "c",
            text: "They conceded the point",
          },
          {
            id: "d",
            text: "They added a qualification to a closed question, reinforcing their position",
          },
        ],
        correctAnswer: "d",
        explanation:
          "Skilled opponents will answer 'yes' to a closed question but then add qualifying context that strengthens their position. This is a legitimate and effective answering technique. You should be prepared for qualifications and have follow-up questions ready.",
      },
    ],
  },
  {
    lessonId: "l33-05",
    pages: [
      {
        type: "content",
        title: "Introduction: Asking Good Questions During Cross-X",
        content:
          "Knowing the types of questions is one thing. Crafting specific questions that actually expose weaknesses and build your case is another skill entirely. This lesson moves from theory to practice—you will learn how to look at an opponent's case and identify exactly where to probe, how to phrase questions for maximum impact, and how to build question sequences that create powerful moments in the round.\n\nAsking good CX questions is a skill that improves with deliberate practice. The best cross-examiners spend time before rounds not just preparing their own cases, but thinking about what their opponents might argue and preparing questions for those arguments. They also study their opponents' cases during the round, rapidly identifying weak links and formulating questions in real time.\n\nThis lesson will give you a systematic approach to crafting CX questions. Rather than relying on instinct or generic question templates, you will learn to analyze arguments for specific vulnerabilities and target those vulnerabilities with precisely crafted questions.",
        keyPoints: [
          "Crafting effective questions is a distinct skill from knowing question types",
          "Good CX questions come from systematic analysis of opponent arguments",
          "This skill improves dramatically with deliberate practice",
        ],
      },
      {
        type: "content",
        title: "Finding the Weak Links",
        content:
          "Every argument has potential vulnerabilities. Your job during your opponent's speech is to listen for these weak links so you can target them in CX. Here are the most common types of vulnerabilities to listen for:\n\n**Evidence Vulnerabilities:**\n• Old evidence (published years ago when conditions have changed)\n• Biased sources (funded by interested parties, advocacy groups)\n• Limited scope (evidence covers one country but claim is global)\n• Missing methodology (no details on how a study was conducted)\n• Cherry-picked data (citing one statistic while ignoring contradicting ones)\n\n**Logical Vulnerabilities:**\n• Missing warrants (claim made without explanation of why it's true)\n• Logical leaps (jumping from A to C without establishing B)\n• False assumptions (argument depends on an unstated assumption that may be wrong)\n• Internal contradictions (two parts of the case conflict with each other)\n• Overgeneralization (using one example to make a sweeping claim)\n\n**Structural Vulnerabilities:**\n• Weak solvency (plan doesn't actually solve the problem identified)\n• Missing links (impact chain has gaps)\n• Unfunded mandates (policy requires resources that don't exist)\n• No enforcement mechanism (how do you make people comply?)\n• Timeframe problems (solution takes longer than the problem allows)\n\nDuring your opponent's speech, jot down 2-3 of the most significant vulnerabilities you hear. These become your CX targets. Prioritize vulnerabilities that, if exposed, would undermine their entire argument rather than minor details.",
        keyPoints: [
          "Listen for evidence, logical, and structural vulnerabilities",
          "Prioritize vulnerabilities that undermine entire arguments, not minor details",
          "Jot down 2-3 targets during opponent's speech",
          "Evidence age, source bias, and missing warrants are common weak links",
        ],
      },
      {
        type: "content",
        title: "Crafting Questions That Hit the Target",
        content:
          "Once you have identified a vulnerability, you need to craft a question that exposes it without alerting your opponent to your strategy. Here are techniques for turning vulnerabilities into effective questions:\n\n**Technique 1: The Innocent Inquiry**\nAsk about the vulnerability as if you are genuinely curious, not attacking:\n• Vulnerability: Their evidence is from 2012\n• Bad question: 'Your evidence is ancient, right?' (Telegraphs your attack)\n• Good question: 'When was your primary source published?' (Gets the date on record neutrally)\n\n**Technique 2: The Specificity Probe**\nAsk for specific details that you suspect they don't have:\n• Vulnerability: Vague solvency mechanism\n• Bad question: 'How does your plan work?' (Too broad)\n• Good question: 'What specific agency would implement your plan, and what is the timeline for implementation?' (Forces specifics they may not have)\n\n**Technique 3: The Assumption Test**\nAsk questions that surface hidden assumptions:\n• Vulnerability: Argument assumes the economy is growing\n• Bad question: 'You're assuming economic growth, right?' (They'll just say 'yes, and that's reasonable')\n• Good question: 'Does your argument still hold if the economy enters a recession?' (Forces them to confront the assumption)\n\n**Technique 4: The Scope Challenge**\nAsk whether their evidence actually covers what they claim:\n• Vulnerability: Study only covered one city\n• Question: 'How many cities were included in that study?' followed by 'And you're applying those findings to the entire country?'\n\n**Technique 5: The Internal Tension**\nAsk about contradictions within their case:\n• Vulnerability: Contention 1 says government intervention works, Contention 2 says government is inefficient\n• Question: 'In Contention 1 you argue government can solve this problem effectively. In Contention 2 you argue government programs are inefficient. Can you explain how both are true?'",
        keyPoints: [
          "Use 'innocent inquiries' to get damaging facts on record without telegraphing",
          "Specificity probes expose vague arguments by demanding details",
          "Assumption tests force opponents to confront hidden weaknesses",
          "Internal tension questions highlight contradictions within a case",
        ],
      },
      {
        type: "question",
        id: "l33-05-q1",
        question:
          "Your opponent's case argues that banning plastic bags will reduce ocean pollution, but their only evidence is from a study conducted in one coastal city. What is the best CX question?",
        options: [
          {
            id: "a",
            text: "'Your evidence is bad, isn't it?'",
          },
          {
            id: "b",
            text: "'How many locations were included in that study, and are you applying those findings nationally?'",
          },
          {
            id: "c",
            text: "'Do you even care about the environment?'",
          },
          {
            id: "d",
            text: "'Why did you pick such a weak source?'",
          },
        ],
        correctAnswer: "b",
        explanation:
          "This question uses the scope challenge technique. It gets the opponent to state the limited scope on the record, then highlights the gap between their evidence (one city) and their claim (national impact). It's specific, non-hostile, and sets up a powerful speech argument.",
      },
      {
        type: "content",
        title: "Building Question Sequences",
        content:
          "Individual questions are useful, but question sequences are devastating. A sequence is a series of 3-5 related questions that build toward an inescapable conclusion. Each question seems reasonable on its own, but together they create a trap.\n\n**Anatomy of a Strong Sequence:**\n1. **Foundation question:** Establish an uncontroversial fact (they have to say yes)\n2. **Bridge question:** Connect that fact to a new piece of information\n3. **Pressure question:** Apply the connection to their argument\n4. **Conclusion question:** Make the implication explicit\n\n**Example Sequence (Attacking Solvency):**\n1. 'Your plan creates a new federal agency to oversee enforcement, correct?' (Yes)\n2. 'How long does it typically take to create and staff a new federal agency?' (They give a timeframe)\n3. 'And your evidence says the harm is happening right now and getting worse each year?' (Yes)\n4. 'So there would be a gap of several years between passing your plan and actually having enforcement in place, during which the harm continues?'\n\n**Example Sequence (Attacking Evidence Quality):**\n1. 'Your main source is Dr. Johnson's 2018 paper?' (Yes)\n2. 'Is Dr. Johnson affiliated with the industry this regulation would affect?' (Yes or I don't know)\n3. 'Are you aware of the 2022 independent study that reached the opposite conclusion?' (Probably not)\n4. 'So your key source has a potential conflict of interest and has been contradicted by more recent independent research?'\n\n**Tips for Building Sequences:**\n• Never ask the conclusion question first—build up to it\n• Make early questions easy to agree with\n• Don't reveal where you're going until the final question\n• Practice sequences out loud before the round\n• Have backup questions if your opponent gives an unexpected answer at any step",
        keyPoints: [
          "Sequences of 3-5 questions are more powerful than individual questions",
          "Start with uncontroversial facts and build toward your conclusion",
          "Don't reveal your destination until the final question",
          "Practice sequences beforehand and prepare for unexpected answers",
        ],
      },
      {
        type: "practice",
        id: "l33-05-p1",
        title: "Practice: Crafting CX Questions",
        description:
          "Practice writing effective cross-examination questions that expose weaknesses in an opponent's argument.",
        practice: {
          type: "text-analysis",
          topic: "Cross-examination",
          targetSkill: "Question crafting",
          instructions:
            "Read the following argument and write 3 strategic cross-examination questions that expose weaknesses. For each question, briefly explain what vulnerability you're targeting and what type of question you're using (open, closed, or leading).",
          successCriteria: [
            "Questions target specific weaknesses in the argument",
            "Questions are clear, focused, and non-hostile",
            "Questions build toward a strategic goal for your next speech",
            "Question types are identified correctly",
          ],
          text: "An opponent argues: 'We should ban all single-use plastics because they harm ocean life. Studies show 8 million tons of plastic enter oceans yearly. Banning plastics would save marine ecosystems and protect biodiversity.'",
        },
      },
      {
        type: "content",
        title: "Questions to Avoid",
        content:
          "Just as important as knowing what to ask is knowing what NOT to ask. Certain question patterns consistently backfire in CX. Here are the most common pitfalls:\n\n**Don't Ask Questions You Can't Use:**\nEvery question should connect to an argument you plan to make. If you cannot explain how a question helps your case, do not ask it. Random curiosity wastes precious CX time.\n\n**Don't Ask 'Gotcha' Questions That Aren't:**\nSome debaters ask what they think is a devastating question, but the opponent has an easy answer. Before asking, think: 'What will they say?' If the likely answer does not help you, rephrase or skip it.\n\n**Don't Give Speeches Disguised as Questions:**\n'Don't you think it's problematic that your evidence is old, your source is biased, your logic is flawed, and your impacts are exaggerated, and therefore your entire case fails?' This is not a question—it is an argument with a question mark. Judges notice and penalize this.\n\n**Don't Ask About Arguments You're Dropping:**\nIf you have already decided not to respond to one of their contentions, do not ask about it in CX. Questions signal what you think is important, and you do not want to draw attention to arguments you are ignoring.\n\n**Don't Ask Questions That Strengthen Their Case:**\n'Can you explain your strongest piece of evidence?' gives them a chance to repeat and reinforce their best argument. Never invite your opponent to highlight their strengths.\n\n**Don't Repeat Questions They've Already Answered:**\nIf they gave a clear answer, move on. Repeating suggests you were not listening or are trying to badger them, both of which look bad to judges.\n\nEvery question has an opportunity cost. Time spent on a bad question is time not spent on a good one.",
        keyPoints: [
          "Every question must connect to an argument you plan to make",
          "Think about likely answers before asking—avoid questions with easy rebuttals",
          "Don't give speeches disguised as questions",
          "Don't ask about arguments you're dropping or questions that strengthen their case",
        ],
      },
      {
        type: "question",
        id: "l33-05-q2",
        question:
          "Which of the following is the WORST CX question to ask?",
        options: [
          {
            id: "a",
            text: "'When was your primary source published?'",
          },
          {
            id: "b",
            text: "'Can you walk me through your strongest piece of evidence?'",
          },
          {
            id: "c",
            text: "'Does your plan include an enforcement mechanism?'",
          },
          {
            id: "d",
            text: "'How many people does your study say are affected?'",
          },
        ],
        correctAnswer: "b",
        explanation:
          "Asking an opponent to walk through their strongest evidence gives them a free opportunity to repeat and reinforce their best argument. Never invite opponents to highlight their strengths during your CX time.",
      },
      {
        type: "content",
        title: "Adapting Questions to Different Case Types",
        content:
          "Different types of debate cases have different common vulnerabilities. Here is a guide to tailoring your questions based on what your opponent is running:\n\n**Against Policy/Plan Cases:**\n• Probe solvency: 'What specific mechanism ensures your plan achieves its stated goal?'\n• Challenge funding: 'Where does the money come from? What gets cut?'\n• Test implementation: 'Who implements this and what is the timeline?'\n• Find tradeoffs: 'What are the costs or negative consequences of your plan?'\n\n**Against Value/Framework Cases:**\n• Challenge the criterion: 'Why is your criterion the best way to measure your value?'\n• Test application: 'Give me a specific example of how your framework applies to this case'\n• Find exceptions: 'Are there situations where your value doesn't apply?'\n• Compare values: 'What happens when your value conflicts with [competing value]?'\n\n**Against Disadvantage Arguments:**\n• Test uniqueness: 'Is the status quo already causing this problem?'\n• Challenge the link: 'How does the plan specifically cause the harm you describe?'\n• Probe the impact: 'How likely is your worst-case scenario?'\n• Check evidence: 'Does your author predict this outcome or merely speculate about it?'\n\n**Against Kritik Arguments:**\n• Seek clarity: 'Can you explain this concept in plain language?'\n• Test the alternative: 'What does your alternative look like in practice?'\n• Challenge applicability: 'How does this philosophical framework apply to the specific policy being debated?'\n• Probe consistency: 'Does your team's own behavior in this round conform to the kritik?'\n\nHaving go-to questions for each case type means you are never completely unprepared, even when you face an unexpected argument.",
        keyPoints: [
          "Policy cases are vulnerable on solvency, funding, and implementation",
          "Value cases are vulnerable on criterion application and exceptions",
          "Disadvantage arguments are vulnerable on uniqueness and link strength",
          "Have go-to questions ready for each common case type",
        ],
      },
      {
        type: "content",
        title: "Review: Asking Good CX Questions",
        content:
          "Asking good CX questions is the bridge between understanding question types and actually winning rounds through cross-examination. Here is what you have learned:\n\n**Finding Vulnerabilities:**\n• Listen for evidence, logical, and structural weaknesses during opponent speeches\n• Prioritize vulnerabilities that undermine entire arguments\n• Jot down 2-3 targets during each opponent speech\n\n**Crafting Targeted Questions:**\n• Use innocent inquiries to get facts on record without telegraphing\n• Deploy specificity probes to expose vague arguments\n• Test assumptions to surface hidden weaknesses\n• Highlight scope limitations and internal contradictions\n\n**Building Sequences:**\n• Plan 3-5 question sequences that build toward inescapable conclusions\n• Start with easy-to-agree-with facts and escalate\n• Don't reveal your destination until the final question\n\n**Avoiding Pitfalls:**\n• Every question must connect to a speech argument\n• Never ask questions that strengthen the opponent's case\n• Avoid speeches disguised as questions\n• Think about likely answers before asking\n\n**Adapting to Case Types:**\n• Different cases have different common vulnerabilities\n• Prepare go-to questions for policy, value, DA, and kritik arguments\n\nThe key takeaway: great CX questions are not improvised. They come from preparation, active listening, and strategic thinking. Practice this skill deliberately, and your CX will transform from a formality into a weapon.",
        keyPoints: [
          "Find vulnerabilities through active listening during opponent speeches",
          "Craft targeted questions using specific techniques",
          "Build sequences of 3-5 questions for maximum impact",
          "Avoid common pitfalls and adapt to different case types",
        ],
      },
    ],
  },
  {
    lessonId: "l33-06",
    pages: [
      {
        type: "content",
        title: "Introduction: Strategic Questioning",
        content:
          "You now know the types of questions and how to craft good ones. This lesson takes your CX skills to the next level by focusing on strategy—using questions not just to gather information or expose weaknesses, but to actively control the narrative of the round. Strategic questioning means every question serves a larger purpose within your overall debate strategy.\n\nStrategic questioning is what separates competent cross-examiners from dominant ones. A competent cross-examiner asks relevant questions and gets useful answers. A strategic cross-examiner uses CX to frame the entire round in their favor, setting traps that their opponent cannot escape, building narratives that carry through every subsequent speech, and controlling what the judge thinks about.\n\nThis lesson covers advanced techniques: setting up specific arguments through CX, using questions to control which issues the judge focuses on, creating dilemmas where any answer helps your case, and weaving CX exchanges into a cohesive round strategy.",
        keyPoints: [
          "Strategic questioning serves your overall round strategy, not just individual arguments",
          "It separates competent cross-examiners from dominant ones",
          "Focus areas: setting up arguments, controlling judge focus, creating dilemmas",
        ],
      },
      {
        type: "content",
        title: "Setting Up Arguments Through CX",
        content:
          "The most powerful use of CX is setting up arguments you plan to make in your next speech. When you can say 'as my opponent admitted in cross-examination,' your argument carries extra weight because it is supported by the other side's own words.\n\n**How to Set Up a Solvency Attack:**\nYour planned argument: Their plan won't work because it lacks enforcement.\nCX setup:\n1. 'Who enforces compliance with your plan?' (Get them to name an entity or admit there is none)\n2. 'What happens if someone violates your plan?' (Get them to describe penalties or admit there are none)\n3. 'Are there examples of similar policies failing due to lack of enforcement?' (Plant the seed)\nSpeech payoff: 'In CX, they could not identify an enforcement mechanism or any penalties for non-compliance. This means their plan is essentially voluntary, and voluntary programs have historically failed to achieve meaningful change.'\n\n**How to Set Up an Impact Turn:**\nYour planned argument: Their solution actually makes the problem worse.\nCX setup:\n1. 'Your plan increases government spending in this area, correct?' (Establish fact)\n2. 'Has increased government spending always solved problems in this sector?' (Force a nuanced answer)\n3. 'Are you aware of cases where increased spending led to inefficiency or waste?' (Plant the alternative narrative)\nSpeech payoff: 'They admitted that increased spending doesn't always solve problems and that waste is a real concern. Our evidence shows their plan would actually divert resources from more effective programs.'\n\n**How to Set Up Framework Weighing:**\nYour planned argument: Your framework should be preferred.\nCX setup:\n1. 'Under your framework, what counts as the most important impact?' (Understand their priorities)\n2. 'What if an action protects your value but harms [your value]?' (Create tension)\n3. 'Don't you agree that [your value] is also important?' (Secure agreement)\nSpeech payoff: 'They agreed that [your value] matters. Their framework cannot account for it, but ours can. This is why our framework should be the lens for this round.'",
        keyPoints: [
          "Set up specific arguments by getting admissions you'll reference in speeches",
          "Plan CX questions backward from the argument you want to make",
          "The speech payoff should explicitly quote the CX exchange",
          "Setup works for solvency attacks, impact turns, and framework weighing",
        ],
      },
      {
        type: "content",
        title: "Controlling the Narrative",
        content:
          "Strategic CX is about controlling what the judge thinks about. By choosing which topics to question, you influence which issues the judge considers most important. This is a subtle but powerful form of persuasion.\n\n**Spotlight Effect:**\nQuestions draw attention. When you spend 90 seconds questioning your opponent's evidence quality, the judge starts thinking about evidence quality. When you spend time asking about implementation challenges, the judge focuses on implementation. Choose your CX topics based on where you want the judge's attention.\n\n**Reframing the Debate:**\nYour opponent wants the round to be about X. You want it to be about Y. CX is where you can begin the reframe:\n• They want the debate about economic benefits. You ask about environmental costs.\n• They want the debate about short-term gains. You ask about long-term consequences.\n• They want the debate about one stakeholder. You ask about other affected groups.\n\nBy persistently steering questions toward your preferred framing, you shift the ground of the debate.\n\n**Creating a Theme:**\nThe best strategic CX has a theme—a single overarching message that all your questions reinforce. Examples:\n• Theme: 'Their plan is unrealistic.' Every question probes feasibility.\n• Theme: 'Their evidence is unreliable.' Every question targets source quality.\n• Theme: 'They ignore key stakeholders.' Every question asks about affected groups.\n\nWhen the judge reflects on CX, they should come away with a clear impression: 'The questioner showed that the opponent's plan has serious feasibility problems' or 'The questioner raised real concerns about evidence quality.' A themed CX creates this clear impression.\n\n**Avoiding Scatter:**\nThe opposite of themed CX is scattered CX, where questions jump randomly between topics. This dilutes your impact and leaves the judge with no clear takeaway. Even if individual questions are good, a scattered approach is less persuasive than a focused one.",
        keyPoints: [
          "CX questions direct judge attention to specific issues",
          "Use CX to reframe the debate toward your preferred ground",
          "Build CX around a single theme for maximum impact",
          "Avoid scattered questioning that dilutes your message",
        ],
      },
      {
        type: "question",
        id: "l33-06-q1",
        question:
          "You want the judge to focus on your opponent's weak implementation plan rather than their strong impact evidence. What should your CX strategy be?",
        options: [
          {
            id: "a",
            text: "Ask one question about implementation and several about their evidence",
          },
          {
            id: "b",
            text: "Skip CX entirely and address it in your speech",
          },
          {
            id: "c",
            text: "Focus most of your CX questions on implementation details, feasibility, and timeline",
          },
          {
            id: "d",
            text: "Ask random questions about various parts of their case",
          },
        ],
        correctAnswer: "c",
        explanation:
          "To control the narrative, spend your CX time on the topic you want the judge to focus on. By persistently questioning implementation details, you draw the judge's attention to this weakness and away from your opponent's stronger points.",
      },
      {
        type: "content",
        title: "Creating Dilemmas",
        content:
          "A CX dilemma is a question where any possible answer helps your case. This is the gold standard of strategic questioning. When you create a true dilemma, your opponent is stuck—every response option leads somewhere good for you.\n\n**The Binary Dilemma:**\nAsk a question with two possible answers, both of which you can use:\n'Is your plan mandatory or voluntary?'\n• If mandatory: 'So you're forcing people to comply, which raises liberty concerns.'\n• If voluntary: 'Voluntary programs historically have low participation rates, so your solvency is questionable.'\n\n**The Scope Dilemma:**\n'Does your evidence apply to all cases or just some?'\n• If all: 'That seems like an overgeneralization given the diversity of situations.'\n• If some: 'Then your impact is much smaller than you claimed.'\n\n**The Consistency Dilemma:**\n'You value individual freedom. Does that include the freedom to [action that contradicts their case]?'\n• If yes: 'Then your own value undermines your proposed restriction.'\n• If no: 'Then you don't actually value individual freedom in all cases, which weakens your framework.'\n\n**The Source Dilemma:**\n'Is your author an advocate for this policy or a neutral researcher?'\n• If advocate: 'So they have a bias in favor of their conclusion.'\n• If neutral: 'Then why do they reach a more moderate conclusion than you present?'\n\n**Building Dilemmas:**\nThe key to creating dilemmas is to think of all possible answers before you ask the question. Map out each response and plan your follow-up. If there is any answer that hurts you, it is not a true dilemma and you should rephrase or skip it.\n\n**Important Note:**\nDilemma questions should feel natural, not like trick questions. If the judge perceives you as trying to trap your opponent unfairly, it can backfire. Frame dilemmas as genuine inquiries that happen to reveal problems with the opponent's position.",
        keyPoints: [
          "Dilemma questions make every possible answer helpful to your case",
          "Binary, scope, consistency, and source dilemmas are common patterns",
          "Map out all possible answers before asking to confirm it's a true dilemma",
          "Frame dilemmas as genuine inquiries, not obvious traps",
        ],
      },
      {
        type: "content",
        title: "Weaving CX Into Your Round Strategy",
        content:
          "Strategic CX is not separate from your speeches—it is integrated into your total round strategy. Here is how to plan CX as part of your overall approach:\n\n**Pre-Round Planning:**\nBefore the round, anticipate likely opponent arguments and prepare CX questions for each:\n• What are the most common cases on this topic?\n• What are the typical weaknesses of those cases?\n• What questions expose those weaknesses?\n• What arguments will you make in your speeches that need CX setup?\n\n**Speech-CX Integration:**\nPlan your speeches and CX together:\n• Rebuttal point 1: Attack their solvency → CX questions 1-3 set this up\n• Rebuttal point 2: Challenge their evidence → CX questions 4-5 set this up\n• Rebuttal point 3: Win the framework → CX question 6 secures the concession\n\n**Cross-Reference:**\nAfter CX, quickly review what you got:\n• Which concessions can you use? Mark them for your speech.\n• Which answers were unhelpful? Adjust your speech to avoid relying on them.\n• Were there unexpected admissions? Incorporate them.\n\n**Throughout the Round:**\n• First CX: Focus on understanding their case and exposing the biggest weakness\n• Second CX (if applicable): Focus on securing concessions for your final speeches\n• Rebuttal speeches: Explicitly reference CX exchanges\n• Final speech: Weave CX moments into your overall narrative\n\n**The Integrated Debater:**\nThe best debaters treat CX, constructives, and rebuttals as chapters of the same story. CX is where you gather the evidence that your speeches turn into arguments. When all parts of the round work together, your advocacy is seamless and persuasive.",
        keyPoints: [
          "Plan CX as part of your total round strategy, not separately",
          "Map specific CX questions to specific speech arguments",
          "Review CX results before your speech and adjust as needed",
          "Treat CX, constructives, and rebuttals as chapters of one story",
        ],
      },
      {
        type: "question",
        id: "l33-06-q2",
        question:
          "You ask: 'Is your environmental policy mandatory or voluntary?' Your opponent says 'voluntary.' How should you use this?",
        options: [
          {
            id: "a",
            text: "Move on—it's not useful since they chose the answer",
          },
          {
            id: "b",
            text: "In your speech, argue that voluntary programs have historically low participation rates, undermining their solvency",
          },
          {
            id: "c",
            text: "Ask the same question again hoping for a different answer",
          },
          {
            id: "d",
            text: "Argue during CX that voluntary programs never work",
          },
        ],
        correctAnswer: "b",
        explanation:
          "This is a classic dilemma question. The 'voluntary' answer lets you argue low participation rates in your speech. You planned for this answer, so you should deploy the prepared argument about voluntary programs' historical ineffectiveness.",
      },
      {
        type: "content",
        title: "Advanced Techniques: Anchoring and Priming",
        content:
          "Two psychological techniques from persuasion research can make your CX even more effective:\n\n**Anchoring:**\nAnchoring means introducing a number or reference point that influences subsequent judgments. In CX, you can anchor the judge's expectations:\n• 'How much does your plan cost?' Then in your speech: 'They said $50 billion. To put that in perspective, that's more than the entire budget of [relatable program].'\n• 'How many people does your evidence say are affected?' Then in your speech: 'They said 10,000 people. But there are 330 million Americans, so we're talking about 0.003% of the population.'\n\nBy getting a number on the record, you can frame it to your advantage in your speech. The anchor sticks in the judge's mind.\n\n**Priming:**\nPriming means introducing a concept early that influences how the judge processes later information. In CX:\n• Ask about government failures before your speech argues government can't solve this\n• Ask about unintended consequences before your speech presents a disadvantage\n• Ask about conflicting evidence before your speech challenges their source quality\n\nThe questions prime the judge to be receptive to your arguments because the relevant concepts are already activated in their thinking.\n\n**Ethical Considerations:**\nThese techniques are persuasion tools, not manipulation. They work because they help the judge process information effectively. You should never use them to distort the truth or create false impressions. Anchoring a number is fine; misquoting a number is not. Priming a concept is fine; planting false information is not.\n\n**Practice Tip:**\nWatch recordings of skilled debaters' CX periods. Notice how they introduce concepts, anchor numbers, and prime the judge for their upcoming speeches. This observational learning accelerates your own skill development.",
        keyPoints: [
          "Anchoring introduces reference points that influence judge perception",
          "Priming activates concepts that make the judge receptive to your arguments",
          "Both techniques are ethical when used honestly",
          "Study skilled debaters to learn these techniques through observation",
        ],
      },
      {
        type: "content",
        title: "Review: Strategic Questioning",
        content:
          "Strategic questioning elevates CX from a routine exchange into a powerful tool that shapes the entire round. Here is what you have learned:\n\n**Setting Up Arguments:**\n• Plan CX questions backward from the arguments you want to make\n• Get admissions on record that you will quote in your speeches\n• The CX-to-speech connection is what makes questions strategically valuable\n\n**Controlling the Narrative:**\n• Choose CX topics based on where you want judge attention\n• Build CX around a single theme for maximum impact\n• Use questions to reframe the debate toward your preferred ground\n\n**Creating Dilemmas:**\n• Design questions where every possible answer helps your case\n• Map out all possible responses before asking\n• Frame dilemmas as genuine inquiries, not traps\n\n**Integrating CX Into Round Strategy:**\n• Plan CX and speeches together as parts of one strategy\n• Review CX results and adjust speeches in real time\n• Treat the entire round as a cohesive story\n\n**Advanced Techniques:**\n• Use anchoring to frame numbers and reference points\n• Use priming to prepare the judge for your arguments\n• Both techniques are effective when used ethically\n\nMastering strategic questioning takes practice, but it is one of the highest-return skills in debate. A debater who dominates CX sets the tone for the entire round.",
        keyPoints: [
          "Plan CX backward from your speech arguments",
          "Control narrative by focusing questions on your preferred issues",
          "Create dilemmas where every answer helps your case",
          "Integrate CX into your total round strategy for maximum impact",
        ],
      },
    ],
  },
  {
    lessonId: "l33-07",
    pages: [
      {
        type: "content",
        title: "Introduction: Review of Cross-X Basics",
        content:
          "This lesson reviews the fundamental concepts of cross-examination that you have learned throughout this unit. Cross-examination is one of the most skill-intensive parts of debate, combining quick thinking, strategic planning, communication skills, and deep topic knowledge. Before moving forward, it is important to consolidate these foundations.\n\nCross-examination can feel overwhelming because it requires you to think on your feet while staying calm, listen carefully while planning your next question, and pursue a strategy while adapting to unexpected answers. No other part of debate demands this combination of skills simultaneously.\n\nThis review will reinforce the key concepts, test your understanding, and help you identify areas where you might need additional practice. Think of this as a checkpoint to make sure your CX foundations are solid before you build more advanced skills on top of them.",
        keyPoints: [
          "CX combines strategic planning, quick thinking, and communication skills",
          "Solid foundations are essential before building advanced techniques",
          "Use this review to identify areas that need more practice",
        ],
      },
      {
        type: "content",
        title: "Review: The Four Purposes of CX",
        content:
          "Every CX question should serve at least one of these four purposes. If a question does not serve any of them, it is wasting your limited time.\n\n**1. Clarification:**\nUnderstanding what your opponent actually said and means. You cannot effectively respond to an argument you do not understand. Clarification questions are most important at the beginning of CX and when your opponent presents complex or unfamiliar arguments. Example: 'Can you explain what you mean by systemic barriers in the context of your second contention?'\n\n**2. Exposing Weaknesses:**\nRevealing flaws in your opponent's arguments through questions rather than assertions. The power of this approach is that the weakness comes from the opponent's own mouth, not yours. Example: 'Your evidence is from a study of 50 people. Is that sample size large enough to draw the conclusions you're making?'\n\n**3. Securing Concessions:**\nGetting your opponent to agree with facts or principles that support your case. Concessions are most valuable when you reference them explicitly in your speeches. Example: 'Would you agree that economic stability is important for any policy to succeed?'\n\n**4. Setting Up Arguments:**\nAsking questions that create the foundation for arguments in your next speech. This is the most advanced purpose and the one that separates good debaters from great ones. Example: A sequence of questions establishing that their plan has no enforcement mechanism, setting up your solvency attack.\n\nRemember: most questions can serve multiple purposes simultaneously. A clarification question might also expose a weakness. A concession question might also set up an argument. The best CX questions operate on multiple levels.",
        keyPoints: [
          "Four purposes: clarify, expose, concede, set up",
          "If a question serves no purpose, don't ask it",
          "The best questions serve multiple purposes simultaneously",
          "Setting up arguments is the most advanced and impactful purpose",
        ],
      },
      {
        type: "question",
        id: "l33-07-q1",
        question:
          "Which CX purpose is being used when you ask: 'Would you agree that any effective policy needs adequate funding to work?'",
        options: [
          {
            id: "a",
            text: "Clarification",
          },
          {
            id: "b",
            text: "Exposing weaknesses",
          },
          {
            id: "c",
            text: "Securing a concession",
          },
          {
            id: "d",
            text: "Wasting time",
          },
        ],
        correctAnswer: "c",
        explanation:
          "This question seeks to get your opponent to agree with a principle (adequate funding is necessary) that you can later use to attack their case if their plan lacks funding. It's securing a concession that sets up a future argument.",
      },
      {
        type: "content",
        title: "Review: Question Types and When to Use Them",
        content:
          "The three question types give you different levels of control over the CX exchange. Knowing when to use each type is critical.\n\n**Open Questions (Low Control):**\n• Start with how, why, what, explain\n• Give opponent freedom to respond at length\n• Best for: genuine clarification, getting opponents to over-explain weak points, early CX exploration\n• Risk: opponent can use time for mini-speeches\n• Example: 'How does your plan address the implementation timeline?'\n\n**Closed Questions (High Control):**\n• Can be answered with yes, no, or short factual responses\n• You control the frame and the pace\n• Best for: establishing facts, building sequences, locking in positions, saving time\n• Risk: skilled opponents add qualifications to yes/no answers\n• Example: 'Your plan requires $50 billion in new spending, correct?'\n\n**Leading Questions (Maximum Control):**\n• Contain or suggest the desired answer\n• Push the respondent toward your preferred framing\n• Best for: forcing concessions, reframing arguments, driving home key points\n• Risk: savvy opponents reject the framing; overuse looks aggressive\n• Example: 'Since your evidence only covers urban areas, doesn't that mean your national claims are unsupported?'\n\n**The Funnel Technique:**\nStart broad (open), narrow down (closed), drive home the point (leading). This natural progression feels conversational while strategically building toward your conclusion.\n\n**General Rule:**\nUse open questions when you need information, closed questions when you need facts on record, and leading questions when you need to make a point. Move through all three in a single CX for maximum effectiveness.",
        keyPoints: [
          "Open = low control, good for exploration and clarification",
          "Closed = high control, good for establishing facts and sequences",
          "Leading = maximum control, good for forcing concessions",
          "The funnel technique combines all three for maximum impact",
        ],
      },
      {
        type: "question",
        id: "l33-07-q2",
        question:
          "You're running low on CX time and need to quickly establish two facts. Which question type should you use?",
        options: [
          {
            id: "a",
            text: "Open questions to let them explain fully",
          },
          {
            id: "b",
            text: "Leading questions to make your point",
          },
          {
            id: "c",
            text: "Closed questions for quick yes/no answers",
          },
          {
            id: "d",
            text: "No questions—save it for your speech",
          },
        ],
        correctAnswer: "c",
        explanation:
          "Closed questions are the most time-efficient question type because they require only a yes/no or short factual response. When time is limited, closed questions let you establish facts quickly.",
      },
      {
        type: "content",
        title: "Review: Strategic CX Principles",
        content:
          "Beyond individual questions, strategic CX requires thinking about the bigger picture. Here are the core strategic principles:\n\n**Connect CX to Speeches:**\nEvery CX question should connect to something you plan to say in a speech. The CX-to-speech pipeline is: identify target during opponent speech, ask questions in CX, reference answers in your speech, build arguments on the exchange. If you never reference a CX exchange in your speech, it was strategically wasted.\n\n**Control the Narrative:**\nYour CX topics influence what the judge thinks about. Spend time questioning areas where you are strong and your opponent is weak. Build your CX around a theme rather than scattering questions across random topics.\n\n**Create Dilemmas:**\nThe best questions are ones where every possible answer helps your case. Before asking a question, think: 'What if they say yes? What if they say no? What if they dodge?' If any answer hurts you, rephrase.\n\n**Prioritize Ruthlessly:**\nWith only 3 minutes, you cannot cover everything. Start with your most important questions. If you only get to ask three questions, make them your three best ones.\n\n**Maintain Professionalism:**\nTough but fair always beats aggressive and hostile. Calm confidence is more persuasive than theatrical intensity. Handle evasion by noting it for the judge, not by arguing.\n\n**Adapt to Your Judge:**\nEvidence judges want you to probe sources. Logic judges want you to expose reasoning gaps. Framework judges want you to challenge value premises. Policymaker judges want you to question real-world feasibility. Adjust your CX emphasis accordingly.",
        keyPoints: [
          "Always connect CX questions to speech arguments",
          "Build CX around a theme to control the narrative",
          "Create dilemma questions where every answer helps you",
          "Adapt your CX emphasis to match your judge's values",
        ],
      },
      {
        type: "content",
        title: "Review: CX Etiquette and Answering",
        content:
          "CX is a two-way exchange. You need to be skilled at both asking and answering questions.\n\n**Asking Etiquette:**\n• Be confident and respectful simultaneously\n• Listen to answers before asking follow-ups\n• Don't interrupt, argue, or make faces\n• Stand and project confidence through body language\n• Thank the judge and opponent when CX ends\n\n**Answering Strategies:**\n• Answer the question directly first, then qualify if needed\n• For closed questions: say yes or no, then add context\n• For leading questions: challenge the premise if inaccurate\n• For open questions: answer concisely without rambling\n• Never lie, obviously dodge, or get defensive\n\n**Handling Difficult Situations:**\n• Evasive opponent: Rephrase once, note evasion for judge, move on\n• Aggressive questioner: Stay calm, answer clearly, let the judge see the contrast\n• Unexpected question: Take a breath, think for a moment, then answer honestly\n• Question you don't know the answer to: Say 'I'm not sure about that specific point, but I can tell you that...'\n\n**What Judges Watch For:**\nJudges form strong impressions during CX. They notice:\n• Who seems more confident and prepared\n• Who answers directly vs. who dodges\n• Who asks purposeful questions vs. who wastes time\n• Who maintains professionalism vs. who gets flustered\n• The overall dynamic of control and competence\n\nYour CX performance influences speaker points, judge perception, and sometimes even the decision itself. Never treat it as a throwaway part of the round.",
        keyPoints: [
          "Be confident and respectful when asking questions",
          "Answer directly first, then qualify",
          "Handle difficult situations with calm professionalism",
          "Judges form strong impressions during CX that affect the round",
        ],
      },
      {
        type: "question",
        id: "l33-07-q3",
        question:
          "Your opponent asks a leading question that misrepresents your position: 'So you're saying we should just ignore environmental damage?' What is the best response?",
        options: [
          {
            id: "a",
            text: "Say 'yes' to avoid conflict",
          },
          {
            id: "b",
            text: "Get angry and accuse them of lying",
          },
          {
            id: "c",
            text: "Challenge the premise: 'That's not what I'm saying. My position is that we should address environmental damage through [your actual approach].'",
          },
          {
            id: "d",
            text: "Refuse to answer and stay silent",
          },
        ],
        correctAnswer: "c",
        explanation:
          "When a leading question misrepresents your position, challenge the premise calmly and restate your actual position. This corrects the record without being defensive or aggressive.",
      },
      {
        type: "content",
        title: "Review: Common Mistakes and How to Fix Them",
        content:
          "As you practice CX, watch for these common mistakes that even experienced debaters make:\n\n**Asking Questions You Can't Use:**\nFix: Before every question, ask yourself 'How will I use the answer in my speech?' If you don't have an answer, skip the question.\n\n**Not Listening to Answers:**\nFix: Put down your notes for a moment and actively listen. The best follow-up questions come from hearing something unexpected in an answer.\n\n**Giving Speeches Instead of Asking Questions:**\nFix: If your 'question' takes more than 15 seconds to ask, it's a speech. Shorten it. The question mark should come quickly.\n\n**Only Using One Question Type:**\nFix: Deliberately plan to use all three types (open, closed, leading) in every CX period. Variety keeps your opponent off balance.\n\n**Forgetting to Use CX in Speeches:**\nFix: Write 'CX reference' in your speech notes as a reminder. Force yourself to cite at least one CX exchange in every speech.\n\n**Getting Emotional:**\nFix: Practice CX with a teammate who intentionally gives frustrating answers. Build your tolerance for evasion and learn to stay calm.\n\n**Asking Closed Questions You Don't Know the Answer To:**\nFix: Only ask closed questions when you already know the answer or when any answer helps you (dilemma questions).\n\n**Wasting Time on Unimportant Points:**\nFix: Prioritize your top 3 questions and ask those first. Everything else is bonus.",
        keyPoints: [
          "Connect every question to a planned speech argument",
          "Listen actively—the best follow-ups come from unexpected answers",
          "Keep questions short and use all three question types",
          "Practice staying calm during frustrating CX exchanges",
        ],
      },
      {
        type: "content",
        title: "Final Review: Your CX Toolkit",
        content:
          "You now have a comprehensive cross-examination toolkit. Here is everything at a glance:\n\n**Foundation: The Four Purposes**\nClarify. Expose. Concede. Set up. Every question should serve at least one purpose.\n\n**Tools: Three Question Types**\nOpen questions for exploration. Closed questions for control. Leading questions for impact. Use the funnel technique to combine them.\n\n**Crafting: Targeted Questions**\nFind vulnerabilities (evidence, logic, structure). Use techniques like innocent inquiries, specificity probes, assumption tests, scope challenges, and internal tension questions.\n\n**Sequences: Building Impact**\nPlan 3-5 question sequences that build toward inescapable conclusions. Foundation → Bridge → Pressure → Conclusion.\n\n**Strategy: Controlling the Round**\nSet up speech arguments. Control narrative focus. Create dilemmas. Integrate CX with your total round strategy. Use anchoring and priming.\n\n**Professionalism: Winning the Room**\nBe tough but fair. Stay calm. Handle evasion gracefully. Let your confidence show through preparation, not aggression.\n\n**Adaptation: Reading the Room**\nAdjust your CX to match your judge's values. Evidence judges want source questions. Logic judges want reasoning questions. Framework judges want value questions.\n\nCross-examination mastery is a journey, not a destination. Every round is an opportunity to practice and improve. Record your CX exchanges, review them, and identify one thing to improve for next time. Consistent, deliberate practice will transform CX from your most stressful moment into your greatest competitive advantage.",
        keyPoints: [
          "Your toolkit: four purposes, three question types, targeting techniques, sequences, and strategy",
          "Professionalism and adaptation are as important as question quality",
          "Practice deliberately by recording and reviewing CX exchanges",
          "Mastering CX is one of the highest-impact skills in competitive debate",
        ],
      },
    ],
  },
];
