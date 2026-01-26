import { MultiPageLesson } from "./types";

export const UNIT_07_LESSONS: MultiPageLesson[] = [
  {
    lessonId: "l07-01",
    pages: [
      {
        type: "content",
        title: "Introduction: Identifying Bias in Sources",
        content: "Every source has a perspective. Every author has a background, beliefs, and potential motivations that shape how they present information. This doesn't mean all sources are equally biased—but it does mean that critical readers need to identify and account for bias.\n\nBias isn't always bad or intentional. An environmental scientist may genuinely care about the planet, leading them to emphasize certain findings. A business newspaper may have readers who want market-friendly perspectives. The key is recognizing how bias might shape what's presented—and what's left out.\n\nIn this lesson, you'll learn to identify different types of bias, understand their sources, and develop strategies for evaluating biased evidence fairly.",
      },
      {
        type: "content",
        title: "Types of Bias",
        content: "Bias takes many forms. Learning to recognize each helps you evaluate sources more critically:\n\n**Funding Bias:**\nResearch funded by interested parties may skew toward desired conclusions.\n'This study on sugar safety was funded by the beverage industry.'\n\n**Selection Bias:**\nChoosing which facts to include or exclude shapes the narrative.\n'The article mentioned the policy's benefits but not its costs.'\n\n**Confirmation Bias:**\nFavoring information that confirms existing beliefs.\n'The author only cited studies that supported their position.'\n\n**Political/Ideological Bias:**\nPerspective shaped by political worldview.\n'This think tank consistently produces research supporting one party's positions.'\n\n**Cultural Bias:**\nAssumptions based on cultural background.\n'The analysis assumes Western democratic values are universal.'\n\n**Survivorship Bias:**\nFocusing on successes while ignoring failures.\n'They profile successful entrepreneurs, not the many who failed with similar strategies.'",
        keyPoints: [
          "Funding bias: following the money",
          "Selection bias: what's included and excluded",
          "Confirmation bias: seeking supporting evidence",
          "Political and cultural bias: worldview shaping perspective",
        ],
      },
      {
        type: "content",
        title: "Detecting Funding Bias",
        content: "Following the money reveals potential conflicts of interest:\n\n**Questions to Ask:**\n• Who funded this research?\n• Does the funder benefit from particular conclusions?\n• Is funding disclosed prominently or hidden?\n• Are there patterns in this funder's supported research?\n\n**Red Flags:**\n• Industry-funded studies on their own products\n• Think tanks funded by interests they analyze\n• Consultants paid by companies they review\n• Advocacy groups funding 'neutral' research\n\n**Historical Examples:**\n• Tobacco companies funded decades of research downplaying smoking risks\n• Sugar industry funded studies blaming fat for health problems\n• Fossil fuel companies funded climate skepticism research\n\n**Important Nuance:**\nFunding doesn't automatically invalidate research. Peer review and replication matter. But funding creates incentives that should trigger closer scrutiny.\n\n**In Debate:**\n'This study was funded by the pharmaceutical company that makes this drug. While that doesn't prove it's wrong, we should note the conflict of interest and look for independent confirmation.'",
        keyPoints: [
          "Check who funded research",
          "Industry funding doesn't invalidate but requires scrutiny",
          "Look for patterns in funder-supported conclusions",
        ],
      },
      {
        type: "question",
        id: "l07-01-q1",
        question: "A study on pesticide safety was funded by a pesticide manufacturer. What's the most accurate conclusion?",
        options: [
          { id: "a", text: "The study is automatically invalid" },
          { id: "b", text: "The study should be scrutinized more carefully, but isn't automatically wrong" },
          { id: "c", text: "Industry funding ensures higher quality research" },
          { id: "d", text: "Funding sources never affect research conclusions" }
        ],
        correctAnswer: "b",
        explanation: "Industry funding creates a potential conflict of interest that warrants extra scrutiny, but doesn't automatically invalidate research. The study could still be accurate—but we should look for independent replication, check if the methodology is sound, and see if conclusions align with non-industry-funded research.",
      },
      {
        type: "content",
        title: "Detecting Selection and Framing Bias",
        content: "What's included—and excluded—shapes the story:\n\n**Selection Bias Signals:**\n• Only positive or negative examples shown\n• Counterexamples ignored or dismissed briefly\n• Data starts or ends at convenient points\n• Only certain demographics or regions covered\n\n**Framing Bias Signals:**\n• Loaded language ('reform' vs 'cuts,' 'investment' vs 'spending')\n• Emphasis on certain aspects over others\n• Headlines that don't match article content\n• Emotional framing of neutral information\n\n**Example:**\nTwo true statements about the same data:\n• 'Crime dropped 5% last year' (positive frame)\n• 'Crime remains 20% above 2019 levels' (negative frame)\nBoth can be accurate; the choice reveals perspective.\n\n**Detection Strategy:**\n• Ask: What might be missing?\n• Seek out opposing perspectives on the same topic\n• Check if data ranges seem cherry-picked\n• Notice emotional vs. neutral language choices\n\n**In Debate:**\nPoint out what's missing: 'Their source shows only benefits, but here's the full picture including costs and tradeoffs...'",
        keyPoints: [
          "Notice what's included AND what's excluded",
          "Watch for loaded language and emotional framing",
          "Same facts can be framed positively or negatively",
        ],
      },
      {
        type: "content",
        title: "Organizational and Ideological Bias",
        content: "Organizations have missions and worldviews that shape their output:\n\n**Think Tanks:**\nMany are explicitly ideological (left or right). Their research tends to support their political orientation. Know the landscape:\n• Progressive: Brookings, Center for American Progress\n• Conservative: Heritage Foundation, American Enterprise Institute\n• Libertarian: Cato Institute, Reason Foundation\n\n**Advocacy Organizations:**\nBy design, they advocate for specific positions. Their research supports their cause.\n\n**News Media:**\nEditorial perspective affects coverage choices, framing, and emphasis—even when individual articles are factually accurate.\n\n**Academic Disciplines:**\nEven academia has norms and perspectives that shape acceptable research questions and conclusions.\n\n**How to Handle:**\n• Know the organization's orientation\n• Seek corroboration from differently-oriented sources\n• Use for factual data; be cautious with conclusions\n• 'Against interest' findings are especially credible\n• Don't dismiss automatically—evaluate substance",
        keyPoints: [
          "Know think tanks' ideological orientations",
          "Advocacy groups support their causes by design",
          "Seek corroboration across perspectives",
        ],
      },
      {
        type: "question",
        id: "l07-01-q2",
        question: "Why is an 'against interest' finding particularly credible?",
        options: [
          { id: "a", text: "Because the organization is admitting something contrary to their usual position" },
          { id: "b", text: "Because against-interest findings are always more accurate" },
          { id: "c", text: "Because it shows the organization doesn't do research" },
          { id: "d", text: "Against-interest findings are not more credible" }
        ],
        correctAnswer: "a",
        explanation: "When a source admits something contrary to their expected bias—like an oil company acknowledging climate change risks or a union admitting a policy would reduce jobs—it carries extra weight because they're saying something against their own interests. They have no motivation to fabricate this admission.",
      },
      {
        type: "content",
        title: "Real-World Bias Detection: Case Studies",
        content: "Let's apply bias detection to real-world scenarios:\n\n**Case Study 1: Health News**\nA headline reads: 'Coffee Linked to Longer Life!'\n• Check: Who funded the study? (Coffee industry?)\n• Check: Is it correlation or causation?\n• Check: What confounding factors exist? (Coffee drinkers might have other healthy habits)\n• Check: What does the article NOT mention?\n\n**Case Study 2: Economic Analysis**\nA think tank reports: 'Tax cuts will pay for themselves through growth.'\n• Check: What's the think tank's ideological orientation?\n• Check: Does their historical research consistently support one party's positions?\n• Check: Do independent economists agree with their methodology?\n\n**Case Study 3: Technology Coverage**\nA tech blog enthusiastically reviews a new product.\n• Check: Does the blog receive advertising revenue from the manufacturer?\n• Check: Did they receive a free review unit?\n• Check: How do they cover the same company's competitors?\n\n**The Pattern:**\nIn each case, we're not dismissing the source—we're understanding its context to evaluate claims appropriately.",
        keyPoints: [
          "Apply bias detection systematically to real sources",
          "Check funding, ideology, and business relationships",
          "Context helps evaluate, not dismiss, sources",
        ],
      },
      {
        type: "content",
        title: "Building a Balanced Information Diet",
        content: "Actively constructing diverse information sources helps counter bias:\n\n**Diversify Your Sources:**\n• Read news from multiple outlets with different perspectives\n• Follow commentators across the political spectrum\n• Include international sources for different cultural viewpoints\n• Balance mainstream and independent sources\n\n**Create Information Friction:**\n• When you read something you agree with, actively seek counterarguments\n• Before sharing, ask: 'What might someone who disagrees say?'\n• Subscribe to at least one source that challenges your views\n\n**Develop Source Literacy:**\n• Learn which sources are most reliable in which areas\n• Understand that bias doesn't equal inaccuracy\n• Build a mental map of sources' orientations\n\n**Practice the 'Steel Man' Approach:**\n• Before criticizing a position, articulate its strongest version\n• Try to understand why reasonable people might hold that view\n• Engage with the best arguments, not the weakest\n\n**In Debate:**\nDebaters who understand multiple perspectives argue more effectively because they've genuinely engaged with opposing views rather than dismissing them.",
        keyPoints: [
          "Actively seek diverse information sources",
          "When you agree with something, seek counterarguments",
          "Understand perspectives before criticizing them",
        ],
      },
      {
        type: "question",
        id: "l07-01-q3",
        question: "A news article about climate policy is written by a journalist who also writes for environmental advocacy publications. How should you evaluate this article?",
        options: [
          { id: "a", text: "Dismiss it entirely as biased propaganda" },
          { id: "b", text: "Accept everything without question since they're an expert" },
          { id: "c", text: "Read it critically, noting potential perspective while evaluating the evidence and arguments presented" },
          { id: "d", text: "Only read if other sources confirm every claim first" }
        ],
        correctAnswer: "c",
        explanation: "The journalist's background suggests a particular perspective on environmental issues, but this doesn't invalidate their work. Read critically: note their potential orientation, evaluate the evidence they present, check if claims are substantiated, and consider seeking alternative perspectives. Bias awareness enhances—rather than replaces—substantive evaluation.",
      },
      {
        type: "content",
        title: "Working With Biased Sources",
        content: "Bias doesn't disqualify sources—but it affects how you use them:\n\n**Strategy 1: Acknowledge and Proceed**\n'This report comes from an industry group, so we should note their perspective. That said, the data they cite from the Bureau of Labor Statistics is independently verifiable...'\n\n**Strategy 2: Triangulate**\nSeek the same conclusion from differently-biased sources. If both a progressive and conservative think tank agree on factual data, it's more credible.\n\n**Strategy 3: Separate Data from Conclusions**\nUse biased sources for raw data; draw your own conclusions or cite independent analysts for interpretation.\n\n**Strategy 4: Highlight Against-Interest**\nWhen a biased source admits something contrary to their orientation, emphasize it: 'Even the industry association acknowledges...'\n\n**Strategy 5: Use Bias Strategically**\nSometimes a source's bias strengthens your point: 'This isn't a liberal criticism—even the conservative Heritage Foundation opposes this policy.'",
        keyPoints: [
          "Acknowledge bias rather than hiding it",
          "Triangulate across different perspectives",
          "Separate raw data from biased conclusions",
        ],
      },
      {
        type: "content",
        title: "Your Own Biases",
        content: "The most important bias to recognize is your own:\n\n**Confirmation Bias in Research:**\nWe naturally seek information that confirms what we already believe. Counter this by:\n• Actively searching for opposing views\n• Steel-manning arguments you disagree with\n• Asking: What would change my mind?\n\n**Motivated Reasoning:**\nWe're better at finding flaws in arguments we dislike than arguments we agree with. Apply equal scrutiny to all evidence.\n\n**Blind Spots:**\nYour background creates assumptions you don't even notice. Seek feedback from people with different perspectives.\n\n**In Debate:**\nArguing positions you disagree with is valuable training. It forces you to understand other perspectives genuinely.\n\n**The Intellectual Virtue:**\nThe goal isn't to eliminate bias—that's impossible. It's to be aware of it, account for it, and strive for intellectual honesty despite it.",
      },
      {
        type: "content",
        title: "Conclusion: Seeing Through the Lens",
        content: "You've now developed sophisticated skills for identifying and accounting for bias in sources.\n\n**Key Takeaways:**\n• Every source has some perspective; bias is a spectrum, not binary\n• Check funding, selection, framing, and organizational orientation\n• Funding bias warrants scrutiny but doesn't automatically invalidate\n• Against-interest admissions are especially credible\n• Triangulate across differently-biased sources\n• Acknowledge bias and separate data from conclusions\n• Recognize your own biases and counter them actively\n\n**Looking Ahead:**\nIn the next lesson, we'll explore the false dichotomy fallacy—when arguments incorrectly present only two options.\n\n**Practice Challenge:**\nPick a controversial topic. Find sources from opposite perspectives. What biases can you identify in each? Where do they agree despite their differences? That's likely closer to truth.",
        keyPoints: [
          "Bias is a spectrum—evaluate, don't dismiss",
          "Multiple strategies for working with biased sources",
          "Self-awareness about your own biases is crucial",
        ],
      },
    ],
  },
  {
    lessonId: "l07-02",
    pages: [
      {
        type: "content",
        title: "Introduction: False Dichotomy",
        content: "You're either with us or against us. Love it or leave it. If you're not part of the solution, you're part of the problem.\n\nThese phrases sound decisive and clear. But they commit a common logical error: the false dichotomy (also called false dilemma or either/or fallacy). This fallacy presents only two options when more actually exist.\n\nIn debate and in life, false dichotomies can be persuasive because they simplify complex issues. But they also obscure the full range of possibilities. In this lesson, you'll learn to recognize false dichotomies, understand why they're fallacious, and develop strategies for exposing them when opponents use them.",
      },
      {
        type: "content",
        title: "The Structure of False Dichotomy",
        content: "A false dichotomy has a specific logical structure:\n\n**The Pattern:**\n'Either A or B. Not A. Therefore B.'\nOR\n'Either A or B. Not B. Therefore A.'\n\n**The Problem:**\nThis logic is only valid if A and B are truly the only options. When alternatives C, D, or E exist, the dichotomy is false.\n\n**Example:**\n'Either we ban all cars or we accept pollution deaths. We can't ban all cars. Therefore we must accept pollution deaths.'\n\n**What's Missing:**\nElectric vehicles, emission standards, public transit, and many other options exist between 'all cars' and 'no cars.'\n\n**Why It's Persuasive:**\n• Simplifies complex issues\n• Forces a choice on your terms\n• Makes your preferred option seem inevitable\n• Pressures quick decisions without full consideration",
        keyPoints: [
          "False dichotomy presents only two options when more exist",
          "The logic only works if options are truly exhaustive",
          "Most real-world issues have a spectrum of possibilities",
        ],
      },
      {
        type: "content",
        title: "Common False Dichotomy Examples",
        content: "False dichotomies appear throughout public discourse:\n\n**Politics:**\n• 'You're either a patriot or a traitor.'\n• 'Support this policy or support the other party.'\n• 'Security or liberty—choose one.'\n\n**Debate:**\n• 'Either accept my plan or accept the status quo.'\n• 'Vote for my side or you're endorsing their harms.'\n• 'This is the only solution to the problem.'\n\n**Everyday Life:**\n• 'You're either successful or a failure.'\n• 'Either this relationship is perfect or we should end it.'\n• 'Work hard or enjoy life—you can't have both.'\n\n**Marketing:**\n• 'Buy our product or suffer with the problem.'\n• 'Act now or miss out forever.'\n\n**The Pattern:**\nNotice how each presents a forced choice that ignores middle ground, third options, or nuance.",
        keyPoints: [
          "Politics often uses us-vs-them dichotomies",
          "Debate uses 'my plan or nothing' framing",
          "Real choices usually have more than two options",
        ],
      },
      {
        type: "question",
        id: "l07-02-q1",
        question: "Which statement is a false dichotomy?",
        options: [
          { id: "a", text: "You can have coffee or tea for breakfast" },
          { id: "b", text: "Either we invest in education or we condemn the next generation to failure" },
          { id: "c", text: "The light switch is either on or off" },
          { id: "d", text: "Water is either frozen or liquid at this temperature" }
        ],
        correctAnswer: "b",
        explanation: "Option B is a false dichotomy because it presents only two extreme options (invest in education vs. condemn future generations) when many alternatives and middle grounds exist. Options A, C, and D present genuinely binary choices or explicitly limited options (coffee OR tea, on OR off, frozen OR liquid at a specific temperature).",
      },
      {
        type: "content",
        title: "Responding to False Dichotomies",
        content: "When opponents present false dichotomies, expose the hidden options:\n\n**1. Name the Fallacy:**\n'My opponent presents a false choice. They say we must either X or Y, but those aren't our only options.'\n\n**2. Introduce Alternatives:**\n'There are actually several possibilities: A, B, C... The real question is which approach is best.'\n\n**3. Challenge the Framing:**\n'Why are we limited to these two options? Let's step back and consider the full range of responses.'\n\n**4. Show the Spectrum:**\n'This isn't either/or—it's a spectrum. We can have some of X and some of Y, or different combinations.'\n\n**5. Question the Premise:**\n'Even accepting these as the only options—which I don't—let me explain why my opponent's preferred choice is still wrong.'\n\n**Example Response:**\n'My opponent says we must either have open borders or build a wall. This ignores the many immigration policies between these extremes—visa systems, work permits, enforcement priorities, and path-to-citizenship programs. Let's discuss actual policy options, not false extremes.'",
        keyPoints: [
          "Name the fallacy explicitly",
          "Introduce the alternatives being hidden",
          "Show the spectrum of possibilities",
        ],
      },
      {
        type: "content",
        title: "When Dichotomies Are Real",
        content: "Not every either/or is false. Some choices really are binary:\n\n**True Dichotomies:**\n• 'The defendant is guilty or not guilty' (legal verdict)\n• 'The bill passes or it doesn't' (final vote)\n• 'We fund program A or program B with this budget' (mutually exclusive options)\n• 'She is pregnant or not pregnant' (biological binary)\n\n**How to Tell:**\nAsk: Are there genuinely no other possibilities, combinations, or middle grounds?\n\n**Forced Choice vs. False Dichotomy:**\nSometimes circumstances create real either/or moments even when options theoretically exist:\n• 'We must decide today: accept this offer or walk away.'\nThis might be a real deadline forcing a binary choice.\n\n**In Debate:**\nSome resolutions are designed as dichotomies: 'Resolved: The U.S. should abolish the death penalty.' You're either affirming or negating.\n\n**The Test:**\nIf you can articulate viable third options, it's probably a false dichotomy. If the structure genuinely permits only two outcomes, it may be real.",
        keyPoints: [
          "Some choices are genuinely binary",
          "Legal verdicts and pass/fail votes are real dichotomies",
          "Ask if viable third options exist",
        ],
      },
      {
        type: "question",
        id: "l07-02-q2",
        question: "Which is likely a TRUE dichotomy (not a false one)?",
        options: [
          { id: "a", text: "You're either with us or against us" },
          { id: "b", text: "Either we act on climate change or the planet is doomed" },
          { id: "c", text: "The Supreme Court will either uphold or overturn this law" },
          { id: "d", text: "Either support police or support criminals" }
        ],
        correctAnswer: "c",
        explanation: "The Supreme Court upholding or overturning a law is a genuine dichotomy—those are the only two possible judicial outcomes (though they might modify or partially uphold). The other options present complex issues with many middle-ground positions as if they were binary choices.",
      },
      {
        type: "content",
        title: "False Dichotomy in Media and Advertising",
        content: "Understanding false dichotomy helps you recognize manipulation in everyday life:\n\n**News and Political Commentary:**\n• 'The debate over healthcare: government takeover vs. free market'\n• 'Immigration: compassion vs. law enforcement'\n• 'Gun control: safety vs. freedom'\n\nEach presents a complex policy area as having only two opposite positions, ignoring the many nuanced policy options between extremes.\n\n**Advertising:**\n• 'You can have clean clothes OR save time—with our product, you get both!'\n(Implies the only alternative is their product)\n• 'Don't settle for ordinary—choose extraordinary'\n(Implies all alternatives are identical)\n\n**Social Pressure:**\n• 'Real friends would do this for you'\n(Either do what I want or you're not a real friend)\n• 'If you loved me, you would...'\n(Binary test of a complex relationship)\n\n**The Defense:**\nRecognizing these patterns helps you resist manipulation. Always ask: What options are being hidden? What middle ground exists?",
        keyPoints: [
          "Media often frames complex issues as two-sided debates",
          "Advertising uses false choice to push products",
          "Social pressure often relies on false dichotomies",
        ],
      },
      {
        type: "content",
        title: "Practicing Alternative Generation",
        content: "The best defense against false dichotomy is the ability to quickly generate alternatives:\n\n**Exercise: For each false dichotomy below, brainstorm at least three alternatives:**\n\n**'Either we ban plastic straws or we destroy the ocean.'**\nAlternatives: Biodegradable straws, paper straws, straw-free lids, incentive programs for reusables, focusing on larger pollution sources, graduated restrictions...\n\n**'You can either study hard or have a social life.'**\nAlternatives: Balanced scheduling, study groups (combining both), efficient study techniques, choosing some activities strategically, different periods for different priorities...\n\n**'We either fully fund arts programs or cut them entirely.'**\nAlternatives: Partial funding, community partnerships, fundraising supplements, prioritizing certain programs, phased transitions, shared resources with other schools...\n\n**The Skill:**\nWith practice, generating alternatives becomes automatic. You'll instinctively see through false dichotomies because your mind immediately populates the missing options.\n\n**In Debate:**\nHaving alternatives ready shows judges you understand complexity: 'My opponent offers a false choice. Here are three other approaches...'",
        keyPoints: [
          "Practice generating alternatives to build the skill",
          "Most dichotomies dissolve when you brainstorm options",
          "Quick alternative generation is a debater's advantage",
        ],
      },
      {
        type: "question",
        id: "l07-02-q3",
        question: "An opponent argues: 'Either we eliminate all regulations on businesses or we accept economic stagnation.' What's the strongest response?",
        options: [
          { id: "a", text: "Accept that some economic stagnation is inevitable" },
          { id: "b", text: "Agree to eliminate all regulations" },
          { id: "c", text: "Point out this is a false dichotomy—we can have smart, targeted regulations that protect consumers while enabling growth" },
          { id: "d", text: "Ignore the argument and change topics" }
        ],
        correctAnswer: "c",
        explanation: "This is a classic false dichotomy that ignores the spectrum of regulatory options. The strongest response introduces alternatives: targeted regulations, modernized rules, different approaches for different industries, evidence-based policy. The choice isn't 'all or nothing'—it's 'which regulations, designed how?'",
      },
      {
        type: "content",
        title: "Strategic Use of Dichotomies",
        content: "Understanding false dichotomy helps you avoid committing it—and use legitimate framing effectively:\n\n**Avoid in Your Arguments:**\n• Don't claim your plan is the only solution\n• Acknowledge alternatives exist; explain why yours is better\n• Show awareness of middle-ground positions\n\n**Legitimate Simplification:**\nSometimes narrowing focus is strategic and honest:\n• 'Given time constraints, let's focus on the two main approaches...'\n• 'For this debate, the key choice is between X and Y...'\n\n**Creating Favorable Comparisons:**\nYou can legitimately frame a choice without claiming exclusivity:\n• 'The question is: do we prioritize short-term costs or long-term benefits?'\n• 'We must weigh economic growth against environmental protection.'\nThese acknowledge tension without falsely claiming only two options exist.\n\n**Principled Framing:**\nSome debates genuinely come down to value conflicts:\n• 'At its core, this debate is about liberty versus security.'\nThis can be legitimate framing if you're identifying the key tension, not claiming no nuance exists.",
        keyPoints: [
          "Avoid claiming your solution is the only one",
          "Legitimate simplification differs from false dichotomy",
          "Frame tensions honestly without false exclusivity",
        ],
      },
      {
        type: "content",
        title: "Conclusion: Expanding the Options",
        content: "You've now learned to recognize and respond to false dichotomies—a crucial skill for clear thinking and effective debate.\n\n**Key Takeaways:**\n• False dichotomy presents only two options when more exist\n• It's persuasive because it simplifies and forces choices\n• Respond by naming the fallacy and introducing alternatives\n• Some dichotomies are real—test by asking if third options exist\n• Avoid committing this fallacy in your own arguments\n• Legitimate framing differs from false exclusivity\n\n**Looking Ahead:**\nIn the next lesson, we'll explore how debate skills apply in everyday life—from workplace discussions to personal relationships.\n\n**Practice Challenge:**\nFor one day, notice either/or framing in news, conversations, and advertising. How many are true dichotomies? How many hide alternatives? This awareness reveals how often we're presented with false choices.",
        keyPoints: [
          "False dichotomies hide the full range of options",
          "Expose them by introducing alternatives",
          "Test by asking if genuine third options exist",
        ],
      },
      {
        type: "practice",
        id: "l07-02-p1",
        title: "Identifying and Challenging False Dichotomies",
        description: "Practice spotting false either/or choices and introducing the alternatives being hidden.",
        practice: {
          type: "refutation",
          topic: "Schools should eliminate standardized testing",
          targetSkill: "Identifying false dichotomies and exposing hidden alternatives",
          instructions: "Your AI opponent will present arguments using false dichotomy framing (e.g., 'Either we keep all standardized tests or students will have no accountability'). Identify the false either/or choice, name the fallacy, and introduce the spectrum of alternatives being hidden. Show that more than two options exist.",
          exampleResponse: "My opponent presents a false dichotomy: either we keep all standardized tests or abandon accountability entirely. But these aren't our only options. We could use portfolio assessments, reduce testing frequency, implement different test formats, or combine multiple evaluation methods. The real question isn't 'testing or nothing'—it's which combination of assessment approaches best serves students.",
          successCriteria: [
            "Correctly identifies the false dichotomy in opponent's argument",
            "Names or explains the fallacy clearly",
            "Introduces at least two alternative options not presented",
            "Reframes the debate around the spectrum of real choices",
          ],
        },
      },
    ],
  },
  {
    lessonId: "l07-03",
    pages: [
      {
        type: "content",
        title: "Introduction: Debate in Everyday Life",
        content: "You might think debate skills only matter in competitive rounds. But the skills you're developing—clear reasoning, evidence evaluation, persuasive communication, and critical thinking—apply to virtually every aspect of life.\n\nFrom job interviews to family discussions, from workplace meetings to citizen engagement, debate training gives you advantages that most people never develop. In this lesson, we'll explore how to apply your debate skills beyond the competition room and recognize opportunities for practice everywhere.",
      },
      {
        type: "content",
        title: "Professional Applications",
        content: "The workplace rewards debate-style skills constantly:\n\n**Job Interviews:**\nEvery interview is a persuasion exercise. You're arguing why you're the best candidate.\n• Structure answers clearly (claim, evidence, reasoning)\n• Anticipate objections (why shouldn't we hire you?)\n• Handle challenging questions with composure\n• Present confidently with good non-verbal communication\n\n**Meetings:**\nEffective meeting participation uses debate skills:\n• Listen actively and take mental 'flow' notes\n• Identify key issues and articulate positions clearly\n• Respond to counterarguments substantively\n• Facilitate by identifying areas of agreement and disagreement\n\n**Presentations:**\n• Structure information logically\n• Use evidence to support claims\n• Anticipate audience questions\n• Handle Q&A with composure\n\n**Negotiations:**\n• Understand the other side's interests\n• Build compelling cases for your position\n• Find creative solutions\n• Know when to stand firm and when to compromise",
        keyPoints: [
          "Interviews: structure answers and handle tough questions",
          "Meetings: listen actively and articulate positions clearly",
          "Presentations and negotiations use core debate skills",
        ],
      },
      {
        type: "content",
        title: "Academic Applications",
        content: "Debate skills directly improve academic performance:\n\n**Essay Writing:**\n• Thesis statements are claims\n• Body paragraphs follow claim-evidence-reasoning\n• Counterargument paragraphs show you understand opposition\n• Conclusions weigh competing considerations\n\n**Class Discussions:**\n• Formulate positions quickly and articulate them clearly\n• Respond to others' points substantively\n• Ask probing questions (like cross-examination)\n• Synthesize different viewpoints\n\n**Research Skills:**\n• Evaluate source credibility\n• Distinguish primary from secondary sources\n• Synthesize information from multiple sources\n• Recognize bias and account for it\n\n**Test-Taking:**\n• Analyze questions carefully (what's really being asked?)\n• Structure answers logically even under time pressure\n• Manage time strategically\n• Eliminate wrong answers through logical analysis\n\n**Research Shows:**\nStudents who participate in debate consistently show improvements in reading comprehension, critical thinking, and grades across subjects.",
        keyPoints: [
          "Essays use claim-evidence-reasoning structure",
          "Class discussions are informal debates",
          "Research skills from debate improve all academic work",
        ],
      },
      {
        type: "question",
        id: "l07-03-q1",
        question: "How does debate training improve essay writing?",
        options: [
          { id: "a", text: "It doesn't—debate is oral, essays are written" },
          { id: "b", text: "It teaches the same claim-evidence-reasoning structure used in essays" },
          { id: "c", text: "It makes essays longer" },
          { id: "d", text: "It only helps with persuasive essays, not other types" }
        ],
        correctAnswer: "b",
        explanation: "The claim-evidence-reasoning structure fundamental to debate is exactly what strong essays require. A thesis is a claim, body paragraphs provide evidence and reasoning, and good essays acknowledge counterarguments. These are the same skills practiced in debate.",
      },
      {
        type: "content",
        title: "Civic Engagement",
        content: "Democracy depends on citizens who can evaluate arguments and participate thoughtfully:\n\n**Evaluating Political Claims:**\n• Spot logical fallacies in political rhetoric\n• Check claims against evidence\n• Recognize emotional manipulation vs. substantive argument\n• Understand policy tradeoffs\n\n**Informed Voting:**\n• Research candidate positions\n• Evaluate competing claims\n• Look beyond personality to policy substance\n• Understand how proposed policies might work\n\n**Community Involvement:**\n• Speak effectively at public meetings\n• Advocate for causes you believe in\n• Build coalitions and persuade others\n• Engage respectfully with disagreement\n\n**Media Literacy:**\n• Distinguish news from opinion\n• Evaluate source credibility\n• Recognize bias in coverage\n• Seek multiple perspectives\n\n**The Debate Advantage:**\nDebaters are better equipped to resist manipulation, evaluate evidence, and engage constructively in civic discourse—skills essential for healthy democracy.",
        keyPoints: [
          "Evaluate political claims with debate skills",
          "Engage in community discourse effectively",
          "Media literacy builds on source evaluation skills",
        ],
      },
      {
        type: "content",
        title: "Personal Relationships",
        content: "Debate skills can improve—or complicate—personal relationships:\n\n**Helpful Applications:**\n• Active listening (really hearing what others say)\n• Articulating your perspective clearly\n• Understanding others' viewpoints\n• Staying calm in disagreements\n• Finding common ground\n\n**Common Pitfalls:**\n• Treating personal discussions like competitive debates\n• 'Winning' arguments instead of resolving issues\n• Cross-examining partners or friends\n• Prioritizing being right over understanding\n\n**The Key Difference:**\nIn competition, you're trying to win. In relationships, you're trying to understand and connect.\n\n**Constructive Conflict:**\n• Listen to understand, not to refute\n• State your feelings, not just your arguments\n• Acknowledge valid points from the other side\n• Seek solutions, not victories\n• Say 'I understand you're saying...' before responding\n\n**The Empathy Edge:**\nDebating both sides teaches you to genuinely understand perspectives different from your own. This empathy is invaluable in personal relationships.",
        keyPoints: [
          "Active listening and clear communication help relationships",
          "Don't treat personal discussions as competitions",
          "Seek understanding and connection, not victory",
        ],
      },
      {
        type: "question",
        id: "l07-03-q2",
        question: "What's the key difference between debate and personal conflict resolution?",
        options: [
          { id: "a", text: "There is no difference—always try to win" },
          { id: "b", text: "In personal situations, the goal is understanding and connection, not winning" },
          { id: "c", text: "Never use debate skills in personal life" },
          { id: "d", text: "Personal conflicts don't involve any argumentation" }
        ],
        correctAnswer: "b",
        explanation: "While debate skills like active listening and clear articulation help in personal relationships, the goal shifts from winning to understanding and connecting. Treating personal discussions as competitions to win usually damages relationships rather than helping them.",
      },
      {
        type: "content",
        title: "Debate Skills in Healthcare and Consumer Decisions",
        content: "Critical thinking from debate helps you navigate important life decisions:\n\n**Healthcare Conversations:**\n• Ask clarifying questions about diagnoses and treatments\n• Evaluate evidence for different treatment options\n• Understand tradeoffs between approaches\n• Advocate for yourself with medical professionals\n• Recognize when to seek second opinions\n\n**Consumer Decisions:**\n• Evaluate claims in advertising critically\n• Research products beyond marketing materials\n• Compare options systematically\n• Recognize persuasion techniques in sales\n• Question 'limited time' and urgency pressure\n\n**Financial Choices:**\n• Evaluate investment advice skeptically\n• Understand the arguments for different financial strategies\n• Question fees and fine print\n• Recognize conflicts of interest in financial advice\n\n**The Pattern:**\nIn each case, you're applying the same skills: evaluating evidence, recognizing bias, asking clarifying questions, and making reasoned judgments rather than emotional ones.",
        keyPoints: [
          "Advocate for yourself in healthcare with evidence-based questions",
          "Evaluate advertising and sales tactics critically",
          "Apply skeptical thinking to financial decisions",
        ],
      },
      {
        type: "content",
        title: "Conflict Resolution and Mediation",
        content: "Debate training provides excellent preparation for resolving disputes:\n\n**Understanding All Sides:**\nDebaters practice seeing issues from multiple perspectives. This helps identify what each party really needs in a conflict.\n\n**Active Listening:**\nThe habit of taking careful notes and tracking arguments translates to genuinely hearing all parties in a dispute.\n\n**Finding Common Ground:**\n• Identify shared values or goals\n• Separate positions from underlying interests\n• Look for solutions that address multiple concerns\n\n**De-escalation:**\n• Focus on issues, not personalities\n• Acknowledge valid points from all sides\n• Use calm, measured language even when others are emotional\n\n**Mediation Skills:**\n• Summarize each position fairly\n• Ask questions that clarify interests\n• Propose frameworks for resolution\n• Test potential solutions against each party's needs\n\n**Career Applications:**\nThese skills are valuable in HR, management, law, diplomacy, counseling, and any field involving human disagreement.",
        keyPoints: [
          "Multiple-perspective thinking helps understand disputes",
          "Active listening and de-escalation are debate-trained skills",
          "Mediation uses many core debate competencies",
        ],
      },
      {
        type: "question",
        id: "l07-03-q3",
        question: "Which debate skill is MOST directly applicable to helping resolve a conflict between two friends?",
        options: [
          { id: "a", text: "Speaking faster than your opponent" },
          { id: "b", text: "The ability to understand and articulate both perspectives fairly" },
          { id: "c", text: "Using technical debate jargon" },
          { id: "d", text: "Declaring a winner and loser" }
        ],
        correctAnswer: "b",
        explanation: "The core debate skill of understanding multiple perspectives—essential for arguing both sides of a topic—directly applies to mediation. By fairly articulating what each friend needs and feels, you can help them find common ground and resolution.",
      },
      {
        type: "content",
        title: "Daily Practice Opportunities",
        content: "Every day offers chances to practice debate skills:\n\n**News Consumption:**\n• Evaluate claims and evidence in articles\n• Identify fallacies and bias\n• Consider counterarguments to positions presented\n\n**Conversations:**\n• Listen actively and summarize before responding\n• Ask clarifying questions\n• Present your views with structure\n\n**Reading:**\n• Analyze arguments in opinion pieces\n• Note how authors support claims\n• Consider missing perspectives\n\n**Decision-Making:**\n• Weigh pros and cons systematically\n• Consider evidence for different options\n• Anticipate potential objections to your choice\n\n**Social Media:**\n• Before sharing, evaluate the source\n• Consider if the framing is fair\n• Engage substantively, not emotionally\n\n**The Habit:**\nDebate skills become automatic when practiced daily. Every interaction is an opportunity to think more clearly and communicate more effectively.",
      },
      {
        type: "content",
        title: "Conclusion: Skills for Life",
        content: "Debate training isn't just about winning rounds—it's about developing capabilities that serve you everywhere.\n\n**Key Takeaways:**\n• Professional settings reward clear reasoning and persuasive communication\n• Academic work uses the same structures as debate arguments\n• Civic engagement requires the ability to evaluate claims and participate constructively\n• Personal relationships benefit from listening and clarity—but not competitive winning\n• Daily life offers constant practice opportunities\n\n**Looking Ahead:**\nIn the next lesson, we'll dive into the Toulmin model—a comprehensive framework for understanding argument structure.\n\n**Practice Challenge:**\nPick one area—professional, academic, civic, or personal—and consciously apply one debate skill this week. Notice how it changes your interactions and outcomes.",
        keyPoints: [
          "Debate skills transfer to professional, academic, and civic life",
          "Relationships benefit from skills but not competitive mindset",
          "Practice daily to make good thinking automatic",
        ],
      },
    ],
  },
  {
    lessonId: "l07-04",
    pages: [
      {
        type: "content",
        title: "Introduction: The Toulmin Model of Argumentation",
        content: "In earlier lessons, you learned the basic Claim-Evidence-Reasoning structure. Now we'll expand this into a more comprehensive framework: the Toulmin model.\n\nDeveloped by British philosopher Stephen Toulmin in 1958, this model identifies six components of complete arguments. Understanding these components helps you build stronger cases, analyze opponent arguments more precisely, and identify exactly where an argument is weak.\n\nThe Toulmin model is used in debate, academic writing, legal reasoning, and anywhere rigorous argumentation matters. Mastering it gives you a sophisticated toolkit for both constructing and deconstructing arguments.",
      },
      {
        type: "content",
        title: "The Six Components",
        content: "The Toulmin model includes six elements, each serving a specific function:\n\n**1. Claim (C)**\nThe conclusion you're trying to prove. Your main point or thesis.\n\n**2. Data/Grounds (D)**\nThe evidence, facts, or information supporting your claim.\n\n**3. Warrant (W)**\nThe logical bridge connecting data to claim. Explains WHY the data supports the claim.\n\n**4. Backing (B)**\nSupport for the warrant itself. Explains why we should accept the warrant.\n\n**5. Qualifier (Q)**\nWords indicating the strength of the claim ('probably,' 'likely,' 'in most cases').\n\n**6. Rebuttal (R)**\nConditions under which the claim might not hold. Acknowledges limitations.\n\n**The Relationship:**\nData supports Claim via Warrant. Backing supports Warrant. Qualifier shows certainty level. Rebuttal shows exceptions.",
        keyPoints: [
          "Claim: What you're proving",
          "Data: Evidence supporting it",
          "Warrant: Why evidence proves the claim",
          "Backing: Support for the warrant",
          "Qualifier: Certainty level",
          "Rebuttal: Exceptions and limitations",
        ],
      },
      {
        type: "content",
        title: "A Complete Example",
        content: "Let's see all six components in action:\n\n**Topic:** Should the school cafeteria offer more vegetarian options?\n\n**Claim (C):**\n'The school cafeteria should offer more vegetarian options.'\n\n**Data (D):**\n'A survey shows 35% of students want more vegetarian choices, and current options are limited to one dish daily.'\n\n**Warrant (W):**\n'The cafeteria should respond to significant student demand for food variety.'\n\n**Backing (B):**\n'Schools have a responsibility to accommodate diverse dietary needs, and responding to demand improves student satisfaction and cafeteria utilization.'\n\n**Qualifier (Q):**\n'...should *probably* offer more vegetarian options...' (acknowledges some uncertainty)\n\n**Rebuttal (R):**\n'Unless budget constraints make additional options impossible, or unless demand can be met through other means.'\n\n**Notice:**\nA complete argument acknowledges its own limitations (qualifier and rebuttal). This actually strengthens credibility by showing intellectual honesty.",
        keyPoints: [
          "Complete arguments include all six elements",
          "Qualifier and rebuttal show intellectual honesty",
          "Each component serves a specific purpose",
        ],
      },
      {
        type: "question",
        id: "l07-04-q1",
        question: "In the Toulmin model, what is the function of the 'warrant'?",
        options: [
          { id: "a", text: "To state the main conclusion" },
          { id: "b", text: "To provide evidence for the claim" },
          { id: "c", text: "To explain why the evidence supports the claim" },
          { id: "d", text: "To acknowledge exceptions to the argument" }
        ],
        correctAnswer: "c",
        explanation: "The warrant is the logical bridge connecting data to claim—it explains WHY the evidence supports the claim. Without a warrant, you have an assertion with facts, but no explanation of how those facts prove your point.",
      },
      {
        type: "content",
        title: "Using Toulmin to Build Arguments",
        content: "The model provides a checklist for constructing strong arguments:\n\n**Step 1: State Your Claim Clearly**\nWhat exactly are you trying to prove? Make it specific and debatable.\n\n**Step 2: Identify Your Best Data**\nWhat evidence supports this claim? Facts, statistics, examples, expert testimony.\n\n**Step 3: Articulate Your Warrant**\nWhy does this data prove this claim? What's the logical connection? This is often implicit—make it explicit.\n\n**Step 4: Provide Backing**\nWhy should we accept your warrant? What supports the logic of your connection?\n\n**Step 5: Add Appropriate Qualifiers**\nHow certain are you? 'Definitely'? 'Probably'? 'In many cases'? Match qualifier to evidence strength.\n\n**Step 6: Consider Rebuttals**\nUnder what circumstances might your claim not hold? Acknowledging these strengthens your credibility.\n\n**Common Weakness:**\nMost incomplete arguments are missing warrants—they present claim and data but don't explain the connection. Always ask: 'So what? Why does this evidence prove my point?'",
        keyPoints: [
          "Use Toulmin as a checklist for complete arguments",
          "Most incomplete arguments lack explicit warrants",
          "Qualifiers and rebuttals add credibility",
        ],
      },
      {
        type: "content",
        title: "Using Toulmin to Analyze Arguments",
        content: "The model is equally powerful for breaking down opponent arguments:\n\n**Identify Each Component:**\nAs you listen, ask: What's their claim? What data are they using? What's their warrant? Is there backing? Any qualifiers? Any acknowledged rebuttals?\n\n**Find the Weak Link:**\n• Missing warrant? → 'They haven't explained WHY their evidence proves their point.'\n• Weak data? → 'Their evidence is outdated/biased/insufficient.'\n• Invalid warrant? → 'Even accepting their data, their logic doesn't follow.'\n• Unqualified claim? → 'They're overstating their case.'\n• Ignored rebuttals? → 'They've ignored these exceptions...'\n\n**Attack Strategy:**\nTarget the weakest component. Often, opponents state claims and data but leave warrants implicit. Challenge them: 'Even if this data is true, how does it prove their point?'\n\n**Flow with Toulmin:**\nWhen taking notes, track each component. This helps you identify gaps more systematically.",
        keyPoints: [
          "Break down opponent arguments by component",
          "Target the weakest element",
          "Missing warrants are the most common weakness",
        ],
      },
      {
        type: "question",
        id: "l07-04-q2",
        question: "Your opponent says: 'Teen social media use has increased. Depression has increased. Therefore, social media causes depression.' What Toulmin element is missing?",
        options: [
          { id: "a", text: "Claim (they didn't state their conclusion)" },
          { id: "b", text: "Data (they provided no evidence)" },
          { id: "c", text: "Warrant (they didn't explain why correlation proves causation)" },
          { id: "d", text: "Nothing is missing—it's a complete argument" }
        ],
        correctAnswer: "c",
        explanation: "The argument has a claim (social media causes depression) and data (both have increased), but is missing a warrant explaining why this correlation proves causation. Many other factors could explain both trends. The logical connection is assumed, not demonstrated.",
      },
      {
        type: "content",
        title: "Common Warrant Types and Their Vulnerabilities",
        content: "Different types of warrants have different strengths and weaknesses:\n\n**Authoritative Warrants:**\n'Experts agree, so we should believe...'\n• Strength: Expert consensus is generally reliable\n• Vulnerability: Which experts? Do they have the right expertise? Are there dissenting experts?\n\n**Causal Warrants:**\n'X causes Y because of this mechanism...'\n• Strength: Explains how things work\n• Vulnerability: Is the mechanism proven? Are there other causes?\n\n**Analogical Warrants:**\n'This is similar to that situation, so the same applies...'\n• Strength: Uses established precedent\n• Vulnerability: Is the analogy close enough? What are the relevant differences?\n\n**Principle-Based Warrants:**\n'This principle applies here, therefore...'\n• Strength: Grounds argument in shared values\n• Vulnerability: Is the principle accepted? Does it really apply?\n\n**Statistical Warrants:**\n'The data shows a pattern, therefore...'\n• Strength: Quantified evidence\n• Vulnerability: Sample size? Correlation vs. causation? Cherry-picked data?",
        keyPoints: [
          "Different warrant types have distinct vulnerabilities",
          "Authoritative warrants depend on expert credibility",
          "Causal and analogical warrants can be challenged on fit",
        ],
      },
      {
        type: "content",
        title: "Strengthening Weak Arguments with Toulmin",
        content: "When your own arguments feel weak, use Toulmin diagnostically:\n\n**Diagnose the Problem:**\nWhich component is weakest? Is your data insufficient? Is your warrant implicit? Is your claim overreaching?\n\n**Common Fixes:**\n\n**Weak Data:**\n• Find additional evidence\n• Use more credible sources\n• Add multiple types of evidence (statistics + examples + expert opinion)\n\n**Implicit Warrant:**\n• Articulate the logical connection explicitly\n• Explain why your evidence actually proves your point\n• Consider if the warrant itself needs backing\n\n**Overreaching Claim:**\n• Add qualifiers ('often,' 'in many cases,' 'probably')\n• Narrow the scope of what you're claiming\n• Acknowledge limitations proactively\n\n**Missing Rebuttal:**\n• Anticipate objections and address them\n• Explain why exceptions don't undermine your main point\n• Show you've considered counterarguments\n\n**Example Improvement:**\nWeak: 'Video games cause violence.'\nStrong: 'Excessive violent video game use probably contributes to aggressive behavior in some individuals, though the effect is one of many factors and varies based on other risk factors.'",
        keyPoints: [
          "Use Toulmin to diagnose weak arguments",
          "Add qualifiers when claims overreach",
          "Explicit warrants strengthen implicit logic",
        ],
      },
      {
        type: "question",
        id: "l07-04-q3",
        question: "An argument claims 'Studies show coffee drinkers live longer, so coffee extends life.' A warrant-based attack would focus on:",
        options: [
          { id: "a", text: "Whether the studies were conducted" },
          { id: "b", text: "The number of people who drink coffee" },
          { id: "c", text: "Why correlation between coffee drinking and longevity proves coffee causes longer life" },
          { id: "d", text: "Whether coffee tastes good" }
        ],
        correctAnswer: "c",
        explanation: "A warrant attack challenges the logical connection between data and claim. Here, the missing warrant assumes correlation proves causation. A strong attack would ask: Why should we believe coffee causes longevity rather than some other explanation (healthier people drink more coffee, confounding lifestyle factors, etc.)?",
      },
      {
        type: "content",
        title: "Warrants: The Most Important Element",
        content: "Of all components, warrants deserve special attention because they're most often missing or flawed:\n\n**What Warrants Do:**\nWarrants are the reasoning that makes data relevant to claims. They answer 'So what?' and 'Why does this matter?'\n\n**Types of Warrants:**\n• Authoritative: 'Experts in this field agree...'\n• Motivational: 'People respond to incentives...'\n• Substantive: 'Historically, this pattern has held...'\n• Analogical: 'Similar situations have shown...'\n• Causal: 'This mechanism produces this effect...'\n\n**Implicit vs. Explicit:**\nMany warrants go unstated because they seem obvious. But making warrants explicit:\n• Clarifies your reasoning for judges\n• Identifies assumptions that can be challenged\n• Demonstrates depth of thought\n\n**Challenging Warrants:**\nEven if data is solid, you can attack by challenging the warrant:\n'Your study shows X happened, but WHY should we believe X caused Y?'\n\n**The Rule:**\nAlways articulate your warrants. Never assume judges will fill in your logic.",
        keyPoints: [
          "Warrants explain why data proves claims",
          "They're often implicit—make them explicit",
          "Challenging warrants is often more effective than challenging data",
        ],
      },
      {
        type: "content",
        title: "Conclusion: A Complete Framework",
        content: "You've now learned the Toulmin model—a comprehensive framework for understanding argument structure.\n\n**Key Takeaways:**\n• Six components: Claim, Data, Warrant, Backing, Qualifier, Rebuttal\n• Use as a checklist when building arguments\n• Use as an analysis tool when breaking down opponent arguments\n• Warrants are the most commonly missing element\n• Qualifiers and rebuttals add credibility through intellectual honesty\n• Target the weakest component in opponent arguments\n\n**Looking Ahead:**\nIn the next lesson, we'll explore the slippery slope fallacy—when arguments incorrectly claim one action will inevitably lead to extreme consequences.\n\n**Practice Challenge:**\nTake an argument you've made recently. Identify all six Toulmin components. What's missing or weak? How could you strengthen it?",
        keyPoints: [
          "Toulmin provides a complete argument framework",
          "Use for both construction and analysis",
          "Warrants deserve special attention",
        ],
      },
      {
        type: "practice",
        id: "l07-04-p1",
        title: "Constructing Complete Toulmin Arguments",
        description: "Practice building arguments with all six Toulmin components: Claim, Data, Warrant, Backing, Qualifier, and Rebuttal.",
        practice: {
          type: "refutation",
          topic: "Social media platforms should be required to verify user ages",
          targetSkill: "Constructing complete arguments using all six Toulmin components",
          instructions: "Build a complete argument on this topic using all six Toulmin components. Your AI opponent will challenge incomplete arguments by asking 'What's your warrant?' or 'Where's your backing?' Practice articulating each component explicitly, especially the warrant (why your evidence proves your claim) and acknowledging limitations through qualifiers and rebuttals.",
          exampleResponse: "Claim: Social media platforms should probably verify user ages. Data: Studies show children under 13 experience higher rates of cyberbullying and mental health impacts from social media use. Warrant: Platforms should take reasonable steps to prevent documented harms to vulnerable users. Backing: We already require age verification for alcohol, tobacco, and R-rated movies because society recognizes children need protection from certain harms. Qualifier: 'Probably' and 'reasonable steps'—acknowledging implementation challenges. Rebuttal: Unless verification systems prove too invasive to privacy or technically infeasible.",
          successCriteria: [
            "States a clear, specific claim",
            "Provides relevant data/evidence supporting the claim",
            "Articulates an explicit warrant connecting data to claim",
            "Includes backing that supports the warrant's logic",
          ],
        },
      },
    ],
  },
  {
    lessonId: "l07-05",
    pages: [
      {
        type: "content",
        title: "Introduction: The Slippery Slope Fallacy",
        content: "If we legalize marijuana, next people will want cocaine legal, and before you know it, heroin will be sold in stores! If we allow same-sex marriage, people will want to marry animals!\n\nThese arguments use what's called a 'slippery slope'—claiming that one action will inevitably lead to a chain of increasingly extreme consequences. Sometimes this reasoning is valid; often it's a fallacy.\n\nIn this lesson, you'll learn to distinguish between legitimate concerns about precedent and consequences versus fallacious slippery slope arguments. You'll also develop strategies for both deploying valid slippery slope reasoning and attacking fallacious versions.",
      },
      {
        type: "content",
        title: "The Structure of Slippery Slope",
        content: "A slippery slope argument has a specific structure:\n\n**The Pattern:**\n1. If we take action A...\n2. It will lead to consequence B...\n3. Which will lead to consequence C...\n4. Which will lead to terrible outcome D.\n5. Therefore, we shouldn't do A.\n\n**The Logic:**\nThe argument claims that A and D are connected by a chain of causation. Take the first step, and you'll inevitably slide down to the bottom.\n\n**The Problem:**\nThe fallacy occurs when:\n• The causal chain isn't actually inevitable\n• Each step can be stopped or reversed\n• The intermediate steps are unlikely\n• No evidence connects A to D\n\n**Visual:**\nThink of an actual slope. A slippery one means you can't stop once you start. A fallacious slippery slope assumes the slope is slippery when it actually has plenty of friction—stopping points, reversals, and alternatives.",
        keyPoints: [
          "Slippery slope claims A leads inevitably to extreme D",
          "The fallacy assumes an unstoppable chain",
          "Real slopes often have stopping points and friction",
        ],
      },
      {
        type: "content",
        title: "Fallacious vs. Valid Slippery Slope",
        content: "The difference between valid and fallacious slippery slopes is whether the causal chain is actually established:\n\n**Fallacious Slippery Slope:**\n• No evidence for the causal chain\n• Each step is assumed, not proven\n• 'It could happen!' without showing it would\n• Often relies on fear rather than logic\n\n**Valid Concern About Consequences:**\n• Evidence that A tends to lead to B\n• Historical examples of the progression\n• Logical mechanism explaining why stopping is difficult\n• Acknowledges possibility but shows likelihood\n\n**Example—Fallacious:**\n'If we allow students to use calculators, they'll forget all math, and then they won't be able to think at all!'\n(No evidence that calculator use leads to complete inability to think.)\n\n**Example—Potentially Valid:**\n'Authoritarian leaders often consolidate power incrementally. Each step seems small, but historically, small erosions of democratic norms have preceded major breakdowns.'\n(Cites historical pattern, explains mechanism.)",
        keyPoints: [
          "Fallacious: assumes chain without evidence",
          "Valid: demonstrates causal mechanism with evidence",
          "Historical patterns can support valid slippery slope concerns",
        ],
      },
      {
        type: "question",
        id: "l07-05-q1",
        question: "What makes a slippery slope argument fallacious rather than valid?",
        options: [
          { id: "a", text: "It predicts negative consequences" },
          { id: "b", text: "It connects an action to future outcomes" },
          { id: "c", text: "It assumes an inevitable chain without evidence" },
          { id: "d", text: "It involves more than two steps" }
        ],
        correctAnswer: "c",
        explanation: "A slippery slope becomes fallacious when it assumes an inevitable causal chain without providing evidence. Valid concern about consequences provides evidence for why the chain is likely—historical precedent, logical mechanism, or documented patterns. The mere prediction of negative outcomes doesn't make an argument fallacious.",
      },
      {
        type: "content",
        title: "Common Slippery Slope Examples",
        content: "Slippery slopes appear frequently in debates on controversial topics:\n\n**Drug Policy:**\n'If we decriminalize marijuana, people will move on to harder drugs.'\nCounter: Evidence doesn't show this progression in places that have decriminalized.\n\n**Free Speech:**\n'If we ban this type of speech, soon all speech will be restricted.'\nCounter: Many countries restrict some speech without becoming totalitarian.\n\n**Gun Control:**\n'Any gun regulation is just the first step toward confiscating all guns.'\nCounter: Many regulations exist without leading to confiscation.\n\n**Technology:**\n'If we allow genetic modification for diseases, next people will design perfect babies.'\nCounter: Different applications face different regulatory paths.\n\n**Notice:**\nThese might represent valid concerns OR fallacies—it depends on whether evidence supports the claimed progression. The form alone doesn't determine validity.",
        keyPoints: [
          "Slippery slopes are common in policy debates",
          "The same form can be valid or fallacious",
          "Evidence for the chain determines validity",
        ],
      },
      {
        type: "content",
        title: "Responding to Slippery Slope Arguments",
        content: "When opponents use slippery slope reasoning, you have several response strategies:\n\n**1. Demand Evidence for Each Step:**\n'My opponent claims A leads to B leads to C. What's the evidence that B follows from A? That C follows from B?'\n\n**2. Show Stopping Points:**\n'The slope isn't slippery. We can implement A without proceeding to B. Here's how we'd maintain those limits...'\n\n**3. Cite Counter-Examples:**\n'Other places have done A without sliding to D. For example...'\n\n**4. Distinguish the Cases:**\n'A and D are actually quite different. Allowing A doesn't require allowing D because...'\n\n**5. Accept and Defend:**\nSometimes the slope goes somewhere fine:\n'Even if we did proceed to B, that wouldn't be a problem because...'\n\n**6. Turn It Around:**\n'Inaction is also a slope. If we DON'T act, here's where we'll end up...'",
        keyPoints: [
          "Demand evidence for each causal link",
          "Show that stopping points exist",
          "Cite examples where the slope didn't happen",
        ],
      },
      {
        type: "content",
        title: "The Psychology Behind Slippery Slope",
        content: "Understanding why slippery slope arguments are persuasive helps you counter them:\n\n**Fear of the Unknown:**\nPeople naturally fear uncertainty. Slippery slope arguments tap into anxiety about where change might lead.\n\n**Loss Aversion:**\nPeople weigh potential losses more heavily than equivalent gains. Extreme negative outcomes at the 'bottom' of the slope feel especially threatening.\n\n**Availability Heuristic:**\nVivid examples of things going wrong are easy to imagine, making extreme outcomes feel more likely than they are.\n\n**Precedent Concerns:**\nWe reasonably worry about setting precedents. Slippery slope exploits this legitimate concern, even when the precedent doesn't actually apply.\n\n**Countering the Psychology:**\n• Acknowledge legitimate concerns about precedent\n• Distinguish between logical possibility and actual likelihood\n• Provide concrete stopping mechanisms\n• Cite real-world examples where the slope didn't materialize\n• Shift focus from fear to evidence",
        keyPoints: [
          "Slippery slope exploits fear of uncertainty",
          "Loss aversion makes extreme outcomes feel worse than they are",
          "Counter with evidence and concrete stopping mechanisms",
        ],
      },
      {
        type: "content",
        title: "Building a Valid Slippery Slope Argument",
        content: "When you have evidence for a genuine slippery slope, here's how to argue it effectively:\n\n**Step 1: Establish the First Link Strongly**\nShow that A actually leads to B with concrete evidence, not just speculation.\n\n**Step 2: Explain the Mechanism**\nWhy does one step make the next more likely? What forces push down the slope?\n• Institutional momentum\n• Changed norms\n• Interest group pressure\n• Technological inevitability\n\n**Step 3: Cite Historical Precedent**\nWhere has this progression happened before? The more examples, the stronger.\n\n**Step 4: Explain Why Stopping Is Hard**\nWhat makes it difficult to pause or reverse? Why can't we 'just stop at B'?\n\n**Step 5: Use Appropriate Qualifiers**\n'This risks leading to...' is more credible than 'This will definitely cause...'\n\n**Example:**\n'Mission creep in military interventions is well-documented. Initial limited objectives regularly expand once troops are deployed. Vietnam started as 'advisors.' Afghanistan's nation-building wasn't the original goal. The political dynamics of deployment—sunk cost reasoning, avoiding the appearance of 'losing'—make withdrawal progressively harder.'",
        keyPoints: [
          "Strong slippery slopes require evidence for each link",
          "Explain the mechanism pushing down the slope",
          "Historical precedent strengthens the argument",
        ],
      },
      {
        type: "question",
        id: "l07-05-q2",
        question: "Your opponent argues: 'If we raise the minimum wage, businesses will automate everything, all workers will be replaced, and unemployment will skyrocket.' What's a strong response?",
        options: [
          { id: "a", text: "Agree that unemployment will skyrocket" },
          { id: "b", text: "Point out that many places have raised minimum wage without massive unemployment, and that automation happens independently of wage levels" },
          { id: "c", text: "Ignore the argument entirely" },
          { id: "d", text: "Attack the opponent personally" }
        ],
        correctAnswer: "b",
        explanation: "The strongest response cites counter-examples (places that raised wages without skyrocketing unemployment) and challenges the causal mechanism (automation happens for various reasons, not just wages). This directly addresses the claimed slippery slope by showing the chain isn't inevitable.",
      },
      {
        type: "content",
        title: "Using Slippery Slope Strategically",
        content: "You can make legitimate slippery slope arguments when you have the evidence:\n\n**Establish the Mechanism:**\nExplain WHY one step leads to the next. What's the causal logic?\n\n**Provide Historical Examples:**\nShow where this progression has happened before.\n\n**Explain Why Stopping Is Hard:**\nWhat makes it difficult to draw a line? Why would momentum continue?\n\n**Use Appropriate Qualifiers:**\n'This could lead to...' or 'There's a risk that...' is more credible than 'This will definitely cause...'\n\n**Example of Strong Usage:**\n'History shows that surveillance powers granted temporarily tend to become permanent. The PATRIOT Act was passed as emergency legislation but has been renewed for decades. Once surveillance infrastructure exists and agencies become accustomed to it, rollback is politically difficult.'\n\nThis provides mechanism (bureaucratic inertia), historical example (PATRIOT Act), and explains why stopping is difficult (political dynamics).",
        keyPoints: [
          "Support slippery slope claims with evidence",
          "Explain the causal mechanism",
          "Use qualifiers appropriate to your evidence",
        ],
      },
      {
        type: "content",
        title: "Conclusion: Slopes and Brakes",
        content: "You now understand how to distinguish valid slippery slope concerns from fallacious ones, and how to respond to or deploy this common argument type.\n\n**Key Takeaways:**\n• Slippery slope claims one action leads inevitably to extreme consequences\n• Fallacious when the chain is assumed without evidence\n• Valid when evidence supports the causal progression\n• Respond by demanding evidence, showing stopping points, citing counter-examples\n• Use legitimately by establishing mechanism and providing historical support\n• Use appropriate qualifiers to match your evidence\n\n**Looking Ahead:**\nIn the next lesson, we'll tackle correlation versus causation—one of the most important distinctions in evidence evaluation.\n\n**Practice Challenge:**\nFind a slippery slope argument in the news or online. Is it fallacious or valid? What evidence would you need to determine which?",
        keyPoints: [
          "Distinguish valid concern from fallacy",
          "Evidence for causal chain is the key test",
          "Respond by challenging the chain or providing counter-examples",
        ],
      },
    ],
  },
  {
    lessonId: "l07-06",
    pages: [
      {
        type: "content",
        title: "Introduction: Correlation vs Causation",
        content: "Ice cream sales and drowning deaths both increase in summer. Does ice cream cause drowning?\n\nOf course not. Both are caused by a third factor—warm weather. But this kind of faulty reasoning—confusing correlation (things happening together) with causation (one thing causing another)—is everywhere.\n\nThis is one of the most important distinctions in evidence evaluation. Studies showing correlation are often presented as if they prove causation. In this lesson, you'll learn to identify this error, understand what it takes to establish actual causation, and develop strategies for attacking or defending causal claims.",
      },
      {
        type: "content",
        title: "What Correlation Actually Means",
        content: "Correlation means two things tend to occur together or move together:\n\n**Positive Correlation:**\nWhen A increases, B increases (or when A decreases, B decreases).\nExample: Education level and income are positively correlated.\n\n**Negative Correlation:**\nWhen A increases, B decreases (or vice versa).\nExample: Exercise frequency and body fat percentage are negatively correlated.\n\n**No Correlation:**\nA and B don't have a consistent relationship.\n\n**What Correlation DOES Tell Us:**\n• There's a statistical relationship between variables\n• The variables might be worth investigating further\n• One might cause the other (or might not)\n\n**What Correlation DOESN'T Tell Us:**\n• That one thing causes the other\n• Which direction causation runs\n• That there's any direct connection at all",
        keyPoints: [
          "Correlation means things occur together statistically",
          "It doesn't tell us about causal direction",
          "Correlation can exist without any causal connection",
        ],
      },
      {
        type: "content",
        title: "Why Correlation Doesn't Prove Causation",
        content: "There are several reasons two things can be correlated without one causing the other:\n\n**1. Reverse Causation:**\nMaybe B causes A, not A causes B.\n• 'Countries with more hospitals have more deaths.' (Sick people go to hospitals, not hospitals cause death.)\n\n**2. Third Variable (Confounding):**\nSomething else causes both A and B.\n• 'Ice cream and drowning' (Summer weather causes both.)\n• 'Reading ability and shoe size in children' (Age causes both.)\n\n**3. Coincidence:**\nWith enough variables, some will correlate by chance.\n• 'Nicolas Cage films and pool drownings' (Spurious correlation, no connection.)\n\n**4. Indirect Connection:**\nA leads to C, which leads to B (complex causal chains).\n\n**The Danger:**\nCorrelational evidence is often presented as if it proves causation. 'Studies show people who do X also do Y' doesn't mean X causes Y—or that doing X will produce Y.",
        keyPoints: [
          "Reverse causation: B might cause A",
          "Third variable: something else causes both",
          "Coincidence: random correlation occurs",
        ],
      },
      {
        type: "question",
        id: "l07-06-q1",
        question: "Studies show that people who eat breakfast tend to be healthier. What's the most accurate interpretation?",
        options: [
          { id: "a", text: "Eating breakfast causes better health" },
          { id: "b", text: "There's a correlation that could have multiple explanations" },
          { id: "c", text: "Skipping breakfast will definitely make you sick" },
          { id: "d", text: "Healthy people don't eat breakfast" }
        ],
        correctAnswer: "b",
        explanation: "The correlation between eating breakfast and health could have multiple explanations: breakfast might cause better health, but also healthier people might be more likely to eat breakfast (reverse causation), or a third variable like lifestyle choices might cause both. The correlation doesn't prove causation.",
      },
      {
        type: "content",
        title: "What Does Establish Causation?",
        content: "Proving causation is harder than showing correlation. Here's what it takes:\n\n**1. Temporal Sequence:**\nA must come before B. Cause must precede effect.\n\n**2. Plausible Mechanism:**\nThere must be a logical explanation for how A causes B.\n\n**3. Controlled Experiments:**\nRandomly assign subjects to groups, change only the variable of interest, and observe differences.\n\n**4. Ruling Out Alternatives:**\nControl for confounding variables. Show third-variable explanations don't apply.\n\n**5. Replication:**\nThe relationship should hold across different studies and contexts.\n\n**The Gold Standard:**\nRandomized controlled trials (RCTs) are the best evidence for causation. Subjects are randomly assigned to treatment or control groups, minimizing confounding.\n\n**When RCTs Aren't Possible:**\nFor some questions (Does smoking cause cancer? Does education increase income?), you can't ethically run experiments. Researchers use observational methods with careful controls.",
        keyPoints: [
          "Cause must precede effect temporally",
          "Need plausible mechanism explaining the connection",
          "Controlled experiments are the gold standard",
          "Must rule out alternative explanations",
        ],
      },
      {
        type: "content",
        title: "Recognizing Causal Language vs. Correlational Language",
        content: "The language used in claims reveals whether they're appropriately cautious:\n\n**Correlational Language (Appropriate for Correlational Data):**\n• 'X is associated with Y'\n• 'X is linked to Y'\n• 'People who X tend to Y'\n• 'X and Y often occur together'\n• 'There's a relationship between X and Y'\n\n**Causal Language (Only Appropriate with Causal Evidence):**\n• 'X causes Y'\n• 'X leads to Y'\n• 'X produces Y'\n• 'X results in Y'\n• 'Doing X will make Y happen'\n\n**Red Flags—Causal Language with Correlational Evidence:**\n• 'Study shows chocolate MAKES you smarter' (likely correlational data)\n• 'Coffee CAUSES longer life' (probably correlation, not proven causation)\n• 'Social media LEADS TO depression' (complex relationship often overstated)\n\n**In Debate:**\nWhen opponents use causal language, ask: 'Is this correlation or causation? What's the experimental evidence?'",
        keyPoints: [
          "Notice whether language claims correlation or causation",
          "Correlational language: associated with, linked to, tend to",
          "Causal language: causes, leads to, produces, results in",
        ],
      },
      {
        type: "content",
        title: "Real-World Correlation vs. Causation Challenges",
        content: "Let's apply this distinction to common real-world claims:\n\n**'Countries with more guns have more gun deaths.'**\n• Correlation: Statistically true\n• Causal Question: Do more guns cause more deaths, or do other factors explain both?\n• Complications: Culture, laws, poverty, mental health systems all vary\n\n**'College graduates earn more money.'**\n• Correlation: Clear statistical relationship\n• Causal Question: Does college cause higher earnings, or do people who would earn more anyway go to college?\n• Complications: Family background, motivation, networking, signaling vs. learning\n\n**'People who exercise regularly report better mental health.'**\n• Correlation: Well-documented\n• Causal Question: Does exercise improve mental health, or do people with better mental health exercise more?\n• Evidence: Some randomized trials suggest exercise does help causally, but the direction likely goes both ways\n\n**The Lesson:**\nMost real-world relationships are complex. Multiple causal pathways often exist simultaneously.",
        keyPoints: [
          "Real-world correlations often have multiple possible explanations",
          "Causal direction can be unclear or bidirectional",
          "Multiple factors usually contribute to observed correlations",
        ],
      },
      {
        type: "content",
        title: "Attacking Causal Claims",
        content: "When opponents make causal claims based on correlation, you have several attack vectors:\n\n**1. Demand Causal Evidence:**\n'That's correlation, not causation. Where's the experimental evidence that A actually causes B?'\n\n**2. Propose Reverse Causation:**\n'Maybe B causes A instead. People who succeed might afford X, rather than X causing success.'\n\n**3. Identify Confounding Variables:**\n'There's a third variable that explains both. For example...'\n\n**4. Question the Mechanism:**\n'Even if correlated, there's no plausible explanation for how A would cause B.'\n\n**5. Show Study Limitations:**\n'This is observational, not experimental. It can't establish causation by design.'\n\n**Example Attack:**\n'My opponent says college causes higher income because college graduates earn more. But that's correlation. People who attend college also tend to come from wealthier families and have higher test scores before college. Maybe those factors—not college itself—explain the income difference.'",
        keyPoints: [
          "Demand experimental evidence for causation",
          "Propose reverse causation or confounding variables",
          "Question whether a plausible mechanism exists",
        ],
      },
      {
        type: "question",
        id: "l07-06-q2",
        question: "Your opponent claims: 'Married people live longer than unmarried people, so marriage causes better health.' What's the best response?",
        options: [
          { id: "a", text: "Accept that marriage causes health" },
          { id: "b", text: "Point out that healthier people might be more likely to marry, and that lifestyle factors might explain both" },
          { id: "c", text: "Claim marriage actually causes worse health" },
          { id: "d", text: "Ignore the claim" }
        ],
        correctAnswer: "b",
        explanation: "The best response identifies alternative explanations: reverse causation (healthier people may be more attractive partners) and confounding variables (lifestyle, income, social support might cause both marriage and health). The correlation alone doesn't prove marriage causes health benefits.",
      },
      {
        type: "content",
        title: "Making Defensible Causal Arguments",
        content: "When you need to make causal claims, do it carefully:\n\n**1. Use Appropriate Language:**\n• Weak: 'X is associated with Y'\n• Moderate: 'X may contribute to Y'\n• Strong: 'X causes Y' (only with strong evidence)\n\n**2. Cite Strong Evidence:**\nRandomized controlled trials > observational studies with controls > simple correlations\n\n**3. Explain the Mechanism:**\nDon't just cite data—explain how X causes Y.\n\n**4. Address Alternatives:**\nAcknowledge and respond to potential confounding factors.\n\n**5. Acknowledge Limitations:**\nBe honest about evidence strength. 'While we can't prove causation definitively, the evidence strongly suggests...'\n\n**Strong Causal Argument Example:**\n'Smoking causes lung cancer. This isn't just correlation—we have randomized studies in animals, cellular mechanisms showing how tobacco damages lung tissue, dose-response relationships (more smoking = more cancer), and the effect disappears when exposure stops. No third variable explains all this evidence.'",
        keyPoints: [
          "Match language strength to evidence strength",
          "Explain the causal mechanism",
          "Address potential confounding variables",
        ],
      },
      {
        type: "content",
        title: "Conclusion: The Causation Standard",
        content: "You now understand one of the most important distinctions in evidence evaluation: correlation versus causation.\n\n**Key Takeaways:**\n• Correlation means things occur together; causation means one causes the other\n• Correlation doesn't prove causation—beware reverse causation and confounding\n• Causation requires temporal sequence, mechanism, controlled evidence, and ruling out alternatives\n• Attack causal claims by proposing alternatives and demanding experimental evidence\n• Make causal claims carefully with appropriate language and acknowledgment of limitations\n\n**Looking Ahead:**\nIn the final lesson of this unit, we'll review all the logic and bias concepts covered.\n\n**Practice Challenge:**\nFind a news article that implies causation. Is the evidence actually causal or just correlational? What alternative explanations might exist?",
        keyPoints: [
          "Correlation ≠ causation",
          "Multiple explanations exist for correlations",
          "Causation requires much stronger evidence",
        ],
      },
    ],
  },
  {
    lessonId: "l07-07",
    pages: [
      {
        type: "content",
        title: "Introduction: Unit 7 Review",
        content: "Congratulations on completing Unit 7! This unit focused on logic and bias—developing your ability to evaluate arguments critically and avoid common reasoning errors.\n\nIn this review lesson, we'll consolidate everything you've learned: bias detection, false dichotomy, the Toulmin model, slippery slope, and correlation versus causation. These tools will help you both construct stronger arguments and identify weaknesses in opponent reasoning.",
      },
      {
        type: "content",
        title: "Review: Bias Detection",
        content: "**Types of Bias:**\n• Funding bias: following the money\n• Selection bias: what's included/excluded\n• Confirmation bias: seeking supporting evidence\n• Political/ideological bias: worldview shaping perspective\n• Survivorship bias: focusing on successes only\n\n**Detection Strategies:**\n• Check who funded research\n• Notice what's included AND excluded\n• Identify organizational orientation\n• Watch for loaded language\n\n**Working With Biased Sources:**\n• Acknowledge bias rather than hiding it\n• Triangulate across perspectives\n• Separate raw data from conclusions\n• Highlight against-interest admissions\n\n**Your Own Biases:**\n• Actively seek opposing views\n• Apply equal scrutiny to all evidence\n• Ask: What would change my mind?",
        keyPoints: [
          "Multiple types of bias affect sources",
          "Acknowledge and account for bias",
          "Against-interest admissions are especially credible",
        ],
      },
      {
        type: "content",
        title: "Review: False Dichotomy and Slippery Slope",
        content: "**False Dichotomy:**\n• Presents only two options when more exist\n• Pattern: 'Either A or B'—ignoring C, D, E\n• Respond by introducing the hidden alternatives\n• Test: Are there genuinely no other possibilities?\n• Some dichotomies are real (legal verdicts, final votes)\n\n**Slippery Slope:**\n• Claims one action leads inevitably to extreme consequences\n• Fallacious when chain is assumed without evidence\n• Valid when evidence supports the progression\n• Respond by demanding evidence for each link\n• Show stopping points exist, cite counter-examples\n\n**Key Distinction:**\nFalse dichotomy hides options in the present.\nSlippery slope assumes inevitability in the future.",
        keyPoints: [
          "False dichotomy: introduce hidden alternatives",
          "Slippery slope: demand evidence for causal chain",
          "Both can be valid or fallacious depending on evidence",
        ],
      },
      {
        type: "content",
        title: "Review: The Toulmin Model",
        content: "**The Six Components:**\n1. Claim: What you're trying to prove\n2. Data/Grounds: Evidence supporting the claim\n3. Warrant: Why the data proves the claim\n4. Backing: Support for the warrant\n5. Qualifier: Certainty level (probably, likely)\n6. Rebuttal: Exceptions and limitations\n\n**Using Toulmin:**\n• Build arguments: Use as a checklist for completeness\n• Analyze arguments: Identify and target weak components\n• Attack warrants: Often the most vulnerable element\n\n**Key Insight:**\nWarrants are most commonly missing. Always ask: 'Why does this evidence prove that claim?' If the answer isn't explicit, the argument is incomplete.",
        keyPoints: [
          "Six components form complete arguments",
          "Warrants are often implicit—make them explicit",
          "Target the weakest component in attacks",
        ],
      },
      {
        type: "question",
        id: "l07-07-q1",
        question: "Your opponent argues: 'Test scores went up after we implemented the new curriculum, so the curriculum works.' What's missing from this argument?",
        options: [
          { id: "a", text: "A claim" },
          { id: "b", text: "Data" },
          { id: "c", text: "A warrant explaining why the correlation proves causation, ruling out alternative explanations" },
          { id: "d", text: "Nothing—it's complete" }
        ],
        correctAnswer: "c",
        explanation: "The argument has a claim (curriculum works) and data (scores went up), but lacks a warrant explaining why the correlation proves causation. Alternative explanations exist: maybe students matured, teachers improved, tests got easier, or other changes occurred simultaneously. The causal connection is assumed, not demonstrated.",
      },
      {
        type: "content",
        title: "Review: Correlation vs Causation",
        content: "**Correlation:**\n• Things occurring together statistically\n• Doesn't indicate causal direction\n• Can exist without any causal connection\n\n**Why Correlation ≠ Causation:**\n• Reverse causation (B might cause A)\n• Third variable (something else causes both)\n• Coincidence (random correlation)\n\n**Establishing Causation Requires:**\n• Temporal sequence (cause before effect)\n• Plausible mechanism (logical explanation)\n• Controlled experiments (randomized trials)\n• Ruling out alternatives (controlling confounders)\n• Replication (consistent across studies)\n\n**Attack Strategy:**\n• Demand experimental evidence\n• Propose alternative explanations\n• Question the mechanism",
        keyPoints: [
          "Correlation means occurring together; not causation",
          "Multiple explanations exist for any correlation",
          "Causation requires experimental evidence or strong controls",
        ],
      },
      {
        type: "question",
        id: "l07-07-q2",
        question: "Which is a FALSE dichotomy?",
        options: [
          { id: "a", text: "Either the defendant is guilty or not guilty" },
          { id: "b", text: "Either you're with us or you're against us" },
          { id: "c", text: "Either the bill passes or it doesn't" },
          { id: "d", text: "The light is either on or off" }
        ],
        correctAnswer: "b",
        explanation: "'Either you're with us or you're against us' is a false dichotomy because neutral positions, partial agreement, and other stances exist. The legal verdict (guilty/not guilty), the vote outcome (passes/doesn't), and the light switch state (on/off) are genuinely binary.",
      },
      {
        type: "content",
        title: "Integrating the Skills: A Complete Analysis Example",
        content: "Let's see how all Unit 7 skills work together on a real argument:\n\n**The Claim:**\n'Violent video games cause real-world violence. Studies show people who play violent games are more aggressive. We must ban them or accept more mass shootings.'\n\n**Bias Check:**\n• Who funds research on both sides?\n• Are advocacy groups driving the narrative?\n• What does 'aggression' mean—lab measures or real violence?\n\n**False Dichotomy:**\n• 'Ban or accept mass shootings' ignores many alternatives: age ratings, parental controls, mental health support, research-based regulation\n\n**Toulmin Analysis:**\n• Claim: Games cause violence\n• Data: Correlation with aggression in studies\n• Missing Warrant: Why does lab-measured aggression predict real violence?\n• Missing Backing: What mechanism connects game play to mass shootings?\n\n**Correlation vs. Causation:**\n• The studies show correlation at best\n• Reverse causation: Maybe aggressive people prefer violent games\n• Confounders: Age, gender, other factors affect both\n\n**Complete Response:**\n'This argument has multiple problems...'",
        keyPoints: [
          "Apply all Unit 7 skills to complex arguments",
          "Check for bias, fallacies, and causation errors",
          "Build comprehensive responses using multiple tools",
        ],
      },
      {
        type: "content",
        title: "Connecting the Concepts",
        content: "These tools work together for comprehensive argument analysis:\n\n**Evaluating Sources:**\nCheck for bias → Evaluate evidence quality → Distinguish correlation from causation\n\n**Analyzing Arguments:**\nBreak into Toulmin components → Find missing warrants → Check for fallacies (false dichotomy, slippery slope)\n\n**Building Arguments:**\nStart with claim → Gather unbiased evidence → Build complete Toulmin structure → Avoid fallacies → Acknowledge limitations\n\n**Common Combinations:**\n• Biased source + correlation = especially weak\n• Missing warrant + slippery slope = two problems\n• Complete Toulmin + causal evidence = very strong\n\n**The Meta-Skill:**\nThese tools develop critical thinking that applies everywhere—not just debate, but news consumption, workplace decisions, and daily reasoning.",
      },
      {
        type: "content",
        title: "Conclusion: Ready for Unit 8",
        content: "You've completed Unit 7 and now have sophisticated tools for evaluating logic and detecting bias!\n\n**Unit 7 Summary:**\n• Bias comes in many forms; acknowledge and account for it\n• False dichotomy hides options; introduce alternatives\n• Toulmin model provides complete argument framework\n• Slippery slope requires evidence for causal chain\n• Correlation doesn't prove causation; demand experimental evidence\n• These skills apply to all critical thinking\n\n**Looking Ahead:**\nUnit 8 focuses on Research and Appeals—you'll learn about anticipating objections, evaluating statistical evidence, understanding emotional appeals, and finding quality sources.\n\n**Keep Practicing:**\nEvery news article, every conversation, every decision is an opportunity to apply these critical thinking tools. The more you use them, the more automatic they become.",
        keyPoints: [
          "Multiple tools for evaluating logic and bias",
          "Apply to argument construction and analysis",
          "Skills transfer to all critical thinking situations",
        ],
      },
    ],
  },
];
