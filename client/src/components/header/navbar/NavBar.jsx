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

import { ThemeProvider } from '@material-ui/core';
// import Paper from '@material-ui/core/Paper';
import { createMuiTheme, makeStyles } from '@material-ui/core/styles';
import Brightness3Icon from '@material-ui/icons/Brightness3';
import Brightness7Icon from '@material-ui/icons/Brightness7';

const useStyles = makeStyles((theme) => ({
  root: {
    marginBottom: theme.spacing(2),
    flexGrow: 1,
  },
  title: {
    flexGrow: 1,
  },
}));

export default function NavBar() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);

  const isMenuOpen = Boolean(anchorEl);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);
  const { logout, currentUser } = useAuth();
  const history = useHistory();

  const [theme, setTheme] = useState(true);
  const classes = useStyles();
  const icon = !theme ? <Brightness7Icon /> : <Brightness3Icon />;
  const appliedTheme = createMuiTheme(theme ? light : dark);

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
    <ThemeProvider>
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
                onClick={() => setTheme(!theme)}
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
    </ThemeProvider>
  );
}

export const light = {
  palette: {
    type: 'light',
  },
};
export const dark = {
  palette: {
    type: 'dark',
  },
};
