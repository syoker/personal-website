/* eslint-disable no-mixed-spaces-and-tabs */
export type Post = {
	tags: string[];
	title: string;
	alias: string;
	banner: string;
	author: string;
	created: string;
	markdown: string;
	language: string;
	description: string;
	contributors: string[] | null;
} & (
	| {
			url: string;
			readme: string;
			category: 'projects';
	  }
	| {
			category: 'blog';
	  }
);
