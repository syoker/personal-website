import { useState, useEffect } from 'react';

const GetWindowDimensions = () => {
	if (typeof window !== 'undefined') {
		const { innerWidth: width, innerHeight: height } = window;
		return {
			width,
			height,
		};
	}
	return {
		width: 0,
		height: 0,
	};
};

export const useWindowDimensions = () => {
	const [windowDimensions, setWindowDimensions] = useState(GetWindowDimensions());

	useEffect(() => {
		function handleResize() {
			if (typeof window !== 'undefined') {
				setWindowDimensions(GetWindowDimensions());
			}
		}

		window.addEventListener('resize', handleResize);
		return () => window.removeEventListener('resize', handleResize);
	}, []);

	return windowDimensions;
};
