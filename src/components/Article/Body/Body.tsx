import { type PropsWithChildren } from 'react';

import styles from './styles/Body.module.css';

export default function Body({ children }: PropsWithChildren) {
	return <section className={styles.body}>{children}</section>;
}
