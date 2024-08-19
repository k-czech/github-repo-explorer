import React from 'react';
import { render } from '@testing-library/react-native';
import { Container } from '@/components/Container/Container';
import GlobalsStyles from '@/app/globals-styles';
import { Text } from 'react-native';
import { describe, expect, it } from '@jest/globals';

describe('Container Component', () => {
	it('should render children correctly', () => {
		const { getByText } = render(
			<Container>
				<Text>Test Content</Text>
			</Container>,
		);

		const textElement = getByText('Test Content');
		expect(textElement).toBeTruthy();
	});

	it('should apply the correct global styles to SafeAreaView and View', () => {
		const { getByTestId } = render(
			<Container>
				<Text>Test Content</Text>
			</Container>,
		);

		const safeAreaView = getByTestId('container-safe-area-view');
		const view = getByTestId('container-view');

		const safeAreaViewStyles = Array.isArray(safeAreaView.props.style)
			? safeAreaView.props.style.flat()
			: [safeAreaView.props.style];
		const viewStyles = Array.isArray(view.props.style)
			? view.props.style.flat()
			: [view.props.style];

		expect(safeAreaViewStyles).toContainEqual(GlobalsStyles.flex);
		expect(viewStyles).toContainEqual(GlobalsStyles.flex);
	});

	it('should pass props to SafeAreaView', () => {
		const customProps = {
			testID: 'container-safe-area-view',
			accessibilityLabel: 'Container Safe Area',
		};

		const { getByTestId } = render(
			<Container {...customProps}>
				<Text>Test Content</Text>
			</Container>,
		);

		const safeAreaView = getByTestId('container-safe-area-view');
		expect(safeAreaView.props.accessibilityLabel).toBe('Container Safe Area');
	});
});
