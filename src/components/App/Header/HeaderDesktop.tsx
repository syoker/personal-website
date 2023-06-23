import { useRouter } from 'next/router';

import Link from 'next/link';
import Image from 'next/image';
import classNames from 'classnames';
import useTranslation from 'next-translate/useTranslation';

import styles from './styles/HeaderDesktop.module.css';

export default function HeaderDesktop({ pathname }: { pathname: string }) {
	const router = useRouter();
	const { t } = useTranslation('header');

	return (
		<header className={styles.header}>
			<Image
				className={styles.avatar}
				src="/icon/avatar.svg"
				alt="Syoker"
				width={200}
				height={200}
				onClick={() => router.push('../../../')}
				priority
			/>
			<nav className={styles.navigation}>
				<Link className={classNames(styles.link, pathname.includes('blog') && styles.linkSelected)} href="../../blog">
					{t('blog-title')}
				</Link>
				<Link
					className={classNames(styles.link, pathname.includes('projects') && styles.linkSelected)}
					href="../../projects"
				>
					{t('projects-title')}
				</Link>
			</nav>
		</header>
	);
}
