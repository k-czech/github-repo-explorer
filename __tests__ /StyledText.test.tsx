import React from 'react';
import { render } from '@testing-library/react-native';
import { StyledText } from '@/components/StyledText';

describe('StyledText Component', () => {
	it('should render text correctly', () => {
		const text = 'Hello, world!';
		const { getByText } = render(<StyledText>{text}</StyledText>);

		const renderedText = getByText(text);
		expect(renderedText).toBeTruthy();
	});

	it('should apply the ProximaNova fontFamily', () => {
		const { getByText } = render(<StyledText>Hello, world!</StyledText>);

		const renderedText = getByText('Hello, world!');
		expect(renderedText.props.style).toEqual(
			expect.arrayContaining([{ fontFamily: 'ProximaNova' }]),
		);
	});

	it('should apply additional styles passed via props', () => {
		const additionalStyle = { color: 'red', fontSize: 20 };
		const { getByText } = render(<StyledText style={additionalStyle}>Hello, world!</StyledText>);

		const renderedText = getByText('Hello, world!');
		expect(renderedText.props.style).toEqual(
			expect.arrayContaining([additionalStyle, { fontFamily: 'ProximaNova' }]),
		);
	});

	it('should combine passed styles with fontFamily', () => {
		const passedStyle = { color: 'blue' };
		const { getByText } = render(<StyledText style={passedStyle}>Styled Text</StyledText>);

		const renderedText = getByText('Styled Text');
		expect(renderedText.props.style).toEqual(
			expect.arrayContaining([passedStyle, { fontFamily: 'ProximaNova' }]),
		);
	});
});
