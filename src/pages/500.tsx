import { METADATA } from '~/constants/error';
import { CustomHead } from '~/components/shared';

import useTranslation from 'next-translate/useTranslation';

import styles from '~/styles/error.module.css';

export default function Error404() {
	const { lang } = useTranslation();

	return (
		<CustomHead properties={METADATA.error500[lang]}>
			<main className={styles['error']}>
				<h1>500</h1>
				<p>{METADATA.error500[lang].description}</p>
			</main>
		</CustomHead>
	);
}
