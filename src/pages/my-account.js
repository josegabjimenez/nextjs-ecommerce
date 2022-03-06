import React from 'react';
import styles from '@styles/MyAccount.module.scss';

const MyAccount = () => {
  return (
    <div className={styles.MyAccount}>
      <div className={styles['form-container']}>
        <h1 className={styles.title}>My account</h1>
        <form action="/" className="form">
          <div>
            <label htmlFor="name" className={styles.label}>
              Name
            </label>
            <p className="value">Camila Yokoo</p>
            <label htmlFor="email" className={styles.label}>
              Email
            </label>
            <p className="value">camilayokoo@gmail.com</p>
            <label htmlFor="password" className={styles.label}>
              Password
            </label>
            <p className={styles.value}>*********</p>
          </div>
          <button className={`${styles['secondary-button']} ${styles['login-button']}`}>Edit</button>
        </form>
      </div>
    </div>
  );
};

export default MyAccount;
