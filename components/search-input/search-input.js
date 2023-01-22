import Image from 'next/image';
import Input from './input';
import styles from './search-input.module.scss';

const SearchInput = () => {
	return (
		<form className={styles.search}>
			<div className={styles.content}>
				<Image
					src="/assets/icon-search.svg"
					alt="search-icon"
					width={24}
					height={24}
					className={styles.icon}
				/>
				<Input placeholder="Search for movies or TV series" />
			</div>
		</form>
	);
};

export default SearchInput;
