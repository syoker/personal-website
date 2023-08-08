import styled from '@emotion/styled';

const StyledIconButton = styled('button')`
	border: none;
	outline: none;

	position: relative;

	display: flex;
	align-items: center;
	justify-content: center;

	padding: 0.375rem;
	min-width: 2rem;
	min-height: 2rem;
	border-radius: 8px;

	cursor: pointer;
	overflow: hidden;

	background-color: transparent;
	transition: background-color var(--transition);

	svg {
		width: 1.25rem;
		height: 1.25rem;

		color: var(--md-color-on-background);
		transition: color var(--transition), filter var(--transition);
	}

	&:active {
		background-color: rgba(var(--md-color-object-hover-rgb), 0.08);
	}

	@media (min-width: 80rem) {
		&:hover {
			background-color: rgba(var(--md-color-object-hover-rgb), 0.08);
		}

		&:focus-visible {
			background-color: rgba(var(--md-color-object-hover-rgb), 0.12);
		}
	}
`;

export default StyledIconButton;
