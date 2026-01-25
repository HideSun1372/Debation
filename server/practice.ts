import OpenAI from "openai";
import type { PracticeType, DifficultyLevel } from "@shared/lessons/types";

const openai = new OpenAI({
  apiKey: process.env.AI_INTEGRATIONS_OPENAI_API_KEY,
  baseURL: process.env.AI_INTEGRATIONS_OPENAI_BASE_URL,
});

interface PracticePrompt {
  argument?: string;
  claim?: string;
  fallacyType?: string;
}

interface GeneratePromptRequest {
  practiceType: PracticeType;
  difficulty: DifficultyLevel;
  topic?: string;
  targetSkill: string;
}

interface EvaluateResponseRequest {
  practiceType: PracticeType;
  difficulty: DifficultyLevel;
  aiPrompt: PracticePrompt;
  userResponse: string;
  targetSkill: string;
  successCriteria: string[];
}

interface PracticeFeedback {
  score: number;
  strengths: string[];
  improvements: string[];
  exampleResponse?: string;
  encouragement: string;
}

const DIFFICULTY_DESCRIPTORS: Record<DifficultyLevel, string> = {
  beginner: "simple, straightforward arguments with clear flaws that are easy to identify",
  intermediate: "moderately complex arguments with subtle weaknesses that require careful analysis",
  advanced: "sophisticated arguments with nuanced flaws that require deep understanding to counter",
  expert: "highly complex, well-constructed arguments that challenge even experienced debaters",
};

const ARGUMENT_COMPLEXITY: Record<DifficultyLevel, string> = {
  beginner: "Use simple vocabulary and basic logic. Include obvious logical gaps.",
  intermediate: "Use moderate complexity and some evidence. Include subtle weaknesses.",
  advanced: "Use sophisticated reasoning and multiple pieces of evidence. Flaws should be nuanced.",
  expert: "Use expert-level argumentation with strong evidence. Make it genuinely challenging.",
};

export async function generatePracticePrompt(
  request: GeneratePromptRequest
): Promise<PracticePrompt> {
  const { practiceType, difficulty, topic, targetSkill } = request;
  const difficultyDesc = DIFFICULTY_DESCRIPTORS[difficulty];
  const complexityGuide = ARGUMENT_COMPLEXITY[difficulty];

  const debateTopic = topic || "Social media does more harm than good";

  switch (practiceType) {
    case "argument-builder":
      return {
        claim: await generateClaim(difficulty, debateTopic),
      };

    case "refutation":
      return {
        argument: await generateArgumentToRefute(difficulty, debateTopic, targetSkill),
      };

    case "claim-classifier":
      return {
        claim: await generateClaimToClassify(difficulty),
      };

    case "evidence-defense":
      return {
        argument: await generateEvidenceChallenge(difficulty, debateTopic),
      };

    case "fallacy-spotter":
      return {
        argument: await generateFallaciousArgument(difficulty),
        fallacyType: "hidden",
      };

    case "warrant-builder":
      return {
        claim: await generateClaimForWarrant(difficulty, debateTopic),
      };

    default:
      return { argument: "Practice type not implemented" };
  }
}

async function generateClaim(difficulty: DifficultyLevel, topic: string): Promise<string> {
  const response = await openai.chat.completions.create({
    model: "gpt-4o-mini",
    messages: [
      {
        role: "system",
        content: `You are a debate coach generating practice prompts. Generate a simple claim related to the topic that students can practice building arguments for. Difficulty: ${difficulty}. Just output the claim, nothing else.`,
      },
      {
        role: "user",
        content: `Topic: ${topic}. Generate a claim a student should argue for.`,
      },
    ],
    max_completion_tokens: 100,
  });
  return response.choices[0]?.message?.content || "Social media increases political polarization.";
}

async function generateArgumentToRefute(
  difficulty: DifficultyLevel,
  topic: string,
  targetSkill: string
): Promise<string> {
  const complexityGuide = ARGUMENT_COMPLEXITY[difficulty];
  
  const response = await openai.chat.completions.create({
    model: "gpt-4o-mini",
    messages: [
      {
        role: "system",
        content: `You are a debate opponent presenting an argument that a student needs to refute. 
${complexityGuide}

Present an argument on the given topic. The student is practicing: ${targetSkill}.
Output only the argument itself (2-4 sentences), as if you're speaking in a debate round.`,
      },
      {
        role: "user",
        content: `Topic: ${topic}. Present your argument.`,
      },
    ],
    max_completion_tokens: 200,
  });
  return response.choices[0]?.message?.content || "I believe social media has connected people globally in unprecedented ways, fostering community and enabling positive social movements.";
}

