import 'src/styles/reset.css';
import 'src/styles/body.css';
import 'public/fonts/inter.css';
import 'public/fonts/source-code-pro.css';

import { useEffect } from 'react';
import { Analytics } from '@vercel/analytics/react';
import { StyledEngineProvider } from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';

import setLanguage from 'next-translate/setLanguage';

import type { AppProps } from 'next/app';

const theme = createTheme({
	palette: {
		mode:
			typeof window !== 'undefined'
				? window.matchMedia('(prefers-color-scheme: dark)').matches
					? 'dark'
					: 'light'
				: 'light',
	},
});

export default function App({ Component, pageProps }: AppProps) {
	useEffect(() => {
		if (typeof window === 'undefined') return;

		const language = ['en', 'es'].find((lang) => {
			return window.navigator.language.startsWith(lang);
		});

		setLanguage(language ?? 'en');
	}, []);

	return (
		<ThemeProvider theme={theme}>
			<StyledEngineProvider injectFirst>
				<Component {...pageProps} />
				<Analytics />
			</StyledEngineProvider>
		</ThemeProvider>
	);
}
