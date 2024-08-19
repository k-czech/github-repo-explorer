import { Link, Stack } from 'expo-router';
import React from 'react';

import { View } from '@/components/Themed';
import { styles404screen } from '@/app/globals-styles';
import { StyledText } from '@/components/StyledText';

export default function NotFoundScreen() {
	return (
		<>
			<Stack.Screen options={{ title: 'Oops!' }} />
			<View style={styles404screen.container}>
				<StyledText style={styles404screen.title}>This screen doesn&apos;t exist.</StyledText>

				<Link href="/" style={styles404screen.link}>
					<StyledText style={styles404screen.linkText}>Go to home screen!</StyledText>
				</Link>
			</View>
		</>
	);
}
