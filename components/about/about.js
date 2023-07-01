import React, { useEffect } from 'react';
import styles from './about.module.css';
import AOS from 'aos';
import 'aos/dist/aos.css';

const About = () => {
	useEffect(() => {
		AOS.init();
		AOS.refresh();
	}, []);

	return (
		<section className={`${styles['about-text']} wrapper`}>
			<div data-aos="fade-up">
				<h2 className={styles['about-text__heding']}>
					LINDA KRISTEL <br />
					Una storia di Bellezza
				</h2>
				<p className={styles['about-text__subheding']}>Perché ogni persona ha la sua storia disegnata sulla propria pelle e non può un solo trattamento essere uguale per tutti. Questo ha portato Linda Kristel ad essere all’avanguardia nella ricerca, e a sviluppare sempre nuovi prodotti.</p>
			</div>
		</section>
	);
};

export default About;
