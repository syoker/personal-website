import { Toaster } from 'sonner';

import styles from './custom-toaster.module.css';

const CustomToaster = () => {
	return <Toaster className={styles['toaster']} />;
};

export default CustomToaster;
