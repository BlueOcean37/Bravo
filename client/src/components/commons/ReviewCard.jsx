import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@material-ui/core'
import { ExpandLessOutlined, ExpandMoreOutlined } from '@material-ui/icons';
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
  showPhotoContainer,
  showPhoto,
  upVote,
  downVote
} = styles;

export default function ReviewCard({ id, username, rating, date, title, location, text, show_id, user_id, show_photo, comments }) {
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
          onClick={() => {onVote('up')}}>
          <ExpandLessOutlined id={upVote}/>
        </Button>
        <h2>{vote}</h2>
          <Button 
          onClick={() => {onVote('down')}}>
          <ExpandMoreOutlined id={downVote}/>
        </Button>
      </div>
      <div className={cardContainer}>
        <div className={header}>
          <Link to={{ pathname: '/shows', state: show_id }} className={link}>
            <span>
              {title}: {location}
            </span>
          </Link>
          <Link to={{ pathname: '/users', state: user_id }} className={link}>
            <span>{username}</span>
          </Link>
        </div>
        <div className={review}>
          <ReadMore text={text} />
        </div>
        <div className={footer}>{date}</div>
        <div>
          <DisplayComments comments={comments}/>
        </div>
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

const DisplayComments = ({ comments }) => {
  if (!comments) return null
  const [displayComments, setDisplayComments] = useState(false);
  
  console.log('THIS IS MY COMMENTS', comments)
  const toggleComments = () => {
    setDisplayComments(!displayComments);
  }

  return (
    <div>
      <div onClick={toggleComments} style={{color: "red"}}>View all comments</div>
      {displayComments ? 
        <div style={{padding:'20px'}}>
          {comments.map((comment) => 
            <div style={{padding: '2px'}}>
              <span>
                {comment.text}
              </span>
              <time>
                {new Date(Number(comment.date)).toDateString()}
              </time>
            </div>)}
        </div> 
      : null}
    </div>
  )
}
