import { useRouter } from 'next/router';
import { Card, CardActionArea } from '@mui/material';

import Link from 'next/link';
import Image from 'next/image';

import styles from './styles/GuideCard.module.css';

interface GuideCardProps {
	banner: string;
	title: string;
	description: string;
	link: string;
	index: string;
}

export default function GuideCard(props: GuideCardProps) {
	const { banner, title, description, link, index } = props;

	const router = useRouter();

	const url = () => router.push(link);

	return (
		<Card variant="outlined" onClick={url} className={styles.card}>
			<CardActionArea className={styles.container}>
				<Image className={styles.banner} src={banner} alt={`${title} banner`} width={600} height={300} priority />
				<div className={styles.data}>
					<div className={styles.titleIndex}>
						<h3>{title}</h3>
						<p>{index}</p>
					</div>
					<p>{description}</p>
				</div>
			</CardActionArea>
		</Card>
	);
}
