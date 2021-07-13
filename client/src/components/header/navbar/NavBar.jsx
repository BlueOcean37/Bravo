import React from 'react';
import { Link } from 'react-router-dom';

export default function NavBar() {
  return (
    <>
      <nav>
        <ul>
          <li>
            <Link to={'/'}> Home </Link>
          </li>
          <li>
            <Link to={'/shows'}> Shows </Link>
          </li>
          <li>
            <Link to={'/users'}> Users </Link>
          </li>
          <li>
            <Link to={'/login'}> Login </Link>
          </li>
          <li>
            <Link to={'/signup'}> Signup </Link>
          </li>
          <li>
            <Link to={'/addShow'}> Add Show </Link>
          </li>
        </ul>
      </nav>
    </>
  );
}
