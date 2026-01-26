import { MultiPageLesson } from "./types";

export const UNIT_10_LESSONS: MultiPageLesson[] = [
  {
    lessonId: "l10-01",
    pages: [
      {
        type: "content",
        title: "Introduction: Avoiding Personal Attacks",
        content: "In earlier lessons, you learned about the ad hominem fallacy—attacking the person instead of the argument. Now let's explore the broader principle: why personal attacks undermine your credibility and distract from winning debates.\n\nPersonal attacks are tempting. When you're frustrated or losing, attacking your opponent feels satisfying. But it's almost always counterproductive. Judges penalize it, audiences lose respect, and you waste time you could spend on substance.\n\nIn this lesson, you'll learn why personal attacks fail strategically, how to keep focus on ideas even when provoked, and how to respond professionally when opponents attack you.",
      },
      {
        type: "content",
        title: "Why Personal Attacks Fail",
        content: "Personal attacks backfire for several reasons:\n\n**They Don't Refute Anything:**\nCalling someone incompetent doesn't address their argument. The argument stands unrefuted while you've wasted speaking time.\n\n**They Damage Your Credibility:**\nJudges notice when debaters resort to attacks. It suggests you can't win on substance.\n\n**They Lower Speaker Points:**\nMost ballots include professionalism criteria. Attacks cost you points.\n\n**They Distract You:**\nEnergy spent on attacks is energy not spent on winning arguments.\n\n**They Escalate Conflicts:**\nAttacks invite counter-attacks, derailing the debate into mutual hostility.\n\n**The Strategic Reality:**\nEven if an attack lands emotionally, it rarely wins rounds. Focus on arguments wins rounds.",
        keyPoints: [
          "Personal attacks don't refute arguments",
          "They damage your credibility with judges",
          "Energy spent attacking is wasted on non-winning moves",
        ],
      },
      {
        type: "content",
        title: "Common Forms of Personal Attacks",
        content: "Recognize these attack patterns—both to avoid using them and to identify when opponents use them:\n\n**Direct Insults:**\n'My opponent is clearly inexperienced/ignorant/confused...'\n\n**Condescension:**\n'Let me explain this slowly so my opponent can understand...'\n\n**Questioning Motives:**\n'My opponent only argues this because they want [negative attribution]...'\n\n**Dismissive Language:**\n'That argument is laughable/ridiculous/absurd...'\n\n**Tone Policing:**\n'My opponent seems upset/defensive/aggressive...'\n\n**Credential Attacks:**\n'What does my opponent know about this topic anyway?'\n\n**Subtle Attacks:**\nEven raised eyebrows, sighing, or dismissive gestures count as attacks.\n\n**The Pattern:**\nAll of these focus on the person rather than the argument. All waste time. All can cost you the round.",
        keyPoints: [
          "Direct insults, condescension, and dismissiveness are all attacks",
          "Even subtle gestures can be perceived as attacks",
          "All forms waste time and hurt your credibility",
        ],
      },
      {
        type: "question",
        id: "l10-01-q1",
        question: "Which response to an opponent's argument is a personal attack?",
        options: [
          { id: "a", text: "'This argument fails because the evidence is outdated.'" },
          { id: "b", text: "'Let me explain this simply so my opponent can understand.'" },
          { id: "c", text: "'The reasoning here has a logical flaw...'" },
          { id: "d", text: "'I disagree with this conclusion because...'" }
        ],
        correctAnswer: "b",
        explanation: "Option B is condescending—implying the opponent can't understand complex ideas. This is a personal attack disguised as explanation. The other options focus on the argument itself (evidence, reasoning, conclusions) without attacking the person.",
      },
      {
        type: "content",
        title: "Keeping Focus on Ideas",
        content: "Train yourself to stay substantive:\n\n**Reframe Your Thinking:**\nInstead of 'My opponent is wrong,' think 'This argument is wrong.' Arguments are separate from people.\n\n**Use Neutral Language:**\n• 'This claim fails...' not 'They fail to understand...'\n• 'The evidence shows...' not 'Anyone can see...'\n• 'This reasoning is flawed...' not 'This is ridiculous...'\n\n**Prepare Substantive Responses:**\nIf you know opponent arguments, prepare responses to the IDEAS, not the people.\n\n**Pause Before Reacting:**\nWhen frustrated, take a breath. Your next words should attack arguments, not people.\n\n**Focus on Winning:**\nRemind yourself: attacks don't win rounds. Arguments win rounds.\n\n**The Professional Standard:**\nImagine a transcript of your speech being read by future employers. Would you be proud of how you engaged?",
        keyPoints: [
          "Separate arguments from the people making them",
          "Use neutral language focused on claims and evidence",
          "Pause and refocus when frustrated",
        ],
      },
      {
        type: "content",
        title: "Responding When Attacked",
        content: "When opponents attack you personally:\n\n**1. Don't Retaliate:**\nResist the temptation to attack back. It only escalates and wastes time.\n\n**2. Brief Acknowledgment:**\n'I'll let the judge evaluate that characterization. Let's return to the arguments...'\n\n**3. Redirect to Substance:**\n'Setting that aside, my argument stands unrebutted. Here's why...'\n\n**4. Use It Against Them:**\n'Notice my opponent has resorted to personal attacks rather than addressing my evidence. That tells you something about the strength of their position.'\n\n**5. Stay Calm:**\nVisible frustration gives attackers what they want. Stay composed.\n\n**The Goal:**\nMake the attack cost your opponent, not you. Judges notice who stays professional under pressure.",
        keyPoints: [
          "Never retaliate—it escalates and wastes time",
          "Redirect to substance quickly",
          "Staying calm signals confidence and professionalism",
        ],
      },
      {
        type: "question",
        id: "l10-01-q2",
        question: "Your opponent calls your argument 'laughable.' What's the best response?",
        options: [
          { id: "a", text: "Call their argument laughable in return" },
          { id: "b", text: "Get visibly angry to show you're offended" },
          { id: "c", text: "'My opponent finds this funny, but hasn't explained why it's wrong. Let me reinforce why this argument succeeds...'" },
          { id: "d", text: "Stop debating and walk out" }
        ],
        correctAnswer: "c",
        explanation: "The best response turns the attack against them by noting they haven't actually refuted your argument. Then redirect to substance. This makes them look unprofessional while keeping you focused on winning the debate.",
      },
      {
        type: "content",
        title: "Real-World Scenarios: Recognizing Attack Patterns",
        content: "Let's examine personal attacks in actual debate contexts:\n\n**Scenario 1: Cross-Examination Frustration**\nYou ask a clear question. Your opponent evades. You ask again. They evade again. The temptation: 'Why can't you answer a simple question?' The better approach: 'I'll note for the judge that my opponent hasn't addressed this question. Moving on...'\n\n**Scenario 2: The Experienced Opponent**\nYou're debating someone with more trophies. The temptation: feel intimidated or resent their success. The attack version: 'Just because you've won before doesn't make you right.' The better approach: Ignore their record entirely—focus on THIS debate.\n\n**Scenario 3: Perceived Unfairness**\nYou feel the topic favors one side. The attack version: 'Anyone arguing the other side is being intellectually dishonest.' The better approach: Make the best case possible regardless of side assignment.\n\n**The Lesson:**\nIn every scenario where attacks seem tempting, there's always a substantive alternative that serves you better.",
        keyPoints: [
          "Frustration in cross-ex doesn't justify attacks",
          "Opponent experience is irrelevant to current arguments",
          "Topic fairness complaints distract from making your case",
        ],
      },
      {
        type: "content",
        title: "Building Professional Habits",
        content: "Professionalism is a habit, not a decision made in the moment. Build these practices:\n\n**Pre-Round Preparation:**\n• Review your arguments for any dismissive language\n• Prepare responses to IDEAS, not to people\n• Remind yourself of your goals: win on substance\n\n**During the Round:**\n• Monitor your word choices\n• Check your body language (facial expressions, gestures)\n• Take a breath before responding to provocations\n\n**Post-Round Reflection:**\n• Did any of your language cross the line?\n• Were there moments you felt personally attacked? How did you handle them?\n• What would you do differently?\n\n**Long-Term Development:**\n• Watch recordings of your debates—how do you come across?\n• Seek feedback from coaches specifically about professionalism\n• Study debaters known for graceful conduct under pressure",
        keyPoints: [
          "Prepare for professionalism before rounds begin",
          "Self-monitor language and body language during rounds",
          "Reflect afterward to improve continuously",
        ],
      },
      {
        type: "content",
        title: "The Competitive Advantage of Respect",
        content: "Professionalism isn't just ethical—it's strategically advantageous:\n\n**Judges Reward It:**\nSpeaker points often include 'professionalism' or 'conduct' criteria. Respectful debaters earn higher points.\n\n**It Unnerves Aggressive Opponents:**\nWhen opponents attack and you stay calm, they often escalate further—digging their own hole while you stay above it.\n\n**It Builds Your Reputation:**\nThe debate community is small. Word spreads about who's pleasant to debate and who isn't. This affects partner opportunities, team selections, and career networking.\n\n**It Improves Your Thinking:**\nWhen you're not emotionally reacting, you think more clearly. Attacks consume cognitive resources better spent on arguments.\n\n**It Attracts Better Coaches:**\nCoaches want to work with students who represent them well. Professionalism opens doors.\n\n**The Bottom Line:**\nRespect isn't a constraint on your success—it's a contributor to it.",
        keyPoints: [
          "Judges explicitly reward professional conduct",
          "Calm responses make aggressive opponents look worse",
          "Reputation in debate affects opportunities",
        ],
      },
      {
        type: "question",
        id: "l10-01-q3",
        question: "During cross-examination, your opponent repeatedly evades your questions. What's the most professional response?",
        options: [
          { id: "a", text: "'Why are you being so evasive? Just answer the question!'" },
          { id: "b", text: "'I'll note for the judge that this question remains unanswered. Let me move on...'" },
          { id: "c", text: "'Everyone can see you're dodging because you have no answer.'" },
          { id: "d", text: "'Are you even prepared for this debate?'" }
        ],
        correctAnswer: "b",
        explanation: "Option B is professional: it flags the evasion for the judge without attacking the opponent personally. The other options—accusing them of evasion, making generalizations about 'everyone,' or questioning their preparation—are all personal attacks that waste your time and damage your credibility.",
      },
      {
        type: "content",
        title: "Conclusion: Ideas Over Personalities",
        content: "You've learned why personal attacks fail and how to keep debates focused on substance.\n\n**Key Takeaways:**\n• Personal attacks waste time and damage your credibility\n• They don't refute arguments—they just distract\n• Keep language neutral and focused on claims, evidence, and reasoning\n• When attacked, redirect to substance without retaliating\n• Staying professional under pressure impresses judges\n• Professionalism is a competitive advantage, not a constraint\n\n**Looking Ahead:**\nIn the next lesson, we'll explore the red herring fallacy—how arguments get derailed by irrelevant topics.\n\n**Practice Challenge:**\nReview your recent debate speeches or notes. Did you use any dismissive language? Any attacks, even subtle ones? Practice reframing those moments to focus purely on arguments.",
        keyPoints: [
          "Personal attacks are strategically counterproductive",
          "Focus on ideas, not personalities",
          "Professional composure wins respect and rounds",
        ],
      },
    ],
  },
  {
    lessonId: "l10-02",
    pages: [
      {
        type: "content",
        title: "Introduction: Red Herring and Irrelevance",
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
        id: "l10-02-q1",
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
        id: "l10-02-q2",
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
        title: "Red Herrings in Different Debate Formats",
        content: "Red herrings appear differently across formats:\n\n**In Policy Debate:**\n• Dropping an argument and hoping judges don't notice while discussing other flows\n• Spending excessive time on one advantage to avoid addressing others\n• Introducing new arguments in rebuttals that shift the focus\n\n**In Lincoln-Douglas:**\n• Abandoning the value/criterion framework for tangential philosophical discussions\n• Focusing on opponent's rhetoric rather than their actual arguments\n• Debating hypotheticals unrelated to the resolution\n\n**In Public Forum:**\n• Crossfire becoming a chance to score emotional points rather than address claims\n• Summary speeches introducing entirely new contentions\n• Final Focus ignoring the actual clash in the round\n\n**In Parliamentary:**\n• POIs that distract from the speaker's main point\n• Bringing up new material in opposition speeches that sidesteps the government case\n\n**The Solution:**\nIn every format, keep a mental (or written) list of the key questions at stake. Return to them.",
        keyPoints: [
          "Each debate format has characteristic red herring patterns",
          "Policy: avoiding dropped arguments; LD: abandoning frameworks",
          "Track key questions and return to them",
        ],
      },
      {
        type: "content",
        title: "Strategic Use of Focus",
        content: "Staying on topic isn't just avoiding fallacies—it's strategic:\n\n**Time Management:**\nEvery second spent on irrelevant topics is a second not spent winning key arguments. In timed debates, focus is a resource.\n\n**Framing the Round:**\nThe debater who controls which questions matter often wins. Don't let opponents drag you to their preferred questions.\n\n**Building Credibility:**\nJudges notice who answers directly and who evades. Direct answering builds trust.\n\n**Forcing Engagement:**\nWhen you persistently return to your key points, opponents must eventually address them or look evasive themselves.\n\n**Example Strategy:**\nIf your strongest argument is economic harm, keep returning to it: 'We've discussed many things, but let's remember the central issue: the economic impact. My opponent still hasn't addressed...'\n\n**The Principle:**\nControl the agenda. Refuse to be diverted. Make your questions the questions of the round.",
        keyPoints: [
          "Focus is a strategic resource in timed debates",
          "Control which questions define the round",
          "Persistent return to key arguments forces opponent engagement",
        ],
      },
      {
        type: "content",
        title: "Practice: Spotting Diversions in Real Time",
        content: "Develop your red herring detection skills:\n\n**The Tracking Method:**\nAs you listen to opponents, mentally (or on paper) note each question they're supposed to address. Check them off as they're answered. What remains?\n\n**The Substitution Test:**\nWhen opponents respond, ask: 'Did they answer question A, or did they actually answer question B?' If B ≠ A, it's a red herring.\n\n**The 'So What' Test:**\nEven if their point is true, ask: 'So what? How does this address my original argument?' If there's no connection, it's irrelevant.\n\n**Practice Exercises:**\n• Watch political debates and count topic changes\n• Read opinion articles and identify when writers shift focus\n• In practice rounds, ask partners to try red herrings—practice detecting them\n\n**Building Automaticity:**\nWith practice, you'll catch diversions in real time without conscious effort. This comes from deliberate training.",
        keyPoints: [
          "Track questions and check off which are actually answered",
          "Use the substitution test: did they answer A or B?",
          "Practice with political debates and media analysis",
        ],
      },
      {
        type: "question",
        id: "l10-02-q3",
        question: "In Policy debate, your opponent spends their entire second constructive discussing advantages you didn't even argue against, ignoring your main disadvantage. What happened?",
        options: [
          { id: "a", text: "They made strong arguments that defeat your case" },
          { id: "b", text: "They used a red herring by discussing irrelevant points and ignoring your key argument" },
          { id: "c", text: "They refuted your disadvantage effectively" },
          { id: "d", text: "This is a standard debate strategy" }
        ],
        correctAnswer: "b",
        explanation: "This is a red herring. By spending time on points you didn't contest while ignoring your main disadvantage, they're diverting from the actual clash in the round. Your response: point out that your disadvantage stands unrebutted and remains the central issue.",
      },
      {
        type: "content",
        title: "Conclusion: Staying on the Scent",
        content: "You've learned to recognize red herrings and keep debates focused on the actual issues.\n\n**Key Takeaways:**\n• Red herring diverts from the actual issue to something irrelevant\n• Watch for subject changes, whataboutism, and emotional diversions\n• Respond by redirecting to the original question\n• Name the tactic so judges recognize it\n• Avoid red herrings yourself by answering directly\n• Signpost when you need to address related points\n• Focus is a strategic resource—control the agenda\n\n**Looking Ahead:**\nIn the next lesson, we'll explore the differences between academic and popular sources.\n\n**Practice Challenge:**\nWatch a political interview or debate. Count how many times questions are answered with unrelated topics. Notice how interviewers (sometimes) redirect. This awareness makes you a more critical consumer of discourse.",
        keyPoints: [
          "Red herring diverts to irrelevant topics",
          "Track the original question to detect diversions",
          "Answer what's asked, not what you'd prefer",
        ],
      },
      {
        type: "practice",
        id: "l10-02-p1",
        title: "Identifying and Responding to Red Herrings",
        description: "Practice recognizing when opponents divert from the actual issue and redirecting the debate back to substance.",
        practice: {
          type: "refutation",
          topic: "Universal basic income should be implemented",
          targetSkill: "Identifying red herring diversions and refocusing on the original argument",
          instructions: "Your AI opponent will attempt to divert the debate away from the actual issue using red herring tactics like whataboutism, emotional diversions, or answering different questions. Identify the diversion, name the tactic, and redirect the debate back to the original issue.",
          exampleResponse: "My opponent has changed the subject from whether UBI reduces poverty to discussing unrelated government programs. This is a red herring. The actual question remains: does UBI effectively reduce poverty? Let me bring us back to the evidence...",
          successCriteria: [
            "Correctly identifies the red herring diversion",
            "Names the specific tactic being used",
            "Redirects to the original issue clearly",
            "Notes that the original argument remains unaddressed",
          ],
        },
      },
    ],
  },
  {
    lessonId: "l10-03",
    pages: [
      {
        type: "content",
        title: "Introduction: Academic vs Popular Sources",
        content: "Not all sources are created equal. In debate, you'll encounter evidence from academic journals, newspapers, magazines, websites, and social media. Understanding the difference between academic and popular sources helps you choose the strongest evidence and attack weaker opponent sources.\n\nAcademic sources go through rigorous peer review; popular sources often don't. Each has appropriate uses, but confusing them—or relying too heavily on weaker sources—can undermine your case.\n\nIn this lesson, you'll learn to distinguish academic from popular sources, understand when each is appropriate, and use this knowledge strategically.",
      },
      {
        type: "content",
        title: "What Makes a Source 'Academic'",
        content: "Academic sources have specific characteristics:\n\n**Peer Review:**\nOther experts in the field review the work before publication. They check methodology, evidence, and conclusions. This catches errors and ensures quality.\n\n**Scholarly Credentials:**\nAuthors are typically professors, researchers, or experts with relevant advanced degrees.\n\n**Citations and References:**\nAcademic work cites its sources extensively, allowing readers to verify claims.\n\n**Specialized Language:**\nWritten for experts, using field-specific terminology.\n\n**Published in Journals:**\nAppears in academic journals, not general-interest publications.\n\n**Examples:**\n• Journal of Political Economy\n• Nature, Science, The Lancet\n• American Economic Review\n• Peer-reviewed university press books\n\n**The Standard:**\nPeer review doesn't guarantee truth, but it does ensure expert scrutiny before publication.",
        keyPoints: [
          "Peer review ensures expert scrutiny",
          "Academic authors have relevant credentials",
          "Extensive citations allow verification",
        ],
      },
      {
        type: "content",
        title: "What Makes a Source 'Popular'",
        content: "Popular sources have different characteristics:\n\n**No Peer Review:**\nEditors review for style and basic accuracy, but not with academic rigor.\n\n**General Audience:**\nWritten for non-specialists; avoids jargon.\n\n**Journalist Authors:**\nOften written by journalists rather than subject-matter experts.\n\n**Current Events Focus:**\nNews and magazines cover recent events quickly.\n\n**Examples of Popular Sources:**\n• Newspapers: New York Times, Wall Street Journal\n• Magazines: The Economist, Time, Newsweek\n• Websites: News sites, blogs, opinion pages\n• Television: News broadcasts, documentaries\n\n**Not Automatically Bad:**\nQuality popular sources (major newspapers, respected magazines) can be excellent for:\n• Current events\n• Summaries of academic research\n• Expert opinion pieces\n• Data and statistics\n\nThe key is knowing what you're using and why.",
        keyPoints: [
          "Popular sources lack peer review",
          "Written for general audiences by journalists",
          "Can be excellent for current events and summaries",
        ],
      },
      {
        type: "question",
        id: "l10-03-q1",
        question: "What's the main difference between academic and popular sources?",
        options: [
          { id: "a", text: "Academic sources are always right; popular sources are always wrong" },
          { id: "b", text: "Academic sources undergo peer review by experts; popular sources typically don't" },
          { id: "c", text: "Popular sources are more reliable because journalists are objective" },
          { id: "d", text: "There's no meaningful difference between them" }
        ],
        correctAnswer: "b",
        explanation: "The key difference is peer review. Academic sources are reviewed by other experts in the field before publication, which catches errors and ensures methodological rigor. Popular sources typically undergo editorial review but not expert peer review.",
      },
      {
        type: "content",
        title: "When to Use Each Type",
        content: "Match source type to your purpose:\n\n**Use Academic Sources For:**\n• Causal claims (X causes Y)\n• Disputed facts requiring rigorous proof\n• Technical or scientific topics\n• Foundational claims your case depends on\n• When opponents might challenge methodology\n\n**Use Popular Sources For:**\n• Current events and recent news\n• Expert opinions and analysis (op-eds by experts)\n• Accessible explanations of complex topics\n• Statistics from reputable organizations\n• Historical context and background\n\n**The Hierarchy:**\n1. Peer-reviewed research (strongest for empirical claims)\n2. Expert analysis in quality publications\n3. Major newspaper reporting (good for facts, weaker for causation)\n4. Magazine articles and websites (verify carefully)\n5. Blogs and social media (rarely acceptable alone)\n\n**Combining Sources:**\nOften the best approach combines: academic research for core claims, quality journalism for context and accessibility.",
        keyPoints: [
          "Academic for causal claims and disputed facts",
          "Popular for current events and accessible explanation",
          "Combine both for strongest cases",
        ],
      },
      {
        type: "content",
        title: "Attacking Source Quality",
        content: "Use source type strategically:\n\n**When Opponents Use Popular Sources:**\n'My opponent cites a newspaper article, not peer-reviewed research. Journalists aren't subject-matter experts, and this hasn't undergone rigorous review.'\n\n**When Opponents Use Weak Sources:**\n'This comes from a blog/opinion piece/advocacy site, not a credible research source.'\n\n**Defending Your Sources:**\n'This is from a peer-reviewed study in [respected journal], conducted by researchers at [institution].'\n\n**Anticipate Attacks:**\nIf using popular sources, explain why:\n'While this is a newspaper report, it cites [underlying study/official statistics/expert interviews], which I'll explain...'\n\n**The Balance:**\nDon't be a source snob—quality popular sources are legitimate. But do distinguish between the weight different sources carry.",
        keyPoints: [
          "Challenge opponent reliance on non-academic sources",
          "Defend your own source choices",
          "Quality popular sources are legitimate for appropriate uses",
        ],
      },
      {
        type: "question",
        id: "l10-03-q2",
        question: "When is a newspaper article an appropriate source in debate?",
        options: [
          { id: "a", text: "Never—only academic sources should be used" },
          { id: "b", text: "For current events, reporting facts, or when it cites underlying academic research" },
          { id: "c", text: "Only when you can't find anything else" },
          { id: "d", text: "For all types of claims equally" }
        ],
        correctAnswer: "b",
        explanation: "Newspaper articles are appropriate for current events, factual reporting, and when they cite underlying research or expert sources. They're less appropriate for complex causal claims that require peer-reviewed research. Know what you're using and why.",
      },
      {
        type: "content",
        title: "Evaluating Source Credibility",
        content: "Beyond the academic/popular distinction, evaluate individual sources:\n\n**Author Credentials:**\n• What are their qualifications on THIS topic?\n• Do they have relevant expertise?\n• What's their institutional affiliation?\n\n**Publication Reputation:**\n• Is this a respected outlet in its category?\n• What's its track record for accuracy?\n• Is there editorial oversight?\n\n**Bias and Funding:**\n• Who funds this research or publication?\n• Does the source have an ideological agenda?\n• Are conflicts of interest disclosed?\n\n**Methodology (for research):**\n• Is the sample size adequate?\n• Are the methods appropriate for the question?\n• Can the study be replicated?\n\n**Recency:**\n• How current is the information?\n• Has the field changed since publication?\n\n**Citation Patterns:**\n• Is this research cited by others?\n• Who cites it—other experts or only advocates?",
        keyPoints: [
          "Evaluate author credentials for the specific topic",
          "Consider publication reputation and funding sources",
          "Check methodology, recency, and citation patterns",
        ],
      },
      {
        type: "content",
        title: "The Gray Areas: Think Tanks and Advocacy Research",
        content: "Some sources don't fit neatly into academic or popular categories:\n\n**Think Tanks:**\n• Range from highly rigorous to openly ideological\n• Some employ credentialed researchers; others employ advocates\n• Examples: Brookings, RAND (more academic); Heritage, Center for American Progress (more ideological)\n• Evaluate individually—don't assume quality from the label\n\n**Advocacy Organizations:**\n• Openly promote a position\n• May produce legitimate research, but interpret carefully\n• Always consider what they're selling\n\n**Government Reports:**\n• Can be high quality (CBO, GAO, Census Bureau)\n• But can also reflect administration priorities\n• Generally more credible for data than for policy conclusions\n\n**Corporate Research:**\n• Often rigorous methodology\n• But severe conflict of interest concerns\n• Useful if independently verified\n\n**The Rule:**\nKnow your source's incentives. Even good methodology can be undermined by selective reporting of results.",
        keyPoints: [
          "Think tanks range from rigorous to ideological",
          "Government data is generally reliable; conclusions less so",
          "Always consider what the source is incentivized to find",
        ],
      },
      {
        type: "content",
        title: "Building a Research Strategy",
        content: "Develop a systematic approach to evidence gathering:\n\n**Start Broad, Then Narrow:**\n• Begin with general searches to understand the topic\n• Then target specific academic databases for key claims\n\n**Layer Your Evidence:**\n• Foundational claims: Peer-reviewed research\n• Context and examples: Quality journalism\n• Real-world impacts: News reports and case studies\n\n**Cross-Reference:**\n• Don't rely on single sources\n• Find multiple sources supporting key claims\n• If you can only find one source, note that limitation\n\n**Track Your Sources:**\n• Organize by argument/contention\n• Note source type and quality for each\n• Prepare to defend source choices\n\n**Academic Database Tips:**\n• Google Scholar for broad academic searches\n• JSTOR, EBSCOhost for full-text articles\n• University library databases for comprehensive access\n• Look at 'cited by' to find related research",
        keyPoints: [
          "Start broad to understand, then target academic sources",
          "Layer evidence types for different purposes",
          "Cross-reference and track source quality",
        ],
      },
      {
        type: "question",
        id: "l10-03-q3",
        question: "Your opponent cites a report from an advocacy organization supporting their position. How should you evaluate this source?",
        options: [
          { id: "a", text: "Accept it because organizations do research" },
          { id: "b", text: "Reject it automatically because advocacy groups are always biased" },
          { id: "c", text: "Consider their incentives, check if the methodology is sound, and look for independent verification" },
          { id: "d", text: "Ignore the source and only focus on peer-reviewed research" }
        ],
        correctAnswer: "c",
        explanation: "Advocacy organizations can produce legitimate research, but they have incentives to find certain results. Evaluate the methodology, consider their funding and mission, and check if the findings are independently verified. Neither automatic acceptance nor automatic rejection is appropriate.",
      },
      {
        type: "content",
        title: "Conclusion: Source Literacy",
        content: "You've learned to distinguish academic from popular sources and use each appropriately.\n\n**Key Takeaways:**\n• Academic sources undergo peer review; popular sources typically don't\n• Academic sources are strongest for causal and empirical claims\n• Popular sources work for current events and accessible explanations\n• Quality popular sources (major newspapers, respected magazines) are legitimate\n• Combine sources strategically for the strongest case\n• Evaluate think tanks, advocacy groups, and government sources individually\n• Attack weak sources; defend your source choices\n\n**Looking Ahead:**\nIn the next lesson, we'll explore the post hoc fallacy—confusing sequence with causation.\n\n**Practice Challenge:**\nFor your next debate topic, find one academic source and one popular source on the same issue. What does each provide? How would you use them together?",
        keyPoints: [
          "Academic for rigor; popular for accessibility and currency",
          "Know the hierarchy and appropriate uses",
          "Strategic source selection strengthens your case",
        ],
      },
    ],
  },
  {
    lessonId: "l10-04",
    pages: [
      {
        type: "content",
        title: "Introduction: Post Hoc Ergo Propter Hoc",
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
        id: "l10-04-q1",
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
        id: "l10-04-q2",
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
        title: "Post Hoc in Debate Contexts",
        content: "Watch for post hoc reasoning in specific debate scenarios:\n\n**Policy Debate - Advantages:**\n'After similar policies were implemented in Country X, outcomes improved.' Challenge: Were they already improving? What else changed?\n\n**Policy Debate - Disadvantages:**\n'Last time we did X, disaster followed.' Challenge: What else was happening? Is the comparison valid?\n\n**Value Debates:**\n'Society adopted this value, and then flourished.' Challenge: Correlation isn't causation; what actually drove the flourishing?\n\n**Historical Arguments:**\n'After the treaty was signed, peace followed.' Challenge: Was peace already emerging? What other factors?\n\n**Trend Evidence:**\nMany debaters cite before/after data without controlling for other variables. 'Before the law, rates were X; after, they were Y.' This is post hoc unless you control for other factors.\n\n**Your Defense:**\nWhen making causal claims, preempt post hoc attacks by explaining mechanism and addressing alternatives.",
        keyPoints: [
          "Policy advantages often rely on post hoc comparisons",
          "Historical arguments need more than sequence",
          "Preempt attacks by explaining mechanism and alternatives",
        ],
      },
      {
        type: "content",
        title: "The Counterfactual Test",
        content: "A powerful tool for evaluating causation: the counterfactual.\n\n**The Question:**\nWould B have happened WITHOUT A? This is asking about the 'counterfactual'—what would have occurred in an alternative scenario.\n\n**If Yes:**\nIf B would have happened anyway, A didn't cause it. The sequence is coincidence.\n\n**If No:**\nIf B only happened BECAUSE of A, that's evidence for causation.\n\n**Applying It:**\n• 'The economy improved after the policy.' Would it have improved without the policy? (Many economies improved globally—suggesting the policy wasn't the cause.)\n• 'I took medicine and got better.' Would you have gotten better without medicine? (For minor illnesses, probably yes.)\n\n**In Debate:**\nChallenge opponent causal claims: 'What evidence suggests this wouldn't have happened anyway?'\n\nDefend your claims: 'This outcome specifically required this cause; here's why it wouldn't have happened otherwise...'",
        keyPoints: [
          "Ask: would the outcome have happened without the cause?",
          "If yes, the sequence is coincidence",
          "Use counterfactuals to challenge or defend causal claims",
        ],
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
        type: "question",
        id: "l10-04-q3",
        question: "Which of the following BEST supports a causal claim rather than just showing sequence?",
        options: [
          { id: "a", text: "'Event A happened, then Event B happened.'" },
          { id: "b", text: "'Event A happened, then Event B happened—and here's the mechanism, controlled studies confirm it, and removing A reverses B.'" },
          { id: "c", text: "'Event A happened, then Event B happened, and many people believe A caused B.'" },
          { id: "d", text: "'Event A happened, then Event B happened, and this is what we expected.'" }
        ],
        correctAnswer: "b",
        explanation: "Option B provides the full package: sequence + mechanism + controlled evidence + removal effect. The other options only provide sequence (A), sequence + popularity (C), or sequence + expectation (D). Strong causation requires more than temporal order.",
      },
      {
        type: "content",
        title: "Conclusion: After Doesn't Mean Because",
        content: "You've learned to recognize and challenge post hoc reasoning, understanding why sequence alone doesn't prove causation.\n\n**Key Takeaways:**\n• Post hoc assumes sequence proves causation\n• Temporal order is necessary but not sufficient\n• Consider alternatives: coincidence, natural progression, confounders\n• Use the counterfactual test: would B have happened without A?\n• Respond by demanding mechanism and controlled evidence\n• Valid causal arguments need sequence PLUS mechanism, controls, and supporting evidence\n\n**Looking Ahead:**\nIn the next lesson, we'll cover proper citation and how to present evidence professionally.\n\n**Practice Challenge:**\nNotice post hoc reasoning in advertisements and political claims. 'After using our product...' 'Since the policy took effect...' How often is causation assumed rather than demonstrated?",
        keyPoints: [
          "Sequence is necessary but not sufficient for causation",
          "Demand mechanism and controlled evidence",
          "Consider alternative explanations",
        ],
      },
    ],
  },
  {
    lessonId: "l10-05",
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
        id: "l10-05-q1",
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
        title: "Written Citation: Preparing Evidence Cards",
        content: "Debate evidence 'cards' have standard components:\n\n**The Tag Line:**\nA brief claim summarizing the evidence. Should accurately reflect content—no power-tagging.\n\n**The Citation Block:**\n• Author's full name\n• Author's credentials/qualifications\n• Publication name\n• Publication date\n• URL or access information\n\n**The Card Body:**\n• The quoted text\n• Key portions highlighted or underlined\n• Ellipses [...] where text is omitted (don't distort meaning)\n\n**Example Card Format:**\n\nUniversal Basic Income reduces poverty by 40%\n\nDr. Jane Smith, Professor of Economics at Stanford, 'The Effects of Cash Transfers,' Journal of Economic Policy, March 2023\n\n\"Our randomized controlled trial across three cities found that **direct cash transfers reduced poverty rates by 40%** within the first year of implementation. Participants showed significant improvements in housing stability, food security, and employment outcomes.\"\n\n**Organization:**\nGroup cards by argument. Make them easy to find and read quickly.",
        keyPoints: [
          "Tag lines should accurately reflect evidence content",
          "Citation blocks include author, credentials, source, date",
          "Highlight key portions for quick reading",
        ],
      },
      {
        type: "content",
        title: "Responding to Evidence Challenges",
        content: "Be prepared for opponents to challenge your evidence:\n\n**'Where does it say that?'**\nHave the full source available. Point to the specific passage.\n\n**'Who is this author?'**\nKnow your authors' credentials. Be ready to explain why they're qualified.\n\n**'This is old.'**\nKnow your dates. Explain why older evidence is still relevant, or prioritize recent sources.\n\n**'That's out of context.'**\nBe able to show the full passage and explain how your use is fair.\n\n**'That source is biased.'**\nAcknowledge potential bias if relevant, explain why the evidence is still valid, or have corroborating sources.\n\n**'Your tag overstates the evidence.'**\nBe honest—if your tag is too strong, acknowledge it. It's better than losing credibility.\n\n**Best Practice:**\nKnow your evidence. Don't just cut cards—understand what they say and why they matter.",
        keyPoints: [
          "Have sources available to verify",
          "Know author credentials and publication dates",
          "Be honest if evidence is challenged fairly",
        ],
      },
      {
        type: "question",
        id: "l10-05-q2",
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
        type: "question",
        id: "l10-05-q3",
        question: "Your opponent challenges a piece of your evidence, saying your tag line overstates what the source actually says. What's the best response?",
        options: [
          { id: "a", text: "Insist your tag is accurate even if it's not" },
          { id: "b", text: "Acknowledge if the challenge is fair, clarify what the evidence does say, and explain why it still supports your argument" },
          { id: "c", text: "Attack the opponent for being pedantic" },
          { id: "d", text: "Ignore the challenge completely" }
        ],
        correctAnswer: "b",
        explanation: "Honesty is essential. If your tag overstates the evidence, acknowledge it—credibility matters more than one card. Then clarify what the evidence actually says and explain why it still supports your broader argument. This maintains trust with the judge.",
      },
      {
        type: "content",
        title: "Conclusion: Evidence Presented Well",
        content: "You've learned best practices for citation—ensuring your evidence is credible, verifiable, and persuasive.\n\n**Key Takeaways:**\n• Citation builds credibility and enables verification\n• Include source, author, credentials, and date\n• Verbal citations should be concise but complete\n• Written cards need tag lines, citation blocks, and highlighted content\n• Avoid vague citations, misrepresentation, and outdated sources\n• Represent sources fairly and accurately\n• Be prepared to defend evidence when challenged\n\n**Looking Ahead:**\nIn the next lesson, we'll examine false cause fallacies and the relationship between correlation and causation.\n\n**Practice Challenge:**\nReview evidence cards you've prepared. Do they include all essential citation elements? Could someone find and verify each source?",
        keyPoints: [
          "Citation builds credibility and enables verification",
          "Include all essential elements: source, author, date",
          "Represent sources fairly and accurately",
        ],
      },
    ],
  },
  {
    lessonId: "l10-06",
    pages: [
      {
        type: "content",
        title: "Introduction: False Cause and Correlation vs Causation",
        content: "Countries that eat more chocolate have more Nobel Prize winners. Does chocolate make you smarter?\n\nOf course not. This is a classic example of confusing correlation (two things that happen together) with causation (one thing causing another). Both chocolate consumption and Nobel Prizes correlate with wealth and education—but chocolate doesn't cause Nobel Prizes.\n\nIn this lesson, you'll master the distinction between correlation and causation, learn to identify false cause fallacies, and develop strategies for making and attacking causal claims in debate.",
      },
      {
        type: "content",
        title: "Correlation vs Causation: The Basics",
        content: "Understanding the difference is crucial:\n\n**Correlation:**\nTwo things occur together or change together. When X increases, Y also increases (or decreases). This shows a relationship but not direction or cause.\n\n**Causation:**\nX actually produces Y. Changes in X lead to changes in Y through a causal mechanism.\n\n**The Key Insight:**\nCorrelation is necessary for causation but not sufficient. Just because two things happen together doesn't mean one causes the other.\n\n**Why Correlation Happens Without Causation:**\n• Coincidence: Random chance\n• Reverse causation: Y actually causes X\n• Common cause: Z causes both X and Y\n• Confounding variables: Other factors explain the relationship\n\n**Example:**\n• Correlation: Ice cream sales and drowning deaths both increase in summer\n• Not causation: Ice cream doesn't cause drowning\n• Common cause: Hot weather causes both",
        keyPoints: [
          "Correlation means occurring together",
          "Causation means one produces the other",
          "Correlation doesn't prove causation",
        ],
      },
      {
        type: "content",
        title: "Common False Cause Patterns",
        content: "Recognize these fallacious reasoning patterns:\n\n**Post Hoc (After, Therefore Because):**\n'B happened after A, so A caused B.'\nWe covered this in detail—sequence doesn't prove causation.\n\n**Cum Hoc (With, Therefore Because):**\n'A and B happen together, so A causes B.'\nCorrelation alone doesn't establish cause.\n\n**Ignoring Reverse Causation:**\n'Successful people read a lot, so reading causes success.'\nMaybe success provides time and resources for reading.\n\n**Ignoring Common Causes:**\n'Countries with more doctors have more disease. Doctors cause disease!'\nNo—both increase with population size.\n\n**Oversimplification:**\n'The only difference was X, so X caused Y.'\nThere are usually many differences.\n\n**Single Study Causation:**\n'This one study shows A causes B!'\nSingle studies can be wrong; look for replication.",
        keyPoints: [
          "Post hoc confuses sequence with cause",
          "Cum hoc confuses correlation with cause",
          "Consider reverse causation and common causes",
        ],
      },
      {
        type: "question",
        id: "l10-06-q1",
        question: "A study finds that children who eat breakfast get better grades. What should you consider?",
        options: [
          { id: "a", text: "Eating breakfast causes better grades" },
          { id: "b", text: "Better grades might cause breakfast eating" },
          { id: "c", text: "A third factor (like family stability) might cause both" },
          { id: "d", text: "Both B and C should be considered before concluding causation" }
        ],
        correctAnswer: "d",
        explanation: "Before assuming breakfast causes grades, consider alternatives. Maybe doing well in school motivates morning routines (reverse causation). More likely, factors like family stability, income, and parenting affect both breakfast habits and academic performance (common cause). Correlation alone doesn't prove breakfast causes grades.",
      },
      {
        type: "content",
        title: "Establishing Causation",
        content: "What does prove causation?\n\n**Controlled Experiments:**\nRandomly assign people to treatment and control groups. If only the treated group shows the effect, causation is supported.\n\n**Multiple Studies:**\nWhen many studies with different methods find the same result, causation becomes more credible.\n\n**Mechanism:**\nA plausible explanation of HOW X causes Y strengthens causal claims.\n\n**Dose-Response:**\nMore X leads to more Y in a consistent pattern.\n\n**Temporal Order:**\nThe cause must precede the effect (necessary but not sufficient).\n\n**Ruling Out Alternatives:**\nSystematically eliminating other possible explanations.\n\n**Example of Strong Causation:**\nSmoking causes cancer because: controlled animal studies, consistent epidemiological findings, known mechanism (carcinogens), dose-response (more smoking = more risk), and elimination of confounders.",
        keyPoints: [
          "Controlled experiments are the gold standard",
          "Mechanism, dose-response, and replication strengthen claims",
          "Rule out alternative explanations",
        ],
      },
      {
        type: "content",
        title: "Attacking Causal Claims in Debate",
        content: "When opponents claim causation:\n\n**Challenge the Evidence Type:**\n'That's correlation, not causation. Just because they happen together doesn't mean one causes the other.'\n\n**Propose Alternatives:**\n'There could be reverse causation: maybe Y causes X. Or a third factor causes both.'\n\n**Demand Mechanism:**\n'How exactly does X cause Y? What's the causal pathway?'\n\n**Question Methodology:**\n'Was this a controlled experiment or just observation? Were there control groups?'\n\n**Find Counterexamples:**\n'If X caused Y, we'd expect [outcome]. But we see [different outcome].'\n\n**Example Attack:**\n'My opponent claims the new policy reduced crime because crime dropped after implementation. But this is post hoc reasoning. Crime was already declining before the policy, similar cities without the policy saw equal declines, and they haven't shown any mechanism by which this policy would affect crime rates.'",
        keyPoints: [
          "Distinguish correlation from causation",
          "Propose alternative explanations",
          "Demand mechanism and controlled evidence",
        ],
      },
      {
        type: "content",
        title: "Spurious Correlations: Fun and Instructive Examples",
        content: "Sometimes correlations are clearly absurd—teaching us to be skeptical of all correlations:\n\n**Famous Spurious Correlations:**\n• Per capita cheese consumption correlates with deaths by bedsheet tangling\n• Nicolas Cage films correlate with swimming pool drownings\n• Divorce rates in Maine correlate with margarine consumption\n\n**Why These Exist:**\nWith enough data and variables, some will correlate by chance. The universe is full of coincidences.\n\n**The Lesson:**\nEven correlations that SEEM plausible might be spurious. The 'chocolate and Nobel Prizes' correlation isn't obviously absurd—but it's still not causation.\n\n**In Debate:**\nWhen opponents show correlations, you can invoke spurious correlations: 'Many things correlate without causation. What makes this correlation different? Where's the mechanism? Where's the controlled evidence?'\n\n**The Humor Test:**\nIf you can construct an equally plausible-sounding but absurd correlation, the original correlation proves nothing alone.",
        keyPoints: [
          "Many variables correlate by pure chance",
          "Even plausible-seeming correlations may be spurious",
          "Challenge correlations by demanding mechanism and controls",
        ],
      },
      {
        type: "content",
        title: "Natural Experiments and Quasi-Experimental Evidence",
        content: "When true experiments are impossible, researchers use natural experiments:\n\n**What Are Natural Experiments?**\nSituations where circumstances create treatment and control groups without researcher intervention.\n\n**Examples:**\n• Policy changes that affect some regions but not others\n• Random lotteries that determine who receives a benefit\n• Natural boundaries that create different conditions\n\n**Why They Matter:**\nMany causal questions (effects of policies, laws, historical events) can't be studied with randomized trials. Natural experiments provide the next best evidence.\n\n**Evaluating Them:**\n• Is the 'treatment' really random?\n• Are the groups comparable otherwise?\n• Are there still confounders?\n\n**In Debate:**\nNatural experiments are stronger than simple correlations but weaker than randomized trials. Evaluate appropriately.\n\n**Example:**\n'Studies of the minimum wage use natural experiments—comparing employment in states that raised wages to similar states that didn't. This is stronger than simple before/after data because we can control for other economic factors.'",
        keyPoints: [
          "Natural experiments occur when circumstances create comparison groups",
          "They're stronger than correlations but weaker than randomized trials",
          "Evaluate whether the 'random' assignment is really random",
        ],
      },
      {
        type: "question",
        id: "l10-06-q2",
        question: "Your opponent cites a study showing countries with more hospitals have higher death rates. They conclude hospitals cause death. How do you respond?",
        options: [
          { id: "a", text: "Accept their conclusion" },
          { id: "b", text: "Point out reverse causation: sick populations need more hospitals" },
          { id: "c", text: "Note common cause: larger populations have more hospitals AND more deaths" },
          { id: "d", text: "Both B and C are good responses" }
        ],
        correctAnswer: "d",
        explanation: "Both are excellent responses. Reverse causation: places with sicker populations build more hospitals (hospitals don't cause the deaths; illness causes both deaths and hospital construction). Common cause: larger populations have more of both hospitals and deaths. This is a classic example of misinterpreting correlation as causation.",
      },
      {
        type: "content",
        title: "Conclusion: Causation Requires More",
        content: "You've mastered the distinction between correlation and causation—one of the most important analytical skills in debate and critical thinking.\n\n**Key Takeaways:**\n• Correlation means things occur together; causation means one produces the other\n• Consider reverse causation and common causes\n• Controlled experiments, mechanism, and replication establish causation\n• Natural experiments provide intermediate evidence\n• Attack causal claims by proposing alternatives and demanding evidence\n• Spurious correlations teach us to be skeptical of all correlations\n• Single studies showing correlation don't prove causation\n\n**Looking Ahead:**\nIn the next lesson, we'll complete the Beginner section with a comprehensive review of everything you've learned.\n\n**Practice Challenge:**\nFind a news headline claiming X causes Y. What's the evidence? Is it correlation or causation? What alternatives could explain the data?",
        keyPoints: [
          "Correlation doesn't imply causation",
          "Consider alternatives before accepting causal claims",
          "Strong causation requires controlled evidence and mechanism",
        ],
      },
      {
        type: "practice",
        id: "l10-06-p1",
        title: "Challenging False Causal Claims",
        description: "Practice identifying and refuting arguments that confuse correlation with causation.",
        practice: {
          type: "refutation",
          topic: "Stricter gun control laws reduce violent crime",
          targetSkill: "Distinguishing correlation from causation and proposing alternative explanations",
          instructions: "Your AI opponent will present causal claims based on correlational evidence. Challenge these claims by identifying the correlation vs causation error, proposing alternative explanations (reverse causation, common causes, confounding variables), and demanding proper causal evidence.",
          exampleResponse: "My opponent shows that states with stricter laws have less crime, but this is correlation, not causation. Consider reverse causation: maybe safer states pass stricter laws because they can. Or common cause: wealthier states may have both stricter laws AND less crime due to economic factors. Where is the controlled evidence showing the laws themselves caused the reduction?",
          successCriteria: [
            "Correctly identifies correlation being presented as causation",
            "Proposes at least one alternative explanation",
            "Demands mechanism or controlled evidence",
            "Maintains focus on the logical flaw rather than the policy itself",
          ],
        },
      },
    ],
  },
  {
    lessonId: "l10-07",
    pages: [
      {
        type: "content",
        title: "Congratulations: Beginner Section Complete!",
        content: "You've completed the entire Beginner section of the debate curriculum! Over 70 lessons, you've built a strong foundation in argumentation, evidence, delivery, and critical thinking.\n\nThis final lesson reviews the key concepts from all 10 units, helping you consolidate your learning and prepare for the Intermediate section ahead.\n\nLet's revisit what you've mastered and identify areas for continued practice.",
      },
      {
        type: "content",
        title: "Review: Foundations (Units 1-2)",
        content: "You started by understanding what debate is and exploring different formats:\n\n**Core Concepts:**\n• Debate is structured argumentation with rules and time limits\n• Major formats: Lincoln-Douglas, Policy, Public Forum, Parliamentary, Congressional\n• Each format has unique rules, time structures, and strategic considerations\n\n**Basic Argument Structure:**\n• Claim: Your assertion\n• Evidence: Facts supporting it\n• Reasoning: Why the evidence proves your claim\n\n**Key Takeaway:**\nDebate isn't about 'winning' through tricks—it's about developing ideas through rigorous argumentation. The skills transfer to everything from job interviews to everyday decisions.",
        keyPoints: [
          "Debate develops critical thinking and communication",
          "Different formats serve different purposes",
          "Claims require evidence and reasoning",
        ],
      },
      {
        type: "content",
        title: "Review: Essential Skills (Units 3-4)",
        content: "You developed core skills every debater needs:\n\n**Speaking Skills:**\n• Clear enunciation and projection\n• Eye contact and body language\n• Avoiding filler words\n• Emphasis and inflection\n\n**Flowing (Note-Taking):**\n• Track arguments across speeches\n• Identify dropped arguments\n• Organize responses systematically\n\n**Refutation Basics:**\n• The 4 S's: Signal, State, Support, Summarize\n• Direct attacks on evidence and reasoning\n• Constructing and classifying claims (fact, value, policy)\n\n**Key Takeaway:**\nTechnical skills matter. Clear delivery ensures your arguments are heard; effective flowing ensures you respond to what opponents actually said.",
        keyPoints: [
          "Delivery skills affect how arguments are received",
          "Flowing tracks the debate accurately",
          "Refutation has structure: the 4 S's",
        ],
      },
      {
        type: "content",
        title: "Review: Evidence and Sources (Units 5-6)",
        content: "You learned how to find, evaluate, and use evidence:\n\n**Types of Evidence:**\n• Statistics, studies, expert testimony, examples\n• Each type serves different purposes\n\n**Source Evaluation:**\n• Academic vs popular sources\n• Primary vs secondary sources\n• Evaluating credibility, recency, and bias\n\n**Warrants:**\n• The reasoning that connects evidence to claims\n• Evidence doesn't speak for itself\n\n**Citation:**\n• Include source, author, credentials, date\n• Proper citation builds credibility\n\n**Key Takeaway:**\nEvidence is only as strong as its source and your explanation of why it matters. Quality over quantity—three excellent sources beat ten mediocre ones.",
        keyPoints: [
          "Match evidence type to claim type",
          "Evaluate sources for credibility and bias",
          "Warrants explain why evidence matters",
        ],
      },
      {
        type: "content",
        title: "Review: Logic and Fallacies (Units 7-10)",
        content: "You mastered logical reasoning and common errors:\n\n**Fallacies Covered:**\n• Ad hominem: Attacking the person\n• Strawman: Misrepresenting arguments\n• False dichotomy: False either/or choices\n• Slippery slope: Unjustified chain reactions\n• Red herring: Irrelevant diversions\n• Post hoc: Sequence doesn't prove cause\n• Appeal to ignorance: Absence isn't proof\n• Appeal to authority: Expertise must be relevant\n\n**Correlation vs Causation:**\n• Correlation doesn't prove causation\n• Consider reverse causation and confounders\n• Controlled evidence establishes cause\n\n**The Toulmin Model:**\n• Claim, Data, Warrant, Backing, Qualifier, Rebuttal\n• Complete argument structure\n\n**Key Takeaway:**\nRecognizing fallacies helps you both avoid making them and attack opponent errors effectively.",
        keyPoints: [
          "Fallacies are errors in reasoning",
          "Correlation doesn't prove causation",
          "The Toulmin model provides complete argument structure",
        ],
      },
      {
        type: "question",
        id: "l10-07-q1",
        question: "Which of the following is NOT a logical fallacy?",
        options: [
          { id: "a", text: "Ad hominem" },
          { id: "b", text: "Citing peer-reviewed research" },
          { id: "c", text: "False dichotomy" },
          { id: "d", text: "Post hoc" }
        ],
        correctAnswer: "b",
        explanation: "Citing peer-reviewed research is good debate practice, not a fallacy. Ad hominem (attacking the person), false dichotomy (false either/or), and post hoc (assuming sequence proves causation) are all logical fallacies you learned to identify and avoid.",
      },
      {
        type: "content",
        title: "Review: Ethics and Professionalism",
        content: "Throughout, you learned that debate has ethical dimensions:\n\n**Intellectual Honesty:**\n• Acknowledge weaknesses in your position\n• Represent opponent arguments fairly\n• Don't fabricate or misrepresent evidence\n\n**Respectful Engagement:**\n• Attack arguments, not people\n• Maintain professionalism under pressure\n• Learn from opponents\n\n**Avoiding Personal Attacks:**\n• Attacks waste time and hurt credibility\n• Focus on ideas, not personalities\n• Respond to attacks by redirecting to substance\n\n**Key Takeaway:**\nDebate builds communities. How you treat opponents matters for your reputation, your learning, and the health of the activity itself.",
        keyPoints: [
          "Intellectual honesty strengthens credibility",
          "Professionalism matters for reputation",
          "Debate is about ideas, not personal attacks",
        ],
      },
      {
        type: "content",
        title: "Putting It All Together: The Complete Debater",
        content: "A complete debater integrates all these skills:\n\n**Before the Round:**\n• Research thoroughly using quality sources\n• Prepare evidence with proper citations\n• Anticipate opponent arguments\n• Know your format's rules and strategies\n\n**During the Round:**\n• Deliver clearly and confidently\n• Flow accurately\n• Refute with structure (4 S's)\n• Identify and call out fallacies\n• Stay professional under pressure\n\n**After the Round:**\n• Reflect on what worked and what didn't\n• Learn from feedback\n• Improve for next time\n\n**The Mindset:**\nDebate is a skill developed over time. Every round teaches you something. The goal isn't perfection—it's continuous improvement.",
        keyPoints: [
          "Integrate research, delivery, refutation, and professionalism",
          "Each round is a learning opportunity",
          "Continuous improvement is the goal",
        ],
      },
      {
        type: "content",
        title: "Common Beginner Mistakes to Avoid",
        content: "As you move forward, watch out for these common errors:\n\n**Research Errors:**\n• Relying on vague 'studies show' citations\n• Using outdated or biased sources\n• Not understanding what your evidence actually says\n\n**Delivery Errors:**\n• Speaking too fast (or too slow)\n• Reading directly from notes without eye contact\n• Using filler words ('um,' 'like,' 'you know')\n\n**Refutation Errors:**\n• Attacking strawmen instead of actual arguments\n• Dropping key opponent points\n• Getting personal instead of staying substantive\n\n**Logic Errors:**\n• Making the very fallacies you learned to spot\n• Assuming correlation proves causation\n• Oversimplifying complex issues\n\n**Strategic Errors:**\n• Spending too much time on weak points\n• Not managing time effectively\n• Forgetting to summarize and weigh",
        keyPoints: [
          "Know your evidence—don't just cut cards",
          "Balance delivery speed with clarity",
          "Avoid the fallacies you learned to identify",
        ],
      },
      {
        type: "content",
        title: "Looking Ahead: Intermediate Section",
        content: "You're ready for the Intermediate section, where you'll develop more sophisticated skills:\n\n**What's Coming:**\n• Advanced fallacies and logical structures\n• Strategic refutation techniques\n• Impact calculus and weighing\n• Case construction strategies\n• More format-specific training\n• Persuasion psychology\n\n**How to Prepare:**\n• Practice the fundamentals until they're automatic\n• Compete and get feedback\n• Watch high-level debates\n• Read widely on debate topics\n• Develop a pre-round preparation routine\n\n**Remember:**\nThe Beginner section gave you tools. The Intermediate section teaches you to use them strategically. Mastery comes from practice.",
        keyPoints: [
          "Intermediate builds on Beginner foundations",
          "Practice makes fundamentals automatic",
          "Strategic sophistication comes next",
        ],
      },
      {
        type: "content",
        title: "Conclusion: Your Debate Journey Continues",
        content: "Congratulations on completing the Beginner section! You now have a solid foundation in:\n\n**What You've Learned:**\n• Debate formats and structures\n• Argument construction (claim, evidence, warrant)\n• Speaking and delivery skills\n• Evidence evaluation and citation\n• Logical fallacies and critical thinking\n• Refutation techniques\n• Professional conduct and ethics\n\n**Your Challenge:**\nKnowledge isn't skill. Skill comes from practice. Take what you've learned and use it—in practice rounds, at tournaments, in classroom discussions, and in everyday conversations.\n\nDebate is more than a competition. It's a way of thinking that will serve you throughout your life.\n\n**Onward to Intermediate!**",
        keyPoints: [
          "You've completed 70 lessons of foundational training",
          "Practice transforms knowledge into skill",
          "The journey continues in the Intermediate section",
        ],
      },
    ],
  },
];
