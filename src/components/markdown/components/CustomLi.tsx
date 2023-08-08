import { useRouter } from 'next/router';
import type { ReactLi } from 'src/types/shared';

import styled from '@emotion/styled';

const CustomLi = ({ children, ...rest }: ReactLi) => {
	const { query } = useRouter();

	const category = (query['pages'] || '')[0];

	if (category === 'projects') {
		return (
			<StyledUList style={{ margin: '0rem 0rem' }} {...rest}>
				{children}
			</StyledUList>
		);
	}

	return <StyledUList {...rest}>{children}</StyledUList>;
};

const StyledUList = styled('li')`
	margin: 1rem 0rem;

	color: var(--md-color-on-background);
	transition: color var(--transition);

	blockquote {
		margin: 0.2rem 0rem;
	}

	p {
		margin: 0.2rem 0rem;
	}

	pre {
		margin: 0.4rem 0rem;

		div {
			margin: 0.2rem 0rem;
		}
	}

	header {
		.container {
			h3 {
				margin: 0rem;
			}
		}
	}
`;

export default CustomLi;
