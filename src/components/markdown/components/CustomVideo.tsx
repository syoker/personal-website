import type { ReactVideo } from 'src/types/shared';

const CustomVideo = (props: ReactVideo) => {
	return <video {...props} autoPlay loop muted />;
};

export default CustomVideo;
