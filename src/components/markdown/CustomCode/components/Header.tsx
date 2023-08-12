import { MdCopyAll } from 'react-icons/md';
import { useCopyToClipboard } from 'usehooks-ts';

import type { ReactNode } from 'react';

import { toast } from 'sonner';

import StyledHeader from './StyledHeader';
import StyledIconButton from './StyledIconButton';
import validLanguages from '../utils/validLanguages';
import useTranslation from 'next-translate/useTranslation';

interface HeaderProps {
	title: string | undefined;
	language: string;
	children: ReactNode;
}

const Header = ({ language, title, children }: HeaderProps) => {
	const { t } = useTranslation('pages');
	const [, copy] = useCopyToClipboard();

	if (!title || !validLanguages[language]) {
		return <></>;
	}

	const copyValue = typeof children === 'string' ? children.replace(/\n[^\n]*$/, '') : '';

	const handleCopy = () => {
		copy(copyValue);
		toast.message(t('toaster'), {
			description: `${copyValue}`,
		});
	};

	return (
		<StyledHeader>
			<div className="container">
				{validLanguages[language].icon}
				<h3>{title}</h3>
			</div>
			<StyledIconButton>
				<MdCopyAll onClick={handleCopy} />
			</StyledIconButton>
		</StyledHeader>
	);
};

export default Header;
