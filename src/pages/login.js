import React, { useRef } from 'react';
import Head from 'next/head';

//? Styles
import styles from '@styles/Login.module.scss';

const Login = () => {
  const form = useRef(null);

  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData(form.current);
    const data = {
      email: formData.get('email'),
      password: formData.get('password'),
    };
    console.log(data);
  };

  return (
    <>
      <Head>
        <title>Pulguero - Login</title>
      </Head>
      <div className="Login">
        <div className={styles.content}>
          <div className={styles['form-container']}>
            <form action="/" className={styles.form} ref={form}>
              <label htmlFor="email" className={styles.label}>
                Email address
              </label>
              <input type="email" id="email" name="email" placeholder="platzi@example.cm" className={`${styles.input} ${styles['input-email']}`} />
              <label htmlFor="password" className={styles.label}>
                Password
              </label>
              <input type="password" id="password" name="password" placeholder="*********" className={`${styles.input} ${styles['input-password']}`} />
              <button className={`${styles['primary-button']} ${styles.button}`} onClick={handleSubmit}>
                Log in
              </button>
              <a href="/">Forgot my password</a>
            </form>
            <button className={`${styles['secondary-button']} ${styles['signup-button']}`}>Sign up</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
