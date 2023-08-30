import type { ReactImage } from '~/types/shared';

import styles from './custom-image.module.css';

const CustomImage = (props: ReactImage) => {
	// eslint-disable-next-line @next/next/no-img-element, jsx-a11y/alt-text
	return <img className={styles['image']} width="1280" height="720" {...props} />;
};

export default CustomImage;
