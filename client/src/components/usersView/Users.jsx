// users MAIN page, only import sub components here
import React, { useState, useEffect } from 'react';
import UserInfo from './userInfo/UserInfo';
import UserReviews from './userReviews/UserReviews';
import styles from './users.module.scss';

const { container } = styles;
export default function Users({ location }) {
  const [id, setId] = useState(location.state);

  useEffect(() => {
    setId(location.state);
  }, [location.state]);

  return (
    <div className={container}>
      <UserInfo id={id} />
      <UserReviews id={id} />
    </div>
  );
}
