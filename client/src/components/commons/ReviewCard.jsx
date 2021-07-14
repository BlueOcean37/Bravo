import React, { useState } from 'react';
import { Link } from 'react-router-dom';
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

export default function ReviewCard({ username, rating, date, title, location, text, show_id }) {
  date = new Date(Number(date)).toDateString();
  return (
    <div className={reviewContainer}>
      <div className={ratingContainer}>
        <h2>{rating}</h2>
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
