import React from 'react';
import { Pressable, PressableProps, TextInput, TextInputProps, View } from 'react-native';
import styles from '@/components/InputText/styles';
import colors from '@/constants/Colors';

type InputTextProps = TextInputProps & {
	icon?: React.ReactNode;
	onPressSearch: PressableProps['onPress'];
};

export const InputText = ({ icon, onPressSearch, ...props }: InputTextProps) => {
	const [focused, setFocused] = React.useState(false);

	return (
		<View style={styles.border}>
			<TextInput
				{...props}
				placeholderTextColor={colors.default.gray600}
				underlineColorAndroid={colors.default.transparent}
				autoCapitalize="none"
				autoCorrect={false}
				onFocus={() => setFocused(!focused)}
				onBlur={() => setFocused(!focused)}
				style={[styles.input, focused && styles.focused, props.style]}
			/>
			{props.keyboardType === 'web-search' && icon && (
				<Pressable onPress={onPressSearch} style={styles.iconWrapper}>
					{icon}
				</Pressable>
			)}
		</View>
	);
};
