import type { Post } from '~/types/pages';

import es from 'dayjs/locale/es';
import Link from 'next/link';
import dayjs from 'dayjs';
import Image from 'next/image';
import styles from './introduction.module.css';
import Account from './account/account';
import useTranslation from 'next-translate/useTranslation';

type Date = {
	[key: string]: string;
};

const Introduction = ({ post }: { post: Post }) => {
	const { t, lang } = useTranslation('pages');

	const date: Date = {
		en: dayjs(post.created).format('LL'),
		es: dayjs(post.created).locale(es).format('LL'),
	};

	return (
		<section className={styles['introduction']}>
			<nav className={styles['tags']}>
				{post.tags.map((tag, index) => (
					<Link key={index} className={styles['tag']} href={`./blog/${tag}`}>
						{t(tag)}
					</Link>
				))}
			</nav>
			<h1 className={styles['title']}>{post.title}</h1>
			<p className={styles['description']}>{post.description}</p>
			<Image
				className={styles['banner']}
				src={post.banner}
				alt={post.title + ' banner'}
				width="1200"
				height="600"
				priority
			/>
			<article className={styles['container']}>
				<div className={styles['users']}>
					<h2 className={styles['title-container']}>{t('author')}</h2>
					<Account username={post.author} />
					{post.contributors && (
						<>
							<h4 className={styles['title-container']}>{t('contributors')}</h4>
							<div className={styles['container-contributors']}>
								{post.contributors.map((contributor, index) => (
									<Account key={index} username={contributor} />
								))}
							</div>
						</>
					)}
				</div>
				<p className={styles['schedule']}>{date[lang]}</p>
			</article>
		</section>
	);
};

export default Introduction;
