import type { Post as PostProps } from '~/types/pages';

import dayjs from 'dayjs';
import Link from 'next/link';
import Image from 'next/image';
import es from 'dayjs/locale/es';
import styles from './post.module.css';
import useTranslation from 'next-translate/useTranslation';

type Date = {
	[key: string]: string;
};

const Post = ({ post, tag }: { post: PostProps; tag: string }) => {
	const { lang, t } = useTranslation('pages');

	const date: Date = {
		en: dayjs(post.created).format('LL'),
		es: dayjs(post.created).locale(es).format('LL'),
	};

	return (
		<Link className={styles['post']} href={`/blog/${tag}/${post.alias}`}>
			<span className={styles['background']} />
			<article className={styles['content']}>
				<section className={styles['info']}>
					<Image
						className={styles['banner']}
						src={post.banner}
						alt={post.title + ' banner'}
						height="300"
						width="600"
						priority
					/>
					<div className={styles['tags']}>
						{post.tags.map((tag, index) => (
							<span key={index} aria-label={tag + ' tag'} className={styles['tag']}>
								{t(tag)}
							</span>
						))}
					</div>
					<h3 className={styles['title']}>{post.title}</h3>
					<p className={styles['description']}>{post.description}</p>
				</section>
				<p className={styles['date']}>{date[lang]}</p>
			</article>
		</Link>
	);
};

export default Post;
