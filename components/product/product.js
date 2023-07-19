import styles from './product.module.css';
import Image from 'next/image';
const Product = ({ heading, tag, text, img, alt }) => {
  return (
    <>
      <section className={`${styles.product} wrapper`}>
        <div className={styles.inner}>
          <Image className={styles.img} src={img} alt={alt} />
          <div className={styles.content}>
            <h1 className={styles.heading}>{heading}</h1>
            <p className={styles.tag}>{tag}</p>
            <p className={styles.text}>{text}</p>
          </div>
        </div>
      </section>
    </>
  );
};

export default Product;
