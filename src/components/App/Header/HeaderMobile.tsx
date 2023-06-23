import { useRouter } from 'next/router';
import { MdKeyboardArrowLeft } from 'react-icons/md';

import { ValidPages } from 'src/types';

import useTranslation from 'next-translate/useTranslation';

import styles from './styles/HeaderMobile.module.css';

interface HeaderMobileProps {
	pathname: string;
}

export default function HeaderMobile({ pathname }: HeaderMobileProps) {
	const router = useRouter();
	const { t } = useTranslation('header');

	const validPages: ValidPages = {
		'/blog/motorolaonefusion': <h2>{'Motorola One Fusion'}</h2>,
		'/blog/motorolaonefusion/guide-flash-official-firmware': <h2>{`[${t('guide')}] Flash Official Firmware`}</h2>,
		'/blog/motorolaonefusion/guide-unlock-bootloader': <h2>{`[${t('guide')}] Unlock Bootloader`}</h2>,
		'/blog/motorolaonefusion/guide-flash-custom-recovery': <h2>{`[${t('guide')}] Flash Custom Recovery`}</h2>,
		'/blog/motorolaonefusion/guide-flash-rom-gsi': <h2>{`[${t('guide')}] Flash ROM GSI`}</h2>,
	};

	const back = () => {
		if (pathname === '/blog/motorolaonefusion') return router.push('/blog');
		if (pathname.includes('/blog/motorolaonefusion/guide')) return router.push('/blog/motorolaonefusion');

		router.push('../../../');
	};

	return (
		<header className={styles.header}>
			<MdKeyboardArrowLeft onClick={back} className={styles.icon} />
			{validPages[pathname]}
		</header>
	);
}
