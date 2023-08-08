import { useContext } from 'react';
import { PagesContext } from 'src/context/pages';

import type { PagesContext as PagesContextProps } from 'src/types/pages';

const usePagesProvider = () => {
	const { tag, posts, category } = useContext(PagesContext) as PagesContextProps;

	return { tag, posts, category };
};

export default usePagesProvider;
