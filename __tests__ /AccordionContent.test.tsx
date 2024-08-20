import React from 'react';
import { fireEvent, render } from '@testing-library/react-native';
import { AccordionContent } from '@/components/Accordion/AccordionContent';
import { convertDateToDateString } from '@/lib/utils';

describe('AccordionContent Component', () => {
	const mockProps = {
		name: 'Test Repo',
		description: 'This is a test repository',
		createdAt: '2022-01-01T00:00:00Z',
		visibility: 'public',
		defaultBranch: 'main',
		watchers: 5,
		repoUrl: 'https://github.com/test-repo',
		forks: 10,
		starsCount: 15,
		hasRepoTags: false,
	};

	it('should render repository name and description', () => {
		const { getByText } = render(<AccordionContent {...mockProps} hasRepoTags={false} />);

		const nameElement = getByText(mockProps.name);
		expect(nameElement).toBeTruthy();

		const descriptionElement = getByText(mockProps.description);
		expect(descriptionElement).toBeTruthy();
	});

	it('should render creation date if provided', () => {
		const { getByText } = render(<AccordionContent {...mockProps} hasRepoTags={false} />);

		const formattedDate = convertDateToDateString(new Date(mockProps.createdAt));
		const dateElement = getByText(formattedDate);
		expect(dateElement).toBeTruthy();
	});

	it('should render tags if hasRepoTags is true', () => {
		const { getByText } = render(<AccordionContent {...mockProps} hasRepoTags={true} />);

		const visibilityTag = getByText(mockProps.visibility);
		expect(visibilityTag).toBeTruthy();

		const defaultBranchTag = getByText(mockProps.defaultBranch);
		expect(defaultBranchTag).toBeTruthy();

		const watchersTag = getByText(`${mockProps.watchers}`);
		expect(watchersTag).toBeTruthy();

		const forksTag = getByText(`${mockProps.forks}`);
		expect(forksTag).toBeTruthy();

		const starsTag = getByText(`${mockProps.starsCount}`);
		expect(starsTag).toBeTruthy();
	});

	it('should not render OpenURLButton if repoUrl is not provided', () => {
		const { queryByText } = render(<AccordionContent {...mockProps} hasRepoTags={true} />);

		const openUrlButton = queryByText('Go to repository');
		expect(openUrlButton).toBeNull();
	});

	it('should trigger handleLayout callback on layout event', () => {
		const handleLayoutMock = jest.fn();
		const { getByTestId } = render(
			<AccordionContent {...mockProps} hasRepoTags={true} handleLayout={handleLayoutMock} />,
		);

		const contentView = getByTestId('accordion-content-view');
		fireEvent(contentView, 'layout');

		expect(handleLayoutMock).toHaveBeenCalled();
	});
});
