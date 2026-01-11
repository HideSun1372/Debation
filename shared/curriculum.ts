// Debate Curriculum - 350 lessons across 49 units and 5 skill tiers
// This file contains the complete curriculum structure

export type CurriculumTier = "BEGINNER" | "INTERMEDIATE" | "ADVANCED" | "EXPERT" | "MASTER";

export interface CurriculumLesson {
  id: string;
  title: string;
  order: number;
  estimatedMinutes: number;
  content: string;
  keyPoints?: string[];
  exercise?: string;
}

export interface CurriculumSection {
  id: string;
  title: string;
  order: number;
  lessons: CurriculumLesson[];
}

export interface CurriculumUnit {
  id: string;
  title: string;
  description: string;
  tier: CurriculumTier;
  order: number;
  sections: CurriculumSection[];
}

// SECTION 1: BEGINNER (Lessons 1-70) - Units 1-10
export const BEGINNER_UNITS: CurriculumUnit[] = [
  {
    id: "unit-01",
    title: "Getting Started",
    description: "Begin your debate journey with fundamental concepts",
    tier: "BEGINNER",
    order: 1,
    sections: [
      {
        id: "s01-01",
        title: "Getting Started",
        order: 1,
        lessons: [
          {
            id: "l01-01",
            title: "What is Debate?",
            order: 1,
            estimatedMinutes: 8,
            content: "Debate is a formal discussion on a particular topic where opposing arguments are presented. It develops critical thinking, research skills, and the ability to articulate complex ideas clearly.",
            keyPoints: ["Structured argumentation", "Evidence-based reasoning", "Respectful disagreement", "Logical analysis"],
          },
          {
            id: "l01-02",
            title: "Why Debate Matters",
            order: 2,
            estimatedMinutes: 7,
            content: "Debate skills translate directly to real-world success. From job interviews to courtroom arguments, the ability to construct and defend arguments is invaluable.",
            keyPoints: ["Career advancement", "Critical thinking development", "Public speaking confidence", "Research skills"],
          },
          {
            id: "l01-03",
            title: "Overview of Debate Formats",
            order: 3,
            estimatedMinutes: 10,
            content: "There are several major debate formats, each with unique rules and structures. Understanding these formats helps you choose the right one for your goals and develop format-specific skills.",
            keyPoints: ["Lincoln-Douglas", "Policy Debate", "Public Forum", "Parliamentary", "Congressional"],
          },
          {
            id: "l01-04",
            title: "Lincoln-Douglas Debate Structure",
            order: 4,
            estimatedMinutes: 12,
            content: "Lincoln-Douglas (LD) debate is a one-on-one format focusing on values and philosophy. Named after the famous Lincoln-Douglas debates of 1858, it emphasizes logical argumentation and ethical reasoning.",
            keyPoints: ["One-on-one format", "Value-based arguments", "6-3-7-3-4-6-3 time structure", "Affirmative vs Negative"],
          },
          {
            id: "l01-05",
            title: "Policy Debate Structure",
            order: 5,
            estimatedMinutes: 12,
            content: "Policy debate is a two-on-two format focusing on governmental policy proposals. Teams research a year-long topic and develop detailed plans with evidence-heavy arguments.",
            keyPoints: ["Two-on-two teams", "Year-long resolution", "Plan and counterplan", "Heavy research requirements"],
          },
          {
            id: "l01-06",
            title: "Public Forum Debate Structure",
            order: 6,
            estimatedMinutes: 10,
            content: "Public Forum (PF) is designed to be accessible to general audiences. Teams of two debate current events topics with an emphasis on persuasion and clarity over technical jargon.",
            keyPoints: ["Team format (2v2)", "Current events focus", "Lay audience friendly", "Monthly topics"],
          },
          {
            id: "l01-07",
            title: "Review: Week 1 Fundamentals",
            order: 7,
            estimatedMinutes: 5,
            content: "Let's review what you've learned about debate fundamentals and the major formats.",
            keyPoints: ["Debate definition and purpose", "Major formats overview", "Structure differences"],
          },
        ],
      },
    ],
  },
  {
    id: "unit-02",
    title: "More Formats and Foundation",
    description: "Explore additional formats and build your foundation",
    tier: "BEGINNER",
    order: 2,
    sections: [
      {
        id: "s02-01",
        title: "More Formats and Foundation",
        order: 1,
        lessons: [
          {
            id: "l02-01",
            title: "Parliamentary Debate Structure",
            order: 1,
            estimatedMinutes: 10,
            content: "Parliamentary debate emphasizes quick thinking and adaptation. With limited preparation time, debaters must construct arguments on the spot using general knowledge and reasoning skills.",
            keyPoints: ["Limited prep time", "Points of information", "Government vs Opposition", "Impromptu argumentation"],
          },
          {
            id: "l02-02",
            title: "World Schools Debate",
            order: 2,
            estimatedMinutes: 10,
            content: "World Schools is the format used in international competition. Teams of three debate prepared and impromptu motions, blending elements of different national debate traditions.",
            keyPoints: ["International format", "Teams of three", "Mixed prepared/impromptu", "Cultural adaptation"],
          },
          {
            id: "l02-03",
            title: "Congressional Debate",
            order: 3,
            estimatedMinutes: 10,
            content: "Congressional debate simulates legislative proceedings. Students propose legislation, deliver speeches, and engage in parliamentary procedure to pass or defeat bills.",
            keyPoints: ["Legislative simulation", "Bill drafting", "Parliamentary procedure", "Large group format"],
          },
          {
            id: "l02-04",
            title: "Mock Trial vs Debate",
            order: 4,
            estimatedMinutes: 8,
            content: "While related, mock trial and debate are distinct activities. Mock trial simulates courtroom proceedings with witnesses and legal rules, while debate focuses on argumentation without role-playing.",
            keyPoints: ["Courtroom vs open format", "Witness examination", "Legal standards", "Different skill emphases"],
          },
          {
            id: "l02-05",
            title: "Traditional vs Circuit Debate Culture",
            order: 5,
            estimatedMinutes: 10,
            content: "Debate culture varies between traditional and circuit (national) styles. Understanding these differences helps you adapt to different competitive environments.",
            keyPoints: ["Speed and style differences", "Judge expectations", "Argument types accepted", "Regional variations"],
          },
          {
            id: "l02-06",
            title: "Basic Argument Structure (Claim, Evidence, Reasoning)",
            order: 6,
            estimatedMinutes: 12,
            content: "Every strong argument has three components: a claim (your assertion), evidence (facts supporting it), and reasoning (why the evidence proves your claim).",
            keyPoints: ["Claim: Your main point", "Evidence: Supporting facts", "Reasoning: The logical connection", "Building complete arguments"],
          },
          {
            id: "l02-07",
            title: "Review: Formats and Basics",
            order: 7,
            estimatedMinutes: 5,
            content: "Review the additional formats and basic argument structure concepts covered this week.",
            keyPoints: ["Additional formats", "Cultural differences", "Argument components"],
          },
        ],
      },
    ],
  },
  {
    id: "unit-03",
    title: "Essential Skills",
    description: "Develop core skills every debater needs",
    tier: "BEGINNER",
    order: 3,
    sections: [
      {
        id: "s03-01",
        title: "Essential Skills",
        order: 1,
        lessons: [
          {
            id: "l03-01",
            title: "Speaking Clearly and Confidently",
            order: 1,
            estimatedMinutes: 10,
            content: "Clear speech is fundamental to effective debate. Practice enunciation, pacing, and confidence to ensure judges and opponents understand your arguments.",
            keyPoints: ["Enunciation techniques", "Pacing strategies", "Confidence building", "Vocal variety"],
          },
          {
            id: "l03-02",
            title: "Flowing (Note-Taking in Debate)",
            order: 2,
            estimatedMinutes: 15,
            content: "Flowing is the specialized note-taking system debaters use. It tracks arguments across speeches, helping you respond precisely and identify dropped arguments.",
            keyPoints: ["Column organization", "Abbreviations", "Tracking responses", "Identifying drops"],
          },
          {
            id: "l03-03",
            title: "Volume and Projection",
            order: 3,
            estimatedMinutes: 8,
            content: "Project your voice to fill the room without shouting. Good projection ensures everyone hears your arguments and conveys confidence.",
            keyPoints: ["Diaphragm breathing", "Room awareness", "Avoiding strain", "Dynamic range"],
          },
          {
            id: "l03-04",
            title: "What is a Rebuttal?",
            order: 4,
            estimatedMinutes: 10,
            content: "A rebuttal is your response to opponent arguments. Effective rebuttals don't just disagree—they explain why the opponent's reasoning is flawed.",
            keyPoints: ["Direct response", "Attacking reasoning", "Providing alternatives", "Weighing impacts"],
          },
          {
            id: "l03-05",
            title: "Eye Contact",
            order: 5,
            estimatedMinutes: 7,
            content: "Eye contact connects you with judges and shows confidence. Learn to balance looking at notes with engaging your audience.",
            keyPoints: ["Judge focus", "Confidence signals", "Note glancing technique", "Audience engagement"],
          },
          {
            id: "l03-06",
            title: "What Counts as Evidence?",
            order: 6,
            estimatedMinutes: 10,
            content: "Not all information is equal in debate. Learn what constitutes valid evidence and how to distinguish strong sources from weak ones.",
            keyPoints: ["Types of evidence", "Source credibility", "Recency matters", "Expert qualifications"],
          },
          {
            id: "l03-07",
            title: "Review: Core Skills",
            order: 7,
            estimatedMinutes: 5,
            content: "Review the essential speaking and argumentation skills covered in this unit.",
            keyPoints: ["Speaking fundamentals", "Note-taking", "Evidence basics"],
          },
        ],
      },
    ],
  },
  {
    id: "unit-04",
    title: "Refutation Foundation",
    description: "Learn the fundamentals of refuting opponent arguments",
    tier: "BEGINNER",
    order: 4,
    sections: [
      {
        id: "s04-01",
        title: "Refutation Foundation",
        order: 1,
        lessons: [
          {
            id: "l04-01",
            title: "The 4 S's of Refutation (Signal, State, Support, Summarize)",
            order: 1,
            estimatedMinutes: 12,
            content: "The 4 S's provide a clear framework for refutation: Signal that you're responding, State the opponent's argument, Support your response with reasoning, and Summarize your point.",
            keyPoints: ["Signal: 'They said...'", "State: Identify their claim", "Support: Your counter", "Summarize: Impact"],
          },
          {
            id: "l04-02",
            title: "Body Language",
            order: 2,
            estimatedMinutes: 8,
            content: "Your body communicates as much as your words. Learn to use posture, gestures, and movement to reinforce your arguments.",
            keyPoints: ["Confident posture", "Purposeful movement", "Avoiding nervous habits", "Open stance"],
          },
          {
            id: "l04-03",
            title: "Direct Refutation Techniques",
            order: 3,
            estimatedMinutes: 10,
            content: "Direct refutation attacks opponent arguments head-on. Learn to identify the weakest link in their reasoning and target it effectively.",
            keyPoints: ["Finding weak points", "Evidence attacks", "Logic attacks", "Impact denial"],
          },
          {
            id: "l04-04",
            title: "Gestures",
            order: 4,
            estimatedMinutes: 7,
            content: "Purposeful gestures enhance your delivery. Learn when and how to use hand movements to emphasize key points.",
            keyPoints: ["Natural gestures", "Emphasis techniques", "Avoiding distraction", "Cultural awareness"],
          },
          {
            id: "l04-05",
            title: "Types of Claims (Fact, Value, Policy)",
            order: 5,
            estimatedMinutes: 10,
            content: "Claims fall into three categories: fact claims (what is true), value claims (what is good/bad), and policy claims (what should be done). Each requires different support.",
            keyPoints: ["Fact: Provable truth", "Value: Moral judgment", "Policy: Action proposal", "Different standards"],
          },
          {
            id: "l04-06",
            title: "Constructing Strong Claims",
            order: 6,
            estimatedMinutes: 10,
            content: "A well-constructed claim is specific, debatable, and provable. Learn to craft claims that give you the best chance of winning.",
            keyPoints: ["Specificity", "Scope limits", "Provability", "Strategic framing"],
          },
          {
            id: "l04-07",
            title: "Review: Refutation Basics",
            order: 7,
            estimatedMinutes: 5,
            content: "Review refutation techniques and claim construction covered this week.",
            keyPoints: ["4 S's framework", "Claim types", "Delivery techniques"],
          },
        ],
      },
    ],
  },
  {
    id: "unit-05",
    title: "Evidence Foundation",
    description: "Master the use of evidence in debate",
    tier: "BEGINNER",
    order: 5,
    sections: [
      {
        id: "s05-01",
        title: "Evidence Foundation",
        order: 1,
        lessons: [
          {
            id: "l05-01",
            title: "Avoiding Filler Words",
            order: 1,
            estimatedMinutes: 8,
            content: "Filler words like 'um,' 'uh,' and 'like' undermine credibility. Learn techniques to eliminate them from your speaking.",
            keyPoints: ["Common fillers", "Pause instead", "Practice techniques", "Recording yourself"],
          },
          {
            id: "l05-02",
            title: "Supporting Claims with Evidence",
            order: 2,
            estimatedMinutes: 12,
            content: "Evidence transforms opinions into arguments. Learn to select, present, and explain evidence that directly supports your claims.",
            keyPoints: ["Evidence selection", "Citation format", "Explaining relevance", "Anticipating objections"],
          },
          {
            id: "l05-03",
            title: "Introduction to Logical Fallacies",
            order: 3,
            estimatedMinutes: 15,
            content: "Logical fallacies are errors in reasoning that undermine arguments. Learning to identify them helps you both avoid making them and attack opponent errors.",
            keyPoints: ["What are fallacies", "Common examples", "Why they fail", "Strategic use"],
          },
          {
            id: "l05-04",
            title: "Types of Evidence (Statistics, Studies, Expert Testimony, Examples)",
            order: 4,
            estimatedMinutes: 12,
            content: "Different types of evidence serve different purposes. Statistics quantify, studies prove causation, experts add credibility, and examples illustrate.",
            keyPoints: ["Statistics: Numbers", "Studies: Research", "Experts: Authority", "Examples: Illustration"],
          },
          {
            id: "l05-05",
            title: "Emphasis and Inflection",
            order: 5,
            estimatedMinutes: 8,
            content: "Vocal emphasis guides listeners to your key points. Learn to use pitch, volume, and pacing to highlight what matters most.",
            keyPoints: ["Strategic emphasis", "Pitch variation", "Slowing down", "Building intensity"],
          },
          {
            id: "l05-06",
            title: "Connecting Evidence to Claims (Warrants)",
            order: 6,
            estimatedMinutes: 12,
            content: "Evidence doesn't speak for itself. Warrants explain why your evidence proves your claim, creating the logical bridge judges need.",
            keyPoints: ["What is a warrant", "Implicit vs explicit", "Building the bridge", "Testing warrants"],
          },
          {
            id: "l05-07",
            title: "Review: Evidence Basics",
            order: 7,
            estimatedMinutes: 5,
            content: "Review evidence types, fallacies, and delivery techniques from this unit.",
            keyPoints: ["Evidence types", "Warrant importance", "Delivery skills"],
          },
        ],
      },
    ],
  },
  {
    id: "unit-06",
    title: "Sources and Credibility",
    description: "Evaluate and use sources effectively",
    tier: "BEGINNER",
    order: 6,
    sections: [
      {
        id: "s06-01",
        title: "Sources and Credibility",
        order: 1,
        lessons: [
          {
            id: "l06-01",
            title: "Ad Hominem and Personal Attacks",
            order: 1,
            estimatedMinutes: 10,
            content: "Ad hominem attacks target the person rather than their argument. Learn to recognize this fallacy and respond appropriately when opponents use it.",
            keyPoints: ["Definition", "Why it fails", "Responding to attacks", "Staying on topic"],
          },
          {
            id: "l06-02",
            title: "Speed vs Clarity",
            order: 2,
            estimatedMinutes: 10,
            content: "Speaking quickly can cover more ground, but clarity must come first. Find your optimal balance between speed and intelligibility.",
            keyPoints: ["Speed benefits", "Clarity requirements", "Finding balance", "Practice techniques"],
          },
          {
            id: "l06-03",
            title: "Evaluating Source Credibility",
            order: 3,
            estimatedMinutes: 12,
            content: "Not all sources are equal. Learn to evaluate author expertise, publication quality, recency, and potential bias.",
            keyPoints: ["Author credentials", "Publication quality", "Recency", "Bias detection"],
          },
          {
            id: "l06-04",
            title: "Strawman Arguments",
            order: 4,
            estimatedMinutes: 10,
            content: "A strawman misrepresents an opponent's argument to make it easier to attack. Learn to identify and call out this dishonest tactic.",
            keyPoints: ["What is strawman", "How to identify", "Calling it out", "Avoiding it yourself"],
          },
          {
            id: "l06-05",
            title: "Non-Verbal Communication Review",
            order: 5,
            estimatedMinutes: 8,
            content: "Review and integrate all non-verbal communication skills: body language, gestures, eye contact, and movement.",
            keyPoints: ["Integration", "Consistency", "Natural delivery", "Avoiding conflicts"],
          },
          {
            id: "l06-06",
            title: "Primary vs Secondary Sources",
            order: 6,
            estimatedMinutes: 10,
            content: "Primary sources are original documents; secondary sources analyze them. Understanding this distinction helps you choose the best evidence.",
            keyPoints: ["Primary: Original", "Secondary: Analysis", "When to use each", "Hierarchy of evidence"],
          },
          {
            id: "l06-07",
            title: "Review: Sources",
            order: 7,
            estimatedMinutes: 5,
            content: "Review source evaluation, fallacies, and communication skills from this unit.",
            keyPoints: ["Source evaluation", "Fallacy identification", "Communication integration"],
          },
        ],
      },
    ],
  },
  {
    id: "unit-07",
    title: "Logic and Bias",
    description: "Understand logical reasoning and detect bias",
    tier: "BEGINNER",
    order: 7,
    sections: [
      {
        id: "s07-01",
        title: "Logic and Bias",
        order: 1,
        lessons: [
          {
            id: "l07-01",
            title: "Identifying Bias in Sources",
            order: 1,
            estimatedMinutes: 12,
            content: "All sources have some bias. Learn to identify funding sources, organizational agendas, and language cues that reveal bias.",
            keyPoints: ["Funding bias", "Organizational agenda", "Language cues", "Accounting for bias"],
          },
          {
            id: "l07-02",
            title: "False Dichotomy/False Dilemma",
            order: 2,
            estimatedMinutes: 10,
            content: "False dichotomy presents only two options when more exist. Learn to identify this fallacy and expand the available choices.",
            keyPoints: ["Either/or thinking", "Finding alternatives", "Expanding options", "Strategic use"],
          },
          {
            id: "l07-03",
            title: "Debate in Everyday Life",
            order: 3,
            estimatedMinutes: 8,
            content: "Debate skills apply beyond competition. From workplace discussions to family conversations, these skills improve all your communication.",
            keyPoints: ["Professional applications", "Personal relationships", "Civic engagement", "Daily practice"],
          },
          {
            id: "l07-04",
            title: "The Toulmin Model (Claim, Data, Warrant, Backing, Qualifier, Rebuttal)",
            order: 4,
            estimatedMinutes: 15,
            content: "The Toulmin model provides a complete framework for understanding arguments. Beyond claim-warrant-impact, it adds backing, qualifiers, and anticipated rebuttals.",
            keyPoints: ["Six components", "How they connect", "Building complete arguments", "Analyzing opponent args"],
          },
          {
            id: "l07-05",
            title: "Slippery Slope",
            order: 5,
            estimatedMinutes: 10,
            content: "Slippery slope claims one action will inevitably lead to extreme consequences. Learn when this argument is valid and when it's fallacious.",
            keyPoints: ["Definition", "Valid vs fallacious", "Proving the slope", "Defending against it"],
          },
          {
            id: "l07-06",
            title: "Understanding Correlation vs Causation",
            order: 6,
            estimatedMinutes: 12,
            content: "Correlation doesn't prove causation. Learn to distinguish between things that happen together and things that cause each other.",
            keyPoints: ["Correlation defined", "Causation requirements", "Confounding variables", "Testing causation"],
          },
          {
            id: "l07-07",
            title: "Review: Logic Basics",
            order: 7,
            estimatedMinutes: 5,
            content: "Review logical concepts and fallacies covered in this unit.",
            keyPoints: ["Bias detection", "Fallacy identification", "Argument models"],
          },
        ],
      },
    ],
  },
  {
    id: "unit-08",
    title: "Research and Appeals",
    description: "Develop research skills and understand persuasive appeals",
    tier: "BEGINNER",
    order: 8,
    sections: [
      {
        id: "s08-01",
        title: "Research and Appeals",
        order: 1,
        lessons: [
          {
            id: "l08-01",
            title: "Anticipating Objections",
            order: 1,
            estimatedMinutes: 10,
            content: "Strong arguments anticipate and address counterarguments. Learn to predict opponent objections and build responses into your case.",
            keyPoints: ["Thinking like opposition", "Common objections", "Preemptive responses", "Strengthening cases"],
          },
          {
            id: "l08-02",
            title: "Appeal to Authority (Legitimate vs Illegitimate)",
            order: 2,
            estimatedMinutes: 12,
            content: "Citing experts is powerful when done correctly. Learn to distinguish legitimate expert authority from illegitimate appeals.",
            keyPoints: ["Legitimate expertise", "Field relevance", "Consensus vs outliers", "Attacking authority"],
          },
          {
            id: "l08-03",
            title: "Intellectual Honesty",
            order: 3,
            estimatedMinutes: 8,
            content: "Intellectual honesty means acknowledging weaknesses and engaging fairly. This builds credibility and often makes your arguments stronger.",
            keyPoints: ["Acknowledging limits", "Fair engagement", "Building credibility", "Long-term reputation"],
          },
          {
            id: "l08-04",
            title: "Statistical Evidence and How to Read It",
            order: 4,
            estimatedMinutes: 15,
            content: "Statistics can be powerful or misleading. Learn to read statistical evidence critically, understanding sample sizes, margins of error, and presentation tricks.",
            keyPoints: ["Sample size", "Margin of error", "Base rates", "Presentation tricks"],
          },
          {
            id: "l08-05",
            title: "Appeal to Emotion",
            order: 5,
            estimatedMinutes: 10,
            content: "Emotional appeals (pathos) are legitimate when supporting logical arguments. Learn when emotion helps and when it substitutes for reasoning.",
            keyPoints: ["Legitimate use", "Supporting logic", "Avoiding manipulation", "Audience awareness"],
          },
          {
            id: "l08-06",
            title: "Finding Quality Sources",
            order: 6,
            estimatedMinutes: 12,
            content: "Research skills are fundamental to debate. Learn where to find quality evidence and how to search efficiently.",
            keyPoints: ["Academic databases", "News sources", "Think tanks", "Search strategies"],
          },
          {
            id: "l08-07",
            title: "Review: Research",
            order: 7,
            estimatedMinutes: 5,
            content: "Review research skills and appeals covered in this unit.",
            keyPoints: ["Research strategies", "Appeal types", "Evidence evaluation"],
          },
        ],
      },
    ],
  },
  {
    id: "unit-09",
    title: "Evidence Quality",
    description: "Evaluate evidence quality and credibility",
    tier: "BEGINNER",
    order: 9,
    sections: [
      {
        id: "s09-01",
        title: "Evidence Quality",
        order: 1,
        lessons: [
          {
            id: "l09-01",
            title: "Appeal to Ignorance",
            order: 1,
            estimatedMinutes: 10,
            content: "Appeal to ignorance argues something is true because it hasn't been proven false (or vice versa). Learn to identify and counter this fallacy.",
            keyPoints: ["Definition", "Burden of proof", "Scientific uncertainty", "Counter-strategies"],
          },
          {
            id: "l09-02",
            title: "Sample Size and Statistical Significance",
            order: 2,
            estimatedMinutes: 12,
            content: "Small samples can produce misleading results. Learn what sample size means and why statistical significance matters.",
            keyPoints: ["Sample size importance", "Statistical significance", "P-values explained", "Evaluating studies"],
          },
          {
            id: "l09-03",
            title: "Respectful Engagement",
            order: 3,
            estimatedMinutes: 8,
            content: "Debate is adversarial but should remain respectful. Learn to disagree strongly while maintaining dignity and professionalism.",
            keyPoints: ["Professional tone", "Separating argument from person", "Building community", "Learning from opponents"],
          },
          {
            id: "l09-04",
            title: "Anecdotal Evidence (When It Works and When It Doesn't)",
            order: 4,
            estimatedMinutes: 10,
            content: "Personal stories can be compelling but aren't generalizable. Learn when anecdotes help and when they're insufficient.",
            keyPoints: ["Illustration vs proof", "When anecdotes work", "Limitations", "Combining with data"],
          },
          {
            id: "l09-05",
            title: "Appeal to Tradition/Novelty",
            order: 5,
            estimatedMinutes: 10,
            content: "Arguing something is good because it's traditional (or new) is fallacious. Learn to identify these appeals and respond effectively.",
            keyPoints: ["Tradition fallacy", "Novelty fallacy", "Evaluating on merits", "Historical context"],
          },
          {
            id: "l09-06",
            title: "Expert Opinion and Qualifications",
            order: 6,
            estimatedMinutes: 10,
            content: "Expert credentials matter, but so does field relevance. Learn to evaluate expert qualifications and challenge weak authority.",
            keyPoints: ["Relevant expertise", "Credential evaluation", "Conflict of interest", "Consensus value"],
          },
          {
            id: "l09-07",
            title: "Review: Evidence Quality",
            order: 7,
            estimatedMinutes: 5,
            content: "Review evidence quality concepts from this unit.",
            keyPoints: ["Evidence evaluation", "Fallacy identification", "Expert assessment"],
          },
        ],
      },
    ],
  },
  {
    id: "unit-10",
    title: "Causation and Ethics",
    description: "Complete the beginner curriculum with causation and ethical foundations",
    tier: "BEGINNER",
    order: 10,
    sections: [
      {
        id: "s10-01",
        title: "Causation and Ethics",
        order: 1,
        lessons: [
          {
            id: "l10-01",
            title: "Avoiding Personal Attacks",
            order: 1,
            estimatedMinutes: 8,
            content: "Personal attacks undermine your credibility and distract from arguments. Learn to keep focus on ideas, not individuals.",
            keyPoints: ["Why attacks fail", "Redirecting to arguments", "Responding to attacks", "Professional reputation"],
          },
          {
            id: "l10-02",
            title: "Red Herring and Irrelevance",
            order: 2,
            estimatedMinutes: 10,
            content: "Red herrings distract from the actual issue. Learn to identify irrelevant arguments and refocus debates on what matters.",
            keyPoints: ["Definition", "Common examples", "Calling out", "Refocusing technique"],
          },
          {
            id: "l10-03",
            title: "Academic vs Popular Sources",
            order: 3,
            estimatedMinutes: 10,
            content: "Academic sources go through peer review; popular sources often don't. Understand when each is appropriate and how to use them.",
            keyPoints: ["Peer review value", "Popular source limits", "Appropriate contexts", "Combining sources"],
          },
          {
            id: "l10-04",
            title: "Post Hoc Ergo Propter Hoc",
            order: 4,
            estimatedMinutes: 10,
            content: "This fallacy assumes that because B followed A, A caused B. Learn to identify this error and test for actual causation.",
            keyPoints: ["Definition", "Temporal vs causal", "Testing causation", "Counter-examples"],
          },
          {
            id: "l10-05",
            title: "Proper Citation",
            order: 5,
            estimatedMinutes: 10,
            content: "Proper citation builds credibility and allows verification. Learn debate citation standards and common formats.",
            keyPoints: ["Citation components", "In-speech format", "Verification", "Avoiding fabrication"],
          },
          {
            id: "l10-06",
            title: "False Cause and Correlation vs Causation",
            order: 6,
            estimatedMinutes: 12,
            content: "Comprehensive review of causal fallacies. Strengthen your ability to prove and disprove causal claims.",
            keyPoints: ["Causal fallacies review", "Proving causation", "Attacking causal claims", "Alternative explanations"],
          },
          {
            id: "l10-07",
            title: "Review: Beginner Section Complete",
            order: 7,
            estimatedMinutes: 10,
            content: "Congratulations! Review all beginner concepts and prepare to advance to intermediate level.",
            keyPoints: ["Beginner recap", "Key skills mastered", "Preparation for intermediate", "Next steps"],
          },
        ],
      },
    ],
  },
];

