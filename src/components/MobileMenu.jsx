import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
//?Styles
import styles from '@styles/MobileMenu.module.scss';
import { Close } from '@assets/icons/index';

const MobileMenu = ({ isOpen, onClick }) => {
  const mobileMenuRef = useRef();

  useEffect(() => {
    if (isOpen) {
      gsap.to(mobileMenuRef.current, {
        duration: 0.6,
        xPercent: 100,
        ease: 'power3.inOut',
      });
    } else {
      gsap.to(mobileMenuRef.current, {
        duration: 0.6,
        xPercent: 0,
        ease: 'power3.inOut',
      });
    }
  }, [isOpen]);

  return (
    <div ref={mobileMenuRef} className={styles['mobile-menu']}>
      <div className={styles['mobile-menu-close-button']} onClick={onClick}>
        <Close />
      </div>
      <ul>
        <li>
          <a href="/">CATEGORIES</a>
        </li>
        <li>
          <a href="/">All</a>
        </li>
        <li>
          <a href="/">Clothes</a>
        </li>
        <li>
          <a href="/">Electronics</a>
        </li>
        <li>
          <a href="/">Furnitures</a>
        </li>
        <li>
          <a href="/">Toys</a>
        </li>
        <li>
          <a href="/">Other</a>
        </li>
      </ul>
      <ul>
        <li>
          <a href="/">My orders</a>
        </li>
        <li>
          <a href="/">My account</a>
        </li>
      </ul>
      <ul>
        <li>
          <a href="/" className={styles.email}>
            platzi@example.com
          </a>
        </li>
        <li>
          <a href="/" className={styles['sign-out']}>
            Sign out
          </a>
        </li>
      </ul>
    </div>
  );
};

export default MobileMenu;
