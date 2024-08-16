import { StyleSheet, TextStyle, ViewStyle } from 'react-native';
import colors from '@/constants/Colors';

type TagStyle = {
	tag: ViewStyle;
	text: TextStyle;
};

export default StyleSheet.create<TagStyle>({
	tag: {
		flexDirection: 'row',
		alignItems: 'center',
		backgroundColor: colors.default.transparent,
		borderRadius: 18,
		paddingHorizontal: 10,
		paddingVertical: 8,
		borderColor: colors.default.gray700,
		borderWidth: 1,
	},
	text: {
		fontSize: 12,
		color: colors.default.white,
		marginLeft: 10,
	},
});
