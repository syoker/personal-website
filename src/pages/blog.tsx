import { CardTheme } from 'src/components/Blog';
import useTranslation from 'next-translate/useTranslation';

import { Head } from 'src/components/shared';

import styles from 'src/styles/Blog.module.css';

export default function Blog() {
	const { t } = useTranslation('blog');

	return (
		<>
			<Head
				title="Blog"
				description="In this section I will be adding all the topics of the guides I make."
				ogUrl="https://syoker.vercel.app/blog"
				ogTitle="Blog"
				ogDescription="In this section I will be adding all the topics of the guides I make."
				ogImage="https://raw.githubusercontent.com/Syoker/syoker.github.io/main/public/img/banner-socialshare.png"
			/>

			<section className={styles.blog}>
				<article className={styles.data}>
					<h2>{t('title-blog')}</h2>
					<p>{t('blog-additional-information')}</p>
				</article>
				<article className={styles.topics}>
					<CardTheme
						banner="/img/banner-motorolaonefusion.png"
						title="Motorola One Fusion"
						description={t('motorola-one-fusion-description')}
						link="/blog/motorolaonefusion"
					/>
				</article>
			</section>
		</>
	);
}
