import type { ReactHeading } from 'src/types/shared';

import StyledH1 from './components/StyledH1';

const CustomH1 = ({ children, ...rest }: ReactHeading) => {
	return <StyledH1 {...rest}>{children}</StyledH1>;
};

export default CustomH1;
