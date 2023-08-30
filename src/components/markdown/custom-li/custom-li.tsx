import type { ReactLi } from '~/types/shared';

import styles from './custom-li.module.css';

const CustomLi = (props: ReactLi) => {
	return <li className={styles['li']} {...props} />;
};

export default CustomLi;
