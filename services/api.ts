type RequestProps = {
	url: string;
	method: string;
	body?: BodyInit | null;
	headers?: HeadersInit;
};

export const executeAPI = async <T>({ url, method, body, headers }: RequestProps): Promise<T> => {
	if (!process.env.EXPO_PUBLIC_API_URL) {
		throw new Error('API_URL is not defined');
	}

	const response = await fetch(`${process.env.EXPO_PUBLIC_API_URL}/${url}`, {
		method,
		body,
		headers: {
			accept: 'application/vnd.github+json',
			'X-GitHub-Api-Version': '2022-11-28',
			Authorization: `Bearer ${process.env.EXPO_PUBLIC_ACCESS_TOKEN}`,
			...headers,
		},
	});

	if (!response.ok) {
		throw new Error('Failed to fetch data');
	}

	return response.json();
};
