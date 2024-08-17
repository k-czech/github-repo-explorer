import React, { createContext, PropsWithChildren, useCallback, useState } from 'react';
import { executeAPI } from '@/services/api';
import { Repos } from '@/types/Repos';

type UsersRepositoriesContextType = {
	repositoriesCache: Record<string, Repos[]>;
	isLoading: boolean;
	getUserRepositories: (username: string) => Promise<Repos[] | undefined>;
};

export const UsersRepositoriesContext = createContext<UsersRepositoriesContextType>({
	repositoriesCache: {},
	isLoading: false,
	getUserRepositories: async () => {
		return [];
	},
});

export const UsersRepositoriesProvider = ({ children }: PropsWithChildren) => {
	const [repositoriesCache, setRepositoriesCache] = useState<Record<string, Repos[]>>({});
	const [isLoading, setIsLoading] = useState(false);

	const getUserRepositories = useCallback(
		async (username: string) => {
			if (repositoriesCache[username]) {
				return;
			}

			setIsLoading(true);
			try {
				const response = await executeAPI<Repos[]>({
					url: `users/${username}/repos`,
					method: 'GET',
				});

				console.log(response, 'response');

				setRepositoriesCache((prevCache) => ({
					...prevCache,
					[username]: response,
				}));
				return response;
			} catch (error) {
				console.error('Failed to fetch repositories', error);
			} finally {
				setIsLoading(false);
			}
		},
		[repositoriesCache],
	);

	return (
		<UsersRepositoriesContext.Provider
			value={{
				repositoriesCache,
				isLoading,
				getUserRepositories,
			}}
		>
			{children}
		</UsersRepositoriesContext.Provider>
	);
};
