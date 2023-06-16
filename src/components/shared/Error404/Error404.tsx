import useTranslation from 'next-translate/useTranslation';

import styles from './styles/Error404.module.css';

export default function Error404() {
	const { t } = useTranslation('error')

	return (
		<section className={styles.error}>
			<h1>{'404'}</h1>
			<p>{t('page-not-found')}</p>
		</section>
	);
}
