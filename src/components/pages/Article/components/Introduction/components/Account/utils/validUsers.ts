type ValidUsers = {
	[key: string]: {
		url: string;
		name: string;
		alias: string;
		avatar: string;
	};
};

const validUsers: ValidUsers = {
	Syoker: {
		url: 'https://twitter.com/Syoker_',
		name: 'Syoker',
		alias: '@Syoker_',
		avatar: 'https://pbs.twimg.com/profile_images/1628276605939220481/Rk3Nfn2x_400x400.jpg',
	},
	nahuelwexd: {
		url: 'https://github.com/nahuelwexd',
		name: 'Nahu',
		alias: '@nahuelwexd',
		avatar: 'https://avatars.githubusercontent.com/u/18204745?v=4',
	},
	rickruad: {
		url: 'https://github.com/rickruad',
		name: 'Ricardo Ruvalcaba A',
		alias: '@rickruad',
		avatar: 'https://avatars.githubusercontent.com/u/13593538?v=4',
	},
};

export default validUsers;
