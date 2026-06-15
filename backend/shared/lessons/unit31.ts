import { MultiPageLesson } from "./types";

export const UNIT_31_LESSONS: MultiPageLesson[] = [
  {
    lessonId: "l31-01",
    pages: [
      {
        type: "content",
        title: "Introduction: Understanding Judge Paradigms",
        content: "Welcome to the Expert tier of debate education! You've mastered the fundamentals and developed solid argumentation skills. Now it's time to level up by understanding one of the most sophisticated aspects of competitive debate: adapting your approach to different judges.\n\nEvery judge brings their own philosophy, preferences, and decision-making criteria to the round. Some judges are ideologues who vote on 'who runs the better framework.' Others are technicians who care primarily about argument comparison and impact analysis. Some focus heavily on evidence quality, while others reward logical reasoning over documentation.\n\nIn this unit, you'll learn how to identify different judge types and adapt your strategy accordingly. This knowledge separates good debaters from great ones—those who can win against any judge, anywhere.",
      },
      {
        type: "content",
        title: "What Are Judge Paradigms?",
        content: "A judge's paradigm is their personal philosophy of how debate should be evaluated. It answers fundamental questions:\n\n**Evaluation Questions:**\n• What is debate for? (testing arguments, finding truth, winning competitions)\n• What matters most? (evidence, logic, framework, impacts)\n• How should judges decide close calls?\n• What role should judge intervention play?\n• How should different arguments be weighed?\n\n**Paradigm Categories:**\nJudges generally fall into a few philosophical camps:\n\n**Policy Makers**: Evaluate debate like policy professionals. They care about real-world solvency, feasibility, and cost-benefit analysis. Effective policy approaches matter more than theoretical arguments.\n\n**Framework Evaluators**: Focus on establishing which 'lens' applies to evaluate arguments (utilitarian, deontological, consequentialist). Whoever wins the framework wins the debate.\n\n**Evidence Evaluators**: Demand strong citations, quality sources, and comparative evidence analysis. Logic without documentation struggles.\n\n**Technicians**: Focus on argument comparison, impact calculation, and logical consistency. Care less about judge intuition, more about who proves their case through superior analysis.\n\n**Holistic Judges**: Look at the 'big picture'—coherence, impact narrative, overall persuasiveness. Less concerned with technical precision than overall compelling case.",
        keyPoints: [
          "Judge paradigms reflect their philosophy of debate",
          "Different judges prioritize: evidence, logic, framework, real-world application",
          "Understanding the judge's paradigm is crucial to strategy",
        ],
      },
      {
        type: "content",
        title: "The Policymaker Judge",
        content: "Policymaker judges evaluate debate through a policy professional's lens. They ask: 'Would this actually work in the real world?'\n\n**Key Characteristics:**\n• Focus on practical solvency, not theoretical perfection\n• Care about implementation details and feasibility\n• Want to understand the actual mechanism of how a policy works\n• Value cost-benefit analysis and weighing\n• May not require exhaustive evidence if logic is sound\n\n**How They Vote:**\nPolicymakers vote for the side that presents the better policy solution to the problem. They're less interested in 'who proved framework' and more interested in 'what plan would actually reduce the harms we all agree about?'\n\n**What This Means for Your Strategy:**\n1. **Focus on Mechanisms**: Explain clearly HOW your plan works, not just THAT it works\n2. **Discuss Solvency**: Show concrete evidence that your approach addresses the harm\n3. **Anticipate Implementation**: Address practical concerns (funding, administrative capacity)\n4. **Do Impact Weighing**: Show why your solution's benefits outweigh its risks\n5. **Use Real Examples**: Historical cases where similar policies worked (or didn't)\n\n**Argument Selection:**\nWith a policymaker judge, focus on arguments about:\n• Plan effectiveness and solvency\n• Real-world impacts (jobs, economic growth, lives saved)\n• Practical feasibility\n• Cost-effectiveness\n\n**Avoid:**\n• Overly theoretical arguments disconnected from results\n• Pure framework wars if a practical approach will suffice\n• Obscure theoretical jargon without applied explanation",
        keyPoints: [
          "Policymakers evaluate real-world workability",
          "Focus on mechanisms, solvency, and implementation",
          "Use concrete examples and impact weighing",
        ],
      },
      {
        type: "question",
        id: "l31-01-q1",
        question: "What is the primary focus of a Policymaker judge?",
        options: [
          { id: "a", text: "Whether a policy would actually work in practice" },
          { id: "b", text: "Whether the debate uses proper formatting" },
          { id: "c", text: "Whether the philosophical framework is rigorous" },
          { id: "d", text: "Whether every claim has evidence" }
        ],
        correctAnswer: "a",
        explanation: "Policymaker judges are most concerned with practical solvency and real-world implementation. They evaluate whether a proposed policy would actually work if implemented, focusing on mechanisms and feasibility.",
      },
      {
        type: "content",
        title: "The Framework Judge",
        content: "Framework judges believe debate is fundamentally about establishing the right lens through which to evaluate arguments. Whoever wins the framework almost always wins the debate.\n\n**Key Characteristics:**\n• See debate as philosophical—it's about values and principles\n• Believe the framework (criteria for evaluation) determines the winner\n• Once framework is established, arguments naturally flow\n• Care about logical consistency within their chosen framework\n• Often philosophically sophisticated\n\n**Common Frameworks:**\n• **Consequentialist**: Maximize overall utility/welfare\n• **Deontological**: Uphold duties and principles regardless of outcomes\n• **Contractarian**: Actions should serve the social contract\n• **Rights-based**: Protect individual rights above all\n• **Care Ethics**: Prioritize relationships and compassion\n\n**How They Vote:**\nFramework judges first ask: 'What should determine if a policy is good or bad?' Once that's answered, they apply that lens to judge impact. If you win the framework is 'lives saved,' your plan that saves more lives wins. If you win it's 'individual liberty,' your plan protecting autonomy wins.\n\n**Strategy Against Framework Judges:**\n1. **Win the Framework Early**: Establish your framework in your opening speech\n2. **Defend Your Framework**: Anticipate and refute alternative frameworks\n3. **Apply Consistently**: Once your framework is accepted, apply it rigorously\n4. **Show Why Other Frameworks Fail**: Explain flaws in opponent frameworks\n5. **Use Framework Clash**: Make it clear why your framework is better\n\n**What Works:**\n• Philosophical arguments and defense\n• Comparative framework analysis\n• Explaining the implications of each framework\n• Showing which framework better accounts for 'intuitive' examples\n• Rigorous logical consistency\n\n**What Doesn't:**\n• Technical arguments without philosophical grounding\n• Arguments that contradict your own framework\n• Ignoring opponent framework arguments\n• Appeals to 'common sense' without framework support",
        keyPoints: [
          "Framework judges believe the framework determines the winner",
          "Establish your framework early and defend it rigorously",
          "Show why your framework better explains the debate",
        ],
      },
      {
        type: "question",
        id: "l31-01-q2",
        question: "In a debate before a Framework judge, what typically determines who wins?",
        options: [
          { id: "a", text: "Which side presented more evidence" },
          { id: "b", text: "The side that has the clearer delivery" },
          { id: "c", text: "The judge's personal preference" },
          { id: "d", text: "Whichever side wins the framework/criteria for evaluation" }
        ],
        correctAnswer: "d",
        explanation: "Framework judges believe that establishing the right lens for evaluation essentially determines the debate. Once the framework is established, arguments naturally flow from that framework.",
      },
      {
        type: "content",
        title: "The Evidence Judge",
        content: "Evidence judges demand rigor in sourcing and citation. They believe that claims must be backed by credible, quality evidence—logic alone isn't sufficient.\n\n**Key Characteristics:**\n• Want to see actual citations and evidence cards\n• Evaluate evidence quality: recency, author expertise, potential bias\n• May ask to see evidence during or after the round\n• Skeptical of claims without documentation\n• Value evidence comparison and quality analysis\n\n**Evidence Quality Standards:**\nEvidence judges care about:\n• **Author Credentials**: Is the author an expert in this field?\n• **Publication Quality**: Is the source reputable?\n• **Date**: Is the evidence recent (or historically appropriate)?\n• **Context**: Is the quote representative or cherry-picked?\n• **Bias Detection**: Does the source have a vested interest?\n\n**How They Vote:**\nEvidence judges compare the quality and quantity of evidence presented. They're asking: 'Who brought better-sourced, more credible evidence to support their claims?'\n\n**Strategy Against Evidence Judges:**\n1. **Prepare Quality Evidence**: Research thoroughly and select best sources\n2. **Diversify Sources**: Show evidence from multiple, independent sources\n3. **Read Evidence Completely**: Provide context, not just isolated quotes\n4. **Preempt Attacks**: Acknowledge weaknesses in your evidence proactively\n5. **Compare Evidence Quality**: Show your evidence is better-sourced than opponents'\n6. **Have Cards Ready**: Be prepared to show actual evidence if asked\n\n**Avoid:**\n• Paraphrasing instead of direct quotes\n• Outdated or questionable sources\n• Single-source reliance\n• Generalized claims ('most experts say')\n• Vague citations ('according to research')\n\n**Pro Tip:**\nEven in oral debate, offer to show evidence: 'I have a card from Dr. [Name] from [reputable publication] that directly supports this claim.' This builds credibility with evidence judges.",
        keyPoints: [
          "Evidence judges demand strong sources and citations",
          "Quality matters more than quantity",
          "Be prepared to defend your evidence choices",
        ],
      },
      {
        type: "question",
        id: "l31-01-q3",
        question: "What is most important to an Evidence judge?",
        options: [
          { id: "a", text: "The author expertise, publication quality, and recency of evidence" },
          { id: "b", text: "The overall eloquence of the speech" },
          { id: "c", text: "The logical structure of arguments" },
          { id: "d", text: "The number of examples provided" }
        ],
        correctAnswer: "a",
        explanation: "Evidence judges focus on the credibility and quality of sources. They evaluate author credentials, publication reputation, recency, and potential bias—not just the logical structure or eloquence.",
      },
      {
        type: "content",
        title: "The Technical Judge",
        content: "Technical judges focus on argument comparison and logical analysis. They want to see clear clash, impact weighing, and systematic comparison of arguments.\n\n**Key Characteristics:**\n• Value logical consistency and argument comparison\n• Want to see explicit weighing and impact calculation\n• Focus on how arguments interact and determine the debate\n• Care about dropped arguments and crystallization\n• Less interested in judge intuition, more interested in systematic analysis\n\n**The Technical Approach:**\nTechnical judges ask: 'Given these arguments, how does the logic determine the winner?'\n\nThey want debaters to:\n1. **Compare arguments explicitly**: 'Our evidence on solvency outweighs their economic concerns because...'\n2. **Calculate impacts**: 'This results in X number of lives saved versus their Y economic loss...'\n3. **Explain weighing mechanisms**: 'Saving lives outweighs economic costs because...'\n4. **Extend dropped arguments**: Highlight when opponents fail to answer your points\n5. **Crystallize clearly**: Show the path to victory through clear reasoning\n\n**What Technical Judges Value:**\n• Explicit clash and comparison\n• Impact weighing explanations\n• Logical framework for decision-making\n• Responsive refutation\n• Clear signposting and organization\n• Dropped argument analysis\n\n**What Doesn't Work:**\n• Vague impact statements\n• Assuming the judge understands your logic\n• Leaving comparisons implicit\n• Poor organization that obscures argumentation\n• Failing to explicitly weigh competing impacts\n\n**Speaking for Technical Judges:**\nUse explicit language: 'Our argument outweighs because...,' 'This comparison matters because...,' 'The judge should vote for us because...'",
        keyPoints: [
          "Technical judges focus on argument comparison and logical analysis",
          "Explicitly weigh and compare arguments",
          "Show dropped arguments and crystallize the decision calculus",
        ],
      },
      {
        type: "content",
        title: "The Holistic Judge",
        content: "Holistic judges step back from technical details and look at the overall persuasiveness and coherence of your case.\n\n**Key Characteristics:**\n• Focus on the 'big picture' narrative\n• Care about whether your case 'hangs together' logically\n• Value clarity and persuasiveness over technical precision\n• May not track every argument in detail\n• Judge based on overall impression and case coherence\n\n**The Holistic Approach:**\nHolistic judges are asking: 'Who told a more compelling, coherent story about why their position is right?'\n\nThey care about:\n• **Narrative coherence**: Does your case make sense as a whole?\n• **Impact narrative**: What's the story of what happens in the world?\n• **Persuasiveness**: Which side is more convincing overall?\n• **Clarity**: Can the judge understand your main arguments?\n• **Case strategy**: Are your arguments working together effectively?\n\n**Strategy Against Holistic Judges:**\n1. **Tell a Coherent Story**: Make sure your arguments support each other\n2. **Emphasize Main Impacts**: Keep the focus on what actually matters\n3. **Use Analogies and Examples**: Paint clear pictures of your world\n4. **Maintain Consistency**: Don't make arguments that contradict each other\n5. **Simplify**: Don't get lost in technical minutiae\n6. **Emphasize Your Path to Victory**: Show clearly why you win\n\n**What Works:**\n• Clear narrative flow\n• Arguments that reinforce each other\n• Consistent case positioning\n• Strong delivery that conveys confidence\n• Simple, elegant logic\n\n**What Doesn't:**\n• Overly technical argument comparison\n• Arguments that seem disconnected\n• Complex frameworks that lack intuitive appeal\n• Contradictory positions within your case\n• Losing the forest for the trees",
        keyPoints: [
          "Holistic judges focus on overall case coherence and narrative",
          "Tell a compelling, consistent story",
          "Keep the focus on main impacts and clear paths to victory",
        ],
      },
      {
        type: "question",
        id: "l31-01-q4",
        question: "What matters most to a Holistic judge?",
        options: [
          { id: "a", text: "Explicit impact weighing calculations" },
          { id: "b", text: "How many pieces of evidence you presented" },
          { id: "c", text: "The technical precision of argument comparison" },
          { id: "d", text: "The overall coherence and persuasiveness of your case" }
        ],
        correctAnswer: "d",
        explanation: "Holistic judges focus on whether your case 'hangs together' logically and is persuasive overall. They care about narrative coherence and the big picture more than technical details.",
      },
      {
        type: "content",
        title: "Conclusion: Identifying and Adapting to Judge Types",
        content: "You now understand the major judge paradigms:\n\n**Quick Reference:**\n\n**Policymaker**: Focus on real-world workability, mechanisms, and cost-benefit analysis. Use concrete examples.\n\n**Framework**: Establish and defend your evaluative framework. Show why your framework better explains the debate.\n\n**Evidence**: Bring quality sources and be ready to defend them. Emphasize evidence credibility.\n\n**Technical**: Compare arguments explicitly, calculate impacts, show dropped arguments, crystallize decision calculus.\n\n**Holistic**: Tell a coherent story. Keep main impacts clear. Make sure your arguments support each other.\n\n**How to Identify Judges:**\nBefore the round, look up the judge's paradigm if available, or ask coaches familiar with them. During the round, listen to their questions—what they ask reveals their priorities.\n\n**Adapting Your Strategy:**\nWhile you should maintain core strengths, slightly adjusting emphasis can help:\n• For Policymakers: Emphasize implementation and real-world impacts\n• For Framework judges: Spend time on framework establishment and comparison\n• For Evidence judges: Prepare quality evidence and be ready to discuss sources\n• For Technical judges: Use explicit language and careful comparison\n• For Holistic judges: Focus on narrative coherence and clear path to victory\n\n**The Truth:**\nMost judges are blends of these types. Adapt where you can, but stay true to your core case and speaking style.\n\n**Looking Ahead:**\nIn the next lesson, we'll explore specific strategies for adapting your speaking style, argument selection, and strategy to different judge types.",
        keyPoints: [
          "Five major judge types with different priorities",
          "Identify judges through paradigm research and questions",
          "Adapt emphasis while maintaining core case strength",
        ],
      },
    ],
  },
  {
    lessonId: "l31-02",
    pages: [
      {
        type: "content",
        title: "Introduction: Judge Adaptation Strategies",
        content: "Now that you understand different judge types, how do you actually adapt your strategy to win before any judge? Expert debaters don't just know the theory—they know how to execute.\n\nIn this lesson, you'll learn concrete strategies for adapting argument selection, speaking style, and case emphasis based on judge type. This is where theory becomes practice, and where good debaters become great ones.\n\nThe key principle: adapt where you can without abandoning your strengths. You shouldn't fundamentally change who you are as a debater, but strategic emphasis can significantly improve your win rate against different judges.",
      },
      {
        type: "content",
        title: "Pre-Round Judge Research",
        content: "The best adaptation happens before the round even starts. Research gives you crucial information:\n\n**Where to Find Judge Information:**\n• Tournament judge paradigms (many tournaments post these)\n• Your coaching staff's judge files\n• Asking other debaters at the tournament\n• Social media profiles or past articles\n• Official bios if available\n\n**Key Questions to Answer:**\n1. What's their debate philosophy? (framework, evidence, policy focus)\n2. Do they have paradigm statements online?\n3. What's their background? (Lawyer, coach, professor)\n4. How much do they value delivery vs. content?\n5. Are they known to prefer particular argument types?\n6. Have you debated them before?\n\n**Processing the Information:**\nCreate a quick mental profile:\n\"This judge is [type], emphasizes [priority], cares about [criteria], so I should emphasize [adaptation].\"\n\n**Using the Information:**\nDuring prep, brief your partner:\n• 'This judge is evidence-heavy, so let's ensure all major claims are well-sourced'\n• 'They like philosophical frameworks—we should be prepared for framework clash'\n• 'They care about real-world solvency, so emphasize implementation'\n• 'They're a technician, so explicit impact weighing will matter'\n\n**Critical Reminder:**\nDon't let judge research paralyze you. You're looking for general tendencies, not trying to predict every decision.",
        keyPoints: [
          "Research judge paradigms and background before the round",
          "Create a quick mental profile of their type",
          "Adjust emphasis, not core arguments, based on research",
        ],
      },
      {
        type: "content",
        title: "Adapting Argument Selection",
        content: "Different judges are persuaded by different types of arguments. Strategic argument selection makes your case stronger:\n\n**For Policymaker Judges:**\n• Prioritize solvency and mechanism arguments\n• Include cost-benefit analysis\n• Use real-world case studies\n• Emphasize implementation details\n• De-emphasize pure framework debates\n\n**For Framework Judges:**\n• Lead with your framework\n• Prepare framework comparison\n• Include philosophical arguments\n• Show how your framework explains intuitive cases\n• Spend time on comparative framework weighing\n\n**For Evidence Judges:**\n• Select your strongest-sourced arguments\n• Be prepared to defend every piece of evidence\n• Avoid arguments you can't strongly source\n• Include comparative evidence analysis\n• Point out when opponents use weak sources\n\n**For Technical Judges:**\n• Focus on clearly comparable arguments\n• Build explicit weighing mechanisms\n• Highlight dropped arguments\n• Use clear impact calculus\n• Avoid arguments that don't interface cleanly\n\n**For Holistic Judges:**\n• Choose arguments that coherently support your case\n• Avoid technical minutiae\n• Focus on your strongest narrative\n• Include analogies and clear examples\n• Emphasize your path to victory\n\n**The Key Principle:**\nWith every judge type, emphasize YOUR STRONGEST arguments. Don't build arguments just because they're 'good for this judge type.' Your best arguments will work against any judge.",
        keyPoints: [
          "Emphasize different argument types for different judges",
          "Policymakers: mechanism and solvency",
          "Framework judges: comparative philosophy",
          "Evidence judges: strong sources and comparison",
          "Technical judges: explicit weighing",
          "Holistic judges: narrative coherence",
        ],
      },
      {
        type: "question",
        id: "l31-02-q1",
        question: "When adapting arguments for a Framework judge, what should you prioritize?",
        options: [
          { id: "a", text: "Establishing and defending your evaluative framework" },
          { id: "b", text: "Having the most pieces of evidence" },
          { id: "c", text: "Discussing real-world implementation details" },
          { id: "d", text: "Using complex technical arguments" }
        ],
        correctAnswer: "a",
        explanation: "Framework judges believe the framework determines the debate. Prioritize establishing your evaluative lens and showing why your framework better explains the debate.",
      },
      {
        type: "content",
        title: "Adapting Speaking Style and Delivery",
        content: "Your delivery can be adjusted to appeal more effectively to different judges:\n\n**For Policymaker Judges:**\n• Speak clearly about practical implications\n• Use concrete language and examples\n• Maintain a professional, business-like tone\n• Show you understand real-world constraints\n• Be direct—no flowery language\n\n**For Framework Judges:**\n• Show philosophical sophistication\n• Take time explaining your framework carefully\n• Use precise, nuanced language\n• Demonstrate logical rigor\n• Engage intellectually with opponent philosophy\n\n**For Evidence Judges:**\n• Cite specific sources and authors\n• Offer to show evidence cards\n• Discuss evidence quality explicitly\n• Acknowledge source limitations\n• Compare evidence carefully\n\n**For Technical Judges:**\n• Use clear signposting and numbering\n• State impact weighing explicitly\n• Say 'this answers their [argument]'\n• Organize thoughts with visible structure\n• Frontload comparisons and analysis\n\n**For Holistic Judges:**\n• Tell your story coherently\n• Use analogies and vivid examples\n• Emphasize the narrative arc\n• Show confidence and conviction\n• Keep main ideas simple and clear\n\n**Delivery Elements You Can Adjust:**\n• **Pace**: Faster for technical judges, moderate for others\n• **Language**: Formal for framework/evidence judges, accessible for holistic\n• **Organization**: Explicit numbering for technical judges, flowing narrative for holistic\n• **Examples**: Concrete/real-world for policymakers, philosophical for framework judges\n• **Evidence presentation**: Cards ready for evidence judges, cited verbally for others",
        keyPoints: [
          "Adjust pace, language, and organization by judge type",
          "Policymakers: clear, practical, professional",
          "Framework judges: philosophical, precise, rigorous",
          "Evidence judges: sources, citations, quality discussion",
          "Technical judges: numbered, explicit weighing",
          "Holistic judges: narrative, confident, clear",
        ],
      },
      {
        type: "content",
        title: "Case Construction for Flexibility",
        content: "Expert debaters build cases that can be adapted without fundamental restructuring:\n\n**Flexible Case Design:**\n\n**Core Arguments**: Keep 2-3 main arguments that work against any judge. These are your bedrock.\n\n**Adaptable Extensions**: Build multiple extensions of core arguments:\n• For policymakers: emphasize mechanism and real-world impact\n• For framework judges: emphasize philosophical grounding\n• For evidence judges: emphasize evidence quality\n• For technical judges: emphasize comparison and weighing\n• For holistic judges: emphasize narrative cohesion\n\n**Optional Arguments**: Have some arguments ready that are 'nice to have' but not essential:\n• Technical framework arguments (good for some judges, not others)\n• Philosophical arguments (good for framework judges, optional otherwise)\n• Data-heavy arguments (good for evidence judges, optional otherwise)\n\n**The Development Process:**\nWhen developing cases, include:\n• Multiple types of evidence (academic, real-world, statistical, testimonial)\n• Both philosophical and practical justifications\n• Clear mechanisms and real-world examples\n• Explicit weighing and comparison frameworks\n• Coherent narrative that ties arguments together\n\n**Speaking Strategy:**\nDuring the round:\n1. Always present your core arguments\n2. Adjust extensions and emphasis based on judge type\n3. Be prepared to emphasize different aspects in rebuttal\n4. Respond to opponent arguments in ways that align with judge priorities",
        keyPoints: [
          "Build flexible cases with core and adaptable arguments",
          "Develop multiple types of evidence and justification",
          "Have optional arguments for specific judge types",
        ],
      },
      {
        type: "question",
        id: "l31-02-q2",
        question: "What is the best approach to adapting your case for different judges?",
        options: [
          { id: "a", text: "Build flexible cases with core arguments and adaptable extensions" },
          { id: "b", text: "Completely change your arguments for each judge type" },
          { id: "c", text: "Never adapt—use the exact same case for all judges" },
          { id: "d", text: "Use only the simplest possible arguments" }
        ],
        correctAnswer: "a",
        explanation: "Expert debaters build cases with solid core arguments that work against any judge, with multiple extensions and support types that can be emphasized differently based on judge type.",
      },
      {
        type: "content",
        title: "Reading Judge Cues During the Round",
        content: "Sometimes you don't have pre-round research. How do you adapt in-round?\n\n**What Judges Reveal Through Questions:**\nThe questions a judge asks tell you everything about their priorities:\n\n**Framework Questions:**\n'How do you weigh...?' 'What's your internal link to...?' 'Why should we care about...?'\n→ This judge cares about framework and explicit weighing (Technical/Framework judge)\n\n**Evidence Questions:**\n'Where's that from?' 'Who published that?' 'Can I see that card?'\n→ This judge cares about source quality (Evidence judge)\n\n**Mechanism Questions:**\n'How does that actually work?' 'Would that be feasible?' 'What's the implementation process?'\n→ This judge cares about real-world solvency (Policymaker judge)\n\n**Narrative Questions:**\n'So what's the main story here?' 'Why should I vote for you?' 'What wins the debate?'\n→ This judge wants clear narrative and main impact (Holistic judge)\n\n**Adapting Based on Questions:**\nIf the judge asks:\n• Framework questions → Emphasize framework clash and explicit weighing in your next speech\n• Evidence questions → Cite more carefully, offer evidence cards, discuss source quality\n• Mechanism questions → Focus on how things actually work, real-world examples\n• Narrative questions → Crystallize around your main story, clarify your path to victory\n\n**Body Language Cues:**\n• Intense note-taking → Technical judge (tracking every argument)\n• Asks follow-up questions → Sophisticated judge (engaged with complexity)\n• Looks confused → You're being unclear (simplify)\n• Nods during your arguments → You're on the right track\n\n**Using Cues Strategically:**\nDon't overreact to single questions. Look for patterns across multiple questions. If a judge asks 3 mechanism questions, that's a strong signal. One question might be just clarification.",
        keyPoints: [
          "Judge questions reveal their priorities",
          "Adapt your next speech based on the questions asked",
          "Look for patterns, not single questions",
          "Body language provides additional information",
        ],
      },
      {
        type: "content",
        title: "Common Pitfalls in Judge Adaptation",
        content: "Even experienced debaters make mistakes in adapting to judges. Avoid these:\n\n**Pitfall 1: Over-Adaptation**\nChanging your entire approach based on one question or piece of information.\n\n**Solution**: Make adjustments at the margins. Your core strategy should remain stable.\n\n**Pitfall 2: Contradicting Your Framework**\nAdapting arguments in ways that contradict your own established framework.\n\n**Solution**: Any adaptation should strengthen, not undermine, your core case.\n\n**Pitfall 3: Ignoring Your Strengths**\nTrying to emphasize arguments that don't play to your team's strengths just because they suit the judge.\n\n**Solution**: Adapt how you present your strongest arguments, not which arguments you present.\n\n**Pitfall 4: Neglecting Preparation**\nAssuming you can adapt on the fly without proper case preparation.\n\n**Solution**: Prepare thoroughly so you're flexible. Flexibility comes from knowing your material deeply.\n\n**Pitfall 5: Assuming All Judges of One Type Are Identical**\nThinking 'if they're a framework judge, they must want X.'\n\n**Solution**: Every judge is unique. Use judge type as a starting hypothesis, not a final answer.\n\n**Pitfall 6: Abandoning Dropped Arguments**\nFocusing so much on adaptation that you forget to press your advantages.\n\n**Solution**: Adaptation is about emphasis, not abandonment. Keep pressure on your winning arguments.",
        keyPoints: [
          "Adapt at the margins, not fundamentally",
          "Avoid contradicting your own framework",
          "Play to your strengths while adjusting emphasis",
          "Avoid assuming all judges of one type are identical",
        ],
      },
      {
        type: "question",
        id: "l31-02-q3",
        question: "What is a common pitfall when adapting to judges?",
        options: [
          { id: "a", text: "Completely changing your case strategy after one question" },
          { id: "b", text: "Researching judge paradigms before the round" },
          { id: "c", text: "Making small adjustments to your speaking style" },
          { id: "d", text: "Emphasizing different aspects of your strongest arguments" }
        ],
        correctAnswer: "a",
        explanation: "Over-adaptation—changing your entire approach based on limited information—is a common mistake. Adaptation should be marginal adjustments while maintaining your core strategy.",
      },
      {
        type: "content",
        title: "Conclusion: Becoming an Adaptable Debater",
        content: "Judge adaptation is both an art and a science. The expert debaters who win consistently are those who:\n\n1. **Research thoroughly** before the round\n2. **Understand judge paradigms** and what each type values\n3. **Build flexible cases** with core arguments and multiple extensions\n4. **Adjust emphasis** without abandoning strengths\n5. **Read in-round cues** to refine their understanding\n6. **Maintain consistency** in their framework and approach\n7. **Avoid over-adaptation** while staying responsive\n\n**Key Principles:**\n\n**Principle 1: Know Your Judge**\nResearch and in-round observation tell you who you're speaking to.\n\n**Principle 2: Know Your Case**\nThe better you know your own arguments, the more flexibly you can present them.\n\n**Principle 3: Adapt Emphasis, Not Arguments**\nPresent your strongest arguments in ways that appeal to your judge's values.\n\n**Principle 4: Maintain Your Integrity**\nNever adapt in ways that contradict your case or framework.\n\n**Principle 5: Stay Confident**\nAdaptation from fear of losing is worse than consistency. Adapt from strategy, not panic.\n\n**Looking Ahead:**\nIn the next lesson, we'll explore advanced strategies for specific judge types and how to handle judge conflicts or unusual paradigms.\n\nRemember: The most adaptable debaters are those who know themselves deeply and their opponents' positions even more deeply. Flexibility comes from knowledge, not from improvisation.",
        keyPoints: [
          "Research judges and understand their paradigms",
          "Build flexible cases with core and adaptable arguments",
          "Read in-round cues to refine your understanding",
          "Adapt emphasis while maintaining case integrity",
        ],
      },
    ],
  },
  {
    lessonId: "l31-03",
    pages: [
      {
        type: "content",
        title: "Introduction: Kritik-Friendly Judges",
        content: "Some judges love 'critique' arguments—philosophical challenges to the basic assumptions underlying a debate. These judges believe debate shouldn't just be about 'winning' the policy question, but questioning the framework itself.\n\nKritik-friendly judges are often found in college/advanced circuits and care about sophisticated philosophical argumentation. In this lesson, you'll learn how to identify these judges and how to debate effectively before them.",
      },
      {
        type: "content",
        title: "What Makes a Judge Kritik-Friendly?",
        content: "Kritik-friendly judges believe that challenging the fundamental assumptions of debate is not only allowed but valuable.\n\n**Their Philosophy:**\n• Debate should question assumptions, not just argue facts\n• How we frame issues matters as much as what we argue\n• Discourse itself is part of what we're debating\n• Alternative frameworks to the 'policy maker' approach are valid\n\n**Judge Signals:**\n• Ask questions about 'framework' and 'worldview'\n• Seem interested in theoretical arguments\n• Have written extensive paradigm statements\n• Reference philosophers or critical theory\n• Value 'impact framing' and philosophical arguments\n\n**Types of Kritiks They Enjoy:**\n• Philosophical kritiks (challenging the value system)\n• Methodological kritiks (challenging how arguments are made)\n• Discourse kritiks (about language and power)\n• Performative critiques (about what debate does)\n\n**How They Vote:**\nIf a team wins a kritik, these judges see it as a threshold argument—it can eliminate the entire opposing case framework, not just one argument.",
        keyPoints: [
          "Kritik-friendly judges value philosophical challenges",
          "They question assumptions and frameworks",
          "They see kritiking as a valid debate strategy",
        ],
      },
      {
        type: "content",
        title: "Debating Before Kritik-Friendly Judges",
        content: "If you're debating before a kritik-friendly judge, adjust your strategy:\n\n**Strengthen Your Philosophical Foundation:**\n• Explain WHY your approach is valid\n• Defend your assumptions explicitly\n• Show why your framework matters\n• Anticipate philosophical objections\n\n**If You Run Kritiks:**\n• Make sure they're substantive, not just clever\n• Explain the impact clearly\n• Show how your alternative is better\n• Defend against the standard retort\n\n**If You Defend Against Kritiks:**\n• Don't just dismiss them—engage philosophically\n• Explain why your approach is defensible\n• Show the kritik's limitations\n• Offer your own philosophical framework\n\n**Avoid:**\n• Pure policy arguments without philosophical grounding\n• Dismissing kritiks as illegitimate\n• Being caught unprepared for philosophical challenges\n• Ignoring the judge's interests in this area",
        keyPoints: [
          "Strengthen philosophical foundations before kritik judges",
          "Engage with kritiks substantively, not dismissively",
          "Explain why your framework is defensible",
        ],
      },
      {
        type: "question",
        id: "l31-03-q1",
        question: "What do Kritik-friendly judges primarily value?",
        options: [
          { id: "a", text: "The amount of evidence presented" },
          { id: "b", text: "Philosophical challenges to debate assumptions" },
          { id: "c", text: "How quickly debaters can speak" },
          { id: "d", text: "Real-world policy implementation details" }
        ],
        correctAnswer: "b",
        explanation: "Kritik-friendly judges value philosophical arguments that challenge the basic assumptions underlying debate. They believe questioning frameworks is an important part of debate.",
      },
      {
        type: "content",
        title: "Theory Arguments vs Kritiks",
        content: "Before kritik-friendly judges, it helps to distinguish 'theory' from 'kritiks':\n\n**Theory Arguments:**\n• 'Your process is unfair to my right to debate'\n• 'Your argument violates debate norms'\n• 'Your case construction is illegitimate'\n• Usually about procedural fairness\n\n**Kritik Arguments:**\n• 'The framework you assume is philosophically flawed'\n• 'Your approach to this issue is fundamentally wrong'\n• 'The language you use reproduces harmful systems'\n• Usually about substantive philosophy\n\n**How Kritik-Friendly Judges Treat Them:**\nThey typically see kritiks as valid debate arguments but theory as just procedural. Kritiks are 'on top' and can answer theory in their favor.\n\n**Strategic Implication:**\nIf debating a kritik-friendly judge, be careful distinguishing your theory arguments (procedural) from their kritiks (substantive). Don't expect a judge who loves kritiks to be sympathetic to pure 'bad practice' theory arguments.",
        keyPoints: [
          "Theory: procedural/fairness arguments",
          "Kritiks: substantive philosophical challenges",
          "Kritik judges prioritize kritiks over theory",
        ],
      },
      {
        type: "content",
        title: "Communicating Effectively with Kritik-Friendly Judges",
        content: "These judges often appreciate sophisticated, nuanced discourse:\n\n**What Works:**\n• Engaging with philosophical complexity\n• Showing familiarity with critical theory\n• Explaining the implications of your position\n• Demonstrating intellectual humility\n• Taking opponent arguments seriously\n\n**What Doesn't:**\n• Oversimplifying complex issues\n• Dismissing opponent philosophy\n• Hiding from difficult questions\n• Being arrogant about your assumptions\n• Avoiding hard philosophical issues\n\n**Speaking Style:**\n• Use precise language\n• Define terms carefully\n• Show your thinking process\n• Acknowledge where you're unsure\n• Engage respectfully with different perspectives\n\n**In Cross-Examination:**\n• Ask questions that reveal assumptions\n• Challenge their framework philosophically\n• Get them to explain their worldview\n• Point out inconsistencies in their philosophy",
        keyPoints: [
          "Engage with philosophical complexity",
          "Take opponent arguments seriously",
          "Use precise, careful language",
          "Ask questions that reveal assumptions",
        ],
      },
      {
        type: "question",
        id: "l31-03-q2",
        question: "How do Kritik-friendly judges typically rank kritiks compared to theory arguments?",
        options: [
          { id: "a", text: "Theory arguments are more important" },
          { id: "b", text: "They are equally important" },
          { id: "c", text: "Kritiks are seen as more substantive and important" },
          { id: "d", text: "Judges always prefer neither" }
        ],
        correctAnswer: "c",
        explanation: "Kritik-friendly judges typically see kritiks as substantive philosophical arguments that are more important than procedural theory arguments. Kritiks can trump theory in their evaluation.",
      },
      {
        type: "content",
        title: "Building Kritik Responses",
        content: "If you're debating against a kritik-friendly judge and facing a kritik, here's how to respond:\n\n**Step 1: Understand the Kritik Completely**\n• What's the fundamental claim?\n• What's the impact?\n• What alternative are they proposing?\n\n**Step 2: Engage Philosophically**\n• Show why their critique is limited\n• Defend the value of your approach\n• Explain why their alternative is problematic\n\n**Step 3: Show Practical Problems**\n• Even if their philosophy is interesting, does it work?\n• What would implementation look like?\n• Does it actually solve the problem better?\n\n**Step 4: Weigh Against Your Case**\n• Even if the kritik has merit, why does your case still matter?\n• Show you can address both the kritik and your substantive case\n\n**Example Response:**\n'While they raise interesting questions about our framework's assumptions, these questions don't actually challenge the core problem we identify. Even accepting their philosophical critique, our approach remains the most practical solution to the real harms at stake.'",
        keyPoints: [
          "Understand kritiks fully before responding",
          "Engage philosophically, not dismissively",
          "Show both philosophical and practical problems",
          "Weigh kritik against your substantive case",
        ],
      },
      {
        type: "content",
        title: "Review: Debating Before Kritik-Friendly Judges",
        content: "Summary of key strategies:\n\n**Before the Round:**\n• Research if judge is kritik-friendly\n• Prepare philosophical defenses of your approach\n• Have argument responses to likely kritiks\n\n**During Your Speeches:**\n• State your assumptions explicitly\n• Defend your framework philosophically\n• Engage with kritik arguments substantively\n• Show both theory AND practice\n\n**In Cross-Examination:**\n• Ask questions that expose assumptions\n• Test the coherence of opponent philosophy\n• Challenge without dismissing\n\n**In Rebuttal:**\n• Engage the philosophical level\n• Show practical advantages of your approach\n• Weigh your case against their kritik\n• Remain open to good philosophical points\n\n**Remember:**\nKritik-friendly judges aren't trying to be difficult—they genuinely believe questioning assumptions makes debate better. Respect that perspective even if you disagree.",
        keyPoints: [
          "Research judge preferences and prepare accordingly",
          "Defend your approach philosophically",
          "Engage kritiks substantively, not dismissively",
          "Show both theoretical and practical superiority",
        ],
      },
    ],
  },
  {
    lessonId: "l31-04",
    pages: [
      {
        type: "content",
        title: "Introduction: Theory-Friendly Judges",
        content: "Some judges care deeply about the procedural rules and norms of debate itself. Theory arguments—claims about whether debate practices are fair—matter greatly to these judges.\n\nTheory judges might vote against you if they believe your debate practices violate fundamental fairness principles, even if you're winning substantively. In this lesson, you'll learn to debate before judges who prioritize debate theory.",
      },
      {
        type: "content",
        title: "What Are Theory Arguments?",
        content: "Theory arguments claim that an opponent's practice or argument strategy violates debate norms. Examples:\n\n**Common Theory Arguments:**\n• 'They double-crossed by running contradictory positions'\n• 'Their argument framework violates debate standards'\n• 'They're being unfair by extending bad arguments'\n• 'They're spreading excessively, preventing clash'\n• 'They're using research practices we should prohibit'\n\n**Parts of a Theory Argument:**\n1. **The Violation**: What norm did they violate?\n2. **The Standard**: Why is this norm important?\n3. **The Impact**: What's the consequence of this violation?\n4. **The Remedy**: What should happen (usually an auto-loss or concession)\n\n**Theory-Friendly Judge Characteristics:**\n• Include 'voting issues' in paradigm about fairness\n• Have strong opinions on debate norms\n• Reference specific debate rules\n• Seem frustrated by certain debate practices\n• Have written extensively about debate theory",
        keyPoints: [
          "Theory arguments claim debate norm violations",
          "Include violation, standard, impact, and remedy",
          "Theory judges care about debate fairness",
        ],
      },
      {
        type: "content",
        title: "Debating Theory Arguments",
        content: "Before a theory-friendly judge:\n\n**If You're Accused of Violating Theory:**\n1. Take it seriously—these judges care\n2. Defend your practice's legitimacy\n3. Explain why it's not actually unfair\n4. Show standard applications across debate\n\n**If You're Running Theory Against Them:**\n1. Make your standard very clear\n2. Explain why the violation matters\n3. Compare to debate norms explicitly\n4. Ask for clear remedies (concession or loss)\n\n**What Theory Judges Respect:**\n• Knowledge of debate rules and norms\n• Consistency in applying standards\n• Clear reasoning about fairness\n• Respect for debate as an activity\n\n**What They Dislike:**\n• Bad faith theory arguments\n• Frivolous procedural complaints\n• Ignoring legitimate debate practices\n• Being disrespectful during the debate",
        keyPoints: [
          "Take theory arguments seriously with these judges",
          "Know debate norms and rules thoroughly",
          "Apply standards consistently",
          "Be respectful about debate practices",
        ],
      },
      {
        type: "question",
        id: "l31-04-q1",
        question: "What is a theory argument in debate?",
        options: [
          { id: "a", text: "A scientific hypothesis being debated" },
          { id: "b", text: "An argument about debate practices and fairness" },
          { id: "c", text: "A philosophical framework for evaluation" },
          { id: "d", text: "An argument requiring advanced theory knowledge" }
        ],
        correctAnswer: "b",
        explanation: "Theory arguments claim that an opponent's debate practice violates fairness norms. They're about the rules and norms of debate itself, not the substantive topic.",
      },
      {
        type: "content",
        title: "Common Theory Violations to Avoid",
        content: "To avoid theory problems before judges who care:\n\n**Contradictions:**\n• Don't run contradictory positions in the same case\n• If you must change positions, explain why explicitly\n\n**Bad Practices:**\n• Don't spread excessively if it prevents clash\n• Don't hide arguments in unclear cards\n• Don't make incoherent cases that prevent fair response\n\n**Research Ethics:**\n• Always cite sources correctly\n• Don't use fabricated evidence\n• Acknowledge when you don't have cards\n\n**Fairness in Competition:**\n• Allow reasonable cross-examination time\n• Respond to substantive arguments\n• Don't use procedural tricks instead of argumentation\n\n**Being Prepared:**\n• Have clear case organization\n• Make arguments findable\n• Allow opponents to engage with your actual position\n\n**Why This Matters:**\nTheory judges believe the debate activity itself teaches about fairness and norms. Violating those norms undermines the educational value of debate.",
        keyPoints: [
          "Avoid contradictions and unclear organization",
          "Don't spread excessively or hide arguments",
          "Always cite sources and cite correctly",
          "Allow fair clash and reasonable engagement",
        ],
      },
      {
        type: "content",
        title: "Reading Judge Theory Opinions",
        content: "Many theory-focused judges have written opinions or paradigm statements:\n\n**What to Look For:**\n• Their views on specific theory arguments\n• Which debate norms they prioritize\n• How they handle 'competing impacts'\n• Whether they're sympathetic to certain argument types\n\n**Red Flags in Their Writing:**\n• 'I auto-vote on spreading' → Keep pace reasonable\n• 'Contradictions are auto-losses' → Ensure consistency\n• 'I'm a strict textual reader' → Be precise with language\n• 'I hate X argument' → Avoid it if possible\n\n**Green Flags in Their Writing:**\n• 'I'll vote on good arguments regardless of type' → They're flexible\n• 'Theory is about education' → Explain why your practice helps learning\n• 'I reward good debate practice' → Demonstrate proper procedure\n• 'I'll vote on substance over procedure' → Don't overemphasize theory\n\n**Using This Information:**\nBefore the round, brief your partner: 'This judge cares about [specific norm]. Let's make sure we [practice that norm].'",
        keyPoints: [
          "Research judge theory preferences in paradigms",
          "Look for red flags about specific practices",
          "Identify which norms this judge prioritizes",
        ],
      },
      {
        type: "content",
        title: "Counterarguing Theory",
        content: "When opponent theory arguments are too aggressive or unfair:\n\n**Defense Strategies:**\n\n**Bad Framing:**\nIf they claim your legitimate practice is unfair, show:\n• Other good debaters do it\n• It's allowed under debate rules\n• It doesn't actually prevent fair clash\n\n**Disproportionate Impact:**\nIf the impact seems small:\n• Show why this specific violation isn't as serious\n• Explain what 'real' theory violations look like\n• Compare to actual debate problems\n\n**Competing Standards:**\nShow why their theory conflicts with others:\n• 'Their standard would prohibit common debate practice'\n• 'By their logic, we could never run certain arguments'\n• 'This creates unreasonable burden'\n\n**Voter Manipulation:**\nIf they're using theory as a time-consuming distraction:\n• Point out the bad faith argument\n• Explain this discourages debate participation\n• Show the theory itself violates theory norms\n\n**When to Concede Theory:**\nIf the violation is clear and serious, sometimes conceding and moving on is better than wasting time defending.\n'You're right, that was unclear. We concede that point and will correct it going forward.'\n\nTheory-friendly judges respect intellectual honesty.",
        keyPoints: [
          "Defend legitimate practices by showing they're standard",
          "Show when theory impacts are disproportionate",
          "Point out when theory itself violates norms",
          "Sometimes conceding shows maturity",
        ],
      },
      {
        type: "question",
        id: "l31-04-q2",
        question: "How should you defend against a theory argument claiming your practice is unfair?",
        options: [
          { id: "a", text: "Ignore it and focus on substantive arguments" },
          { id: "b", text: "Show your practice is standard and allowed under debate rules" },
          { id: "c", text: "Attack the opponent personally" },
          { id: "d", text: "Admit you're wrong and change everything" }
        ],
        correctAnswer: "b",
        explanation: "Defend theory by showing your practice is standard in debate, allowed by the rules, and doesn't prevent fair clash—demonstrating it's a legitimate debate practice.",
      },
      {
        type: "content",
        title: "Review: Debating Theory-Focused Judges",
        content: "Key takeaways for theory-friendly judges:\n\n**Before the Round:**\n• Research judge's specific theory preferences\n• Plan a clean, organized case structure\n• Ensure consistency in your positions\n• Avoid practices flagged by this judge\n\n**During the Debate:**\n• Organize clearly to enable fair clash\n• Be consistent in your positions\n• Follow good debate practices\n• Take theory arguments seriously\n\n**When Accused of Theory Violations:**\n• Defend the practice's legitimacy\n• Show it's standard and fair\n• Explain why it doesn't prevent clash\n• Or concede gracefully if the violation is clear\n\n**When You Run Theory:**\n• Make clear what norm was violated\n• Explain why it matters educationally\n• Ask for reasonable remedy\n• Avoid frivolous arguments\n\n**Philosophy:**\nTheory judges believe debate itself should teach about fairness, norms, and ethical competition. Respect that mission.",
        keyPoints: [
          "Research judge theory preferences thoroughly",
          "Keep cases organized and consistent",
          "Take theory arguments seriously",
          "Respect the educational mission of debate norms",
        ],
      },
    ],
  },
  {
    lessonId: "l31-05",
    pages: [
      {
        type: "content",
        title: "Introduction: Performance-Friendly and Non-Traditional Judges",
        content: "Some judges believe debate should expand beyond traditional policy/evidence frameworks. Performance judges value creative expression, narrative, personal stories, and non-traditional formats. In this lesson, you'll learn how to debate before judges who embrace these alternative approaches.",
      },
      {
        type: "content",
        title: "Understanding Performance Debate",
        content: "Performance judges believe:\n• Personal narrative is valid evidence\n• Creative expression strengthens arguments\n• Art, poetry, and story can convey meaning\n• Traditional debate is limiting\n• Emotional impact matters alongside logic\n\n**Types of Performance Arguments:**\n• Personal narrative: 'My family's experience proves...'\n• Poetic performance: Using spoken word to convey argument\n• Theatrical elements: Acting out a scenario\n• Creative evidence: Music, art, video as evidence\n\n**Judge Signals:**\n• Their paradigm discusses 'alternative approaches'\n• They reference performance or narrative examples\n• They seem interested in personal stories\n• They're dismissive of purely technical debate\n• They discuss 'affective' impact (emotional effect)",
        keyPoints: [
          "Performance judges value narrative and creativity",
          "Personal stories and artistic expression are legitimate",
          "Emotional impact and meaning matter",
        ],
      },
      {
        type: "content",
        title: "Debating Before Performance Judges",
        content: "**If Running Performance Arguments:**\n• Make sure narrative actually makes an argument\n• Connect personal story to larger claim\n• Explain how performance strengthens the message\n• Balance creativity with clarity\n• Have traditional backup if needed\n\n**If Defending Against Performance:**\n• Don't dismiss it as 'not real debate'\n• Engage with the actual argument being made\n• Show limitations (if any) to this approach\n• Use your own narrative/creative elements\n• Can still run policy/evidence arguments\n\n**Speaking Style:**\n• Use vocal inflection and emotion\n• Allow personal conviction to show\n• Can be more conversational\n• Storytelling is valued\n• But still need clear argumentation\n\n**Cross-Examination:**\n• Ask about the specific claim being made\n• Test whether narrative supports the claim\n• Don't attack the storytelling itself\n• Get clarification on arguments if unclear",
        keyPoints: [
          "Performance should strengthen arguments, not replace them",
          "Connect narrative to claims clearly",
          "Use vocal emotion and conviction",
          "Still maintain logical argumentation",
        ],
      },
      {
        type: "question",
        id: "l31-05-q1",
        question: "What do Performance judges value that traditional judges might not?",
        options: [
          { id: "a", text: "The number of evidence cards presented" },
          { id: "b", text: "Personal narrative, creativity, and emotional impact" },
          { id: "c", text: "Fast speaking and technical precision" },
          { id: "d", text: "Only policy-based arguments" }
        ],
        correctAnswer: "b",
        explanation: "Performance judges value personal narratives, creative expression, and emotional/affective impact alongside or sometimes more than traditional technical arguments.",
      },
      {
        type: "content",
        title: "The Spectrum of Judge Openness",
        content: "Judges vary in how open they are to performance/alternative approaches:\n\n**Very Open:**\n• Welcome performance arguments\n• May prefer them to traditional argumentation\n• Tired of 'boring' debate\n• Want to see student voice and creativity\n\n**Moderately Open:**\n• Accept performance if it's well-argued\n• Want performance + traditional arguments\n• Need clear connection between narrative and claim\n• Still expect logical structure\n\n**Skeptical:**\n• Tolerate performance but don't prefer it\n• Worry it distracts from substance\n• Want to see 'real' evidence too\n• Will vote on traditional arguments over performance\n\n**Closed:**\n• Don't see performance as legitimate debate\n• Will vote against it automatically\n• See debate as pure argumentation/evidence\n• May explicitly say this in paradigm\n\n**Strategy:**\nResearch to find where this judge falls. If very open, you can be creative. If skeptical/closed, use performance as supplement only.",
        keyPoints: [
          "Judges vary greatly in openness to performance",
          "Some welcome it, others tolerate it, some reject it",
          "Research judge paradigms to understand their openness",
        ],
      },
      {
        type: "content",
        title: "Balancing Performance and Traditional Argument",
        content: "The smartest approach before ANY judge is balance:\n\n**The Balanced Approach:**\n1. **Core Arguments**: Traditional policy/evidence arguments that work before any judge\n2. **Enhanced Presentation**: Deliver these with personal conviction and narrative\n3. **Optional Performance**: Include creative elements if the judge seems open\n\n**Example:**\n'The policy impacts jobs [evidence] because [mechanism]. For my family and thousands like us, this means [personal narrative]. That's why this matters [emotional conclusion]. Our case outweighs because [traditional weighing]'\n\n**Benefits:**\n• Works before any judge\n• Shows your full identity as a debater\n• Connects argument to reality\n• More persuasive overall\n\n**Risks of Pure Performance:**\n• Might confuse judges expecting traditional argument\n• Harder to prove claim without evidence\n• Can seem like avoiding substantive argumentation\n• May not work before traditional judges\n\n**Risks of Pure Traditional:**\n• Boring for performance judges\n• Misses emotional resonance\n• Doesn't let student voice come through\n• Might lose creative judges\n\n**Best Practice:**\nAlways have substance. Performance enhances it, doesn't replace it.",
        keyPoints: [
          "Balance traditional and performance approaches",
          "Keep core arguments traditional and strong",
          "Add narrative and creativity as enhancement",
          "Works before any judge type",
        ],
      },
      {
        type: "question",
        id: "l31-05-q2",
        question: "What is the safest approach when you're unsure about a judge's openness to performance?",
        options: [
          { id: "a", text: "Use only performance arguments" },
          { id: "b", text: "Avoid any creative elements" },
          { id: "c", text: "Balance strong traditional arguments with some narrative/creative elements" },
          { id: "d", text: "Ask the judge before the round" }
        ],
        correctAnswer: "c",
        explanation: "Balancing strong traditional arguments with narrative and creative elements works before any judge—traditional judges accept it, and performance judges appreciate it.",
      },
      {
        type: "content",
        title: "Avoiding Common Performance Debate Pitfalls",
        content: "Mistakes to avoid:\n\n**Pitfall 1: Performance Without Argument**\nTelling a story that doesn't actually make a claim.\n\n**Solution**: Always connect narrative to a specific argumentative point.\n\n**Pitfall 2: Unclear Logic**\nGetting so caught up in delivery that the argument becomes unclear.\n\n**Solution**: Maintain logical clarity alongside emotional delivery.\n\n**Pitfall 3: Attacking Opponent's Style Instead of Arguments**\n'That was too traditional/boring' isn't a debate argument.\n\n**Solution**: Engage with what they actually argued, not how they said it.\n\n**Pitfall 4: Assuming All Judges Want Performance**\nSome judges really don't like it.\n\n**Solution**: Research paradigms. Have traditional backup arguments.\n\n**Pitfall 5: Sacrificing Quality for Creativity**\nMaking arguments worse because they're presented creatively.\n\n**Solution**: Creativity should enhance strong arguments, not replace them.",
        keyPoints: [
          "Performance must include actual argumentation",
          "Maintain logical clarity",
          "Don't assume all judges want performance",
          "Quality matters more than creativity",
        ],
      },
      {
        type: "content",
        title: "Review: Judge Paradigms and Specialized Judges",
        content: "In this unit, you've learned about five major judge types:\n\n**1. Policymaker Judges**: Focus on real-world workability\n→ Emphasize mechanisms, solvency, implementation\n\n**2. Framework Judges**: Focus on evaluative lens\n→ Establish and defend your framework\n\n**3. Evidence Judges**: Focus on source quality\n→ Bring strong sources and discuss them\n\n**4. Technical Judges**: Focus on argument comparison\n→ Use explicit weighing and dropped argument analysis\n\n**5. Holistic Judges**: Focus on case coherence\n→ Tell a clear, compelling story\n\n**Plus Specialized Judges:**\n- **Kritik-Friendly**: Value philosophical challenges\n- **Theory-Focused**: Care about debate norms\n- **Performance-Friendly**: Welcome creative approaches\n\n**Master Strategy:**\n1. **Research** before the round\n2. **Adapt emphasis** in your strongest arguments\n3. **Read cues** in-round to refine understanding\n4. **Stay consistent** with your framework\n5. **Remain flexible** at the margins\n\n**The Expert Principle:**\nYou don't change who you are. You present your strongest self to whoever you're addressing. Expert debaters understand their judges and meet them where they are.\n\n**Looking Ahead:**\nIn the next lesson, we'll learn practical speed strategies and how to handle judges at different ends of the spreading spectrum.",
        keyPoints: [
          "Five major judge types with distinct priorities",
          "Research judges before rounds",
          "Adapt emphasis while maintaining case integrity",
          "Expert debaters understand their judges",
        ],
      },
    ],
  },
  {
    lessonId: "l31-06",
    pages: [
      {
        type: "content",
        title: "Introduction: Speed and Pace Adaptation",
        content: "Some judges can handle spreading (fast debate speech)—others cannot. Some judges have explicit limits on speed. Some speakers prefer fast debates, others slower. Managing speed and pace is a critical skill for debating different judges.\n\nIn this lesson, you'll learn how to identify judge speed preferences and how to adapt your delivery accordingly while maintaining argument quality.",
      },
      {
        type: "content",
        title: "Judge Speed Paradigms",
        content: "Judges vary widely in their speed tolerance:\n\n**Speed-Tolerant Judges:**\n• Can follow spreading (fast speech)\n• May prefer it—packs more arguments\n• Want efficient time use\n• Can take notes on fast delivery\n• Usually experienced college or advanced judges\n\n****Moderate-Speed Judges:**\n• Can follow normal debate speed\n• May struggle with extreme spreading\n• Prefer clarity over coverage\n• Want quality arguments, not quantity\n• Common at many tournaments\n\n**Conversational-Pace Judges:**\n• Want slower, clearer speech\n• Spreading loses them\n• Prefer fewer, stronger arguments\n• May be newer judges or high school coaches\n• Value persuasiveness over coverage\n\n**Speed Aversion Judges:**\n• Explicitly state speed limits in paradigm\n• May auto-vote against spreading\n• Want one-on-one persuasion\n• Often educational judges\n• Very clear about this preference\n\n**Identifying Judge Speed Preference:**\n• Read their paradigm statement\n• Ask about their experience level\n• Watch how they take notes\n• Listen to what they say during questioning\n• Ask coaches familiar with them",
        keyPoints: [
          "Judges vary greatly in speed tolerance",
          "Some welcome spreading, others need clear pace",
          "Research judge speed preferences before rounds",
        ],
      },
      {
        type: "content",
        title: "Debating at Different Speeds",
        content: "**Before Speed-Tolerant Judges:**\n• You can use spreading if comfortable\n• Coverage matters\n• Multiple arguments per point\n• Fast cross-examination is expected\n• Time is used efficiently\n\n**Before Moderate-Speed Judges:**\n• Speak at normal debate pace\n• Quality over quantity\n• 2-3 strong arguments beat 8 weak ones\n• Clear organization is important\n• Balance coverage and quality\n\n**Before Conversational-Pace Judges:**\n• Speak slowly and clearly\n• Emphasize one strong argument per section\n• Make sure judge can understand\n• Allow extra time for explanation\n• Use simple language\n• Repeat key points\n\n**Before Speed-Aversion Judges:**\n• Speak very slowly\n• Check that judge is understanding\n• Focus on persuasion, not coverage\n• One-on-one style is good\n• Build relationship with judge through style\n• May need to explicitly slow down for clarity\n\n**Practical Adjustments:**\n• Speaking pace (adjust by 15-25% as needed)\n• Argument selection (fewer for conversational judges)\n• Cross-examination (quick vs thorough)\n• Time allocation (more per argument for clarity)",
        keyPoints: [
          "Adjust pace based on judge type",
          "Faster judges: more arguments, efficient use of time",
          "Slower judges: fewer arguments, more explanation",
          "Quality over quantity for conversational judges",
        ],
      },
      {
        type: "question",
        id: "l31-06-q1",
        question: "What should you do before a judge who explicitly opposes spreading?",
        options: [
          { id: "a", text: "Spread anyway—they need to adapt" },
          { id: "b", text: "Speak very slowly and focus on one strong argument per point" },
          { id: "c", text: "Ignore their preference and debate normally" },
          { id: "d", text: "Ask the judge to allow spreading" }
        ],
        correctAnswer: "b",
        explanation: "Before judges who oppose spreading, you should adjust to their preference by speaking slowly, clearly, and focusing on strong individual arguments rather than coverage.",
      },
      {
        type: "content",
        title: "Maintaining Quality at Any Speed",
        content: "The key challenge: how do you maintain argument quality while adapting to judge speed preferences?\n\n**Before Speed-Tolerant Judges:**\n• Don't sacrifice clarity for coverage\n• Spreading allows more, but each argument still needs support\n• Organize clearly (use numbering/signposting)\n• Make sure judge can track arguments\n• Quality + quantity is ideal, not quality OR quantity\n\n**Before Conversational-Pace Judges:**\n• Don't lose substance just because you're slower\n• One strong argument should still have good evidence\n• Explain mechanisms clearly (takes time but pays off)\n• Use the extra time for thorough explanation\n• Quality is even more important at slower pace\n\n**The Principle:**\nSpeed is about how much you say and how fast you say it. Quality is about how well-reasoned and supported your arguments are. Good debaters maintain quality regardless of pace.\n\n**Common Mistakes:**\n• Spreading = making weak arguments—wrong, they should be strong\n• Slow speech = vague arguments—wrong, should be very clear\n• Adapting to judge = sacrificing your case—wrong, adapt delivery, not substance",
        keyPoints: [
          "Speed affects coverage, not argument quality",
          "Maintain strong evidence and reasoning at any pace",
          "More arguments OR clearer explanation—adapt wisely",
        ],
      },
      {
        type: "content",
        title: "Cross-Examination Pace Management",
        content: "Cross-examination (CX) requires special pace management:\n\n**Before Speed-Tolerant Judges:**\n• Questions can be rapid-fire\n• Expect fast back-and-forth\n• Answer concisely\n• Questioner controls pace\n\n**Before Conversational-Pace Judges:**\n• Slow down for questions\n• Answer fully and clearly\n• Speaker can control pace slightly\n• Questions might be fewer but more thorough\n\n**General CX Strategy:**\n• Match the judge's expected pace\n• If unsure, start moderate and adjust\n• Listen carefully—you might mishear fast questions\n• Speak clearly—don't let pace prevent understanding\n• If you need repetition, ask: 'Could you repeat that?'\n\n**During CX:**\n• With speedy judges: Answer briefly, move on\n• With slower judges: Answer fully, allow follow-up\n• Always: Listen, answer honestly, don't dodge\n• Watch judge's comfort level—adjust if needed",
        keyPoints: [
          "Match judge pace in cross-examination",
          "With speedy judges: quick answers and movement",
          "With slower judges: full answers, allow follow-up",
          "Always prioritize clarity and honesty",
        ],
      },
      {
        type: "content",
        title: "The Importance of Judge Comfort",
        content: "Beyond strategy, remember the human element:\n\n**Why Pace Matters to Judges:**\n• Can't make good decisions if they don't understand\n• Speed-averse judges worry about quality of judging\n• Speed-tolerant judges want efficiency\n• Everyone wants to feel competent\n\n**The Judge's Perspective:**\n• If they can't follow, they won't vote well\n• If they're comfortable, they judge better\n• If they feel respected (through pace adjustment), they're happier\n• Good judging requires comfort and confidence\n\n**Respecting Your Judge:**\n• Adapting to their pace is a sign of respect\n• It shows you want them to judge well\n• It's not 'dumbing down'—it's being considerate\n• Expert debaters adjust to their audience\n\n**The Paradox:**\nJudges who are comfortable often make better decisions, even if slower. Pushing speed on uncomfortable judges can backfire.\n\n**Practice What You'll Do:**\nBefore tournaments, practice speaking at multiple speeds. Then in the round, adjust naturally to the judge you're facing.",
        keyPoints: [
          "Judge comfort affects decision quality",
          "Pace adjustment shows respect for your judge",
          "Expert debaters adapt to their audience",
          "Practice multiple speeds before tournaments",
        ],
      },
      {
        type: "question",
        id: "l31-06-q2",
        question: "How does your argument quality relate to your speaking pace?",
        options: [
          { id: "a", text: "Faster speaking allows you to use weaker arguments" },
          { id: "b", text: "Slower speaking requires fewer supporting points" },
          { id: "c", text: "Your argument quality should remain strong at any pace" },
          { id: "d", text: "Quality is less important when adapting to judge preference" }
        ],
        correctAnswer: "c",
        explanation: "Argument quality and speaking pace are independent. You should maintain strong evidence and reasoning whether speaking fast or slow—you're just adjusting coverage and depth of explanation.",
      },
      {
        type: "content",
        title: "Review: Speed and Pace Management",
        content: "Key principles for adapting to different judge speeds:\n\n**Before the Round:**\n• Research judge's speed preferences\n• Prepare arguments appropriate to expected pace\n• Know multiple speaking speeds\n\n**During the Round:**\n• Match judge's comfort level\n• Start moderate if unsure\n• Watch for signs of comprehension\n• Adjust if needed\n\n**In Your Speeches:**\n• Clear signposting helps any judge follow\n• Numbers and organization matter more at high speed\n• Slow speech still needs strong arguments\n• Don't sacrifice quality for coverage or clarity\n\n**In Cross-Examination:**\n• Match pace to judge expectation\n• Listen carefully\n• Answer clearly\n• Adjust if judge seems uncomfortable\n\n**The Expert Approach:**\n1. Know your natural pace\n2. Be able to speak multiple speeds comfortably\n3. Observe judge cues\n4. Adapt respectfully\n5. Maintain argument quality throughout\n\n**Remember:**\nYour goal isn't to impress judges with speed. It's to help them understand and judge well. That requires adapting to their comfort and cognitive style.",
        keyPoints: [
          "Research judge speed preferences before rounds",
          "Prepare arguments appropriate to expected pace",
          "Maintain quality at any speed",
          "Respect judge comfort and cognitive abilities",
        ],
      },
    ],
  },
  {
    lessonId: "l31-07",
    pages: [
      {
        type: "content",
        title: "Unit Review: Understanding and Adapting to Specialized Judges",
        content: "Congratulations on completing Unit 31! You now understand how different judges approach debate and how to adapt your strategy accordingly.\n\nIn this unit, you've learned that expert debating isn't about being the same in every round—it's about understanding your audience and meeting them where they are while maintaining the integrity of your case and arguments.",
      },
      {
        type: "content",
        title: "Judge Types Summary",
        content: "**Core Judge Types:**\n1. **Policymaker Judges**: Real-world workability, mechanisms, implementation\n2. **Framework Judges**: Evaluative lens, philosophical foundations\n3. **Evidence Judges**: Source quality, documentation, evidence comparison\n4. **Technical Judges**: Argument comparison, explicit weighing, dropped arguments\n5. **Holistic Judges**: Case coherence, narrative, big picture\n\n**Specialized Judges:**\n6. **Kritik-Friendly Judges**: Philosophical challenges, assumptions, alternative frameworks\n7. **Theory-Focused Judges**: Debate norms, fairness, procedural arguments\n8. **Performance-Friendly Judges**: Narrative, creativity, emotional impact\n9. **Speed-Tolerant Judges**: Efficient argument coverage, spreading\n10. **Conversational-Pace Judges**: Clear, slower speech, fewer arguments\n\n**Universal Principles:**\n• Research judges before the round\n• Understand their paradigm and values\n• Adapt emphasis while maintaining core case\n• Read in-round cues to refine understanding\n• Respect your judge's needs and comfort",
        keyPoints: [
          "Five core judge types with distinct values",
          "Multiple specialized judge types in advanced debate",
          "Research + adaptation + consistency = success",
        ],
      },
      {
        type: "content",
        title: "Adaptation Strategies Summary",
        content: "**Before the Round:**\n✓ Research judge paradigm statements\n✓ Ask coaches about judges you'll face\n✓ Look for patterns in judge decisions\n✓ Prepare flexible case with multiple extensions\n✓ Plan argument emphasis based on judge type\n\n**During Your Speech:**\n✓ Signal your framework explicitly\n✓ Organize arguments clearly\n✓ Adapt emphasis to judge type\n✓ Support arguments appropriately\n✓ Use evidence presentation that fits judge values\n\n**In Cross-Examination:**\n✓ Ask questions that reveal judge priorities\n✓ Test opponent's framework alignment\n✓ Gather information about their approach\n✓ Prepare rebuttal responses\n\n**In Rebuttal:**\n✓ Address arguments effectively\n✓ Use explicit weighing and comparison\n✓ Emphasize strongest arguments\n✓ Apply to judge's values\n✓ Crystallize clearly\n\n**Throughout:**\n✓ Stay consistent with your case\n✓ Don't abandon core arguments\n✓ Respect your judge\n✓ Focus on clarity\n✓ Maintain argument quality",
        keyPoints: [
          "Systematic approach to judge adaptation",
          "Research → Prepare → Adapt → Execute",
          "Consistency matters more than dramatic changes",
        ],
      },
      {
        type: "content",
        title: "What Makes Expert Debaters Great",
        content: "The debaters who win consistently against multiple judges share these traits:\n\n**1. Deep Case Knowledge**\nThey know their arguments so well they can present them multiple ways.\n\n**2. Flexibility**\nThey're comfortable speaking at different paces and emphasizing different aspects.\n\n**3. Strategic Research**\nThey learn about judges and opponents before rounds.\n\n**4. In-Round Adaptation**\nThey read cues and adjust strategically without panicking.\n\n**5. Philosophical Depth**\nThey can defend their position philosophically, not just empirically.\n\n**6. Respect for Judges**\nThey understand judges are people doing their best and treat them accordingly.\n\n**7. Commitment to Quality**\nThey never sacrifice argument quality for coverage or adaptation.\n\n**8. Intellectual Humility**\nThey're open to good arguments from opponents and don't get defensive.\n\n**9. Clear Communication**\nThey make judges' jobs easy by organizing clearly and explaining thoroughly.\n\n**10. Purpose Beyond Winning**\nThey care about debate as an activity, not just tournament points.",
        keyPoints: [
          "Expert debaters combine knowledge, flexibility, and respect",
          "Quality and clarity matter more than tactics",
          "Understanding judges improves decision quality for everyone",
        ],
      },
      {
        type: "question",
        id: "l31-07-q1",
        question: "What is the most important principle when adapting to different judges?",
        options: [
          { id: "a", text: "Changing your entire case for each judge" },
          { id: "b", text: "Abandoning your strongest arguments" },
          { id: "c", text: "Maintaining case integrity while adapting emphasis" },
          { id: "d", text: "Spreading faster than the judge prefers" }
        ],
        correctAnswer: "c",
        explanation: "The key principle is maintaining your case's core integrity while adapting the emphasis and presentation to fit different judges' values. You don't change who you are—you present your strongest self.",
      },
      {
        type: "content",
        title: "Next Steps: Continuing Your Expert Development",
        content: "Unit 31 has prepared you to understand and adapt to different judges. But expert development continues:\n\n**In Unit 32**, you'll learn about **Evidence and Logic Judges**—how to work with judges who focus specifically on evidence quality and logical reasoning, and how to build cases that excel before these critical judges.\n\n**Future Units** will cover:\n• Advanced judge adaptation in specific formats\n• Handling difficult judge-debater dynamics\n• Theory and strategy at the highest levels\n• International debate judge differences\n• Mastering the technical side of debate\n\n**Your Practice This Week:**\n1. Research your upcoming judges thoroughly\n2. Practice speaking at multiple speeds\n3. Prepare flexible case extensions for different judge types\n4. Watch recorded debates and identify judge paradigms\n5. Ask coaches about judges you're unsure about\n\n**The Bigger Picture:**\nDebate at the expert level is about understanding—understanding your judges, understanding your opponents, understanding the nuances of argumentation. The more you understand, the better you'll compete.\n\nLet's continue to Unit 32!",
        keyPoints: [
          "Unit 31 teaches judge understanding and adaptation",
          "Expert development is ongoing",
          "Quality understanding beats tactical tricks",
          "Research and preparation enable flexibility",
        ],
      },
      {
        type: "question",
        id: "l31-07-q2",
        question: "What trait do consistently winning expert debaters share?",
        options: [
          { id: "a", text: "They always speak the fastest" },
          { id: "b", text: "They know their arguments so well they can present them flexibly" },
          { id: "c", text: "They use the same strategy against every judge" },
          { id: "d", text: "They argue the most controversial positions" }
        ],
        correctAnswer: "b",
        explanation: "Consistently winning debaters know their arguments deeply, allowing them to present them in multiple ways while adapting to different judges.",
      },
      {
        type: "content",
        title: "Final Thoughts: The Art of Judge Adaptation",
        content: "Judge adaptation isn't about manipulation or deception. It's about communication.\n\nWhen you research judges, you're learning how to communicate with them effectively. When you adapt your pace, you're making their job easier. When you adjust emphasis, you're highlighting the aspects of your argument that resonate most with their values.\n\nThis is the same principle as adjusting your communication style with friends vs. teachers vs. professional colleagues. You're still being authentic—you're just presenting the most relevant version of yourself.\n\n**The Ethical Foundation:**\nExpert debaters understand that good judging requires judges to understand arguments. By adapting, you help judges make better decisions. This serves debate as an educational activity.\n\n**The Competitive Advantage:**\nIn competition, adaptation isn't just ethical—it's strategic. Judges who understand your arguments and feel respected by you are more likely to vote for you.\n\n**The Legacy:**\nAs you become an expert debater and eventually a judge or coach yourself, remember this principle: help judges understand, help debaters succeed, improve the activity of debate itself.\n\nThat's the expert approach. Now go forth and compete!\n\n---\n\n**You've completed Unit 31: Specialized Judge Types and Adaptation Strategies!**\n\nYou're on your way to mastering expert-level debate. Continue to Unit 32 to deepen your knowledge even further.",
        keyPoints: [
          "Judge adaptation is about clear communication",
          "Good adaptation helps judges make better decisions",
          "Expert debaters improve the activity itself",
        ],
      },
    ],
  },
];


