import { useRouter } from 'next/router';
import { MdKeyboardArrowLeft } from 'react-icons/md';

import { ValidPages } from 'src/types';
import { useWindowDimensions } from 'src/hooks';

import Link from 'next/link';
import Image from 'next/image';
import classNames from 'classnames';
import useTranslation from 'next-translate/useTranslation';

import styles from './styles/Header.module.css';

export default function Header() {
	const { t } = useTranslation('header');
	const { width } = useWindowDimensions();

	const validPages: ValidPages = {
		'/blog/motorolaonefusion': <h2>{'Motorola One Fusion'}</h2>,
		'/blog/motorolaonefusion/guide-flash-official-firmware': <h2>{`[${t('guide')}] Flash Official Firmware`}</h2>,
		'/blog/motorolaonefusion/guide-unlock-bootloader': <h2>{`[${t('guide')}] Unlock Bootloader`}</h2>,
		'/blog/motorolaonefusion/guide-flash-custom-recovery': <h2>{`[${t('guide')}] Flash Custom Recovery`}</h2>,
		'/blog/motorolaonefusion/guide-flash-rom-gsi': <h2>{`[${t('guide')}] Flash ROM GSI`}</h2>,
	};

	const errorPage = <h2>{'Error 404'}</h2>;

	const router = useRouter();
	const pathname = router.asPath;

	const home = () => router.push('../../../');

	const back = () => {
		if (pathname === '/blog/motorolaonefusion') {
			router.push('/blog');
			return;
		}

		if (pathname.includes('/blog/motorolaonefusion/guide')) {
			router.push('/blog/motorolaonefusion');
			return;
		}

		home();
	};

	if (width < 1280 && (pathname === '/' || pathname === '/blog' || pathname === '/projects')) {
		return <></>;
	}

	return (
		<header className={styles.header}>
			<MdKeyboardArrowLeft onClick={back} className={styles.icon} />
			{validPages[pathname] || errorPage}
			<Image
				className={styles.avatar}
				src="/icon/avatar.svg"
				alt="Syoker"
				width={200}
				height={200}
				onClick={home}
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
