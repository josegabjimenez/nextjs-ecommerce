import React, { useState, useEffect, useRef } from 'react';
import { useAppContext } from '@context/AppContext';
import Image from 'next/image';
import { gsap } from 'gsap';
//Styles
import styles from '@styles/ProductDetail.module.scss';
import { addToCartImage, addedToCartImage, Close } from '@assets/icons';

const ProductDetail = () => {
  const item = {
    title: 'Bike',
    price: '35,00',
    description: 'With its practical position, this bike also fulfills a decorative function, add your hall or workspace.',
    images: ['https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'],
  };
  const [isOnCart, setIsOnCart] = useState(false); // To know if the current product is on the cart or not

  const {
    state: {
      cart,
      currentProduct: { isOpen, product },
    },
    closeProduct,
    addToCart,
  } = useAppContext();

  const productDetailRef = useRef();
  // It trigger an animation either when is open or closed
  useEffect(() => {
    if (isOpen) {
      gsap.to(productDetailRef.current, {
        duration: 0.6,
        xPercent: -100,
        ease: 'power3.inOut',
      });
    } else {
      gsap.to(productDetailRef.current, {
        duration: 0.6,
        xPercent: 0,
        ease: 'power3.inOut',
      });
    }
  }, [isOpen]);

  useEffect(() => {
    if (cart.includes(product)) {
      setIsOnCart(true);
    } else {
      setIsOnCart(false);
    }
  }, [product, cart, isOnCart]);

  if (Object.keys(product).length != 0) {
    item.title = product.title;
    item.price = product.price;
    item.description = product.description;
    item.images = product.images;
  }

  return (
    <aside ref={productDetailRef} className={styles['product-detail']}>
      <div className={styles['product-detail-close']} onClick={() => closeProduct()}>
        {/* <img src={close} alt="close" /> */}
        <Close />
      </div>
      <img src={item.images[0]} alt="bike" />
      <div className={styles['product-info-detail']}>
        <p>${item.price}</p>
        <p>{item.title}</p>
        <p>{item.description} </p>
        <button
          // className={(styles['primary-button'], styles['add-to-cart-button'], isOnCart && styles['added-cart-button'])}
          className={`${styles['primary-button']} ${styles['add-to-cart-button']} ${isOnCart && styles['added-cart-button']}`}
          // className={`primary-button add-to-cart-button ${isOnCart && 'added-cart-button'}`}
          onClick={() => addToCart(product)}
        >
          <Image src={isOnCart ? addedToCartImage : addToCartImage} alt="add to cart" />
          Add{isOnCart && 'ed'} to cart
        </button>
      </div>
    </aside>
  );
};

export default ProductDetail;
