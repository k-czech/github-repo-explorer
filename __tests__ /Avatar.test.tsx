import React from 'react';
import { render } from '@testing-library/react-native';
import { Avatar } from '@/components/Avatar/Avatar';
import { styles } from '@/components/Avatar/styles';

describe('Avatar Component', () => {
	const username = 'Test User';
	const avatarUrl = 'https://avatars.githubusercontent.com/u/500?v=4';
	const url = 'https://example.com';
	const textUrl = 'Visit Profile';

	it('should render the Image component with the correct props', () => {
		const { getByTestId } = render(<Avatar username={username} avatarUrl={avatarUrl} />);

		const image = getByTestId('avatar-image');
		expect(image).toBeTruthy();

		expect(image.props.source[0]).toEqual({ uri: avatarUrl });

		expect(image.props.style).toEqual(styles.avatar);
	});

	it('should render the username text correctly', () => {
		const { getByText } = render(<Avatar username={username} avatarUrl={avatarUrl} />);

		const usernameText = getByText(username);
		expect(usernameText).toBeTruthy();
		expect(usernameText.props.children).toBe(username);
	});

	it('should render the OpenURLButton when the url is provided', () => {
		const { getByText } = render(
			<Avatar username={username} avatarUrl={avatarUrl} url={url} textUrl={textUrl} />,
		);

		const button = getByText(textUrl);
		expect(button).toBeTruthy();
	});

	it('should not render the OpenURLButton when the url is not provided', () => {
		const { queryByText } = render(<Avatar username={username} avatarUrl={avatarUrl} />);

		const button = queryByText(textUrl);
		expect(button).toBeNull();
	});
});
