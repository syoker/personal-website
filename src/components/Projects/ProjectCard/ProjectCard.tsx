import { useRouter } from 'next/router';
import { Card, CardActionArea } from '@mui/material';

import Image from 'next/image';

import styles from './styles/ProjectCard.module.css';

interface ProjectCardProps {
	banner: string;
	title: string;
	page: string;
	description: string;
	link: string;
}

export default function ProjectCard(props: ProjectCardProps) {
	const { banner, title, page, description, link } = props;

	const router = useRouter();

	const url = () => router.push(link);

	return (
		<Card variant="outlined" onClick={url} className={styles.card}>
			<CardActionArea className={styles.container}>
				<Image className={styles.banner} src={banner} alt={`${title} banner`} width={600} height={300} priority />
				<div className={styles.data}>
					<div className={styles.titlePage}>
						<h3>{title}</h3>
						<p>{page}</p>
					</div>
					<p>{description}</p>
				</div>
			</CardActionArea>
		</Card>
	);
}
