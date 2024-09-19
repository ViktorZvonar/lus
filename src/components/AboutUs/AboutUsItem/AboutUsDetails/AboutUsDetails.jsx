import React from 'react';
import { useParams } from 'react-router-dom';
import AboutUsData from '../../../../data/AboutUs.json';
import styles from '././AboutUsDetails.module.css';

function AboutUsDetails() {
  const { id } = useParams();
  const data = AboutUsData.find(s => s.id === id);

  if (!data) {
    return <div>Not found</div>;
  }

  return (
    <main>
      <section className={styles.offersContainer}>
        {data.subItems.map(subItem => (
          <a
            key={subItem.subItemId}
            className={styles.offerLink}
            href={process.env.PUBLIC_URL + subItem.urlDetails}
          >
            <div className={styles.offerCard}>
              <h1 className={styles.offerName}>{subItem.urlDetailsTitle}</h1>
              <img
                className={styles.offerImage}
                src={process.env.PUBLIC_URL + subItem.urlDetails}
                alt={subItem.urlDetailsTitle}
              />
            </div>
          </a>
        ))}
      </section>
    </main>
  );
}

export default AboutUsDetails;
