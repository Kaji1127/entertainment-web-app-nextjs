import MoviesIcon from '../../public/assets/icon-category-movie.svg';
import TVIcon from '../../public/assets/icon-category-tv.svg';

import styles from './info.module.scss';

const Info = ({ year, category, rating, title, trend }) => {
	return (
		<div className={`${styles.info} ${trend && styles.trending}`}>
			<div className={styles.inner}>
				<span>{year}・</span>
				<span className={styles.category}>
					{category === 'Movie' ? <MoviesIcon /> : <TVIcon />}
					{category}・
				</span>
				<span>{rating}</span>
			</div>
			<h3>{title}</h3>
		</div>
	);
};

export default Info;