async function generateClaimToClassify(difficulty: DifficultyLevel): Promise<string> {
  const claims: Record<DifficultyLevel, string[]> = {
    beginner: [
      "The death penalty should be abolished.",
      "Climate change is caused by human activity.",
      "Education is more important than experience.",
      "Voting should be mandatory for all citizens.",
      "Recycling reduces environmental damage.",
    ],
    intermediate: [
      "Universal basic income would reduce poverty more effectively than current welfare systems.",
      "Social media platforms bear responsibility for the spread of misinformation.",
      "The benefits of space exploration outweigh its costs.",
      "Remote work improves employee productivity.",
      "Artificial intelligence will create more jobs than it eliminates.",
    ],
    advanced: [
      "Democratic institutions are more conducive to long-term economic growth than authoritarian systems.",
      "The concept of intellectual property fundamentally conflicts with the free flow of information.",
      "Carbon taxation represents the most efficient mechanism for addressing climate change.",
      "Technological determinism inadequately explains social change.",
      "Restorative justice better serves victims than retributive punishment.",
    ],
    expert: [
      "The precautionary principle should take precedence over economic considerations in environmental policy.",
      "Epistemic autonomy is a prerequisite for meaningful democratic participation.",
      "Market mechanisms cannot adequately address intergenerational justice concerns.",
      "The distinction between positive and negative rights is morally arbitrary.",
      "Collective action problems in international relations are fundamentally unsolvable without supranational authority.",
    ],
  };

  const claimList = claims[difficulty];
  return claimList[Math.floor(Math.random() * claimList.length)];
}

async function generateEvidenceChallenge(
  difficulty: DifficultyLevel,
  topic: string
): Promise<string> {
  const response = await openai.chat.completions.create({
    model: "gpt-4o-mini",
    messages: [
      {
        role: "system",
        content: `You are a debate opponent challenging the student's evidence. Generate a challenging question about evidence quality, relevance, or interpretation. Difficulty: ${difficulty}. Output only the challenge question.`,
      },
      {
        role: "user",
        content: `Topic: ${topic}. Challenge the student's evidence.`,
      },
    ],
    max_completion_tokens: 100,
  });
  return response.choices[0]?.message?.content || "How do you know your source is credible, and isn't that study outdated?";
}

async function generateFallaciousArgument(difficulty: DifficultyLevel): Promise<string> {
  const fallacies: Record<DifficultyLevel, Array<{ fallacy: string; argument: string }>> = {
    beginner: [
      { fallacy: "ad hominem", argument: "You can't trust John's opinion on climate change because he's not a scientist." },
      { fallacy: "strawman", argument: "People who support gun control want to take away all guns from everyone." },
      { fallacy: "false dichotomy", argument: "You're either with us or against us. There's no middle ground." },
      { fallacy: "appeal to authority", argument: "This celebrity endorses this diet, so it must be healthy." },
      { fallacy: "slippery slope", argument: "If we allow students to use phones in class, soon they'll be gaming all day and failing every class." },
    ],
    intermediate: [
      { fallacy: "hasty generalization", argument: "I met two rude people from that city, so everyone there must be rude." },
      { fallacy: "circular reasoning", argument: "This news source is reliable because they always report the truth, and we know they report the truth because they're reliable." },
      { fallacy: "red herring", argument: "Why worry about student debt when there are homeless people on the streets?" },
      { fallacy: "appeal to emotion", argument: "Think of the children! We must ban this video game immediately." },
      { fallacy: "bandwagon", argument: "Everyone is investing in crypto, so it must be a good investment." },
    ],
    advanced: [
      { fallacy: "equivocation", argument: "The law says all men are equal, so a doctor and a criminal should be treated the same." },
      { fallacy: "appeal to nature", argument: "Organic food is natural, so it must be healthier than processed food." },
      { fallacy: "post hoc", argument: "Crime decreased after we installed cameras, proving cameras prevent crime." },
      { fallacy: "false cause", argument: "Countries with more Nobel Prize winners also have higher chocolate consumption, so chocolate must boost intelligence." },
      { fallacy: "loaded question", argument: "When did you stop cheating on your tests?" },
    ],
    expert: [
      { fallacy: "motte-and-bailey", argument: "Of course free speech is important (motte), so we shouldn't criticize anyone's views (bailey)." },
      { fallacy: "kettle logic", argument: "I never borrowed your book, and besides, it was already damaged when I got it, and I returned it in perfect condition." },
      { fallacy: "nirvana fallacy", argument: "This policy won't eliminate all poverty, so we shouldn't implement it at all." },
      { fallacy: "moral licensing", argument: "I recycled yesterday, so it's fine if I drive my gas-guzzler today." },
      { fallacy: "texas sharpshooter", argument: "Looking at our results, we succeeded in areas X, Y, and Z - exactly what we were trying to achieve (after seeing results)." },
    ],
  };

  const fallacyList = fallacies[difficulty];
  const selected = fallacyList[Math.floor(Math.random() * fallacyList.length)];
  return selected.argument;
}

