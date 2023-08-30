import type { Post } from '~/types/pages';

const isPostOpen = (posts: Post[], path: string) => {
	const pages: string[] = ['/blog'];

	for (const post of posts) {
		for (const tag of post.tags) {
			pages.push(`/blog/${tag}`);
		}
	}

	return !pages.includes(path);
};

export default isPostOpen;
