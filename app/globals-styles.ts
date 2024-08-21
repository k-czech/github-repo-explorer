import { Dimensions, StyleSheet, TextStyle, ViewStyle } from 'react-native';
import colors from '@/constants/Colors';
import { spacing } from '@/constants/Spacing';

type GlobalStyle = {
	flexDirectionColumn: ViewStyle;
	marginLeftNone: TextStyle;
	flexContainerRowSpaceBetween: ViewStyle;
	flexContainerCenter: ViewStyle;
	flex: ViewStyle;
	bulet: ViewStyle;
};

type Screen404Style = {
	container: ViewStyle;
	title: TextStyle;
	link: ViewStyle;
	linkText: TextStyle;
};

// 404 screen
export const styles404screen = StyleSheet.create<Screen404Style>({
	container: {
		flex: 1,
		alignItems: 'center',
		justifyContent: 'center',
		padding: 20,
	},
	title: {
		fontSize: 20,
		fontWeight: 'bold',
	},
	link: {
		marginTop: 15,
		paddingVertical: 15,
	},
	linkText: {
		fontSize: 14,
		color: '#2e78b7',
	},
});

export default StyleSheet.create<GlobalStyle>({
	flexDirectionColumn: {
		flexDirection: 'column',
	},
	marginLeftNone: {
		marginLeft: 0,
	},
	flexContainerRowSpaceBetween: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'center',
	},
	flexContainerCenter: {
		flexDirection: 'column',
		justifyContent: 'center',
		alignItems: 'center',
		height: Dimensions.get('window').height - 200,
		paddingHorizontal: spacing.medium,
	},
	flex: {
		flex: 1,
	},
	bulet: {
		width: 6,
		height: 6,
		backgroundColor: colors.default.primary,
		borderRadius: 6,
		marginRight: 10,
	},
});
