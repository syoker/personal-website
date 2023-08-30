import { VscJson } from 'react-icons/vsc';
import { RiTerminalLine } from 'react-icons/ri';
import { SiJavascript, SiDotenv } from 'react-icons/si';

import type { ReactNode } from 'react';

type Languages = {
	[key: string]: {
		language: string;
		icon: ReactNode;
	};
};

const LANGUAGES: Languages = {
	'language-bash': {
		language: 'bash',
		icon: <RiTerminalLine />,
	},
	'language-js': {
		language: 'javascript',
		icon: <SiJavascript />,
	},
	'language-javascript': {
		language: 'javascript',
		icon: <SiJavascript />,
	},
	'language-json': {
		language: 'json',
		icon: <VscJson />,
	},
	'language-jsonc': {
		language: 'jsonc',
		icon: <VscJson />,
	},
	'language-1c': {
		language: 'jsonc',
		icon: <VscJson />,
	},
	'language-dotenv': {
		language: 'dotenv',
		icon: <SiDotenv />,
	},
};

export default LANGUAGES;
