import type { ReactNode } from 'react';

export const getResolvedLinesAndTitle = (code: ReactNode) => {
	const resolvedCode: string = Array.isArray(code) ? code[0] : code || '';

	if (typeof resolvedCode === 'string') {
		const resolvedLines = resolvedCode.split('\n') || [''];
		let resolvedTitle = resolvedLines[0].startsWith('// ') ? resolvedLines[0].slice(3) : undefined;

		if (!resolvedTitle) {
			resolvedTitle = resolvedLines[0].startsWith('# ') ? resolvedLines[0].slice(2) : undefined;
		}

		return { lines: resolvedLines.slice(1), resolvedTitle };
	}

	const resolvedLines = [''];
	const resolvedTitle = undefined;

	return { lines: resolvedLines, resolvedTitle };
};
