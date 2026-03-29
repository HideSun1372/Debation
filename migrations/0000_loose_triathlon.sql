CREATE TABLE "debate_messages" (
	"id" varchar PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"debate_id" varchar NOT NULL,
	"role" text NOT NULL,
	"content" text NOT NULL,
	"turn_number" integer NOT NULL,
	"created_at" timestamp DEFAULT CURRENT_TIMESTAMP NOT NULL
);
--> statement-breakpoint
CREATE TABLE "debate_requests" (
	"id" varchar PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"from_user_id" varchar NOT NULL,
	"to_user_id" varchar NOT NULL,
	"topic_id" text NOT NULL,
	"format_id" text NOT NULL,
	"challenger_side" text NOT NULL,
	"status" text DEFAULT 'pending' NOT NULL,
	"debate_id" varchar,
	"created_at" timestamp DEFAULT CURRENT_TIMESTAMP NOT NULL
);
--> statement-breakpoint
CREATE TABLE "debates" (
	"id" varchar PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"user_id" varchar NOT NULL,
	"opponent_id" text NOT NULL,
	"topic_id" text NOT NULL,
	"format_id" text NOT NULL,
	"user_side" text NOT NULL,
	"status" text DEFAULT 'in_progress' NOT NULL,
	"result" text,
	"points_change" integer,
	"feedback" text,
	"started_at" timestamp DEFAULT CURRENT_TIMESTAMP NOT NULL,
	"completed_at" timestamp,
	"opponent_type" text DEFAULT 'ai' NOT NULL,
	"opponent_user_id" varchar,
	"aff_user_id" varchar,
	"neg_user_id" varchar
);
--> statement-breakpoint
CREATE TABLE "friend_requests" (
	"id" varchar PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"from_user_id" varchar NOT NULL,
	"to_user_id" varchar NOT NULL,
	"status" text DEFAULT 'pending' NOT NULL,
	"created_at" timestamp DEFAULT CURRENT_TIMESTAMP NOT NULL,
	CONSTRAINT "friend_requests_from_to" UNIQUE("from_user_id","to_user_id")
);
--> statement-breakpoint
CREATE TABLE "lesson_progress" (
	"id" varchar PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"user_id" varchar NOT NULL,
	"has_completed_onboarding" boolean DEFAULT false NOT NULL,
	"experience_level" text,
	"assessment_score" integer DEFAULT 0,
	"current_unit_id" text DEFAULT 'unit-1' NOT NULL,
	"current_section_id" text,
	"current_lesson_id" text,
	"completed_lesson_ids" text[] DEFAULT ARRAY[]::text[] NOT NULL,
	"last_visited_at" timestamp,
	"created_at" timestamp DEFAULT now(),
	"updated_at" timestamp DEFAULT now(),
	CONSTRAINT "lesson_progress_user_id_unique" UNIQUE("user_id")
);
--> statement-breakpoint
CREATE TABLE "sessions" (
	"sid" varchar PRIMARY KEY NOT NULL,
	"sess" jsonb NOT NULL,
	"expire" timestamp NOT NULL
);
--> statement-breakpoint
CREATE TABLE "users" (
	"id" varchar PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"username" varchar NOT NULL,
	"password" text NOT NULL,
	"email" varchar,
	"first_name" varchar,
	"last_name" varchar,
	"profile_image_url" varchar,
	"skill_points" integer DEFAULT 500 NOT NULL,
	"total_debates" integer DEFAULT 0 NOT NULL,
	"wins" integer DEFAULT 0 NOT NULL,
	"losses" integer DEFAULT 0 NOT NULL,
	"is_pro" boolean DEFAULT false NOT NULL,
	"pro_type" varchar DEFAULT 'free' NOT NULL,
	"is_developer" boolean DEFAULT false NOT NULL,
	"cached_insights" text,
	"insights_debate_count" integer DEFAULT 0,
	"created_at" timestamp DEFAULT now(),
	"updated_at" timestamp DEFAULT now(),
	CONSTRAINT "users_username_unique" UNIQUE("username"),
	CONSTRAINT "users_email_unique" UNIQUE("email")
);
--> statement-breakpoint
CREATE INDEX "IDX_session_expire" ON "sessions" USING btree ("expire");