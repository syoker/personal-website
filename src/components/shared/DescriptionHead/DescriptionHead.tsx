import NextHead from 'next/head';

const DescriptionHead = ({ children }: { children?: string | undefined }) => {
	return (
		<NextHead>
			<meta name="description" content={children} />
			<meta property="og:description" content={children} />
		</NextHead>
	);
};

export default DescriptionHead;
