import styled from '@emotion/styled';

const Tags = styled('nav')`
	gap: 0.5rem;
	display: flex;

	.tag {
		font-size: 0.875rem;
		font-style: normal;
		font-weight: 500;
		line-height: 1.25rem;
		letter-spacing: 0.00625rem;
		text-align: center;
		white-space: nowrap;

		border-radius: 0.5rem;
		padding: 0.375rem 0.75rem;

		outline: none;

		color: var(--md-color-on-surface-variant);
		background-color: var(--md-color-surface-variant);

		transition: color var(--transition), background-color var(--transition);

		&:active {
			color: var(--md-color-primary);
		}

		@media (min-width: 80rem) {
			&:hover {
				color: var(--md-color-primary);
			}

			&:focus-visible {
				color: var(--md-color-primary);
			}
		}
	}
`;

export default Tags;
