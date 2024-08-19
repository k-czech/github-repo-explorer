import React, { useCallback } from 'react';
import { Alert, Linking, Pressable, Text, TextStyle, ViewStyle } from 'react-native';
import { styles } from '@/components/OpenUrlButton/styles';
import { useTranslation } from 'react-i18next';

type OpenURLButtonProps = {
	url: string;
	linkText?: string;
	stylesLinkText?: TextStyle;
	stylesOpenUrlButton?: ViewStyle;
};

export const OpenURLButton = ({
	url,
	linkText,
	stylesLinkText,
	stylesOpenUrlButton,
}: OpenURLButtonProps) => {
	const handlePress = useCallback(async () => {
		const supported = await Linking.canOpenURL(url);
		const { t } = useTranslation();

		if (supported) {
			await Linking.openURL(url);
		} else {
			Alert.alert(`${t('common:alert')}: ${url}`);
		}
	}, [url]);

	return (
		<Pressable onPress={handlePress} style={stylesOpenUrlButton}>
			<Text style={[styles.link, stylesLinkText]}>{linkText || url}</Text>
		</Pressable>
	);
};
