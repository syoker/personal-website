import type { ReactBlockquote } from '~/types/shared';

import styles from './custom-blockquote.module.css';

const CustomBlockquote = (props: ReactBlockquote) => {
	return <blockquote className={styles['blockquote']} {...props} />;
};

export default CustomBlockquote;
