import React from 'react';
import styles from './Questionary.module.css';
// import Moderators from 'components/Moderators/Moderators';
// import Hits from 'components/Hits/Hits';

function Home() {
  return (
    <main>
      <section className={styles.firstSection}>
        <h1 className={styles.h1}>Witamy!</h1>
        {/* <img className={styles.mainPhoto} src={mainPhoto} alt="o nas" /> */}
      </section>

      {/* <section className={styles.moderatorsSection}>
        <h2 className={styles.h2}>Nasze przeboje</h2>
        <Hits />
      </section>

      <section className={styles.moderatorsSection}>
        <h2 className={styles.h2}>Nasi pracownicy</h2>
        <Moderators />
      </section> */}
    </main>
  );
}

export default Home;
