import NextHead from 'next/head';

const RouteHead = ({ children }: { children?: string | undefined }) => {
	return (
		<NextHead>
			<meta property="og:url" content={children} />
		</NextHead>
	);
};

export default RouteHead;
