import type { ReactUList } from '~/types/shared';

import styles from './custom-ulist.module.css';

const CustomUList = (props: ReactUList) => {
	return <ul className={styles['ul']} {...props} />;
};

export default CustomUList;
