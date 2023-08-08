import styled from '@emotion/styled';

const Wrapper = styled('section')`
	display: flex;
	flex-direction: column;
	justify-content: space-between;

	width: 100%;
	height: calc(100dvh - 8rem);

	animation: fade-in var(--transition);

	.article {
		display: flex;
		align-items: center;
		flex-direction: column;

		.greeting {
			font-size: 4rem;
			font-family: Heavitas;
			line-height: calc(1em - 1rem);
			text-align: center;
			white-space: nowrap;

			user-select: none;

			transition: color var(--transition);
			color: var(--md-color-on-background);
			transition: color var(--transition), font-size var(--transition);
		}

		.presentation {
			font-size: 1.8rem;
			font-family: Heavitas;
			word-spacing: -2px;
			letter-spacing: 0.5px;
			line-height: 1.3em;
			text-align: center;
			white-space: nowrap;

			user-select: none;

			margin-left: 10px;

			color: var(--md-color-on-background);
			transition: color var(--transition), font-size var(--transition);
		}

		.details {
			font-size: 0.7rem;
			font-weight: 600;
			text-align: center;
			padding: 0.6rem;
			white-space: nowrap;

			margin-top: 0.2rem;

			border-radius: 8px;

			user-select: none;

			box-shadow: var(--elevation-level-1);
			color: var(--md-color-on-surface-variant);
			background-color: var(--md-color-surface-variant);
			transition: color var(--transition), background-color var(--transition), font-size var(--transition);
		}
	}

	@media (min-width: 25rem) {
		.article {
			.greeting {
				font-size: 5rem;
			}

			.presentation {
				font-size: 2.2rem;
				line-height: 1em;
			}

			.details {
				padding: 1rem;
				font-size: 1rem;
				margin-top: 0.5rem;
			}
		}
	}

	@media (min-width: 80rem) {
		.article {
			.greeting {
				font-size: 7rem;
				line-height: calc(1em - 1.5rem);
			}

			.presentation {
				font-size: 3rem;
			}

			.details {
				font-size: 1.3rem;
			}
		}
	}
`;

export default Wrapper;
