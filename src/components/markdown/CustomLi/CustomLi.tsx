import { useRouter } from 'next/router';
import type { ReactLi } from 'src/types/shared';

import StyledLi from './components/StyledLi';

const CustomLi = ({ children, ...rest }: ReactLi) => {
	const { query } = useRouter();

	const category = (query['pages'] || '')[0];

	if (category === 'projects') {
		return (
			<StyledLi style={{ margin: '0rem 0rem' }} {...rest}>
				{children}
			</StyledLi>
		);
	}

	return <StyledLi {...rest}>{children}</StyledLi>;
};

export default CustomLi;
