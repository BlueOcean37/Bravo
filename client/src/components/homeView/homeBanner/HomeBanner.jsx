import React from 'react';
import styles from './homeBanner.module.scss';

export default function HomeBanner() {
  return (
    <div id={styles.mainContainer}>
      <iframe
        id={styles.videoContainer}
        allow="autoplay; gyroscope;"
        allowFullScreen
        height="100%"
        referrerPolicy="strict-origin"
        src="https://www.kapwing.com/e/60f116c1d495320029dc3044?autoplay=true&loop=1"
        title="Teatro Show Carousel"
        width="100%"
      />
    </div>
  );
}
