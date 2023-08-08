import Link from 'next/link';
import styled from '@emotion/styled';

const StyledIconLink = styled(Link)`
	height: 2.5rem;
	padding: 0.5rem;

	min-width: 2.5rem;
	max-width: 2.5rem;

	border: none;
	outline: none;
	border-radius: 6.25rem;
	background-color: transparent;

	cursor: pointer;

	color: var(--md-color-on-surface-variant);
	transition: background-color var(--transition);

	svg {
		width: 1.5rem;
		height: 1.5rem;

		margin: 0rem;
		padding: 0rem;
	}

	&:active {
		background-color: rgba(var(--md-color-object-hover-rgb), 0.08);
	}

	@media (min-width: 80rem) {
		&:hover {
			background-color: rgba(var(--md-color-object-hover-rgb), 0.08);
		}

		&:focus-visible {
			background-color: rgba(var(--md-color-object-hover-rgb), 0.12);
		}
	}
`;

export default StyledIconLink;
