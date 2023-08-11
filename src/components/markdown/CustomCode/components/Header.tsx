import { MdCopyAll } from 'react-icons/md';
import { useCopyToClipboard } from 'usehooks-ts';

import type { ReactNode } from 'react';

import StyledHeader from './StyledHeader';
import StyledIconButton from './StyledIconButton';
import validLanguages from '../utils/validLanguages';

interface HeaderProps {
	title: string | undefined;
	language: string;
	children: ReactNode;
}

const Header = ({ language, title, children }: HeaderProps) => {
	const [, copy] = useCopyToClipboard();

	if (!title || !validLanguages[language]) {
		return <></>;
	}

	const copyValue = typeof children === 'string' ? children.replace(/\n[^\n]*$/, '') : '';

	return (
		<StyledHeader>
			<div className="container">
				{validLanguages[language].icon}
				<h3>{title}</h3>
			</div>
			<StyledIconButton>
				<MdCopyAll onClick={() => copy(copyValue)} />
			</StyledIconButton>
		</StyledHeader>
	);
};

export default Header;
