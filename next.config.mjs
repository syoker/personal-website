/** @type {import('next').NextConfig} */

import nextTranslate from 'next-translate-plugin';

const nextConfig = nextTranslate({
	reactStrictMode: true,
	images: {
		remotePatterns: [
			{
				protocol: 'https',
				hostname: 'img.shields.io',
			},
			{
				protocol: 'https',
				hostname: 'raw.githubusercontent.com',
				port: '',
				pathname: '/rickruad/proyecto-de-residencias/main/.github/images/**',
			},
			{
				protocol: 'https',
				hostname: 'opengraph.githubassets.com',
			},
			{
				protocol: 'https',
				hostname: 'pbs.twimg.com',
			},
			{
				protocol: 'https',
				hostname: 'avatars.githubusercontent.com',
			},
			{
				protocol: 'https',
				hostname: 'repository-images.githubusercontent.com',
			},
		],
	},
});

export default nextConfig;
