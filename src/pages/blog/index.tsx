import useTranslation from 'next-translate/useTranslation';
import type { GetServerSidePropsContext, GetServerSideProps } from 'next';

import { CustomCard, Head, Header, Footer } from 'src/components/shared';

import styles from 'src/styles/Blog.module.css';

export default function Blog({ path }: { path: string }) {
	const { t } = useTranslation('blog');

	return (
		<>
			<Header pathname={path} />

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
					<CustomCard
						banner="/img/banner-motorolaonefusion.png"
						title="Motorola One Fusion"
						description={t('motorola-one-fusion-description')}
						link="/blog/motorolaonefusion"
						sx={{ width: 'calc(50% - 0.5rem)' }}
					/>
				</article>
			</section>

			<Footer path={path} />
		</>
	);
}

export const getServerSideProps: GetServerSideProps = async (context: GetServerSidePropsContext) => {
	return {
		props: {
			path: context.resolvedUrl,
		},
	};
};
