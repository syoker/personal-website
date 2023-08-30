import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
	return (
		<Html lang="en">
			<Head>
				<meta httpEquiv="X-UA-Compatible" content="IE=edge" />

				<meta name="theme-color" media="(prefers-color-scheme: dark)" content="#191c1a" />
				<meta name="theme-color" media="(prefers-color-scheme: light)" content="#fbfdf8" />

				<link rel="icon" media="(prefers-color-scheme: dark)" href="/icon/favicon-white.ico" />
				<link rel="icon" media="(prefers-color-scheme: light)" href="/icon/favicon-black.ico" />

				<meta property="og:type" content="website" />
			</Head>
			<body>
				<Main />
				<NextScript />
			</body>
		</Html>
	);
}
