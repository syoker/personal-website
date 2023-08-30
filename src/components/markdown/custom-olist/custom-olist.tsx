import type { ReactOList } from '~/types/shared';

import styles from './custom-olist.module.css';

const CustomOList = (props: ReactOList) => {
	return <ol className={styles['ol']} {...props} />;
};

export default CustomOList;
