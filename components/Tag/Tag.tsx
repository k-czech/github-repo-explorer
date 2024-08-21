import { View } from 'react-native';
import React from 'react';
import styles from '@/components/Tag/styles';
import GlobalsStyles from '@/app/globals-styles';
import { TagProps } from '@/components/Tag/types';
import { StyledText } from '@/components/StyledText';

export const Tag = ({ icon, title }: TagProps) => {
	return (
		<View style={styles.tag}>
			{icon && icon}
			<StyledText style={[styles.text, !icon && GlobalsStyles.marginLeftNone]}>{title}</StyledText>
		</View>
	);
};
