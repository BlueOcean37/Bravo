import React, { useRef, useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import Input from '@material-ui/core/Input';
import FormHelperText from '@material-ui/core/FormHelperText';
import Alert from '@material-ui/lab/Alert';
import { useAuth } from '../../../contexts/AuthContext';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { login } = useAuth();
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const history = useHistory();

  const formChangeHandler = (e) => {
    e.target.id === 'email' ? setEmail(e.target.value) : setPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    setError('');
    setLoading(true);
    login(email, password)
      .then(() => {
        console.log('Successfully logged!');
        history.push('/');
      })
      .catch((err) => {
        console.log(err);
        setError('Failed to log in!');
      });
    setLoading(false);
  };

  return (
    <>
      <h2> Log In </h2>
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
          <FormHelperText id="password-text">Enter password</FormHelperText>
        </FormControl>
        <Button disabled={loading} type="submit">
          Login
        </Button>
      </form>
      <div>
        Need have an account? <Link to="/signup"> Sign up </Link>{' '}
      </div>
    </>
  );
}
