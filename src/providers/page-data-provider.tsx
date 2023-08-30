import { useRouter } from 'next/router';
import type { Post } from '~/types/pages';
import { createContext, type ReactNode } from 'react';

import useTranslation from 'next-translate/useTranslation';

type PageDataContext = {
	tag: string | undefined;
	posts: Post[];
};

const PageDataContext = createContext<PageDataContext | null>(null);

interface PageDataProviderProps {
	posts: Post[];
	children: ReactNode;
}

export const PageDataProvider = ({ posts, children }: PageDataProviderProps) => {
	const { query } = useRouter();
	const { lang } = useTranslation();

	const tag = query['pages']?.[1] || '';

	const resolvedPosts = posts.filter((post) => post.language === lang);

	return <PageDataContext.Provider value={{ tag: tag, posts: resolvedPosts }}>{children}</PageDataContext.Provider>;
};

import { useContext } from 'react';

export const usePageData = () => {
	const { tag, posts } = useContext(PageDataContext) as PageDataContext;

	return { tag, posts };
};
