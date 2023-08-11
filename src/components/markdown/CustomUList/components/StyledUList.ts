import styled from '@emotion/styled';

const StyledUList = styled('ul')`
	li {
		margin-bottom: 0.2rem;

		.code-with-editor {
			margin: 0.4rem 0rem;
		}

		video {
			margin: 0.4rem 0rem;
		}

		img {
			margin: 0.4rem 0rem;
		}

		blockquote {
			margin-bottom: 0.5rem;
		}
	}

	@media (max-width: 80rem) {
		padding-inline-start: 1.5rem;
	}
`;

export default StyledUList;
