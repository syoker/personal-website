import type { GetServerSidePropsContext, GetServerSideProps } from 'next';

import { ValidPages } from 'src/types';
import { Header } from 'src/components/shared';
import { MotorolaOneFusion } from 'src/components/Topic';

export default function Topic({ path }: { path: string }) {
	const validPages: ValidPages = {
		'/blog/motorolaonefusion': <MotorolaOneFusion />,
	};

	return (
		<>
			<Header pathname={path} />
			{validPages[path]}
		</>
	);
}

export const getServerSideProps: GetServerSideProps = async (context: GetServerSidePropsContext) => {
	const validPages = ['/blog/motorolaonefusion'];

	if (!validPages.includes(context.resolvedUrl)) {
		return {
			notFound: true,
		};
	}

	return {
		props: {
			path: context.resolvedUrl,
		},
	};
};
