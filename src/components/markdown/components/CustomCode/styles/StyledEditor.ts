import styled from '@emotion/styled';

const StyledEditor = styled('div')`
	position: relative;

	display: flex;
	flex-direction: column;

	margin: 1rem 0rem;
	border-radius: 6px;

	overflow-x: auto;

	border: 1px solid var(--md-color-outline);
	animation: fade-in var(--transition);
	transition: border var(--transition), background-color var(--transition);

	.editor {
		gap: 1.5rem;
		display: flex;
		align-items: center;

		padding: 1rem;

		font-size: 0.9rem;
		font-family: Fira Code;

		color: var(--md-color-on-background);
		transition: color var(--transition);

		.number-line {
			text-align: end;
			user-select: none;

			transition: color var(--transition);
			color: rgba(var(--md-color-on-background-rgb), 0.8);

			p {
				margin: 0rem;
			}
		}

		.hljs {
			display: block;

			padding: 0rem 1rem 0rem 0rem;
			background: transparent;
		}

		.hljs-comment {
			color: #9f9f8f;

			transition: color var(--transition);
		}

		.hljs-keyword {
			color: #33c9e5;
			font-style: italic;

			transition: color var(--transition);
		}

		.hljs-title {
			color: #6aaf19;

			transition: color var(--transition);
		}

		.hljs-variable {
			color: #30c8e5;

			transition: color var(--transition);
		}

		.hljs-string {
			color: #f25a00;

			transition: color var(--transition);
		}

		.hljs-number {
			color: #ae81ff;

			transition: color var(--transition);
		}

		.hljs-built_in {
			color: #28c6e4;

			transition: color var(--transition);
		}

		@media (prefers-color-scheme: dark) {
			.hljs-comment {
				color: #ababab;
			}

			.hljs-keyword {
				color: #19d1e5;
			}

			.hljs-title {
				color: #81f900;
			}

			.hljs-variable {
				color: #f8f8f0;
			}

			.hljs-string {
				color: #ffd945;
			}

			.hljs-number {
				color: #ff4dff;
			}

			.hljs-built_in {
				color: #19d1e5;
			}
		}
	}
`;

export default StyledEditor;
