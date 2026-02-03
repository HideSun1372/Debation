import { GoogleGenerativeAI } from "@google/generative-ai";
import type { PracticeType, DifficultyLevel } from "@shared/lessons/types";

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY || "");
// Base model, specific instances with system instructions will be created as needed
const model = genAI.getGenerativeModel({ model: "gemini-2.5-flash-preview-09-2025" });

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
  const modelWithSystem = genAI.getGenerativeModel({
    model: "gemini-2.5-flash-preview-09-2025",
    systemInstruction: `You are a debate coach generating practice prompts. Generate a simple claim related to the topic that students can practice building arguments for. Difficulty: ${difficulty}. Just output the claim, nothing else.`
  });

  const result = await modelWithSystem.generateContent(`Topic: ${topic}. Generate a claim a student should argue for.`);
  return result.response.text();
}

async function generateArgumentToRefute(
  difficulty: DifficultyLevel,
  topic: string,
  targetSkill: string
): Promise<string> {
  const complexityGuide = ARGUMENT_COMPLEXITY[difficulty];

  const modelWithSystem = genAI.getGenerativeModel({
    model: "gemini-2.5-flash-preview-09-2025",
    systemInstruction: `You are a debate opponent presenting an argument that a student needs to refute. 
${complexityGuide}

Present an argument on the given topic. The student is practicing: ${targetSkill}.
Output only the argument itself (2-4 sentences), as if you're speaking in a debate round.`
  });

  const result = await modelWithSystem.generateContent(`Topic: ${topic}. Present your argument.`);
  return result.response.text();
}

async function generateClaimToClassify(difficulty: DifficultyLevel): Promise<string> {
  const modelWithSystem = genAI.getGenerativeModel({
    model: "gemini-2.5-flash-preview-09-2025",
    systemInstruction: `You are a debate coach. Generate a claim for a student to classify as Fact, Value, or Policy.
    Difficulty: ${difficulty}.
    Output only the claim text.`
  });

  const result = await modelWithSystem.generateContent(`Generate a claim.`);
  return result.response.text();
}

async function generateEvidenceChallenge(
  difficulty: DifficultyLevel,
  topic: string
): Promise<string> {
  const modelWithSystem = genAI.getGenerativeModel({
    model: "gemini-2.5-flash-preview-09-2025",
    systemInstruction: `You are a debate opponent challenging the student's evidence. Generate a challenging question about evidence quality, relevance, or interpretation. Difficulty: ${difficulty}. Output only the challenge question.`
  });

  const result = await modelWithSystem.generateContent(`Topic: ${topic}. Challenge the student's evidence.`);
  return result.response.text();
}

async function generateFallaciousArgument(difficulty: DifficultyLevel): Promise<string> {
  const modelWithSystem = genAI.getGenerativeModel({
    model: "gemini-2.5-flash-preview-09-2025",
    systemInstruction: `You are a debate coach. Generate a fallacious argument.
    Difficulty: ${difficulty}.
    Output only the argument text. Do not reveal the fallacy type.`
  });

  const result = await modelWithSystem.generateContent(`Generate a fallacious argument.`);
  return result.response.text();
}

async function generateClaimForWarrant(difficulty: DifficultyLevel, topic: string): Promise<string> {
  const modelWithSystem = genAI.getGenerativeModel({
    model: "gemini-2.5-flash-preview-09-2025",
    systemInstruction: `You are a debate coach. Generate a claim and a piece of evidence. The student needs to provide the warrant (the reasoning that connects evidence to claim). Difficulty: ${difficulty}.

Format your response as:
CLAIM: [the claim]
EVIDENCE: [a piece of evidence]

Keep it concise.`
  });

  const result = await modelWithSystem.generateContent(`Topic: ${topic}`);
  return result.response.text();
}

export async function evaluatePracticeResponse(
  request: EvaluateResponseRequest
): Promise<PracticeFeedback> {
  const { practiceType, difficulty, aiPrompt, userResponse, targetSkill, successCriteria } = request;

  const evaluationPrompt = buildEvaluationPrompt(practiceType, difficulty, aiPrompt, targetSkill, successCriteria);

  const modelWithSystem = genAI.getGenerativeModel({
    model: "gemini-2.5-flash-preview-09-2025",
    systemInstruction: evaluationPrompt,
    generationConfig: { responseMimeType: "application/json" }
  });

  const result = await modelWithSystem.generateContent(`Student response: "${userResponse}"`);

  try {
    const resultText = result.response.text();
    const resultJson = JSON.parse(resultText);
    return {
      score: Math.min(100, Math.max(0, resultJson.score || 50)),
      strengths: resultJson.strengths || [],
      improvements: resultJson.improvements || [],
      exampleResponse: resultJson.exampleResponse,
      encouragement: resultJson.encouragement || "Keep practicing!",
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

export async function generatePracticeHint(
  practiceType: PracticeType,
  difficulty: DifficultyLevel,
  context: any // The prompt itself
): Promise<string> {
  const modelWithSystem = genAI.getGenerativeModel({
    model: "gemini-2.5-flash-preview-09-2025",
    systemInstruction: `You are a helpful debate tutor. Provide a hint for the student's current practice task. 
    Do NOT give the answer. 
    Instead, guide them toward the right thinking process or structure. 
    Keep it brief (1-2 sentences).
    
    Practice Type: ${practiceType}
    Difficulty: ${difficulty}`,
  });

  const result = await modelWithSystem.generateContent(`Current Task Context: ${JSON.stringify(context)}. Give me a hint.`);
  return result.response.text();
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
