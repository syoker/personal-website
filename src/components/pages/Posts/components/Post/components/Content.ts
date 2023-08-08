import styled from '@emotion/styled';

const Content = styled('div')`
	gap: 1rem;
	display: flex;
	flex-direction: column;
	justify-content: space-between;

	width: 100%;
	height: 100%;

	.info {
		gap: 0.5rem;
		display: flex;
		flex-direction: column;

		.banner {
			width: 100%;
			height: auto;

			user-select: none;
			border-radius: 8px;
		}

		.content {
			gap: 0.5rem;
			display: flex;
			flex-wrap: wrap;
			align-items: center;

			.tag {
				list-style: none;
				font-size: 0.85rem;
				font-style: normal;
				font-weight: 500;
				line-height: 1rem;
				letter-spacing: 0.03125rem;
				white-space: nowrap;

				border-radius: 8px;
				padding: 0.5rem 1rem;

				color: var(--md-color-on-surface-variant);
				background-color: var(--md-color-surface-variant);
				transition: color var(--transition), background-color var(--transition);
			}
		}

		.title {
			font-size: 1.2rem;
			font-style: normal;
			font-weight: 600;
			line-height: 1.5rem;
			letter-spacing: 0.00938rem;

			overflow: hidden;
			white-space: nowrap;
			text-overflow: ellipsis;

			transition: color var(--transition);
			color: var(--md-color-on-background);
		}

		.description {
			hyphens: none;

			font-size: 0.875rem;
			font-style: normal;
			font-weight: 500;
			line-height: 1.25rem;
			letter-spacing: 0.00625rem;

			transition: color var(--transition);
			color: rgba(var(--md-color-on-background-rgb), 0.8);
		}
	}

	.date {
		font-size: 0.875rem;
		font-style: normal;
		font-weight: 500;
		line-height: 1.25rem;
		letter-spacing: 0.00625rem;

		text-align: end;

		transition: color var(--transition);
		color: rgba(var(--md-color-on-background-rgb), 0.6);
	}
`;

export default Content;
