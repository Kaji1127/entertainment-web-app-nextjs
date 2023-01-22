import Heading from '../heading/heading';
import Product from './product';

import styles from './product-list.module.scss';

const ProductsList = ({ products, title }) => {
	return (
		<section>
			<Heading title={title} />
			<div className={styles.products}>
				{products.map((product) => (
					<Product product={product} key={product.title} />
				))}
			</div>
		</section>
	);
};

export default ProductsList;
