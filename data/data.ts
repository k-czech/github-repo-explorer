import {UserItem} from "@/types/Users";

export type Category = UserItem & {
    content: string[];
};

export type Data = Category[];

export const data: Data = [
    {
        id: 33509305,
        login: 'k-czech',
        content: ['Content Category 1'],
        avatar_url: 'https://avatars.githubusercontent.com/u/33509305?v=4',
        html_url: 'https://github.com/k-czech',
    },
];
