import Link from 'next/link';
import styled from '@emotion/styled';

const Wrapper = styled(Link)`
	position: relative;

	font-size: 0.875rem;
	font-style: normal;
	font-weight: 500;
	line-height: 1.25rem;
	letter-spacing: 0.00625rem;
	text-align: center;
	white-space: nowrap;

	outline: none;

	border-radius: 0.5rem;
	padding: 0.375rem 0.75rem;

	color: var(--text-color);
	background-color: transparent;
	border: 1px solid var(--border-color);

	transition: color var(--transition), border var(--transition), background-color var(--transition);

	&:active {
		background-color: rgba(var(--md-color-object-hover-rgb), 0.12);
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

export default Wrapper;
