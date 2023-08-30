import CustomAnchor from './custom-anchor/custom-anchor';
import CustomBlockquote from './custom-blockquote/custom-blockquote';
import CustomCode from './custom-code/custom-code';
import CustomHeading from './custom-heading/custom-heading';
import CustomImage from './custom-image/custom-image';
import CustomLi from './custom-li/custom-li';
import CustomOList from './custom-olist/custom-olist';
import CustomParagraph from './custom-paragraph/custom-paragraph';
import CustomPre from './custom-pre/custom-pre';
import CustomUList from './custom-ulist/custom-ulist';
import CustomVideo from './custom-video/custom-video';

const components = {
	a: CustomAnchor,
	p: CustomParagraph,
	h1: CustomHeading.H1,
	h2: CustomHeading.H2,
	li: CustomLi,
	ol: CustomOList,
	ul: CustomUList,
	img: CustomImage,
	pre: CustomPre,
	code: CustomCode,
	blockquote: CustomBlockquote,
	CustomVideo: CustomVideo,
};

export default components;
