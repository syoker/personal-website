import styled from '@emotion/styled';

const Wrapper = styled('section')`
	z-index: 2;
	position: relative;

	width: 100%;
	margin: auto;
	max-width: 80rem;

	.custom-h1 {
		margin-inline: 1rem;

		@media (min-width: 80rem) {
			margin-inline: 0rem;
		}
	}
`;

export default Wrapper;
