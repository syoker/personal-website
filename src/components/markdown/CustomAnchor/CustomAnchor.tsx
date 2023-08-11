import type { ReactAnchor } from 'src/types/shared';

import StyledAnchor from './components/StyledAnchor';

const CustomAnchor = ({ children, href }: ReactAnchor) => {
	return (
		<StyledAnchor href={{ pathname: href }} rel="noreferrer noopener" target="_blank">
			{children}
		</StyledAnchor>
	);
};

export default CustomAnchor;
