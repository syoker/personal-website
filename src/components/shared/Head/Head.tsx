import NextHead from 'next/head';

interface HeadProps {
	title: string;
	description?: string;
	ogUrl?: string;
	ogTitle?: string;
	ogDescription?: string;
	ogImage?: string;
}

export default function Head({ title, description, ogUrl, ogTitle, ogDescription, ogImage }: HeadProps) {
	return (
		<NextHead>
			<meta charSet="UTF-8" />
			<meta httpEquiv="X-UA-Compatible" content="IE=edge" />
			<meta name="viewport" content="width=device-width, initial-scale=1.0" />

			<title>{title}</title>
			<meta name="description" content={description} />
			<link rel="icon" href="/icon/favicon.ico" />

			{/* for social media */}
			<meta property="og:type" content="website" />
			<meta property="og:url" content={ogUrl} />
			<meta property="og:title" content={ogTitle} />
			<meta property="og:description" content={ogDescription} />
			<meta property="og:image" content={ogImage} />
		</NextHead>
	);
}
