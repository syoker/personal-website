/** @type {import('next').NextConfig} */

import nextTranslate from 'next-translate-plugin';

const nextConfig = nextTranslate({
	reactStrictMode: true,
	pageExtensions: ['ts', 'tsx', 'js', 'jsx', 'md', 'mdx'],
	images: {
		remotePatterns: [
			{
				protocol: 'https',
				hostname: 'img.shields.io',
			},
			{
				protocol: 'https',
				hostname: 'raw.githubusercontent.com',
				pathname: '/Syoker/**',
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
		],
	},
});

export default nextConfig;
