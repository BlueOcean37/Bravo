import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Rating } from '@material-ui/lab';
import styles from './showinfo.module.scss';

const { padding, showInfoContainer, link, showDescription } = styles;

const ShowInfo = ({ id }) => {
  const [show, setShow] = useState({});

  useEffect(() => {
    axios
      .get(`/api/shows/${id}`)
      .then(({ data }) => {
        setShow(data);
      })
      .catch((err) => console.log(err));
  }, [id]);

  const { photo, title, rating, date, website, description, street, city, state, zip } = show;

  return (
    <div className={showInfoContainer}>
      <h1 className={padding}> Show Info </h1>
      <img src={photo} alt="show" />
      <h1 className={padding}>{title}</h1>
      {rating ? <Rating value={rating} readOnly className={padding} /> : null}
      <p className={padding}>{new Date(Number(date)).toLocaleDateString('en-US')}</p>
      <a href={website} className={link}>
        Go to Website
      </a>
      <p className={showDescription}> {description} </p>
      <p className={padding}>{`Theatre Address: ${street}, ${city}, ${state}, ${zip}`}</p>
    </div>
  );
};

export default ShowInfo;
