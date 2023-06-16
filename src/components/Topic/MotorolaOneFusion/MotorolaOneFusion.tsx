import { CustomCard } from 'src/components/shared';
import useTranslation from 'next-translate/useTranslation';

import { Head } from 'src/components/shared';

import styles from 'src/styles/Topic.module.css';

export default function MotorolaOneFusion() {
	const { t } = useTranslation('topic-motorola-one-fusion');

	return (
		<>
			<Head
				title="Motorola One Fusion"
				description="In this section you will find all my guides for this phone, for example, how to reinstall the software of this device."
				ogUrl="https://syoker.vercel.app/blog/motorolaonefusion"
				ogTitle="Motorola One Fusion"
				ogDescription="In this section you will find all my guides for this phone, for example, how to reinstall the software of this device."
				ogImage="https://raw.githubusercontent.com/Syoker/personal-website/main/public/img/banner-motorolaonefusion.png"
			/>

			<section className={styles.topic}>
				<article className={styles.data}>
					<h2>{'Motorola One Fusion'}</h2>
					<p>{t('additional-information')}</p>
				</article>
				<article className={styles.guides}>
					<CustomCard
						banner="/img/banner-flashofficialfirmware.png"
						title={t('guide-flash-official-firmware-title')}
						description={t('guide-flash-official-firmware-description')}
						link="/blog/motorolaonefusion/guide-flash-official-firmware"
						titleSide={`${t('guide')} 1`}
					/>
					<CustomCard
						banner="/img/banner-unlockbootloader.png"
						title={t('guide-unlock-bootloader-title')}
						description={t('guide-unlock-bootloader-description')}
						link="/blog/motorolaonefusion/guide-unlock-bootloader"
						titleSide={`${t('guide')} 2`}
					/>
					<CustomCard
						banner="/img/banner-flashcustomrecovery.png"
						title={t('guide-flash-custom-recovery-title')}
						description={t('guide-flash-custom-recovery-description')}
						link="/blog/motorolaonefusion/guide-flash-custom-recovery"
						titleSide={`${t('guide')} 3`}
					/>
					<CustomCard
						banner="/img/banner-flashromgsi.png"
						title={t('guide-flash-rom-gsi-title')}
						description={t('guide-flash-rom-gsi-description')}
						link="/blog/motorolaonefusion/guide-flash-rom-gsi"
						titleSide={`${t('guide')} 4`}
					/>
				</article>
			</section>
		</>
	);
}
