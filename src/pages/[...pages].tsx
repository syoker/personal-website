import { compile } from '@mdx-js/mdx';
import { METADATA } from '~/constants/shared';
import { useRouter } from 'next/router';
import { CustomHead } from '~/components/shared';
import { isPostOpen } from '~/functions/pages-client-side';
import { PageDataProvider } from '~/providers';
import { getPosts, getPaths } from '~/functions/pages-server-side';
import { Article, Tags, Posts } from '~/components/pages';

import type { Post } from '~/types/pages';
import type { GetStaticPaths, GetStaticPathsContext, GetStaticProps } from 'next';

import path from 'path';
import useTranslation from 'next-translate/useTranslation';

import styles from '~/styles/pages.module.css';

export default function Pages({ posts }: { posts: Post[] }) {
	const { asPath } = useRouter();
	const { lang } = useTranslation('pages');

	return (
		<PageDataProvider posts={posts}>
			{isPostOpen(posts, asPath) ? (
				<main className={styles['pages']}>
					<Article />
				</main>
			) : (
				<CustomHead properties={METADATA[asPath][lang]}>
					<main className={styles['pages']}>
						<Tags />
						<Posts key={asPath} />
					</main>
				</CustomHead>
			)}
		</PageDataProvider>
	);
}

export const getStaticPaths: GetStaticPaths = async (context: GetStaticPathsContext) => {
	const paths = await getPaths(context.locales, path.join(process.cwd(), 'src', 'posts'));

	return {
		paths: paths,
		fallback: false,
	};
};

export const getStaticProps: GetStaticProps = async () => {
	const posts = await getPosts(path.join(process.cwd(), 'src', 'posts'));

	for (const post of posts) {
		post.markdown = String(
			await compile(post.markdown, {
				outputFormat: 'function-body',
				development: false,
			}),
		);
	}

	return {
		props: {
			posts: posts,
		},
	};
};
