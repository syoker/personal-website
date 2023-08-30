import type { Indicator as IndicatorProps } from './indicator.types';

import styles from './indicator.module.css';

const Indicator = ({ width, position, ...rest }: IndicatorProps) => {
	return (
		// @ts-expect-error ignore
		<span className={styles['span']} style={{ '--width': `${width}px`, '--position': `${position}px` }} {...rest} />
	);
};

export default Indicator;
