import { runSync } from '@mdx-js/mdx';
import { useRouter } from 'next/router';
import { CustomHead } from '~/components/shared';
import { usePageData } from '~/providers';

import * as runtime from 'react/jsx-runtime';

import styles from './article.module.css';
import components from '~/components/markdown';
import Introduction from './introduction/introduction';
import useTranslation from 'next-translate/useTranslation';

const Article = () => {
	const { asPath } = useRouter();
	const { lang } = useTranslation();
	const { posts, tag } = usePageData();

	const post = posts.filter((post) => `/blog/${tag}/${post.alias}` === asPath)[0];

	const { default: RenderMarkdown } = runSync(post.markdown, runtime);

	const properties = {
		title: post.title,
		description: post.description,
		url: `https://syoker.vercel.app${lang === 'es' ? '/es' : ''}/blog/${tag}`,
	};

	return (
		<CustomHead properties={properties}>
			<Introduction post={post} />
			<article className={styles['article']}>
				<RenderMarkdown components={components} />
			</article>
		</CustomHead>
	);
};

export default Article;
