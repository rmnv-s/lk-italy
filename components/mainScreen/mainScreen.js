import styles from './mainScreen.module.css';
import Image from 'next/image';

const MainScreen = ({ heading, subheading, bgImage }) => {
  return (
    <div className={styles.content}>
      <Image
        className={styles.bgImage}
        alt={heading}
        src={bgImage}
        fill
        sizes='100vw'
      />
      <div className={`${styles.inner} wrapper`}>
        <h1 className={styles.heading}> {heading} </h1>
        <p className={styles.subheading}>{subheading}</p>
      </div>
    </div>
  );
};
export default MainScreen;
