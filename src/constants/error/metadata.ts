import type { MetaData } from '~/types/shared';

type METADATA = {
	error404: {
		[key: string]: MetaData & {
			redirect?: string;
			redirectURL?: string;
		};
	};
	error500: {
		[key: string]: MetaData;
	};
};

const METADATA: METADATA = {
	error404: {
		en: {
			title: 'Error 404 | Page not found',
			description: 'Page not found',
			redirect: 'Maybe you wanted to go to the following link: ',
			redirectURL: 'https://syoker.vercel.app/blog/astro',
		},
		es: {
			title: 'Error 404 | Página no encontrada',
			description: 'Página no encontrada',
			redirect: 'Tal vez querías ir al siguiente enlace: ',
			redirectURL: 'https://syoker.vercel.app/es/blog/astro',
		},
	},
	error500: {
		en: {
			title: 'Error 500 | Internal server error',
			description: 'Internal server error',
		},
		es: {
			title: 'Error 500 | Error interno del servidor',
			description: 'Error interno del servidor',
		},
	},
};

export default METADATA;
