import React from 'react';
import { render } from '@testing-library/react-native';
import colors from '@/constants/Colors';
import { EmptySearch } from '@/components/EmptySearch/EmptySearch';
import GlobalsStyles from '@/app/globals-styles';
import { styles } from '@/components/EmptySearch/styles';
import { describe, expect, it } from '@jest/globals';

describe('EmptySearch Component', () => {
	it('should render the FontAwesome search icon', () => {
		const { getByTestId } = render(<EmptySearch noResultText="No results found" />);

		const icon = getByTestId('search-icon');
		expect(icon).toBeTruthy();
		expect(icon.props.name).toBe('search');
		expect(icon.props.size).toBe(100);
		expect(icon.props.color).toBe(colors.default.primary);
	});

	it('should display the provided noResultText', () => {
		const noResultText = 'No results found';
		const { getByText } = render(<EmptySearch noResultText={noResultText} />);

		const textElement = getByText(noResultText);
		expect(textElement).toBeTruthy();
		expect(textElement.props.children).toBe(noResultText);
	});

	it('should apply the correct styles to the container and text', () => {
		const noResultText = 'No results found';
		const { getByText, getByTestId } = render(<EmptySearch noResultText={noResultText} />);

		const container = getByTestId('empty-search-container');

		const containerStyles = Array.isArray(container.props.style)
			? container.props.style.flat()
			: [container.props.style];
		expect(containerStyles).toContainEqual(GlobalsStyles.flexContainerCenter);

		const textElement = getByText(noResultText);

		const textStyles = Array.isArray(textElement.props.style)
			? textElement.props.style.flat()
			: [textElement.props.style];
		expect(textStyles).toContainEqual(styles.noResultText);
	});
});
