import { IconLink } from 'src/components/shared';
import { PiGithubLogoBold } from 'react-icons/pi';

import type { Post, Date } from 'src/types/pages';

import dayjs from 'dayjs';
import Link from 'next/link';
import Image from 'next/image';
import es from 'dayjs/locale/es';
import Tags from './components/Tags';
import Wrapper from './components/Wrapper';
import Account from './components/Account/Account';
import useTranslation from 'next-translate/useTranslation';

const Introduction = ({ post }: { post: Post }) => {
	const { t, lang } = useTranslation('pages');

	const date: Date = {
		en: dayjs(post.created).format('LL'),
		es: dayjs(post.created).locale(es).format('LL'),
	};

	const renderTags = post.tags.map((tag, index) => (
		<Link key={index} className="tag" href={`./${post.category}/${tag}`}>
			{t(tag)}
		</Link>
	));

	const renderIconLink = post.category === 'projects' && (
		<IconLink href={post.url} rel="noreferrer noopener" target="_blank">
			<PiGithubLogoBold />
		</IconLink>
	);

	const renderContributors = post.contributors && (
		<>
			<h4 className="title-container">{t('contributors')}</h4>
			<div className="container-contributors">
				{post.contributors.map((contributor, index) => (
					<Account key={index} username={contributor} />
				))}
			</div>
		</>
	);

	return (
		<Wrapper>
			<Tags>{renderTags}</Tags>
			<div className="title">
				<h1>{post.title}</h1>
				{renderIconLink}
			</div>
			<p className="description">{post.description}</p>
			<Image className="banner" src={post.banner} alt={post.title} width="1200" height="600" priority />

			<div className="container">
				<div className="users">
					<h2 className="title-container">{t('author')}</h2>
					<Account username={post.author} />
					{renderContributors}
				</div>
				<p className="schedule">{date[lang]}</p>
			</div>
		</Wrapper>
	);
};

export default Introduction;
