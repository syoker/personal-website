import styled from '@emotion/styled';

const Wrapper = styled('article')`
	display: flex;
	flex-direction: column;

	padding-bottom: 1rem;
	animation: fade-in var(--transition);

	.line {
		width: calc(100% - 2rem);
		height: 1px;

		margin: auto;
		margin-inline: 1rem;

		background-color: var(--md-color-outline-variant);
	}

	@media (min-width: 42.375rem) {
		display: grid;
		grid-template-columns: var(--grid-template-columns-1);
		grid-template-columns: repeat(auto-fit, minmax(21rem, 1fr));

		.line {
			display: none;
		}
	}

	@media (min-width: 63.375rem) {
		grid-template-columns: var(--grid-template-columns-2);
	}
`;

export default Wrapper;
