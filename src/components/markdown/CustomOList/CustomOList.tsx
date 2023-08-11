import type { ReactOList } from 'src/types/shared';

import StyledOList from './components/StyledOList';

const CustomOList = ({ children, ...rest }: ReactOList) => {
	return <StyledOList {...rest}>{children}</StyledOList>;
};

export default CustomOList;
