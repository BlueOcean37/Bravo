import React, { useRef, useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import Input from '@material-ui/core/Input';
import FormHelperText from '@material-ui/core/FormHelperText';
import Alert from '@material-ui/lab/Alert';
import { useAuth } from '../../../contexts/AuthContext';

export default function Signup() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordConfirm, setPasswordConfirm] = useState('');
  const { signup, currentUser } = useAuth();
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const history = useHistory();

  const formChangeHandler = (e, value) => {
    if (e.target.id === 'email') {
      setEmail(e.target.value);
    } else if (e.target.id === 'password') {
      setPassword(e.target.value);
    } else {
      setPasswordConfirm(e.target.value);
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
      <h2> Sign Up </h2>
      {error && (
        <Alert variant="outlined" severity="error">
          {error}
        </Alert>
      )}
      <form onSubmit={handleSubmit} autoComplete="off">
        <FormControl>
          <InputLabel htmlFor="email">Email address</InputLabel>
          <Input onChange={formChangeHandler} id="email" aria-describedby="email-text" />
          <FormHelperText id="email-text">Enter a valid email address.</FormHelperText>
        </FormControl>
        <FormControl>
          <InputLabel htmlFor="password">Password</InputLabel>
          <Input onChange={formChangeHandler} id="password" aria-describedby="password-text" />
          <FormHelperText id="password-text">Enter strong password</FormHelperText>
        </FormControl>
        <FormControl>
          <InputLabel htmlFor="password-confirm">Confirm Password</InputLabel>
          <Input
            onChange={formChangeHandler}
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
        Already have an account? <Link to="/login"> Login </Link>
      </div>
    </>
  );
}
