import React from 'react';
import Link from 'next/link';
import styles from '@styles/DesktopMenu.module.scss';

const DesktopMenu = ({ onMouseEnter, onMouseLeave }) => {
  return (
    <div className={styles['desktop-menu']} onMouseEnter={() => onMouseEnter(true)} onMouseLeave={() => onMouseLeave(false)}>
      <ul>
        <li>
          <Link href="/my-orders">My orders</Link>
        </li>
        <li>
          <Link href="/my-account">My account</Link>
        </li>
        <li>
          <Link href="/sign-up">Sign out</Link>
        </li>
      </ul>
    </div>
  );
};

export default DesktopMenu;
