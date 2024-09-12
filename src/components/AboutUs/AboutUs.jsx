import React from 'react';
import styles from './AboutUs.module.css';
import AboutUsItem from './AboutUsItem/AboutUsItem';

function AboutUs() {
  return (
    <main>
      {/* <section className={styles.section}>
        {/* <h1 className={styles.h1}>Witamy</h1> */}
        {/* <p className={styles.p}>
          Aby sprostać Twoim oczekiwaniom i zapewnić niezapomniane doznania
          kulinarne
        </p>
        <p className={`${styles.p} ${styles.additionalInfo}`}>Smacznego!</p> */}
      {/* </section> */} 
      <section className={styles.speakersContainer}>
        <AboutUsItem />
      </section>
    </main>
  );
}

export default AboutUs;