// SECTION 2: INTERMEDIATE (Lessons 71-140) - Units 11-20
export const INTERMEDIATE_UNITS: CurriculumUnit[] = [
  {
    id: "unit-11",
    title: "Advanced Fallacies",
    description: "Master advanced logical fallacies",
    tier: "INTERMEDIATE",
    order: 11,
    sections: [
      {
        id: "s11-01",
        title: "Advanced Fallacies",
        order: 1,
        lessons: [
          { id: "l11-01", title: "Handling Disagreement Gracefully", order: 1, estimatedMinutes: 10, content: "Learn to maintain composure and professionalism when facing strong disagreement or hostile opponents." },
          { id: "l11-02", title: "Begging the Question (Circular Reasoning)", order: 2, estimatedMinutes: 10, content: "Circular reasoning assumes what it's trying to prove. Learn to identify and expose this subtle fallacy." },
          { id: "l11-03", title: "Avoiding Fabricated Evidence", order: 3, estimatedMinutes: 8, content: "Fabricating evidence is a serious ethical violation. Understand the consequences and how to verify sources." },
          { id: "l11-04", title: "Hasty Generalization", order: 4, estimatedMinutes: 10, content: "Drawing broad conclusions from limited examples is a hasty generalization. Learn to identify and counter this error." },
          { id: "l11-05", title: "Fact-Checking Techniques", order: 5, estimatedMinutes: 12, content: "Verify claims before using them and challenge opponent evidence. Learn effective fact-checking methods." },
          { id: "l11-06", title: "Texas Sharpshooter Fallacy", order: 6, estimatedMinutes: 10, content: "This fallacy cherry-picks data to fit a predetermined conclusion. Learn to identify data manipulation." },
          { id: "l11-07", title: "Review: Causation Fallacies", order: 7, estimatedMinutes: 5, content: "Review advanced fallacies and evidence integrity concepts." },
        ],
      },
    ],
  },
  {
    id: "unit-12",
    title: "Language and Logic",
    description: "Understand the relationship between language and logical reasoning",
    tier: "INTERMEDIATE",
    order: 12,
    sections: [
      {
        id: "s12-01",
        title: "Language and Logic",
        order: 1,
        lessons: [
          { id: "l12-01", title: "Knowing When You're Wrong", order: 1, estimatedMinutes: 10, content: "Intellectual growth requires admitting mistakes. Learn to recognize when you're wrong and respond appropriately." },
          { id: "l12-02", title: "Composition and Division Fallacies", order: 2, estimatedMinutes: 10, content: "These fallacies confuse properties of parts with wholes. Learn to identify both directions of error." },
          { id: "l12-03", title: "Charitable Interpretation", order: 3, estimatedMinutes: 10, content: "Interpret opponent arguments in their strongest form. This builds credibility and sharpens your responses." },
          { id: "l12-04", title: "Equivocation and Ambiguity", order: 4, estimatedMinutes: 12, content: "Equivocation uses words with multiple meanings to create confusion. Learn to identify and clarify." },
          { id: "l12-05", title: "Citation and Attribution", order: 5, estimatedMinutes: 10, content: "Proper attribution is both ethical and strategic. Learn advanced citation techniques for debate." },
          { id: "l12-06", title: "No True Scotsman", order: 6, estimatedMinutes: 10, content: "This fallacy redefines terms to exclude counterexamples. Learn to identify and respond to it." },
          { id: "l12-07", title: "Review: Logic", order: 7, estimatedMinutes: 5, content: "Review language-related fallacies and attribution skills." },
        ],
      },
    ],
  },
  {
    id: "unit-13",
    title: "Refutation Types Introduction",
    description: "Learn different types of refutation strategies",
    tier: "INTERMEDIATE",
    order: 13,
    sections: [
      {
        id: "s13-01",
        title: "Refutation Types Introduction",
        order: 1,
        lessons: [
          { id: "l13-01", title: "Steelmanning vs Strawmanning", order: 1, estimatedMinutes: 12, content: "Steelmanning strengthens opponent arguments before refuting them. Learn why this approach is more effective." },
          { id: "l13-02", title: "Refutation by Evidence", order: 2, estimatedMinutes: 12, content: "Counter opponent claims with better or contradictory evidence. Learn to find and deploy counter-evidence." },
          { id: "l13-03", title: "Quoting vs Paraphrasing", order: 3, estimatedMinutes: 10, content: "Learn when to quote directly and when to paraphrase, and how to do each effectively." },
          { id: "l13-04", title: "Tu Quoque (Whataboutism)", order: 4, estimatedMinutes: 10, content: "This fallacy deflects by pointing to opponent hypocrisy. Learn to identify and respond appropriately." },
          { id: "l13-05", title: "Attacking Evidence Quality", order: 5, estimatedMinutes: 12, content: "Challenge opponent evidence on credibility, recency, methodology, and relevance." },
          { id: "l13-06", title: "Refutation by Logic", order: 6, estimatedMinutes: 12, content: "Show internal contradictions in opponent arguments without needing counter-evidence." },
          { id: "l13-07", title: "Review: Refutation Types", order: 7, estimatedMinutes: 5, content: "Review refutation strategies and evidence attacks." },
        ],
      },
    ],
  },
  {
    id: "unit-14",
    title: "More Refutation",
    description: "Expand your refutation toolkit",
    tier: "INTERMEDIATE",
    order: 14,
    sections: [
      {
        id: "s14-01",
        title: "More Refutation",
        order: 1,
        lessons: [
          { id: "l14-01", title: "Genetic Fallacy", order: 1, estimatedMinutes: 10, content: "Judging an argument by its origin rather than merit is fallacious. Learn to identify and expose this error." },
          { id: "l14-02", title: "Identifying Misinformation and Disinformation", order: 2, estimatedMinutes: 12, content: "Distinguish between unintentional errors (misinformation) and deliberate deception (disinformation)." },
          { id: "l14-03", title: "Cherry-Picking Evidence", order: 3, estimatedMinutes: 10, content: "Selective evidence presentation distorts reality. Learn to identify and call out cherry-picking." },
          { id: "l14-04", title: "Refutation by Example/Counterexample", order: 4, estimatedMinutes: 12, content: "A single counterexample can disprove absolute claims. Learn to find and deploy counterexamples strategically." },
          { id: "l14-05", title: "Middle Ground/False Compromise", order: 5, estimatedMinutes: 10, content: "The truth isn't always in the middle. Learn when compromise is valid and when it's fallacious." },
          { id: "l14-06", title: "Attacking Warrants and Logic", order: 6, estimatedMinutes: 12, content: "Target the reasoning that connects evidence to claims. Learn advanced warrant attacks." },
          { id: "l14-07", title: "Review: Evidence Ethics", order: 7, estimatedMinutes: 5, content: "Review refutation techniques and evidence ethics." },
        ],
      },
    ],
  },
  {
    id: "unit-15",
    title: "Strategic Refutation",
    description: "Learn strategic approaches to refutation",
    tier: "INTERMEDIATE",
    order: 15,
    sections: [
      {
        id: "s15-01",
        title: "Strategic Refutation",
        order: 1,
        lessons: [
          { id: "l15-01", title: "Loaded Question", order: 1, estimatedMinutes: 10, content: "Loaded questions assume unproven premises. Learn to identify and dismantle these trick questions." },
          { id: "l15-02", title: "Out-of-Context Quotes", order: 2, estimatedMinutes: 10, content: "Quotes can be distorted by removing context. Learn to identify and restore proper context." },
          { id: "l15-03", title: "Turning Arguments", order: 3, estimatedMinutes: 12, content: "Turn opponent arguments to support your side. Learn link turns and impact turns." },
          { id: "l15-04", title: "Refutation by Minimization", order: 4, estimatedMinutes: 10, content: "Reduce the importance or impact of opponent arguments without fully refuting them." },
          { id: "l15-05", title: "Complex Question Fallacy", order: 5, estimatedMinutes: 10, content: "Similar to loaded questions, complex questions bundle multiple claims. Learn to unbundle and address separately." },
          { id: "l15-06", title: "Preemptive Refutation", order: 6, estimatedMinutes: 12, content: "Address opponent arguments before they make them. Learn strategic preemption." },
          { id: "l15-07", title: "Review: Strategic Skills", order: 7, estimatedMinutes: 5, content: "Review strategic refutation techniques." },
        ],
      },
    ],
  },
  {
    id: "unit-16",
    title: "Advanced Techniques",
    description: "Master advanced refutation and argumentation techniques",
    tier: "INTERMEDIATE",
    order: 16,
    sections: [
      {
        id: "s16-01",
        title: "Advanced Techniques",
        order: 1,
        lessons: [
          { id: "l16-01", title: "Anecdotal Fallacy", order: 1, estimatedMinutes: 10, content: "Personal stories shouldn't override statistical evidence. Learn to balance anecdotes and data." },
          { id: "l16-02", title: "Refutation by Outweighing", order: 2, estimatedMinutes: 12, content: "Concede an argument but show your side has greater impact. Master impact calculus." },
          { id: "l16-03", title: "Bandwagon Fallacy (Appeal to Popularity)", order: 3, estimatedMinutes: 10, content: "Popularity doesn't prove truth. Learn to identify and counter appeals to popular opinion." },
          { id: "l16-04", title: "Conceding Points Strategically", order: 4, estimatedMinutes: 10, content: "Strategic concession can strengthen your position. Learn when and how to concede." },
          { id: "l16-05", title: "Sunk Cost Fallacy", order: 5, estimatedMinutes: 10, content: "Past investment shouldn't drive future decisions. Learn to identify sunk cost reasoning." },
          { id: "l16-06", title: "Refutation by Source Criticism", order: 6, estimatedMinutes: 12, content: "Attack opponent evidence by challenging source credibility, bias, or methodology." },
          { id: "l16-07", title: "Review: Advanced Refutation", order: 7, estimatedMinutes: 5, content: "Review advanced refutation techniques." },
        ],
      },
    ],
  },
  {
    id: "unit-17",
    title: "Organization",
    description: "Organize arguments effectively in debates",
    tier: "INTERMEDIATE",
    order: 17,
    sections: [
      {
        id: "s17-01",
        title: "Organization",
        order: 1,
        lessons: [
          { id: "l17-01", title: "Grouping and Extending Arguments", order: 1, estimatedMinutes: 12, content: "Group related responses together and extend arguments across speeches strategically." },
          { id: "l17-02", title: "Gambler's Fallacy", order: 2, estimatedMinutes: 10, content: "Past random events don't affect future probabilities. Learn to identify this common error." },
          { id: "l17-03", title: "Line-by-Line Refutation", order: 3, estimatedMinutes: 12, content: "Address every opponent argument systematically. Learn organized line-by-line technique." },
          { id: "l17-04", title: "Refutation by Alternative Causality", order: 4, estimatedMinutes: 12, content: "Propose different causes for opponent's examples. Undermine their causal claims." },
          { id: "l17-05", title: "Ecological Fallacy", order: 5, estimatedMinutes: 10, content: "Group statistics don't always apply to individuals. Learn to identify this aggregation error." },
          { id: "l17-06", title: "Crystallization and Weighing", order: 6, estimatedMinutes: 12, content: "In final speeches, crystallize the debate to 2-3 key voting issues." },
          { id: "l17-07", title: "Review: Organization", order: 7, estimatedMinutes: 5, content: "Review organizational strategies and weighing." },
        ],
      },
    ],
  },
  {
    id: "unit-18",
    title: "Comparison and Standards",
    description: "Compare arguments and establish standards",
    tier: "INTERMEDIATE",
    order: 18,
    sections: [
      {
        id: "s18-01",
        title: "Comparison and Standards",
        order: 1,
        lessons: [
          { id: "l18-01", title: "Nirvana Fallacy (Perfect Solution)", order: 1, estimatedMinutes: 10, content: "Rejecting solutions because they're not perfect is fallacious. Learn to compare against alternatives, not ideals." },
          { id: "l18-02", title: "Refutation by Absurdity (Reductio ad Absurdum)", order: 2, estimatedMinutes: 12, content: "Show opponent logic leads to absurd conclusions. Master this classical refutation technique." },
          { id: "l18-03", title: "Structuring Multi-Point Cases", order: 3, estimatedMinutes: 12, content: "Organize cases with multiple contentions. Create clear, memorable structures." },
          { id: "l18-04", title: "Comparative Refutation", order: 4, estimatedMinutes: 12, content: "Show your arguments are relatively superior to opponent's, even if both have merit." },
          { id: "l18-05", title: "Moving the Goalposts", order: 5, estimatedMinutes: 10, content: "Changing standards after argument fails is fallacious. Learn to identify and call out this tactic." },
          { id: "l18-06", title: "Prioritizing Arguments", order: 6, estimatedMinutes: 10, content: "Not all arguments are equally important. Learn to identify and focus on the most critical points." },
          { id: "l18-07", title: "Review: Comparison", order: 7, estimatedMinutes: 5, content: "Review comparison techniques and argument prioritization." },
        ],
      },
    ],
  },
  {
    id: "unit-19",
    title: "Application",
    description: "Apply refutation skills in practice",
    tier: "INTERMEDIATE",
    order: 19,
    sections: [
      {
        id: "s19-01",
        title: "Application",
        order: 1,
        lessons: [
          { id: "l19-01", title: "Special Pleading", order: 1, estimatedMinutes: 10, content: "Applying rules selectively without justification is fallacious. Learn to identify and expose special pleading." },
          { id: "l19-02", title: "When to Use Each Refutation Type", order: 2, estimatedMinutes: 15, content: "Match refutation strategies to argument types. Develop strategic flexibility." },
          { id: "l19-03", title: "Signposting and Organization", order: 3, estimatedMinutes: 10, content: "Guide judges through your arguments with clear verbal organization." },
          { id: "l19-04", title: "Combining Multiple Refutation Strategies", order: 4, estimatedMinutes: 12, content: "Layer multiple attacks on single arguments for maximum effect." },
          { id: "l19-05", title: "Burden of Proof Reversal", order: 5, estimatedMinutes: 12, content: "Make opponents prove their own assumptions. Learn strategic burden shifting." },
          { id: "l19-06", title: "Transitions Between Arguments", order: 6, estimatedMinutes: 10, content: "Create smooth flow between arguments. Master transitional language." },
          { id: "l19-07", title: "Review: Application", order: 7, estimatedMinutes: 5, content: "Review practical application of refutation skills." },
        ],
      },
    ],
  },
  {
    id: "unit-20",
    title: "Final Logic",
    description: "Complete the intermediate curriculum with advanced logic",
    tier: "INTERMEDIATE",
    order: 20,
    sections: [
      {
        id: "s20-01",
        title: "Final Logic",
        order: 1,
        lessons: [
          { id: "l20-01", title: "Common Refutation Mistakes", order: 1, estimatedMinutes: 12, content: "Learn from common errors in refutation. Avoid these pitfalls in your own debates." },
          { id: "l20-02", title: "Argument from Silence", order: 2, estimatedMinutes: 10, content: "Absence of evidence isn't evidence of absence. Learn when silence proves nothing." },
          { id: "l20-03", title: "Opening Statements", order: 3, estimatedMinutes: 12, content: "Master the art of powerful opening statements that frame the debate favorably." },
          { id: "l20-04", title: "Refutation Organization Strategies", order: 4, estimatedMinutes: 12, content: "Organize refutation for maximum clarity and impact. Compare different strategies." },
          { id: "l20-05", title: "Affirming the Consequent", order: 5, estimatedMinutes: 10, content: "This formal fallacy confuses sufficient and necessary conditions. Learn to identify it." },
          { id: "l20-06", title: "Thesis Statements in Debate", order: 6, estimatedMinutes: 10, content: "Craft clear thesis statements that anchor your entire case." },
          { id: "l20-07", title: "Review: Intermediate Section Complete", order: 7, estimatedMinutes: 10, content: "Congratulations! Review intermediate skills and prepare for advanced level." },
        ],
      },
    ],
  },
];

