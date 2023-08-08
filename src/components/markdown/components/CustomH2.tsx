import styled from '@emotion/styled';

import type { ReactHeading } from 'src/types/shared';

const CustomH2 = ({ children, ...rest }: ReactHeading) => {
	return <StyledH2 {...rest}>{children}</StyledH2>;
};

const StyledH2 = styled('h2')`
	hyphens: none;

	font-family: Inter;
	font-size: 1.6rem;
	font-style: normal;
	font-weight: 600;
	line-height: 1.75rem;

	margin: 2rem 0rem 0.6rem 0rem;

	color: var(--md-color-on-background);
	animation: fade-in var(--transition);
	transition: color var(--transition);
`;

export default CustomH2;
