import path from 'path';
import fs from 'fs/promises';

const getPaths = async (basePath: string, locales: string[] | undefined, markdownDirectory: string) => {
	const paths = ['/' + basePath];

	const directory = path.join(markdownDirectory, basePath);

	for (const locale of locales ?? []) {
		paths.push('/' + locale + '/' + basePath);
	}

	const posts = await fs.readdir(directory);

	for (const post of posts) {
		const languages = await fs.readdir(path.join(directory, post));

		for (const language of languages) {
			const markdown = (await fs.readFile(path.join(directory, post, language))).toString('utf-8');

			const tags = (markdown.match(/tags: (.*)/) || ['', ''])[1].split(', ');

			for (const tag of tags) {
				paths.push('/' + basePath + '/' + tag);
				paths.push('/' + basePath + '/' + tag + '/' + post);

				for (const locale of locales ?? []) {
					paths.push('/' + locale + '/' + basePath + '/' + tag);

					if (locale === language.slice(0, 2)) {
						paths.push('/' + locale + '/' + basePath + '/' + tag + '/' + post);
					}
				}
			}
		}
	}

	return paths.filter((path, index) => {
		return index === paths.findIndex((a) => a === path);
	});
};

export default getPaths;
