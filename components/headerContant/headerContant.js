import React, { useState } from 'react';
import styles from './headerContant.module.css';
import Button from '../UI/buttons';
import Link from 'next/link';
import Image from 'next/image';
import mainPageBG from '../../public/mainPageBG.png';

const HeaderContent = () => {
  const [imageLoaded, setImageLoaded] = useState(false);

  const handleImageLoad = () => {
    setImageLoaded(true);
  };

  return (
    <>
      <div className={styles.content}>
        <Image
          className={styles.bg}
          alt='Linda kristel products'
          src={mainPageBG}
          fill
          sizes='100vw'
          placeholder='blur'
          onLoad={handleImageLoad}
        />
        {imageLoaded && (
          <div className={`${styles.contant__inner} wrapper`}>
            <h1 className={styles.contant__heading}> Linda Kristel </h1>
            <p className={styles.contant__text}>
              Dal 1961 ci prendiamo cura della vostra bellezza
            </p>
            <Link href='about' passHref legacyBehavior>
              <Button text='Scopri' />
            </Link>
          </div>
        )}
      </div>
    </>
  );
};

export default HeaderContent;
