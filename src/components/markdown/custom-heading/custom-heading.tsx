import type { ReactHeading } from '~/types/shared';

import styles from './custom-heading.module.css';

export const CustomH1 = (props: ReactHeading) => {
	return <h1 className={styles['h1']} {...props} />;
};

export const CustomH2 = (props: ReactHeading) => {
	return <h2 className={styles['h2']} {...props} />;
};

const CustomHeading = {
	H1: CustomH1,
	H2: CustomH2,
};

export default CustomHeading;
