import styles from './styles/Video.module.css';

export default function Video({ src }: { src: string }) {
	return <video className={styles.video} src={src} autoPlay loop muted />;
}
