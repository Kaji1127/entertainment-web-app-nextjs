import Link from 'next/link';

import HomeIcon from '../../public/assets/icon-nav-home.svg';
import MovieIcon from '../../public/assets/icon-nav-movies.svg';
import TVIcon from '../../public/assets/icon-nav-tv-series.svg';
import BookmarkIcon from '../../public/assets/icon-nav-bookmark.svg';

import styles from './nav.module.scss';
import { useRouter } from 'next/router';

const Nav = () => {
	const router = useRouter();

	return (
		<nav>
			<ul className={styles.nav}>
				<li
					className={`${styles.list} ${router.asPath === '/' && styles.active}`}
				>
					<Link href="/">
						<HomeIcon />
					</Link>
				</li>
				<li
					className={`${styles.list} ${
						router.asPath === '/Movie' && styles.active
					}`}
				>
					<Link href="/Movie">
						<MovieIcon />
					</Link>
				</li>
				<li
					className={`${styles.list} ${
						router.asPath === '/TV%20Series' && styles.active
					}`}
				>
					<Link href="/TV Series">
						<TVIcon />
					</Link>
				</li>
				<li
					className={`${styles.list} ${
						router.asPath === '/bookmarked' && styles.active
					}`}
				>
					<Link href="/bookmarked">
						<BookmarkIcon />
					</Link>
				</li>
			</ul>
		</nav>
	);
};

export default Nav;
