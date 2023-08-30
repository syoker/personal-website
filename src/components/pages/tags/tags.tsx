import { usePageData } from '~/providers';
import { getTags } from './tags.functions';

import Tag from './tag/tag';

import styles from './tags.module.css';

const Tags = () => {
	const { posts } = usePageData();

	const tags = getTags(posts);

	return (
		<nav className={styles['tags']}>
			<Tag>all</Tag>
			{tags.map((tag, index) => (
				<Tag key={index}>{tag}</Tag>
			))}
		</nav>
	);
};

export default Tags;
