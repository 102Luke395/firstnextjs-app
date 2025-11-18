import { pgTable, serial, text, timestamp, boolean } from "drizzle-orm/pg-core";

export const activities = pgTable('activities',{
    id: serial('id').primaryKey(),
    requestor: text('requestor').notNull(),
    activity: text('activity').notNull(),
    createdAt: timestamp('createdAt').defaultNow().notNull(),
    status: boolean('status').default(false),
});