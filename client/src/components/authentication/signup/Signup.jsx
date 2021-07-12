import React, { useRef } from 'react';
import Card from '@material-ui/core/Card';
import Button from '@material-ui/core/Button';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import Input from '@material-ui/core/Input';
import FormHelperText from '@material-ui/core/FormHelperText';

export default function Signup() {
  const emailRef = useRef();
  const passwordRef = useRef();
  const passwordConfirmRef = useRef();

  return (
    <>
      <form autoComplete="off">
        <FormControl ref={emailRef}>
          <InputLabel htmlFor="email">Email address</InputLabel>
          <Input id="email" aria-describedby="email-text" />
          <FormHelperText id="email-text">Enter a valid email address.</FormHelperText>
        </FormControl>
        <FormControl ref={passwordRef}>
          <InputLabel htmlFor="password">Password</InputLabel>
          <Input id="password" aria-describedby="password-text" />
          <FormHelperText id="password-text">Enter strong password</FormHelperText>
        </FormControl>
        <FormControl ref={passwordConfirmRef}>
          <InputLabel htmlFor="password-confirm">Confirm Password</InputLabel>
          <Input id="password-confirm" aria-describedby="password-confirm-text" />
          <FormHelperText id="password-confirm-text">Password must match.</FormHelperText>
        </FormControl>
        <Button type="submit">Sign Up</Button>
      </form>
      <div>Already have an account? Log In</div>
    </>
  );
}
