import React from 'react';
import styles from './homeBanner.module';

export default function HomeBanner() {
  return (
    <div className={styles.heroImage}>
      <div className={styles.heroText}>
        <h2>Teatro</h2>
        <h3>Latest productions and the hottest reviews</h3>
        <button>Learn More</button>
      </div>
    </div>
  );
}
