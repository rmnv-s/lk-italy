import React, { useState } from 'react';
import styles from './header.module.css';
import Link from 'next/link';
import Image from 'next/image';
import logo from '../../public/LK_Logo_gray.svg';

const Header = () => {
  const [visibly, setVisibly] = useState(false);

  function handelMenu() {
    !visibly ? setVisibly(true) : setVisibly(false);
  }
  return (
    <>
      <header className={styles.header}>
        <div className={`${styles.header__inner} wrapper`}>
          <nav className={`${styles.nav} ${visibly ? styles.nav__open : null}`}>
            <button
              onClick={() => setVisibly(false)}
              className={styles['close-menu']}
            >
              Close
            </button>
            <ul onClick={() => setVisibly(false)} className={styles.nav__list}>
              <li className={styles.list}>
                <Link className={styles.nav__link} href='/about'>
                  about
                </Link>
              </li>
              <li className={styles.list}>
                <Link className={styles.nav__link} href='/face'>
                  per il viso
                </Link>
              </li>
              <li className={styles.list}>
                <Link className={styles.nav__link} href='/body'>
                  per il corpo
                </Link>
              </li>
              <li className={styles.list}>
                <Link className={styles.nav__link} href='/prof'>
                  professionale
                </Link>
              </li>
            </ul>
          </nav>

          <button onClick={() => setVisibly(true)} className={styles.burger}>
            Menu
          </button>

          <Link href='/'>
            <Image className={styles.logo} src={logo} alt='logo' />
          </Link>

          <input
            className={styles.input}
            type='search'
            id='site-search'
            placeholder='cerca...'
          />
        </div>
      </header>
    </>
  );
};

export default Header;
