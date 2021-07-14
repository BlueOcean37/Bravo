// users MAIN page, only import sub components here
import React from 'react';
import UserInfo from './userInfo/UserInfo.jsx';
import UserReviews from './userReviews/UserReviews';
import styles from './users.module';

export default function Users() {
  return (
    <div>
      Users Main Page
      <UserInfo />
      <UserReviews />
    </div>
  );
}
