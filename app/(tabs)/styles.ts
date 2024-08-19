import { StyleSheet, TextStyle, ViewStyle } from 'react-native';
import colors from '@/constants/Colors';
import { spacing } from '@/constants/Spacing';

type ScreenStylesProps = {
	container: ViewStyle;
	title: TextStyle;
	languageWrapper: ViewStyle;
	changeLanguageButton: ViewStyle;
	changeLanguageText: TextStyle;
	changeLanguageButtonActive: ViewStyle;
};

export const styles = StyleSheet.create<ScreenStylesProps>({
	container: {
		flex: 1,
		backgroundColor: colors.default.gray900,
		marginHorizontal: 20,
		marginVertical: 30,
	},
	title: {
		fontSize: 20,
		color: colors.default.white,
	},
	languageWrapper: {
		flexDirection: 'column',
		justifyContent: 'space-between',
		backgroundColor: colors.default.black,
		borderRadius: 20,
		marginTop: spacing.medium,
		overflow: 'hidden',
	},
	changeLanguageButton: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'center',
		padding: 20,
	},
	changeLanguageText: {
		color: colors.default.white,
		fontSize: 14,
	},
	changeLanguageButtonActive: {
		backgroundColor: colors.default.primary,
	},
});
