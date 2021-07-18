import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { TextField, Button } from '@material-ui/core';
import { createTheme, ThemeProvider } from '@material-ui/core/styles';
import { Rating } from '@material-ui/lab';
import styles from './addreview.module.scss';
import { useAuth } from '../../contexts/AuthContext';
import LockedFeatureDialog from '../commons/lockedFeatureDialog';

const AddReview = ({ reviewsCounter, id, setReviewsCounter }) => {
  const { currentUser } = useAuth();
  const [showLockedFeatureDialog, setShowLockedFeatureDialog] = useState(false);
  const [userId, setUserId] = useState(null);
  const [inputReview, setInputReview] = useState('');
  const [inputRating, setInputRating] = useState(0);

  const colorTheme = createTheme({
    palette: {
      type: window.theme ? 'light' : 'dark',
    },
  });

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
    <ThemeProvider theme={colorTheme}>
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
        <LockedFeatureDialog
          showLockedFeatureDialog={showLockedFeatureDialog}
          setShowLockedFeatureDialog={setShowLockedFeatureDialog}
        />
        {currentUser ? (
          <Button onClick={(e) => addReview(e)}>Submit</Button>
        ) : (
          <Button onClick={() => setShowLockedFeatureDialog(true)}>Submit</Button>
        )}
      </div>
    </ThemeProvider>
  );
};

export default AddReview;
