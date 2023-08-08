import { compile } from '@mdx-js/mdx';
import { useRouter } from 'next/router';
import { getPosts, getPaths } from 'src/utils/serverSide';
import { headPage, getValidPages } from 'src/utils/pages';
import { Categories, Posts, Article, Wrapper, PagesProvider } from 'src/components/pages';
import { NameHead, DescriptionHead, RouteHead, ThumbnailHead } from 'src/components/shared';

import type { Post } from 'src/types/pages';
import type { GetStaticPaths, GetStaticPathsContext, GetStaticProps } from 'next';

import path from 'path';
import useTranslation from 'next-translate/useTranslation';

export default function Pages({ posts }: { posts: Post[] }) {
	const { query, asPath } = useRouter();
	const { lang, t } = useTranslation('pages');

	const validPages = getValidPages(posts);
	const resolvedPosts = posts.filter((post) => post.language === lang);

	const tag = query['pages']?.[1] || '';
	const category = query['pages']?.[0] || '';

	return (
		<PagesProvider tag={tag} posts={resolvedPosts} category={category}>
			<ThumbnailHead>{headPage[category].thumbnail}</ThumbnailHead>
			<DescriptionHead>{t(headPage[category].description)}</DescriptionHead>

			{query['pages']?.[1] ? (
				<>
					<NameHead>{t(tag)}</NameHead>
					<RouteHead>{`${t(headPage[category].route)}/${tag}`}</RouteHead>
				</>
			) : (
				<>
					<NameHead>{t(headPage[category].title)}</NameHead>
					<RouteHead>{t(headPage[category].route)}</RouteHead>
				</>
			)}

			<Wrapper>
				{validPages.includes(asPath) && <Categories key={category} />}
				{validPages.includes(asPath) && <Posts key={asPath} />}
				{!validPages.includes(asPath) && <Article />}
			</Wrapper>
		</PagesProvider>
	);
}

export const getStaticPaths: GetStaticPaths = async (context: GetStaticPathsContext) => {
	const { locales } = context;

	const directory = path.join(process.cwd(), 'public', 'markdown');

	const paths = [await getPaths('blog', locales, directory), await getPaths('projects', locales, directory)].flat();

	return {
		paths: paths,
		fallback: false,
	};
};

export const getStaticProps: GetStaticProps = async () => {
	const directory = path.join(process.cwd(), 'public', 'markdown');

	const posts = [await getPosts('blog', directory), await getPosts('projects', directory)].flat();

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
