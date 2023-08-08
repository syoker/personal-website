import NextHead from 'next/head';

const NameHead = ({ children }: { children?: string | undefined }) => {
	return (
		<NextHead>
			<title>{children}</title>
			<meta property="og:title" content={children} />
		</NextHead>
	);
};

export default NameHead;
