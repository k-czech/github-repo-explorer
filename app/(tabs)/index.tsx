import React, { useContext } from 'react';
import { styles } from '@/app/(tabs)/styles';
import { InputText } from '@/components/InputText/InputText';
import { Container } from '@/components/Container/Container';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import { FlashList } from '@shopify/flash-list';
import { Accordion } from '@/components/Accordion/Accordion';
import { UsersContext } from '@/context/UsersContext';
import { UsersRepositoriesContext } from '@/context/UserRepositoriesContext';
import { Text } from 'react-native';
import { EmptySearch } from '@/components/EmptySearch/EmptySearch';

export default function HomeScreen() {
	const { setSearchText, searchUsersByUsername, users } = useContext(UsersContext);
	const { getUserRepositories, isLoading } = useContext(UsersRepositoriesContext);

	return (
		<Container style={styles.container}>
			<InputText
				placeholder="Search"
				onChangeText={(val) => setSearchText(val)}
				returnKeyType="search"
				keyboardType="web-search"
				onPressSearch={searchUsersByUsername}
				icon={<FontAwesome name="search" size={14} color="white" />}
			/>
			<FlashList
				data={users}
				keyExtractor={(item) => item.id.toString()}
				renderItem={({ item }) => {
					return (
						<>
							{isLoading ? (
								<Text>Loading...</Text>
							) : (
								<Accordion
									key={`${item.login}-${item.id}`}
									avatarUrl={item.avatar_url}
									name={item.login}
									url={item.html_url}
									textUrl="Go to Github profile"
									onPress={async () => {
										await getUserRepositories(item.login);
									}}
								/>
							)}
						</>
					);
				}}
				estimatedItemSize={50}
				ListEmptyComponent={
					<EmptySearch noResultText="Search for users or change search criteria" />
				}
			/>
		</Container>
	);
}
