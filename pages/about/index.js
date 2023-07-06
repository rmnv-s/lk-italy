import React, { useEffect } from 'react';

import styles from './index.module.css';
import MainScreen from '../../components/mainScreen/mainScreen';
import Form from '../../components/form/form';
import Image from 'next/image';
import aboutBG from '../../public/mainBlockAbout.jpeg';
import aboutHistory from '../../public/aboutHistory.png';
import AOS from 'aos';
import 'aos/dist/aos.css';

const About = () => {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);
  return (
    <>
      <MainScreen
        bgImage={aboutBG}
        heading='LINDA KRISTEL'
        subheading='Tradizione e innovazione
      per la bellezza della tua pelle'
      />

      <section className={`${styles.content} wrapper`}>
        <div data-aos='fade-up'>
          <div className={styles['content-inner']}>
            <Image
              className={styles.image}
              src={aboutHistory}
              alt='about content image'
              sizes='100vw'
            />
            <div className={styles['content-description']}>
              <h2 className={styles['content-heding']}>
                Come tutto è cominciato…
              </h2>
              <p className={styles['content-text']}>
                Parigi, anni 60, i primi segnali di benessere, i primi segnali
                di un mondo che sta cambiando, che ha voglia di crescere e di
                essere bello. Questa città rappresentava e rappresenta ancora il
                simbolo della bellezza e della moda. Molti brand di questi
                settori sarebbero diventati famosi e conosciuti in tutto il
                mondo partendo da lì. In quegli anni un chimico italiano,
                farmacologo e professore universitario rimase affascinato da
                tanta bellezza e decise che avrebbe fatto parte di questo mondo
                e che ne sarebbe stato uno degli artefici. Quest’uomo si
                chiamava Santino Ghemasi.
              </p>
              <p className={styles['content-text']}>
                Nasce così il sogno Linda Kristel. Negli anni 80 Santino torna a
                casa, in Italia, nella sua amata Milano, sviluppando e facendo
                crescere questo sogno, con professionalità, serietà e ingegno.
                La sua passione e competenza lo portano a sviluppare una linea
                di prodotti cosmetici professionali per tutti i tipi di pelle.
              </p>
              <p className={styles['content-text']}>
                Collabora con le migliori aziende specializzate, portando il
                marchio Linda Kristel ad essere conosciuto in molti paesi.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Form />
    </>
  );
};

export default About;
