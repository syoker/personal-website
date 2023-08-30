import type { Project } from '~/types/home';
import { getBrowser } from '~/functions/shared';

import Link from 'next/link';
import Image from 'next/image';
import classNames from 'classnames';

import styles from './project-card.module.css';

const ProjectCard = ({ reverse, project }: { reverse?: boolean; project: Project }) => {
	const linkClasses = classNames(styles['project'], reverse && styles['project-reverse']);
	const hostClasses = classNames(styles['host'], reverse && styles['host-reverse']);
	const infoClasses = classNames(styles['info'], reverse && styles['info-reverse']);
	const titleClasses = classNames(styles['title'], reverse && styles['title-reverse']);
	const descriptionClasses = classNames(styles['description'], reverse && styles['description-reverse']);
	const tagsClasses = classNames(styles['tags'], reverse && styles['tags-reverse']);

	return (
		<Link className={linkClasses} href={project.url} target="_blank" rel="noopener noreferrer">
			<span className={styles['background']} />
			<Image
				className={styles['banner']}
				// @ts-expect-error ignore
				style={{ '--width': `${getBrowser() === 'Firefox' ? '150%' : '60%'}` }}
				src={project.banner}
				alt="image"
				width="1200"
				height="630"
				priority
			/>
			<span className={hostClasses}>{project.host}</span>
			<section className={infoClasses}>
				<h1 className={titleClasses}>{project.title}</h1>
				<p className={descriptionClasses}>{project.description}</p>
				<div className={tagsClasses}>
					{project.tags.map((tag, index) => (
						<span key={index} aria-label={`${tag} tag`} className={styles['tag']}>
							{tag}
						</span>
					))}
				</div>
			</section>
		</Link>
	);
};

export default ProjectCard;
