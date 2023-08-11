import CustomParagraph from './CustomParagraph/CustomParagraph';
import CustomH1 from './CustomH1/CustomH1';
import CustomH2 from './CustomH2/CustomH2';
import CustomLi from './CustomLi/CustomLi';
import CustomImage from './CustomImage/CustomImage';
import CustomAnchor from './CustomAnchor/CustomAnchor';
import CustomCode from './CustomCode/CustomCode';
import CustomBlockquote from './CustomBlockquote/CustomBlockquote';
import CustomOList from './CustomOList/CustomOList';
import CustomPre from './CustomPre/CustomPre';
import CustomVideo from './CustomVideo/CustomVideo';
import CustomUList from './CustomUList/CustomUList';

const components = {
	p: CustomParagraph,
	h1: CustomH1,
	h2: CustomH2,
	li: CustomLi,
	ol: CustomOList,
	ul: CustomUList,
	pre: CustomPre,
	a: CustomAnchor,
	img: CustomImage,
	code: CustomCode,
	CustomAnchor: CustomAnchor,
	CustomCode: CustomCode,
	CustomVideo: CustomVideo,
	blockquote: CustomBlockquote,
};

export default components;
