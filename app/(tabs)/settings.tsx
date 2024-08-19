import React, { useContext } from 'react';
import { Text } from '@/components/Themed';
import { styles } from '@/app/(tabs)/styles';
import { Container } from '@/components/Container/Container';
import { TouchableOpacity, View } from 'react-native';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import colors from '@/constants/Colors';
import { useTranslation } from 'react-i18next';
import { LanguageContext } from '@/context/LanguageContext';

export default function TabTwoScreen() {
	const { currentLanguage, changeLanguage } = useContext(LanguageContext);
	const { t } = useTranslation();
	return (
		<Container style={styles.container}>
			<Text style={styles.title}>{t('settings-screen:change-language')}</Text>
			<View style={styles.languageWrapper}>
				<TouchableOpacity
					onPress={() => changeLanguage('pl')}
					style={[
						styles.changeLanguageButton,
						currentLanguage === 'pl' && styles.changeLanguageButtonActive,
					]}
				>
					<Text style={styles.changeLanguageText}>{t('common:polish')}</Text>
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
					<Text style={styles.changeLanguageText}>{t('common:english')}</Text>
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
					<Text style={styles.changeLanguageText}>{t('common:german')}</Text>
					{currentLanguage === 'de' ? (
						<FontAwesome name="check" size={16} color={colors.default.white} />
					) : null}
				</TouchableOpacity>
			</View>
		</Container>
	);
}
