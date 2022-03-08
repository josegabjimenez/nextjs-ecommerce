import React, { useEffect, useRef } from 'react';
import Link from 'next/link';
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
          <Link href="/">CATEGORIES</Link>
        </li>
        <li>
          <Link href="/">All</Link>
        </li>
        <li>
          <Link href="/">Clothes</Link>
        </li>
        <li>
          <Link href="/">Electronics</Link>
        </li>
        <li>
          <Link href="/">Furnitures</Link>
        </li>
        <li>
          <Link href="/">Toys</Link>
        </li>
        <li>
          <Link href="/">Other</Link>
        </li>
      </ul>
      <ul>
        <li>
          <Link href="/">My orders</Link>
        </li>
        <li>
          <Link href="/">My account</Link>
        </li>
      </ul>
      <ul>
        <li className={styles.email}>
          <Link href="/" passHref>
            <p>platzi@example.com</p>
          </Link>
        </li>
        <li className={styles['sign-out']}>
          <Link href="/" passHref>
            <b>Sign out</b>
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default MobileMenu;
