import type { ReactImage } from 'src/types/shared';

import StyledImage from './components/StyledImage';

const CustomImage = (props: ReactImage) => {
	return <StyledImage {...props} width="1280" height="720" />;
};

export default CustomImage;
