import type { ReactNode } from 'react';

const patternURL: RegExp = /https?:\/\/\S+/g;

const useURLParser = (paragraph: ReactNode) => {
	const resolvedParagraph: string = Array.isArray(paragraph) ? paragraph[0] : paragraph || '';

	if (typeof resolvedParagraph === 'string') {
		const urls = resolvedParagraph.match(patternURL) || [''];
		const fragments = resolvedParagraph.split(patternURL) || [''];

		return { fragments, urls };
	}

	const fragments = [''];
	const urls = [''];

	return { fragments, urls };
};

export default useURLParser;
