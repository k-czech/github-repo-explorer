import React from 'react';
import { fireEvent, render } from '@testing-library/react-native';
import { Alert, Linking } from 'react-native';
import { OpenURLButton } from '@/components/OpenUrlButton/OpenUrlButton';
import { afterEach, describe, expect, it } from '@jest/globals';

jest.mock('react-native/Libraries/Linking/Linking', () => ({
	canOpenURL: jest.fn(),
	openURL: jest.fn(),
}));

jest.spyOn(Alert, 'alert');

describe('OpenURLButton Component', () => {
	afterEach(() => {
		jest.clearAllMocks();
	});

	it('should render correctly with the default link text', () => {
		const url = 'https://example.com';
		const { getByText } = render(<OpenURLButton url={url} />);

		const linkElement = getByText(url);
		expect(linkElement).toBeTruthy();
	});

	it('should render correctly with custom link text', () => {
		const url = 'https://example.com';
		const linkText = 'Click Here';
		const { getByText } = render(<OpenURLButton url={url} linkText={linkText} />);

		const linkElement = getByText(linkText);
		expect(linkElement).toBeTruthy();
	});

	it('should call Linking.openURL when the URL is supported', async () => {
		const url = 'https://example.com';
		(Linking.canOpenURL as jest.Mock).mockResolvedValue(true);

		const { getByText } = render(<OpenURLButton url={url} />);

		const linkElement = getByText(url);
		await fireEvent.press(linkElement);

		expect(Linking.canOpenURL).toHaveBeenCalledWith(url);
		expect(Linking.openURL).toHaveBeenCalledWith(url);
	});

	it('should show an alert when the URL is not supported', async () => {
		const url = 'https://example.com';
		(Linking.canOpenURL as jest.Mock).mockResolvedValue(false);

		const { getByText } = render(<OpenURLButton url={url} />);

		const linkElement = getByText(url);
		await fireEvent.press(linkElement);

		expect(Linking.canOpenURL).toHaveBeenCalledWith(url);
		expect(Linking.openURL).not.toHaveBeenCalled();
		expect(Alert.alert).toHaveBeenCalledWith(expect.stringContaining(url));
	});

	it('should apply custom styles to the text and button', () => {
		const url = 'https://example.com';
		const customTextStyle = { color: 'blue' };
		const customButtonStyle = { padding: 10 };

		const { getByText } = render(
			<OpenURLButton
				url={url}
				stylesLinkText={customTextStyle}
				stylesOpenUrlButton={customButtonStyle}
			/>,
		);

		const linkElement = getByText(url);

		const appliedStyles = Array.isArray(linkElement.props.style)
			? linkElement.props.style.flat()
			: [linkElement.props.style];
		const foundStyle = appliedStyles.find((style) => style.color === customTextStyle.color);

		expect(foundStyle).toBeTruthy();
	});
});
