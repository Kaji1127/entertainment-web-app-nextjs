import styles from './heading.module.scss';

const Heading = ({ title }) => {
	return (
		<h2
			className={`${styles.heading}  ${
				title === 'Trending' && styles.trending
			}`}
		>
			{title}
		</h2>
	);
};

export default Heading;
