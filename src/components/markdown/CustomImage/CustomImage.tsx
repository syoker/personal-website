import type { ReactImage } from 'src/types/shared';

import StyledImage from './components/StyledImage';

const CustomImage = (props: ReactImage) => {
	return <StyledImage {...props} />;
};

export default CustomImage;
