import React from 'react';
import styles from './blockPage.module.css';
import clsx from 'clsx';
import block from 'module-clsx';
const style = block(styles);
import Image from 'next/image';
import Button from '../UI/buttons';

const BlockPage = ({ img, alt, title, subtitle, children, reverse, bgrFace, bgrProf }) => {
  const blockReverse = clsx({ block__reverse: reverse });
  const backgroundFace = clsx({ bgr__face: bgrFace });
  const backgroundProf = clsx({ bgr__prof: bgrProf });

  return (
    <section className={`${styles.block} ${style(backgroundFace)} ${style(backgroundProf)}`}>
      <div className={`${styles.block__inner} ${style(blockReverse)} wrapper`}>
        <Image className={`${styles.image}`} src={img} alt={'image'} rel="preload" />
        <div className={`${styles.content} `}>
          <h2 className={styles.title}>{title}</h2>
          <p className={styles.subtitle}>{subtitle}</p>
          <div className={styles.content__buttons}>
            <Button text="Scopri" />
            <Button text="Scaricare" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default BlockPage;
