import React, { useEffect, useState } from 'react';
import axios from 'axios';
import styles from './userInfo.module';
const { container, photoContainer, photo, name } = styles;

export default function UserInfo() {
  const id = 8;
  const [userInfo, setUserInfo] = useState({});
  useEffect(() => {
    axios
      .get(`/api/users/${id}`)
      .then(({ data }) => setUserInfo(data))
      .catch((err) => console.log(err));
  }, []);
  return (
    <div className={container}>
      <div className={photoContainer}>
        <img alt="profile picture" src={userInfo.photo} className={photo} />
      </div>
      <div className={name}>
        <h2>
          {userInfo.first_name} {userInfo.last_name}
        </h2>
      </div>
    </div>
  );
}
