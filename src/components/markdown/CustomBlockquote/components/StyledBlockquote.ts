import styled from '@emotion/styled';

const StyledBlockquote = styled('blockquote')`
	margin: 1rem 0rem;

	padding-left: 1rem;
	border-left: 0.25rem solid rgba(var(--md-color-outline-rgb), 0.6);

	hyphens: none;
	word-break: keep-all;

	p {
		margin: 0rem;

		color: rgba(var(--md-color-on-background-rgb), 0.6);
	}

	li {
		color: rgba(var(--md-color-on-background-rgb), 0.6);
	}
`;

export default StyledBlockquote;
