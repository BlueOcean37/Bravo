import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@material-ui/core'
import { ExpandLessOutlined, ExpandMoreOutlined } from '@material-ui/icons';
import axios from 'axios';
import styles from './reviewcard.module';
import { useAuth } from '../../contexts/AuthContext';

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
  downVote,
  commentsContainer,
  userPhoto,
  rightSideContainer,
  flexShow,
  commentsTime
} = styles;

export default function ReviewCard({ id, username, rating, date, title, location, text, show_id, user_id, user_photo, show_photo, comments }) {
  const [vote, setVote] = useState(rating)
  const { currentUser } = useAuth();
  
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

  date = new Date(Number(date)).toLocaleDateString("en-US");
  return (
    <div className={reviewContainer}>
      <div className={ratingContainer}>
        {currentUser ? 
          <Button 
            onClick={() => {onVote('up')}}>
            <ExpandLessOutlined id={upVote}/>
          </Button>
        :<Button>
          <ExpandLessOutlined id={upVote}/>
        </Button>}
        <h2>{vote}</h2>
        {currentUser ?  
          <Button 
            onClick={() => {onVote('down')}}>
            <ExpandMoreOutlined id={downVote}/>
          </Button> 
        :<Button>
          <ExpandMoreOutlined id={downVote}/>
        </Button>}
      </div>
      <div className={rightSideContainer}>
        <div className={flexShow}>
          <div className={showPhotoContainer}>
            <img src={show_photo} className={showPhoto} alt="show photo"></img>
          </div>
        </div>
        <div className={cardContainer}>
          <div className={header}>
            <div>
            <Link to={{ pathname: '/shows', state: show_id }} className={link}>
              <span>
                {title}: {location} 
              </span>
            </Link>
            </div>
            <div>
              <span style={{"font-size": "10px", "color": "grey", "margin-right": "10px"}}>{date}</span>
              <Link to={{ pathname: '/users', state: user_id }} className={link}>
                <span>{username}</span>
              </Link>
              <img className={userPhoto} src={user_photo}/>
            </div>
          </div>
          <div className={review}>
            <ReadMore text={text} />
          </div>
          <div className={footer}>
            <DisplayComments comments={comments}/>
          </div>
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
  
  const toggleComments = () => {
    setDisplayComments(!displayComments);
  }

  return (
    <div>
      <div onClick={toggleComments}>Show all comments</div>
      {displayComments ? 
        <div className={commentsContainer}>
          {comments.map((comment) => 
            <div>
              <time className={commentsTime}>
                {new Date(Number(comment.date)).toLocaleDateString("en-US")}
              </time>
              <span>
                {comment.text}
              </span>
            </div>)}
        </div> 
      : null}
    </div>
  )
}
