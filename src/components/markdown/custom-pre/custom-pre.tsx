import type { ReactPre } from '~/types/shared';

import styles from './custom-pre.module.css';

const CustomPre = ({ children, ...rest }: ReactPre) => {
	if (typeof children === 'string') {
		return (
			<pre className={styles['pre']} {...rest}>
				{children}
			</pre>
		);
	}

	return children;
};

export default CustomPre;
