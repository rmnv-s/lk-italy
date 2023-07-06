import React from 'react';
import styles from './headerContant.module.css';
import Button from '../UI/buttons';
import Link from 'next/link';
import Image from 'next/image';
import mainPageBG from '../../public/mainPageBG.png';

const HeaderContent = () => {
  return (
    <>
      <div className={styles.content}>
        <Image
          className={styles.b}
          alt='Linda kristel products'
          src={mainPageBG}
          fill
          placeholder='blur'
          loading='lazy'
          sizes='100vw'
        />
        <div className={`${styles.contant__inner} wrapper`}>
          <h1 className={styles.contant__heading}> Linda Kristel </h1>
          <p className={styles.contant__text}>
            Dal 1961 ci prendiamo cura della vostra bellezza
          </p>
          <Link href='about' passHref legacyBehavior>
            <Button text='Scopri' />
          </Link>
        </div>
      </div>
    </>
  );
};

export default HeaderContent;
