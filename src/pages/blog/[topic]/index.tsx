import { useRouter } from 'next/router';

import { ValidPages } from 'src/types';
import { Error404 } from 'src/components/shared';
import { MotorolaOneFusion } from 'src/components/Topic';

export default function Topic() {
	const router = useRouter();
	const pathname = router.asPath;

	const validPages: ValidPages = {
		'/blog/motorolaonefusion': <MotorolaOneFusion />,
	};

	return <>{validPages[pathname] || <Error404 />}</>;
}
