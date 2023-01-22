import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import styles from './trending.module.scss';
import Product from '../product/product';
import Heading from '../heading/heading';

const Trending = ({ products }) => {
	return (
		<section className={styles.trending}>
			<Heading title="Trending" />
			<div className={styles.content}>
				<Swiper slidesPerView={'auto'} spaceBetween={16}>
					{products.map((product) => {
						return (
							<SwiperSlide key={product.title}>
								<Product product={product} trend={true} />
							</SwiperSlide>
						);
					})}
				</Swiper>
			</div>
		</section>
	);
};

export default Trending;
