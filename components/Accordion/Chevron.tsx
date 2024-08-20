import React from 'react';
import Animated, { useAnimatedStyle } from 'react-native-reanimated';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import { View } from 'react-native';
import { styles } from '@/components/Accordion/styles';

type ChevronProps = {
	progress: {
		value: number;
	};
};

export const Chevron = ({ progress }: ChevronProps) => {
	const iconStyle = useAnimatedStyle(() => ({
		transform: [{ rotate: `${progress.value * -180}deg` }],
	}));
	return (
		<Animated.View style={iconStyle} testID="animated-chevron">
			<View style={styles.iconWrapper} testID="icon-wrapper">
				<FontAwesome name="chevron-down" size={12} color="white" />
			</View>
		</Animated.View>
	);
};
