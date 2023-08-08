import Link from 'next/link';
import styled from '@emotion/styled';

const Wrapper = styled(Link)`
	position: relative;

	width: 100%;
	padding: 1rem;

	outline: none;

	.background {
		top: 0;
		left: 0;
		position: absolute;

		width: 100%;
		height: 100%;

		transition: background-color var(--transition);
		background-color: rgba(var(--md-color-object-hover-rgb), 0);
	}

	&:active {
		.background {
			background-color: rgba(var(--md-color-object-hover-rgb), 0.12);
		}
	}

	@media (min-width: 80rem) {
		&:hover {
			.background {
				background-color: rgba(var(--md-color-object-hover-rgb), 0.08);
			}
		}

		&:focus-visible {
			.background {
				background-color: rgba(var(--md-color-object-hover-rgb), 0.12);
			}
		}
	}
`;

export default Wrapper;
