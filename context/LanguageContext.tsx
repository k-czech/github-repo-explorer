import React, { createContext, PropsWithChildren, useEffect, useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import i18next from 'i18next';
import '@/lang/i18n';
import { AVAILABLE_LANGUAGES } from '@/constants/Const';

export type IAvailableLanguages = (typeof AVAILABLE_LANGUAGES)[number];

type LanguageContextType = {
	currentLanguage: IAvailableLanguages;
	changeLanguage: (language: IAvailableLanguages) => void;
};

export const LanguageContext = createContext<LanguageContextType>({
	currentLanguage: 'en',
	changeLanguage: async () => {},
});

export const LanguageProvider = ({ children }: PropsWithChildren) => {
	const [currentLanguage, setCurrentLanguage] = useState<IAvailableLanguages>('en');

	const changeLanguage = async (selectedLanguage: IAvailableLanguages) => {
		try {
			if (AVAILABLE_LANGUAGES.includes(selectedLanguage)) {
				await AsyncStorage.setItem('LANGUAGE', selectedLanguage);
				setCurrentLanguage(selectedLanguage);
				i18next.changeLanguage(selectedLanguage);
			} else {
				console.log(
					'Trying change language with unknown language.',
					`Provided language: ${selectedLanguage}, available languages: ${AVAILABLE_LANGUAGES.join(
						', ',
					)}`,
				);
			}
		} catch {
			console.log('Error while changing language');
		}
	};
	useEffect(() => {
		const loadLanguage = async () => {
			try {
				const storedLanguage = (await AsyncStorage.getItem('LANGUAGE')) as IAvailableLanguages;
				if (storedLanguage) {
					setCurrentLanguage(storedLanguage);
					i18next.changeLanguage(storedLanguage);
				}
			} catch (e) {
				console.error(e);
			}
		};
		loadLanguage();
	}, []);

	return (
		<LanguageContext.Provider
			value={{
				currentLanguage,
				changeLanguage,
			}}
		>
			{children}
		</LanguageContext.Provider>
	);
};
