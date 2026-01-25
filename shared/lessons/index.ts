// Re-export types and all unit lessons
export * from "./types";
export { UNIT_01_LESSONS } from "./unit01";
export { UNIT_02_LESSONS } from "./unit02";
export { UNIT_03_LESSONS } from "./unit03";
export { UNIT_04_LESSONS } from "./unit04";
export { UNIT_05_LESSONS } from "./unit05";
export { UNIT_06_LESSONS } from "./unit06";
export { UNIT_07_LESSONS } from "./unit07";
export { UNIT_08_LESSONS } from "./unit08";
export { UNIT_09_LESSONS } from "./unit09";
export { UNIT_10_LESSONS } from "./unit10";

import { MultiPageLesson } from "./types";
import { UNIT_01_LESSONS } from "./unit01";
import { UNIT_02_LESSONS } from "./unit02";
import { UNIT_03_LESSONS } from "./unit03";
import { UNIT_04_LESSONS } from "./unit04";
import { UNIT_05_LESSONS } from "./unit05";
import { UNIT_06_LESSONS } from "./unit06";
import { UNIT_07_LESSONS } from "./unit07";
import { UNIT_08_LESSONS } from "./unit08";
import { UNIT_09_LESSONS } from "./unit09";
import { UNIT_10_LESSONS } from "./unit10";

// Combined lessons for Units 1-10 (70 lessons total - complete Beginner section)
export const ALL_MULTI_PAGE_LESSONS: MultiPageLesson[] = [
  ...UNIT_01_LESSONS,
  ...UNIT_02_LESSONS,
  ...UNIT_03_LESSONS,
  ...UNIT_04_LESSONS,
  ...UNIT_05_LESSONS,
  ...UNIT_06_LESSONS,
  ...UNIT_07_LESSONS,
  ...UNIT_08_LESSONS,
  ...UNIT_09_LESSONS,
  ...UNIT_10_LESSONS,
];
