# Design Guidelines: Debate Education Platform

## Design Approach
**Selected System:** Material Design with custom adaptations for competitive/educational context

**Justification:** This platform balances information density (statistics, educational content, debate history) with focused interaction (live debates). Material Design provides excellent component patterns for data display, progressive disclosure, and clear hierarchy needed for both learning and competitive features.

**Key Principles:**
1. Clarity over decoration - debate content must be immediately readable
2. Progressive skill visualization - make growth tangible and motivating
3. Competitive energy - subtle competitive tension without overwhelming the interface
4. Focus during debates - distraction-free debate environment

---

## Core Design Elements

### A. Typography
- **Primary Font:** Inter (via Google Fonts CDN)
- **Display Font:** Space Grotesk for headings and skill tier badges
- **Hierarchy:**
  - Page titles: text-4xl font-bold (Space Grotesk)
  - Section headings: text-2xl font-semibold (Inter)
  - Card titles: text-lg font-semibold
  - Body text: text-base font-normal, leading-relaxed
  - Debate arguments: text-lg leading-loose for readability
  - Labels/metadata: text-sm text-gray-600

### B. Layout System
**Spacing Primitives:** Use Tailwind units of 3, 4, 6, 8, 12, 16
- Component padding: p-6 standard, p-8 for cards
- Section spacing: mb-8 or mb-12
- Grid gaps: gap-6 for cards, gap-4 for lists
- Container margins: mx-auto max-w-7xl px-6

**Page Layouts:**
- Dashboard/Profile: Single column with max-w-6xl, cards in 2-3 column grid where appropriate
- Debate Interface: Full-width centered debate area (max-w-4xl) with sidebars for timer/info
- Educational Content: Article-style max-w-3xl for reading comfort

### C. Component Library

**Navigation:**
- Top navbar with logo, main sections (Learn, Practice, Profile, History), skill tier badge
- Active state: subtle underline with accent treatment
- Mobile: hamburger menu with drawer

**Skill Progression Display:**
- Large circular progress indicator showing current tier with radial fill
- Point counter with animated increment on gains
- Tier badges: Sharp geometric shapes with gradient fills (different per tier)
- Progress bar showing position within current tier
- Small tier indicator icons: Beginner (circle), Intermediate (hexagon), Advanced (star), Master (crown)

**AI Opponent Cards:**
- Grid layout (3 columns desktop, 2 tablet, 1 mobile)
- Each card shows: opponent avatar placeholder, skill range, difficulty indicator
- Hover state: subtle lift (shadow-md to shadow-lg)
- Selection state: border treatment

**Debate Interface:**
- Split-screen conversation view
- User arguments: right-aligned with distinct background treatment
- AI arguments: left-aligned 
- Timestamp and turn indicator for each exchange
- Fixed bottom input area with character counter
- Timer component: top-center, prominent but not distracting
- Format rules: collapsible sidebar (desktop) or modal (mobile)

**Educational Content Cards:**
- Category-based organization with icon headers
- Expandable accordion sections for techniques
- Code-block style formatting for debate structure examples
- Checklist styling for key points

**Debate History Table:**
- Sortable columns: Date, Opponent, Format, Topic, Result, Points Change
- Status badges for Win/Loss with subtle background tints
- Points change: green (+) or red (-) with directional arrows
- Expandable rows to view full debate transcript

**Topic Selection:**
- Categorized cards with topic preview
- Format filter chips at top
- Search functionality
- Difficulty indicator per topic

**Post-Debate Analysis:**
- Score breakdown with horizontal bar charts
- Feedback sections with expandable details
- Highlighted strengths/weaknesses with icon indicators
- Points awarded summary with celebratory micro-interaction on gain

**Profile Dashboard:**
- Hero section with large skill tier display, total points, current rank
- 2-column stats grid (Total Debates, Win Rate, Average Points per Debate, Current Streak)
- Recent activity timeline
- Performance chart (Recharts line graph showing points over time)

### D. Animations
**Minimal, Purpose-Driven:**
- Skill point counter: smooth number increment animation (1-2s)
- Tier advancement: brief celebratory modal with confetti effect
- Card hovers: subtle 2px lift with shadow transition (200ms)
- Debate message appearance: gentle fade-in from side (150ms)
- No scroll-triggered animations
- No continuous/looping animations

---

## Images
**Hero Section (Landing/Home):**
- Full-width hero image showing diverse people in formal debate setting
- Overlay: semi-transparent dark gradient (bottom to top)
- CTA buttons on hero: blur backdrop (backdrop-blur-md bg-white/10)

**AI Opponent Avatars:**
- Placeholder geometric patterns or abstract illustrations per opponent
- Consistent style across all opponents within same tier
- Use placeholder images from UI Avatars or similar service

**Educational Content:**
- Diagram illustrations for debate structures (flow charts, argument mapping)
- Icon illustrations for technique categories
- No decorative imagery in learning sections

**Empty States:**
- Friendly illustration when no debate history exists
- Encouraging visual when starting first debate