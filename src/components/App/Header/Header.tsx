import { useRouter } from 'next/router';
import { useState, useEffect } from 'react';
import { MdKeyboardArrowLeft } from 'react-icons/md';

import { useWindowDimensions } from 'src/hooks';

import Link from 'next/link';
import Image from 'next/image';
import classNames from 'classnames';
import useTranslation from 'next-translate/useTranslation';

import styles from './styles/Header.module.css';

export default function Header() {
	const { t } = useTranslation('header');
	const { width } = useWindowDimensions();

	const [windowWidth, setWindowWidth] = useState<number>(0);

	useEffect(() => {
		setWindowWidth(width);
	}, [width]);

	const router = useRouter();
	const pathname = router.pathname;

	const home = () => router.push('../../../');

	const back = () => router.back();

	if (windowWidth < 1280 && (pathname === '/' || pathname === '/blog' || pathname === '/projects')) {
		return <></>;
	}

	return (
		<header className={styles.header}>
			<MdKeyboardArrowLeft onClick={back} className={styles.icon} />
			{pathname === '/blog/motorolaonefusion' && <h2>{'Motorola One Fusion'}</h2>}
			{pathname === '/blog/motorolaonefusion/guide-flash-official-firmware' && (
				<h2>{`[${t('guide')}] Flash Official Firmware`}</h2>
			)}
			{pathname === '/blog/motorolaonefusion/guide-unlock-bootloader' && <h2>{`[${t('guide')}] Unlock Bootloader`}</h2>}
			{pathname === '/blog/motorolaonefusion/guide-flash-custom-recovery' && (
				<h2>{`[${t('guide')}] Flash Custom Recovery`}</h2>
			)}
			{pathname === '/blog/motorolaonefusion/guide-flash-rom-gsi' && <h2>{`[${t('guide')}] Flash ROM GSI`}</h2>}
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
				<Link
					className={classNames(styles.link, router.pathname.includes('blog') && styles.linkSelected)}
					href="../../blog"
				>
					{t('blog-title')}
				</Link>
				<Link
					className={classNames(styles.link, router.pathname.includes('projects') && styles.linkSelected)}
					href="../../projects"
				>
					{t('projects-title')}
				</Link>
			</nav>
		</header>
	);
}
