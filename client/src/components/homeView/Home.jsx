import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useAuth } from '../../contexts/AuthContext';
import styles from './home.module.scss';
import ReviewCard from '../commons/ReviewCard';
import HomeShows from './HomeShows';

export default function Home() {
  // const [shows, setShows] = useState([]);
  const [reviews, setReviews] = useState([]);
  const [reviewsDisplay, setReviewsDisplay] = useState(4);
  // const [showComments, setShowComments] = useState(false);
  const { currentUser } = useAuth();

  useEffect(() => {
    // axios.get('/api/shows')
    // .then(({ data }) => setShows(data))
    // .catch((err) => console.log(err))
    axios.get('/api/reviews')
      .then(({ data }) => setReviews(data))  
      .catch((err) => console.log(err))
  }, [])

  function displayMoreReviews(e) {
    if (e.target.scrollHeight - e.target.scrollTop === e.target.clientHeight) {
      setReviewsDisplay(reviewsDisplay + 3);
    }
  }

  // function showTheComments() {
  //   setShowComments(!showComments);
  // }

  return (
    reviews
      ? <section id={styles.shows_reviews}>
          <h2>
            Trending
          </h2>
          <HomeShows query={'rating'}/>
          <h2>
            Most Recent
          </h2>
          <HomeShows query={'date'}/>
        <section id={styles.outerReviewsContainer}>
          <h2>
            REVIEWS
          </h2>
            <div id={styles.innerReviewsContainer} onScroll={displayMoreReviews}>
              {reviews.map((review, index) => (
                <div key={index}>
                  {index <= reviewsDisplay ? 
                  <div>
                    <ReviewCard
                      key={index}
                      id={review.id}
                      username={review.user[0].username}
                      title={review.show[0].title}
                      location={review.show[0].location}
                      rating={review.rating}
                      text={review.text}
                      show_id={review.show_id}
                      date={new Date(Number(review.date)).toLocaleDateString('en-US')}
                    />
                  </div>
                  : null}
                </div>
              ))}
            </div>
        </section>
      </section>
      : null
  )
}