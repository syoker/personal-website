import styled from '@emotion/styled';

const Wrapper = styled('div')`
	gap: 0.5rem;
	display: flex;
	flex-direction: column;

	margin: 1rem;
	padding-bottom: 1rem;
	margin-bottom: 2.5rem;

	animation: fade-in var(--transition);
	transition: border var(--transition);
	border-bottom: 2px solid var(--md-color-outline-variant);

	.title {
		display: flex;
		align-items: center;
		justify-content: space-between;

		margin: 0.2rem 0rem 0.6rem 0rem;

		h1 {
			hyphens: none;

			font-family: Inter;
			font-size: 2rem;
			font-style: normal;
			font-weight: 700;
			line-height: 2.2rem;

			color: var(--md-color-on-background);
			transition: color var(--transition);
		}

		a {
			border-radius: 6.25rem;
		}
	}

	.description {
		hyphens: none;

		font-family: Inter;
		font-size: 1rem;
		font-style: normal;
		font-weight: 500;
		line-height: 1.5rem;
		letter-spacing: 0.01563rem;

		color: var(--md-color-on-surface-variant);
		transition: color var(--transition);
	}

	.banner {
		margin-top: 1rem;
		margin-bottom: 1rem;

		user-select: none;

		width: 100%;
		height: auto;

		border-radius: 0.5rem;
	}

	.title-container {
		font-size: 0.875rem;
		font-style: normal;
		font-weight: 600;
		line-height: 1.25rem;
		letter-spacing: 0.00625rem;
		overflow: hidden;
		white-space: nowrap;
		text-overflow: ellipsis;
		text-transform: uppercase;

		color: var(--md-color-on-surface-variant);
	}

	.container {
		width: 100%;

		gap: 0.5rem;
		display: flex;
		flex-direction: column;
		justify-content: space-between;

		.users {
			width: 100%;

			gap: 0.5rem;
			display: flex;
			flex-direction: column;
			justify-content: flex-start;

			.container-contributors {
				gap: 0.5rem;
				display: grid;
				grid-template-columns: repeat(auto-fit, minmax(10rem, 1fr));
			}
		}

		.schedule {
			display: flex;
			align-items: center;
			justify-content: flex-end;

			margin: 0rem;
			font-size: 0.8rem;
			font-weight: 500;

			white-space: nowrap;
			text-transform: uppercase;

			color: var(--md-color-on-surface-variant);
			transition: border var(--transition), color var(--transition);
		}
	}

	@media (min-width: 23.438rem) {
		.container {
			flex-direction: row;

			.schedule {
				font-size: 0.9rem;
				padding-left: 1rem;
				text-transform: none;
				border-left: 2px solid var(--md-color-outline-variant);
			}
		}
	}
`;

export default Wrapper;
