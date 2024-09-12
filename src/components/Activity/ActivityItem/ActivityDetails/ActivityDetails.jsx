import React from 'react';
import { useParams } from 'react-router-dom';
import offerData from '../../../../data/Activity.json';
import styles from './ActivityDetails.module.css';

function OfferDetails() {
  const { id } = useParams();
  const data = offerData.find(s => s.id === id);

  if (!data) {
    return <div>Offer not found</div>;
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

export default OfferDetails;
