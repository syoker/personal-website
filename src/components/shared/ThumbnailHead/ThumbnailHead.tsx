import NextHead from 'next/head';

const ThumbnailHead = ({ children }: { children?: string | undefined }) => {
	return (
		<NextHead>
			<meta property="og:image" content={children} />
		</NextHead>
	);
};

export default ThumbnailHead;
