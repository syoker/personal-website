import type { Post } from 'src/types/pages';

const getValidPages = (posts: Post[]) => {
	const validPages: string[] = [];

	for (const post of posts) {
		validPages.push(`/${post.category}`);

		for (const tag of post.tags) {
			validPages.push(`/${post.category}/${tag}`);
		}
	}

	return validPages;
};

export default getValidPages;
