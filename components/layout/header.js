import Link from 'next/link';
import Image from 'next/image';

import Nav from '../nav/nav';
import Logo from '../../public/assets/logo.svg';

import styles from './header.module.scss';

const Header = () => {
	return (
		<header className={styles.header}>
			<div className={styles.content}>
				<div className={styles.logo}>
					<h1>
						<Link href="/">
							<Logo />
						</Link>
					</h1>
				</div>
				<Nav />
				<div className={styles.image}>
					<Image
						src="/assets/image-avatar.png"
						alt="avatar"
						fill
						sizes="100%"
					/>
				</div>
			</div>
		</header>
	);
};

export default Header;
