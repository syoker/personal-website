import { useState } from 'react';
import { useEventListener } from 'usehooks-ts';

const useScrollPosition = (): { scrollX: number; scrollY: number } => {
	const [scrollX, setScrollX] = useState(0);
	const [scrollY, setScrollY] = useState(0);

	function handleScroll() {
		setScrollX(window.scrollX);
		setScrollY(window.scrollY);
	}

	useEventListener('scroll', handleScroll);

	return { scrollX, scrollY };
};

export default useScrollPosition;
