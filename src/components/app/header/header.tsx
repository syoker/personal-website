import { useRouter } from 'next/router';
import { useReactElement } from '~/hooks/shared';
import { INDICATORVALUES } from './header.constants';
import { useState, useRef } from 'react';

import Button from './button/button';
import Indicator from './indicator/indicator';

import styles from './header.module.css';

const Header = () => {
	const [buttonWidth, setButtonWidth] = useState(0);
	const [, setButtonPosition] = useState(0);

	const reference = useRef<HTMLDivElement | null>(null);
	const nav = useReactElement(reference);

	const handleButtonWidth = (width: number) => {
		if (width !== 0) {
			setButtonWidth(width * 0.9);
		}
	};

	const handleButtonPosition = (x: number) => {
		if (x !== 0) {
			setButtonPosition(x - nav.x + (buttonWidth * 0.1) / 2);
		}
	};

	const { asPath } = useRouter();

	const width = asPath === '/' ? INDICATORVALUES['home'].width : INDICATORVALUES['blog'].width;
	const position = asPath === '/' ? INDICATORVALUES['home'].position : INDICATORVALUES['blog'].position;

	return (
		<header className={styles['header']}>
			<section>
				<nav ref={reference}>
					{['home', 'blog'].map((text, index) => (
						<Button key={index} getButtonPosition={handleButtonPosition} getButtonWidth={handleButtonWidth}>
							{text}
						</Button>
					))}
					<Indicator width={width} position={position} />
				</nav>
			</section>
		</header>
	);
};

export default Header;
