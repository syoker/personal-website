import '~/styles/app/reset.css';
import '~/styles/app/theme.css';
import '~/styles/app/globals.css';

import type { AppProps } from 'next/app';
import { Analytics } from '@vercel/analytics/react';
import { CustomToaster, Languages, Header } from '~/components/app';

import dayjs from 'dayjs';
import localizedFormat from 'dayjs/plugin/localizedFormat';

export default function App({ Component, pageProps }: AppProps) {
	dayjs.extend(localizedFormat);

	return (
		<Languages validLanguages={['en', 'es']}>
			<Header />
			<Analytics />
			<CustomToaster />
			<Component {...pageProps} />
		</Languages>
	);
}
