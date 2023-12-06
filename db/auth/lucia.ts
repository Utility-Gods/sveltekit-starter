// import { sveltekit } from 'lucia-auth/middleware'
import lucia from 'lucia-auth';
import { sveltekit } from 'lucia-auth/middleware';
import { postgres as postgresAdapter } from '@lucia-auth/adapter-postgresql';

import { queryClient } from '../client.ts';

export const auth = lucia({
	adapter: postgresAdapter(queryClient, {
		user: 'User',
		session: 'Session',
		key: 'Key'
	}),
	env: 'DEV',
	middleware: sveltekit(),
	transformDatabaseUser: (userData) => {
		return {
			userId: userData.id,
			phone: userData.phone,
			name: userData.name
		};
	}
});

export type Auth = typeof auth;
