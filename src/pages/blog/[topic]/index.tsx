import { useRouter } from 'next/router';

import { ValidPages } from 'src/types';
import { Header } from 'src/components/shared';
import { MotorolaOneFusion } from 'src/components/Topic';
import { useEffect } from 'react';

export default function Topic() {
	const router = useRouter();

	useEffect(() => {
		const validPages: ValidPages = {
			'/blog/motorolaonefusion': <MotorolaOneFusion />,
		};

		if (!validPages[router.asPath]) {
			router.push('/404');
		}
	}, [router]);

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
