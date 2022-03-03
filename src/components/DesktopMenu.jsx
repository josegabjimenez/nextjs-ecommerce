import React from 'react';
// import { Link } from 'react-router-dom';
import styles from '@styles/DesktopMenu.module.scss';

const DesktopMenu = ({ onMouseEnter, onMouseLeave }) => {
  return (
    <div className={styles['desktop-menu']} onMouseEnter={() => onMouseEnter(true)} onMouseLeave={() => onMouseLeave(false)}>
      <ul>
        <li>
          <a href="/my-orders">My orders</a>
        </li>
        <li>
          <a href="/my-account">My account</a>
        </li>
        <li>
          <a href="/sign-up">Sign out</a>
        </li>
      </ul>
    </div>
  );
};

export default DesktopMenu;
