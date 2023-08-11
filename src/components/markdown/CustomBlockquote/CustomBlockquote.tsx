import type { ReactBlockquote } from 'src/types/shared';

import StyledBlockquote from './components/StyledBlockquote';

const CustomBlockquote = ({ children, ...rest }: ReactBlockquote) => {
	return <StyledBlockquote {...rest}>{children}</StyledBlockquote>;
};

export default CustomBlockquote;
