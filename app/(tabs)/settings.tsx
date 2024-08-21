import React, { useContext } from 'react';
import { styles } from '@/app/(tabs)/styles';
import { Container } from '@/components/Container/Container';
import { TouchableOpacity, View } from 'react-native';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import colors from '@/constants/Colors';
import { useTranslation } from 'react-i18next';
import { LanguageContext } from '@/context/LanguageContext';
import { StyledText } from '@/components/StyledText';

export default function TabTwoScreen() {
	const { currentLanguage, changeLanguage } = useContext(LanguageContext);
	const { t } = useTranslation();
	return (
		<Container style={styles.container}>
			<StyledText style={styles.title}>{t('settings-screen:change-language')}</StyledText>
			<View style={styles.languageWrapper}>
				<TouchableOpacity
					onPress={() => changeLanguage('pl')}
					style={[
						styles.changeLanguageButton,
						currentLanguage === 'pl' && styles.changeLanguageButtonActive,
					]}
				>
					<StyledText style={styles.changeLanguageText}>{t('common:polish')}</StyledText>
					{currentLanguage === 'pl' ? (
						<FontAwesome name="check" size={16} color={colors.default.white} />
					) : null}
				</TouchableOpacity>
				<TouchableOpacity
					onPress={() => changeLanguage('en')}
					style={[
						styles.changeLanguageButton,
						currentLanguage === 'en' && styles.changeLanguageButtonActive,
					]}
				>
					<StyledText style={styles.changeLanguageText}>{t('common:english')}</StyledText>
					{currentLanguage === 'en' ? (
						<FontAwesome name="check" size={16} color={colors.default.white} />
					) : null}
				</TouchableOpacity>
				<TouchableOpacity
					onPress={() => changeLanguage('de')}
					style={[
						styles.changeLanguageButton,
						currentLanguage === 'de' && styles.changeLanguageButtonActive,
					]}
				>
					<StyledText style={styles.changeLanguageText}>{t('common:german')}</StyledText>
					{currentLanguage === 'de' ? (
						<FontAwesome name="check" size={16} color={colors.default.white} />
					) : null}
				</TouchableOpacity>
			</View>
		</Container>
	);
}
