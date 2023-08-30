import type { ReactNode, ReactPortal } from 'react';

import CustomImage from '../custom-image/custom-image';

const hasNonEmptyChildContent = (element: ReactPortal): boolean => {
	const childPortals = element.props.children as ReactPortal[];
	if (!Array.isArray(childPortals)) return false;

	const firstChild = childPortals[0].props.children;
	return firstChild !== '\n';
};

export const shouldRenderCustomImageOnContainer = (elements: ReactNode[]): boolean => {
	let shouldRender = true;

	if (elements.length <= 1) {
		return shouldRender;
	}

	elements.forEach((element) => {
		const customElement = element as ReactPortal;

		if (element && !hasNonEmptyChildContent(customElement)) {
			if (customElement.type !== CustomImage) {
				shouldRender = false;
			}
		}
	});

	return shouldRender;
};
