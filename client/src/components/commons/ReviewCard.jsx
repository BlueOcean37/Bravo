import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@material-ui/core'
import { ThumbUp, ThumbDown } from '@material-ui/icons';
import axios from 'axios';
import styles from './reviewcard.module';

const {
  container,
  ratingContainer,
  cardContainer,
  header,
  reviewContainer,
  review,
  read,
  link,
  footer,
} = styles;

export default function ReviewCard({ id, username, rating, date, title, location, text, show_id }) {
  const [vote, setVote] = useState(rating)
  
  const onVote = (direction) => {
    if (direction === 'up') {
      axios.put(`/api/reviews/${id}/upvote`)
        .then(setVote(vote + 1))
        .catch((err) => console.log(err))
    } else if (direction === 'down') {
      axios.put(`/api/reviews/${id}/downvote`)
        .then(setVote(vote - 1))
        .catch((err) => console.log(err))
    }
  }

  date = new Date(Number(date)).toDateString();
  return (
    <div className={reviewContainer}>
      <div className={ratingContainer}>
        <Button 
          variant='contained' 
          color='secondary' 
          onClick={() => {onVote('up')}}>
          <ThumbUp/>
        </Button>
        <h2>{vote}</h2>
        <Button 
          variant='contained' 
          color='secondary' 
          onClick={() => {onVote('down')}}>
          <ThumbDown/>
        </Button>
      </div>
      <div className={cardContainer}>
        <div className={header}>
          <span>{username}</span>
          <Link to={{ pathname: '/shows', state: show_id }} className={link}>
            <span>
              {title}: {location}
            </span>
          </Link>
        </div>
        <div className={review}>
          <ReadMore text={text} />
        </div>
        <div className={footer}>{date}</div>
      </div>
    </div>
  );
}

const ReadMore = ({ text }) => {
  const [isReadMore, setIsReadMore] = useState(true);
  const toggleReadMore = () => {
    setIsReadMore(!isReadMore);
  };
  if (text.length >= 500) {
    return (
      <p>
        {isReadMore ? text.slice(0, 500) : text}
        <span onClick={toggleReadMore} className={read}>
          {isReadMore ? '...read more' : ' show less'}
        </span>
      </p>
    );
  } else {
    return <p>{text}</p>;
  }
};
