import { UserItem } from '@/types/Users';
import { Repos } from '@/types/Repos';

export type Category = UserItem & {
	content: Repos[];
};

export type Data = Category[];

export const data: Data = [
	{
		id: 33509305,
		login: 'k-czech',
		content: [
			{
				id: 327323917,
				name: 'awesome-seo',
				html_url: 'https://github.com/madawei2699/awesome-seo',
				description: 'Google SEO Research and Web Traffic Monetization',
				created_at: '2021-01-06T13:43:25Z',
				stargazers_count: 2234,
				visibility: 'public',
				forks: 266,
				watchers: 2234,
				default_branch: 'main',
			},
		],
		avatar_url: 'https://avatars.githubusercontent.com/u/33509305?v=4',
		html_url: 'https://github.com/k-czech',
	},
];
