import { useRouter } from 'next/router';

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
import { Error404 } from 'src/components/shared';

import useTranslation from 'next-translate/useTranslation';

import styles from 'src/styles/Article.module.css';

export default function Article() {
	const { t, lang } = useTranslation('article');

	const router = useRouter();
	const pathname = router.asPath;

	const validPages: ValidPages = {
		'/blog/motorolaonefusion/guide-flash-official-firmware': (
			<>
				<h1 className={styles.title}>{t('title-flash-official-firmware')}</h1>
				{lang === 'es' ? <GuideFlashOfficialFirmwareES /> : <GuideFlashOfficialFirmwareEN />}
			</>
		),
		'/blog/motorolaonefusion/guide-unlock-bootloader': (
			<>
				<h1 className={styles.title}>{t('title-unlock-bootloader')}</h1>
				{lang === 'es' ? <GuideUnlockBootloaderES /> : <GuideUnlockBootloaderEN />}
			</>
		),
		'/blog/motorolaonefusion/guide-flash-custom-recovery': (
			<>
				<h1 className={styles.title}>{t('title-flash-custom-recovery')}</h1>
				{lang === 'es' ? <GuideFlashCustomRecoveryES /> : <GuideFlashCustomRecoveryEN />}
			</>
		),
		'/blog/motorolaonefusion/guide-flash-rom-gsi': (
			<>
				<h1 className={styles.title}>{t('title-flash-rom-gsi')}</h1>
				{lang === 'es' ? <GuideFlashROMGSIES /> : <GuideFlashROMGSIEN />}
			</>
		),
	};

	if (validPages[pathname]) {
		return (
			<section className={styles.body}>
				{validPages[pathname]}
				<div className={styles.signature}>
					<em>{t('signature')}</em>
				</div>
			</section>
		);
	}

	return <Error404 />;
}
