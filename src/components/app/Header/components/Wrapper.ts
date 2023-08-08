import styled from '@emotion/styled';

const Wrapper = styled('header')`
	top: 0;
	left: 0;
	z-index: 99;
	display: block;
	position: relative;

	width: 100%;

	box-shadow: var(--box-shadow);
	/* background-color: var(--md-color-background); */

	transition: box-shadow 0.1s ease, background-color var(--transition);

	section {
		position: relative;

		gap: 1rem;
		display: flex;
		align-items: center;
		justify-content: flex-end;

		height: 100%;
		max-width: 80rem;

		margin: auto;
		padding: 0rem 1rem;

		nav {
			display: flex;
			position: relative;
		}
	}
`;

export default Wrapper;
