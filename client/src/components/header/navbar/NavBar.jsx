import React from 'react';
import { Link, useHistory } from 'react-router-dom';

import Brightness3Icon from '@material-ui/icons/Brightness3';
import Brightness7Icon from '@material-ui/icons/Brightness7';

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import AccountCircle from '@material-ui/icons/AccountCircle';

import navstyle from './navbar.module.scss';
import Logo from '../logo/Logo';
import AppMenu from '../menu/Menu';
import Search from '../search/Search';

import { useAuth } from '../../../contexts/AuthContext';

export default function NavBar({ setTheme, theme }) {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const { logout, currentUser } = useAuth();
  const history = useHistory();

  const isMenuOpen = Boolean(anchorEl);
  const icon = !theme ? <Brightness7Icon /> : <Brightness3Icon />;

  const handleProfileMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const handleLogout = () => {
    if (currentUser !== null) {
      logout()
        .then(() => {
          history.push('/');
        })
        .catch((err) => err);
    }
  };

  const changeColors = () => {
    if (!theme) {
      document.documentElement.style.setProperty('--bg-color', '#e9e9e9');
      document.documentElement.style.setProperty('--font-color', '#0f0f0e');
    } else {
      document.documentElement.style.setProperty('--bg-color', '#0f0f0e');
      document.documentElement.style.setProperty('--font-color', '#fcf6ed');
    }
  };

  const menuId = 'primary-search-account-menu';
  const renderMenu = (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
      id={menuId}
      keepMounted
      transformOrigin={{ vertical: 'top', horizontal: 'right' }}
      open={isMenuOpen}
      onClose={handleMenuClose}
    >
      {currentUser !== null ? (
        <div>
          <MenuItem onClick={handleMenuClose}>
            <Link to="/addShow"> Add a Show </Link>
          </MenuItem>
          <MenuItem onClick={handleMenuClose}>
            <Link onClick={handleLogout} to="/signOut">
              Sign Out
            </Link>
          </MenuItem>
        </div>
      ) : (
        <div>
          <MenuItem onClick={handleMenuClose}>
            <Link to="/signup" className={navstyle.link}>
              {' '}
              Signup{' '}
            </Link>
          </MenuItem>
          <MenuItem onClick={handleMenuClose}>
            <Link to="/login" className={navstyle.link}>
              {' '}
              Login{' '}
            </Link>
          </MenuItem>
        </div>
      )}
    </Menu>
  );

  return (
    <div className={navstyle.grow}>
      <AppBar style={{ background: '#000000' }} position="relative">
        <Toolbar className={navstyle.toolBar}>
          <Logo />
          <AppMenu />
          <div className={navstyle.grow} />
          <Search />
          <div className={navstyle.sectionDesktop}>
            <IconButton
              edge="end"
              color="inherit"
              aria-label="mode"
              onClick={() => {
                changeColors();
                setTheme(!theme);
              }}
            >
              {icon}
            </IconButton>
            <IconButton
              edge="end"
              aria-label="account of current user"
              aria-controls={menuId}
              aria-haspopup="true"
              onClick={handleProfileMenuOpen}
              color="primary"
            >
              <AccountCircle />
            </IconButton>
          </div>
        </Toolbar>
      </AppBar>
      {renderMenu}
    </div>
  );
}
