import React from 'react';
import { Rating } from '@material-ui/lab';
import styles from './showinfo.module.scss';

const ShowInfo = ({ showData }) => (
  <div className={styles.showInfoContainer}>
    <h1> Show Info </h1>
    <img src={showData.showPhoto} />
    <p>{showData.showTitle}</p>
    {showData.showRating ? <Rating value={showData.showRating} readOnly /> : null}
    <p>{new Date(Number(showData.showDate)).toLocaleDateString('en-US')}</p>
    <a href={showData.showWebsite} className={styles.link}>
      Go to Website
    </a>
    <p className={styles.description}> {showData.showDescription} </p>
    <p> {showData.showCast} </p>
    <p>
      {`Theatre Address: ${showData.showStreet}, ${showData.showCity}, ${showData.showState}, ${showData.showZip}`}
    </p>
  </div>
);

export default ShowInfo;
