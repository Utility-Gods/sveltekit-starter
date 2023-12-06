import { sql } from 'drizzle-orm';
import { pgTable, varchar, integer, timestamp, uuid, text } from 'drizzle-orm/pg-core';

export const Auth = pgTable('Auth', {
	id: uuid('id')
		.primaryKey()
		.default(sql`gen_random_uuid()`),
	created_at: timestamp('created_at').defaultNow(),
	updated_at: timestamp('updated_at').defaultNow(),
	phone: varchar('phone', { length: 15 }).unique(),
	email: varchar('email', { length: 255 }).unique().notNull(),
	name: varchar('name', { length: 255 }).notNull(),
	status: varchar('status', { length: 50 }).default(''),
	last_login: timestamp('last_login').notNull(),
	role: text('role').notNull() // Assuming AUTH_ROLES is a text type in PostgreSQL
});

export const User = pgTable('User', {
	id: uuid('id').primaryKey(),
	name: varchar('name'),
	phone: varchar('phone').unique()
});

export const Session = pgTable('Session', {
	id: uuid('id').primaryKey(),
	user_id: uuid('user_id').references(() => User.id),
	active_expires: integer('active_expires'),
	idle_expires: integer('idle_expires')
});

export type User = typeof User.$inferSelect;
export type Auth = typeof Auth.$inferSelect;
export type Session = typeof Session.$inferSelect;
