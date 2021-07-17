import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ShowInfo from './ShowInfo';
import Reviews from './Reviews';
import AddReview from './AddReview';
import styles from './shows.module.scss';

const { container, reviewsContainer } = styles;

const Shows = ({ location }) => {
  const [id, setId] = useState(location.state);
  const [reviewsCounter, setReviewsCounter] = useState(0);
  const [reviewsInfo, setReviewsInfo] = useState([]);

  useEffect(() => {
    setId(location.state);
  }, [location.state]);

  useEffect(() => {
    console.log('Shows id', id);
    axios
      .get(`/api/reviews/show/${id}`)
      .then(({ data }) => {
        setReviewsInfo(data);
      })
      .catch((err) => console.log(err));
  }, [id, reviewsCounter]);

  return (
    <div className={container}>
      <ShowInfo id={id} />
      <div className={reviewsContainer}>
        <AddReview id={id} reviewsCounter={reviewsCounter} setReviewsCounter={setReviewsCounter} />
        <Reviews reviewsInfo={reviewsInfo} />
      </div>
    </div>
  );
};

export default Shows;
