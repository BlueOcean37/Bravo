import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styles from './home.module.scss';
import ReviewCard from '../commons/ReviewCard';
import HomeShows from './HomeShows';
import HomeBanner from './homeBanner/HomeBanner';

export default function Home() {
  const [reviews, setReviews] = useState([]);
  const [reviewsDisplay, setReviewsDisplay] = useState(4);

  useEffect(() => {
    axios
      .get('/api/reviews')
      .then(({ data }) => setReviews(data))
      .catch((err) => console.log(err));
  }, []);

  function displayMoreReviews(e) {
    if (e.target.scrollHeight - e.target.scrollTop === e.target.clientHeight) {
      setReviewsDisplay(reviewsDisplay + 3);
    }
  }

  return (
    <>
      <HomeBanner />
      <section id={styles.reviews}>
        <h2>Trending</h2>
        <HomeShows sort="rating" />
        <h2>Most Recent</h2>
        <HomeShows sort="date" />
        <section id={styles.outerReviewsContainer}>
          <h2>Reviews</h2>
          <div id={styles.innerReviewsContainer} onScroll={displayMoreReviews}>
            {reviews.map((review, index) => (
              <div key={index}>
                {index <= reviewsDisplay ? (
                  <div>
                    <ReviewCard
                      key={index}
                      id={review.id}
                      user_id={review.user_id}
                      user_photo={review.user[0].photo}
                      username={review.user[0].username}
                      title={review.show[0].title}
                      show_photo={review.show[0].photo}
                      location={review.show[0].location}
                      rating={review.rating}
                      text={review.text}
                      show_id={review.show_id}
                      date={review.date}
                      comments={review.comments}
                    />
                  </div>
                ) : null}
              </div>
            ))}
          </div>
        </section>
      </section>
    </>
  );
}
