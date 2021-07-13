import React, { useEffect, useState } from 'react';
import styles from './userReviews.module';
import axios from 'axios';
const { container } = styles;

export default function UserReviews() {
  const id = 8;
  const [userReviews, setUserReviews] = useState({});
  useEffect(() => {
    axios
      .get(`/api/reviews/user/${id}`)
      .then(({ data }) => setUserReviews(data))
      .catch((err) => console.log(err));
  }, []);
  console.log(userReviews);
  return <div className={container}>User Reviews</div>;
}
