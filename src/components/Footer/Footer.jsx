import React from 'react';
import { NavLink } from 'react-router-dom';
import logo1 from '../../images/logoLUS.png';

import styles from './Footer.module.css';

function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.logos}>
        <NavLink to="/">
          <img src={logo1} alt="Logo 1" className={styles.logo1} />
        </NavLink>
      </div>
      <p className={styles.disclaimer}>
        <a target="blank" href="https://maps.app.goo.gl/yegTGRHq9R9fDZDh7">
          ul. Krzywoustego 1, 84-300, Lębork
        </a>
      </p>
      <p className={styles.disclaimer}>
        <a href="tel:+0000000000">Tel.: +0000000000000</a>
      </p>
      <p className={styles.disclaimer}>
        <a href="mailto:lus@lebork.pl">lus@lebork.pl</a>
      </p>
    </footer>
  );
}

export default Footer;
