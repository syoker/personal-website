import type { Post } from 'src/types/pages';

import path from 'path';
import fs from 'fs/promises';

const removeLines = (properties: string[], markdown: string) => {
	for (const property of properties) {
		const pattern = new RegExp(`^${property}:.*\n`, 'gm');
		markdown = markdown.replace(pattern, '');
	}

	for (let i = 0; i <= 1; i++) {
		markdown = markdown.replace(/!--/g, '');
	}

	return markdown;
};

const getValues = (property: string, markdown: string) => {
	const pattern = new RegExp(`${property}: (.*)`);

	return markdown.match(pattern)?.[1] || null;
};

const getPosts = async (basePath: 'blog' | 'projects', markdownDirectory: string) => {
	const directory = path.join(markdownDirectory, basePath);

	const postsNames = await fs.readdir(directory);

	const posts: Post[] = [];

	for (const post of postsNames) {
		const languages = await fs.readdir(path.join(directory, post));

		for (const language of languages) {
			const markdown = (await fs.readFile(path.join(directory, post, language))).toString('utf-8');
			const metadata = ['author', 'title', 'banner', 'description', 'tags', 'created', 'url', 'readme', 'contributors'];

			if (basePath === 'blog') {
				const newPost: Post = {
					tags: getValues('tags', markdown)?.split(', ') || [''],
					title: getValues('title', markdown) || '',
					alias: post,
					banner: getValues('banner', markdown) || '',
					author: getValues('author', markdown) || '',
					created: getValues('created', markdown) || '',
					markdown: removeLines(metadata, markdown),
					category: 'blog',
					language: language.slice(0, 2),
					description: getValues('description', markdown) || '',
					contributors: getValues('contributors', markdown)?.split(', ') || null,
				};

				posts.push(newPost);
			}

			if (basePath === 'projects') {
				const downloadedMarkdown = await (await fetch(getValues('readme', markdown) || '')).text();

				const newPost: Post = {
					url: getValues('url', markdown) || '',
					tags: getValues('tags', markdown)?.split(', ') || [''],
					title: getValues('title', markdown) || '',
					alias: post,
					readme: getValues('readme', markdown) || '',
					banner: getValues('banner', markdown) || '',
					author: getValues('author', markdown) || '',
					created: getValues('created', markdown) || '',
					markdown: downloadedMarkdown.replace(/^[^\n]*\n/, ''),
					category: 'projects',
					language: language.slice(0, 2),
					description: getValues('description', markdown) || '',
					contributors: getValues('contributors', markdown)?.split(', ') || null,
				};

				posts.push(newPost);
			}
		}
	}

	return posts.filter((post, index) => {
		return index === posts.findIndex((a) => a === post);
	});
};

export default getPosts;
