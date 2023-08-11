import styled from '@emotion/styled';

const StyledHeader = styled('header')`
	top: 0;
	left: 0;
	position: sticky;

	display: flex;
	justify-content: space-between;

	padding: 0.5rem 0.625rem 0.5rem 1rem;

	background-color: var(--md-color-background);
	border-bottom: 1px solid var(--md-color-outline);

	transition: background-color var(--transition), border var(--transition);

	.container {
		display: flex;
		gap: 0.5rem;

		align-items: center;

		svg {
			height: 1rem;
			min-width: 1rem;
			max-width: 1rem;

			margin: 0rem;
			padding: 0rem;

			color: var(--md-color-on-surface-variant);
			transition: color var(--transition);
		}

		h3 {
			font-size: 0.875rem;
			font-style: normal;
			font-weight: 500;
			line-height: 1.25rem;
			letter-spacing: 0.00625rem;

			font-family: Inter;
			color: var(--md-color-on-background);
			transition: color var(--transition);
		}
	}
`;

export default StyledHeader;
