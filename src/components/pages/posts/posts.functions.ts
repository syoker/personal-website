import type { Post } from '~/types/pages';

import dayjs from 'dayjs';

export const getPostsToRender = (posts: Post[], tag: string | undefined) => {
	const postsInCurrentTag = tag ? posts.filter((post) => post.tags.includes(tag)) : posts;

	return postsInCurrentTag.sort((a, b) => (dayjs(b.created).isBefore(dayjs(a.created)) ? -1 : 1));
};
