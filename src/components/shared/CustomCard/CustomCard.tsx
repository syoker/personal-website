import { useRouter } from 'next/router';
import { Card, CardActionArea } from '@mui/material';

import Image from 'next/image';

import styles from './styles/CustomCard.module.css';

interface CustomCardProps {
	banner: string;
	title: string;
	description: string;
	link: string;
	titleSide?: string;
	sx?: { width?: string };
}

export default function CustomCard(props: CustomCardProps) {
	const { banner, title, description, link, titleSide, sx } = props;

	const router = useRouter();

	const cardStyle = sx ? sx : { width: '100%' };

	return (
		<Card variant="outlined" sx={cardStyle} onClick={() => router.push(link)} className={styles.card}>
			<CardActionArea className={styles.container}>
				<Image className={styles.banner} src={banner} alt={`${title} banner`} width={600} height={300} priority />
				<div className={styles.data}>
					<div className={styles.titlePage}>
						<h3>{title}</h3>
						{titleSide && <p>{titleSide}</p>}
					</div>
					<p>{description}</p>
				</div>
			</CardActionArea>
		</Card>
	);
}
