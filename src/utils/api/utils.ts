import { BaseQueryFn, FetchArgs, FetchBaseQueryError, fetchBaseQuery } from '@reduxjs/toolkit/query';
import { Mutex } from 'async-mutex';

import { logout, setCredentials } from './authSlice';
import { SERVER_URL } from './consts';

const getApiRequestUrl = (endpoint: string) => `${SERVER_URL}/api${endpoint}`;
export const baseQuery = (url: string) =>
	fetchBaseQuery({
		baseUrl: getApiRequestUrl(url),
		credentials: 'include',
	});

// https://github.com/DirtyHairy/async-mutex
const mutex = new Mutex();
export const baseQueryWithReauth =
	(url: string): BaseQueryFn<string | FetchArgs, unknown, FetchBaseQueryError> =>
	async (args, api, extraOptions) => {
		// wait until the mutex is available without locking it
		await mutex.waitForUnlock();

		let result = await baseQuery(url)(args, api, extraOptions);

		if (result.error && result.error.status === 401) {
			// checking whether the mutex is locked
			if (!mutex.isLocked()) {
				const release = await mutex.acquire();
				try {
					// try to get a new token
					const refreshResult = await baseQuery('/auth')('/refresh-token', api, extraOptions);
					if (refreshResult.data) {
						api.dispatch(setCredentials({ userId: (refreshResult.data as { id: string }).id }));

						// retry the initial query
						result = await baseQuery(url)(args, api, extraOptions);
					} else {
						api.dispatch(logout());
					}
				} finally {
					// release must be called once the mutex should be released again.
					release();
				}
			} else {
				// wait until the mutex is available without locking it
				await mutex.waitForUnlock();

				result = await baseQuery(url)(args, api, extraOptions);
			}
		}

		return result;
	};
