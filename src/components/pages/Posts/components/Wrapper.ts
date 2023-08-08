import styled from '@emotion/styled';

const Wrapper = styled('article')`
	display: grid;
	animation: fade-in var(--transition);
	grid-template-columns: repeat(auto-fit, minmax(21rem, 1fr));

	padding-bottom: 1rem;

	.line {
		width: calc(100% - 2rem);
		height: 1px;

		margin: auto;
		margin-inline: 1rem;

		background-color: var(--md-color-outline-variant);
	}

	@media (min-width: 42.375rem) {
		grid-template-columns: var(--grid-template-columns-1);

		.line {
			display: none;
		}
	}

	@media (min-width: 63.375rem) {
		grid-template-columns: var(--grid-template-columns-2);
	}
`;

export default Wrapper;
