import type { Post } from 'src/types/pages';

export type PagesContext = {
	tag: string | undefined;
	posts: Post[];
	category: string | undefined;
};