async function generateClaimForWarrant(difficulty: DifficultyLevel, topic: string): Promise<string> {
  const response = await openai.chat.completions.create({
    model: "gpt-4o-mini",
    messages: [
      {
        role: "system",
        content: `You are a debate coach. Generate a claim and a piece of evidence. The student needs to provide the warrant (the reasoning that connects evidence to claim). Difficulty: ${difficulty}.

Format your response as:
CLAIM: [the claim]
EVIDENCE: [a piece of evidence]

Keep it concise.`,
      },
      {
        role: "user",
        content: `Topic: ${topic}`,
      },
    ],
    max_completion_tokens: 150,
  });
  return response.choices[0]?.message?.content || "CLAIM: Social media harms mental health.\nEVIDENCE: A 2023 study found teens who use social media 3+ hours daily report 40% higher anxiety levels.";
}

export async function evaluatePracticeResponse(
  request: EvaluateResponseRequest
): Promise<PracticeFeedback> {
  const { practiceType, difficulty, aiPrompt, userResponse, targetSkill, successCriteria } = request;

  const evaluationPrompt = buildEvaluationPrompt(practiceType, difficulty, aiPrompt, targetSkill, successCriteria);

  const response = await openai.chat.completions.create({
    model: "gpt-4o-mini",
    messages: [
      {
        role: "system",
        content: evaluationPrompt,
      },
      {
        role: "user",
        content: `Student response: "${userResponse}"`,
      },
    ],
    max_completion_tokens: 500,
    response_format: { type: "json_object" },
  });

  try {
    const result = JSON.parse(response.choices[0]?.message?.content || "{}");
    return {
      score: Math.min(100, Math.max(0, result.score || 50)),
      strengths: result.strengths || [],
      improvements: result.improvements || [],
      exampleResponse: result.exampleResponse,
      encouragement: result.encouragement || "Keep practicing!",
    };
  } catch {
    return {
      score: 50,
      strengths: ["You attempted the exercise"],
      improvements: ["Try to be more specific in your response"],
      encouragement: "Keep practicing!",
    };
  }
}

function buildEvaluationPrompt(
  practiceType: PracticeType,
  difficulty: DifficultyLevel,
  aiPrompt: PracticePrompt,
  targetSkill: string,
  successCriteria: string[]
): string {
  const criteriaList = successCriteria.map((c) => `- ${c}`).join("\n");

  const basePrompt = `You are a supportive debate coach evaluating a student's practice response.

PRACTICE TYPE: ${practiceType}
SKILL BEING PRACTICED: ${targetSkill}
DIFFICULTY LEVEL: ${difficulty}

THE AI PROMPT GIVEN TO STUDENT:
${JSON.stringify(aiPrompt)}

SUCCESS CRITERIA:
${criteriaList}

Evaluate the student's response and provide feedback. Be encouraging but honest.

You MUST respond with valid JSON in this exact format:
{
  "score": <number 0-100>,
  "strengths": ["strength 1", "strength 2"],
  "improvements": ["area to improve 1", "area to improve 2"],
  "exampleResponse": "A brief example of a strong response",
  "encouragement": "An encouraging message based on their performance"
}

Scoring guide:
- 90-100: Excellent - meets all criteria with sophistication
- 70-89: Good - meets most criteria with minor gaps
- 50-69: Developing - shows understanding but needs work
- Below 50: Needs improvement - missing key elements`;

  switch (practiceType) {
    case "argument-builder":
      return basePrompt + `\n\nFocus on: Does the response have a clear CLAIM, relevant EVIDENCE, and logical REASONING connecting them?`;

    case "refutation":
      return basePrompt + `\n\nFocus on: Does the response follow refutation structure (Signal-State-Support-Summarize)? Does it actually address the opponent's argument?`;

    case "claim-classifier":
      return basePrompt + `\n\nFocus on: Did the student correctly identify the claim type (fact, value, or policy) and explain their reasoning?`;

    case "evidence-defense":
      return basePrompt + `\n\nFocus on: Did the student defend their evidence effectively? Did they address credibility, relevance, and interpretation?`;

    case "fallacy-spotter":
      return basePrompt + `\n\nFocus on: Did the student correctly identify the fallacy type and explain why the reasoning is flawed?`;

    case "warrant-builder":
      return basePrompt + `\n\nFocus on: Does the warrant clearly explain WHY the evidence proves the claim? Is the logical connection explicit?`;

    default:
      return basePrompt;
  }
}
