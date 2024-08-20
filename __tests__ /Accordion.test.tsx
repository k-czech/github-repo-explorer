import React from 'react';
import { fireEvent, render, waitFor } from '@testing-library/react-native';
import { Accordion } from '@/components/Accordion/Accordion';
import { UsersRepositoriesContext } from '@/context/UserRepositoriesContext';

jest.mock('react-i18next', () => ({
	useTranslation: () => ({
		t: (key: string) => (key === 'common:loading' ? 'Loading...' : 'No repositories found'),
	}),
}));

jest.mock('react-native-reanimated', () => ({
	// eslint-disable-next-line @typescript-eslint/no-require-imports
	...require('react-native-reanimated/mock'),
	useSharedValue: jest.fn((initialValue) => ({ value: initialValue })),
	withTiming: jest.fn((value) => value),
	useAnimatedStyle: jest.fn((styleFn) => styleFn()),
}));

describe('Accordion Component', () => {
	const mockRepositoriesCache = {
		'Test User': [
			{
				id: 1,
				name: 'Test Repo',
				description: 'Test Description',
				created_at: '2022-01-01T00:00:00Z',
				visibility: 'public',
				default_branch: 'main',
				watchers: 5,
				html_url: 'https://github.com/test-repo',
				forks: 10,
				stargazers_count: 15,
			},
		],
	};

	const mockContextValue = {
		repositoriesCache: mockRepositoriesCache,
		isLoading: false,
		getUserRepositories: jest.fn(),
	};

	const mockOnPress = jest.fn().mockResolvedValue(undefined);

	it('should render avatar and name when avatarUrl is provided', () => {
		const { getByText, getByTestId } = render(
			<UsersRepositoriesContext.Provider value={mockContextValue}>
				<Accordion
					avatarUrl="https://avatars.githubusercontent.com/u/1?v=4"
					name="Test User"
					url="https://github.com/test"
					textUrl="Go to Profile"
				/>
			</UsersRepositoriesContext.Provider>,
		);

		expect(getByText('Test User')).toBeTruthy();
		expect(getByText('Go to Profile')).toBeTruthy();
		expect(getByTestId('avatar-image')).toBeTruthy();
	});

	it('should render only name and url button when avatarUrl is not provided', () => {
		const { getByText } = render(
			<UsersRepositoriesContext.Provider value={mockContextValue}>
				<Accordion name="Test User" url="https://github.com/test" textUrl="Go to Profile" />
			</UsersRepositoriesContext.Provider>,
		);

		expect(getByText('Test User')).toBeTruthy();
		expect(getByText('Go to Profile')).toBeTruthy();
	});

	it('should render loading text when isLoading is true', () => {
		const loadingContextValue = {
			...mockContextValue,
			isLoading: true,
		};

		const { getByText } = render(
			<UsersRepositoriesContext.Provider value={loadingContextValue}>
				<Accordion name="Test User" />
			</UsersRepositoriesContext.Provider>,
		);

		expect(getByText('Loading...')).toBeTruthy();
	});

	it('should render no repositories message when repositories list is empty', () => {
		const emptyRepositoriesContextValue = {
			repositoriesCache: { 'Test User': [] },
			isLoading: false,
			getUserRepositories: () => Promise.resolve([]),
		};

		const { getByText } = render(
			<UsersRepositoriesContext.Provider value={emptyRepositoriesContextValue}>
				<Accordion name="Test User" />
			</UsersRepositoriesContext.Provider>,
		);

		expect(getByText('No repositories found')).toBeTruthy();
	});

	it('should call onPress when pressed and cache is empty', async () => {
		const emptyCacheContextValue = {
			repositoriesCache: {},
			isLoading: false,
			getUserRepositories: () => Promise.resolve([]),
		};

		const { getByTestId } = render(
			<UsersRepositoriesContext.Provider value={emptyCacheContextValue}>
				<Accordion name="Test User" onPress={mockOnPress} />
			</UsersRepositoriesContext.Provider>,
		);

		const pressable = getByTestId('pressable');
		fireEvent.press(pressable);

		await waitFor(() => {
			expect(mockOnPress).toHaveBeenCalled();
		});
	});
});
