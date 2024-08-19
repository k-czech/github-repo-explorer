import React from 'react';
import { render } from '@testing-library/react-native';
import { Chevron } from '@/components/Accordion/Chevron';
import { describe, expect, it } from '@jest/globals';

jest.mock('react-native-reanimated', () => {
	// eslint-disable-next-line @typescript-eslint/no-require-imports
	const Reanimated = require('react-native-reanimated/mock');
	Reanimated.default.useSharedValue = jest.fn((value: unknown) => ({ value }));
	Reanimated.default.useAnimatedStyle = jest.fn((fn: () => unknown) => fn());
	return Reanimated;
});

describe('Chevron Component', () => {
	it('should render FontAwesome chevron-down icon', () => {
		const mockProgress = { value: 0 };
		const { getByTestId } = render(<Chevron progress={mockProgress} />);

		const iconWrapper = getByTestId('icon-wrapper');
		expect(iconWrapper).toBeTruthy();
	});

	it('should apply the correct animated style based on progress value', () => {
		const mockProgress = { value: 1 };
		const { getByTestId } = render(<Chevron progress={mockProgress} />);

		const animatedView = getByTestId('animated-chevron');
		const expectedTransform = [{ rotate: `${mockProgress.value * -180}deg` }];

		expect(animatedView.props.style.transform).toEqual(expectedTransform);
	});
});
