import React, { useCallback } from 'react';
import { Alert, Linking, Pressable, Text, TextStyle, ViewStyle } from 'react-native';
import { styles } from '@/components/OpenUrlButton/styles';

type OpenURLButtonProps = {
	url: string;
	children: string;
	stylesLinkText?: TextStyle;
	stylesOpenUrlButton?: ViewStyle;
};

export const OpenURLButton = ({
	url,
	children,
	stylesLinkText,
	stylesOpenUrlButton,
}: OpenURLButtonProps) => {
	const handlePress = useCallback(async () => {
		const supported = await Linking.canOpenURL(url);

		if (supported) {
			await Linking.openURL(url);
		} else {
			Alert.alert(`Don't know how to open this URL: ${url}`);
		}
	}, [url]);

	return (
		<Pressable onPress={handlePress} style={stylesOpenUrlButton}>
			<Text style={[styles.link, stylesLinkText]}>{children}</Text>
		</Pressable>
	);
};
