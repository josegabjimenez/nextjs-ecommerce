import React, { useRef, useEffect } from 'react';
import { useAppContext } from '@context/AppContext';
import { ShoppingCartItem } from '@components/index/';
import Link from 'next/link';
//Styling
import { gsap } from 'gsap';
import styles from '@styles/ShoppingCart.module.scss';
import { BsArrowLeftCircleFill } from 'react-icons/bs';

const ShoppingCart = ({ isOpen, onClick }) => {
  const {
    state: { cart, totalPrice },
  } = useAppContext(); // Here I get the global state through the App Context

  const productDetailRef = useRef();
  // It trigger an animation either when is open or closed
  useEffect(() => {
    if (isOpen) {
      gsap.to(productDetailRef.current, {
        duration: 0,
        css: { display: 'block' },
      });
      gsap.to(productDetailRef.current, {
        duration: 0.6,
        xPercent: -100,
        ease: 'power3.inOut',
      });
    } else {
      gsap.to(productDetailRef.current, {
        duration: 0.6,
        xPercent: 20,
        ease: 'power3.inOut',
      });
      gsap.to(productDetailRef.current, {
        duration: 0.6,
      });
    }
  }, [isOpen]);

  return (
    <aside ref={productDetailRef} className={styles['product-detail']}>
      <div className={styles['title-container']}>
        <BsArrowLeftCircleFill alt="arrow" onClick={onClick} />
        <p className={styles.title}>Shopping Cart</p>
      </div>
      <div className={styles.content}>
        {cart.map((item) => (
          <ShoppingCartItem key={`orderItem-${item.id}`} item={item} />
        ))}
        <div className={styles.order}>
          <p>
            <span>Total</span>
          </p>
          <p>${totalPrice}</p>
        </div>
        <Link href="/my-order" passHref>
          <button className={styles['primary-button']} onClick={onClick}>
            Checkout
          </button>
        </Link>
      </div>
    </aside>
  );
};

export default ShoppingCart;
