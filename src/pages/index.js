import { ProductList } from '@containers/index';
import Head from 'next/head';
//? Styles
import styles from '@styles/Home.module.scss';

export default function Home() {
  return (
    <>
      <Head>
        <title>Pulguero shop</title>
      </Head>
      <main className={styles.home}>
        <h1 className={styles.title}>👕Pulguero👖</h1>
        <ProductList />
      </main>
    </>
  );
}
