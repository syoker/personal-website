import { GetServerSideProps } from 'next';

import { ValidPages } from 'src/types';
import { Error404 } from 'src/components/shared';
import { MotorolaOneFusion } from 'src/components/Topic';

export const getServerSideProps: GetServerSideProps = async (context) => {
	const pathname = context.resolvedUrl;

	return {
		props: {
			pathname,
		},
	};
};

export default function Topic({ pathname }: { pathname: string }) {
	const validPages: ValidPages = {
		'/blog/motorolaonefusion': <MotorolaOneFusion />,
	};

	return <>{validPages[pathname] || <Error404 />}</>;
}
