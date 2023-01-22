import ProductsList from '@/components/product/product-list';
import { getAllProducts } from './api';

import styles from '../styles/bookmarked.module.scss';

const BookmarkedPage = ({ products }) => {
	const bookmarkedMovies = products.filter(
		(product) => product.category === 'Movie'
	);
	const bookmarkedTV = products.filter(
		(product) => product.category === 'TV Series'
	);
	return (
		<div className={styles.bookmarked}>
			<ProductsList products={bookmarkedMovies} title="Bookmarked Movie" />
			<ProductsList products={bookmarkedTV} title="Bookmarked TV Series" />
		</div>
	);
};

export const getStaticProps = async () => {
	const products = await getAllProducts();
	const bookmarkedProducts = products.filter((product) => product.isBookmarked);

	return {
		props: {
			products: bookmarkedProducts,
		},
	};
};

export default BookmarkedPage;
