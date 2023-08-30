type Users = {
	[key: string]: {
		url: string;
		name: string;
		alias: string;
		avatar: string;
	};
};

const USERS: Users = {
	syoker: {
		url: 'https://github.com/syoker',
		name: 'Syoker',
		alias: '@syoker',
		avatar: 'https://avatars.githubusercontent.com/u/61765318?v=4',
	},
};

export default USERS;
