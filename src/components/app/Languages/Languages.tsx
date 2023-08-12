import { useState, useEffect } from 'react';
import { compareArrays } from 'src/utils/shared';
import type { ReactNode } from '@mdx-js/react/lib';

import setLanguage from 'next-translate/setLanguage';

const Languages = ({ validLanguages, children }: { validLanguages: string[]; children: ReactNode }) => {
	const [languages, setLanguages] = useState(validLanguages);

	if (!compareArrays(validLanguages, languages)) {
		setLanguages(validLanguages);
	}

	useEffect(() => {
		if (typeof window === 'undefined') return;

		const language = languages.find((lang) => {
			return window.navigator.language.startsWith(lang);
		});

		setLanguage(language ?? 'en');
	}, [languages]);

	return <>{children}</>;
};

export default Languages;
