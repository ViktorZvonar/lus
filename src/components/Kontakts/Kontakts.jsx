import React from 'react';
import styles from './Kontakts.module.css';

import facebookLogo from '../../images/facebook-logo.png';
// import twitterLogo from '../../images/X.png';
import instagramLogo from '../../images/instagram-logo.png';
// import LinkedInLogo from '../../images/LinkedIn-logo.png';

// import ContactForm from 'components/Form/Form';

function Kontakts() {
  return (
    <main className={styles.main}>
      <section className={styles.firstSection}>
        <h1 className={styles.h1}>Skontaktuj się z nami</h1>
        <p className={styles.p}>ul. Krzywoustego 1, 84-300, Lębork</p>
        <p className={styles.clickableContact}>
          <a href="tel:+000000000000"> +00000000000000</a>
        </p>
        <p className={`${styles.clickableContact} ${styles.last}`}>
          <a href="mailto:lus@lebork.pl"> lus@lebork.pl</a>
        </p>

        <div className={styles.contactsIcons}>
          <a
            href="https://www.facebook.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={facebookLogo} style={{ width: '25px',
              borderRadius: '5px'
             }} alt="facebook" />
          </a>
          {/* <a
            href="https://x.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={twitterLogo} style={{ width: '25px',
              borderRadius: '5px'
             }}  alt="twitter" />
          </a> */}
          <a
            href="https://www.instagram.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src={instagramLogo}
              style={{ width: '25px',
                borderRadius: '5px'
               }} 
              alt="instagram"
            />
          </a>
          {/* <a
            href="https://www.linkedin.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src={LinkedInLogo}
              style={{ width: '25px',
                borderRadius: '5px'
               }} 
              alt="instagram"
            />
          </a> */}
        </div>

      </section>
      <section className={styles.secondSection}>
        <iframe
          title="Location Map"
          src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d4629.8851348463!2d17.755885!3d54.534508!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46fde80048d73679%3A0xc5ce3b71b4acae3b!2sBoles%C5%82awa%20Krzywoustego%201%2C%2084-300%20L%C4%99bork!5e0!3m2!1sen!2spl!4v1722182901263!5m2!1sen!2spl"
          width="600"
          height="450"
          style={{
            border: 'none',
          }}
          allowfullscreen=""
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
        ></iframe>
      </section>
      {/* <ContactForm /> */}
    </main>
  );
}

export default Kontakts;
