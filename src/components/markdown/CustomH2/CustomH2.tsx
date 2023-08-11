import type { ReactHeading } from 'src/types/shared';

import StyledH2 from './components/StyledH2';

const CustomH2 = ({ children, ...rest }: ReactHeading) => {
	return <StyledH2 {...rest}>{children}</StyledH2>;
};

export default CustomH2;
