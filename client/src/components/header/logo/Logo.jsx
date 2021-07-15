import React, { useCallback } from 'react';
import { useHistory } from 'react-router-dom';
import logoStyles from './logo.module.scss';
import logo from '../../../assets/applogo-transparent.png';

export default function Logo() {
  const history = useHistory();
  const handleOnClick = useCallback(() => history.push('/'), [history]);

  return (
    <div onClick={handleOnClick} onKeyPress={handleOnClick} role="button" tabIndex={0}>
      <img className={logoStyles.logo} src={`${logo}`} alt="Teatro Logo" />
    </div>
  );
}
