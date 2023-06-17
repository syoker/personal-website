import 'src/styles/reset.css';
import 'src/styles/body.css';
import 'public/fonts/inter.css';
import 'public/fonts/source-code-pro.css';

import { useEffect } from 'react';
import { useRouter } from 'next/router';
import { Header, Footer } from 'src/components/App';
import { Analytics } from '@vercel/analytics/react';
import { StyledEngineProvider } from '@mui/material';

import setLanguage from 'next-translate/setLanguage';

import type { AppProps } from 'next/app';

export default function App({ Component, pageProps }: AppProps) {
	useEffect(() => {
		if (typeof window === 'undefined') return;

		const language = ['en', 'es'].find((lang) => {
			return window.navigator.language.startsWith(lang);
		});

		setLanguage(language ?? 'en');
	}, []);

	const router = useRouter();

	return (
		<StyledEngineProvider injectFirst>
			<Header pathname={router.asPath} />
			<Component {...pageProps} />
			<Footer />
			<Analytics />
		</StyledEngineProvider>
	);
}
