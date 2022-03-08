import React from 'react';
import Image from 'next/image';
import Head from 'next/head';
//? Styles
import styles from '@styles/MyOrders.module.scss';
import { arrow } from '@assets/icons';

const MyOrders = () => {
  return (
    <>
      <Head>
        <title>Pulguero - Orders</title>
      </Head>
      <div className="MyOrders">
        <div className={styles.content}>
          <div className={styles.container}>
            <h1 className={styles.title}>My orders</h1>
            <div className={styles.orders}>
              <div className={styles.order}>
                <p>
                  <span>03.25.21</span>
                  <span>6 articles</span>
                </p>
                <p>$560.00</p>
                <Image src={arrow} alt="arrow" />
              </div>
              <div className={styles.order}>
                <p>
                  <span>03.25.21</span>
                  <span>6 articles</span>
                </p>
                <p>$560.00</p>
                <Image src={arrow} alt="arrow" />
              </div>
              <div className={styles.order}>
                <p>
                  <span>03.25.21</span>
                  <span>6 articles</span>
                </p>
                <p>$560.00</p>
                <Image src={arrow} alt="arrow" />
              </div>
              <div className={styles.order}>
                <p>
                  <span>03.25.21</span>
                  <span>6 articles</span>
                </p>
                <p>$560.00</p>
                <Image src={arrow} alt="arrow" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MyOrders;
