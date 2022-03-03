import React from 'react';

//? Styles
import styles from '@styles/ShoppingCart.module.scss';
import { Close } from '@assets/icons/index';

const ShoppingCartItem = ({ item, removeFromCart }) => {
  const { title, price, images } = item;
  return (
    <div className={styles['shopping-cart']}>
      <figure>
        <img src={images[0]} alt="bike" />
      </figure>
      <p>{title}</p>
      <p>${price}</p>
      <Close alt="close" onClick={() => removeFromCart(item)} />
    </div>
  );
};

export default ShoppingCartItem;
