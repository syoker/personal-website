import styled from '@emotion/styled';

const StyledParagraph = styled('p')`
	hyphens: none;

	font-family: Inter;
	font-size: 1rem;
	font-style: normal;
	font-weight: 400;
	line-height: 1.5rem;
	letter-spacing: 0.01563rem;

	margin: 1rem 0rem;

	color: var(--md-color-on-background);
	transition: color var(--transition);
	animation: fade-in var(--transition);
`;

export default StyledParagraph;
