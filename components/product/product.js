import { useRouter } from 'next/router';

import Info from './info';
import PlayMovie from '../play-movie/play-movie';
import styles from './product.module.scss';
import Bookmark from './bookmark';

const Product = ({ product, trend }) => {
	const { isTrending, title, year, category, rating, isBookmarked } = product;

	const { trending, regular } = product.thumbnail;

	return (
		<div className={`${styles.product} ${trend && styles.trending}`}>
			<div className={styles.image}>
				{trend ? (
					<picture>
						<source srcSet={trending.large} media="(min-width: 48em)" />
						<img src={trending.small} alt={title} />
					</picture>
				) : (
					<picture>
						<source srcSet={regular.large} media="(min-width: 62em)" />
						<source srcSet={regular.medium} media="(min-width: 48em)" />
						<img src={regular.small} alt={title} />
					</picture>
				)}
				<div className={styles.bookmark}>
					<Bookmark isBookmarked={isBookmarked} />
				</div>
				<div className={styles.play}>
					<PlayMovie />
				</div>
			</div>
			<Info
				trend={trend}
				year={year}
				category={category}
				rating={rating}
				title={title}
			/>
		</div>
	);
};

export default Product;
