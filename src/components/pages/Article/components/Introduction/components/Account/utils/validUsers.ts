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
		url: 'https://github.com/syoker',
		name: 'Syoker',
		alias: '@syoker',
		avatar: 'https://avatars.githubusercontent.com/u/61765318?v=4',
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
