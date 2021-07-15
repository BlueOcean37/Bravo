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
      <AppBar style={{ background: '#000000' }} position="relative">
        <Toolbar className={navstyle.toolBar}>
          <Logo />
          <AppMenu />
          <div className={navstyle.grow} />
          <Search />
          <div className={navstyle.sectionDesktop}>
            <IconButton aria-label="show 17 new notifications" color="primary">
              <Badge color="secondary">
                <button
                  class="MuiButtonBase-root MuiIconButton-root MuiIconButton-colorInherit"
                  tabindex="0"
                  type="button"
                  aria-label="Toggle light/dark theme"
                  data-ga-event-category="header"
                  data-ga-event-action="dark"
                  title="Toggle light/dark theme"
                >
                  <span class="MuiIconButton-label">
                    <svg
                      class="MuiSvgIcon-root"
                      focusable="false"
                      viewBox="0 0 24 24"
                      aria-hidden="true"
                    >
                      <path d="M20 8.69V4h-4.69L12 .69 8.69 4H4v4.69L.69 12 4 15.31V20h4.69L12 23.31 15.31 20H20v-4.69L23.31 12 20 8.69zM12 18c-.89 0-1.74-.2-2.5-.55C11.56 16.5 13 14.42 13 12s-1.44-4.5-3.5-5.45C10.26 6.2 11.11 6 12 6c3.31 0 6 2.69 6 6s-2.69 6-6 6z"></path>
                    </svg>
                  </span>
                  <span class="MuiTouchRipple-root"></span>
                </button>
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
