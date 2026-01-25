// Re-export types and all unit lessons
export * from "./types";
export { UNIT_01_LESSONS } from "./unit01";
export { UNIT_02_LESSONS } from "./unit02";
export { UNIT_03_LESSONS } from "./unit03";
export { UNIT_04_LESSONS } from "./unit04";
export { UNIT_05_LESSONS } from "./unit05";

import { MultiPageLesson } from "./types";
import { UNIT_01_LESSONS } from "./unit01";
import { UNIT_02_LESSONS } from "./unit02";
import { UNIT_03_LESSONS } from "./unit03";
import { UNIT_04_LESSONS } from "./unit04";
import { UNIT_05_LESSONS } from "./unit05";

// Combined lessons for Units 1-5 (35 lessons total)
export const ALL_MULTI_PAGE_LESSONS: MultiPageLesson[] = [
  ...UNIT_01_LESSONS,
  ...UNIT_02_LESSONS,
  ...UNIT_03_LESSONS,
  ...UNIT_04_LESSONS,
  ...UNIT_05_LESSONS,
];
