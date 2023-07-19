import { useRouter } from 'next/router';
import data from '../../components/data/productsData';
import Product from '../../components/product/product';
import styles from './slug.module.css';
import Image from 'next/image';

export default function Page() {
  const router = useRouter();
  const { slug } = router.query;

  // Преобразовываем slug, заменяя дефисы на пробелы
  const formattedSlug = slug.replace(/-/g, ' ');
  // Приводим первую букву форматированного slug к заглавной, т.к в базе все названия с большой буквы
  const capitalizedSlug =
    formattedSlug.split('')[0].toUpperCase() + formattedSlug.slice(1);
  console.log(capitalizedSlug);

  // Найдем продукт с соответствующим заглавным slug в массиве данных
  const item = data.find((item) => item.title === capitalizedSlug);
  return (
    <>
      <section className={`${styles.product} wrapper`}>
        <div className={styles.inner}>
          <Image className={styles.img} src={item.img} alt={item.title} />
          <div className={styles.content}>
            <h1 className={styles.heading}>{item.title}</h1>
            <p className={styles.tag}>{item.tag}</p>
            <p className={styles.text}>{item.text}</p>
          </div>
        </div>
      </section>
    </>
  );
}
