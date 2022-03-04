import React from 'react';
import { useAppContext } from '@context/AppContext';

//? Styles
import styles from '@styles/ShoppingCart.module.scss';
import { Close } from '@assets/icons/index';

const ShoppingCartItem = ({ item }) => {
  const { title, price, images } = item;
  const { removeFromCart } = useAppContext();
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
