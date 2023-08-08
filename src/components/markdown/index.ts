import CustomParagraph from './components/CustomParagraph';
import CustomH1 from './components/CustomH1';
import CustomH2 from './components/CustomH2';
import CustomLi from './components/CustomLi';
import CustomImage from './components/CustomImage';
import CustomAnchor from './components/CustomAnchor';
import CustomCode from './components/CustomCode/CustomCode';
import CustomBlockquote from './components/CustomBlockquote';
import CustomOList from './components/CustomOList';
import CustomPre from './components/CustomPre';
import CustomVideo from './components/CustomVideo';
import CustomUList from './components/CustomUList';

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
