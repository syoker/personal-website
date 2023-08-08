import styled from '@emotion/styled';

import type { ReactImage } from 'src/types/shared';

const CustomImage = (props: ReactImage) => {
	return <StyledImage {...props} />;
};

const StyledImage = styled('img')`
	width: auto;
	height: auto;

	user-select: none;
`;

export default CustomImage;
