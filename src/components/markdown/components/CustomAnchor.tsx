import Link from 'next/link';
import styled from '@emotion/styled';

import type { ReactAnchor } from 'src/types/shared';

const CustomAnchor = ({ children, href }: ReactAnchor) => {
	return (
		<StyledAnchor href={{ pathname: href }} target="_blank">
			{children}
		</StyledAnchor>
	);
};

const StyledAnchor = styled(Link)`
	font-family: Inter;
	font-size: 1rem;
	font-style: normal;
	font-weight: 400;
	line-height: 1.25rem;
	letter-spacing: 0.01563rem;

	text-decoration: underline;
	text-decoration-color: transparent;

	color: var(--md-color-primary);
	animation: fade-in var(--transition);
	transition: color var(--transition), text-decoration-color var(--transition);

	&:active {
		text-decoration-color: var(--md-color-primary);
	}

	@media (min-width: 80rem) {
		&:hover {
			text-decoration-color: var(--md-color-primary);
		}

		&:focus-visible {
			text-decoration-color: var(--md-color-primary);
		}
	}
`;

export default CustomAnchor;
