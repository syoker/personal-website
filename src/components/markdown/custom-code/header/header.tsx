import { toast } from 'sonner';
import { MdCopyAll } from 'react-icons/md';
import { LANGUAGES } from '~/constants/shared';
import { useCopyToClipboard } from 'usehooks-ts';

import type { ReactNode } from 'react';

import styles from './header.module.css';
import useTranslation from 'next-translate/useTranslation';

interface HeaderProps {
	title: string | undefined;
	language: string;
	children: ReactNode;
}

const Header = ({ language, title, children }: HeaderProps) => {
	const { t } = useTranslation('pages');
	const [, copy] = useCopyToClipboard();

	if (!title || !LANGUAGES[language]) {
		return <></>;
	}

	const copyValue = typeof children === 'string' ? children.replace(/\n[^\n]*$/, '') : '';

	const handleCopy = () => {
		copy(copyValue);
		toast(t('toaster'));
	};

	return (
		<header className={styles['header']}>
			<div className={styles['container']}>
				{LANGUAGES[language].icon}
				<h3>{title}</h3>
			</div>
			<button className={styles['icon-button']} aria-label="Copy code button">
				<MdCopyAll onClick={handleCopy} />
			</button>
		</header>
	);
};

export default Header;
