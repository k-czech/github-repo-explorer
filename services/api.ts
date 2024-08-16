import CONFIG from '@/config';

type RequestProps = {
	url: string;
	method: string;
	body?: BodyInit | null;
	headers?: HeadersInit;
};

export const executeAPI = async <T>({ url, method, body, headers }: RequestProps): Promise<T> => {
	if (!CONFIG.BASE_URL) {
		throw new Error('BASE_URL is not defined');
	}
	const response = await fetch(`${CONFIG.BASE_URL}/${url}`, {
		method,
		body,
		headers: {
			accept: 'application/vnd.github+json',
			'X-GitHub-Api-Version': '2022-11-28',
			...headers,
		},
	});

	return response.json();
};
