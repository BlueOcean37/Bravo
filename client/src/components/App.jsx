import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Header from './header/Header';
import Home from './homeView/Home';
import Shows from './showsView/Shows';
import Users from './usersView/Users';
import Login from './authentication/login/Login';
import ShowForm from './showForm/ShowForm';
import Signup from './authentication/signup/Signup';
import { AuthProvider } from '../contexts/AuthContext';
// import the user state
// if user is logged in, then set up the log out route

export default function App() {
  // add the user is logged in state here
  return (
    <Router>
      <div id="mainContainer">
        <header id="mainHeader">
          <Header />
        </header>
        <main id="mainPages">
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/shows" component={Shows} />
            <Route exact path="/users" component={Users} />
            <AuthProvider>
              <Route exact path="/login" component={Login} />
              <Route exact path="/signup" component={Signup} />
            </AuthProvider>
            <Route exact path="/addShow" component={ShowForm} />
          </Switch>
        </main>
        <footer></footer>
      </div>
    </Router>
  );
}
