import React, { createContext, PropsWithChildren, useCallback, useEffect, useState } from 'react';
import { UserItem, Users } from '@/types/Users';
import { executeAPI } from '@/services/api';

type UsersContextType = {
	users: UserItem[];
	isLoading: boolean;
	searchUsersByUsername: () => void;
	setSearchText: (text: string) => void;
};

export const UsersContext = createContext<UsersContextType>({
	users: [],
	isLoading: false,
	searchUsersByUsername: async () => {},
	setSearchText: () => {},
});

export const UsersProvider = ({ children }: PropsWithChildren) => {
	const [searchText, setSearchText] = useState('');
	const [users, setUsers] = useState<UserItem[]>([]);
	const [isLoading, setIsLoading] = useState(false);

	const searchUsersByUsername = useCallback(async () => {
		if (searchText === '') {
			setUsers([]);
			return;
		}
		setIsLoading(true);
		try {
			const response = await executeAPI<Users>({
				url: `search/users?q=${searchText}&per_page=5`,
				method: 'GET',
			});

			setUsers(response.items);
		} catch (error) {
			console.error('Failed to fetch users or repositories', error);
		} finally {
			setIsLoading(false);
		}
	}, [searchText]);

	useEffect(() => {
		if (searchText === '') {
			setUsers([]);
		}
	}, [searchText]);

	return (
		<UsersContext.Provider
			value={{
				users,
				isLoading,
				searchUsersByUsername,
				setSearchText,
			}}
		>
			{children}
		</UsersContext.Provider>
	);
};
