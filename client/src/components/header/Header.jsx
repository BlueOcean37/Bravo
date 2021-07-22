import React, { useEffect } from 'react';
import NavBar from './navbar/NavBar';

export default function Header({ setTheme, theme }) {
  // useEffect(() => {}, theme);
  return <NavBar setTheme={setTheme} theme={theme} />;
}
