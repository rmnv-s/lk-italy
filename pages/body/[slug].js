import { useRouter } from 'next/router';
import data from '../../components/data/productsData';
import Product from '../../components/product/product';

export default function Page({ params }) {
  const router = useRouter();

  const item = data.find((item) => item.title === router.query.slug);
  return (
    <>
      <Product
        img={item.img}
        heding={item.title}
        tag={item.tag}
        text={item.text}
      />
    </>
  );
}
