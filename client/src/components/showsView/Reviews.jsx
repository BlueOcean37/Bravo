import React from 'react';
import ReviewCard from '../commons/ReviewCard';

const Reviews = ({ reviewsInfo }) => (
  <div>
    {console.log('ASDFASDFASDFASDFASdf', reviewsInfo)}
    {reviewsInfo.map((review) => (
      <ReviewCard
        key={review.id}
        comments={review.comments}
        id={review.id}
        username={review.user.username}
        title={review.show.title}
        location={review.show.location}
        rating={review.rating}
        text={review.text}
        user_photo={review.user.photo}
        user_id={review.user_id}
        show_id={review.show_id}
        date={review.date}
      />
    ))}
  </div>
);

export default Reviews;
