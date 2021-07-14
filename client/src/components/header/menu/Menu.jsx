import React from 'react';
import menuStyle from './menu.module';

import { Link } from 'react-router-dom';

import IconButton from '@material-ui/core/IconButton';

export default function Menu() {
  return (
    <div>
      <IconButton color="inherit">
        <Link to={'/'}> Home </Link>
      </IconButton>
      <IconButton color="inherit">
        <Link to={'/shows'}> Shows </Link>
      </IconButton>
      <IconButton color="inherit">
        <Link to={'/users'}> Users </Link>
      </IconButton>
      <IconButton color="inherit">
        <Link to={'/addShow'}> Add Show </Link>
      </IconButton>
      <IconButton color="inherit">
        <Link to={'/login'}> Login </Link>
      </IconButton>
      <IconButton color="inherit">
        <Link to={'/signup'}> Signup </Link>
      </IconButton>
    </div>
  );
}

{
  /* <ul>
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
</ul> */
}
