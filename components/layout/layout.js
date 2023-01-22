import { Outfit } from '@next/font/google';
import SearchInput from '../search-input/search-input';
import Header from './header';

import styles from './layout.module.scss';

const outfit = Outfit({
	subsets: ['latin'],
});

const Layout = ({ children }) => {
	return (
		<div className={`${outfit.className} ${styles.layout}`}>
			<Header />
			<main className={styles.container}>
				<SearchInput />
				{children}
			</main>
		</div>
	);
};

export default Layout;
