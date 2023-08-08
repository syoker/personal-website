import Link from 'next/link';
import styled from '@emotion/styled';

const Wrapper = styled(Link)`
	gap: 0.5rem;
	display: flex;
	align-items: center;

	user-select: none;

	padding: 0.5rem;
	border-radius: 0.5rem;

	outline: none;

	background-color: transparent;
	transition: background-color var(--transition);

	.avatar {
		width: 3rem;
		height: 3rem;

		border-radius: 6.25rem;
	}

	.information {
		gap: 0rem;
		display: flex;
		flex-direction: column;

		width: calc(100% - 3.5rem);

		align-items: flex-start;
		justify-content: space-between;

		border: none;

		.name {
			hyphens: none;

			font-family: Inter;
			font-size: 0.9rem;
			font-style: normal;
			font-weight: 600;
			line-height: 1.5rem;
			letter-spacing: 0.01563rem;

			width: 100%;
			overflow: hidden;
			white-space: nowrap;
			text-overflow: ellipsis;

			transition: color var(--transition);
			color: var(--md-color-on-background);
		}

		.alias {
			hyphens: none;

			font-family: Inter;
			font-size: 0.9rem;
			font-style: normal;
			font-weight: 400;
			line-height: 1.5rem;
			letter-spacing: 0.01563rem;

			width: 100%;
			overflow: hidden;
			white-space: nowrap;
			text-overflow: ellipsis;

			transition: color var(--transition);
			color: var(--md-color-on-surface-variant);
		}
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

export default Wrapper;
