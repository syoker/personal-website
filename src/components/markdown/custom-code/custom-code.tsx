import { getResolvedLinesAndTitle } from './custom-code.functions';

import type { ReactCode } from '~/types/shared';

import Header from './header/header';
import styles from './custom-code.module.css';
import CustomPre from '../custom-pre/custom-pre';

const CustomCode = ({ children, className }: ReactCode) => {
	const { lines, resolvedTitle } = getResolvedLinesAndTitle(children);

	if (!className && typeof children === 'string') {
		if (/\n/.test(children)) {
			return <CustomPre>{children}</CustomPre>;
		}

		return <code className={styles['code-without-editor']}>{children}</code>;
	}

	return (
		<code className={styles['code-with-editor']}>
			<Header language={className || ''} title={className === 'language-bash' ? 'Terminal' : resolvedTitle}>
				{children}
			</Header>
			<section className={styles['editor']}>
				{className !== 'language-bash' && (
					<article className={styles['number-line']}>
						{lines.map((line, index) => (
							<p className={styles['number']} key={line + index}>
								{index}
							</p>
						))}
					</article>
				)}

				<pre>{children}</pre>
			</section>
		</code>
	);
};

export default CustomCode;
