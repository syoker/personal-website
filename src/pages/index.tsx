import { Wrapper } from 'src/components/home';
import { NameHead, RouteHead, ThumbnailHead, DescriptionHead } from 'src/components/shared';

import useTranslation from 'next-translate/useTranslation';

export default function Home() {
	const { t } = useTranslation('home');

	return (
		<>
			<NameHead>{t('title-head')}</NameHead>
			<RouteHead>{t('route-head')}</RouteHead>
			<DescriptionHead>{t('description-head')}</DescriptionHead>
			<ThumbnailHead>
				https://raw.githubusercontent.com/Syoker/personal-website/main/public/img/social-share.png
			</ThumbnailHead>

			<Wrapper>
				<span />
				<article className="article">
					<h1 className="greeting">{t('greeting')}</h1>
					<h2 className="presentation">{t('presentation')}</h2>
					<code className="details">{`<code>${t('details')}</code>`}</code>
				</article>
				<span />
			</Wrapper>
		</>
	);
}
