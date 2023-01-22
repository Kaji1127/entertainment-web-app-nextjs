import Layout from '@/components/layout/layout';

import '../styles/global.scss';
import '../styles/app.scss';
import '../styles/slider.scss';

const App = ({ Component, pageProps }) => {
	return (
		<Layout>
			<Component {...pageProps} />
		</Layout>
	);
};

export default App;
