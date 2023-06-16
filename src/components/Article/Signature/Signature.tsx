import { type PropsWithChildren } from 'react';

import styles from './styles/Signature.module.css';

export default function Signature({ children }: PropsWithChildren) {
	return (
		<div className={styles.signature}>
			{children}
		</div>
	);
}
