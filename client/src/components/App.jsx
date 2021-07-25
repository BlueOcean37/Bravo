import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { createTheme, ThemeProvider } from '@material-ui/core/styles';
import Header from './header/Header';
import Home from './homeView/Home';
import Shows from './showsView/Shows';
import Users from './usersView/Users';
import Login from './authentication/login/Login';
import ShowForm from './showForm/ShowForm';
import Signup from './authentication/signup/Signup';
import NotFound from './notFound/NotFound';

export default function App() {
  const [theme, setTheme] = useState(false);
  const colorTheme = createTheme({
    palette: {
      type: theme ? 'light' : 'dark',
    },
  });

  window.theme = theme; //DO NOT TOUCH FOR NOW

  return (
    <Router>
      <div id="mainContainer">
        <header id="mainHeader">
          <Header theme={theme} setTheme={setTheme} />
        </header>
        <ThemeProvider theme={colorTheme}>
          <main id="mainPages">
            <Switch>
              <Route exact path="/" component={Home} />
              <Route exact path="/shows" component={Shows} />
              <Route exact path="/users" component={Users} />
              <Route exact path="/login" component={Login} />
              <Route exact path="/signup" component={Signup} />
              <Route exact path="/signOut" component={Home} />
              <Route exact path="/addShow" component={ShowForm} />
              <Route path="/" component={NotFound} />
            </Switch>
          </main>
          <footer />
        </ThemeProvider>
      </div>
    </Router>
  );
}
