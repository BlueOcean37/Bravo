import React, { useEffect, useState } from 'react';
import axios from 'axios';

export default function UserInfo() {
  const id = 8;
  const [userInfo, setUserInfo] = useState({});
  useEffect(() => {
    axios
      .get(`/api/users/${id}`)
      .then(({ data }) => setUserInfo(data))
      .catch((err) => console.log(err));
  }, []);

  return <div>User Info</div>;
}
