import React from 'react';
import { fireEvent, render } from '@testing-library/react-native';
import colors from '@/constants/Colors';
import { InputText } from '@/components/InputText/InputText';
import styles from '@/components/InputText/styles';
import { Pressable, View } from 'react-native';
import { describe, expect, it } from '@jest/globals';

describe('InputText Component', () => {
	it('should render TextInput with correct props', () => {
		const placeholder = 'Enter text';
		const { getByPlaceholderText } = render(<InputText placeholder={placeholder} />);

		const input = getByPlaceholderText(placeholder);
		expect(input).toBeTruthy();
		expect(input.props.placeholderTextColor).toBe(colors.default.gray600);
		expect(input.props.autoCapitalize).toBe('none');
		expect(input.props.autoCorrect).toBe(false);
	});

	it('should change style when focused and blurred', () => {
		const placeholder = 'Enter text';
		const { getByPlaceholderText } = render(<InputText placeholder={placeholder} />);

		const input = getByPlaceholderText(placeholder);

		expect(input.props.style).toEqual(expect.not.arrayContaining([styles.focused]));

		fireEvent(input, 'focus');
		expect(input.props.style).toEqual(expect.arrayContaining([styles.focused]));

		fireEvent(input, 'blur');
		expect(input.props.style).toEqual(expect.not.arrayContaining([styles.focused]));
	});

	it('should render the icon and Pressable when keyboardType is "web-search"', () => {
		const onPressMock = jest.fn();
		const TestIcon = () => <View testID="test-icon" />;

		const { getByTestId, queryByTestId } = render(
			<InputText keyboardType="web-search" icon={<TestIcon />} onPressSearch={onPressMock} />,
		);

		const icon = getByTestId('test-icon');
		expect(icon).toBeTruthy();

		const pressable = queryByTestId('test-icon')?.parentElement as React.ReactElement;

		expect(pressable.type).toBe(Pressable);

		expect(pressable.props.onPress).toBe(onPressMock);

		fireEvent.press(pressable);
		expect(onPressMock).toHaveBeenCalled();
	});

	it('should not render Pressable if keyboardType is not "web-search"', () => {
		const TestIcon = () => <View testID="test-icon" />;
		const { queryByTestId } = render(
			<InputText keyboardType="default" icon={<TestIcon />} onPressSearch={() => {}} />,
		);

		const icon = queryByTestId('test-icon');
		expect(icon).toBeNull();
	});

	it('should apply custom styles passed via props', () => {
		const customStyle = { backgroundColor: 'lightblue' };
		const placeholder = 'Enter text';
		const { getByPlaceholderText } = render(
			<InputText placeholder={placeholder} style={customStyle} />,
		);

		const input = getByPlaceholderText(placeholder);
		expect(input.props.style).toContainEqual(customStyle);
	});
});
