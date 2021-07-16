import React from 'react';
import { Rating } from '@material-ui/lab';
import styles from './showinfo.module.scss';

const { padding } = styles;

const ShowInfo = ({ showData }) => (
  <div className={styles.showInfoContainer}>
    <h1 className={padding}> Show Info </h1>
    <img src={showData.showPhoto} />
    <h1 className={padding}>{showData.showTitle}</h1>
    {showData.showRating ? (
      <Rating value={showData.showRating} readOnly className={padding} />
    ) : null}
    <p className={padding}>{new Date(Number(showData.showDate)).toLocaleDateString('en-US')}</p>
    <a href={showData.showWebsite} className={styles.link}>
      Go to Website
    </a>
    <p className={styles.description}> {showData.showDescription} </p>
    <p> {showData.showCast} </p>
    <p className={padding}>
      {`Theatre Address: ${showData.showStreet}, ${showData.showCity}, ${showData.showState}, ${showData.showZip}`}
    </p>
  </div>
);

export default ShowInfo;
