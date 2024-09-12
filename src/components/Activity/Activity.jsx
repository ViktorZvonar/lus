import React from 'react';
import styles from './Activity.module.css';
import OfferItem from './ActivityItem/ActivityItem';

function Activity() {
  return (
    <main>
      {/* <section className={styles.section}>
        <h1 className={styles.h1}>Oferta</h1> */}
        {/* <p className={styles.p}>
          Aby sprostać Twoim oczekiwaniom i zapewnić niezapomniane doznania
          kulinarne
        </p> */}
        {/* <p className={`${styles.p} ${styles.additionalInfo}`}>Smacznego!</p> */}
      {/* </section> */}
      <section className={styles.speakersContainer}>
        <OfferItem />
      </section>
    </main>
  );
}

export default Activity;
