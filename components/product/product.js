import styles from './product.module.css';
import Image from 'next/image';
const Product = ({ heding, tag, text, img }) => {
  return (
    <>
      <section className={`${styles.product} wrapper`}>
        <div className={styles.inner}>
          <Image className={styles.img} src={img} />
          <div className={styles.content}>
            <h1 className={styles.heding}>{heding}</h1>
            <p className={styles.tag}>{tag}</p>
            <p className={styles.text}>{text}</p>
          </div>
        </div>
      </section>
    </>
  );
};

export default Product;
