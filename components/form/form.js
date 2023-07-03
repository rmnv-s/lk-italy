import styles from './form.module.css';
import { useState } from 'react';

const Form = () => {
	const [data, setDate] = useState({
		name: '',
		number: '',
		email: '',
		sity: '',
		company: '',
		message: '',
	});

	function handleFormSubmit(evt) {
		evt.preventDefault();
		console.log('event');
	}

	function handleInputChange(e, inputText) {
		setDate({ ...data, [inputText]: e.target.value });
	}

	return (
		<section className={`${styles.section} wrapper`}>
			<h2 className={styles.title}>Scrivici per conoscere i prodotti e trattamenti esclusivi Linda Kristel</h2>
			<form className={styles.form} onSubmit={handleFormSubmit}>
				<div className={styles.controls}>
					<input className={styles.input} value={data.name} onChange={e => handleInputChange(e, 'name')} type="text" placeholder="Nome *" />
					<input className={styles.input} value={data.number} onChange={e => handleInputChange(e, 'number')} type="number" placeholder="Telefono *" />
					<input className={styles.input} value={data.email} onChange={e => handleInputChange(e, 'email')} type="email" placeholder="Email *" />
					<input className={styles.input} value={data.sity} onChange={e => handleInputChange(e, 'sity')} type="text" placeholder="Città" />
					<input className={styles.input} value={data.company} onChange={e => handleInputChange(e, 'company')} type="text" placeholder="Nome azienda" />
					<textarea className={styles.input} value={data.message} placeholder="Il tuo messaggio" onChange={e => handleInputChange(e, 'message')}></textarea>
				</div>

				<button type="submit">Scrivici</button>
			</form>
		</section>
	);
};

export default Form;
