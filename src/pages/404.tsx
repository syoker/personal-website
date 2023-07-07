import { Head } from 'src/components/shared';

import useTranslation from 'next-translate/useTranslation';

import styles from 'src/styles/Error404.module.css';

export default function Error404() {
	const { lang } = useTranslation('error');

	const paragraph = lang === 'es' ? 'Página no encontrada' : 'Page not found';

	return (
		<>
			<Head title="Error 404 | Page not found " description="Page not found" />
			<section className={styles.error}>
				<h1>{'404'}</h1>
				<p>{paragraph}</p>
			</section>
		</>
	);
}
