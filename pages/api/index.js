import data from './data.json';

export const getAllProducts = () => {
	return data;
};

const handler = (req, res) => {
	if (req.method !== 'GET') {
		res.setHeader('Allow', ['GET']);
		res.status(405).json({ message: `Method ${req.method} is not allowed` });
	} else {
		const products = getAllProducts();
		res.status(200).json(products);
	}
};

export default handler;
