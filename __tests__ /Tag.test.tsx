import React from 'react';
import { render } from '@testing-library/react-native';
import { View } from 'react-native';
import GlobalsStyles from '@/app/globals-styles';
import { Tag } from '@/components/Tag/Tag';
import { describe, expect, it } from '@jest/globals';

describe('Tag Component', () => {
	it('should render the Tag component correctly', () => {
		const { getByText } = render(<Tag title="Test Tag" />);
		const textElement = getByText('Test Tag');
		expect(textElement).toBeTruthy();
	});

	it('should render the icon if provided', () => {
		const TestIcon = () => <View testID="test-icon" />;
		const { getByTestId } = render(<Tag title="Test Tag" icon={<TestIcon />} />);
		const iconElement = getByTestId('test-icon');
		expect(iconElement).toBeTruthy();
	});

	it('should not apply margin-left when icon is present', () => {
		const TestIcon = () => <View testID="test-icon" />;
		const { getByText } = render(<Tag title="With Icon Tag" icon={<TestIcon />} />);
		const textElement = getByText('With Icon Tag');

		expect(textElement.props.style).not.toEqual(
			expect.arrayContaining([GlobalsStyles.marginLeftNone]),
		);
	});
});
