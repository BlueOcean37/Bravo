import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Button, Select } from '@material-ui/core';
import { ThumbUp, ThumbDown } from '@material-ui/icons';
import axios from 'axios';
import styles from './home.module.scss';
import HomeBanner from './homeBanner/HomeBanner';

export default function Home() {
  const [shows, setShows] = useState([]);
  const [reviews, setReviews] = useState([]);
  const [showsDisplay, setShowsDisplay] = useState(4);
  const [reviewsDisplay, setReviewsDisplay] = useState(4);
  const [showComments, setShowComments] = useState(false);

  useEffect(() => {
    axios
      .get('/api/shows')
      .then(({ data }) => setShows(data))
      .catch((err) => console.log(err));
    axios
      .get('/api/reviews')
      .then(({ data }) => setReviews(data))
      .catch((err) => console.log(err));
  }, []);

  function incrementRating(id) {
    axios
      .put(`/api/reviews/${id}/upvote`)
      .then(() => console.log('Successfully Upvoted!'))
      .catch((err) => console.log(err));
  }

  function decrementRating(id) {
    axios
      .put(`/api/reviews/${id}/downvote`)
      .then(() => console.log('Successfully Downvoted!'))
      .catch((err) => console.log(err));
  }

  function displayMoreShows(e) {
    if (e.target.scrollWidth - e.target.scrollLeft === e.target.clientWidth) {
      setShowsDisplay(showsDisplay + 3);
    }
  }

  function displayMoreReviews(e) {
    if (e.target.scrollHeight - e.target.scrollTop === e.target.clientHeight) {
      setReviewsDisplay(reviewsDisplay + 3);
    }
  }

  function showTheComments() {
    setShowComments(!showComments);
  }

  return (
    <>
      <HomeBanner />
      {shows && reviews ? (
        <section id={styles.shows_reviews}>
          <h2>SHOWS</h2>
          <div id={styles.dropDown}>
            <Select variant="outlined">
              <option value="Popularity">Popularity</option>
              <option value="Most Recent">Most Recent</option>
            </Select>
          </div>
          <div id={styles.showsContainer} onScroll={displayMoreShows}>
            {shows.map((show, index) => (
              <div key={index}>
                {index <= showsDisplay ? (
                  <div>
                    <h3>{show.title}</h3>
                    <img id={styles.showsPhoto} src={show.photo} />
                  </div>
                ) : null}
              </div>
            ))}
          </div>
          <Link id={styles.link} to="/addShow">
            ADD A SHOW
          </Link>
          <section id={styles.outerReviewsContainer}>
            <h2>REVIEWS</h2>
            <div id={styles.dropDown}>
              <Select variant="outlined">
                <option value="Popularity">Popularity</option>
                <option value="Most Recent">Most Recent</option>
              </Select>
            </div>
            <div id={styles.innerReviewsContainer} onScroll={displayMoreReviews}>
              {reviews.map((review, index) => (
                <div key={index}>
                  {index <= reviewsDisplay ? (
                    <div id={styles.reviews}>
                      <Button
                        variant="contained"
                        color="secondary"
                        onClick={() => {
                          incrementRating(review.id);
                        }}
                      >
                        <ThumbUp />
                      </Button>
                      <div>{`RATING: ${review.rating}`}</div>
                      <Button
                        variant="contained"
                        color="secondary"
                        onClick={() => {
                          decrementRating(review.id);
                        }}
                      >
                        <ThumbDown />
                      </Button>
                      <div>{`USERNAME: ${review.user[0].username}`}</div>
                      <div>{`SHOW RATING: ${review.show_rating}`}</div>
                      <div>{`TITLE: ${review.show[0].title}`}</div>
                      <div>{`LOCATION: ${review.show[0].location}`}</div>
                      <img src={review.user[0].photo} />
                      <p>{`REVIEW TEXT: ${review.text}`}</p>
                      <time>
                        {`DATE: ${new Date(Number(review.date)).toLocaleDateString('en-US')}`}
                      </time>
                      <div>
                        <Button
                          variant="contained"
                          color="secondary"
                          onClick={() => {
                            showTheComments();
                          }}
                        >
                          SHOW COMMENTS
                        </Button>
                        {showComments
                          ? review.comments
                            ? review.comments.map((comment, index) => (
                                <div key={index}>
                                  <p>{`COMMENT TEXT: ${comment.text}`}</p>
                                  <time>
                                    {`COMMENT DATE: ${new Date(
                                      Number(comment.date)
                                    ).toLocaleDateString('en-US')}`}
                                  </time>
                                </div>
                              ))
                            : null
                          : null}
                      </div>
                    </div>
                  ) : null}
                </div>
              ))}
            </div>
          </section>
        </section>
      ) : null}
      ;
    </>
  );
}
