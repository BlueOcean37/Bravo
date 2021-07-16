// users MAIN page, only import sub components here
import React from 'react';
import UserInfo from './userInfo/UserInfo.jsx';
import UserReviews from './userReviews/UserReviews';
import styles from './users.module';
const { container } = styles;
export default function Users({location}) {
  return (
    <div className={container}>
      <UserInfo id={location.state} />
      <UserReviews id={location.state} />
    </div>
  );
}
