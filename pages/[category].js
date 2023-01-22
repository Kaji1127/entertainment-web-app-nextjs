import ProductsList from '@/components/product/product-list';
import { useRouter } from 'next/router';
import { getAllProducts } from './api';
import { getProductsByCategory } from './api/[category]';

const CategoryPage = ({ products, category }) => {
	return (
		<ProductsList
			products={products}
			title={category === 'Movie' ? 'Movies' : category}
		/>
	);
};

export default CategoryPage;

export const getStaticPaths = async () => {
	const products = await getAllProducts();
	const categories = products.map((product) => product.category);
	const paths = categories.map((category) => ({
		params: { category: category },
	}));

	return {
		paths,
		fallback: false,
	};
};

export const getStaticProps = async ({ params }) => {
	const category = params.category;
	const filteredproducts = await getProductsByCategory(category);

	return {
		props: {
			products: filteredproducts,
			category: category,
		},
	};
};
