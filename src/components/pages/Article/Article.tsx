import { useRouter } from 'next/router';
import { runSync } from '@mdx-js/mdx/lib/run';
import { usePagesProvider } from 'src/hooks/pages';
import { NameHead, RouteHead, DescriptionHead } from 'src/components/shared';

import Wrapper from './components/Wrapper';
import MarkdownComponents from 'src/components/markdown';
import useTranslation from 'next-translate/useTranslation';
import Introduction from './components/Introduction/Introduction';

import * as runtime from 'react/jsx-runtime';

const Article = () => {
	const { asPath } = useRouter();
	const { lang } = useTranslation();
	const { tag, posts, category } = usePagesProvider();

	const post = posts.filter((post) => `/${category}/${tag}/${post.alias}` === asPath)[0];

	const { default: RenderMarkdown } = runSync(post.markdown, runtime);

	return (
		<>
			<NameHead>{post.title}</NameHead>
			<RouteHead>{`https://test-azure-theta-50.vercel.app${lang === 'es' ? '/es' : ''}/${category}/${tag}`}</RouteHead>
			<DescriptionHead>{post.description}</DescriptionHead>

			<Introduction post={post} />
			<Wrapper>
				<RenderMarkdown components={MarkdownComponents} />
			</Wrapper>
		</>
	);
};

export default Article;
