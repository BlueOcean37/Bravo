import React, { useCallback } from 'react';
import logoStyles from './logo.module';
import { useHistory } from 'react-router-dom';
import logo from '../../../assets/applogo-transparent.png';

import { Link } from 'react-router-dom';

export default function Logo() {
  const history = useHistory();
  const handleOnClick = useCallback(() => history.push('/'), [history]);

  return (
    <img className={logoStyles.logo} src={`${logo}`} alt="Teatro Logo" onClick={handleOnClick} />
  );
}
