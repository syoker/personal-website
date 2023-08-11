import type { ReactNode } from 'react';

export type ValidLanguages = {
	[key: string]: {
		language: string;
		icon: ReactNode;
	};
};
