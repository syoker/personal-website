import type { ReactNode } from 'react';
import { PagesContext } from 'src/context/pages';

import type { Post } from 'src/types/pages';

interface PagesProviderProps {
	tag: string | undefined;
	posts: Post[];
	category: string | undefined;
	children: ReactNode;
}

const PagesProvider = ({ tag, posts, category, children }: PagesProviderProps) => {
	return <PagesContext.Provider value={{ tag, posts, category }}>{children}</PagesContext.Provider>;
};

export default PagesProvider;
