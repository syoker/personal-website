import { useRouter } from 'next/router';
import { IconButton } from '@mui/material';

import Image from 'next/image';

import styles from './styles/CustomIconButton.module.css';

export default function CustomIconButton({ icon, link }: { icon: string; link: string }) {
	const router = useRouter();

	return (
		<IconButton  onClick={() => router.push(link)}>
			<Image className={styles.icon} src={icon} alt="icon" width={200} height={200} priority />
		</IconButton>
	);
}
