import React from 'react';
import styles from './header.module.css';
import Link from 'next/link';
import Image from 'next/image';
import logo from '../../public/LK_Logo_gray.svg';

const Header = () => {
  return (
    <>
      <header className={`${styles.header} `}>
        <div className={`${styles.header__inner} wrapper`}>
          <button className={styles.burger}>Menu</button>

          <Link href="/">
            <Image className={styles.logo} src={logo} alt="logo" />
          </Link>

          <input className={styles.input} type="search" id="site-search" placeholder="search..." />
        </div>
      </header>
    </>
  );
};

export default Header;
