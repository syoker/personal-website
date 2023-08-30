import { useRouter } from 'next/router';
import { METADATA } from '~/constants/error';
import { CustomHead } from '~/components/shared';

import Link from 'next/link';
import classNames from 'classnames';
import useTranslation from 'next-translate/useTranslation';

import styles from '~/styles/error.module.css';

export default function Error404() {
	const { asPath } = useRouter();
	const { lang } = useTranslation();

	const classes = classNames(styles['redirect'], asPath.includes('/blog/motorolaonefusion') && styles['show']);

	return (
		<CustomHead properties={METADATA.error404[lang]}>
			<main className={styles['error']}>
				<h1>404</h1>
				<p>{METADATA.error404[lang].description}</p>
				<p className={classes}>
					{METADATA.error404[lang].redirect}
					<Link href="./blog/astro">{METADATA.error404[lang].redirectURL}</Link>
				</p>
			</main>
		</CustomHead>
	);
}
