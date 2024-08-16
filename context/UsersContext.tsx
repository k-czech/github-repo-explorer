import { createContext, PropsWithChildren, useCallback, useState } from 'react';
import { UserItem, Users } from '@/types/Users';
import { executeAPI } from '@/services/api';

type UsersContextType = {
	users: UserItem[];
	loadingUsers: boolean;
	searchUsersByUsername: () => void;
	setSearchText: (text: string) => void;
};

export const UsersContext = createContext<UsersContextType>({
	users: [],
	loadingUsers: false,
	searchUsersByUsername: async () => {},
	setSearchText: () => {},
});

export const UsersProvider = ({ children }: PropsWithChildren) => {
	const [searchText, setSearchText] = useState('');
	const [users, setUsers] = useState<UserItem[]>([]);
	const [loadingUsers, setLoadingUsers] = useState(false);

	const searchUsersByUsername = useCallback(async () => {
		setLoadingUsers(true);
		const response = await executeAPI<Users>({
			url: `search/users?q=${searchText}&per_page=5`,
			method: 'GET',
		});
		setUsers(response.items);
		setLoadingUsers(false);
	}, [searchText]);

	return (
		<UsersContext.Provider
			value={{
				users,
				loadingUsers,
				searchUsersByUsername,
				setSearchText,
			}}
		>
			{children}
		</UsersContext.Provider>
	);
};
