import 'dotenv/config';
import { drizzle, PostgresJsDatabase } from 'drizzle-orm/postgres-js';
import postgres from 'postgres';

import * as schema from './schema';

// for query purposes
export const queryClient = postgres(process.env.DB_URL!);

export const db: PostgresJsDatabase<typeof schema> = drizzle(queryClient, {
	schema
});
