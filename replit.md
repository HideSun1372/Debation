# Debation - Debate Education Platform

## Overview

Debation is an educational debate platform where users practice debating against AI opponents of varying skill levels. The platform features a skill progression system (Beginner → Intermediate → Advanced → Master), multiple debate formats (Lincoln-Douglas, Public Forum, Policy, Parliamentary), and educational content about debate techniques. Users can track their progress, review debate history, and learn debate fundamentals through structured content.

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