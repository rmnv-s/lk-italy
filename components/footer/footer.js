import React from 'react';
import styles from './footer.module.css';
import Link from 'next/link';
import Image from 'next/image';
import logo from '../../public/LK_Logo_gray.svg';

const Footer = () => {
  return (
    <>
      <footer className={styles.footer}>
        <div className={`${styles.footer__inner} `}>
          <Link href="/">
            <Image className={styles.logo_big} src={logo} alt="logo" />
          </Link>

          <div className={styles.company}>
            <div className={styles.company__distribut}>
              <p className={styles.company__heading}>Linda Kristel srl</p>
              <ul className={styles.list}>
                <li className={styles.list__item}>Distribuito da: AAMCI ITALIA SRL</li>
                <li className={styles.list__item}>Via Fabio Filzi, 41</li>
                <li className={styles.list__item}>20124 Milano</li>
                <li className={styles.list__item}>CF/PI 10126700961</li>
              </ul>
            </div>

            <div className={styles.company__contact}>
              <p className={styles.company__heading}>Contatti</p>
              <ul className={styles.list}>
                <li className={styles.list__item}>Sede Linda Kristel</li>
                <li className={styles.list__item}>Via Pantano 26, 20122 Milano</li>
                <li className={styles.list__item}>
                  <Link className={styles.link} href="mailto:example@example.com">
                    info@lindakristel.com{' '}
                  </Link>
                </li>
                <li className={styles.list__item}>
                  <Link className={styles.link} href="tel:+390209964090">
                    (+39) 02 09964090{' '}
                  </Link>
                </li>
                <li className={styles.list__item}>
                  <Link className={styles.link} href="tel:+393757112192">
                    (+39) 375 7112192{' '}
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
