import type { ReactButton } from 'src/types/shared';

import StyledIconButton from './components/StyledIconButton';

const IconButton = (props: ReactButton) => {
	return <StyledIconButton {...props} />;
};

export default IconButton;
