import React from 'react';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import { Tabs } from 'expo-router';

import colors from '@/constants/Colors';
import { useClientOnlyValue } from '@/components/useClientOnlyValue';
import { useTranslation } from 'react-i18next';

// You can explore the built-in icon families and icons on the web at https://icons.expo.fyi/
function TabBarIcon(props: {
	name: React.ComponentProps<typeof FontAwesome>['name'];
	color: string;
}) {
	return <FontAwesome size={24} style={{ marginBottom: -3 }} {...props} />;
}

export default function TabLayout() {
	const { t } = useTranslation();

	return (
		<Tabs
			screenOptions={{
				tabBarActiveTintColor: colors.default.white,
				// Disable the static render of the header on web
				// to prevent a hydration error in React Navigation v6.
				headerShown: useClientOnlyValue(false, false),
			}}
		>
			<Tabs.Screen
				name="index"
				options={{
					title: t('common:home'),
					tabBarIcon: ({ color }) => <TabBarIcon name="home" color={color} />,
				}}
			/>
			<Tabs.Screen
				name="settings"
				options={{
					title: t('common:settings'),
					tabBarIcon: ({ color }) => <TabBarIcon name="cog" color={color} />,
				}}
			/>
		</Tabs>
	);
}
