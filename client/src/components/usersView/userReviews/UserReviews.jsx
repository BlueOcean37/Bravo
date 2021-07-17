import React, { useEffect, useState } from 'react';
import axios from 'axios';
import styles from './userReviews.module.scss';
import ReviewCard from '../../commons/ReviewCard';

const { container } = styles;

export default function UserReviews({ id }) {
  const [userReviews, setUserReviews] = useState([]);
  useEffect(() => {
    axios
      .get(`/api/reviews/user/${id}`)
      .then(({ data }) => setUserReviews(data))
      .catch((err) => console.log(err));
  }, [id]);

  return (
    <div className={container}>
      {userReviews.map((review, i) => (
        <ReviewCard
          key={i}
          comments={review.comments}
          id={review.id}
          show_photo={review.show.photo}
          username={review.user.username}
          title={review.show.title}
          location={review.show.location}
          rating={review.rating}
          text={review.text}
          show_id={review.show_id}
          date={review.date}
        />
      ))}
    </div>
  );
}
