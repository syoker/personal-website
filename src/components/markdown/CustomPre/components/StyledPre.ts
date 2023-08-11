import styled from '@emotion/styled';

const StyledPre = styled('pre')`
	display: block;

	padding: 1rem;
	border-radius: 6px;

	font-size: 0.9rem;
	font-family: Fira Code;

	overflow-x: auto;

	border: 1px solid var(--md-color-outline);
	animation: fade-in var(--transition);
	transition: border var(--transition), background-color var(--transition);

	code {
		padding: 0rem;
		background-color: transparent;

		color: var(--md-color-on-background);
	}
`;

export default StyledPre;
