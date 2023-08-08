import { Fragment } from 'react';
import { usePagesProvider } from 'src/hooks/pages';

import dayjs from 'dayjs';
import Post from './components/Post/Post';
import Wrapper from './components/Wrapper';

const Posts = () => {
	const { tag, posts, category } = usePagesProvider();

	const activeCategory = category ? posts.filter((post) => post.category === category) : posts;
	const activeTag = tag ? activeCategory.filter((renderPost) => renderPost.tags.includes(tag)) : activeCategory;

	const renderPosts = activeTag
		.sort((a, b) => (dayjs(b.created).isBefore(dayjs(a.created)) ? -1 : 1))
		.map((post, index) => (
			<Fragment key={index}>
				<Post key={index} category={post.category} tag={tag || post.tags[0]} post={post} />
				{activeTag.length > index + 1 && <span className="line" />}
			</Fragment>
		));

	const gridTemplateColumnsOne =
		renderPosts.length === 1 ? 'repeat(2, minmax(21rem, 1fr))' : 'repeat(auto-fit, minmax(21rem, 1fr))';

	const gridTemplateColumnsTwo =
		renderPosts.length === 1 ? 'repeat(3, minmax(21rem, 1fr))' : 'repeat(auto-fit, minmax(21rem, 1fr))';

	const style = {
		'--grid-template-columns-1': gridTemplateColumnsOne,
		'--grid-template-columns-2': gridTemplateColumnsTwo,
	};

	// @ts-expect-error ignore
	return <Wrapper style={style}>{renderPosts}</Wrapper>;
};

export default Posts;
