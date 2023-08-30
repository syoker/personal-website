import type { ReactElement } from '~/types/shared';

type ReactElementFiltered = {
	[K in keyof Omit<ReactElement, 'style' | 'className'>]: ReactElement[K];
};

export type Indicator = ReactElementFiltered & {
	width: number;
	position: number;
};
