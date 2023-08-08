import { useRouter } from 'next/router';

import Link from 'next/link';
import styled from '@emotion/styled';
import useButton from './hooks/useButton';
import useTranslation from 'next-translate/useTranslation';

interface ButtonProps {
	children: string;
	getButtonPosition(x: number): void;
	getButtonWidth(width: number): void;
}

const Button = ({ children, getButtonWidth, getButtonPosition }: ButtonProps) => {
	const { asPath } = useRouter();
	const { t } = useTranslation('header');
	const { buttonRef, buttonWidth, buttonPosition } = useButton(children);

	getButtonWidth(buttonWidth);
	getButtonPosition(buttonPosition);

	const page = children === 'home' ? '/' : '/' + children;
	const isActive = children === 'home' ? asPath === '/' : asPath.includes(children);
	const color = isActive ? 'var(--md-color-primary)' : 'var(--md-color-on-surface-disabled)';

	return (
		// @ts-expect-error That works, I don't know why TS throws an error.
		<Wrapper ref={buttonRef} style={{ '--color': color }} href={page}>
			{t(children)}
		</Wrapper>
	);
};

const Wrapper = styled(Link)`
	position: relative;
	padding: 1rem;
	height: 4rem;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;

	&:focus {
		border: none;
		outline: none;
	}

	font-family: 'Inter var';
	font-variation-settings: 'wght' 700;
	font-size: 0.9rem;
	color: var(--color);
	cursor: pointer;
	transition: all 0.2s ease;

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
`;

export default Button;
