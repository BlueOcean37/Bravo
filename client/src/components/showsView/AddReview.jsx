import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { TextField, Button } from '@material-ui/core';
import { Rating } from '@material-ui/lab';
import styles from './addreview.module.scss';
import { useAuth } from '../../contexts/AuthContext';

const AddReview = ({ reviewsCounter, id, setReviewsCounter }) => {
  const { currentUser } = useAuth();
  const [userId, setUserId] = useState(null);
  const [inputReview, setInputReview] = useState('');
  const [inputRating, setInputRating] = useState(0);

  useEffect(() => {
    if (currentUser !== null) {
      axios
        .put('/api/users/', { email: currentUser.email })
        .then(({ data }) => {
          setUserId(data.id);
        })
        .catch((err) => console.log(err));
    }
  }, []);

  const addReview = (e) => {
    e.preventDefault();
    axios
      .post('/api/reviews', {
        show_id: id,
        user_id: userId,
        show_rating: inputRating,
        text: inputReview,
      })
      .then(() => setReviewsCounter(reviewsCounter + 1))
      .catch((error) => console.error('error adding new review', error));
  };

  return (
    <div className={styles.addReviewContainer}>
      <TextField
        label="Write Review"
        id="text"
        value={inputReview}
        required
        multiline
        rows={6}
        onChange={(e) => {
          setInputReview(e.target.value);
        }}
      />
      <div className={styles.ratingContainer}>
        <Rating
          id="show_rating"
          value={inputRating}
          onChange={(e, newValue) => {
            setInputRating(newValue);
          }}
        />
      </div>
      <Button onClick={(e) => addReview(e)}>Submit</Button>
    </div>
  );
};

export default AddReview;
