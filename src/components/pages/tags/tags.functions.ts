import type { Post } from '~/types/pages';

export const getTags = (posts: Post[]) => {
	const tags = posts.map((post) => post.tags).flat();

	return tags.filter((tag, index, self) => index === self.findIndex((a) => a === tag));
};
