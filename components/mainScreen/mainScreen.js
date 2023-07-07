import React, { useState } from 'react';
import styles from './mainScreen.module.css';
import Image from 'next/image';

const MainScreen = ({ heading, subheading, bgImage }) => {
  const [imageLoaded, setImageLoaded] = useState(false);

  const handleImageLoad = () => {
    setImageLoaded(true);
  };
  return (
    <div className={styles.content}>
      <Image
        className={styles.bgImage}
        alt={heading}
        src={bgImage}
        fill
        sizes='100vw'
        placeholder='blur'
        onLoad={handleImageLoad}
      />
      <div className={`${styles.inner} wrapper`}>
        <h1 className={styles.heading}> {heading} </h1>
        <p className={styles.subheading}>{subheading}</p>
      </div>
    </div>
  );
};
export default MainScreen;
