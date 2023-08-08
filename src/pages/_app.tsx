import '/public/fonts/heavitas.css';

import 'src/styles/app/fonts.css';
import 'src/styles/app/theme.css';
import 'src/styles/app/reset.css';
import 'src/styles/app/layout.css';
import 'src/styles/app/globals.css';
import 'src/styles/app/animations.css';
import 'src/styles/app/elevations.css';

import type { AppProps } from 'next/app';
import { Analytics } from '@vercel/analytics/react';
import { Languages, Header } from 'src/components/app';

import dayjs from 'dayjs';
import localizedFormat from 'dayjs/plugin/localizedFormat';

export default function App({ Component, pageProps }: AppProps) {
	dayjs.extend(localizedFormat);

	return (
		<>
			<Languages validLanguages={['en', 'es']} />
			<Header />
			<Component {...pageProps} />
			<Analytics />
		</>
	);
}
