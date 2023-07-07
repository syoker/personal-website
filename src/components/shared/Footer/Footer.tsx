import { MdArticle, MdAccountCircle, MdSpaceDashboard } from 'react-icons/md';

import Link from 'next/link';
import classNames from 'classnames';
import useTranslation from 'next-translate/useTranslation';

import styles from './styles/Footer.module.css';

export default function Footer({ path }: { path: string }) {
	const { t } = useTranslation('footer');

	return (
		<footer className={styles.footer}>
			<Link href="../" className={classNames(styles.button, path === '/' && styles.activeButton)}>
				<MdAccountCircle className={styles.icon} />
				<label>{t('label-home')}</label>
			</Link>
			<Link href="../blog" className={classNames(styles.button, path === '/blog' && styles.activeButton)}>
				<MdArticle className={styles.icon} />
				<label>{t('label-blog')}</label>
			</Link>
			<Link href="../projects" className={classNames(styles.button, path === '/projects' && styles.activeButton)}>
				<MdSpaceDashboard className={styles.icon} />
				<label>{t('label-projects')}</label>
			</Link>
		</footer>
	);
}
