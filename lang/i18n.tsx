import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import pl from './pl.json';
import en from './en.json';
import de from './de.json';
import RNLanguageDetector from './RNLanguageDetector';
import { AVAILABLE_LANGUAGES } from '@/constants/Const';

const resources = {
	en: en,
	pl: pl,
	de: de,
};

// @ts-ignore
i18n.use(RNLanguageDetector).use(initReactI18next).init({
	resources,
	compatibilityJSON: 'v3',
	supportedLngs: AVAILABLE_LANGUAGES,
	fallbackLng: 'en',
	ns: [],
	defaultNs: undefined,
});

export default { i18n };
