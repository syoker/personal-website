import { useRouter } from 'next/router';
import { useWindowSize } from 'usehooks-ts';
import { useState, useEffect, type MutableRefObject } from 'react';

const useReactElement = (reactElement: MutableRefObject<HTMLElement | null>) => {
	const { asPath } = useRouter();
	const { width: windowWidth } = useWindowSize();

	const [x, setX] = useState(0);
	const [y, setY] = useState(0);
	const [width, setWidth] = useState(0);

	useEffect(() => {
		const current = reactElement.current;

		setX(current?.getBoundingClientRect().x || 0);
		setY(current?.getBoundingClientRect().y || 0);
		setWidth(current?.getBoundingClientRect().width || 0);
	}, [asPath, windowWidth, reactElement]);

	return { x, y, width };
};

export default useReactElement;
