import React, { useState } from 'react';

import { Link } from 'react-router-dom';

import navstyle from './navbar.module';
import Logo from '../logo/Logo';
import AppMenu from '../menu/Menu';

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

  const handleProfileMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    handleMobileMenuClose();
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
      <MenuItem onClick={handleMenuClose}>
        <Link to={'/signup'}> Signup </Link>
      </MenuItem>
      <MenuItem onClick={handleMenuClose}>
        <Link to={'/login'}> Login </Link>
      </MenuItem>
      <MenuItem onClick={handleMenuClose}>
        <Link to={'/users'}> Profile </Link>
      </MenuItem>
      <MenuItem onClick={handleMenuClose}>
        <Link to={'/addShow'}> Add Show </Link>
      </MenuItem>
    </Menu>
  );

  return (
    <div className={navstyle.grow}>
      <AppBar position="static" title={<img src="https://unsplash.it/40/40" />}>
        <Toolbar className={navstyle.toolBar}>
          <Logo />
          <AppMenu />
          <div className={navstyle.grow} />
          <div className={navstyle.sectionDesktop}>
            <IconButton aria-label="show 17 new notifications" color="inherit">
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
              color="inherit"
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
