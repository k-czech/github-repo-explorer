import GlobalsStyles from '@/app/globals-styles';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import colors from '@/constants/Colors';
import { View } from 'react-native';
import React from 'react';
import { styles } from '@/components/EmptySearch/styles';
import { StyledText } from '@/components/StyledText';

type EmptySearchProps = {
	noResultText: string;
};

export const EmptySearch = ({ noResultText }: EmptySearchProps) => {
	return (
		<View style={GlobalsStyles.flexContainerCenter} testID="empty-search-container">
			<FontAwesome name="search" size={100} color={colors.default.primary} testID="search-icon" />
			<StyledText style={styles.noResultText}>{noResultText}</StyledText>
		</View>
	);
};
