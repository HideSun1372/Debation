# Debation - Debate Education Platform

## Overview

Debation is an educational debate platform where users practice debating against AI opponents of varying skill levels. The platform features a skill progression system (Beginner → Intermediate → Advanced → Master), six major debate formats with authentic speech structures, and educational content about debate techniques. Users can track their progress, review debate history, and learn debate fundamentals through 365 structured lessons.

### Debate Formats (with structured speech order)
- **Lincoln-Douglas (LD)**: 1v1 value debate with AC, CX, NC, CX, 1AR, NR, 2AR speeches
- **Public Forum (PF)**: 2v2 accessible format with constructives, rebuttals, crossfire, summary, final focus
- **Policy**: 2v2 evidence-intensive with 8 constructive/rebuttal speeches
- **Parliamentary**: British-style with POI support, PM/LO/MG/MO/LOR/PMR speeches
- **World Schools**: International format with 8 speeches including reply speeches
- **Congressional**: Legislative simulation with authorship speech, questioning, and pro/con speeches

### Cross-Examination (CX) System
- **Turn-based questioning**: AI asks one question at a time, waits for user response, then asks follow-up
- **Role assignment**: Questioner is determined by speech.speaker field (aff/neg maps to pro/con side)
- **State management**: isCxMode, cxQuestioner (user/opponent), cxAwaitingResponse, cxStarted, cxExchangeCount
- **Timer behavior**: Countdown runs during CX regardless of who is asking questions
- **CX intents**: Backend uses cx-question, cx-answer, cx-followup, cx-timeout prompts for single-turn responses
- **End CX**: User can manually end CX to advance to next speech

### Voice Debate Mode
- **Voice-first design**: Speak and your argument automatically sends when you pause (no manual Enter/send button needed)
- **Silence detection**: Speech recognition auto-detects 1.5s of silence and triggers submission via onSpeechEnd callback
- **Voice state machine**: States are "idle" | "listening" | "sending" | "opponent_speaking" for clear UI feedback
- **No typing simulation**: In voice mode, opponent's text appears all at once only AFTER TTS audio finishes playing
- **Flow sheet emphasis**: Flow sheet auto-expands in voice mode with larger width (w-96) and "Voice Mode" badge
- **Hybrid TTS**: OpenAI gpt-audio-mini for AI text-to-speech via /api/tts endpoint
- **Auto-start listening**: When it's user's turn, listening starts automatically
- **Visual indicators**: "Listening...", "Sending your argument...", "Opponent is speaking..." states with animations

### Curriculum Structure
- 365 lessons across 52 units organized into 5 skill-based sections
- Sections: Fundamentals (Beginner), Core Skills (Beginner-Intermediate), Format Mastery (Intermediate), Advanced Techniques (Advanced), Championship Preparation (Master)
- Lesson content files in `shared/lessons/` with multi-page structure (6-10 pages per lesson)

### Onboarding Assessment System
- **15 questions** with progressive difficulty: beginner (q1-7), intermediate (q8-10), advanced (q11-13), master (q14-15)
- Last question is championship-level (kritik theory)
- Placement logic maps score percentages to starting units based on experience level
- Experience levels: "none" (never debated), "casual" (friendly debates), "some" (club/school experience), "competitive" (tournament experience)

### Learn Page (Curriculum Navigation)
- **Tabbed interface** with BEGINNER, INTERMEDIATE, ADVANCED, EXPERT, MASTER sections
- Each tab shows units and lessons for that skill tier
- **Visibility rules**: Locked lessons show "Locked Lesson" instead of actual titles
- **Question feedback**: Incorrect answers don't reveal correct answer (encourages retry)

### XP and Level Progression System
- **Learn XP**: Earned by completing lessons (stored in learnXp field)
- **Learn Level**: Calculated from total XP with increasing thresholds (Level 1: 0, Level 2: 100, Level 3: 250, etc.)
- **XP Calculation**: Base 50 XP per lesson + accuracy bonus (up to 50 XP for 100%) + time bonus (up to 25 XP for fast completion)
- **Lesson Completion Summary**: Shows time spent, accuracy %, XP earned, and level progress before advancing to next lesson
- **Question Tracking**: First attempt per question counts for accuracy (retries don't inflate stats)

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
- **Framework**: React with TypeScript, using Vite as the build tool
- **Routing**: Wouter for lightweight client-side routing
- **State Management**: TanStack React Query for server state, React Context for user state (skill points, debate history stored in localStorage)
- **UI Components**: shadcn/ui component library built on Radix UI primitives
- **Styling**: Tailwind CSS with custom CSS variables for theming (light/dark mode support)
- **Design System**: Material Design-inspired with custom adaptations for competitive/educational context, using Inter font for body text and Space Grotesk for headings

### Backend Architecture
- **Runtime**: Node.js with Express
- **Language**: TypeScript with tsx for development
- **API Pattern**: RESTful JSON APIs under `/api/*` prefix
- **AI Integration**: OpenAI SDK connected through Replit AI Integrations (environment variables `AI_INTEGRATIONS_OPENAI_API_KEY` and `AI_INTEGRATIONS_OPENAI_BASE_URL`)

### Data Storage
- **Database**: PostgreSQL with Drizzle ORM
- **Schema Location**: `shared/schema.ts` contains all table definitions and type exports
- **Migrations**: Managed via `drizzle-kit push` command
- **Fallback**: In-memory storage implementation in `server/storage.ts` for development

### Key Data Models
- **Users**: Track skill points, total debates, wins/losses
- **Debates**: Store debate sessions with topic, format, opponent, user side, and results
- **Debate Messages**: Individual turns within a debate
- **Skill Tiers**: Four progression levels with point thresholds (0-999, 1000-1999, 2000-2999, 3000+)
- **AI Opponents**: 40 pre-defined opponents (10 per skill tier) with unique personalities

### Build & Deployment
- **Development**: `npm run dev` runs tsx with hot reload
- **Production Build**: Custom build script using esbuild for server bundling and Vite for client
- **Static Serving**: Production serves built client from `dist/public`

## External Dependencies

### AI Services
- **OpenAI API**: Used for AI debate opponent responses, accessed through Replit AI Integrations with custom base URL configuration

### Database
- **PostgreSQL**: Primary database, connection via `DATABASE_URL` environment variable
- **Drizzle ORM**: Type-safe database queries and schema management

### Third-Party Libraries
- **Recharts**: Data visualization for skill progression charts on profile page
- **date-fns**: Date formatting utilities
- **zod**: Runtime validation for API inputs and schema definitions
- **express-session**: Session management (configured for PostgreSQL storage via connect-pg-simple)

### CDN Resources
- **Google Fonts**: Inter, Space Grotesk, DM Sans, Fira Code, Geist Mono fonts loaded via CDN