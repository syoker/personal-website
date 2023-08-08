import { useRouter } from 'next/router';

import Wrapper from './components/Wrapper';
import useTranslation from 'next-translate/useTranslation';

const Category = ({ children, category }: { children: string; category: string }) => {
	const { asPath } = useRouter();
	const { t } = useTranslation('pages');

	const path = children === 'all' ? '/' + category : '/' + category + '/' + children;
	const borderColor = path === asPath ? 'var(--md-color-primary)' : 'var(--md-color-outline)';
	const textColor = path === asPath ? 'var(--md-color-primary)' : 'var(--md-color-on-background)';

	return (
		// @ts-expect-error This is a variable, not an error
		<Wrapper href={path} style={{ '--text-color': textColor, '--border-color': borderColor }}>
			{t(children)}
		</Wrapper>
	);
};

export default Category;
