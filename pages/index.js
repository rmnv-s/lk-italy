import styles from '../styles/Home.module.css';
import HeaderContent from '../components/headerContant/headerContant';
import BlockPage from '../components/blockPage/blockPage';

import blockFace from '../public/blockFace.webp';

export default function Home() {
  return (
    <>
      <HeaderContent />
      <section className={`${styles['about-text']} wrapper`}>
        <h2 className={styles['about-text__heding']}>
          LINDA KRISTEL <br />
          Una storia di Bellezza
        </h2>
        <p className={styles['about-text__subheding']}>
          Perché ogni persona ha la sua storia disegnata sulla propria pelle e non può un solo
          trattamento essere uguale per tutti. Questo ha portato Linda Kristel ad essere
          all’avanguardia nella ricerca, e a sviluppare sempre nuovi prodotti.
        </p>
      </section>

      <BlockPage
        img={blockFace}
        bgrFace={true}
        title="Linda Kristel per la cura del viso"
        subtitle="Qualità, ricerca, avanguardia nella prevenzione e nei trattamenti antinvecchiamento; questi gli obiettivi degli specialisti dei laboratori Linda Kristel."
        // reverse={true}
      />
    </>
  );
}
