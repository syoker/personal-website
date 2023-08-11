import styled from '@emotion/styled';

const StyledH1 = styled('h1')`
	hyphens: none;

	font-family: Inter;
	font-size: 2rem;
	font-style: normal;
	font-weight: 700;
	line-height: 1.75rem;

	margin-bottom: 1rem;
	padding-bottom: 0.8rem;

	color: var(--md-color-on-background);
	animation: fade-in var(--transition);
	border-bottom: 1px solid var(--md-color-outline-variant);
	transition: color var(--transition), border var(--transition);
`;

export default StyledH1;
