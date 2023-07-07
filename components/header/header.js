import React, { useState } from 'react';
import styles from './header.module.css';
import Link from 'next/link';
import Image from 'next/image';
import logo from '../../public/LK_Logo_gray.svg';
import Menu from '../menu/menu';

const Header = () => {
  return (
    <>
      <header className={styles.header}>
        <div className={`${styles.header__inner} wrapper`}>
          <Menu />
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
