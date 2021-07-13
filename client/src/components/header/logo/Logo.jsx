import React from 'react';
import logoStyles from './logo.module';

export default function Logo() {
  const logo =
    'https://raw.githubusercontent.com/BlueOcean37/Bravo/dev-environment-test/client/src/assets/applogo.png';

  return <img className={logoStyles.logo} src={`${logo}`} alt="Teatro Logo" />;
}
