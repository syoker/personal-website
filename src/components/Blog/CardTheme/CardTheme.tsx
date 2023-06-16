import { useRouter } from 'next/router';
import { Card, CardActionArea } from '@mui/material';

import Image from 'next/image';

import styles from './styles/CardTheme.module.css';

interface CardThemeProps {
	banner: string;
	title: string;
	description: string;
	link: string;
}

export default function CardTheme(props: CardThemeProps) {
	const { banner, title, description, link } = props;

	const router = useRouter();

	const url = () => router.push(link);

	return (
		<Card variant="outlined" onClick={url} className={styles.card}>
			<CardActionArea className={styles.container}>
				<Image className={styles.banner} src={banner} alt={`${title} banner`} width={600} height={300} priority />
				<div className={styles.data}>
					<h3>{title}</h3>
					<p>{description}</p>
				</div>
			</CardActionArea>
		</Card>
	);
}