// SECTION 3: ADVANCED (Lessons 141-210) - Units 21-30
export const ADVANCED_UNITS: CurriculumUnit[] = [
  {
    id: "unit-21",
    title: "Logic Complete",
    description: "Master all logical fallacies and rhetorical appeals",
    tier: "ADVANCED",
    order: 21,
    sections: [
      {
        id: "s21-01",
        title: "Logic Complete",
        order: 1,
        lessons: [
          { id: "l21-01", title: "Denying the Antecedent", order: 1, estimatedMinutes: 10, content: "This formal fallacy incorrectly negates conditionals. Learn the logical structure behind it." },
          { id: "l21-02", title: "Framing and Narrative", order: 2, estimatedMinutes: 12, content: "Frame debates to favor your position. Control the narrative and context." },
          { id: "l21-03", title: "Fallacy Fallacy", order: 3, estimatedMinutes: 10, content: "Just because an argument contains a fallacy doesn't mean the conclusion is false." },
          { id: "l21-04", title: "Word Choice and Connotation", order: 4, estimatedMinutes: 10, content: "Strategic word choice shapes perception. Master connotation and framing through language." },
          { id: "l21-05", title: "Comprehensive Review: All Logical Fallacies", order: 5, estimatedMinutes: 20, content: "Review all fallacies covered so far. Build a complete fallacy identification toolkit." },
          { id: "l21-06", title: "The Three Appeals: Ethos, Pathos, Logos", order: 6, estimatedMinutes: 15, content: "Master Aristotle's three modes of persuasion for complete rhetorical power." },
          { id: "l21-07", title: "Review: Logic Mastery", order: 7, estimatedMinutes: 5, content: "Review advanced logic and rhetorical concepts." },
        ],
      },
    ],
  },
  {
    id: "unit-22",
    title: "Persuasion",
    description: "Master the art of persuasion",
    tier: "ADVANCED",
    order: 22,
    sections: [
      {
        id: "s22-01",
        title: "Persuasion",
        order: 1,
        lessons: [
          { id: "l22-01", title: "Tone and Voice", order: 1, estimatedMinutes: 10, content: "Your tone conveys as much as your words. Master vocal tone for maximum impact." },
          { id: "l22-02", title: "Building Credibility (Ethos)", order: 2, estimatedMinutes: 12, content: "Establish yourself as trustworthy and knowledgeable. Deep dive into ethos." },
          { id: "l22-03", title: "Pace and Rhythm in Speaking", order: 3, estimatedMinutes: 10, content: "Control speaking pace for emphasis and clarity. Master rhythmic delivery." },
          { id: "l22-04", title: "Emotional Appeals (When and How)", order: 4, estimatedMinutes: 12, content: "Use pathos effectively without manipulation. Balance emotion with logic." },
          { id: "l22-05", title: "Qualifying Your Arguments", order: 5, estimatedMinutes: 10, content: "Appropriate qualifiers make arguments stronger. Avoid overstatement." },
          { id: "l22-06", title: "Logical Appeals and Reasoning", order: 6, estimatedMinutes: 12, content: "Deep dive into logos. Structure arguments for maximum logical force." },
          { id: "l22-07", title: "Review: Persuasion", order: 7, estimatedMinutes: 5, content: "Review persuasion techniques and rhetorical appeals." },
        ],
      },
    ],
  },
  {
    id: "unit-23",
    title: "Rhetorical Devices",
    description: "Master rhetorical devices for powerful speaking",
    tier: "ADVANCED",
    order: 23,
    sections: [
      {
        id: "s23-01",
        title: "Rhetorical Devices",
        order: 1,
        lessons: [
          { id: "l23-01", title: "Emphasis and Inflection", order: 1, estimatedMinutes: 10, content: "Advanced vocal techniques for emphasis. Guide attention through inflection." },
          { id: "l23-02", title: "Rhetorical Devices: Metaphor and Simile", order: 2, estimatedMinutes: 12, content: "Use comparison to clarify complex ideas. Master figurative language." },
          { id: "l23-03", title: "Non-Verbal Communication Advanced", order: 3, estimatedMinutes: 12, content: "Advanced body language techniques for commanding presence." },
          { id: "l23-04", title: "Rhetorical Devices: Analogy", order: 4, estimatedMinutes: 12, content: "Extended comparisons explain complex concepts. Master the art of analogy." },
          { id: "l23-05", title: "Rhetorical Devices: Repetition and Parallelism", order: 5, estimatedMinutes: 10, content: "Repetition creates emphasis; parallelism creates rhythm. Use both strategically." },
          { id: "l23-06", title: "Rhetorical Devices: Rhetorical Questions", order: 6, estimatedMinutes: 10, content: "Questions that don't need answers can be powerful. Master rhetorical questions." },
          { id: "l23-07", title: "Review: Rhetoric", order: 7, estimatedMinutes: 5, content: "Review rhetorical devices and delivery techniques." },
        ],
      },
    ],
  },
  {
    id: "unit-24",
    title: "More Rhetoric",
    description: "Advanced rhetoric and debate culture",
    tier: "ADVANCED",
    order: 24,
    sections: [
      {
        id: "s24-01",
        title: "More Rhetoric",
        order: 1,
        lessons: [
          { id: "l24-01", title: "Rhetorical Devices: Antithesis", order: 1, estimatedMinutes: 10, content: "Contrasting ideas in parallel structure creates memorable phrases." },
          { id: "l24-02", title: "Rhetorical Devices: Hyperbole and Understatement", order: 2, estimatedMinutes: 10, content: "Strategic exaggeration and minimization for effect." },
          { id: "l24-03", title: "Understanding the Circuit You're Competing In", order: 3, estimatedMinutes: 12, content: "Different circuits have different norms. Understand your competitive environment." },
          { id: "l24-04", title: "Tournament Types (Local, Regional, State, National)", order: 4, estimatedMinutes: 10, content: "Navigate the tournament landscape from local to national competition." },
          { id: "l24-05", title: "TOC-Bid Tournaments", order: 5, estimatedMinutes: 12, content: "Understand the Tournament of Champions qualification system." },
          { id: "l24-06", title: "Adapting Cases for Traditional vs Circuit", order: 6, estimatedMinutes: 12, content: "Modify your approach for different competitive environments." },
          { id: "l24-07", title: "Review: Rhetoric and Culture", order: 7, estimatedMinutes: 5, content: "Review advanced rhetoric and debate culture concepts." },
        ],
      },
    ],
  },
  {
    id: "unit-25",
    title: "Policy Fundamentals",
    description: "Master policy debate fundamentals",
    tier: "ADVANCED",
    order: 25,
    sections: [
      {
        id: "s25-01",
        title: "Policy Fundamentals",
        order: 1,
        lessons: [
          { id: "l25-01", title: "Policy Debate: Stock Issues", order: 1, estimatedMinutes: 15, content: "Master the five stock issues: Inherency, Harms, Solvency, Topicality, and Significance." },
          { id: "l25-02", title: "What is Impact?", order: 2, estimatedMinutes: 12, content: "Deep dive into impact-level argumentation. Why consequences matter in debate." },
          { id: "l25-03", title: "Policy Debate: Plan Text", order: 3, estimatedMinutes: 12, content: "Write clear, enforceable plan texts that solve problems effectively." },
          { id: "l25-04", title: "Magnitude (Size of Impact)", order: 4, estimatedMinutes: 10, content: "How big is the impact? Learn to measure and compare magnitude." },
          { id: "l25-05", title: "Policy Debate: Disadvantages", order: 5, estimatedMinutes: 15, content: "Argue that the plan causes worse problems than it solves." },
          { id: "l25-06", title: "Probability (Likelihood of Impact)", order: 6, estimatedMinutes: 10, content: "How likely is the impact? Assess and compare probability." },
          { id: "l25-07", title: "Review: Policy Basics", order: 7, estimatedMinutes: 5, content: "Review policy debate fundamentals and impact metrics." },
        ],
      },
    ],
  },
  {
    id: "unit-26",
    title: "Policy Advanced and Impact",
    description: "Advanced policy concepts and impact calculus",
    tier: "ADVANCED",
    order: 26,
    sections: [
      {
        id: "s26-01",
        title: "Policy Advanced and Impact",
        order: 1,
        lessons: [
          { id: "l26-01", title: "Timeframe (When Impact Occurs)", order: 1, estimatedMinutes: 10, content: "When does the impact happen? Learn to weigh timeframe in debates." },
          { id: "l26-02", title: "Policy Debate: Counterplans", order: 2, estimatedMinutes: 15, content: "Propose alternative solutions that avoid disadvantages. Master counterplan strategy." },
          { id: "l26-03", title: "Comparing Impacts", order: 3, estimatedMinutes: 12, content: "Weigh competing impacts using magnitude, probability, and timeframe." },
          { id: "l26-04", title: "Impact Calculus", order: 4, estimatedMinutes: 15, content: "The complete framework for weighing impacts against each other." },
          { id: "l26-05", title: "Existential Risks vs Incremental Harms", order: 5, estimatedMinutes: 12, content: "Compare risks of extinction with smaller but certain harms." },
          { id: "l26-06", title: "Reversibility of Impacts", order: 6, estimatedMinutes: 10, content: "Can the impact be undone? Reversibility matters in impact calculus." },
          { id: "l26-07", title: "Review: Policy and Impact", order: 7, estimatedMinutes: 5, content: "Review advanced policy concepts and impact calculus." },
        ],
      },
    ],
  },
  {
    id: "unit-27",
    title: "Judges Introduction",
    description: "Understand different judge types",
    tier: "ADVANCED",
    order: 27,
    sections: [
      {
        id: "s27-01",
        title: "Judges Introduction",
        order: 1,
        lessons: [
          { id: "l27-01", title: "Types of Judges Overview", order: 1, estimatedMinutes: 12, content: "Survey the landscape of judge types and their preferences." },
          { id: "l27-02", title: "Overcoming Debate Anxiety", order: 2, estimatedMinutes: 10, content: "Manage nerves and perform at your best under pressure." },
          { id: "l27-03", title: "Lay Judges (Parent Judges, Community Judges)", order: 3, estimatedMinutes: 12, content: "Adapt your style for non-expert community judges." },
          { id: "l27-04", title: "Building Confidence", order: 4, estimatedMinutes: 10, content: "Develop lasting confidence through preparation and mindset." },
          { id: "l27-05", title: "Flow Judges (Experienced Debaters)", order: 5, estimatedMinutes: 12, content: "Adapt for judges who flow everything and expect technical precision." },
          { id: "l27-06", title: "Dealing with Aggressive Opponents", order: 6, estimatedMinutes: 10, content: "Maintain composure and effectiveness against aggressive opposition." },
          { id: "l27-07", title: "Review: Basic Judges", order: 7, estimatedMinutes: 5, content: "Review judge types and mental preparation." },
        ],
      },
    ],
  },
  {
    id: "unit-28",
    title: "Judge Philosophy",
    description: "Understand judge philosophies and paradigms",
    tier: "ADVANCED",
    order: 28,
    sections: [
      {
        id: "s28-01",
        title: "Judge Philosophy",
        order: 1,
        lessons: [
          { id: "l28-01", title: "Flay Judges (Hybrid)", order: 1, estimatedMinutes: 10, content: "Adapt for judges between flow and lay styles." },
          { id: "l28-02", title: "Maintaining Composure", order: 2, estimatedMinutes: 10, content: "Stay calm and focused regardless of round circumstances." },
          { id: "l28-03", title: "Tech Judges (Technical Execution)", order: 3, estimatedMinutes: 12, content: "Meet high technical standards for experienced judges." },
          { id: "l28-04", title: "Growth Mindset in Debate", order: 4, estimatedMinutes: 10, content: "Embrace learning and improvement over winning." },
          { id: "l28-05", title: "Truth Over Tech Judges", order: 5, estimatedMinutes: 12, content: "Adapt for judges who prioritize real-world truth over technical execution." },
          { id: "l28-06", title: "Learning from Losses", order: 6, estimatedMinutes: 10, content: "Extract maximum learning from defeats." },
          { id: "l28-07", title: "Review: Judge Types", order: 7, estimatedMinutes: 5, content: "Review judge philosophies and mindset concepts." },
        ],
      },
    ],
  },
  {
    id: "unit-29",
    title: "More Judges",
    description: "Additional judge types and adaptation strategies",
    tier: "ADVANCED",
    order: 29,
    sections: [
      {
        id: "s29-01",
        title: "More Judges",
        order: 1,
        lessons: [
          { id: "l29-01", title: "Tab Judges (Tabula Rasa)", order: 1, estimatedMinutes: 12, content: "Judges who aim to be blank slates. Everything must be argued." },
          { id: "l29-02", title: "Analyzing Your Performance", order: 2, estimatedMinutes: 10, content: "Systematically review and improve your debate performances." },
          { id: "l29-03", title: "Interventionist Judges", order: 3, estimatedMinutes: 10, content: "Handle judges who inject their own opinions into decisions." },
          { id: "l29-04", title: "Receiving Feedback", order: 4, estimatedMinutes: 10, content: "Maximize learning from judge and peer feedback." },
          { id: "l29-05", title: "Policy Judges", order: 5, estimatedMinutes: 10, content: "Adapt for judges who prefer policy-style argumentation." },
          { id: "l29-06", title: "LD Judges", order: 6, estimatedMinutes: 10, content: "Adapt for judges who prefer Lincoln-Douglas value debate." },
          { id: "l29-07", title: "Review: Judges", order: 7, estimatedMinutes: 5, content: "Review additional judge types." },
        ],
      },
    ],
  },
  {
    id: "unit-30",
    title: "Format and Specialized Judges",
    description: "Complete the advanced section with specialized judge adaptation",
    tier: "ADVANCED",
    order: 30,
    sections: [
      {
        id: "s30-01",
        title: "Format and Specialized Judges",
        order: 1,
        lessons: [
          { id: "l30-01", title: "PF Judges", order: 1, estimatedMinutes: 10, content: "Adapt for judges who prefer Public Forum accessible style." },
          { id: "l30-02", title: "Traditional Judges", order: 2, estimatedMinutes: 10, content: "Meet expectations of judges preferring traditional debate norms." },
          { id: "l30-03", title: "Progressive Judges", order: 3, estimatedMinutes: 12, content: "Run kritiks, theory, and unconventional arguments for receptive judges." },
          { id: "l30-04", title: "Circuit Judges", order: 4, estimatedMinutes: 12, content: "Meet national circuit technical standards." },
          { id: "l30-05", title: "Local Circuit Judges", order: 5, estimatedMinutes: 10, content: "Navigate judges between traditional and national circuit styles." },
          { id: "l30-06", title: "Stock Issues Judges", order: 6, estimatedMinutes: 10, content: "Adapt for policy judges using traditional stock issues framework." },
          { id: "l30-07", title: "Review: Advanced Section Complete", order: 7, estimatedMinutes: 10, content: "Congratulations! Review advanced skills and prepare for expert level." },
        ],
      },
    ],
  },
];

