import { useRouter } from 'next/router';
import { useRef, useEffect } from 'react';
import { useReactElement } from '~/hooks/shared';

import Link from 'next/link';
import classNames from 'classnames';
import useTranslation from 'next-translate/useTranslation';

import styles from './button.module.css';

interface ButtonProps {
	children: string;
	getButtonWidth(width: number): void;
	getButtonPosition(x: number, y: number): void;
}

const Button = ({ children, getButtonWidth, getButtonPosition }: ButtonProps) => {
	const { asPath } = useRouter();
	const { t } = useTranslation('header');

	const reference = useRef<HTMLAnchorElement | null>(null);
	const button = useReactElement(reference);

	useEffect(() => {
		const pages = asPath === '/' ? ['home'] : asPath.split('/').filter(Boolean);

		if (pages[0] === children) {
			getButtonWidth(button.width);
			getButtonPosition(button.x, button.y);
		} else {
			getButtonWidth(0);
			getButtonPosition(0, 0);
		}
	}, [asPath, button.width, button.x, button.y, children, getButtonPosition, getButtonWidth]);

	const isActive = children === 'home' ? asPath === '/' : asPath.includes(children);
	const classes = classNames(styles['button'], isActive && styles['button-active']);

	return (
		<Link className={classes} ref={reference} href={children === 'home' ? '/' : '/' + children}>
			{t(children)}
		</Link>
	);
};

export default Button;
