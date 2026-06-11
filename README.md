# Debation

Duolingo-style competitive debate training platform. Practice against AI opponents, spar with real users, and build structured debate skills across multiple formats.

**Live:** [debation.vercel.app](https://debation.vercel.app)

## Stack

- **Frontend:** React 18 + TypeScript, Vite, Tailwind CSS, shadcn/ui
- **Backend:** Express.js + TypeScript
- **Database:** Neon Postgres via Drizzle ORM
- **AI:** Google Gemini 1.5 Flash (opponents, feedback, insights)
- **Payments:** Stripe (subscription)
- **Real-time:** WebSockets (PvP matchmaking)
- **Deploy:** Vercel (frontend) · Render (backend)

## Features

- Structured lessons with skill progression and tier system
- AI debate opponents with voice mode (speech recognition + synthesis)
- Real-time PvP matchmaking
- Formats: Lincoln-Douglas, Public Forum, Policy, Parliamentary, World Schools, Congressional
- Personalized AI feedback and insights
- User profiles, debate history, leaderboard

## Getting Started

### Prerequisites

- Node.js 20+
- A [Neon](https://neon.tech) Postgres database
- Google Gemini API key
- Stripe API keys (optional, for payments)

### Setup

1. Clone the repo and install dependencies:
   ```bash
   npm install
   ```

2. Create a `.env` file at the root:
   ```env
   DATABASE_URL=your_neon_connection_string
   GEMINI_API_KEY=your_gemini_api_key
   SESSION_SECRET=your_session_secret
   STRIPE_SECRET_KEY=your_stripe_secret        # optional
   VITE_STRIPE_PUBLIC_KEY=your_stripe_pubkey   # optional
   ```

3. Push the database schema:
   ```bash
   npm run db:push
   ```

4. Start the development server:
   ```bash
   npm run dev
   ```

   The app runs at `http://localhost:5000`.

## Scripts

| Command | Description |
|---|---|
| `npm run dev` | Start dev server with hot reload |
| `npm run build` | Build for production |
| `npm start` | Run the production build |
| `npm run check` | TypeScript type check |
| `npm run db:push` | Push Drizzle schema to the database |
