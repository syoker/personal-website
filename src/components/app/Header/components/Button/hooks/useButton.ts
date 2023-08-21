import { useRouter } from 'next/router';
import { useWindowSize } from 'usehooks-ts';
import { useEffect, useState, useRef } from 'react';

const useButton = (basePath: string) => {
	const { asPath, query } = useRouter();
	const { width } = useWindowSize();
	const buttonRef = useRef<HTMLAnchorElement | null>(null);

	const [buttonWidth, setButtonWidth] = useState(0);
	const [buttonPosition, setButtonPosition] = useState(0);

	useEffect(() => {
		const ref = buttonRef.current;
		const pages = asPath === '/' ? ['home'] : asPath.split('/').filter(Boolean);

		if (pages[0] === basePath) {
			setButtonPosition(ref?.getBoundingClientRect().x || 0);
			setButtonWidth(ref?.getBoundingClientRect().width || 0);
		} else {
			setButtonWidth(0);
			setButtonPosition(0);
		}
	}, [asPath, basePath, width, query]);

	return { buttonRef, buttonWidth, buttonPosition };
};

export default useButton;
