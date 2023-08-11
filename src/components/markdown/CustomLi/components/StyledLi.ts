import styled from '@emotion/styled';

const StyledLi = styled('li')`
	margin: 1rem 0rem;

	color: var(--md-color-on-background);
	transition: color var(--transition);

	blockquote {
		margin: 0.2rem 0rem;
	}

	p {
		margin: 0.2rem 0rem;
	}

	pre {
		margin: 0.4rem 0rem;

		div {
			margin: 0.2rem 0rem;
		}
	}

	header {
		.container {
			h3 {
				margin: 0rem;
			}
		}
	}
`;

export default StyledLi;
