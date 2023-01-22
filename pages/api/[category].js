import data from './data.json';

export const getProductsByCategory = (category) => {
	const products = data.filter((product) => product.category === category);

	return products;
};

const handler = (req, res) => {
	if (req.method !== 'GET') {
		res.setHeader('Allow', ['GET']);
		res.status(405).json({ message: `Method ${req.method} is not allowed` });
	} else {
		const products = getProductsByCategory(req.query);
		res.status(200).json(products);
	}
};

export default handler;
