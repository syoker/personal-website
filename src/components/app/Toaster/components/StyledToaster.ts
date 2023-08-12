import { Toaster } from 'sonner';

import styled from '@emotion/styled';

const StyledToaster = styled(Toaster)`
	li {
		color: var(--md-color-on-surface-variant) !important;
		background: var(--md-color-surface-variant) !important;
		border: 1px solid var(--md-color-outline-variant) !important;
	}
`;

export default StyledToaster;
