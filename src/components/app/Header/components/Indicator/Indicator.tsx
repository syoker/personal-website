import type { ReactElement } from 'src/types/shared';

import styled from '@emotion/styled';

type IndicatorProps = ReactElement & {
	width: number;
	position: number;
};

const Indicator = ({ width, position, ...rest }: IndicatorProps) => {
	// @ts-expect-error This is a variable, not an error.
	return <Wrapper style={{ '--width': `${width}px`, '--position': `${position}px` }} {...rest} />;
};

const Wrapper = styled('span')`
	bottom: 0;
	position: absolute;

	opacity: 1;
	margin: auto;

	height: 3px;
	border-radius: 10rem;

	width: calc(var(--width) - 2rem);
	left: calc(1rem + var(--position));

	background-color: var(--md-color-primary);
	transition: left var(--transition), width var(--transition);
`;

export default Indicator;
