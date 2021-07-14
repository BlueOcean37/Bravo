import React, { useState, useEffect } from 'react';
import axios from 'axios';

export default function Home() {
  const [shows, setShows] = useState([]);
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    axios.get('/api/shows')
      .then(({ data }) => setShows(data))
      .catch((err) => console.log(err))
    axios.get('/api/reviews')
      .then(({ data }) => setReviews(data))  
      .catch((err) => console.log(err))
  }, [reviews])

  function incrementRating(id) {
    axios.put(`/api/reviews/${id}/upvote`)
      .then(() => console.log('Successfully Upvoted!'))
      .catch((err) => console.log(err))
  }

  function decrementRating(id) {
    axios.put(`/api/reviews/${id}/downvote`)
      .then(() => console.log('Successfully Downvoted!'))
      .catch((err) => console.log(err))
  }

  return (
    shows && reviews
      ? <div>
        <div>
          <select name='Sort By'>
            <option value='Popularity'>Popularity</option>
            <option value='Most Recent'>Most Recent</option>
          </select>
          <div> SHOWS
            {shows.map((show, index) => (
              <div key={index}>
                {index <= 10 ? 
                  <div>
                    {show.title}
                    <img src={show.photo}/> 
                  </div>
                : null}
              </div>))} 
          </div>
        </div>
        <div>
          <div> REVIEWS
            <select name='Sort By'>
              <option value='Popularity'>Popularity</option>
              <option value='Most Recent'>Most Recent</option>
            </select>
              {reviews.map((review, index) => ( 
                <div key={index}>
                  <button onClick={() => {incrementRating(review.id)}}>+</button>
                  <div>{review.rating}</div>
                  <button onClick={() => {decrementRating(review.id)}}>-</button>
                  <div>{`USERNAME: ${review.user[0].username}`}</div>
                  <div>{`SHOW RATING: ${review.show_rating}`}</div>
                  <div>{`TITLE: ${review.show[0].title}`}</div>
                  <div>{`LOCATION: ${review.show[0].location}`}</div>
                  {review.comments ? review.comments.map((comment, index) => 
                    <div key={index}> SHOW COMMENTS
                      <div>{`COMMENT TEXT: ${comment.text}`}</div>
                      <div>{`COMMENT TEXT: ${new Date(Number(comment.date)).toLocaleDateString('en-US')}`}</div>
                    </div>) : null}
                  <img src={review.user[0].photo}/>
                  <div>{`TEXT: ${review.text}`}</div>
                  <div>{`DATE: ${new Date(Number(review.date)).toLocaleDateString('en-US')}`}</div>
                </div>))}
          </div>
        </div>
      </div>
      : null
  )
}