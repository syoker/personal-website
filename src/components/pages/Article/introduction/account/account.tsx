import { USERS } from '~/constants/shared';

import Link from 'next/link';
import Image from 'next/image';
import styles from './account.module.css';

const Account = ({ username }: { username: string }) => {
	if (USERS[username]) {
		return (
			<Link className={styles['account']} href={USERS[username].url} rel="noreferrer noopener" target="_blank">
				<Image
					className={styles['avatar']}
					src={USERS[username].avatar}
					alt={USERS[username].name + ' profile picture'}
					width="200"
					height="200"
					priority
				/>
				<article className={styles['information']}>
					<p className={styles['name']}>{USERS[username].name}</p>
					<p className={styles['alias']}>{USERS[username].alias}</p>
				</article>
			</Link>
		);
	}

	return null;
};

export default Account;
