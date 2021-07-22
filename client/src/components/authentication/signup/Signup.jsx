/* eslint-disable react/jsx-boolean-value */
import React, { useState } from 'react';
import { createTheme, ThemeProvider } from '@material-ui/core/styles';
import axios from 'axios';
import { Link, useHistory } from 'react-router-dom';
import { Button, FormControl, InputLabel, Input, FormHelperText } from '@material-ui/core';
import Alert from '@material-ui/lab/Alert';
import { useAuth } from '../../../contexts/AuthContext';
import styles from './signup.module.scss';

export default function Signup() {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordConfirm, setPasswordConfirm] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');

  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const { signup, currentUser, addUserName } = useAuth();
  const history = useHistory();

  const formChangeHandler = (e) => {
    const targetId = e.target.id;
    const { value } = e.target;

    if (targetId === 'email') {
      setEmail(value);
    } else if (targetId === 'password') {
      setPassword(value);
    } else if (targetId === 'password-confirm') {
      setPasswordConfirm(value);
    } else if (targetId === 'username') {
      setUsername(value);
    } else if (targetId === 'firstName') {
      setFirstName(value);
    } else if (targetId === 'lastName') {
      setLastName(value);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (password !== passwordConfirm) {
      return setError('Passwords do not match');
    }

    setError('');
    setLoading(true);
    signup(email, password)
      .then(() => addUserName(username))
      .then(() => {
        const userData = {
          username,
          password,
          email,
          first_name: firstName,
          last_name: lastName,
          photo:
            'https://images.unsplash.com/photo-1519689680058-324335c77eba?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2850&q=80',
        };
        return axios.post('/api/users', userData);
      })
      .then(() => history.push('/'))
      .catch(() => setError('Failed to create an account'));
    return setLoading(false);
  };

  const colorTheme = createTheme({
    palette: {
      type: window.theme ? 'light' : 'dark',
    },
  });

  return (
    <>
      <ThemeProvider theme={colorTheme}>
        <div id={styles.signupContainer}>
          <h2> Sign Up </h2>
          {error && (
            <Alert variant="outlined" severity="error">
              {error}
            </Alert>
          )}
          <form
            onChange={formChangeHandler}
            id={styles.formContainer}
            onSubmit={handleSubmit}
            autoComplete="off"
          >
            <FormControl>
              <InputLabel htmlFor="username">Username *</InputLabel>
              <Input
                autoFocus={true}
                required={true}
                id="username"
                aria-describedby="username-text"
              />
              <FormHelperText id="username-text">Enter a valid username.</FormHelperText>
            </FormControl>
            <FormControl>
              <InputLabel htmlFor="firstName">First Name *</InputLabel>
              <Input required={true} id="firstName" aria-describedby="firstName-text" />
              <FormHelperText id="firstName-text">Enter a valid first name.</FormHelperText>
            </FormControl>
            <FormControl>
              <InputLabel htmlFor="lastName">Last Name *</InputLabel>
              <Input required={true} id="lastName" aria-describedby="lastName-text" />
              <FormHelperText id="lastName-text">Enter a valid last name.</FormHelperText>
            </FormControl>
            <FormControl>
              <InputLabel htmlFor="email">Email address *</InputLabel>
              <Input required={true} id="email" aria-describedby="email-text" />
              <FormHelperText id="email-text">Enter a valid email address.</FormHelperText>
            </FormControl>
            <FormControl>
              <InputLabel htmlFor="password">Password *</InputLabel>
              <Input
                required={true}
                inputProps={{ type: 'password' }}
                id="password"
                aria-describedby="password-text"
              />
              <FormHelperText id="password-text">Enter strong password</FormHelperText>
            </FormControl>
            <FormControl>
              <InputLabel htmlFor="password-confirm">Confirm Password *</InputLabel>
              <Input
                required
                inputProps={{ type: 'password' }}
                id="password-confirm"
                aria-describedby="password-confirm-text"
              />
              <FormHelperText id="password-confirm-text">Password must match.</FormHelperText>
            </FormControl>
            <Button disabled={loading} type="submit">
              Sign Up
            </Button>
          </form>
          <div>
            Already have an account?{' '}
            <Link to="/login" className={styles.link}>
              {' '}
              Login{' '}
            </Link>
          </div>
        </div>
      </ThemeProvider>
    </>
  );
}
