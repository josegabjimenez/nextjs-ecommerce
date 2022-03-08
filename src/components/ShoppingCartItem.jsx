import React from 'react';
import { useAppContext } from '@context/AppContext';
import Image from 'next/image';

//? Styles
import styles from '@styles/ShoppingCart.module.scss';
import { Close } from '@assets/icons/index';

const ShoppingCartItem = ({ item }) => {
  const { title, price, images } = item;
  const { removeFromCart } = useAppContext();

  return (
    <div className={styles['shopping-cart']}>
      <figure>
        <Image src={images[0]} width={70} height={70} objectFit="cover" alt="bike" />
      </figure>
      <p>{title}</p>
      <p>${price}</p>
      <Close alt="close" onClick={() => removeFromCart(item)} />
    </div>
  );
};

export default ShoppingCartItem;
