import useTranslation from 'next-translate/useTranslation';
import type { GetServerSidePropsContext, GetServerSideProps } from 'next';

import { Head, Header, Footer, CustomIconButton } from 'src/components/shared';

import styles from 'src/styles/Home.module.css';

export default function Home({ path }: { path: string }) {
	const { t } = useTranslation('home');

	return (
		<>
			<Header pathname={path} />

			<Head
				title="Lautaro"
				description="An electronics technician who enjoys programming, watching anime and reading manga."
				ogUrl="https://syoker.vercel.app/"
				ogTitle="Lautaro"
				ogDescription="An electronics technician who enjoys programming, watching anime and reading manga."
				ogImage="https://raw.githubusercontent.com/Syoker/personal-website/main/public/img/banner-socialshare.png"
			/>

			<section className={styles.presentation}>
				<h1>{t('home-title')}</h1>
				<p>{t('home-paragraph')}</p>
				<nav className={styles.social}>
					<CustomIconButton icon="/icon/github.svg" link="https://github.com/Syoker" />
					<CustomIconButton icon="/icon/gmail.svg" link="mailto:lautarogomezcastro@outlook.com.ar" />
					<CustomIconButton icon="/icon/telegram.svg" link="https://t.me/Syoker" />
					<CustomIconButton icon="/icon/twitter.svg" link="https://twitter.com/Syoker_" />
					<CustomIconButton icon="/icon/youtube.svg" link="https://www.youtube.com/channel/UChPFf_wds74OSNKWuZCa-zA" />
				</nav>
			</section>

			<Footer path={path} />
		</>
	);
}

export const getServerSideProps: GetServerSideProps = async (context: GetServerSidePropsContext) => {
	return {
		props: {
			path: context.resolvedUrl,
		},
	};
};
