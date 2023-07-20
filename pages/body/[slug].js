
import { useRouter } from 'next/router';
import data from '../../components/data/productsData';
import Product from '../../components/product/product';
import styles from './slug.module.css';
import Image from 'next/image';
import Loader from '../../components/UI/loader';

export default function Page() {
  const router = useRouter();
  const { slug } = router.query;

  // Проверка на наличие slug и его тип
  if (typeof slug === 'string') {
    // Преобразовываем slug, заменяя дефисы на пробелы
    const formattedSlug = slug.replace(/-/g, ' ');

    // Приводим первую букву форматированного slug к заглавной, т.к в базе все названия с большой буквы
    const capitalizedSlug =
      formattedSlug.charAt(0).toUpperCase() + formattedSlug.slice(1);

    // Найдем продукт с соответствующим заглавным slug в массиве данных
    const item = data.find((item) => item.title === capitalizedSlug);

    return (
      <>
        {item ? (
          <section className={`${styles.product} wrapper`}>
            <div className={styles.inner}>
              <Image className={styles.img} src={item.img} alt={item.title} priority/>
              <div className={styles.content}>
                <h1 className={styles.heading}>{item.title}</h1>
                <p className={styles.tag}>{item.tag}</p>
                <p className={styles.text}>{item.text}</p>
              </div>
            </div>
          </section>
        ) : (
          <p>Продукт не найден</p>
        )}
      </>
    );
  }


  return <Loader />


}
