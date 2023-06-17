import { useRouter } from 'next/router';
import { useWindowDimensions } from 'src/hooks';
import { MdArticle, MdAccountCircle, MdSpaceDashboard } from 'react-icons/md';

import Link from 'next/link';
import classNames from 'classnames';
import useTranslation from 'next-translate/useTranslation';

import styles from './styles/Footer.module.css';

export default function Footer() {
	const { t } = useTranslation('footer');
	const { width } = useWindowDimensions();

	const router = useRouter();
	const pathname = router.pathname;

	if (width < 1280 && (pathname === '/' || pathname === '/blog' || pathname === '/projects')) {
		return (
			<footer className={styles.footer}>
				<Link href="../" className={classNames(styles.button, router.pathname === '/' && styles.activeButton)}>
					<MdAccountCircle className={styles.icon} />
					<label>{t('label-home')}</label>
				</Link>
				<Link href="../blog" className={classNames(styles.button, router.pathname === '/blog' && styles.activeButton)}>
					<MdArticle className={styles.icon} />
					<label>{t('label-blog')}</label>
				</Link>
				<Link
					href="../projects"
					className={classNames(styles.button, router.pathname === '/projects' && styles.activeButton)}
				>
					<MdSpaceDashboard className={styles.icon} />
					<label>{t('label-projects')}</label>
				</Link>
			</footer>
		);
	}

	return null;
}
