import type { ReactParagraph } from 'src/types/shared';
import { Fragment, type ReactNode, type ReactPortal } from 'react';

import styled from '@emotion/styled';
import CustomAnchor from '../CustomAnchor/CustomAnchor';
import CustomImage from '../CustomImage/CustomImage';
import CustomCode from '../CustomCode/CustomCode';
import StyledParagraph from './components/StyledParagraph';

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
			return <StyledImageContainer>{resolvedChildren}</StyledImageContainer>;
		}

		return <StyledParagraph {...rest}>{resolvedChildren}</StyledParagraph>;
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
			<StyledParagraph>
				{fragments.map((fragment, index) => {
					return (
						<Fragment key={index}>
							{index > 0 && <CustomAnchor href={urls[index - 1] || ''}>{urls[index - 1]}</CustomAnchor>}
							{fragment}
						</Fragment>
					);
				})}
			</StyledParagraph>
		);
	}

	return <StyledParagraph {...rest}>{children}</StyledParagraph>;
};

const hasNonEmptyChildContent = (element: ReactPortal): boolean => {
	const childPortals = element.props.children as ReactPortal[];
	if (!Array.isArray(childPortals)) return false;

	const firstChild = childPortals[0].props.children;
	return firstChild !== '\n';
};

const shouldRenderCustomImageOnContainer = (elements: ReactNode[]): boolean => {
	let shouldRender = true;

	if (elements.length <= 1) {
		return shouldRender;
	}

	elements.forEach((element) => {
		const customElement = element as ReactPortal;

		if (element && !hasNonEmptyChildContent(customElement)) {
			if (customElement.type !== CustomImage) {
				shouldRender = false;
			}
		}
	});

	return shouldRender;
};

const StyledImageContainer = styled('div')`
	gap: 0.5rem;
	display: flex;
	flex-wrap: wrap;
	align-items: center;

	img {
		width: auto;
		height: auto;
	}
`;

export default CustomParagraph;
