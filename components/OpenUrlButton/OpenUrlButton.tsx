import React, { useCallback } from 'react';
import { Alert, Linking, Pressable, TextStyle, ViewStyle } from 'react-native';
import { styles } from '@/components/OpenUrlButton/styles';
import { useTranslation } from 'react-i18next';
import { StyledText } from '@/components/StyledText';

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
	const { t } = useTranslation();
	const handlePress = useCallback(async () => {
		const supported = await Linking.canOpenURL(url);

		if (supported) {
			await Linking.openURL(url);
		} else {
			Alert.alert(`${t('common:alert')}: ${url}`);
		}
	}, [url, t]);

	return (
		<Pressable onPress={handlePress} style={stylesOpenUrlButton}>
			<StyledText style={[styles.link, stylesLinkText]}>{linkText || url}</StyledText>
		</Pressable>
	);
};
