import path from 'path';
import fs from 'fs/promises';

const getPaths = async (locales: string[] | undefined, directory: string) => {
	const paths = ['/blog'];

	for (const locale of locales ?? []) {
		paths.push('/' + locale + '/blog');
	}

	const posts = await fs.readdir(directory);

	for (const post of posts) {
		const languages = await fs.readdir(path.join(directory, post));

		for (const language of languages) {
			const markdown = (await fs.readFile(path.join(directory, post, language))).toString('utf-8');

			const tags = (markdown.match(/tags: (.*)/) || ['', ''])[1].split(', ');

			for (const tag of tags) {
				paths.push('/blog' + '/' + tag);
				paths.push('/blog' + '/' + tag + '/' + post);

				for (const locale of locales ?? []) {
					paths.push('/' + locale + '/blog' + '/' + tag);

					if (locale === language.slice(0, 2)) {
						paths.push('/' + locale + '/blog' + '/' + tag + '/' + post);
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
