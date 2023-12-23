import { PROJECTS } from '~/constants/home';
import { METADATA } from '~/constants/shared';
import { useRouter } from 'next/router';
import { CustomHead } from '~/components/shared';
import { ProjectCard } from '~/components/home';

import { BrandIcons } from '~/components/shared';

import Link from 'next/link';
import useTraslation from 'next-translate/useTranslation';

import styles from '~/styles/home.module.css';

export default function Home() {
	const { asPath } = useRouter();
	const { lang, t } = useTraslation('home');

	return (
		<CustomHead properties={METADATA[asPath][lang]}>
			<main className={styles['home']}>
				<section className={styles['presentation']}>
					<h1 className={styles['name']}>Syoker</h1>
					<h2 className={styles['full-stack']}>Front End</h2>
					<code className={styles['developer']}>Developer</code>
				</section>
				<section className={styles['pointers']}>
					<span />
					<span />
					<span />
					<span />
					<span />
					<span />
				</section>
				<section className={styles['projects']}>
					<article className={styles['title-section']}>
						<span className={styles['line']} />
						<h2 className={styles['title']}>{t('project')}</h2>
						<span className={styles['line']} />
					</article>
					<article className={styles['grid']}>
						<ProjectCard project={PROJECTS['extra-themed-icons'][lang]} />
						<span className={styles['line']} />
						<ProjectCard project={PROJECTS['proto-app'][lang]} reverse />
						<span className={styles['line']} />
						<ProjectCard project={PROJECTS['moto-experience'][lang]} />
						<span className={styles['line']} />
						<ProjectCard project={PROJECTS['moto-onefusion-overlay'][lang]} reverse />
					</article>
					<Link
						className={styles['button']}
						title="GitHub Repositories"
						target="_blank"
						rel="noopener noreferrer"
						href="https://github.com/syoker?tab=repositories"
					>
						<span className={styles['background']} />
						{t('github-button')}
					</Link>
				</section>
			</main>
			<footer className={styles['footer']}>
				<nav>
					<Link href="https://github.com/syoker" title="GitHub" target="_blank" rel="noopener noreferrer">
						<BrandIcons icon="github" />
					</Link>
					<Link href="https://twitter.com/syoker_" title="Twitter" target="_blank" rel="noopener noreferrer">
						<BrandIcons icon="twitter" />
					</Link>
					<Link href="https://www.youtube.com/@syoker" title="YouTube" target="_blank" rel="noopener noreferrer">
						<BrandIcons icon="youtube" />
					</Link>
					<Link href="mailto:syoker@outlook.com" title="Mail">
						<BrandIcons icon="envelope" />
					</Link>
				</nav>
				<p className={styles['text']}>
					{lang === 'es' ? 'Escrito en ' : 'Written in '}
					<Link className={styles['link']} href="https://react.dev" target="_blank" rel="noopener noreferrer">
						React
					</Link>
					{lang === 'es' ? ' con ' : ' with '}
					<Link className={styles['link']} href="https://nextjs.org" target="_blank" rel="noopener noreferrer">
						NextJS
					</Link>
					{lang === 'es' ? ' y ' : ' and '}
					<Link
						className={styles['link']}
						href="https://www.typescriptlang.org"
						target="_blank"
						rel="noopener noreferrer"
					>
						TypeScript
					</Link>
					{lang === 'es' ? ', usando ' : ', using '}
					<Link
						className={styles['link']}
						href="https://github.com/css-modules/css-modules"
						target="_blank"
						rel="noopener noreferrer"
					>
						CSS Modules
					</Link>
					{lang === 'es' ? ' para el diseño, ' : ' for layout, '}
					<Link
						className={styles['link']}
						href="https://github.com/aralroca/next-translate"
						target="_blank"
						rel="noopener noreferrer"
					>
						next-translate
					</Link>
					{lang === 'es' ? ' para la internacionalización, y ' : ' for internationalization, and '}
					<Link className={styles['link']} href="https://mdxjs.com" target="_blank" rel="noopener noreferrer">
						mdx-js
					</Link>
					{lang === 'es' ? ' para convertir los articulos de ' : ' to convert '}
					<Link className={styles['link']} href="https://mdxjs.com" target="_blank" rel="noopener noreferrer">
						MDX
					</Link>
					{lang === 'es' ? ' a ' : ' articles to '}
					<Link
						className={styles['link']}
						href="https://developer.mozilla.org/es/docs/Web/JavaScript"
						target="_blank"
						rel="noopener noreferrer"
					>
						JavaScript
					</Link>
					{'.'}
				</p>
			</footer>
		</CustomHead>
	);
}
