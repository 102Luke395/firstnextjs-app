CREATE TABLE "activities" (
	"id" serial PRIMARY KEY NOT NULL,
	"requestor" text NOT NULL,
	"activity" text NOT NULL,
	"createdAt" timestamp DEFAULT now() NOT NULL,
	"status" boolean DEFAULT false
);
