import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import navstyle from './navbar.module';
import Logo from '../logo/Logo';
import AppMenu from '../menu/Menu';
import Search from '../search/Search';
import { useAuth } from '../../../contexts/AuthContext';

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import Badge from '@material-ui/core/Badge';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import MenuIcon from '@material-ui/icons/Menu';
import AccountCircle from '@material-ui/icons/AccountCircle';
import NotificationsIcon from '@material-ui/icons/Notifications';
import MoreIcon from '@material-ui/icons/MoreVert';

export default function NavBar() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);

  const isMenuOpen = Boolean(anchorEl);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);
  const { logout, currentUser } = useAuth();
  const history = useHistory();

  const handleProfileMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const handleLogout = (e) => {
    if (currentUser !== null) {
      logout()
        .then(() => {
          console.log('Successfully logged out!');
          history.push('/');
        })
        .catch((err) => console.log(err));
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
            <Link to={'/addShow'}> Add a Show </Link>
          </MenuItem>
          <MenuItem onClick={handleMenuClose}>
            <Link onClick={handleLogout} to={'/signOut'}>
              Sign Out
            </Link>
          </MenuItem>
        </div>
      ) : (
        <div>
          <MenuItem onClick={handleMenuClose}>
            <Link to={'/signup'}> Signup </Link>
          </MenuItem>
          <MenuItem onClick={handleMenuClose}>
            <Link to={'/login'}> Login </Link>
          </MenuItem>
        </div>
      )}
    </Menu>
  );

  return (
    <div className={navstyle.grow}>
      <AppBar color="transparent" position="fixed">
        <Toolbar className={navstyle.toolBar}>
          <Logo />
          <AppMenu />
          <div className={navstyle.grow} />
          <Search />
          <div className={navstyle.sectionDesktop}>
            <IconButton aria-label="show 17 new notifications" color="primary">
              <Badge badgeContent={17} color="secondary">
                <NotificationsIcon />
              </Badge>
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
