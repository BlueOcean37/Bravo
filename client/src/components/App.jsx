import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Header from './header/Header';
import Home from './homeView/Home';
import Shows from './showsView/Shows';
import Users from './usersView/Users';
import Login from './authentication/login/Login';
import ShowForm from './showForm/ShowForm';
import Signup from './authentication/signup/Signup';
import NavBar from './header/navbar/NavBar';
import NotFound from './notFound/NotFound';
import styles from './app.module.scss';

export default function App() {
  return (
    <Router>
      <div id="mainContainer">
        <div id={styles.test}>
          <div id={styles.son} />
        </div>
        <header id="mainHeader">
          <Header />
        </header>
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
        <footer></footer>
      </div>
    </Router>
  );
}
