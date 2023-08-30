import type { ReactParagraph } from '~/types/shared';
import { Fragment, type ReactNode, type ReactPortal } from 'react';
import { shouldRenderCustomImageOnContainer } from './custom-paragraph.functions';

import CustomAnchor from '../custom-anchor/custom-anchor';
import CustomImage from '../custom-image/custom-image';
import CustomCode from '../custom-code/custom-code';

import styles from './custom-paragraph.module.css';

const CustomParagraph = ({ children, ...rest }: ReactParagraph) => {
	const childrenAsArray = children as ReactNode[];

	if (childrenAsArray.length > 1 && typeof children !== 'string') {
		const resolvedChildren = childrenAsArray.map((child, index) => {
			const content = typeof child === 'string' ? (child as string) : (child as ReactPortal);

			if (typeof content === 'string') {
				const patternURL: RegExp = /\b(?:https?:\/\/\S+|www\.\S+)\b\/?/g;
				const urls = content.match(patternURL) || [''];
				const fragments = content.split(patternURL) || [''];

				return (
					<Fragment key={index}>
						{fragments.map((fragment, index) => {
							return (
								<Fragment key={index}>
									{index > 0 && <CustomAnchor href={urls[index - 1] || ''}>{urls[index - 1]}</CustomAnchor>}
									{fragment}
								</Fragment>
							);
						})}
					</Fragment>
				);
			}

			if (content.type === CustomAnchor) {
				return <CustomAnchor key={index} {...content.props} />;
			}

			if (content.type === 'em') {
				return content;
			}

			if (content.type === 'strong') {
				return content;
			}

			if (content.type === CustomImage) {
				return <CustomImage key={index} {...content.props} />;
			}

			if (content.type === CustomCode) {
				return <Fragment key={index}>{content}</Fragment>;
			}

			if (content.type === 'pre') {
				return content;
			}

			return child;
		});

		if (shouldRenderCustomImageOnContainer(resolvedChildren)) {
			return <div className={styles['image-container']}>{resolvedChildren}</div>;
		}

		return (
			<p className={styles['paragraph']} {...rest}>
				{resolvedChildren}
			</p>
		);
	}

	if (children && typeof children !== 'string') {
		const resolvedChildren = children as ReactPortal;

		if (resolvedChildren.type === CustomImage) {
			return resolvedChildren;
		}
	}

	if (typeof children === 'string') {
		const patternURL: RegExp = /\b(?:https?:\/\/\S+|www\.\S+)\b\/?/g;
		const urls = children.match(patternURL) || [''];
		const fragments = children.split(patternURL) || [''];

		return (
			<p className={styles['paragraph']}>
				{fragments.map((fragment, index) => {
					return (
						<Fragment key={index}>
							{index > 0 && <CustomAnchor href={urls[index - 1] || ''}>{urls[index - 1]}</CustomAnchor>}
							{fragment}
						</Fragment>
					);
				})}
			</p>
		);
	}

	return (
		<p className={styles['paragraph']} {...rest}>
			{children}
		</p>
	);
};

export default CustomParagraph;
