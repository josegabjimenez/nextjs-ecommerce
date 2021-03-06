import React, { useState } from 'react';
import Link from 'next/link';
import { useAppContext } from '@context/AppContext';
import { DesktopMenu, MobileMenu, ShoppingCart } from '@components/index';
import { ProductDetail } from '@containers/index';
//? Styles and icons
import Image from 'next/image';
import styles from '@styles/Header.module.scss';
import { menu, shoppingCart } from '@assets/icons';
import { logoYardSale } from '@assets/logos';

const Header = () => {
  const {
    state: { cart },
  } = useAppContext();
  const [toggleDesktopMenu, setToggleDesktopMenu] = useState(false);
  const [toggleMobileMenu, setToggleMobileMenu] = useState(false);
  const [toggleShoppingCart, setToggleShoppingCart] = useState(false);

  const handleToggleDesktopMenu = (state) => {
    setToggleDesktopMenu(state);
  };

  const handleToggleMobileMenu = (state) => {
    setToggleMobileMenu(state);
  };

  const handleToggleShoppingCart = (state) => {
    setToggleShoppingCart(state);
  };

  // Verify if the cart has items or not items and depend of it, it will display a number or not
  const verifyCart = (numberOfItems) => {
    if (numberOfItems > 0) {
      if (numberOfItems > 9) return <div>+9</div>;
      return <div>{numberOfItems}</div>;
    }
    return null;
  };

  return (
    <nav className={styles.nav}>
      <MobileMenu isOpen={toggleMobileMenu} onClick={() => handleToggleMobileMenu(false)} />

      <ProductDetail />

      <div className={styles.menu}>
        <Image src={menu} alt="mobile menu" onClick={() => handleToggleMobileMenu(true)} />
      </div>
      <div className={styles['navbar-left']}>
        <Link href="/" passHref>
          <div className={styles.logoHeader}>
            <Image src={logoYardSale} alt="logo" />
          </div>
        </Link>
        <ul>
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
            <Link href="/">Others</Link>
          </li>
        </ul>
      </div>
      <div className={styles['navbar-right']}>
        <ul>
          <li className={styles['navbar-email']} onMouseEnter={() => handleToggleDesktopMenu(true)} onMouseLeave={() => handleToggleDesktopMenu(false)}>
            platzi@example.com
          </li>
          <li className={styles['navbar-shopping-cart']}>
            <Image src={shoppingCart} alt="shopping cart" onClick={() => handleToggleShoppingCart(true)} />
            {verifyCart(cart.length)}
          </li>
        </ul>
      </div>
      {toggleDesktopMenu && <DesktopMenu onMouseEnter={handleToggleDesktopMenu} onMouseLeave={handleToggleDesktopMenu} />}
      <ShoppingCart isOpen={toggleShoppingCart} onClick={() => handleToggleShoppingCart(false)} />
    </nav>
  );
};

export default Header;
