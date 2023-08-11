import type { ReactCode } from 'src/types/shared';

import CustomPre from '../CustomPre/CustomPre';
import Highlight from 'react-highlight';
import Header from './components/Header';
import StyledCode from './components/StyledCode';
import validLanguages from './utils/validLanguages';
import StyledEditor from './components/StyledEditor';
import getResolvedLinesAndTitle from './utils/getResolvedLinesAndTitle';

const CustomCode = ({ children, className }: ReactCode) => {
	const { lines, resolvedTitle } = getResolvedLinesAndTitle(children);

	if (!className && typeof children === 'string') {
		if (/\n/.test(children)) {
			return <CustomPre>{children}</CustomPre>;
		}

		return <StyledCode>{children}</StyledCode>;
	}

	return (
		<StyledEditor className="code-with-editor">
			<Header language={className || ''} title={className === 'language-bash' ? 'Terminal' : resolvedTitle}>
				{children}
			</Header>
			<section className="editor">
				{className !== 'language-bash' && (
					<article className="number-line">
						{lines.map((line, index) => (
							<p className="number" key={line + index}>
								{index}
							</p>
						))}
					</article>
				)}

				<Highlight className={validLanguages[className || ''] && validLanguages[className || ''].language}>
					{children}
				</Highlight>
			</section>
		</StyledEditor>
	);
};

export default CustomCode;
