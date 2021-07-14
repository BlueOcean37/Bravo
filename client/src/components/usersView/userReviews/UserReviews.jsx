import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import styles from './userReviews.module';
import axios from 'axios';
import ReviewCard from '../../commons/ReviewCard';
const { container } = styles;

export default function UserReviews() {
  const id = 8;
  const [userReviews, setUserReviews] = useState([]);
  useEffect(() => {
    axios
      .get(`/api/reviews/user/${id}`)
      .then(({ data }) => setUserReviews(data))
      .catch((err) => console.log(err));
  }, []);
  console.log(userReviews);
  return (
    <div className={container}>
      {userReviews.map((review, i) => {
        return (
          <ReviewCard
            key={i}
            username={review.user.username}
            title={review.show.title}
            location={review.show.location}
            rating={review.rating}
            text={review.text}
            show_id={review.show_id}
            date={review.date}
          />
        );
      })}
    </div>
  );
}
