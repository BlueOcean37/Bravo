import React, { useRef, useState } from 'react';
import axios from 'axios';
import { Link, useHistory } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import Input from '@material-ui/core/Input';
import FormHelperText from '@material-ui/core/FormHelperText';
import Alert from '@material-ui/lab/Alert';
import { useAuth } from '../../../contexts/AuthContext';
import styles from './signup.module.scss';

export default function Signup() {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordConfirm, setPasswordConfirm] = useState('');
  const [first_name, setFirstName] = useState('');
  const [last_name, setLastName] = useState('');

  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const { signup, currentUser } = useAuth();
  const history = useHistory();

  const formChangeHandler = (e) => {
    const targetId = e.target.id;
    const value = e.target.value;
    console.log(value);
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
      .then(() => {
        let options = {
          method: 'post',
          url: '/api/users',
          data: {
            UID: currentUser.uid,
            username,
            password,
            email,
            first_name,
            last_name,
          },
        };
        return axios(options);
      })
      .then(() => {
        console.log(currentUser);
        console.log('Successfully created an account!');
        history.push('/');
      })
      .catch((err) => {
        console.log(err);
        setError('Failed to create an account');
      });
    setLoading(false);
  };

  return (
    <>
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
            <InputLabel htmlFor="username">Username</InputLabel>
            <Input id="username" aria-describedby="username-text" />
            <FormHelperText id="username-text">Enter a valid username.</FormHelperText>
          </FormControl>
          <FormControl>
            <InputLabel htmlFor="firstName">First Name</InputLabel>
            <Input id="firstName" aria-describedby="firstName-text" />
            <FormHelperText id="firstName-text">Enter a valid first name.</FormHelperText>
          </FormControl>
          <FormControl>
            <InputLabel htmlFor="lastName">Last Name</InputLabel>
            <Input id="lastName" aria-describedby="lastName-text" />
            <FormHelperText id="lastName-text">Enter a valid last name.</FormHelperText>
          </FormControl>
          <FormControl>
            <InputLabel htmlFor="email">Email address</InputLabel>
            <Input id="email" aria-describedby="email-text" />
            <FormHelperText id="email-text">Enter a valid email address.</FormHelperText>
          </FormControl>
          <FormControl>
            <InputLabel htmlFor="password">Password</InputLabel>
            <Input id="password" aria-describedby="password-text" />
            <FormHelperText id="password-text">Enter strong password</FormHelperText>
          </FormControl>
          <FormControl>
            <InputLabel htmlFor="password-confirm">Confirm Password</InputLabel>
            <Input id="password-confirm" aria-describedby="password-confirm-text" />
            <FormHelperText id="password-confirm-text">Password must match.</FormHelperText>
          </FormControl>
          <Button disabled={loading} type="submit">
            Sign Up
          </Button>
        </form>
        <div>
          Already have an account? <Link to="/login"> Login </Link>
        </div>
      </div>
    </>
  );
}
