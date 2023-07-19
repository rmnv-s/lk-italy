import MainScreen from '../../components/mainScreen/mainScreen';
import Form from '../../components/form/form';
import Image from 'next/image';
import Button from '../../components/UI/buttons';
import Link from 'next/link';
import { useRouter } from 'next/router';

import bodyBG from '../../public/mainBlockBody.jpeg';
import styles from './index.module.css';
import { bodyProducts } from '../../components/data/productsData';

const Body = () => {
  const products = bodyProducts();
  const router = useRouter();
  return (
    <>
      <MainScreen
        bgImage={bodyBG}
        heading='Per la cura del tuo corpo'
        subheading='Senti la cura per la bellezza, la salute e la giovinezza del tuo corpi con prodotti Linda Kristel'
      />

      <section className={`${styles.products} wrapper`}>
        <ul className={styles.list}>
          {products.map((item) => (
            <li className={styles.item} key={item.id}>
              <div className={styles.product}>
                <Image className={styles.img} src={item.img} alt={item.title} />

                <div className={styles.description}>
                  <h2>{item.title}</h2>
                  <p className={styles.text}>{item.text}</p>
                  <Link
                    href={`body/${item.title}`}
                    key={item.id}
                    className={styles.product_button}
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
