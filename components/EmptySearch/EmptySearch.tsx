import GlobalsStyles from '@/app/globals-styles';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import colors from '@/constants/Colors';
import { Text, View } from 'react-native';
import React from 'react';
import { styles } from '@/components/EmptySearch/styles';

type EmptySearchProps = {
	noResultText: string;
};

export const EmptySearch = ({ noResultText }: EmptySearchProps) => {
	return (
		<View style={GlobalsStyles.flexContainerCenter}>
			<FontAwesome name="search" size={100} color={colors.default.primary} />
			<Text style={styles.noResultText}>{noResultText}</Text>
		</View>
	);
};
