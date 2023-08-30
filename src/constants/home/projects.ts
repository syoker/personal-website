import type { Project } from '~/types/home';

type Projects = {
	[key: string]: {
		[key: string]: Project;
	};
};

const PROJECTS: Projects = {
	'moto-experience': {
		en: {
			title: 'Moto Experience',
			description: 'This module adds some Motorola applications and features to your GSI.',
			banner: 'https://repository-images.githubusercontent.com/503162602/33dd81b6-3bf2-4959-b731-bd8fb4f01fe2',
			tags: ['Magisk Module', 'Port'],
			host: 'GitHub',
			url: 'https://github.com/syoker/moto-experience',
		},
		es: {
			title: 'Moto Experience',
			description: 'Este módulo añade algunas aplicaciones y características de Motorola a su GSI.',
			banner: 'https://repository-images.githubusercontent.com/503162602/33dd81b6-3bf2-4959-b731-bd8fb4f01fe2',
			tags: ['Módulo de Magisk', 'Port'],
			host: 'GitHub',
			url: 'https://github.com/syoker/moto-experience',
		},
	},
	'proto-app': {
		en: {
			title: 'ProtoApp',
			description: 'A store where you can buy any item related to cinema.',
			banner: 'https://raw.githubusercontent.com/rickruad/proyecto-de-residencias/main/.github/images/readme.png',
			tags: ['NextJS', 'React', 'TypeScript', 'MySQL', 'Next API Routes'],
			host: 'GitHub',
			url: 'https://github.com/rickruad/proyecto-de-residencias',
		},
		es: {
			title: 'ProtoApp',
			description: 'Una tienda en donde puedes comprar cualquier artículo relacionado con el cine.',
			banner: 'https://raw.githubusercontent.com/rickruad/proyecto-de-residencias/main/.github/images/readme.png',
			tags: ['NextJS', 'React', 'TypeScript', 'MySQL', 'Next API Routes'],
			host: 'GitHub',
			url: 'https://github.com/rickruad/proyecto-de-residencias',
		},
	},
	'moto-onefusion-overlay': {
		en: {
			title: 'Motorola One Fusion Overlay',
			description:
				'This module installs all necessary RROs (Runtime Resources Overlays) for the correct function of the GSI in the Motorola One Fusion (A11, A12, A12.1 & A13 ONLY).',
			banner: 'https://repository-images.githubusercontent.com/519018220/6011cece-16cc-4a43-87b6-f0403c201a55',
			tags: ['Magisk Module', 'Overlay', 'Motorola One Fusion'],
			host: 'GitHub',
			url: 'https://github.com/rickruad/proyecto-de-residencias',
		},
		es: {
			title: 'Motorola One Fusion Overlay',
			description:
				'Este módulo instala todos los RROs (Runtime Resources Overlays) necesarios para el correcto funcionamiento de la GSI en el Motorola One Fusion (A11, A12, A12.1 & A13 SOLAMENTE).',
			banner: 'https://repository-images.githubusercontent.com/519018220/6011cece-16cc-4a43-87b6-f0403c201a55',
			tags: ['Módulo de Magisk', 'Overlay', 'Motorola One Fusion'],
			host: 'GitHub',
			url: 'https://github.com/syoker/moto-onefusion-overlay',
		},
	},
	'extra-themed-icons': {
		en: {
			title: 'Extra Themed Icons',
			description: 'This module adds more themed icons than the regular Pixel Launcher has.',
			banner: 'https://repository-images.githubusercontent.com/481416883/0b12ea14-e95f-4bed-b587-b9487eab5eea',
			tags: ['Magisk Module', 'Icons'],
			host: 'GitHub',
			url: 'https://github.com/syoker/extra-themed-icons',
		},
		es: {
			title: 'Extra Themed Icons',
			description: 'Este módulo agrega más iconos temáticos que los que tiene el Pixel Launcher normal.',
			banner: 'https://repository-images.githubusercontent.com/481416883/0b12ea14-e95f-4bed-b587-b9487eab5eea',
			tags: ['Módulo de Magisk', 'Iconos'],
			host: 'GitHub',
			url: 'https://github.com/syoker/extra-themed-icons',
		},
	},
};

export default PROJECTS;
