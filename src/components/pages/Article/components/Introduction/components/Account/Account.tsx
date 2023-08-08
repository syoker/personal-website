import Image from 'next/image';
import Wrapper from './components/Wrapper';
import validUsers from './utils/validUsers';

const Account = ({ username }: { username: string }) => {
	if (validUsers[username]) {
		return (
			<Wrapper href={validUsers[username].url}>
				<Image
					className="avatar"
					src={validUsers[username].avatar}
					alt="author profile"
					width="200"
					height="200"
					priority
				/>
				<div className="information">
					<p className="name">{validUsers[username].name}</p>
					<p className="alias">{validUsers[username].alias}</p>
				</div>
			</Wrapper>
		);
	}

	return null;
};

export default Account;