// SECTION 4: EXPERT (Lessons 211-280) - Units 31-40
export const EXPERT_UNITS: CurriculumUnit[] = [
  {
    id: "unit-31",
    title: "Specialized Judge Types",
    description: "Master specialized judge adaptation",
    tier: "EXPERT",
    order: 31,
    sections: [
      {
        id: "s31-01",
        title: "Specialized Judge Types",
        order: 1,
        lessons: [
          { id: "l31-01", title: "Policymaker Judges", order: 1, estimatedMinutes: 12, content: "Judges who evaluate as if making real policy decisions." },
          { id: "l31-02", title: "Kritik-Friendly Judges", order: 2, estimatedMinutes: 12, content: "Judges receptive to critical arguments and philosophical debate." },
          { id: "l31-03", title: "Theory-Friendly Judges", order: 3, estimatedMinutes: 12, content: "Judges who vote on procedural and theory arguments." },
          { id: "l31-04", title: "Performance-Friendly Judges", order: 4, estimatedMinutes: 12, content: "Judges who accept performance debate and narrative approaches." },
          { id: "l31-05", title: "Speed-Tolerant Judges", order: 5, estimatedMinutes: 10, content: "Judges who can handle spreading and fast delivery." },
          { id: "l31-06", title: "Conversational Pace Judges", order: 6, estimatedMinutes: 10, content: "Judges who prefer slower, clearer speaking." },
          { id: "l31-07", title: "Review: Specialized Judges", order: 7, estimatedMinutes: 5, content: "Review specialized judge types." },
        ],
      },
    ],
  },
  {
    id: "unit-32",
    title: "Evidence and Logic Judges",
    description: "Adapt to evidence-focused and logic-focused judges",
    tier: "EXPERT",
    order: 32,
    sections: [
      {
        id: "s32-01",
        title: "Evidence and Logic Judges",
        order: 1,
        lessons: [
          { id: "l32-01", title: "Evidence-Heavy Judges", order: 1, estimatedMinutes: 12, content: "Judges who want extensive evidence and citations." },
          { id: "l32-02", title: "Logic-Heavy Judges", order: 2, estimatedMinutes: 12, content: "Judges who prefer reasoning over evidence quantity." },
          { id: "l32-03", title: "Reading Judge Paradigms", order: 3, estimatedMinutes: 15, content: "Interpret and apply judge paradigm statements effectively." },
          { id: "l32-04", title: "Identifying Judge Preferences", order: 4, estimatedMinutes: 12, content: "Read judge cues during rounds to identify preferences." },
          { id: "l32-05", title: "Adapting Speaking Style to Judges", order: 5, estimatedMinutes: 12, content: "Modify delivery based on judge preferences." },
          { id: "l32-06", title: "Adapting Arguments to Judges", order: 6, estimatedMinutes: 12, content: "Modify argument selection based on judge preferences." },
          { id: "l32-07", title: "Review: Judge Adaptation", order: 7, estimatedMinutes: 5, content: "Review complete judge adaptation strategies." },
        ],
      },
    ],
  },
  {
    id: "unit-33",
    title: "Advanced Judge Adaptation",
    description: "Expert-level judge adaptation and cross-examination",
    tier: "EXPERT",
    order: 33,
    sections: [
      {
        id: "s33-01",
        title: "Advanced Judge Adaptation",
        order: 1,
        lessons: [
          { id: "l33-01", title: "What Different Judges Value", order: 1, estimatedMinutes: 15, content: "Comprehensive analysis of judge value systems." },
          { id: "l33-02", title: "Pre-Round Judge Research", order: 2, estimatedMinutes: 12, content: "Research judges before rounds using available resources." },
          { id: "l33-03", title: "Purpose of Cross-Examination", order: 3, estimatedMinutes: 12, content: "Deep dive into cross-examination objectives and strategy." },
          { id: "l33-04", title: "Types of Questions (Open, Closed, Leading)", order: 4, estimatedMinutes: 12, content: "Master question types for different strategic purposes." },
          { id: "l33-05", title: "Asking Good Questions During Cross-X", order: 5, estimatedMinutes: 12, content: "Craft questions that expose weaknesses and build your case." },
          { id: "l33-06", title: "Strategic Questioning", order: 6, estimatedMinutes: 12, content: "Use questions to set up arguments and control narrative." },
          { id: "l33-07", title: "Review: Cross-X Basics", order: 7, estimatedMinutes: 5, content: "Review cross-examination fundamentals." },
        ],
      },
    ],
  },
  {
    id: "unit-34",
    title: "Cross-Examination Mastery",
    description: "Master cross-examination techniques",
    tier: "EXPERT",
    order: 34,
    sections: [
      {
        id: "s34-01",
        title: "Cross-Examination Mastery",
        order: 1,
        lessons: [
          { id: "l34-01", title: "Setting Up Arguments Through Questions", order: 1, estimatedMinutes: 12, content: "Use cross-x to lay groundwork for later arguments." },
          { id: "l34-02", title: "Exposing Contradictions", order: 2, estimatedMinutes: 12, content: "Question strategically to reveal opponent inconsistencies." },
          { id: "l34-03", title: "Common Question Mistakes to Avoid", order: 3, estimatedMinutes: 10, content: "Learn from common cross-x errors." },
          { id: "l34-04", title: "Answering Questions Effectively", order: 4, estimatedMinutes: 12, content: "Navigate opponent cross-x without damaging your case." },
          { id: "l34-05", title: "Phrasing Questions for Maximum Impact", order: 5, estimatedMinutes: 12, content: "Word questions for maximum strategic effect." },
          { id: "l34-06", title: "Follow-Up Questioning Techniques", order: 6, estimatedMinutes: 12, content: "Build on responses to deepen strategic advantage." },
          { id: "l34-07", title: "Review: Question Techniques", order: 7, estimatedMinutes: 5, content: "Review advanced questioning techniques." },
        ],
      },
    ],
  },
  {
    id: "unit-35",
    title: "Advanced Cross-X",
    description: "Advanced cross-examination and crossfire formats",
    tier: "EXPERT",
    order: 35,
    sections: [
      {
        id: "s35-01",
        title: "Advanced Cross-X",
        order: 1,
        lessons: [
          { id: "l35-01", title: "Controlling the Cross-Examination Flow", order: 1, estimatedMinutes: 12, content: "Maintain control of cross-x pace and direction." },
          { id: "l35-02", title: "Avoiding Traps in Cross-X", order: 2, estimatedMinutes: 12, content: "Recognize and avoid opponent question traps." },
          { id: "l35-03", title: "Maintaining Composure Under Pressure", order: 3, estimatedMinutes: 10, content: "Stay calm during aggressive questioning." },
          { id: "l35-04", title: "Crossfire vs Cross-Examination", order: 4, estimatedMinutes: 10, content: "Understand format differences and adapt accordingly." },
          { id: "l35-05", title: "Public Forum: Crossfire (1v1)", order: 5, estimatedMinutes: 12, content: "Master the 1v1 crossfire format in Public Forum." },
          { id: "l35-06", title: "Grand Crossfire (PF 2v2)", order: 6, estimatedMinutes: 12, content: "Navigate the all-debaters grand crossfire format." },
          { id: "l35-07", title: "Review: Cross-X Formats", order: 7, estimatedMinutes: 5, content: "Review cross-examination and crossfire formats." },
        ],
      },
    ],
  },
  {
    id: "unit-36",
    title: "Team Cross-Examination",
    description: "Master team cross-examination dynamics",
    tier: "EXPERT",
    order: 36,
    sections: [
      {
        id: "s36-01",
        title: "Team Cross-Examination",
        order: 1,
        lessons: [
          { id: "l36-01", title: "Grand Cross-X Strategies", order: 1, estimatedMinutes: 12, content: "Strategic approaches for multi-person cross-examination." },
          { id: "l36-02", title: "Partner Coordination During Grand Crossfire", order: 2, estimatedMinutes: 12, content: "Work effectively with your partner in team cross." },
          { id: "l36-03", title: "Managing Chaos in Multi-Person Cross", order: 3, estimatedMinutes: 10, content: "Stay organized when multiple people are questioning." },
          { id: "l36-04", title: "Strategic Question Allocation in Team Cross", order: 4, estimatedMinutes: 12, content: "Divide questions effectively between partners." },
          { id: "l36-05", title: "When to Let Your Partner Take the Lead", order: 5, estimatedMinutes: 10, content: "Know when to step back and support your partner." },
          { id: "l36-06", title: "Controlling Multiple Opponents", order: 6, estimatedMinutes: 12, content: "Manage questioning when facing a team." },
          { id: "l36-07", title: "Review: Team Cross-X", order: 7, estimatedMinutes: 5, content: "Review team cross-examination strategies." },
        ],
      },
    ],
  },
  {
    id: "unit-37",
    title: "Theory Introduction",
    description: "Introduction to debate theory",
    tier: "EXPERT",
    order: 37,
    sections: [
      {
        id: "s37-01",
        title: "Theory Introduction",
        order: 1,
        lessons: [
          { id: "l37-01", title: "Burden of Proof", order: 1, estimatedMinutes: 12, content: "Deep dive into burden allocation and strategic implications." },
          { id: "l37-02", title: "Debating Science Topics", order: 2, estimatedMinutes: 12, content: "Handle scientific evidence and methodology arguments." },
          { id: "l37-03", title: "Presumption", order: 3, estimatedMinutes: 12, content: "Understand and argue presumption in close debates." },
          { id: "l37-04", title: "Debating Political Topics", order: 4, estimatedMinutes: 12, content: "Navigate politically charged topics fairly." },
          { id: "l37-05", title: "Definitions and Topicality", order: 5, estimatedMinutes: 15, content: "Master definition debates and topicality arguments." },
          { id: "l37-06", title: "Debating Moral/Ethical Topics", order: 6, estimatedMinutes: 12, content: "Argue ethics without alienating judges." },
          { id: "l37-07", title: "Review: Theory Basics", order: 7, estimatedMinutes: 5, content: "Review theory fundamentals." },
        ],
      },
    ],
  },
  {
    id: "unit-38",
    title: "More Theory",
    description: "Framework arguments and value debate",
    tier: "EXPERT",
    order: 38,
    sections: [
      {
        id: "s38-01",
        title: "More Theory",
        order: 1,
        lessons: [
          { id: "l38-01", title: "Interpretations and Violations", order: 1, estimatedMinutes: 12, content: "Structure theory arguments with clear interpretations." },
          { id: "l38-02", title: "Debating Economic Topics", order: 2, estimatedMinutes: 12, content: "Navigate economic arguments and data." },
          { id: "l38-03", title: "Framework Arguments", order: 3, estimatedMinutes: 15, content: "Deep dive into framework strategy and execution." },
          { id: "l38-04", title: "Debating Social Issues", order: 4, estimatedMinutes: 12, content: "Handle sensitive social topics appropriately." },
          { id: "l38-05", title: "Value Premises and Criteria", order: 5, estimatedMinutes: 12, content: "Construct and attack value structures in LD." },
          { id: "l38-06", title: "Debating Abstract Concepts", order: 6, estimatedMinutes: 12, content: "Make philosophical concepts accessible and arguable." },
          { id: "l38-07", title: "Review: Theory", order: 7, estimatedMinutes: 5, content: "Review framework and value concepts." },
        ],
      },
    ],
  },
  {
    id: "unit-39",
    title: "Advanced Theory",
    description: "Advanced theory arguments",
    tier: "EXPERT",
    order: 39,
    sections: [
      {
        id: "s39-01",
        title: "Advanced Theory",
        order: 1,
        lessons: [
          { id: "l39-01", title: "Competing Frameworks", order: 1, estimatedMinutes: 15, content: "Win framework debates when both sides have competing standards." },
          { id: "l39-02", title: "Debating Hypotheticals", order: 2, estimatedMinutes: 10, content: "Argue effectively about hypothetical scenarios." },
          { id: "l39-03", title: "Meta-Ethics in Debate", order: 3, estimatedMinutes: 15, content: "Argue about the foundations of ethics themselves." },
          { id: "l39-04", title: "Debating Current Events", order: 4, estimatedMinutes: 10, content: "Incorporate recent events effectively." },
          { id: "l39-05", title: "Theory Arguments in Depth", order: 5, estimatedMinutes: 15, content: "Advanced theory shells and responses." },
          { id: "l39-06", title: "Critical Thinking Beyond Debate", order: 6, estimatedMinutes: 10, content: "Apply debate skills to broader intellectual life." },
          { id: "l39-07", title: "Review: Advanced Theory", order: 7, estimatedMinutes: 5, content: "Review advanced theory concepts." },
        ],
      },
    ],
  },
  {
    id: "unit-40",
    title: "Specialized Theory",
    description: "Complete the expert section with specialized theory",
    tier: "EXPERT",
    order: 40,
    sections: [
      {
        id: "s40-01",
        title: "Specialized Theory",
        order: 1,
        lessons: [
          { id: "l40-01", title: "Procedurals and Jurisdiction", order: 1, estimatedMinutes: 12, content: "Argue about what the judge can and cannot evaluate." },
          { id: "l40-02", title: "Media Literacy", order: 2, estimatedMinutes: 10, content: "Evaluate media sources critically in debate." },
          { id: "l40-03", title: "Fiat and Plan Mandates", order: 3, estimatedMinutes: 12, content: "Understand what fiat means and how plans work." },
          { id: "l40-04", title: "Political Discourse", order: 4, estimatedMinutes: 10, content: "Engage effectively in political debates." },
          { id: "l40-05", title: "Spread (Speed Reading) - Pros and Cons", order: 5, estimatedMinutes: 12, content: "Evaluate whether to spread and how to do it." },
          { id: "l40-06", title: "Persuading in Professional Settings", order: 6, estimatedMinutes: 10, content: "Apply debate skills in work environments." },
          { id: "l40-07", title: "Review: Expert Section Complete", order: 7, estimatedMinutes: 10, content: "Congratulations! Review expert skills and prepare for master level." },
        ],
      },
    ],
  },
];

