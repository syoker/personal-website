import { useRouter } from 'next/router';
import { useEffect } from 'react';
import { ValidPages } from 'src/types';
import {
	GuideFlashOfficialFirmwareEN,
	GuideFlashOfficialFirmwareES,
	GuideUnlockBootloaderEN,
	GuideUnlockBootloaderES,
	GuideFlashCustomRecoveryEN,
	GuideFlashCustomRecoveryES,
	GuideFlashROMGSIEN,
	GuideFlashROMGSIES,
} from 'src/components/Article';
import { Header } from 'src/components/shared';

import useTranslation from 'next-translate/useTranslation';

import styles from 'src/styles/Article.module.css';

type ValidPagesServer = {
	[key: string]: string;
};

export default function Article() {
	const { t, lang } = useTranslation('article');
	const router = useRouter();

	useEffect(() => {
		const guide1 = lang === 'es' ? '[Guía] Flashear ROM GSI' : '[Guide] Flash ROM GSI';
		const guide2 = lang === 'es' ? '[Guía] Desbloquear Bootloader' : '[Guide] Unlock Bootloader';
		const guide3 = lang === 'es' ? '[Guía] Flashear Recovery Personalizado' : '[Guide] Flash Custom Recovery';
		const guide4 = lang === 'es' ? '[Guía] Flashear Firmware Oficial' : '[Guide] Flash Official Firmware';

		const validPages: ValidPagesServer = {
			'/blog/motorolaonefusion/guide-flash-rom-gsi': guide1,
			'/blog/motorolaonefusion/guide-unlock-bootloader': guide2,
			'/blog/motorolaonefusion/guide-flash-custom-recovery': guide3,
			'/blog/motorolaonefusion/guide-flash-official-firmware': guide4,
		};

		if (!validPages[router.asPath]) {
			router.push('/404');
		}
	}, [lang, router]);

	const guide1 = lang === 'es' ? '[Guía] Flashear ROM GSI' : '[Guide] Flash ROM GSI';
	const guide2 = lang === 'es' ? '[Guía] Desbloquear Bootloader' : '[Guide] Unlock Bootloader';
	const guide3 = lang === 'es' ? '[Guía] Flashear Recovery Personalizado' : '[Guide] Flash Custom Recovery';
	const guide4 = lang === 'es' ? '[Guía] Flashear Firmware Oficial' : '[Guide] Flash Official Firmware';

	const validPages: ValidPagesServer = {
		'/blog/motorolaonefusion/guide-flash-rom-gsi': guide1,
		'/blog/motorolaonefusion/guide-unlock-bootloader': guide2,
		'/blog/motorolaonefusion/guide-flash-custom-recovery': guide3,
		'/blog/motorolaonefusion/guide-flash-official-firmware': guide4,
	};

	const pageTemp = validPages[router.asPath];

	const validPagesRender: ValidPages = {
		'[Guide] Flash ROM GSI': <GuideFlashROMGSIEN />,
		'[Guía] Flashear ROM GSI': <GuideFlashROMGSIES />,
		'[Guide] Unlock Bootloader': <GuideUnlockBootloaderEN />,
		'[Guía] Desbloquear Bootloader': <GuideUnlockBootloaderES />,
		'[Guide] Flash Custom Recovery': <GuideFlashCustomRecoveryEN />,
		'[Guía] Flashear Recovery Personalizado': <GuideFlashCustomRecoveryES />,
		'[Guide] Flash Official Firmware': <GuideFlashOfficialFirmwareEN />,
		'[Guía] Flashear Firmware Oficial': <GuideFlashOfficialFirmwareES />,
	};

	return (
		<>
			<Header pathname={router.asPath} />
			<section className={styles.body}>
				<h1 className={styles.title}>{pageTemp}</h1>
				{validPagesRender[pageTemp]}
				<div className={styles.signature}>
					<em>{t('signature')}</em>
				</div>
			</section>
		</>
	);
}
