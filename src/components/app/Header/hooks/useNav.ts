import { useRouter } from 'next/router';
import { useWindowSize } from 'usehooks-ts';
import { useState, useRef, useEffect } from 'react';

const useNav = () => {
	const { asPath } = useRouter();
	const { width } = useWindowSize();

	const [navPosition, setNavPosition] = useState(0);
	const navRef = useRef<HTMLDivElement | null>(null);

	useEffect(() => {
		const ref = navRef.current;

		setNavPosition(ref?.getBoundingClientRect().x || 0);
	}, [width, asPath]);

	return { navRef, navPosition };
};

export default useNav;
