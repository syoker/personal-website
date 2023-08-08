import { Section } from 'src/components/error';
import { NameHead } from 'src/components/shared';
import type { Translations } from 'src/types/error';

import useTranslation from 'next-translate/useTranslation';

export default function Error404() {
	const { lang } = useTranslation();

	const translations: Translations = {
		en: {
			nameHead: 'Error 500 | Internal server error',
			title: '500',
			description: 'Internal server error',
		},
		es: {
			nameHead: 'Error 500 | Error interno del servidor',
			title: '500',
			description: 'Error interno del servidor',
		},
	};

	return (
		<Section>
			<NameHead>{translations[lang].nameHead}</NameHead>
			<h1>{translations[lang].title}</h1>
			<p>{translations[lang].description}</p>
		</Section>
	);
}
