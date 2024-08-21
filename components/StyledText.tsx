import React from 'react';
import { Text, TextProps } from 'react-native';

export function StyledText(props: TextProps) {
	return <Text {...props} style={[props.style, { fontFamily: 'ProximaNova' }]} />;
}
