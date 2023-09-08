import { useRouter } from 'next/router';
import { getPath, getBorderColor, getTextColor, getBackgroundColor } from './tag.functions';

import Link from 'next/link';
import useTranslation from 'next-translate/useTranslation';

import styles from './tag.module.css';

const Tag = ({ children }: { children: string }) => {
	const { asPath } = useRouter();
	const { t } = useTranslation('pages');

	const path = getPath(children);
	const textColor = getTextColor(path, asPath);
	const borderColor = getBorderColor(path, asPath);
	const backgroundColor = getBackgroundColor(path, asPath);

	return (
		<Link
			className={styles['tag']}
			href={path}
			// @ts-expect-error ignore
			style={{ '--text-color': textColor, '--border-color': borderColor, '--background-color': backgroundColor }}
		>
			{t(children)}
		</Link>
	);
};

export default Tag;
