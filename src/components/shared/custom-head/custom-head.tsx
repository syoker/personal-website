import type { ReactNode } from 'react';
import type { MetaData } from '~/types/shared';

import NextHead from 'next/head';

interface CustomHeadProps {
	children?: ReactNode;
	properties?: MetaData;
}

const CustomHead = ({ children, properties }: CustomHeadProps) => {
	return (
		<>
			<NextHead>
				<title>{properties?.title}</title>
				<meta property="og:title" content={properties?.title} />

				<meta name="description" content={properties?.description} />
				<meta property="og:description" content={properties?.description} />

				<meta property="og:url" content={properties?.url} />

				<meta property="og:image" content={properties?.thumbnail} />
			</NextHead>
			{children}
		</>
	);
};

export default CustomHead;
