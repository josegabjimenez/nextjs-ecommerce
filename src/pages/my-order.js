import React from 'react';
import Head from 'next/head';
import { useAppContext } from '@context/AppContext';
//? Styles
import styles from '@styles/MyOrder.module.scss';
import { ShoppingCartItem } from '@components/index';

const MyOrder = () => {
  const {
    state: { cart, totalPrice },
  } = useAppContext();
  return (
    <>
      <Head>
        <title>Pulguero - Order</title>
      </Head>
      <div className={styles.MyOrder}>
        <div className={styles.content}>
          <div className={styles.container}>
            <h1 className={styles.title}>My order</h1>
            <div className={styles['order-content']}>
              <div className={styles.order}>
                <p>
                  <span>03.25.21</span>
                  <span>{cart.length} articles</span>
                </p>
                <p>${totalPrice}</p>
              </div>
              {cart.map((item) => (
                <>
                  {console.log(item)}
                  <ShoppingCartItem key={`my-order-item-${item.id}`} item={item} />
                </>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MyOrder;
