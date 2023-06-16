const withMDX = require('@next/mdx')({
	extension: /\.mdx?$/,
	options: {
		remarkPlugins: [],
		rehypePlugins: [],
	},
});

/** @type {import('next').NextConfig} */
const nextTranslate = require('next-translate-plugin');

const nextConfig = nextTranslate({
	reactStrictMode: true,
	output: 'export',
	pageExtensions: ['ts', 'tsx', 'js', 'jsx', 'md', 'mdx'],
	images: {
		remotePatterns: [
			{
				protocol: 'https',
				hostname: 'opengraph.githubassets.com',
			},
		],
	},
});

module.exports = withMDX(nextConfig);
