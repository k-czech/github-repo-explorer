import { StyleSheet, TextStyle, ViewStyle } from 'react-native';
import colors from '@/constants/Colors';

type AccordionStyle = {
	container: ViewStyle;
	textTitle: TextStyle;
	titleContainer: ViewStyle;
	contentContainer: ViewStyle;
	content: ViewStyle;
	textContent: TextStyle;
	textContentTitle: TextStyle;
	textContentDescription: TextStyle;
	iconWrapper: ViewStyle;
	tagContainer: ViewStyle;
	linkButton: ViewStyle;
	linkButtonText: TextStyle;
};

export const styles = StyleSheet.create<AccordionStyle>({
	container: {
		backgroundColor: colors.default.black,
		marginHorizontal: 10,
		marginVertical: 10,
		borderRadius: 18,
		borderWidth: 1,
		borderColor: colors.default.gray600,
		overflow: 'hidden',
	},
	textTitle: {
		fontSize: 16,
		color: colors.default.white,
	},
	titleContainer: {
		padding: 20,
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'center',
	},
	contentContainer: {
		position: 'absolute',
		width: '100%',
		top: 0,
	},
	content: {
		padding: 20,
		margin: 20,
		borderRadius: 18,
		backgroundColor: colors.default.gray900,
	},
	textContent: {
		fontSize: 12,
	},
	textContentTitle: {
		color: colors.default.white,
		fontWeight: '700',
		marginBottom: 3,
	},
	textContentDescription: {
		color: colors.default.gray500,
	},
	iconWrapper: {
		width: 34,
		height: 34,
		borderRadius: 50,
		backgroundColor: colors.default.gray900,
		justifyContent: 'center',
		alignItems: 'center',
	},
	tagContainer: {
		flexDirection: 'row',
		flexWrap: 'wrap',
		marginTop: 10,
		gap: 5,
	},
	linkButton: {
		marginTop: 15,
		backgroundColor: colors.default.primary,
		minHeight: 48,
		borderRadius: 24,
		alignItems: 'center',
		justifyContent: 'center',
	},
	linkButtonText: {
		color: colors.default.white,
		textAlign: 'center',
		fontWeight: '700',
		fontSize: 14,
	},
});
