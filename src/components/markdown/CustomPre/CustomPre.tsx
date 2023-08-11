import type { ReactPre } from 'src/types/shared';

import StyledPre from './components/StyledPre';

const CustomPre = ({ children, ...rest }: ReactPre) => {
	if (typeof children === 'string') {
		return <StyledPre {...rest}>{children}</StyledPre>;
	}

	return children;
};

export default CustomPre;
