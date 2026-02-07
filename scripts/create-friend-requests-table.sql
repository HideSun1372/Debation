-- Create friend_requests table (run this if db:push didn't create it)
-- Matches shared/schema.ts friendRequests definition
CREATE TABLE IF NOT EXISTS friend_requests (
  id varchar PRIMARY KEY DEFAULT gen_random_uuid(),
  from_user_id varchar NOT NULL,
  to_user_id varchar NOT NULL,
  status text NOT NULL DEFAULT 'pending',
  created_at timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  CONSTRAINT friend_requests_from_to UNIQUE (from_user_id, to_user_id)
);