// SECTION 5: MASTER (Lessons 281-350) - Units 41-49
export const MASTER_UNITS: CurriculumUnit[] = [
  {
    id: "unit-41",
    title: "LD Deep Dive",
    description: "Master Lincoln-Douglas debate",
    tier: "MASTER",
    order: 41,
    sections: [
      {
        id: "s41-01",
        title: "LD Deep Dive",
        order: 1,
        lessons: [
          { id: "l41-01", title: "Lincoln-Douglas: Value Debate", order: 1, estimatedMinutes: 15, content: "Master value-based argumentation in LD format." },
          { id: "l41-02", title: "Negotiation Skills", order: 2, estimatedMinutes: 10, content: "Apply debate skills to negotiation contexts." },
          { id: "l41-03", title: "Lincoln-Douglas: Frameworks", order: 3, estimatedMinutes: 15, content: "Advanced framework strategy specific to LD." },
          { id: "l41-04", title: "Respectful Engagement", order: 4, estimatedMinutes: 8, content: "Maintain professionalism at the highest levels." },
          { id: "l41-05", title: "Moral Arguments", order: 5, estimatedMinutes: 12, content: "Construct and defend sophisticated moral arguments." },
          { id: "l41-06", title: "Handling Disagreement Gracefully", order: 6, estimatedMinutes: 10, content: "Advanced techniques for professional disagreement." },
          { id: "l41-07", title: "Review: LD Mastery", order: 7, estimatedMinutes: 5, content: "Review LD-specific skills." },
        ],
      },
    ],
  },
  {
    id: "unit-42",
    title: "Philosophical Arguments",
    description: "Master philosophical argumentation",
    tier: "MASTER",
    order: 42,
    sections: [
      {
        id: "s42-01",
        title: "Philosophical Arguments",
        order: 1,
        lessons: [
          { id: "l42-01", title: "Consequentialist Arguments", order: 1, estimatedMinutes: 15, content: "Argue from consequences and outcomes." },
          { id: "l42-02", title: "Research Strategies", order: 2, estimatedMinutes: 12, content: "Advanced research techniques for competitive debate." },
          { id: "l42-03", title: "Deontological Arguments", order: 3, estimatedMinutes: 15, content: "Argue from duties and principles regardless of outcomes." },
          { id: "l42-04", title: "Building a Case File", order: 4, estimatedMinutes: 12, content: "Create and maintain comprehensive case files." },
          { id: "l42-05", title: "Rights-Based Arguments", order: 5, estimatedMinutes: 12, content: "Argue from fundamental rights and liberties." },
          { id: "l42-06", title: "Cutting Cards (Evidence Preparation)", order: 6, estimatedMinutes: 12, content: "Master the art of evidence preparation." },
          { id: "l42-07", title: "Review: Philosophy", order: 7, estimatedMinutes: 5, content: "Review philosophical argument types." },
        ],
      },
    ],
  },
  {
    id: "unit-43",
    title: "Economic Arguments",
    description: "Master economic argumentation",
    tier: "MASTER",
    order: 43,
    sections: [
      {
        id: "s43-01",
        title: "Economic Arguments",
        order: 1,
        lessons: [
          { id: "l43-01", title: "Utilitarian Arguments", order: 1, estimatedMinutes: 12, content: "Maximize overall welfare in your arguments." },
          { id: "l43-02", title: "Pre-Round Preparation", order: 2, estimatedMinutes: 12, content: "Advanced pre-round preparation routines." },
          { id: "l43-03", title: "Economic Arguments", order: 3, estimatedMinutes: 15, content: "Master economic reasoning and data." },
          { id: "l43-04", title: "Adjusting Strategy Mid-Debate", order: 4, estimatedMinutes: 12, content: "Adapt your approach based on round dynamics." },
          { id: "l43-05", title: "Cost-Benefit Analysis", order: 5, estimatedMinutes: 12, content: "Structure arguments around costs and benefits." },
          { id: "l43-06", title: "Scientific Arguments", order: 6, estimatedMinutes: 12, content: "Use scientific evidence and methodology effectively." },
          { id: "l43-07", title: "Review: Economics", order: 7, estimatedMinutes: 5, content: "Review economic and utilitarian arguments." },
        ],
      },
    ],
  },
  {
    id: "unit-44",
    title: "Legal and Constitutional",
    description: "Master legal and constitutional argumentation",
    tier: "MASTER",
    order: 44,
    sections: [
      {
        id: "s44-01",
        title: "Legal and Constitutional",
        order: 1,
        lessons: [
          { id: "l44-01", title: "Opportunity Cost", order: 1, estimatedMinutes: 10, content: "What are we giving up? Argue opportunity costs." },
          { id: "l44-02", title: "Legal Arguments", order: 2, estimatedMinutes: 15, content: "Use legal principles and precedent effectively." },
          { id: "l44-03", title: "Strategic Concessions", order: 3, estimatedMinutes: 12, content: "Concede strategically to strengthen your position." },
          { id: "l44-04", title: "Constitutional Arguments", order: 4, estimatedMinutes: 15, content: "Argue from constitutional principles and interpretation." },
          { id: "l44-05", title: "Time Allocation", order: 5, estimatedMinutes: 10, content: "Advanced time management in speeches." },
          { id: "l44-06", title: "Slippery Slope Arguments (Legitimate Use)", order: 6, estimatedMinutes: 12, content: "When and how slippery slope arguments are valid." },
          { id: "l44-07", title: "Review: Legal Args", order: 7, estimatedMinutes: 5, content: "Review legal and constitutional argumentation." },
        ],
      },
    ],
  },
  {
    id: "unit-45",
    title: "Public Forum Deep Dive",
    description: "Master Public Forum debate",
    tier: "MASTER",
    order: 45,
    sections: [
      {
        id: "s45-01",
        title: "Public Forum Deep Dive",
        order: 1,
        lessons: [
          { id: "l45-01", title: "Historical Analogies", order: 1, estimatedMinutes: 12, content: "Use historical examples to support arguments." },
          { id: "l45-02", title: "Public Forum: Summary and Final Focus", order: 2, estimatedMinutes: 15, content: "Master the closing speeches in PF." },
          { id: "l45-03", title: "Precedent-Based Arguments", order: 3, estimatedMinutes: 12, content: "Argue from established precedent." },
          { id: "l45-04", title: "Parliamentary: Points of Information", order: 4, estimatedMinutes: 12, content: "Use POIs effectively in parliamentary debate." },
          { id: "l45-05", title: "Argument Selection and Prioritization", order: 5, estimatedMinutes: 12, content: "Choose and order arguments strategically." },
          { id: "l45-06", title: "Parliamentary: Impromptu Speaking", order: 6, estimatedMinutes: 12, content: "Master impromptu speech construction." },
          { id: "l45-07", title: "Review: PF and Parli", order: 7, estimatedMinutes: 5, content: "Review Public Forum and Parliamentary skills." },
        ],
      },
    ],
  },
  {
    id: "unit-46",
    title: "Counterarguments",
    description: "Master counterargument strategy",
    tier: "MASTER",
    order: 46,
    sections: [
      {
        id: "s46-01",
        title: "Counterarguments",
        order: 1,
        lessons: [
          { id: "l46-01", title: "Types of Counterarguments", order: 1, estimatedMinutes: 12, content: "Survey all types of counterarguments." },
          { id: "l46-02", title: "Adapting to Judges (Advanced)", order: 2, estimatedMinutes: 12, content: "Expert-level judge adaptation techniques." },
          { id: "l46-03", title: "Direct Contradictions", order: 3, estimatedMinutes: 10, content: "When and how to directly contradict opponent claims." },
          { id: "l46-04", title: "Judge Adaptation in Real-Time", order: 4, estimatedMinutes: 12, content: "Read and adapt to judges during rounds." },
          { id: "l46-05", title: "Alternative Explanations", order: 5, estimatedMinutes: 12, content: "Offer alternative explanations for opponent evidence." },
          { id: "l46-06", title: "Reading the Room", order: 6, estimatedMinutes: 10, content: "Assess audience and judge reactions in real-time." },
          { id: "l46-07", title: "Review: Counterarguments", order: 7, estimatedMinutes: 5, content: "Review counterargument strategies." },
        ],
      },
    ],
  },
  {
    id: "unit-47",
    title: "More Counterargs",
    description: "Advanced counterarguments and kritiks",
    tier: "MASTER",
    order: 47,
    sections: [
      {
        id: "s47-01",
        title: "More Counterargs",
        order: 1,
        lessons: [
          { id: "l47-01", title: "Counterexamples", order: 1, estimatedMinutes: 12, content: "Use specific counterexamples to defeat general claims." },
          { id: "l47-02", title: "Kritiks (Critical Arguments)", order: 2, estimatedMinutes: 20, content: "Introduction to kritik structure and strategy." },
          { id: "l47-03", title: "Mitigating Factors", order: 3, estimatedMinutes: 10, content: "Reduce opponent impact claims with mitigating evidence." },
          { id: "l47-04", title: "Types of Kritiks", order: 4, estimatedMinutes: 15, content: "Survey different kritik categories and approaches." },
          { id: "l47-05", title: "Turning the Case", order: 5, estimatedMinutes: 12, content: "Turn opponent arguments into reasons to vote for you." },
          { id: "l47-06", title: "Links, Impacts, and Alternatives in Kritiks", order: 6, estimatedMinutes: 15, content: "Master kritik structure components." },
          { id: "l47-07", title: "Review: Counterargs and Kritiks", order: 7, estimatedMinutes: 5, content: "Review advanced counterarguments and kritiks." },
        ],
      },
    ],
  },
  {
    id: "unit-48",
    title: "Turns and Critical Theory",
    description: "Master turns and critical theory",
    tier: "MASTER",
    order: 48,
    sections: [
      {
        id: "s48-01",
        title: "Turns and Critical Theory",
        order: 1,
        lessons: [
          { id: "l48-01", title: "Link Turns vs Impact Turns", order: 1, estimatedMinutes: 15, content: "Understand the difference and strategic implications." },
          { id: "l48-02", title: "Answering Kritiks", order: 2, estimatedMinutes: 15, content: "Strategies for responding to kritik arguments." },
          { id: "l48-03", title: "Double Turn Avoidance", order: 3, estimatedMinutes: 12, content: "Avoid the catastrophic double turn mistake." },
          { id: "l48-04", title: "Performance Debate", order: 4, estimatedMinutes: 15, content: "Alternative debate styles using performance." },
          { id: "l48-05", title: "Practice Debate 1: Fact-Based Resolution", order: 5, estimatedMinutes: 20, content: "Apply skills to a fact-based practice debate." },
          { id: "l48-06", title: "Narrative and Storytelling in Debate", order: 6, estimatedMinutes: 12, content: "Use narrative structure to enhance arguments." },
          { id: "l48-07", title: "Review: Critical Debate", order: 7, estimatedMinutes: 5, content: "Review turns and critical theory." },
        ],
      },
    ],
  },
  {
    id: "unit-49",
    title: "Practice Debates",
    description: "Apply all skills in practice debates",
    tier: "MASTER",
    order: 49,
    sections: [
      {
        id: "s49-01",
        title: "Practice Debates",
        order: 1,
        lessons: [
          { id: "l49-01", title: "Practice Debate 2: Value-Based Resolution", order: 1, estimatedMinutes: 20, content: "Apply skills to a value-based practice debate." },
          { id: "l49-02", title: "Peer Review and Critique", order: 2, estimatedMinutes: 12, content: "Give and receive constructive debate feedback." },
          { id: "l49-03", title: "Practice Debate 3: Policy Resolution", order: 3, estimatedMinutes: 20, content: "Apply skills to a policy-based practice debate." },
          { id: "l49-04", title: "Self-Evaluation", order: 4, estimatedMinutes: 10, content: "Assess your own performance objectively." },
          { id: "l49-05", title: "Practice Debate 4: Impromptu Topic", order: 5, estimatedMinutes: 20, content: "Test impromptu skills with limited preparation." },
          { id: "l49-06", title: "Analyzing Famous Debates", order: 6, estimatedMinutes: 15, content: "Learn from historic debate examples." },
          { id: "l49-07", title: "Review: Master Section Complete", order: 7, estimatedMinutes: 15, content: "Congratulations! You have completed the entire debate curriculum. Review all master-level skills and continue practicing." },
        ],
      },
    ],
  },
];

// Combined curriculum array
export const CURRICULUM_UNITS: CurriculumUnit[] = [
  ...BEGINNER_UNITS,
  ...INTERMEDIATE_UNITS,
  ...ADVANCED_UNITS,
  ...EXPERT_UNITS,
  ...MASTER_UNITS,
];

// Helper functions
export function getCurriculumUnit(unitId: string): CurriculumUnit | undefined {
  return CURRICULUM_UNITS.find(unit => unit.id === unitId);
}

export function getUnitsByTier(tier: CurriculumTier): CurriculumUnit[] {
  return CURRICULUM_UNITS.filter(unit => unit.tier === tier);
}

export function getAllCurriculumLessons(): Array<{ unitId: string; sectionId: string; lesson: CurriculumLesson }> {
  const lessons: Array<{ unitId: string; sectionId: string; lesson: CurriculumLesson }> = [];
  for (const unit of CURRICULUM_UNITS) {
    for (const section of unit.sections) {
      for (const lesson of section.lessons) {
        lessons.push({ unitId: unit.id, sectionId: section.id, lesson });
      }
    }
  }
  return lessons;
}

export function getTotalLessonCount(): number {
  return getAllCurriculumLessons().length;
}
