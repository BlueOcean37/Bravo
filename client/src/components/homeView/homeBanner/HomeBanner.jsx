import React from 'react';
import styles from './homeBanner.module.scss';

export default function HomeBanner() {
  return (
    <div className={styles.heroImage}>
      <div className={styles.heroText}>
        <h1>Teatro</h1>
        <h2>Latest productions and the hottest reviews</h2>
      </div>
    </div>
  );
}
