import { useRouter } from 'next/router';
import { Section } from 'src/components/error';
import { NameHead } from 'src/components/shared';
import type { Translations } from 'src/types/error';

import Link from 'next/link';
import useTranslation from 'next-translate/useTranslation';

export default function Error404() {
	const { asPath } = useRouter();
	const { lang } = useTranslation();

	const translations: Translations = {
		en: {
			nameHead: 'Error 404 | Page not found',
			title: '404',
			description: 'Page not found',
			redirect: 'Maybe you wanted to go to the following link: ',
		},
		es: {
			nameHead: 'Error 404 | Página no encontrada',
			title: '404',
			description: 'Página no encontrada',
			redirect: 'Tal vez querías ir al siguiente enlace: ',
		},
	};

	return (
		<Section>
			<NameHead>{translations[lang].nameHead}</NameHead>
			<h1>{translations[lang].title}</h1>
			<p>{translations[lang].description}</p>
			{asPath.includes('/blog/motorolaonefusion') && (
				<p className="redirect">
					{translations[lang].redirect}
					<Link href="./blog/astro">https://syoker.vercel.app/blog/astro</Link>
				</p>
			)}
		</Section>
	);
}
