import type { GetServerSidePropsContext, GetServerSideProps } from 'next';

import { useRouter } from 'next/router';

import { ValidPages } from 'src/types';
import { Header } from 'src/components/shared';
import { MotorolaOneFusion } from 'src/components/Topic';

export default function Topic({ path }: { path: string }) {
	const router = useRouter();

	const validPages: ValidPages = {
		'/blog/motorolaonefusion': <MotorolaOneFusion />,
	};

	return (
		<>
			<Header pathname={router.asPath} />
			{validPages[router.asPath]}
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
