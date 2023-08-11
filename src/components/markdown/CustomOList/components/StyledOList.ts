import styled from '@emotion/styled';

const StyledOList = styled('ol')`
	li {
		margin-bottom: 0.2rem;

		.code-with-editor {
			margin: 0.4rem 0rem;
		}

		video {
			margin: 1rem 0rem 0rem 0rem;
		}

		img {
			margin: 1rem 0rem 0rem 0rem;
		}

		blockquote {
			margin-bottom: 1rem;
		}
	}

	@media (max-width: 80rem) {
		padding-inline-start: 1.5rem;
	}
`;

export default StyledOList;
