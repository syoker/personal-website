import type { MetaData } from '~/types/shared';

type METADATA = {
	[key: string]: {
		[key: string]: MetaData;
	};
};

const METADATA: METADATA = {
	'/': {
		en: {
			title: 'Syoker',
			description: 'A web developer who likes watching anime and reading manga.',
			url: 'https://syoker.vercel.app',
			thumbnail: 'https://raw.githubusercontent.com/syoker/personal-website/main/public/images/social-share.png',
		},
		es: {
			title: 'Syoker',
			description: 'Un desarrollador web al que le gusta ver anime y leer manga',
			url: 'https://syoker.vercel.app/es',
			thumbnail: 'https://raw.githubusercontent.com/syoker/personal-website/main/public/images/social-share.png',
		},
	},
	'/blog': {
		en: {
			title: 'Blog',
			description: 'All my posts, this includes guides and others.',
			url: 'https://syoker.vercel.app/blog',
			thumbnail: 'https://raw.githubusercontent.com/syoker/personal-website/main/public/images/social-share.png',
		},
		es: {
			title: 'Blog',
			description: 'Todos mis posts, esto incluye guías y otros.',
			url: 'https://syoker.vercel.app/es/blog',
			thumbnail: 'https://raw.githubusercontent.com/syoker/personal-website/main/public/images/social-share.png',
		},
	},
	'/blog/astro': {
		en: {
			title: 'Motorola One Fusion',
			description: 'All my posts about the Motorola One Fusion',
			url: 'https://syoker.vercel.app/blog/astro',
			thumbnail: 'https://raw.githubusercontent.com/syoker/personal-website/main/public/images/astro.png',
		},
		es: {
			title: 'Motorola One Fusion',
			description: 'Todos mis posts sobre el Motorola One Fusion',
			url: 'https://syoker.vercel.app/es/blog/astro',
			thumbnail: 'https://raw.githubusercontent.com/syoker/personal-website/main/public/images/astro.png',
		},
	},
	'/blog/guide': {
		en: {
			title: 'Guides',
			description: 'All my guides',
			url: 'https://syoker.vercel.app/blog/guide',
			thumbnail: 'https://raw.githubusercontent.com/syoker/personal-website/main/public/images/social-share.png',
		},
		es: {
			title: 'Guías',
			description: 'Todas mis guías',
			url: 'https://syoker.vercel.app/es/blog/guide',
			thumbnail: 'https://raw.githubusercontent.com/syoker/personal-website/main/public/images/social-share.png',
		},
	},
};

export default METADATA;
