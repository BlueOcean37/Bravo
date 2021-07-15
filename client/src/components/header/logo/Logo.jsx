import React, { useCallback } from 'react';
import logoStyles from './logo.module';
import { useHistory } from 'react-router-dom';

import { Link } from 'react-router-dom';

export default function Logo() {
  const history = useHistory();
  const handleOnClick = useCallback(() => history.push('/'), [history]);

  const logo =
    'https://raw.githubusercontent.com/BlueOcean37/Bravo/header-component/client/src/assets/applogo-removebg-preview.png';

  return (
    <img className={logoStyles.logo} src={`${logo}`} alt="Teatro Logo" onClick={handleOnClick} />
  );
}
