import { SafeAreaView, View, ViewProps } from 'react-native';
import React, { PropsWithChildren } from 'react';
import GlobalsStyles from '@/app/globals-styles';

export const Container = ({ children, ...props }: PropsWithChildren & ViewProps) => {
	return (
		<SafeAreaView style={GlobalsStyles.flex} {...props} testID="container-safe-area-view">
			<View style={GlobalsStyles.flex} testID="container-view">
				{children}
			</View>
		</SafeAreaView>
	);
};
