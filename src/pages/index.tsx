import { LuGithub, LuMail, LuTwitter, LuYoutube } from 'react-icons/lu';
import { TbBrandTelegram } from 'react-icons/Tb';

import Link from 'next/link';
import useTranslation from 'next-translate/useTranslation';

import { Head } from 'src/components/shared';

import styles from 'src/styles/Home.module.css';

export default function Home() {
	const { t } = useTranslation('home');

	return (
		<>
			<Head
				title="Syoker"
				description="An electronics technician who enjoys programming, watching anime and reading manga."
				ogUrl="https://syoker.github.io/"
				ogTitle="Syoker"
				ogDescription="An electronics technician who enjoys programming, watching anime and reading manga."
				ogImage="https://raw.githubusercontent.com/Syoker/syoker.github.io/main/public/img/banner-socialshare.png"
			/>

			<section className={styles.presentation}>
				<h1>{t('home-title')}</h1>
				<p>{t('home-paragraph')}</p>
				<nav className={styles.social}>
					<Link href="https://github.com/Syoker" target="_blank">
						<LuGithub className={styles.icon} />
					</Link>
					<Link href="mailto:lautarogomezcastro@outlook.com.ar" target="_blank">
						<LuMail className={styles.icon} />
					</Link>
					<Link href="https://t.me/Syoker" target="_blank">
						<TbBrandTelegram className={styles.icon} />
					</Link>
					<Link href="https://twitter.com/Syoker_" target="_blank">
						<LuTwitter className={styles.icon} />
					</Link>
					<Link href="https://www.youtube.com/channel/UChPFf_wds74OSNKWuZCa-zA" target="_blank">
						<LuYoutube className={styles.icon} />
					</Link>
				</nav>
			</section>
		</>
	);
}
