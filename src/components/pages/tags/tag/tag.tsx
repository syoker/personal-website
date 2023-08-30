import { useRouter } from 'next/router';
import { getPath, getBorderColor, getTextColor } from './tag.functions';

import Link from 'next/link';
import useTranslation from 'next-translate/useTranslation';

import styles from './tag.module.css';

const Tag = ({ children }: { children: string }) => {
	const { asPath } = useRouter();
	const { t } = useTranslation('pages');

	const path = getPath(children);
	const textColor = getTextColor(path, asPath);
	const borderColor = getBorderColor(path, asPath);

	return (
		// @ts-expect-error ignore
		<Link className={styles['tag']} href={path} style={{ '--text-color': textColor, '--border-color': borderColor }}>
			{t(children)}
		</Link>
	);
};

export default Tag;
