import { Body, Signature } from 'src/components/Article';

import useTranslation from 'next-translate/useTranslation';

import GuideES from './es.mdx';
import GuideEN from './en.mdx';

import styles from 'src/styles/Article.module.css';

export default function GuideFlashROMGSI() {
	const { t, lang } = useTranslation('article');

	return (
		<Body>
			<h1 className={styles.title}>{t('title-flash-rom-gsi')}</h1>
			{lang === 'es' ? <GuideES /> : <GuideEN />}
			<Signature>
				<p>{t('signature')}</p>
			</Signature>
		</Body>
	);
}
