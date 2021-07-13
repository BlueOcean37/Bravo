// authentication
import React from 'react';
import Signup from './signup/Signup';
import Login from './login/Login';
import { AuthProvider } from '../../contexts/AuthContext';

export default function Authentication() {
  return (
    <div>
      <AuthProvider>
        <Signup />
      </AuthProvider>
    </div>
  );
}
