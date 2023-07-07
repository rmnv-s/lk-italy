import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import Link from 'next/link';
import styles from './menu.module.css';

const Menu = () => {
  const [visibly, setVisibly] = useState(false);

  useEffect(() => {
    const body = document.querySelector('body');
    if (visibly) {
      body.style.overflow = 'hidden';
    } else {
      body.style.overflow = 'auto';
    }
  }, [visibly]);

  function handleMenu() {
    setVisibly(!visibly);
  }

  return (
    <>
      <nav className={`${styles.nav} ${visibly ? styles.nav__open : ''}`}>
        <button onClick={handleMenu} className={styles['close-menu']}>
          Close
        </button>
        <ul onClick={handleMenu} className={styles.nav__list}>
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
      <div
        className={`${styles.overlay} ${visibly ? styles.overlay__open : ''}`}
        onClick={handleMenu}
      ></div>
      <button onClick={handleMenu} className={styles.burger}>
        Menu
      </button>
    </>
  );
};

export default Menu;
