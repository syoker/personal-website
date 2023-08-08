import styled from '@emotion/styled';

const Wrapper = styled('nav')`
	gap: 0.5rem;
	display: flex;
	padding: 0.5rem 1rem;

	overflow-x: auto;
	overflow-y: hidden;

	width: 100%;
	margin: auto;
	margin-top: 0.5rem;

	animation: fade-in var(--transition);
`;

export default Wrapper;
