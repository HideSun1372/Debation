import { MultiPageLesson } from "./types";

export const UNIT_06_LESSONS: MultiPageLesson[] = [
  {
    lessonId: "l06-01",
    pages: [
      {
        type: "content",
        title: "Introduction: Understanding Ad Hominem Attacks",
        content: "Welcome to a crucial lesson on one of the most common—and most tempting—logical fallacies: the ad hominem attack. Latin for 'to the person,' ad hominem occurs when someone attacks the person making an argument rather than the argument itself.\n\nYou've seen it everywhere: political debates where candidates attack each other's character, online discussions that devolve into personal insults, and even academic settings where someone's credentials are questioned instead of their evidence.\n\nIn this lesson, you'll learn to recognize ad hominem attacks in all their forms, understand why they're logically invalid, and develop strategies for responding when opponents use them against you—while keeping your own arguments clean and focused on ideas.",
      },
      {
        type: "content",
        title: "What Makes Ad Hominem a Fallacy",
        content: "An ad hominem attack is a logical fallacy because the character, background, or personal attributes of the person making an argument have no bearing on whether the argument itself is valid.\n\n**The Core Problem:**\nEven deeply flawed people can make valid arguments. Even experts can be wrong. The truth or falsity of a claim depends on evidence and logic, not on who's speaking.\n\n**Example of the Fallacy:**\n• Claim: 'We should invest in renewable energy because fossil fuel supplies are finite and climate change poses existential risks.'\n• Ad Hominem Response: 'You only say that because you're a liberal who hates business.'\n\nNotice that the response doesn't address the finite supply argument or the climate risks. It attacks the speaker's perceived political identity instead.\n\n**Why It's Tempting:**\nAd hominem attacks feel satisfying. They can embarrass opponents and play well to audiences who already disagree with the target. But they don't actually refute anything—and informed judges will penalize you for using them.",
        keyPoints: [
          "Ad hominem attacks the person, not the argument",
          "A speaker's character doesn't determine argument validity",
          "These attacks don't actually refute claims",
        ],
      },
      {
        type: "content",
        title: "Types of Ad Hominem Attacks",
        content: "Ad hominem comes in several varieties, each with its own flavor of misdirection:\n\n**1. Abusive Ad Hominem:**\nDirect insults or attacks on character.\n'You're an idiot, so your argument must be wrong.'\n\n**2. Circumstantial Ad Hominem:**\nSuggesting someone's circumstances bias their position.\n'Of course you support higher teacher pay—you're a teacher!'\n(Note: This doesn't address whether higher pay is actually justified.)\n\n**3. Tu Quoque (You Too):**\nAccusing the opponent of hypocrisy.\n'You say smoking is dangerous, but you smoke yourself!'\n(The speaker's behavior doesn't change whether smoking is dangerous.)\n\n**4. Guilt by Association:**\nLinking someone to a disliked group or person.\n'That's the same argument Hitler used.'\n(Even if true, it doesn't make the argument wrong.)\n\n**5. Poisoning the Well:**\nDiscrediting someone before they even speak.\n'Before my opponent speaks, remember that she works for a corporation with a clear agenda.'",
        keyPoints: [
          "Abusive: direct insults",
          "Circumstantial: attacking motivations or circumstances",
          "Tu Quoque: accusations of hypocrisy",
          "Guilt by Association: linking to disliked groups",
          "Poisoning the Well: preemptive discrediting",
        ],
      },
      {
        type: "question",
        id: "l06-01-q1",
        question: "Which type of ad hominem attack is this: 'You support immigration reform, but your grandparents were immigrants—of course you'd say that!'",
        options: [
          { id: "a", text: "Abusive Ad Hominem" },
          { id: "b", text: "Circumstantial Ad Hominem" },
          { id: "c", text: "Tu Quoque" },
          { id: "d", text: "Poisoning the Well" }
        ],
        correctAnswer: "b",
        explanation: "This is circumstantial ad hominem because it attacks the speaker's circumstances (having immigrant grandparents) rather than addressing the actual merits of immigration reform policies. The speaker's family background doesn't determine whether their policy arguments are valid.",
      },
      {
        type: "content",
        title: "When Personal Information IS Relevant",
        content: "Here's where it gets nuanced: sometimes a person's background IS relevant to evaluating their claims. The key is distinguishing between attacking credibility versus attacking the argument.\n\n**Legitimate Credibility Questions:**\n• 'This climate study was funded by an oil company, which creates a potential conflict of interest we should consider.'\n• 'The witness has been convicted of perjury three times, which affects their reliability as a source.'\n• 'The author has no credentials in medicine—they're a celebrity, not a doctor.'\n\n**Why These Are Different:**\nThese examples don't say 'therefore they're wrong.' They say 'therefore we should scrutinize their evidence more carefully.' The argument still stands or falls on its own merits.\n\n**The Test:**\nAsk yourself: 'Am I using personal information to dismiss the argument, or to evaluate the weight of evidence?' If you're still engaging with the substance, you're on solid ground. If you're using it to avoid engaging, it's ad hominem.\n\n**In Debate:**\nYou can question source credibility, but you should also address the substance. 'This study has a conflict of interest AND here's why the methodology is flawed' is much stronger than just attacking the source.",
        keyPoints: [
          "Credibility questions are different from ad hominem",
          "Question sources, but still address substance",
          "Personal info can affect evidence weight, not argument validity",
        ],
      },
      {
        type: "content",
        title: "Responding to Ad Hominem Attacks",
        content: "When opponents attack you personally instead of your arguments, you have several effective response strategies:\n\n**1. Name the Fallacy:**\n'My opponent has attacked my character rather than addressing my argument. Let me refocus on the actual issue...'\nThis signals to judges that you recognize the tactic.\n\n**2. Redirect to Substance:**\n'Whether I'm [whatever they said] is irrelevant. What matters is whether my evidence is accurate. Let's examine that...'\n\n**3. Use It as Evidence:**\n'Notice that my opponent can't refute my actual argument—they've resorted to personal attacks. This suggests my case is strong.'\n\n**4. Brief Acknowledgment, Then Move On:**\n'I'll let the judge evaluate that characterization. Meanwhile, my argument stands unrebutted...'\n\n**What NOT to Do:**\n• Don't get defensive or emotional\n• Don't attack back (escalation helps no one)\n• Don't spend too much time on it\n• Don't ignore it completely if it was severe\n\n**The Goal:**\nMake the ad hominem cost your opponent, not you. Judges notice when debaters can't respond substantively.",
      },
      {
        type: "question",
        id: "l06-01-q2",
        question: "What is the most effective way to respond to an ad hominem attack in a debate?",
        options: [
          { id: "a", text: "Attack your opponent's character in return" },
          { id: "b", text: "Ignore it completely and never mention it" },
          { id: "c", text: "Get visibly angry to show you're offended" },
          { id: "d", text: "Name the fallacy briefly and redirect to the substance" }
        ],
        correctAnswer: "d",
        explanation: "The best response is to briefly identify the fallacy (showing judges you recognize the tactic), then redirect to the substantive argument. This makes the attack cost your opponent while keeping you focused on winning the debate on the merits.",
      },
      {
        type: "content",
        title: "Keeping Your Own Arguments Clean",
        content: "The best debaters attack arguments, not people. Here's how to keep your refutations substantive:\n\n**Instead of Attacking the Person:**\n• Attack their evidence: 'This study has methodological flaws...'\n• Attack their reasoning: 'The logic here doesn't follow because...'\n• Attack their impacts: 'Even if true, this wouldn't matter because...'\n• Provide counter-evidence: 'Contrary research shows...'\n\n**Phrases to Avoid:**\n• 'My opponent is lying/stupid/ignorant...'\n• 'Only someone who doesn't understand would think...'\n• 'That's what [disliked group] believes...'\n• 'Of course they'd say that, they're a...'\n\n**Phrases to Use:**\n• 'This argument fails because...'\n• 'The evidence doesn't support this claim...'\n• 'The reasoning here contains a flaw...'\n• 'This conclusion doesn't follow from the premises...'\n\n**The Professional Standard:**\nImagine a judge reading a transcript of your speech. Would you be proud of how you engaged with your opponent? The best debaters are tough on arguments and respectful toward people.",
        keyPoints: [
          "Attack evidence, reasoning, and impacts—not people",
          "Avoid personal characterizations",
          "Focus on the argument's logical flaws",
        ],
      },
      {
        type: "content",
        title: "Ad Hominem in the Real World",
        content: "Understanding ad hominem prepares you for much more than debate tournaments:\n\n**Politics:**\nPolitical discourse is riddled with ad hominem. Learning to recognize it helps you evaluate claims based on evidence rather than tribal loyalty. When a politician attacks their opponent's character, ask: 'But is the policy actually good or bad?'\n\n**Social Media:**\nOnline discussions often devolve into personal attacks. You can model better discourse by always engaging with ideas rather than identities.\n\n**Workplace:**\nIn meetings, ad hominem might be subtle: 'Well, the marketing team always overestimates...' Redirect to data: 'Let's look at the actual projections.'\n\n**Personal Relationships:**\nEven in personal conflicts, attacking character ('You always...' 'You're so...') is less productive than addressing specific behaviors or issues.\n\n**Media Literacy:**\nNews commentary often includes ad hominem. Training yourself to spot it helps you think more clearly about the issues being discussed.",
      },
      {
        type: "content",
        title: "Conclusion: Ideas Over Identities",
        content: "Congratulations on completing this lesson on ad hominem attacks! You now have tools to recognize this fallacy, respond to it effectively, and keep your own arguments focused on substance.\n\n**Key Takeaways:**\n• Ad hominem attacks the person instead of the argument\n• It comes in many forms: abusive, circumstantial, tu quoque, guilt by association, and poisoning the well\n• Personal credibility can be relevant, but it doesn't invalidate arguments\n• Respond by naming the fallacy and redirecting to substance\n• Keep your own arguments clean by attacking evidence and reasoning, not people\n\n**Looking Ahead:**\nIn upcoming lessons, we'll explore more fallacies and logical errors, building your toolkit for both attacking weak arguments and defending against unfair tactics.\n\n**Practice Thought:**\nOver the next few days, notice ad hominem in media, conversations, and online discussions. How often do people attack ideas versus attacking people? This awareness is the first step to better discourse.",
        keyPoints: [
          "Ad hominem is attacking the person, not the argument",
          "Respond by refocusing on substance",
          "Keep your own arguments focused on evidence and logic",
        ],
      },
    ],
  },
  {
    lessonId: "l06-02",
    pages: [
      {
        type: "content",
        title: "Introduction: Speed vs Clarity in Debate",
        content: "One of the most important skills in debate is finding the right balance between speed and clarity. Speak too slowly and you won't cover enough ground; speak too fast and judges can't follow your arguments.\n\nThis tension is especially pronounced in competitive debate, where different circuits and judges have vastly different expectations. Some judges prefer conversational delivery; others can handle rapid-fire argumentation. Some formats reward covering many arguments; others prioritize depth over breadth.\n\nIn this lesson, you'll learn how to calibrate your speaking speed to different contexts, develop techniques for speaking quickly while remaining clear, and understand when speed helps your case and when it hurts.",
      },
      {
        type: "content",
        title: "Why Speed Matters in Debate",
        content: "Time is a scarce resource in debate. Every format gives you limited minutes to present your case, and there's always more you could say.\n\n**The Speed Advantage:**\n• More arguments means more chances to win\n• Covering more ground can overwhelm opponents\n• Efficient use of time shows preparation and mastery\n• You can make more responses in rebuttals\n\n**The Speed Risk:**\n• Judges can't evaluate arguments they don't catch\n• Unclear delivery frustrates audiences\n• Speed without substance is empty\n• Some judges explicitly penalize excessive speed\n\n**The Reality:**\nMost successful debaters speak faster than conversational pace but slower than auctioneers. The goal is controlled efficiency—covering more ground without sacrificing comprehension.\n\n**Format Differences:**\n• Policy debate: Often very fast ('spreading')\n• Lincoln-Douglas: Varies by circuit (traditional vs. national)\n• Public Forum: Generally slower, lay-audience friendly\n• Parliamentary: Moderate pace, emphasis on engagement",
        keyPoints: [
          "Speed lets you cover more arguments",
          "But clarity ensures judges catch your points",
          "Different formats and circuits have different norms",
        ],
      },
      {
        type: "content",
        title: "Understanding Your Judge",
        content: "The most important factor in your speed decision is your judge. A brilliant argument delivered at a speed the judge can't follow is worthless.\n\n**Lay Judges:**\nParents, community volunteers, and non-debate adults typically prefer conversational pace (120-150 words per minute). Slow down, explain terms, and focus on persuasion over technicality.\n\n**Flow Judges:**\nExperienced debaters and coaches who take detailed notes ('flow') can handle faster delivery (180-250+ words per minute). They expect signposting and technical precision.\n\n**Parent Judges in Varsity Rounds:**\nA common challenge. Adjust your speed downward even if you usually go fast.\n\n**How to Assess:**\n• Ask before the round if appropriate\n• Watch their note-taking—if they're struggling, slow down\n• Observe their facial expressions for confusion\n• Default to slower with unfamiliar judges\n\n**The Adaptation Test:**\nGreat debaters 'code-switch' between speeds based on context. If you can only debate one way, you're limiting yourself.",
        keyPoints: [
          "Match your speed to your judge's ability to follow",
          "Lay judges: conversational pace",
          "Flow judges: faster is acceptable",
          "When in doubt, slow down",
        ],
      },
      {
        type: "question",
        id: "l06-02-q1",
        question: "What should you do if you notice your judge struggling to take notes during your speech?",
        options: [
          { id: "a", text: "Speed up to fit more arguments in" },
          { id: "b", text: "Slow down and speak more clearly" },
          { id: "c", text: "Ignore them and maintain your planned speed" },
          { id: "d", text: "Stop giving arguments entirely" }
        ],
        correctAnswer: "b",
        explanation: "If your judge is struggling to take notes, you should slow down and speak more clearly. Arguments that judges can't follow won't help you win the round, no matter how good they are. Adapting to your judge is a crucial debate skill.",
      },
      {
        type: "content",
        title: "Techniques for Speaking Quickly AND Clearly",
        content: "Speed and clarity aren't mutually exclusive—with practice, you can have both. Here are proven techniques:\n\n**1. Enunciation Over Speed:**\nClear consonants and complete word endings matter more than raw pace. 'Going to' spoken clearly beats 'gonna' mumbled faster.\n\n**2. Strategic Breathing:**\nTake quick breaths at natural pauses (between arguments, after key points). Don't gasp mid-sentence.\n\n**3. Signposting:**\nClear labels help listeners track structure even at speed.\n'FIRST...' 'SECOND...' 'Now to their case...'\n\n**4. Emphasis Variation:**\nSlow slightly for key claims, speed through transitions. Not every word deserves equal time.\n\n**5. Practice with Purpose:**\n• Read evidence aloud daily\n• Time yourself and gradually increase speed\n• Record and listen for clarity\n• Practice until fast feels natural\n\n**6. Physical Preparation:**\n• Warm up your mouth before rounds\n• Stay hydrated (dry mouth = unclear speech)\n• Stand properly for optimal breath support\n\n**The Rule:**\nYou should only speak as fast as you can speak clearly. Test your limit, then back off 10%.",
        keyPoints: [
          "Prioritize enunciation over raw speed",
          "Use signposting to help listeners follow structure",
          "Practice to make faster speeds feel natural",
        ],
      },
      {
        type: "content",
        title: "The Spreading Debate",
        content: "In some circuits, 'spreading' (speed-reading) is common and accepted. In others, it's viewed negatively. Understanding this divide is crucial.\n\n**What is Spreading?**\nSpreading means reading prepared material at extremely high speeds (350+ words per minute), often at the edge of comprehensibility. It originated in policy debate as a way to introduce more arguments.\n\n**Arguments For Spreading:**\n• Maximizes information in limited time\n• Creates strategic complexity\n• Tests technical skills and preparation\n• Levels playing field (everyone can learn it)\n\n**Arguments Against Spreading:**\n• Excludes lay judges and new debaters\n• Prioritizes quantity over quality\n• Reduces persuasive skill development\n• Alienates general audiences\n\n**The Reality:**\nSpreading is a tool. In circuits where it's expected, not spreading may disadvantage you. In traditional circuits, spreading may actively hurt your speaks and ballots.\n\n**Practical Advice:**\n• Learn to spread if you compete on the national circuit\n• Learn to slow down for traditional rounds\n• Flexibility serves you better than ideology\n• Never spread at someone who can't understand you",
      },
      {
        type: "question",
        id: "l06-02-q2",
        question: "Why is it important for debaters to be able to adjust their speaking speed?",
        options: [
          { id: "a", text: "Different judges and circuits have different expectations" },
          { id: "b", text: "Speaking speed has no impact on debate success" },
          { id: "c", text: "Judges always prefer the fastest speakers" },
          { id: "d", text: "Speed is only relevant in online debates" }
        ],
        correctAnswer: "a",
        explanation: "Adaptability is crucial because different judges (lay vs. flow) and different circuits (traditional vs. national) have vastly different expectations for speaking pace. A debater who can only speak at one speed is limiting their success in diverse competitive environments.",
      },
      {
        type: "content",
        title: "Finding Your Optimal Speed",
        content: "Everyone has a natural speaking pace, but you can expand your range with deliberate practice.\n\n**Assess Your Baseline:**\nRecord yourself reading a passage for one minute, then count words. This is your current comfortable pace.\n\n**Benchmark Speeds:**\n• Casual conversation: 120-150 WPM\n• Presentation pace: 150-170 WPM\n• Moderate debate: 170-200 WPM\n• Fast debate: 200-250 WPM\n• Spreading: 250-400+ WPM\n\n**Expansion Exercises:**\n1. Read the same passage at increasing speeds\n2. Stop when clarity degrades\n3. Practice at that threshold until it becomes easy\n4. Gradually push the threshold higher\n\n**The Clarity Test:**\nCan someone unfamiliar with your content understand you? Record yourself and play it for friends or family. If they can't follow, you're too fast.\n\n**Individual Variation:**\nSome people naturally speak clearly at high speeds; others plateau earlier. Know your personal limits and work within them while gradually expanding.",
      },
      {
        type: "content",
        title: "Strategic Speed Choices",
        content: "Beyond adapting to judges, speed itself can be a strategic choice:\n\n**When to Go Faster:**\n• Covering many responses in rebuttal\n• Reading through evidence you've set up with explanation\n• Transitioning between major points\n• When your opponent drops arguments (make them work to track)\n\n**When to Slow Down:**\n• Introducing your most important claims\n• Explaining complex mechanisms\n• When you want something to land emotionally\n• In conclusions and voting issues\n• When judge looks confused or stops writing\n\n**The Emphasis Principle:**\nSpeed variation itself communicates importance. If you slow for one sentence in a fast speech, that sentence stands out. If you speed through transitions, listeners know to wait for the next major point.\n\n**Cross-Examination:**\nAlmost always conversational pace. CX is about clarity, control, and listening—not speed.",
        keyPoints: [
          "Speed up for transitions and responses",
          "Slow down for key claims and complex ideas",
          "Speed variation emphasizes important points",
        ],
      },
      {
        type: "content",
        title: "Conclusion: Controlled Efficiency",
        content: "You've now learned to think strategically about speaking speed—not as a single setting, but as a variable you control based on context.\n\n**Key Takeaways:**\n• Speed lets you cover more ground, but clarity ensures your arguments count\n• Always adapt to your judge's ability to follow\n• Techniques like signposting and enunciation allow both speed and clarity\n• Spreading is circuit-specific—learn when it helps and when it hurts\n• Practice expanding your comfortable speed range\n• Use speed variation strategically to emphasize key points\n\n**Looking Ahead:**\nIn the next lesson, we'll examine how to evaluate source credibility—a crucial skill for both building and attacking arguments.\n\n**Practice Challenge:**\nRecord yourself giving a two-minute speech. Listen back: can you understand every word? Now try it 10% faster. Where does clarity break down? That's your growth edge.",
        keyPoints: [
          "Balance speed with clarity based on context",
          "Adapt to your judge and circuit",
          "Practice to expand your comfortable range",
        ],
      },
    ],
  },
  {
    lessonId: "l06-03",
    pages: [
      {
        type: "content",
        title: "Introduction: Evaluating Source Credibility",
        content: "Not all sources are created equal. In debate—and in life—the credibility of your sources can make or break your arguments. A study from a prestigious university carries more weight than a random blog post. An expert's opinion matters more than an anonymous commenter's.\n\nBut evaluating credibility isn't always straightforward. Experts can have biases. Prestigious institutions can make mistakes. Popular sources can be misleading. Learning to critically assess sources is one of the most valuable skills you'll develop.\n\nIn this lesson, you'll learn systematic methods for evaluating source credibility, including author credentials, publication quality, recency, and potential biases. By the end, you'll be able to both strengthen your own evidence and attack weak sources used by opponents.",
      },
      {
        type: "content",
        title: "The CRAAP Test: A Framework for Evaluation",
        content: "Librarians and researchers use the CRAAP test—a handy acronym for evaluating sources:\n\n**Currency: How Recent?**\n• When was this published or updated?\n• Is the information current enough for your topic?\n• Scientific fields change; a 2010 study may be outdated\n\n**Relevance: How Applicable?**\n• Does this directly address your claim?\n• Is it the right type of evidence for your argument?\n• Is it at the appropriate level (too technical? too basic?)\n\n**Authority: Who's Behind It?**\n• What are the author's credentials?\n• What institution published this?\n• Is contact information provided?\n\n**Accuracy: Is It Reliable?**\n• Is evidence provided for claims?\n• Has it been peer-reviewed?\n• Can you verify the information elsewhere?\n\n**Purpose: Why Does It Exist?**\n• Is this meant to inform, persuade, sell, or entertain?\n• Are there potential conflicts of interest?\n• Is the point of view objective or biased?",
        keyPoints: [
          "Currency: Is it recent enough?",
          "Relevance: Does it apply to your claim?",
          "Authority: Are the authors qualified?",
          "Accuracy: Is it verifiable?",
          "Purpose: What's the motivation?",
        ],
      },
      {
        type: "content",
        title: "Evaluating Author Credentials",
        content: "The person behind the source matters. Here's how to assess author credibility:\n\n**Academic Credentials:**\n• What degrees do they hold?\n• Are those degrees relevant to the topic?\n• A PhD in chemistry doesn't make someone an expert on economics\n\n**Professional Experience:**\n• What's their work history?\n• Have they practiced in the field?\n• Are they currently active or retired decades ago?\n\n**Publication Record:**\n• Have they published other peer-reviewed work?\n• Are they cited by other scholars?\n• Do they have a track record on this topic?\n\n**Institutional Affiliation:**\n• Do they work at a reputable university or organization?\n• Does the institution have expertise in this area?\n• Note: Affiliation adds credibility but doesn't guarantee correctness\n\n**Red Flags:**\n• No credentials listed\n• Credentials in unrelated fields\n• Self-published without peer review\n• Selling products related to their claims\n• Anonymous authors",
        keyPoints: [
          "Check if credentials match the topic",
          "Look for institutional affiliations",
          "Beware of credentials in unrelated fields",
        ],
      },
      {
        type: "question",
        id: "l06-03-q1",
        question: "A blog post about vaccine safety is written by someone with a PhD in Art History. What should you conclude?",
        options: [
          { id: "a", text: "The PhD makes them an authority on all topics" },
          { id: "b", text: "Their credentials aren't relevant to medical claims" },
          { id: "c", text: "Art historians are often experts in vaccines" },
          { id: "d", text: "Blog posts are always unreliable" }
        ],
        correctAnswer: "b",
        explanation: "Credentials matter, but they must be relevant to the topic. A PhD in Art History doesn't provide expertise in vaccine safety, which requires training in immunology, medicine, or related biological sciences. This doesn't mean their claims are automatically wrong, but their credentials don't support their authority on this subject.",
      },
      {
        type: "content",
        title: "Evaluating Publication Quality",
        content: "Where something is published tells you a lot about its reliability:\n\n**Peer-Reviewed Journals:**\n• Highest standard for academic claims\n• Other experts reviewed before publication\n• Not infallible, but rigorous\n• Examples: Nature, JAMA, American Economic Review\n\n**Reputable News Sources:**\n• Established editorial standards\n• Fact-checking processes\n• Corrections when wrong\n• Examples: AP, Reuters, major newspapers\n\n**Think Tanks and Policy Organizations:**\n• Vary widely in quality and bias\n• Some are rigorous; others are advocacy\n• Check their funding sources\n• Examples range from Brookings to partisan advocacy groups\n\n**Government Sources:**\n• Often reliable for data and statistics\n• May have political influences\n• Check for the agency's expertise area\n\n**Blogs, Social Media, Wikipedia:**\n• Lower reliability threshold\n• Can be starting points, not endpoints\n• Always verify with primary sources\n• Wikipedia cites sources—check those instead",
        keyPoints: [
          "Peer-reviewed journals: highest reliability",
          "Established news: editorial standards matter",
          "Think tanks: check funding and bias",
          "Blogs/social: verify with better sources",
        ],
      },
      {
        type: "content",
        title: "The Importance of Recency",
        content: "How recent is recent enough? It depends on the field and claim:\n\n**Fast-Moving Fields:**\n• Technology: Information from 5 years ago may be obsolete\n• Medicine: Treatment recommendations change regularly\n• Current events: Last month's analysis may miss new developments\n• Climate science: Data updates annually\n\n**Slower-Moving Fields:**\n• Historical analysis: Older works may still be authoritative\n• Philosophy: Classic texts remain relevant\n• Fundamental science: Basic principles don't change quickly\n• Legal precedent: Old cases may still apply\n\n**Red Flags for Outdated Sources:**\n• Statistics from before major changes (pre/post COVID, for example)\n• Science from before key discoveries\n• Policy analysis from before law changes\n• Technology claims from before major innovations\n\n**How to Use Older Sources:**\n• Acknowledge the date: 'As of 2019...'\n• Check if newer research confirms or updates\n• Use for historical context, not current claims\n• Combine with recent sources when possible",
      },
      {
        type: "question",
        id: "l06-03-q2",
        question: "Which source would be MOST credible for a debate about current AI technology capabilities?",
        options: [
          { id: "a", text: "A 2015 academic paper on machine learning" },
          { id: "b", text: "A 2024 peer-reviewed study on AI capabilities" },
          { id: "c", text: "A 1990s textbook on artificial intelligence" },
          { id: "d", text: "A science fiction novel about AI" }
        ],
        correctAnswer: "b",
        explanation: "AI technology evolves rapidly, so recency is crucial. A 2024 peer-reviewed study would reflect current capabilities and research, while older academic sources (even good ones) would be outdated. A 1990s textbook would be severely outdated, and fiction isn't evidence at all.",
      },
      {
        type: "content",
        title: "Detecting Bias and Conflicts of Interest",
        content: "Every source has some perspective, but some biases are more problematic than others:\n\n**Funding Bias:**\n• Who paid for this research?\n• Studies funded by interested parties may be influenced\n• Example: Tobacco-funded research on smoking safety\n\n**Organizational Bias:**\n• What's the organization's mission?\n• Advocacy groups have positions to defend\n• Even universities have institutional interests\n\n**Author Bias:**\n• What has the author argued before?\n• Do they have financial interests?\n• Are they known for particular viewpoints?\n\n**How to Handle Bias:**\n• Acknowledge it: 'This source comes from an industry group, but the data is...'\n• Seek corroboration from independent sources\n• Use biased sources for factual data, not conclusions\n• Note when a biased source admits against interest\n\n**'Against Interest' Is Powerful:**\nWhen a source admits something contrary to their expected bias, it's especially credible. An oil company acknowledging climate risks carries extra weight precisely because of their bias.",
        keyPoints: [
          "Check funding sources for conflicts of interest",
          "Organizational mission reveals perspective",
          "Acknowledge bias rather than hide it",
          "Against-interest admissions are especially credible",
        ],
      },
      {
        type: "content",
        title: "Attacking Opponent Sources",
        content: "Source credibility attacks are a legitimate debate strategy. Here's how to do it effectively:\n\n**Direct Credential Attacks:**\n'Their source is a blogger with no medical training—not a credible authority on vaccine safety.'\n\n**Bias Attacks:**\n'This study was funded by the pharmaceutical company that makes this drug. There's an obvious conflict of interest.'\n\n**Outdated Source Attacks:**\n'This data is from 2012. The situation has changed dramatically since then—here's more recent evidence.'\n\n**Better Source Comparison:**\n'They cite a newspaper article; I cite the peer-reviewed study the article misquotes.'\n\n**Rules for Source Attacks:**\n• Be specific—name the problem\n• Don't just attack the source—explain why it matters\n• Have your own better sources ready\n• Don't attack every source (prioritize weak ones)\n\n**What's NOT a Valid Attack:**\n• 'I don't like that organization'\n• 'That source is liberal/conservative'\n• 'I've never heard of them'\n• Attacking the source instead of the evidence (ad hominem)",
      },
      {
        type: "content",
        title: "Conclusion: The Critical Consumer",
        content: "You've now developed a framework for evaluating source credibility—a skill that serves you in debate and throughout life.\n\n**Key Takeaways:**\n• Use the CRAAP test: Currency, Relevance, Authority, Accuracy, Purpose\n• Author credentials must be relevant to the topic\n• Publication venue indicates rigor and reliability\n• Recency matters most in fast-moving fields\n• Bias doesn't disqualify sources, but should be acknowledged\n• Attack weak opponent sources specifically and substantively\n\n**Looking Ahead:**\nIn the next lesson, we'll examine the strawman fallacy—when opponents misrepresent your arguments to attack weaker versions.\n\n**Practice Challenge:**\nFind a news article on a controversial topic. Apply the CRAAP test: Who wrote it? What's their background? What's the publication's reputation? When was it written? What might bias the coverage? This exercise builds automatic critical evaluation habits.",
        keyPoints: [
          "Apply the CRAAP test systematically",
          "Match credentials to topic",
          "Acknowledge and account for bias",
          "Attack weak sources specifically",
        ],
      },
    ],
  },
  {
    lessonId: "l06-04",
    pages: [
      {
        type: "content",
        title: "Introduction: The Strawman Fallacy",
        content: "Imagine building an opponent out of straw—a weak, flimsy version of the real thing. That's exactly what the strawman fallacy does to arguments. Instead of addressing what someone actually said, you distort their position into something easier to attack.\n\nStrawman arguments are everywhere in public discourse. Politicians mischaracterize opponent policies. Pundits attack caricatures of opposing views. Even well-meaning people sometimes argue against positions nobody actually holds.\n\nIn this lesson, you'll learn to recognize strawman arguments in all their forms, understand why they're both logically invalid and ethically problematic, and develop strategies for calling them out when opponents use them—while ensuring you accurately represent the positions you attack.",
      },
      {
        type: "content",
        title: "What Makes It a Strawman",
        content: "A strawman occurs when someone misrepresents an argument to make it easier to refute. The key elements:\n\n**1. Misrepresentation:**\nThe attacker changes, exaggerates, or oversimplifies the original position.\n\n**2. Easier Target:**\nThe distorted version is weaker and easier to attack than the real argument.\n\n**3. False Victory:**\nDefeating the strawman is presented as defeating the actual position.\n\n**Example:**\n• Original argument: 'We should have reasonable regulations on gun sales, like background checks.'\n• Strawman: 'My opponent wants to ban all guns and leave citizens defenseless!'\n\nNotice: The original said nothing about banning guns or leaving anyone defenseless. The strawman is much easier to attack but doesn't represent the actual position.\n\n**Why It's Fallacious:**\nEven a devastating attack on the strawman doesn't touch the original argument. You've won against a position nobody held.",
        keyPoints: [
          "Strawman misrepresents the opponent's actual position",
          "The distorted version is easier to attack",
          "Defeating the strawman doesn't defeat the real argument",
        ],
      },
      {
        type: "content",
        title: "Common Strawman Techniques",
        content: "Strawmen are built through several common distortion techniques:\n\n**Exaggeration:**\n• Actual: 'We should reduce carbon emissions.'\n• Strawman: 'They want to shut down all industry and return to caves.'\n\n**Oversimplification:**\n• Actual: 'Immigration policy should balance security with humanitarian concerns.'\n• Strawman: 'They support open borders with no restrictions.'\n\n**Taking Out of Context:**\nSelecting one part of a nuanced argument and treating it as the whole.\n\n**Attacking Weak Supporters:**\nFinding the most extreme person who holds a position and treating them as representative.\n'Some people who support X also believe Y (something crazy), therefore X is wrong.'\n\n**Assuming Hidden Motives:**\n'You say you support this policy, but really you just want...'\n\n**The Slippery Extension:**\nExtending someone's position to an extreme they didn't endorse.\n'If you believe X, then you must also believe Y and Z!'",
        keyPoints: [
          "Exaggeration: making positions seem more extreme",
          "Oversimplification: removing nuance",
          "Out of context: cherry-picking statements",
          "Weak supporters: attacking the worst examples",
        ],
      },
      {
        type: "question",
        id: "l06-04-q1",
        question: "Person A says: 'I think we should spend more on education.' Person B responds: 'So you want to bankrupt our country with unlimited education spending?' What fallacy did Person B commit?",
        options: [
          { id: "a", text: "Ad hominem" },
          { id: "b", text: "Strawman" },
          { id: "c", text: "False dichotomy" },
          { id: "d", text: "Appeal to authority" }
        ],
        correctAnswer: "b",
        explanation: "Person B committed a strawman fallacy by misrepresenting Person A's position. Person A said 'more spending' on education, not 'unlimited spending' that would 'bankrupt the country.' Person B created an exaggerated version that's easier to attack but doesn't represent what was actually said.",
      },
      {
        type: "content",
        title: "Why Strawman Is Problematic",
        content: "Beyond being logically invalid, strawman arguments cause real harm to discourse:\n\n**Intellectual Dishonesty:**\nYou're not engaging with what someone actually believes. Even if you 'win,' you haven't addressed their real concerns.\n\n**Polarization:**\nMisrepresenting opponents makes them seem more extreme than they are, widening perceived divides and making compromise harder.\n\n**Erosion of Trust:**\nWhen people see their views consistently distorted, they stop engaging in good faith.\n\n**Poor Advocacy:**\nIf you don't understand the real objections to your position, you can't address them effectively.\n\n**Self-Deception:**\nConstantly attacking strawmen can convince you that your opponents are stupider or more extreme than they actually are.\n\n**In Debate:**\nExperienced judges recognize strawman attacks. They suggest you either don't understand your opponent's argument or are being deliberately dishonest—neither reflects well on you.",
      },
      {
        type: "content",
        title: "Responding to Strawman Attacks",
        content: "When an opponent strawmans your position, you need to call it out clearly:\n\n**1. Correct the Record:**\n'That's not my argument. What I actually said was... [restate clearly]'\n\n**2. Show the Distortion:**\n'Notice how my opponent changed my position from X to Y. These are not the same thing.'\n\n**3. Challenge Them to Engage:**\n'I'd ask my opponent to address what I actually argued, not a distorted version.'\n\n**4. Return to Substance:**\nDon't get stuck on the meta-debate. Make your point, then get back to your actual arguments.\n\n**Example Response:**\n'My opponent claims I want to ban all cars. What I actually said was that we should invest in public transportation options. These are completely different positions. Now, let me explain why public transit investment makes sense...'\n\n**Don't:**\n• Get defensive or emotional\n• Spend your whole speech on the strawman\n• Attack your opponent personally\n• Forget to actually make your arguments",
        keyPoints: [
          "Clearly restate your actual position",
          "Point out specifically how it was distorted",
          "Don't dwell too long—return to substance",
        ],
      },
      {
        type: "question",
        id: "l06-04-q2",
        question: "What's the best first step when responding to a strawman attack on your argument?",
        options: [
          { id: "a", text: "Attack your opponent's character" },
          { id: "b", text: "Accept the distorted version of your argument" },
          { id: "c", text: "Clearly restate what you actually argued" },
          { id: "d", text: "Change your argument to match the strawman" }
        ],
        correctAnswer: "c",
        explanation: "The best first step is to clearly restate your actual position. This corrects the record for the judge and exposes the distortion. You can then point out how your opponent misrepresented you before returning to your substantive arguments.",
      },
      {
        type: "content",
        title: "Avoiding Strawman in Your Own Arguments",
        content: "The best debaters represent opponent arguments accurately—even generously—before dismantling them. Here's how:\n\n**The Principle of Charity:**\nInterpret opponent arguments in their strongest reasonable form. If there are multiple interpretations, assume the smarter one.\n\n**Accurate Paraphrase:**\nBefore attacking, restate their argument fairly: 'If I understand correctly, you're arguing that... Is that right?'\n\n**Quote When Possible:**\nUse their exact words when attacking specific claims: 'You said, quote, [exact words]. Here's why that's wrong...'\n\n**Steel-Manning:**\nThe opposite of strawmanning. Strengthen their argument before attacking: 'The strongest version of their argument is actually X. Even so, here's why it fails...'\n\n**Check Yourself:**\nBefore attacking, ask: 'Would they recognize this as their position?' If not, you may be strawmanning.\n\n**Why This Helps You:**\nDefeating a strong version of an argument is more impressive than defeating a weak version. Judges respect debaters who engage honestly with opponents.",
        keyPoints: [
          "Interpret charitably—assume the stronger version",
          "Paraphrase accurately or use exact quotes",
          "Steel-man: strengthen before attacking",
          "Ask: would they recognize this as their position?",
        ],
      },
      {
        type: "content",
        title: "Strawman in Real-World Discourse",
        content: "Understanding strawman makes you a better citizen and thinker:\n\n**Political Media:**\nCable news and social media thrive on strawmen. 'The other side wants X!' claims often distort actual positions. Before accepting these characterizations, check primary sources.\n\n**Social Media:**\nOnline, positions are frequently misrepresented for engagement. Outrageous strawmen get more shares than nuanced disagreements.\n\n**Workplace:**\nIn meetings, ensure you understand positions before disagreeing: 'Let me make sure I understand—you're saying... Is that right?'\n\n**Personal Relationships:**\nArguments escalate when partners strawman each other: 'You always...' 'You never...' Instead: 'When you did X, I felt Y.'\n\n**Self-Examination:**\nNotice when you're strawmanning in your own thinking. It's easy to dismiss positions you disagree with by imagining weaker versions.\n\n**Media Literacy:**\nWhen you see 'critics say' or 'opponents believe,' check if actual critics and opponents say those things.",
      },
      {
        type: "content",
        title: "Conclusion: Argue Against the Best, Not the Worst",
        content: "You've now learned to recognize, respond to, and avoid strawman arguments—a crucial skill for honest, effective discourse.\n\n**Key Takeaways:**\n• Strawman attacks a misrepresented version of an argument\n• Common techniques: exaggeration, oversimplification, taking out of context\n• Respond by clearly restating your actual position\n• Avoid strawmanning by using the principle of charity\n• Steel-manning (attacking the strongest version) is more impressive and effective\n• Check if opponents would recognize your characterization of their view\n\n**Looking Ahead:**\nIn our next lesson, we'll review non-verbal communication skills—body language, gestures, and presence.\n\n**Practice Challenge:**\nThe next time you disagree with someone, pause and ask: 'Let me make sure I understand your position—you're saying [X], right?' Then respond to what they actually said, not what would be easier to attack.",
        keyPoints: [
          "Strawman misrepresents to create easier targets",
          "Respond by restating your actual position",
          "Practice the principle of charity and steel-manning",
        ],
      },
    ],
  },
  {
    lessonId: "l06-05",
    pages: [
      {
        type: "content",
        title: "Introduction: Non-Verbal Communication Review",
        content: "We've covered body language, gestures, eye contact, and movement in previous lessons. Now it's time to integrate these skills into a cohesive non-verbal communication toolkit.\n\nStudies suggest that non-verbal cues account for a significant portion of how messages are received—some research puts it at over 50%. In debate, your physical presence either reinforces your arguments or undermines them.\n\nThis lesson brings together everything you've learned about non-verbal communication, shows you how the pieces work together, and helps you develop an authentic, confident physical presence that enhances your speaking.",
      },
      {
        type: "content",
        title: "The Foundation: Confident Posture",
        content: "Your posture is the foundation of all other non-verbal communication:\n\n**The Power Stance:**\n• Feet shoulder-width apart\n• Weight evenly distributed (no swaying)\n• Shoulders back but relaxed (not military-stiff)\n• Head level (chin parallel to floor)\n• Spine straight but natural\n\n**What Posture Communicates:**\n• Upright posture: confidence, authority, engagement\n• Slouching: disinterest, insecurity, fatigue\n• Rigid posture: nervousness, tension\n• Balanced posture: calm, prepared, in control\n\n**Common Mistakes:**\n• Shifting weight from foot to foot (distracting)\n• Leaning on podium (seems tired or casual)\n• Pacing excessively (nervous energy)\n• Hands in pockets (hiding, disengaged)\n\n**The Research:**\nAmy Cuddy's famous research suggests 'power posing' can actually affect your hormones and confidence. While the science is debated, adopting confident posture does affect how others perceive you.",
        keyPoints: [
          "Stand balanced with feet shoulder-width apart",
          "Shoulders back, head level, spine straight",
          "Posture communicates confidence or insecurity",
        ],
      },
      {
        type: "content",
        title: "Eye Contact: Connection and Confidence",
        content: "Eye contact is your most powerful tool for connecting with judges and audiences:\n\n**With Judges:**\n• Make regular eye contact—they're your primary audience\n• In panel, distribute attention among all judges\n• Don't stare; natural glances of 2-3 seconds work\n• Return to the judge after checking notes\n\n**With Opponents:**\n• Brief eye contact shows you're not intimidated\n• Don't glare or stare down—it seems aggressive\n• During cross-ex, steady eye contact shows confidence\n\n**With Notes:**\n• Glance down, then eyes up while speaking\n• Never read with your head down for extended periods\n• Practice until you can speak from bullet points\n• Know your opening and closing by heart for full eye contact\n\n**The Balance:**\nAbout 70-80% eye contact, 20-30% notes is a good target. When making crucial points, always look at your audience.\n\n**Cultural Note:**\nEye contact norms vary by culture. In American academic debate, strong eye contact signals confidence. Be aware this may differ in international contexts.",
        keyPoints: [
          "Regular eye contact with judges shows confidence",
          "Distribute attention across panel judges",
          "Look up from notes while speaking key points",
        ],
      },
      {
        type: "question",
        id: "l06-05-q1",
        question: "What's the recommended balance between eye contact and checking notes?",
        options: [
          { id: "a", text: "100% eye contact, never look at notes" },
          { id: "b", text: "About 70-80% eye contact, 20-30% notes" },
          { id: "c", text: "Keep head down and read directly from notes" },
          { id: "d", text: "Only look at judges when they're writing" }
        ],
        correctAnswer: "b",
        explanation: "A balance of about 70-80% eye contact and 20-30% checking notes is ideal. This allows you to stay organized while maintaining connection with your audience. During crucial points, prioritize eye contact; glance at notes during transitions.",
      },
      {
        type: "content",
        title: "Gestures: Emphasis and Energy",
        content: "Purposeful gestures reinforce your words; random gestures distract:\n\n**Effective Gestures:**\n• Enumeration: Use fingers to count points ('First... Second...')\n• Emphasis: Open palm for important assertions\n• Comparison: Hands in different positions for either/or\n• Size/scope: Hands apart to show magnitude\n• Direction: Pointing (not at people) to indicate relationships\n\n**Avoid:**\n• Repetitive gestures (same motion over and over)\n• Nervous habits (touching face, fidgeting)\n• Hands behind back (hiding, formal)\n• Crossed arms (defensive)\n• Pointing at opponents (aggressive)\n\n**Neutral Position:**\nWhen not gesturing, hands should rest naturally at sides or lightly clasped in front at waist height.\n\n**The Match Principle:**\nGestures should match content. Talking about something big? Expansive gesture. Making a precise point? Small, focused motion. The mismatch (big gesture for small point) looks strange.\n\n**Practice:**\nGestures should feel natural, not choreographed. Practice your speech with gestures until they feel organic.",
        keyPoints: [
          "Match gestures to content",
          "Use enumeration, emphasis, and comparison gestures",
          "Avoid nervous habits and repetitive motions",
        ],
      },
      {
        type: "content",
        title: "Movement and Space",
        content: "How you use space affects your presence and audience engagement:\n\n**Purposeful Movement:**\n• Step forward for emphasis or important points\n• Move slightly when transitioning between arguments\n• Position yourself to face different parts of the audience\n\n**Avoid:**\n• Pacing back and forth (nervous energy)\n• Standing perfectly still entire time (robotic)\n• Moving randomly without purpose\n• Turning your back on the judge\n\n**Podium vs. Open:**\n• Behind podium: More formal, constrained gesture space\n• Open floor: More dynamic, requires more movement control\n• Know what your format expects\n\n**Distance:**\n• Too far: Disconnected\n• Too close: Intimidating (especially in cross-ex)\n• Generally maintain 4-6 feet from judges\n\n**Room Awareness:**\n• Know where judges are sitting\n• Position for maximum visibility\n• Project voice to fill the space\n• Adjust for room acoustics",
        keyPoints: [
          "Move purposefully, not randomly",
          "Step forward for emphasis",
          "Avoid nervous pacing or frozen stillness",
        ],
      },
      {
        type: "content",
        title: "Facial Expressions",
        content: "Your face conveys emotion and engagement—or boredom and anxiety:\n\n**Appropriate Expressions:**\n• Pleasant, engaged baseline (slight smile or neutral)\n• Match expression to content (serious for serious arguments)\n• Show reaction to opponent's weak points (measured skepticism)\n• Genuine enthusiasm when making key points\n\n**Avoid:**\n• Frozen 'deer in headlights' expression (nervousness)\n• Constant smiling regardless of content (seems fake)\n• Eye-rolling or contemptuous looks (unprofessional)\n• Visible panic or frustration\n\n**The Opponent's Speech:**\nWhile your opponent speaks:\n• Stay engaged (you're still being judged)\n• Take notes actively\n• Don't make distracting faces\n• Neutral-to-pleasant expression is safe\n\n**Authenticity:**\nDon't try to manufacture expressions. Focus on actually engaging with the content, and appropriate expressions will follow naturally.",
      },
      {
        type: "question",
        id: "l06-05-q2",
        question: "What should your facial expression be while your opponent is speaking?",
        options: [
          { id: "a", text: "Roll your eyes to show you disagree" },
          { id: "b", text: "Neutral-to-pleasant while actively taking notes" },
          { id: "c", text: "Look at your phone to show confidence" },
          { id: "d", text: "Laugh at their arguments" }
        ],
        correctAnswer: "b",
        explanation: "While your opponent speaks, maintain a neutral-to-pleasant expression while actively taking notes. This shows engagement and professionalism. Eye-rolling, laughing, or visible dismissiveness is unprofessional and can be penalized by judges, even if you're not the one speaking.",
      },
      {
        type: "content",
        title: "Integrating All Elements",
        content: "The goal is a cohesive, authentic presence where all elements work together:\n\n**Pre-Round Routine:**\n1. Take a breath, center yourself\n2. Check posture\n3. Arrange notes calmly\n4. Make eye contact with judges, nod acknowledgment\n\n**During Your Speech:**\n1. Start from strong posture\n2. Open with direct eye contact\n3. Gesture to emphasize key points\n4. Move purposefully between sections\n5. Match facial expression to content\n6. Return to composed posture for conclusion\n\n**Cross-Examination:**\n1. Steady eye contact\n2. Open body language\n3. Calm, controlled gestures\n4. Don't crowd opponent's space\n\n**When Not Speaking:**\n1. Stay engaged and attentive\n2. Take notes visibly\n3. Neutral-positive expression\n4. Don't fidget or distract\n\n**The Authenticity Principle:**\nThese skills should enhance your natural presence, not replace it with performance. Practice until confident body language feels like your own.",
        keyPoints: [
          "All non-verbal elements should work together",
          "Develop pre-round and during-speech routines",
          "Stay professional even when not speaking",
        ],
      },
      {
        type: "content",
        title: "Conclusion: Your Physical Presence",
        content: "You've now reviewed and integrated all the non-verbal communication skills needed for confident debate performance.\n\n**Key Takeaways:**\n• Posture is your foundation—stand balanced and confident\n• Eye contact connects you to judges and shows confidence\n• Gestures should emphasize content, not distract\n• Movement should be purposeful, not nervous\n• Facial expressions should match content and stay professional\n• All elements should integrate into authentic presence\n\n**Looking Ahead:**\nIn the next lesson, we'll explore primary versus secondary sources and when to use each.\n\n**Practice Challenge:**\nRecord yourself giving a 3-minute speech. Watch with the sound off. What does your body language communicate? Where do you notice nervous habits? What looks confident? This video feedback is invaluable for improvement.",
        keyPoints: [
          "Posture, eye contact, gestures, movement, and expressions work together",
          "Practice until confident presence feels natural",
          "Video yourself to identify improvement areas",
        ],
      },
    ],
  },
  {
    lessonId: "l06-06",
    pages: [
      {
        type: "content",
        title: "Introduction: Primary vs Secondary Sources",
        content: "When building arguments, not all evidence is created equal. Understanding the difference between primary and secondary sources—and knowing when to use each—is essential for credible, effective argumentation.\n\nPrimary sources are original, first-hand materials: the data itself, the original study, the firsthand account. Secondary sources analyze, interpret, or discuss primary sources: textbooks, news articles, encyclopedia entries.\n\nIn this lesson, you'll learn to distinguish between these source types, understand the strengths and weaknesses of each, and develop strategies for using the right source for your argumentative needs.",
      },
      {
        type: "content",
        title: "What Are Primary Sources?",
        content: "Primary sources are original materials that haven't been interpreted or analyzed by others:\n\n**Examples of Primary Sources:**\n• Original research studies and data sets\n• Government documents and statistics\n• Court cases and legal documents\n• Historical documents (letters, diaries, treaties)\n• Interviews and firsthand accounts\n• Scientific experiment results\n• Original speeches and writings\n• Photographs, videos, and recordings\n• Company financial reports and filings\n\n**Characteristics:**\n• Created at the time of the event or research\n• Present original data or evidence\n• No intermediary interpretation\n• Closest to the actual facts or events\n\n**Strengths:**\n• Maximum accuracy (no telephone game)\n• Allows you to draw your own conclusions\n• Most authoritative for factual claims\n• Can't be accused of cherry-picking if using full source\n\n**Challenges:**\n• May require expertise to interpret\n• Can be technical or difficult to access\n• Raw data needs context",
        keyPoints: [
          "Primary sources are original, uninterpreted materials",
          "Examples: research studies, government data, original documents",
          "Most authoritative but may require interpretation expertise",
        ],
      },
      {
        type: "content",
        title: "What Are Secondary Sources?",
        content: "Secondary sources analyze, interpret, or synthesize primary sources:\n\n**Examples of Secondary Sources:**\n• Textbooks and educational materials\n• News articles analyzing events\n• Encyclopedia and Wikipedia entries\n• Review articles summarizing research\n• Biographies and historical analyses\n• Documentary films\n• Commentary and opinion pieces\n• Academic books analyzing topics\n\n**Characteristics:**\n• One step removed from original material\n• Provide interpretation or analysis\n• Synthesize multiple primary sources\n• Add context and explanation\n\n**Strengths:**\n• More accessible and readable\n• Provide useful context\n• Synthesize large amounts of information\n• Easier to find and use\n\n**Challenges:**\n• May contain interpretation errors\n• Author's perspective shapes presentation\n• Lose nuance from original sources\n• Can be outdated if primary sources have been updated",
        keyPoints: [
          "Secondary sources analyze or interpret primary sources",
          "Examples: textbooks, news articles, encyclopedias",
          "More accessible but filtered through another's interpretation",
        ],
      },
      {
        type: "question",
        id: "l06-06-q1",
        question: "A newspaper article about a new medical study is what type of source?",
        options: [
          { id: "a", text: "Primary source" },
          { id: "b", text: "Secondary source" },
          { id: "c", text: "Neither" },
          { id: "d", text: "It depends on who wrote it" }
        ],
        correctAnswer: "b",
        explanation: "A newspaper article about a medical study is a secondary source because it interprets and summarizes the primary source (the original study). The primary source would be the actual peer-reviewed study with its data and methodology. Newspapers filter research through journalists who may simplify or miss nuances.",
      },
      {
        type: "content",
        title: "When to Use Primary Sources",
        content: "Primary sources are essential in certain situations:\n\n**When Making Factual Claims:**\nIf you claim 'the unemployment rate is 4.2%,' cite the Bureau of Labor Statistics (primary), not a news article that quoted it (secondary).\n\n**When Accuracy Is Crucial:**\nFor scientific, statistical, or legal claims, going to the source prevents errors from being passed along.\n\n**When Being Challenged:**\nIf opponents attack your evidence, pointing to the primary source is more authoritative than saying 'well, this article said...'\n\n**When Interpreting for Yourself:**\nPrimary sources let you draw your own conclusions rather than accepting someone else's interpretation.\n\n**When Sources Are Contested:**\nIf there's dispute about what a study 'really shows,' having the original allows you to quote it directly.\n\n**Practical Advice:**\n• When citing statistics, find the original dataset\n• When citing studies, find the actual paper\n• When citing quotes, find the original speech/document\n• Work backwards from secondary sources to find primaries",
        keyPoints: [
          "Use primary sources for factual and statistical claims",
          "Go to the original when accuracy is crucial",
          "Primary sources defend better against challenges",
        ],
      },
      {
        type: "content",
        title: "When to Use Secondary Sources",
        content: "Secondary sources have legitimate and valuable uses:\n\n**For Background and Context:**\nA textbook explaining how the economy works provides useful framework even if you cite primary data for specific claims.\n\n**For Synthesis:**\nReview articles that summarize dozens of studies are valuable for establishing scientific consensus: 'A 2023 meta-analysis of 47 studies found...'\n\n**For Accessibility:**\nSometimes you need to explain complex research in accessible terms, and a good secondary source does this well.\n\n**For Finding Primary Sources:**\nSecondary sources often cite their primaries, making them useful starting points for research.\n\n**For Expert Interpretation:**\nWhen primary data requires expertise to interpret, an expert's secondary analysis adds value.\n\n**Layered Approach:**\nStrong arguments often combine:\n• Secondary source for context\n• Primary source for key data\n• Secondary source for expert interpretation\n\nThis gives you accessibility, accuracy, and authority.",
        keyPoints: [
          "Use secondary sources for context and synthesis",
          "Review articles establish consensus",
          "Layer secondary context with primary data",
        ],
      },
      {
        type: "question",
        id: "l06-06-q2",
        question: "When is a secondary source more appropriate than a primary source?",
        options: [
          { id: "a", text: "When making precise statistical claims" },
          { id: "b", text: "When you need to synthesize findings from many studies" },
          { id: "c", text: "When your opponent challenges your data" },
          { id: "d", text: "Primary sources are always better" }
        ],
        correctAnswer: "b",
        explanation: "Secondary sources are particularly valuable when you need to synthesize findings across many studies, such as review articles or meta-analyses that summarize entire fields of research. Reading and citing 47 individual studies is impractical, but citing a meta-analysis that reviewed all 47 is legitimate and efficient.",
      },
      {
        type: "content",
        title: "The Evidence Hierarchy",
        content: "Different types of evidence have different weights in debate:\n\n**Highest Authority:**\n1. Meta-analyses and systematic reviews (synthesize many studies)\n2. Peer-reviewed original research\n3. Government and institutional data\n4. Expert testimony in their field\n\n**Moderate Authority:**\n5. Quality journalism with sourcing\n6. Academic textbooks\n7. Institutional reports\n8. Documented case studies\n\n**Lower Authority:**\n9. Opinion journalism\n10. General encyclopedias (Wikipedia)\n11. Anonymous sources\n12. Anecdotes and personal experience\n\n**Using the Hierarchy:**\n• Lead with your strongest sources\n• Use lower-tier sources for illustration, not proof\n• Anticipate which sources opponents will attack\n• Trade up when possible (find the primary behind the secondary)\n\n**Context Matters:**\nA law student might be an authority on their own experience but not on constitutional law. A newspaper article might be authoritative for 'public perception' claims but not for scientific facts.",
        keyPoints: [
          "Meta-analyses and peer-reviewed research rank highest",
          "Quality journalism and textbooks have moderate authority",
          "Anecdotes and anonymous sources rank lowest",
        ],
      },
      {
        type: "content",
        title: "Practical Sourcing Strategies",
        content: "Here's how to apply these principles in your debate preparation:\n\n**The Trace-Back Method:**\n1. Find an accessible secondary source on your topic\n2. Check its citations and sources\n3. Locate the original primary sources\n4. Read and cite the primaries when possible\n\n**The Layered Citation:**\n'According to a 2023 Harvard study published in Nature, [specific finding]. As economist Dr. Smith explains, this means [interpretation].'\nYou've combined primary (the study) with secondary (expert interpretation).\n\n**The Preemptive Defense:**\nWhen using secondary sources, acknowledge it: 'As reported by the New York Times, based on data from the CDC...' This shows you know the original source.\n\n**Research Tools:**\n• Google Scholar: Find academic papers\n• Government databases: Census, BLS, CDC\n• JSTOR/Academic databases: Peer-reviewed articles\n• News archives: For documented events\n• Check bibliography/citations of any source\n\n**Time Management:**\nNot every claim needs a primary source. Prioritize primaries for your most important arguments and contested claims.",
      },
      {
        type: "content",
        title: "Conclusion: Source Sophistication",
        content: "You now understand the crucial distinction between primary and secondary sources and when to use each effectively.\n\n**Key Takeaways:**\n• Primary sources are original materials; secondary sources analyze them\n• Use primary sources for factual claims and when accuracy is crucial\n• Use secondary sources for context, synthesis, and accessibility\n• Layer sources: secondary for context, primary for key data\n• The evidence hierarchy helps you prioritize source types\n• Trace back from secondary to primary sources when possible\n\n**Looking Ahead:**\nIn the final lesson of this unit, we'll review all the source and credibility concepts we've covered.\n\n**Practice Challenge:**\nTake an argument you're working on. For each piece of evidence, identify: Is it primary or secondary? Could you trace it back to a more authoritative source? This habit dramatically improves your evidence quality.",
        keyPoints: [
          "Know the difference: primary is original, secondary is interpretation",
          "Choose source type based on argumentative needs",
          "Layer and trace back for maximum credibility",
        ],
      },
    ],
  },
  {
    lessonId: "l06-07",
    pages: [
      {
        type: "content",
        title: "Introduction: Unit 6 Review",
        content: "Congratulations on completing Unit 6! This unit focused on sources and credibility—skills that help you both build stronger arguments and effectively attack weak evidence from opponents.\n\nIn this review lesson, we'll consolidate everything you've learned: ad hominem fallacies, speed versus clarity, source evaluation, strawman arguments, non-verbal communication, and primary versus secondary sources. By reinforcing these concepts, you'll be ready to apply them confidently in your debates.",
      },
      {
        type: "content",
        title: "Review: Ad Hominem and Strawman",
        content: "**Ad Hominem:**\n• Attacks the person, not their argument\n• Types: abusive, circumstantial, tu quoque, guilt by association, poisoning the well\n• A speaker's character doesn't determine argument validity\n• Respond by naming the fallacy and redirecting to substance\n• Keep your own arguments focused on evidence and logic\n\n**Strawman:**\n• Misrepresents opponent's argument to make it easier to attack\n• Techniques: exaggeration, oversimplification, taking out of context\n• Defeating the strawman doesn't defeat the real argument\n• Respond by clearly restating your actual position\n• Apply the principle of charity—argue against the strongest version\n\n**Key Distinction:**\nAd hominem attacks the person. Strawman attacks a false version of their argument. Both avoid engaging with what was actually said.",
        keyPoints: [
          "Ad hominem: attacking the person",
          "Strawman: attacking a misrepresented argument",
          "Both avoid engaging with actual substance",
        ],
      },
      {
        type: "content",
        title: "Review: Speed and Non-Verbal Communication",
        content: "**Speed vs Clarity:**\n• Adapt to your judge (lay vs. flow)\n• Lay judges: conversational pace (120-150 WPM)\n• Flow judges: faster is acceptable (180-250+ WPM)\n• Prioritize enunciation over raw speed\n• Use signposting and strategic pauses\n• Spreading is circuit-specific—know when it helps or hurts\n\n**Non-Verbal Communication:**\n• Posture: Stand balanced, shoulders back, head level\n• Eye contact: 70-80% with judges, 20-30% notes\n• Gestures: Match to content, avoid nervous habits\n• Movement: Purposeful, not nervous pacing\n• Facial expressions: Match content, stay professional\n• All elements should integrate authentically",
        keyPoints: [
          "Match speed to judge and circuit",
          "Non-verbal elements reinforce or undermine your words",
          "Practice until confident presence feels natural",
        ],
      },
      {
        type: "content",
        title: "Review: Source Evaluation",
        content: "**The CRAAP Test:**\n• Currency: Is it recent enough?\n• Relevance: Does it apply to your claim?\n• Authority: Are the authors qualified?\n• Accuracy: Is it verifiable?\n• Purpose: What's the motivation?\n\n**Evaluating Credibility:**\n• Author credentials must match the topic\n• Peer-reviewed journals rank highest\n• Check funding sources for conflicts of interest\n• Acknowledge and account for bias\n• Against-interest admissions are especially credible\n\n**Attacking Sources:**\n• Be specific about the problem\n• Don't just attack—explain why it matters\n• Have your own better sources ready\n• Prioritize attacking weak sources over strong ones",
        keyPoints: [
          "Apply CRAAP test systematically",
          "Match credentials to topic",
          "Check for bias and conflicts of interest",
        ],
      },
      {
        type: "question",
        id: "l06-07-q1",
        question: "Your opponent cites a study funded by a company that would profit from its conclusions. What's the best response?",
        options: [
          { id: "a", text: "Ignore the funding issue and only attack the data" },
          { id: "b", text: "Point out the conflict of interest AND explain why the methodology or conclusions are problematic" },
          { id: "c", text: "Only mention the funding and claim the study is therefore wrong" },
          { id: "d", text: "Accept the study because it was published" }
        ],
        correctAnswer: "b",
        explanation: "The best approach combines pointing out the conflict of interest with substantive criticism of the study. Funding bias is a credibility concern, but doesn't automatically make conclusions wrong. Addressing both the conflict AND the substance makes your attack more complete and compelling.",
      },
      {
        type: "content",
        title: "Review: Primary vs Secondary Sources",
        content: "**Primary Sources:**\n• Original, uninterpreted materials\n• Examples: research studies, government data, original documents\n• Most authoritative for factual claims\n• Use when accuracy is crucial\n\n**Secondary Sources:**\n• Analyze or interpret primary sources\n• Examples: textbooks, news articles, encyclopedias\n• More accessible but filtered through interpretation\n• Good for context and synthesis\n\n**Evidence Hierarchy:**\n1. Meta-analyses and peer-reviewed research (highest)\n2. Government and institutional data\n3. Quality journalism with sourcing\n4. Anecdotes and opinion (lowest)\n\n**Strategy:**\n• Layer secondary context with primary data\n• Trace back from secondary to primary when possible\n• Lead with your strongest sources",
        keyPoints: [
          "Primary: original data; Secondary: interpretation",
          "Use primary sources for crucial factual claims",
          "Layer sources for context and authority",
        ],
      },
      {
        type: "question",
        id: "l06-07-q2",
        question: "You're arguing that a policy reduced crime. Which evidence combination is strongest?",
        options: [
          { id: "a", text: "A blog post discussing crime rates" },
          { id: "b", text: "FBI crime statistics (primary) plus expert analysis explaining the methodology (secondary)" },
          { id: "c", text: "A news article that mentions crime went down" },
          { id: "d", text: "Your personal experience feeling safer" }
        ],
        correctAnswer: "b",
        explanation: "The combination of FBI crime statistics (primary, authoritative data) plus expert analysis (secondary, explaining the methodology) provides both hard data and interpretive context. This layered approach is more compelling than blogs, news articles, or personal experience alone.",
      },
      {
        type: "content",
        title: "Connecting the Concepts",
        content: "The skills from this unit work together:\n\n**Building Strong Cases:**\n• Use credible sources (CRAAP test)\n• Lead with primary sources for key claims\n• Layer with secondary sources for context\n• Deliver with confident non-verbal presence\n• Match speed to your judge\n\n**Attacking Opponent Cases:**\n• Avoid ad hominem (attack arguments, not people)\n• Don't strawman (represent positions fairly)\n• Evaluate their source credibility\n• Point out when they use weak sources\n• Offer better evidence from your own research\n\n**Defending Your Case:**\n• Call out strawman when they misrepresent you\n• Respond to ad hominem by refocusing on substance\n• Be prepared to defend your source credibility\n• Know your primary sources well enough to cite specifics",
      },
      {
        type: "content",
        title: "Conclusion: Ready for Unit 7",
        content: "You've completed Unit 6 and now have strong skills in evaluating sources and credibility!\n\n**Unit 6 Summary:**\n• Ad hominem attacks the person; strawman attacks a misrepresented argument\n• Match speaking speed to judge and context\n• Integrate all non-verbal elements into authentic presence\n• Use the CRAAP test to evaluate source credibility\n• Know when to use primary vs. secondary sources\n• Layer sources for maximum persuasive impact\n\n**Looking Ahead:**\nUnit 7 focuses on Logic and Bias—you'll learn the Toulmin model of argumentation, explore more logical fallacies like slippery slope and false dichotomy, and understand correlation versus causation.\n\n**Keep Practicing:**\nThese skills improve with repetition. Every debate round is an opportunity to practice source evaluation, avoid fallacies, and refine your non-verbal communication.",
        keyPoints: [
          "Sources and credibility are fundamental to strong argumentation",
          "Avoid fallacies; call them out in opponents",
          "Integrate all skills for complete, credible presentations",
        ],
      },
    ],
  },
];
