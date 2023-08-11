import styled from '@emotion/styled';

const StyledCode = styled('code')`
	font-size: 0.9rem;
	border-radius: 4px;
	padding: 0.2rem 0.4rem;

	word-break: break-word;

	color: var(--md-color-on-surface-variant);
	background-color: var(--md-color-surface-variant);
	transition: color var(--transition), background-color var(--transition);
`;

export default StyledCode;
