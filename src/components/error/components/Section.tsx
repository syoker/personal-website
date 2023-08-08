import type { ReactElement } from 'src/types/shared';

import styled from '@emotion/styled';

const Section = (props: ReactElement) => {
	return <Wrapper {...props} />;
};

const Wrapper = styled('section')`
	top: 0;
	left: 0;
	z-index: 200;
	position: fixed;

	gap: 1rem;
	width: 100%;
	height: 100dvh;

	display: flex;
	flex-direction: column;

	align-items: center;
	justify-content: center;

	animation: fade-in var(--transition);
	background-color: var(--md-color-background);
	transition: background-color var(--transition);

	h1 {
		font-size: 3.5625rem;
		font-style: normal;
		font-weight: 700;
		line-height: 4rem;
		letter-spacing: -0.01563rem;

		transition: color var(--transition);

		color: var(--md-color-on-background);
	}

	p {
		font-size: 1.375rem;
		font-style: normal;
		font-weight: 500;
		line-height: 1.75rem;

		transition: color var(--transition);

		color: var(--md-color-on-background);
	}

	.redirect {
		font-size: 1rem;
		font-style: normal;
		font-weight: 500;
		line-height: 1.5rem;
		text-align: center;

		margin-inline: 1rem;

		transition: color var(--transition), background-color var(--transition);

		padding: 1rem;
		border-radius: 0.5rem;
		box-shadow: var(--elevation-level-1);

		color: var(--md-color-on-surface-variant);
		background-color: var(--md-color-surface-variant);

		a {
			text-decoration: underline;
			text-decoration-color: transparent;

			color: var(--md-color-primary);
			transition: color var(--transition), text-decoration-color var(--transition);

			&:hover {
				text-decoration-color: var(--md-color-primary);
			}
		}
	}
`;

export default Section;
