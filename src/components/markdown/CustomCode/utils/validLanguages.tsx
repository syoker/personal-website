import { VscJson } from 'react-icons/vsc';
import { SiJavascript, SiDotenv } from 'react-icons/si';
import { RiTerminalLine } from 'react-icons/ri';

import type { ValidLanguages } from '../types/ValidLanguages';

const validLanguages: ValidLanguages = {
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

export default validLanguages;
