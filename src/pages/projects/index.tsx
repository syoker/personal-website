import classNames from 'classnames';
import useTranslation from 'next-translate/useTranslation';

import { CustomCard, Head } from 'src/components/shared';

import styles from 'src/styles/Projects.module.css';

export default function Projects() {
	const { t } = useTranslation('projects');

	return (
		<>
			<Head
				title="Projects"
				description="In this section I will add all the projects I will be working on."
				ogUrl="https://syoker.vercel.app/project"
				ogTitle="Projects"
				ogDescription="In this section I will add all the projects I will be working on."
				ogImage="https://raw.githubusercontent.com/Syoker/personal-website/main/public/img/banner-socialshare.png"
			/>

			<section className={styles.projects}>
				<article className={styles.data}>
					<h2>{t('title-projects')}</h2>
					<p>{t('projects-additional-information')}</p>
				</article>
				<div className={styles.cardsContainer}>
					<h3>{t('title-apps-section')}</h3>
					<article className={styles.cards}>
						<CustomCard
							banner="https://opengraph.githubassets.com/e0cb0681d45728aac478d0facc963db17f3236009ab55c573e488b983f550707/Syoker/smartpillboxapp"
							title="Smart Pillbox App"
							titleSide="GitHub"
							description="An app to manage your SmartPillbox product."
							link="https://github.com/Syoker/SmartPillboxApp"
							sx={{ width: 'calc(50% - 0.5rem)' }}
						/>
					</article>
					<h3>{t('title-websites-section')}</h3>
					<article className={styles.cards}>
						<CustomCard
							banner="https://opengraph.githubassets.com/22e98067b867381178b93c444ed6cc814384c87a1f6ac940c86e20383a0c7520/Syoker/personal-website"
							title="Personal Website"
							titleSide="GitHub"
							description="This is my personal page made in React with NextJS and TypeScript, using MDX for the articles, and Next-Translate to support English and Spanish."
							link="https://github.com/Syoker/personal-website"
						/>
						<CustomCard
							banner="https://opengraph.githubassets.com/d109c32cf1438e624a9848b36bed7cb1e0ee6761c7e4f634822c002bdd4183b1/rickruad/proyecto-de-residencias"
							title="ProtoApp"
							titleSide="GitHub"
							description="Este es un proyecto realizado en React con NextJS y TypeScript."
							link="https://github.com/rickruad/proyecto-de-residencias"
						/>
						<CustomCard
							banner="https://opengraph.githubassets.com/31e94331a8ce52193ff25ae9b16250716b2d4ea149a84af0b8f0464557f24662/Syoker/vash"
							title="VASH"
							titleSide="GitHub"
							description="This is a self-hosted image and video viewer project focused on artists from various websites, such as Patreon, Fanbox, etc."
							link="https://github.com/Syoker/vash"
						/>
					</article>
					<h3>{t('title-magisk-modules-section')}</h3>
					<article className={classNames(styles.cards, styles.bottom)}>
						<CustomCard
							banner="https://opengraph.githubassets.com/54a1de2ecb609d28269db14a41cf27eb77c0d4db5e6b8e3e130fd0bb7825d676/Syoker/extra-themed-icons"
							title="Extra Themed Icons"
							titleSide="GitHub"
							description="More themed icons than a normal Pixel Launcher."
							link="https://github.com/Syoker/ExtraThemedIcons"
						/>
						<CustomCard
							banner="https://opengraph.githubassets.com/53a5d96694992ae43d744a85bbaa3b5039bf635e3b7950e53e8295eb8533fbb4/Syoker/moto-experience"
							title="Moto Experience"
							titleSide="GitHub"
							description="This module adds the features of the official Motorola One Fusion firmware (you can choose) in GSI."
							link="https://github.com/Syoker/MotoExperience"
						/>
						<CustomCard
							banner="https://opengraph.githubassets.com/d41987acc762ee1f4130e3fcf1ac5af62acf8c5d6b603b8a86c7efd4beb73025/Syoker/moto-onefusion-overlay"
							title="Motorola One Fusion Overlay"
							titleSide="GitHub"
							description="This module installs all necessary rro-overlays for the correct function of the GSI in the Motorola One Fusion (A11, A12, A12.1 & A13 ONLY)."
							link="https://github.com/Syoker/moto-onefusion-overlay"
						/>
						<CustomCard
							banner="https://opengraph.githubassets.com/3e145fbd34580655f948d3b58e00c042dbceda6330c0b1bdf594a702790588ed/Syoker/moto-onefusion-stock-overlay"
							title="Motorola One Fusion Stock Overlay"
							titleSide="GitHub"
							description="This module fixes and adds things to the official Motorola One Fusion firmware."
							link="https://github.com/Syoker/moto-onefusion-stock-overlay"
						/>
						<CustomCard
							banner="https://opengraph.githubassets.com/b6b5a6307a4b976bf76d703f3dfc790303772e346e1cb9ffd6964faca1e40887/Syoker/fix-multimedia-fingerprint"
							title="Fix Multiedia & Fingerprint"
							titleSide="GitHub"
							description="This module fixes the fingerprint and multimedia in ports where these features don't work, for Motorola One Fusion."
							link="https://github.com/Syoker/Astro_FixMultimediaFingerprint"
						/>
					</article>
				</div>
			</section>
		</>
	);
}
