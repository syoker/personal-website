import { useState } from 'react';

import useNav from './hooks/useNav';
import Wrapper from './components/Wrapper';
import Button from './components/Button/Button';
import Indicator from './components/Indicator/Indicator';

const Header = () => {
	const { navRef, navPosition } = useNav();

	const [buttonWidth, setButtonWidth] = useState(0);
	const [buttonPosition, setButtonPosition] = useState(0);

	const handleButtonWidth = (width: number) => {
		if (width !== 0) {
			setButtonWidth(width * 0.9);
		}
	};

	const handleButtonPosition = (x: number) => {
		if (x !== 0) {
			setButtonPosition(x - navPosition + (buttonWidth * 0.1) / 2);
		}
	};

	return (
		<Wrapper>
			<section>
				<nav ref={navRef}>
					{['home', 'blog', 'projects'].map((button, index) => {
						return (
							<Button key={index} getButtonWidth={handleButtonWidth} getButtonPosition={handleButtonPosition}>
								{button}
							</Button>
						);
					})}
					<Indicator width={buttonWidth} position={buttonPosition} />
				</nav>
			</section>
		</Wrapper>
	);
};

export default Header;
