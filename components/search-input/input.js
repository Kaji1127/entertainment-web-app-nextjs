import styles from './input.module.scss';

const Input = ({ placeholder }) => {
	return (
		<input className={styles.input} placeholder={placeholder} type="text" />
	);
};

export default Input;
