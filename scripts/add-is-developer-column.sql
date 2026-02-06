-- Add is_developer column to users table (run this if db:push didn't run or timed out)
ALTER TABLE users ADD COLUMN IF NOT EXISTS is_developer boolean NOT NULL DEFAULT false;
