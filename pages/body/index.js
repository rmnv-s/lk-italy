import MainScreen from '../../components/mainScreen/mainScreen';
import Form from '../../components/form/form';
import Image from 'next/image';
import Button from '../../components/UI/buttons';
import Link from 'next/link';
import { useRouter } from 'next/router';

import bodyBG from '../../public/mainBlockBody.jpeg';
import styles from './index.module.css';
import { bodyProducts } from '../../components/data/productsData';

import slugify from 'slugify';

const Body = () => {
  const products = bodyProducts();
  const router = useRouter();

  // Функция для преобразования строки в слаг
  const createSlug = (text) => {
    return slugify(text, {
      lower: true, // Привести к нижнему регистру
      strict: true, // Удалить все символы, кроме букв, цифр, дефисов и знаков подчеркивания
    });
  };

  return (
    <>
      <MainScreen
        bgImage={bodyBG}
        heading='Per la cura del tuo corpo'
        subheading='Senti la cura per la bellezza, la salute e la giovinezza del tuo corpi con prodotti Linda Kristel'
      />

      <section className={`${styles.products} wrapper`}>
        <ul className={styles.list}>
          {products.map((item, index) => (
            <li className={styles.item} key={item.id}>
              <div className={styles.product}>
                <Image className={styles.img} src={item.img} alt={item.title} />

                <div className={styles.description}>
                  <h2 className={styles.title}>{item.title}</h2>
                  <Link
                    href={`/body/${createSlug(item.title)}`}
                    className={styles.link}
                  >
                    Dettagliato
                  </Link>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </section>

      <Form />
    </>
  );
};

export default Body;
