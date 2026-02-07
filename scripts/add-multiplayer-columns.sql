-- Add multiplayer (PvP) columns to debates table
-- Run this if db:push didn't create them
ALTER TABLE debates ADD COLUMN IF NOT EXISTS opponent_type text NOT NULL DEFAULT 'ai';
ALTER TABLE debates ADD COLUMN IF NOT EXISTS opponent_user_id varchar;
ALTER TABLE debates ADD COLUMN IF NOT EXISTS aff_user_id varchar;
ALTER TABLE debates ADD COLUMN IF NOT EXISTS neg_user_id varchar;
