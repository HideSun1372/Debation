-- Create debate_requests table
CREATE TABLE IF NOT EXISTS debate_requests (
  id varchar PRIMARY KEY DEFAULT gen_random_uuid(),
  from_user_id varchar NOT NULL,
  to_user_id varchar NOT NULL,
  topic_id text NOT NULL,
  format_id text NOT NULL,
  challenger_side text NOT NULL,
  status text NOT NULL DEFAULT 'pending',
  debate_id varchar,
  created_at timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP
);
