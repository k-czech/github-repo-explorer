import React, { useContext } from 'react';
import { styles } from '@/app/(tabs)/styles';
import { InputText } from '@/components/InputText/InputText';
import { Container } from '@/components/Container/Container';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import { FlashList } from '@shopify/flash-list';
import { Accordion } from '@/components/Accordion/Accordion';
import { UsersContext } from '@/context/UsersContext';

export default function HomeScreen() {
	const { setSearchText, searchUsersByUsername, users } = useContext(UsersContext);
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
						<Accordion
							avatarUrl={item.avatar_url}
							name={item.login}
							url={item.html_url}
							textUrl="Go to Github profile"
						/>
					);
				}}
				estimatedItemSize={50}
			/>
		</Container>
	);
}
