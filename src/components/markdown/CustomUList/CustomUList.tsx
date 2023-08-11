import type { ReactUList } from 'src/types/shared';

import StyledUList from './components/StyledUList';

const CustomUList = ({ children, ...rest }: ReactUList) => {
	return <StyledUList {...rest}>{children}</StyledUList>;
};

export default CustomUList;
