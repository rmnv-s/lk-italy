// import { bodyProducts } from '../../../components/data/productsData';
//
// export async function generateStaticParams() {
//   // const posts = await fetch('https://.../posts').then((res) => res.json());
//   const products = await bodyProducts();
//   return products.map((products) => ({
//     slug: products.slug,
//   }));
// }

export default function Page({ params }) {
  return <div>My Post: {params.slug}</div>;
}
