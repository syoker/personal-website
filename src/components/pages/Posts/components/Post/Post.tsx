import type { Post as PostProps, Date } from 'src/types/pages';

import dayjs from 'dayjs';
import Image from 'next/image';
import es from 'dayjs/locale/es';
import Content from './components/Content';
import Wrapper from './components/Wrapper';
import useTranslation from 'next-translate/useTranslation';

interface PostInterface {
	tag: string;
	category: string;
	post: PostProps;
}

const Post = ({ post, category, tag }: PostInterface) => {
	const { lang, t } = useTranslation('pages');

	const date: Date = {
		en: dayjs(post.created).format('LL'),
		es: dayjs(post.created).locale(es).format('LL'),
	};

	const renderTags = post.tags.map((tag, index) => (
		<li className="tag" key={index}>
			{t(tag)}
		</li>
	));

	return (
		<Wrapper href={`/${category}/${tag}/${post.alias}`}>
			<span className="background" />
			<Content>
				<div className="info">
					<Image className="banner" src={post.banner} alt={post.title} height="300" width="600" priority />
					<div className="content">{renderTags}</div>
					<h3 className="title">{post.title}</h3>
					<p className="description">{post.description}</p>
				</div>
				<p className="date">{date[lang]}</p>
			</Content>
		</Wrapper>
	);
};

export default Post;
