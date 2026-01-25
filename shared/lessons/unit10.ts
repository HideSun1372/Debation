import { MultiPageLesson } from "./types";

export const UNIT_10_LESSONS: MultiPageLesson[] = [
  {
    lessonId: "l10-01",
    pages: [
      {
        type: "content",
        title: "Introduction: The Red Herring Fallacy",
        content: "Watch a political debate, and you'll often see candidates answering questions they weren't asked. This is the red herring fallacy—diverting attention from the actual issue to something irrelevant that's easier to address.\n\nThe term comes from the practice of using smoked fish (red herring) to throw hunting dogs off a scent trail. In argumentation, a red herring diverts the audience from the relevant issue.\n\nIn this lesson, you'll learn to recognize red herrings, understand why they work, and develop strategies for keeping debates focused on what actually matters.",
      },
      {
        type: "content",
        title: "How Red Herrings Work",
        content: "A red herring has a specific structure:\n\n**The Pattern:**\n1. Topic A is being discussed\n2. Arguer introduces Topic B (which is irrelevant or only loosely related)\n3. Topic A is abandoned without resolution\n4. Audience may not notice the switch\n\n**Why It Works:**\n• The new topic may be easier to discuss\n• The new topic may be more emotionally engaging\n• Listeners may lose track of the original question\n• The diversion seems like a natural transition\n\n**Example:**\n• Original question: 'How will you reduce the deficit?'\n• Red herring: 'Let me tell you about our economic growth plans...'\n• What happened: The deficit question was never answered\n\n**The Skill:**\nRed herring detection requires tracking the original question and noticing when it hasn't been addressed.",
        keyPoints: [
          "Red herring diverts from the actual issue",
          "The new topic may seem related but doesn't answer the question",
          "Track the original question to detect the switch",
        ],
      },
      {
        type: "content",
        title: "Common Red Herring Tactics",
        content: "Red herrings take many forms:\n\n**Answering a Different Question:**\n• Asked about X, responds about Y\n• 'That's an interesting question, but the real issue is...'\n\n**Attacking a Related But Different Point:**\n• 'My opponent wants to discuss taxes, but look at their spending record!'\n• Shifts from your weakness to their weakness\n\n**Emotional Diversion:**\n• Introducing dramatic but irrelevant examples\n• 'Think of the children!' (when children aren't relevant to the issue)\n\n**Broadening the Scope:**\n• 'We need to look at the bigger picture...'\n• Zoom out so far the original question disappears\n\n**Historical Tangent:**\n• 'Historically, this has always been complex...'\n• History lesson replaces direct answer\n\n**'What About' (Whataboutism):**\n• 'What about when they did X?'\n• Someone else's failings don't address your issue",
        keyPoints: [
          "Answering different questions is common",
          "Whataboutism points to others instead of answering",
          "Watch for emotional diversions and scope changes",
        ],
      },
      {
        type: "question",
        id: "l10-01-q1",
        question: "A politician asked 'How will you address climate change?' responds: 'My opponent has a terrible environmental record.' What happened?",
        options: [
          { id: "a", text: "They answered the question directly" },
          { id: "b", text: "They used a red herring—attacking the opponent instead of explaining their own plan" },
          { id: "c", text: "They provided strong evidence" },
          { id: "d", text: "This is good debate practice" }
        ],
        correctAnswer: "b",
        explanation: "This is a red herring. The question asked for their climate plan, but they diverted to attacking their opponent's record. Even if the attack is true, it doesn't answer the question. The original question about their own plan remains unaddressed.",
      },
      {
        type: "content",
        title: "Responding to Red Herrings",
        content: "When opponents use red herrings:\n\n**1. Redirect to the Original Issue:**\n'That's interesting, but it doesn't answer my question. Let me ask again: [original question].'\n\n**2. Name the Tactic:**\n'My opponent has changed the subject. The actual issue is [X], not [Y].'\n\n**3. Note What's Missing:**\n'Notice that my opponent hasn't addressed [the actual issue] despite discussing [irrelevant topic].'\n\n**4. Refuse to Follow:**\n'I'm not going to debate [irrelevant topic]. The question at hand is [actual issue].'\n\n**5. Tie It Back:**\nIf they won't return, keep referencing: 'While my opponent discusses [Y], the unanswered question remains: [X].'\n\n**In Cross-Examination:**\nRed herrings are especially common. Repeat your question: 'I appreciate that, but my question was specifically about [X]. Can you address that?'",
        keyPoints: [
          "Redirect to the original question",
          "Name the tactic so judges notice",
          "Refuse to follow the diversion",
        ],
      },
      {
        type: "question",
        id: "l10-01-q2",
        question: "Your opponent introduces a dramatic but irrelevant story instead of addressing your argument. What's the best response?",
        options: [
          { id: "a", text: "Tell your own dramatic story" },
          { id: "b", text: "Say 'That story doesn't address my argument. Let me bring us back to the actual issue...'" },
          { id: "c", text: "Accept that your argument has been refuted" },
          { id: "d", text: "Leave the debate" }
        ],
        correctAnswer: "b",
        explanation: "Redirect to the actual issue by noting that the story, however compelling, doesn't address your argument. This makes clear to judges that your point stands unrebutted while keeping the debate focused on substance.",
      },
      {
        type: "content",
        title: "Avoiding Red Herrings Yourself",
        content: "Stay focused and answer directly:\n\n**Answer the Actual Question:**\n• Repeat key words from the question in your answer\n• 'You asked about [X]. Here's my position on [X]...'\n\n**Signpost Transitions:**\n• If you need to discuss related topics, be explicit\n• 'To answer that, I first need to address [related point], which connects because...'\n\n**Stay on Track:**\n• Know your key arguments and return to them\n• Don't let opponents drag you to their preferred territory\n\n**When Asked About Weaknesses:**\nIt's tempting to redirect. But addressing weaknesses directly is more credible:\n• 'Yes, there are costs. Here's why they're worth it...'\n\n**Self-Check:**\nAsk yourself: Did I answer what was asked, or what I wanted to be asked?",
        keyPoints: [
          "Answer the actual question asked",
          "Signpost transitions explicitly",
          "Address weaknesses directly rather than redirecting",
        ],
      },
      {
        type: "content",
        title: "Conclusion: Staying on the Scent",
        content: "You've learned to recognize red herrings and keep debates focused on the actual issues.\n\n**Key Takeaways:**\n• Red herring diverts from the actual issue to something irrelevant\n• Watch for subject changes, whataboutism, and emotional diversions\n• Respond by redirecting to the original question\n• Name the tactic so judges recognize it\n• Avoid red herrings yourself by answering directly\n• Signpost when you need to address related points\n\n**Looking Ahead:**\nIn the next lesson, we'll explore the post hoc fallacy—confusing sequence with causation.\n\n**Practice Challenge:**\nWatch a political interview or debate. Count how many times questions are answered with unrelated topics. Notice how interviewers (sometimes) redirect. This awareness makes you a more critical consumer of discourse.",
        keyPoints: [
          "Red herring diverts to irrelevant topics",
          "Track the original question to detect diversions",
          "Answer what's asked, not what you'd prefer",
        ],
      },
    ],
  },
  {
    lessonId: "l10-02",
    pages: [
      {
        type: "content",
        title: "Introduction: Post Hoc Fallacy",
        content: "I wore my lucky socks, and we won the game. My lucky socks caused the victory!\n\nThis is the post hoc fallacy (Latin: 'post hoc ergo propter hoc'—after this, therefore because of this). It assumes that because event B followed event A, A must have caused B.\n\nThis fallacy is closely related to correlation versus causation, but focuses specifically on temporal sequence. Just because something happened first doesn't mean it caused what came next.\n\nIn this lesson, you'll learn to recognize post hoc reasoning, understand why sequence doesn't prove causation, and distinguish legitimate causal claims from fallacious ones.",
      },
      {
        type: "content",
        title: "The Structure of Post Hoc",
        content: "Post hoc has a simple structure:\n\n**The Pattern:**\n1. A happened\n2. Then B happened\n3. Therefore, A caused B\n\n**Why It's Fallacious:**\nTemporal sequence is necessary but not sufficient for causation. Yes, causes must come before effects. But not everything that comes before is a cause.\n\n**The Missing Link:**\nTo establish causation, you need:\n• Temporal sequence (A before B) ✓\n• Mechanism (how A causes B)\n• Ruling out alternatives (no other explanation)\n• Controlled evidence (isolated the variable)\n\nPost hoc provides only the first element and assumes the rest.\n\n**Example:**\n• 'I took this vitamin, and then my cold went away. The vitamin cured my cold.'\n• Problem: Colds naturally go away on their own. The sequence doesn't prove the vitamin helped.",
        keyPoints: [
          "Sequence is necessary but not sufficient for causation",
          "Post hoc assumes causation from timing alone",
          "Need mechanism and ruled-out alternatives",
        ],
      },
      {
        type: "content",
        title: "Common Post Hoc Examples",
        content: "Post hoc appears in many contexts:\n\n**Health and Medicine:**\n• 'I started this supplement and felt better' (placebo effect? natural recovery?)\n• 'After the vaccine, they got sick' (coincidence? unrelated illness?)\n\n**Economics and Policy:**\n• 'The economy improved after we took office' (was the improvement already starting?)\n• 'Crime dropped after the new law' (other factors? long-term trend?)\n\n**Superstition:**\n• Lucky charms, rituals, coincidental patterns\n• 'Every time I wash my car, it rains'\n\n**Personal Life:**\n• 'After I changed my diet, I got healthier' (exercise? stress reduction?)\n• 'We argued, and then they left' (was departure already planned?)\n\n**The Pattern:**\nWhenever someone argues 'after X, Y happened, therefore X caused Y' without additional evidence, they're committing post hoc.",
        keyPoints: [
          "Common in health claims and policy debates",
          "Superstition often relies on post hoc",
          "Look for the pattern: 'after X, Y happened, so X caused Y'",
        ],
      },
      {
        type: "question",
        id: "l10-02-q1",
        question: "Someone says: 'I started meditating, and then my headaches stopped. Meditation cured my headaches!' What fallacy might this be?",
        options: [
          { id: "a", text: "Strawman" },
          { id: "b", text: "Post hoc—assuming sequence proves causation" },
          { id: "c", text: "Ad hominem" },
          { id: "d", text: "False dichotomy" }
        ],
        correctAnswer: "b",
        explanation: "This is post hoc reasoning. Just because headaches stopped after starting meditation doesn't prove meditation caused it. The headaches might have stopped anyway, or other factors (stress reduction, better sleep, placebo effect) might explain it. Sequence alone doesn't prove causation.",
      },
      {
        type: "content",
        title: "Alternative Explanations",
        content: "When evaluating 'A then B' claims, consider alternatives:\n\n**Coincidence:**\nSometimes things just happen in sequence by chance. With enough events, some will follow others purely randomly.\n\n**Natural Progression:**\nMany conditions improve or worsen naturally over time. Colds clear up; economies cycle; moods fluctuate.\n\n**Regression to the Mean:**\nExtreme situations tend to return toward average. If you intervene when things are very bad, they'll likely improve regardless.\n\n**Confounding Variables:**\nA third factor might cause both A and B. Starting a diet (A) and losing weight (B) might both be caused by a new relationship (C).\n\n**Reverse Causation:**\nMaybe B was already causing A, not the other way around.\n\n**The Lesson:**\nBefore accepting 'A caused B,' ask: What else could explain B? Would B have happened anyway? Are there other factors?",
        keyPoints: [
          "Consider coincidence, natural progression, and regression",
          "Look for confounding variables",
          "Ask if B would have happened without A",
        ],
      },
      {
        type: "content",
        title: "Responding to Post Hoc Arguments",
        content: "When opponents use post hoc reasoning:\n\n**Name the Fallacy:**\n'That's post hoc reasoning. Sequence doesn't prove causation.'\n\n**Propose Alternatives:**\n'There are other explanations: the economy was already recovering, other policies contributed, global trends played a role...'\n\n**Demand Mechanism:**\n'How exactly would X cause Y? What's the causal mechanism?'\n\n**Request Controlled Evidence:**\n'Do we have a controlled study, or just before-and-after observation?'\n\n**Note Confounders:**\n'Multiple things changed at the same time. How do we know which caused the effect?'\n\n**Example Response:**\n'My opponent says crime dropped after their policy, so the policy worked. But crime was already trending downward before the policy took effect, and similar drops occurred in places without this policy. Sequence doesn't prove causation—we need to control for other factors.'",
        keyPoints: [
          "Name the post hoc fallacy",
          "Propose alternative explanations",
          "Demand mechanism and controlled evidence",
        ],
      },
      {
        type: "question",
        id: "l10-02-q2",
        question: "A politician claims: 'Since I took office, unemployment dropped. My policies work!' What's the best response?",
        options: [
          { id: "a", text: "Accept their claim since unemployment did drop" },
          { id: "b", text: "Ask if unemployment was already dropping, if other factors contributed, and what mechanism connects their policies to jobs" },
          { id: "c", text: "Attack the politician personally" },
          { id: "d", text: "Ignore the claim" }
        ],
        correctAnswer: "b",
        explanation: "Challenge the post hoc reasoning by asking if the trend predated their office, what other factors might explain it, and what specific mechanism connects their policies to employment. Many factors affect unemployment; sequence alone doesn't prove causation.",
      },
      {
        type: "content",
        title: "Making Valid Causal Arguments",
        content: "How to argue for causation legitimately:\n\n**Establish Temporal Sequence:**\nYes, A must precede B. But don't stop there.\n\n**Explain the Mechanism:**\nHow does A produce B? What's the causal pathway?\n\n**Control for Alternatives:**\nRule out other explanations. Address confounders.\n\n**Cite Controlled Evidence:**\nRandomized controlled trials, natural experiments, multiple studies.\n\n**Show Dose-Response:**\nMore of A leads to more of B (when applicable).\n\n**Show Removal Effect:**\nWhen A stops, B stops or reverses.\n\n**Example:**\n'Smoking causes lung cancer. We have: temporal sequence (smoking precedes cancer), mechanism (carcinogens damage lung tissue), controlled studies, dose-response (more smoking = more risk), and cessation effect (quitting reduces risk). This isn't just post hoc—it's comprehensive causal evidence.'",
        keyPoints: [
          "Sequence plus mechanism plus controlled evidence",
          "Dose-response and removal effects strengthen claims",
          "Comprehensive causal evidence beats simple sequence",
        ],
      },
      {
        type: "content",
        title: "Conclusion: After Doesn't Mean Because",
        content: "You've learned to recognize and challenge post hoc reasoning, understanding why sequence alone doesn't prove causation.\n\n**Key Takeaways:**\n• Post hoc assumes sequence proves causation\n• Temporal order is necessary but not sufficient\n• Consider alternatives: coincidence, natural progression, confounders\n• Respond by demanding mechanism and controlled evidence\n• Valid causal arguments need sequence PLUS mechanism, controls, and supporting evidence\n\n**Looking Ahead:**\nIn the next lesson, we'll cover proper citation and how to present evidence professionally.\n\n**Practice Challenge:**\nNotice post hoc reasoning in advertisements and political claims. 'After using our product...' 'Since the policy took effect...' How often is causation assumed rather than demonstrated?",
        keyPoints: [
          "Sequence is necessary but not sufficient for causation",
          "Demand mechanism and controlled evidence",
          "Consider alternative explanations",
        ],
      },
    ],
  },
  {
    lessonId: "l10-03",
    pages: [
      {
        type: "content",
        title: "Introduction: Proper Citation",
        content: "Evidence is only as strong as its presentation. How you cite sources affects your credibility, your argument's persuasiveness, and judges' ability to evaluate your claims.\n\nPoor citation—vague references, missing details, unverifiable claims—undermines even good evidence. Strong citation—clear attribution, specific details, accessible sources—builds trust and strengthens your case.\n\nIn this lesson, you'll learn best practices for citing evidence in debate, from source selection to verbal presentation to written briefs.",
      },
      {
        type: "content",
        title: "What Citation Accomplishes",
        content: "Good citation serves multiple purposes:\n\n**Credibility:**\nNaming qualified sources with clear credentials tells judges your evidence is trustworthy.\n\n**Verifiability:**\nOpponents and judges should be able to check your sources. Vague citations can't be verified.\n\n**Fairness:**\nAccurate citation respects the original author and allows proper evaluation.\n\n**Efficiency:**\nClear citation lets judges quickly assess source quality without confusion.\n\n**Protection:**\nIf challenged, clear documentation lets you defend your evidence.\n\n**The Standard:**\nAsk: Could someone find this exact source and verify what I claimed it says? If yes, your citation is adequate. If not, strengthen it.",
        keyPoints: [
          "Citation builds credibility and verifiability",
          "Judges should be able to find your sources",
          "Clear citation protects you when challenged",
        ],
      },
      {
        type: "content",
        title: "Essential Citation Elements",
        content: "Every citation should include:\n\n**Source Name:**\n• Publication or organization\n• 'According to the New York Times...'\n• 'A study in the Journal of the American Medical Association...'\n\n**Author/Expert:**\n• Name and relevant credentials\n• 'Dr. Jane Smith, professor of economics at Stanford...'\n• 'John Brown, former CIA director...'\n\n**Date:**\n• When was this published?\n• '...writing in 2023...'\n• '...in a recent study...'\n\n**Specifics When Helpful:**\n• Page numbers for quotes\n• Study sample size or methodology\n• Context for the claim\n\n**Example of Strong Citation:**\n'According to a 2023 study by researchers at Johns Hopkins University, published in the Journal of Medicine, surveying over 5,000 patients...'",
        keyPoints: [
          "Include source, author, credentials, and date",
          "Add specifics like sample size when relevant",
          "Make it possible to find and verify the source",
        ],
      },
      {
        type: "question",
        id: "l10-03-q1",
        question: "Which is the better citation in a debate speech?",
        options: [
          { id: "a", text: "'Studies show this is true'" },
          { id: "b", text: "'A 2023 Harvard study published in Nature, surveying 10,000 participants, found...'" },
          { id: "c", text: "'I read somewhere that...'" },
          { id: "d", text: "'It's common knowledge that...'" }
        ],
        correctAnswer: "b",
        explanation: "Option B provides institution (Harvard), date (2023), publication (Nature), and methodology (10,000 participants). This is verifiable and credible. The other options are vague and unverifiable, undermining the evidence's persuasive power.",
      },
      {
        type: "content",
        title: "Verbal Citation in Speeches",
        content: "How you say citations matters:\n\n**Before the Evidence:**\nIntroduce before reading: 'According to [source, credentials, date]...' Then read the evidence.\n\n**Keep It Concise:**\nDon't read long credentials unless they're crucial. 'Dr. Smith, an economist at MIT, 2023' is often sufficient.\n\n**Emphasize Key Credentials:**\nIf credentials matter for this claim, slow down for them: 'According to Dr. Jane Smith—who is the former director of the NIH and current professor of epidemiology at Harvard—...'\n\n**Make Dates Clear:**\nIf recency matters, emphasize: '...in a study published just last year...'\n\n**When Reading Cards:**\n• Highlight/underline the key claim\n• Read clearly at appropriate speed\n• Make clear where the evidence begins and ends\n\n**Attribution Phrases:**\n• 'Evidence from X shows...'\n• 'According to X...'\n• 'X argues that...' (for opinions)\n• 'X found that...' (for research findings)",
        keyPoints: [
          "Introduce sources before reading evidence",
          "Keep verbal citations concise but complete",
          "Emphasize key credentials when they matter",
        ],
      },
      {
        type: "content",
        title: "Written Briefs and Cards",
        content: "For evidence files and briefs:\n\n**Standard Format:**\n• Tag line (your claim in a sentence)\n• Citation header (author, credentials, source, date)\n• Evidence text (often with highlights/underlines)\n\n**Example Card:**\n```\nClimate change is accelerating beyond projections\n\nDr. Sarah Chen, climate scientist at NASA, writing for Science, 2023\n\n\"Recent data shows that ice sheet melt is occurring 50% faster than models predicted just five years ago. This acceleration suggests [highlighted text continues]...\"\n```\n\n**Formatting Tips:**\n• Bold or all-caps the tag line\n• Include full citations for verification\n• Highlight or underline what you'll read\n• Note page numbers and access dates for websites\n\n**Organization:**\n• Organize by argument or topic\n• Make evidence easy to find quickly\n• Include table of contents for long files",
        keyPoints: [
          "Standard format: tag, citation, evidence text",
          "Include enough detail for verification",
          "Highlight what you'll actually read",
        ],
      },
      {
        type: "question",
        id: "l10-03-q2",
        question: "Why should you include dates in your citations?",
        options: [
          { id: "a", text: "Dates aren't important for citations" },
          { id: "b", text: "Dates establish recency and help judges evaluate if the evidence is current" },
          { id: "c", text: "Only old sources need dates" },
          { id: "d", text: "Dates make speeches longer" }
        ],
        correctAnswer: "b",
        explanation: "Dates are important because they establish recency. In fast-moving fields, old evidence may be outdated. Dates help judges evaluate whether evidence reflects current knowledge. They also help opponents verify sources by finding the specific publication.",
      },
      {
        type: "content",
        title: "Avoiding Citation Errors",
        content: "Common mistakes to avoid:\n\n**Vague Citations:**\n'Studies show...' 'Experts say...' → Which studies? Which experts?\n\n**Misrepresentation:**\nDon't twist sources to say what they don't. Quote accurately.\n\n**Missing Context:**\nDon't quote out of context in ways that distort meaning.\n\n**Outdated Sources:**\nOld evidence may be wrong. Note dates; prefer recent sources.\n\n**Power Tagging:**\nDon't make your tag line stronger than the evidence supports.\n\n**Insufficient Credentials:**\n'John Smith says...' tells us nothing. Who is John Smith?\n\n**Fabrication:**\nNever make up sources. This can result in disqualification.\n\n**The Test:**\nWould the original author agree that you've represented their work fairly? If not, revise.",
        keyPoints: [
          "Avoid vague 'studies show' citations",
          "Don't misrepresent or fabricate sources",
          "Power-tagged claims should match evidence strength",
        ],
      },
      {
        type: "content",
        title: "Conclusion: Evidence Presented Well",
        content: "You've learned best practices for citation—ensuring your evidence is credible, verifiable, and persuasive.\n\n**Key Takeaways:**\n• Citation builds credibility and enables verification\n• Include source, author, credentials, and date\n• Verbal citations should be concise but complete\n• Written briefs use standard tag-cite-evidence format\n• Avoid vague citations, misrepresentation, and outdated sources\n• Represent sources fairly and accurately\n\n**Looking Ahead:**\nIn the next lesson, we'll explore ethical considerations in debate—fairness, honesty, and intellectual integrity.\n\n**Practice Challenge:**\nReview your current evidence files. Do all cards have complete citations? Could someone verify each source? Improve any that fall short.",
        keyPoints: [
          "Complete citations include source, author, credentials, date",
          "Format consistently in written briefs",
          "Represent sources accurately and fairly",
        ],
      },
    ],
  },
  {
    lessonId: "l10-04",
    pages: [
      {
        type: "content",
        title: "Introduction: Ethics in Debate",
        content: "Debate is competitive, but it operates within ethical boundaries. There are ways to win that undermine the activity, your integrity, and the educational value of the experience.\n\nUnderstanding debate ethics helps you compete effectively while maintaining your integrity and contributing to a healthy debate community.\n\nThis lesson explores the ethical principles that guide fair and honest debate, from evidence ethics to competitive fairness to sportsmanship.",
      },
      {
        type: "content",
        title: "Evidence Ethics",
        content: "Evidence integrity is foundational:\n\n**Never Fabricate:**\nMaking up sources, quotes, or data is the most serious ethical violation. Consequences can include disqualification and reputation damage.\n\n**Quote Accurately:**\nDon't alter words to change meaning. If you edit for length, use ellipses and don't distort the meaning.\n\n**Cite Fully:**\nInclude enough information for verification. Hiding sources suggests you don't want scrutiny.\n\n**Represent Fairly:**\nDon't claim a source says more than it does. Your tag line shouldn't overstate the evidence.\n\n**Disclose Methodology:**\nIf asked, be willing to share the full source. Hiding evidence creates suspicion.\n\n**Update Outdated Evidence:**\nIf you learn your evidence is outdated or refuted, stop using it.\n\n**The Standard:**\nWould you be comfortable if your evidence practices were fully transparent to judges, opponents, and the community?",
        keyPoints: [
          "Never fabricate evidence",
          "Quote accurately and represent fairly",
          "Be willing to share and verify sources",
        ],
      },
      {
        type: "content",
        title: "Competitive Fairness",
        content: "Fair competition makes debate worthwhile:\n\n**Time Limits:**\nRespect speech times. Significantly exceeding time is unfair.\n\n**Preparation Violations:**\nDon't use prep time when it's not your turn. Don't use technology to cheat during rounds.\n\n**Disclosure:**\nMany circuits have disclosure norms. Follow them—they promote preparation and fairness.\n\n**Accessibility:**\nMake your arguments comprehensible. Deliberately incomprehensible strategies harm the activity.\n\n**Opponent Treatment:**\n• Shake hands before and after\n• Don't be deliberately rude or hostile\n• Handle disputes professionally\n\n**Judge Relations:**\n• Accept decisions gracefully\n• Don't argue with judges publicly\n• Use proper channels for legitimate concerns",
        keyPoints: [
          "Respect time limits and rules",
          "Follow circuit norms on disclosure",
          "Treat opponents and judges with respect",
        ],
      },
      {
        type: "question",
        id: "l10-04-q1",
        question: "What should you do if you discover that evidence you've been using has been refuted by newer research?",
        options: [
          { id: "a", text: "Keep using it since you've already prepared with it" },
          { id: "b", text: "Stop using the outdated evidence and update your files" },
          { id: "c", text: "Hide the newer research so opponents don't find it" },
          { id: "d", text: "Change the date on your evidence" }
        ],
        correctAnswer: "b",
        explanation: "Ethical debaters update their evidence when they learn it's outdated or refuted. Continuing to use evidence you know is wrong, hiding contrary research, or altering dates are all serious ethical violations. Update your files with current, accurate evidence.",
      },
      {
        type: "content",
        title: "Intellectual Honesty",
        content: "Honest argumentation builds trust and skills:\n\n**Don't Strawman:**\nRepresent opponents' arguments accurately. Attacking distorted versions is intellectually dishonest.\n\n**Acknowledge Valid Points:**\nPretending opponents said nothing worthwhile is dishonest. Grant what deserves granting.\n\n**Admit Uncertainty:**\nDon't claim more certainty than evidence supports. Use appropriate qualifiers.\n\n**Take Positions Seriously:**\nEven if you disagree with the side you're assigned, argue it seriously and fairly.\n\n**Self-Awareness:**\nNotice when you're rationalizing rather than reasoning. Check your own biases.\n\n**The Growth Mindset:**\nDebate is educational. Winning through dishonest tactics teaches bad habits and undermines your development.",
        keyPoints: [
          "Represent opponents accurately",
          "Acknowledge valid points and uncertainty",
          "Debate assigned sides seriously and fairly",
        ],
      },
      {
        type: "content",
        title: "Community Responsibility",
        content: "You're part of a community:\n\n**Mentorship:**\nHelp younger debaters learn. Share knowledge and support growth.\n\n**Positive Culture:**\nYour behavior shapes the community. Model the culture you want.\n\n**Inclusion:**\nMake debate welcoming. Don't tolerate harassment or exclusion.\n\n**Constructive Criticism:**\nGive feedback that helps others improve. Be honest but kind.\n\n**Tournament Conduct:**\n• Be punctual\n• Follow rules\n• Thank judges and tournament staff\n• Clean up after yourself\n\n**Long-Term Perspective:**\nYour reputation follows you. The community is small. Character matters more than any single round.",
        keyPoints: [
          "Support newer debaters",
          "Model positive behavior",
          "Build an inclusive, supportive community",
        ],
      },
      {
        type: "question",
        id: "l10-04-q2",
        question: "What's the main reason to maintain ethical standards in debate even when you could win by cutting corners?",
        options: [
          { id: "a", text: "There's no benefit to ethics if you can get away with violations" },
          { id: "b", text: "Ethics build skills, reputation, and a healthy community that benefits everyone" },
          { id: "c", text: "Ethics only matter if you get caught" },
          { id: "d", text: "Winning is all that matters" }
        ],
        correctAnswer: "b",
        explanation: "Ethical conduct builds genuine skills (dishonest wins don't teach you), protects your reputation (the community is small and memories long), and maintains a healthy activity that benefits everyone. Short-term gains from violations create long-term costs.",
      },
      {
        type: "content",
        title: "Conclusion: Integrity in Competition",
        content: "You've learned that ethical conduct is foundational to meaningful debate.\n\n**Key Takeaways:**\n• Evidence ethics: Never fabricate; quote accurately; represent fairly\n• Competitive fairness: Respect rules, opponents, and judges\n• Intellectual honesty: Don't strawman; acknowledge valid points; admit uncertainty\n• Community responsibility: Mentor, model positive behavior, build inclusion\n• Long-term perspective: Character and reputation matter more than single wins\n\n**Looking Ahead:**\nIn the next lesson, we'll discuss strategies for success in competitive debate—practical tips for performing your best.\n\n**Practice Reflection:**\nThink about your own debate practices. Where are you strong ethically? Where could you improve? Honest self-assessment is itself an ethical practice.",
        keyPoints: [
          "Ethical conduct is foundational",
          "Build skills and reputation through integrity",
          "Contribute to a healthy debate community",
        ],
      },
    ],
  },
  {
    lessonId: "l10-05",
    pages: [
      {
        type: "content",
        title: "Introduction: Strategies for Success",
        content: "You've learned a tremendous amount about argumentation, evidence, and debate skills. Now let's focus on practical strategies for performing your best in competition.\n\nSuccess in debate combines preparation, execution, and adaptation. The best debaters don't just know the material—they know how to perform under pressure, adapt to circumstances, and present their best selves.\n\nThis lesson offers practical advice for competitive success, drawing together skills you've developed throughout the curriculum.",
      },
      {
        type: "content",
        title: "Preparation Strategies",
        content: "Thorough preparation is the foundation of success:\n\n**Research Deeply:**\n• Understand both sides of your topics\n• Find your best evidence on key arguments\n• Anticipate what opponents will run\n\n**Organize Effectively:**\n• Clear evidence files you can navigate quickly\n• Briefs organized by topic and argument\n• Prepped blocks against common positions\n\n**Practice Out Loud:**\n• Time your speeches\n• Practice with partners or alone\n• Get comfortable with your cases\n\n**Preparation Rituals:**\n• Consistent routines reduce anxiety\n• Review key points before rounds\n• Warm up your voice and body\n\n**The Day Before:**\n• Don't cram—review, then rest\n• Get good sleep\n• Prepare materials and clothes\n\n**The Day Of:**\n• Arrive early\n• Check room assignments\n• Warm up physically and mentally",
        keyPoints: [
          "Research both sides thoroughly",
          "Organize evidence for quick access",
          "Practice out loud and time yourself",
        ],
      },
      {
        type: "content",
        title: "In-Round Execution",
        content: "How you perform in the round matters:\n\n**Flowing Well:**\n• Accurate notes capture what you need to respond to\n• Use abbreviations you understand\n• Track dropped arguments on both sides\n\n**Time Management:**\n• Plan speech structure before speaking\n• Know what's essential vs. optional\n• End with your strongest points, not rushed conclusions\n\n**Adaptability:**\n• Adjust to the judge and opponent\n• Respond to what's actually said, not your prepared responses\n• Read the room\n\n**Strategic Choices:**\n• Choose which arguments to emphasize\n• Drop weak points instead of wasting time\n• Focus on what wins the round\n\n**Stay Composed:**\n• Handle unexpected arguments calmly\n• Don't show frustration\n• Project confidence even when struggling\n\n**Cross-Examination:**\n• Have specific goals for each cross-ex\n• Listen to answers before following up\n• Stay in control without being hostile",
        keyPoints: [
          "Flow accurately to capture key arguments",
          "Manage time strategically",
          "Adapt to what's actually happening in the round",
        ],
      },
      {
        type: "question",
        id: "l10-05-q1",
        question: "What's the best approach when your opponent runs an argument you didn't anticipate?",
        options: [
          { id: "a", text: "Panic and give up" },
          { id: "b", text: "Stay calm, apply your critical thinking skills, and respond to the argument as best you can" },
          { id: "c", text: "Pretend they didn't make the argument" },
          { id: "d", text: "Attack them personally" }
        ],
        correctAnswer: "b",
        explanation: "Unexpected arguments happen. The best response is to stay calm and apply your critical thinking skills—evaluate the argument's logic, evidence, and implications, then respond as best you can. This is a test of genuine debate skills, not just preparation.",
      },
      {
        type: "content",
        title: "Mental Game",
        content: "Mindset affects performance:\n\n**Confidence Without Arrogance:**\n• Believe in your preparation\n• Respect opponents without being intimidated\n• Confidence is earned through preparation\n\n**Handling Nerves:**\n• Some anxiety is normal and helpful\n• Deep breaths calm the nervous system\n• Focus on the task, not the stakes\n\n**Bouncing Back:**\n• Losses happen to everyone\n• Analyze what you can improve\n• Don't dwell during tournaments\n\n**Focus:**\n• Be fully present in each round\n• Don't think about past rounds or future scenarios\n• Give this round your full attention\n\n**Self-Talk:**\n• Replace 'I can't' with 'I'll try my best'\n• Notice and challenge negative thoughts\n• Treat yourself as you'd treat a teammate",
        keyPoints: [
          "Confidence comes from preparation",
          "Manage nerves with breathing and focus",
          "Learn from losses without dwelling",
        ],
      },
      {
        type: "content",
        title: "Long-Term Development",
        content: "Getting better over time:\n\n**Seek Feedback:**\n• Ask judges for RFDs (reasons for decision)\n• Request feedback from coaches and teammates\n• Watch recordings of yourself\n\n**Learn from Losses:**\n• What arguments caught you off-guard?\n• What evidence do you need?\n• What skills need work?\n\n**Study Others:**\n• Watch successful debaters\n• What do they do well?\n• Adapt techniques to your style\n\n**Expand Your Range:**\n• Try different argument styles\n• Practice against varied opponents\n• Get outside your comfort zone\n\n**Teach Others:**\n• Teaching clarifies your own understanding\n• Helping others builds community\n• Mentorship develops leadership skills\n\n**Balanced Approach:**\nDebate is important, but so is rest, relationships, and other pursuits. Sustainable success requires balance.",
        keyPoints: [
          "Seek feedback and learn from losses",
          "Study and adapt from successful debaters",
          "Teach others to deepen your own understanding",
        ],
      },
      {
        type: "question",
        id: "l10-05-q2",
        question: "What's the most productive thing to do after losing a debate round?",
        options: [
          { id: "a", text: "Blame the judge and opponent" },
          { id: "b", text: "Analyze what you could have done better and prepare to improve" },
          { id: "c", text: "Give up on debate entirely" },
          { id: "d", text: "Avoid thinking about it ever again" }
        ],
        correctAnswer: "b",
        explanation: "Losses are learning opportunities. Analyze what happened: What arguments worked? What didn't? What would you do differently? This growth mindset leads to improvement. Blaming others or avoiding reflection prevents learning.",
      },
      {
        type: "content",
        title: "Conclusion: The Path Forward",
        content: "You've now learned practical strategies for competitive success.\n\n**Key Takeaways:**\n• Preparation: research, organize, practice, and rest\n• Execution: flow well, manage time, adapt, stay composed\n• Mental game: confidence, handling nerves, bouncing back\n• Development: seek feedback, learn from losses, teach others\n• Balance: debate matters, but so does the rest of life\n\n**Looking Ahead:**\nIn the next lesson, we'll conduct a comprehensive review of Section 1, consolidating everything you've learned in Units 1-10.\n\n**Continued Growth:**\nRemember: improvement is ongoing. Every round teaches something. Stay curious, stay humble, and keep getting better.",
        keyPoints: [
          "Success combines preparation, execution, and mindset",
          "Learn from feedback and losses",
          "Balance intense effort with rest and perspective",
        ],
      },
    ],
  },
  {
    lessonId: "l10-06",
    pages: [
      {
        type: "content",
        title: "Introduction: Section 1 Comprehensive Review",
        content: "Congratulations! You've completed Units 1-10—the entire Beginner section of the Debate Curriculum. This review lesson consolidates the major concepts from all ten units, preparing you to advance to Intermediate content.\n\nYou've covered an enormous amount of ground: what debate is, how to structure arguments, logical fallacies, evidence evaluation, persuasion techniques, delivery skills, and ethical practice. Let's bring it all together.",
      },
      {
        type: "content",
        title: "Core Argument Skills (Units 1-2)",
        content: "**Unit 1: Foundations**\n• Debate vs. argument: structured, evidence-based reasoning\n• The role of logic, evidence, and persuasion\n• Different debate formats and their characteristics\n\n**Unit 2: Argument Construction**\n• Claim-Evidence-Reasoning structure\n• The Toulmin model: Claim, Data, Warrant, Backing, Qualifier, Rebuttal\n• Types of claims: fact, value, policy\n• Building complete, logical arguments\n\n**Key Skills:**\n• Structure every argument with CER\n• Make warrants explicit\n• Choose appropriate claim types for your purpose",
        keyPoints: [
          "Debate uses structured, evidence-based reasoning",
          "Claim-Evidence-Reasoning is the fundamental structure",
          "Toulmin provides a comprehensive argument framework",
        ],
      },
      {
        type: "content",
        title: "Research and Evidence (Units 3-4)",
        content: "**Unit 3: Research Skills**\n• Finding quality sources across platforms\n• The CRAAP test: Currency, Relevance, Authority, Accuracy, Purpose\n• Primary vs. secondary sources\n\n**Unit 4: Evidence Evaluation**\n• Source credibility assessment\n• Statistical evidence: sample size, significance, effect size\n• Distinguishing correlation from causation\n\n**Key Skills:**\n• Evaluate every source with CRAAP\n• Prefer peer-reviewed, recent, unconflicted sources\n• Understand what statistics actually show",
        keyPoints: [
          "Apply CRAAP test to all sources",
          "Know source types and their appropriate uses",
          "Distinguish correlation from causation",
        ],
      },
      {
        type: "content",
        title: "Logical Fallacies (Units 5-7)",
        content: "**Major Fallacies Covered:**\n• Ad hominem: Attacking the person, not the argument\n• Strawman: Misrepresenting opponent's position\n• False dichotomy: Presenting only two options when more exist\n• Slippery slope: Assuming inevitable chain without evidence\n• Appeal to ignorance: Arguing from lack of evidence\n• Post hoc: Assuming sequence proves causation\n• Red herring: Diverting from the actual issue\n• Appeal to tradition/novelty: Age as evidence\n• Appeal to emotion: Substituting feeling for logic\n\n**Key Skills:**\n• Recognize fallacies in opponent arguments\n• Avoid committing them yourself\n• Attack the fallacy, not just the content",
        keyPoints: [
          "Recognize major fallacies",
          "Name fallacies when responding",
          "Keep your own arguments fallacy-free",
        ],
      },
      {
        type: "question",
        id: "l10-06-q1",
        question: "Which fallacy involves attacking an opponent's character rather than their argument?",
        options: [
          { id: "a", text: "Strawman" },
          { id: "b", text: "Ad hominem" },
          { id: "c", text: "False dichotomy" },
          { id: "d", text: "Post hoc" }
        ],
        correctAnswer: "b",
        explanation: "Ad hominem attacks the person rather than their argument. It's fallacious because a person's character doesn't determine whether their argument is valid. Always respond to arguments, not personal characteristics.",
      },
      {
        type: "content",
        title: "Delivery and Presence (Units 5, 6)",
        content: "**Non-Verbal Communication:**\n• Posture: Stand balanced, shoulders back, head level\n• Eye contact: 70-80% with judges\n• Gestures: Match content, avoid nervous habits\n• Movement: Purposeful, not pacing\n• Facial expressions: Match content, stay professional\n\n**Speed and Clarity:**\n• Adapt to your judge (lay vs. flow)\n• Signposting helps listeners follow structure\n• Speed variation emphasizes key points\n\n**Key Skills:**\n• Integrate all non-verbal elements authentically\n• Match speaking pace to audience\n• Project confidence through presence",
        keyPoints: [
          "Non-verbal communication reinforces your words",
          "Adapt speed to judge and context",
          "Confident presence comes from practice",
        ],
      },
      {
        type: "content",
        title: "Persuasion and Engagement (Units 8-9)",
        content: "**Appeals and Persuasion:**\n• Logos: Logic and evidence\n• Ethos: Credibility and authority\n• Pathos: Emotion (supporting logic, not replacing it)\n\n**Expert Testimony:**\n• Match expertise to specific claims\n• Consensus is stronger than individual opinion\n• Check for conflicts of interest\n\n**Intellectual Honesty:**\n• Acknowledge limitations\n• Represent opponents fairly\n• Strategic concessions build credibility\n\n**Key Skills:**\n• Balance logic, credibility, and emotion\n• Use experts appropriately\n• Build trust through honesty",
        keyPoints: [
          "Integrate logos, ethos, and pathos",
          "Evaluate expert qualifications carefully",
          "Honesty builds credibility",
        ],
      },
      {
        type: "content",
        title: "Strategy and Ethics (Unit 10)",
        content: "**Anticipating Objections:**\n• Preempt likely attacks\n• 'Even if' creates layered defense\n• Strategic concessions strengthen credibility\n\n**Competition Strategies:**\n• Preparation: Research, organize, practice\n• Execution: Flow, time management, adaptation\n• Mental game: Confidence, handling nerves\n\n**Ethics:**\n• Evidence integrity is non-negotiable\n• Fair competition respects rules and opponents\n• Intellectual honesty builds skills and reputation\n\n**Key Skills:**\n• Think ahead to opponent responses\n• Execute under pressure\n• Maintain integrity always",
        keyPoints: [
          "Anticipate objections with 'even if'",
          "Balance preparation and adaptation",
          "Ethics are foundational, not optional",
        ],
      },
      {
        type: "question",
        id: "l10-06-q2",
        question: "What's the relationship between intellectual honesty and credibility in debate?",
        options: [
          { id: "a", text: "Honesty hurts credibility by revealing weaknesses" },
          { id: "b", text: "Honesty builds credibility by showing judges they can trust you" },
          { id: "c", text: "Credibility has nothing to do with honesty" },
          { id: "d", text: "Always hide limitations to seem stronger" }
        ],
        correctAnswer: "b",
        explanation: "Intellectual honesty—acknowledging limitations, representing opponents fairly, admitting uncertainty—builds credibility because it shows judges they can trust you. Pretending to have no weaknesses seems suspicious. Honesty builds trust that enhances everything else you say.",
      },
      {
        type: "content",
        title: "Conclusion: Ready for Intermediate",
        content: "You've completed Section 1! You now have foundational skills in argumentation, research, critical thinking, delivery, and ethical practice.\n\n**Section 1 Complete:**\n• 10 units covering debate fundamentals\n• Argument structure (CER, Toulmin)\n• Evidence evaluation and research\n• Major logical fallacies\n• Delivery and presence\n• Strategic and ethical practice\n\n**What's Ahead:**\nSection 2 (Intermediate) will build on these foundations with more advanced techniques, format-specific skills, and deeper strategic thinking.\n\n**Congratulations!**\nTake pride in what you've learned. You have a solid foundation for becoming an excellent debater. Keep practicing, keep learning, and keep growing.",
        keyPoints: [
          "Section 1 complete with foundational skills",
          "Section 2 builds with advanced techniques",
          "Keep practicing to make skills automatic",
        ],
      },
    ],
  },
  {
    lessonId: "l10-07",
    pages: [
      {
        type: "content",
        title: "Introduction: Section 1 Capstone",
        content: "This is your Beginner Section capstone—a final synthesis of everything you've learned across Units 1-10. We'll revisit key concepts, connect them, and prepare you to apply these skills with confidence.\n\nAs you complete this lesson, reflect on how far you've come. The skills you've developed in critical thinking, argumentation, evidence evaluation, and delivery will serve you not just in debate, but in academics, career, and citizenship.",
      },
      {
        type: "content",
        title: "The Complete Debater: Skills Integration",
        content: "Great debaters integrate all their skills seamlessly:\n\n**Research → Arguments → Delivery:**\n1. Find credible, relevant evidence\n2. Structure it with CER and Toulmin\n3. Present with confidence and clarity\n\n**Attack → Defense → Counter:**\n1. Recognize fallacies and weak evidence\n2. Defend your case against attacks\n3. Turn opponent arguments when possible\n\n**Preparation → Adaptation → Execution:**\n1. Prepare thoroughly before rounds\n2. Adapt to what actually happens\n3. Execute under pressure\n\n**The Integration:**\nThese aren't separate skills—they're one interconnected practice. Strong research enables strong arguments. Good delivery makes strong arguments persuasive. Sharp thinking catches flaws in real time.",
        keyPoints: [
          "Skills integrate rather than stand alone",
          "Each skill supports and enhances others",
          "Practice the whole, not just the parts",
        ],
      },
      {
        type: "content",
        title: "Critical Thinking as Foundation",
        content: "Everything builds on critical thinking:\n\n**Evaluating Claims:**\n• Is this claim supported by evidence?\n• Is the evidence credible and relevant?\n• Does the logic follow?\n\n**Spotting Manipulation:**\n• Is this a fallacy?\n• Is emotion substituting for logic?\n• Is evidence being cherry-picked or misrepresented?\n\n**Making Judgments:**\n• What's the strongest version of each argument?\n• Which considerations should outweigh?\n• What would change my mind?\n\n**Everyday Application:**\nThese skills apply beyond debate: evaluating news, making decisions, participating in democracy. Debate is training for clearer thinking in all contexts.",
        keyPoints: [
          "Critical thinking underlies all debate skills",
          "Evaluate evidence, logic, and potential manipulation",
          "Skills transfer to all areas of life",
        ],
      },
      {
        type: "content",
        title: "The Value of the Activity",
        content: "Reflect on why debate matters:\n\n**Intellectual Skills:**\n• Research and evidence evaluation\n• Logical reasoning and argument construction\n• Recognizing fallacies and manipulation\n\n**Communication Skills:**\n• Clear, organized speaking\n• Confident presence\n• Persuasive delivery\n\n**Character Development:**\n• Intellectual honesty\n• Handling pressure and setbacks\n• Respecting opponents and rules\n\n**Civic Value:**\n• Understanding multiple perspectives\n• Evaluating political claims\n• Engaging constructively in democracy\n\n**Career Preparation:**\n• These skills are valued in law, business, policy, education, and virtually every professional field.",
        keyPoints: [
          "Debate develops intellectual and communication skills",
          "Character and civic engagement benefit",
          "Skills transfer to academic and professional success",
        ],
      },
      {
        type: "question",
        id: "l10-07-q1",
        question: "What is the main benefit of learning to argue both sides of issues?",
        options: [
          { id: "a", text: "You learn to be dishonest" },
          { id: "b", text: "You develop genuine understanding of multiple perspectives" },
          { id: "c", text: "You only ever argue your own beliefs" },
          { id: "d", text: "It has no value" }
        ],
        correctAnswer: "b",
        explanation: "Arguing both sides develops genuine understanding of multiple perspectives. This makes you a stronger advocate for any position (you understand the objections) and a more thoughtful citizen (you understand why reasonable people disagree). It builds empathy and intellectual humility.",
      },
      {
        type: "content",
        title: "Looking Back and Forward",
        content: "**What You've Learned:**\n• Debate fundamentals and formats\n• Argument structure (CER, Toulmin)\n• Research and source evaluation\n• Logical fallacies and how to counter them\n• Statistical and evidence literacy\n• Delivery and non-verbal communication\n• Strategic thinking and preparation\n• Ethical practice and community responsibility\n\n**What's Ahead in Section 2:**\n• Format-specific skills\n• Advanced argumentation techniques\n• Deeper research strategies\n• Complex case construction\n• Judging paradigms\n• Tournament strategy\n\n**Your Ongoing Journey:**\nLearning never stops. Every round teaches something. Keep the growth mindset you've developed.",
        keyPoints: [
          "Section 1 provided strong foundations",
          "Section 2 builds advanced skills",
          "Continuous learning is the path forward",
        ],
      },
      {
        type: "content",
        title: "Final Reflection",
        content: "Take a moment to appreciate your progress:\n\n**You Can Now:**\n• Construct clear, logical arguments\n• Find and evaluate quality evidence\n• Recognize and respond to fallacies\n• Present with confidence and clarity\n• Engage respectfully with disagreement\n• Think critically about claims and evidence\n\n**Qualities You've Developed:**\n• Intellectual curiosity\n• Analytical rigor\n• Honest engagement\n• Poise under pressure\n• Respect for evidence and logic\n\n**The Ongoing Practice:**\nThese skills improve with use. Every conversation, every article you read, every decision you make is practice for clearer thinking.",
      },
      {
        type: "question",
        id: "l10-07-q2",
        question: "What's the most important mindset for continued growth as a debater?",
        options: [
          { id: "a", text: "Believing you already know everything" },
          { id: "b", text: "A growth mindset: every round teaches something; feedback helps you improve" },
          { id: "c", text: "Avoiding feedback to protect your confidence" },
          { id: "d", text: "Only competing against weaker opponents" }
        ],
        correctAnswer: "b",
        explanation: "A growth mindset—viewing every round as a learning opportunity and embracing feedback—is essential for continued improvement. The best debaters stay curious, seek feedback, and continuously refine their skills. Complacency or avoiding challenge limits growth.",
      },
      {
        type: "content",
        title: "Congratulations: Section 1 Complete",
        content: "You've completed the Beginner section of the Debate Curriculum!\n\n**Your Achievement:**\n• 70 lessons across 10 comprehensive units\n• Strong foundation in all debate fundamentals\n• Ready for Intermediate material\n\n**Next Steps:**\n• Continue to Section 2 for intermediate content\n• Practice what you've learned in actual debates\n• Seek feedback and continue growing\n\n**Remember:**\nDebate skills are life skills. The critical thinking, communication, and ethical engagement you've developed will serve you far beyond any competition.\n\n**Well done! Your journey continues...**",
        keyPoints: [
          "Section 1 complete: 70 lessons, solid foundations",
          "Ready to advance to Intermediate content",
          "Keep practicing and growing",
        ],
      },
    ],
  },
];
