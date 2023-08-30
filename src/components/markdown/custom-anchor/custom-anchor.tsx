import type { ReactAnchor } from '~/types/shared';

import Link from 'next/link';
import styles from './custom-anchor.module.css';

const CustomAnchor = ({ children, href }: ReactAnchor) => {
	return (
		<Link className={styles['anchor']} href={{ pathname: href }} rel="noreferrer noopener" target="_blank">
			{children}
		</Link>
	);
};

export default CustomAnchor;
