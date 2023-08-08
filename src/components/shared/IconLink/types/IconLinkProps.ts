import type { LinkProps } from 'next/link';
import type { ReactAnchor } from 'src/types/shared';

type ReactAnchorClone = {
	[K in keyof Omit<ReactAnchor, 'href' | 'ref'>]: ReactAnchor[K];
};

export type IconLinkProps = ReactAnchorClone & LinkProps;
