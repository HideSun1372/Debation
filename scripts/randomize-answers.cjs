const fs = require('fs');
const path = require('path');

// Seeded random for reproducibility
function seededRandom(seed) {
  let x = Math.sin(seed++) * 10000;
  return x - Math.floor(x);
}

// Fisher-Yates shuffle with seed
function shuffleArray(array, seed) {
  const arr = [...array];
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(seededRandom(seed + i) * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}

// Process a single unit file
function processUnitFile(filePath) {
  let content = fs.readFileSync(filePath, 'utf8');
  
  // Find all question blocks with options
  const questionRegex = /(\{[\s\S]*?type:\s*["']question["'][\s\S]*?options:\s*\[)([\s\S]*?)(\][\s\S]*?correctAnswer:\s*["'])([a-d])(["'][\s\S]*?explanation:)/g;
  
  let questionIndex = 0;
  let changes = 0;
  
  content = content.replace(questionRegex, (match, before, optionsContent, afterOptions, correctAnswer, afterCorrect) => {
    questionIndex++;
    
    // Parse options
    const optionMatches = optionsContent.matchAll(/\{\s*id:\s*["']([a-d])["'],\s*text:\s*["']([^"']*(?:\\.[^"']*)*)["']\s*\}/g);
    const options = [];
    for (const m of optionMatches) {
      options.push({ id: m[1], text: m[2] });
    }
    
    if (options.length !== 4) {
      console.log(`  Skipping question ${questionIndex}: found ${options.length} options`);
      return match;
    }
    
    // Find the correct option
    const correctOption = options.find(o => o.id === correctAnswer);
    if (!correctOption) {
      console.log(`  Skipping question ${questionIndex}: correct answer not found`);
      return match;
    }
    const correctText = correctOption.text;
    
    // Shuffle using question index as part of seed
    const seed = questionIndex * 7 + filePath.charCodeAt(filePath.length - 5) * 13;
    const shuffledTexts = shuffleArray(options.map(o => o.text), seed);
    
    // Build new options
    const newOptions = ['a', 'b', 'c', 'd'].map((id, i) => ({
      id,
      text: shuffledTexts[i]
    }));
    
    // Find new correct answer
    const newCorrectAnswer = newOptions.find(o => o.text === correctText).id;
    
    if (newCorrectAnswer !== correctAnswer) {
      changes++;
    }
    
    // Rebuild options string
    const newOptionsStr = newOptions.map(o => 
      `\n          { id: "${o.id}", text: "${o.text}" }`
    ).join(',');
    
    return `${before}${newOptionsStr}\n        ${afterOptions}${newCorrectAnswer}${afterCorrect}`;
  });
  
  fs.writeFileSync(filePath, content);
  console.log(`  Changed ${changes} answers in ${path.basename(filePath)}`);
  return changes;
}

// Process units 6-10 (lessons 36-70)
const unitsDir = path.join(__dirname, '..', 'shared', 'lessons');
const unitsToProcess = ['unit06.ts', 'unit07.ts', 'unit08.ts', 'unit09.ts', 'unit10.ts'];

console.log('Randomizing answer positions in lessons 36-70...\n');

let totalChanges = 0;
for (const unit of unitsToProcess) {
  const filePath = path.join(unitsDir, unit);
  if (fs.existsSync(filePath)) {
    console.log(`Processing ${unit}...`);
    totalChanges += processUnitFile(filePath);
  } else {
    console.log(`File not found: ${unit}`);
  }
}

console.log(`\nTotal answer positions changed: ${totalChanges}`);
