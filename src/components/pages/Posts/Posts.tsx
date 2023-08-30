import { Fragment } from 'react';
import { usePageData } from '~/providers';
import { getPostsToRender } from './posts.functions';

import Post from './post/post';
import styles from './posts.module.css';

const Posts = () => {
	const { posts, tag } = usePageData();

	const renderPosts = getPostsToRender(posts, tag);

	const gridTemplateColumnsOne =
		renderPosts.length === 1 ? 'repeat(2, minmax(21rem, 1fr))' : 'repeat(auto-fit, minmax(21rem, 1fr))';

	const gridTemplateColumnsTwo =
		renderPosts.length === 1 ? 'repeat(3, minmax(21rem, 1fr))' : 'repeat(auto-fit, minmax(21rem, 1fr))';

	const style = {
		'--grid-template-columns-1': gridTemplateColumnsOne,
		'--grid-template-columns-2': gridTemplateColumnsTwo,
	};

	return (
		// @ts-expect-error ignore
		<section className={styles['posts']} style={style}>
			{renderPosts.map((post, index) => (
				<Fragment key={index}>
					<Post key={index} tag={tag || post.tags[0]} post={post} />
					{renderPosts.length > index + 1 && <span className={styles['line']} />}
				</Fragment>
			))}
		</section>
	);
};

export default Posts;
