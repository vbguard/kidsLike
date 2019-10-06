import React from 'react';
import { Link } from 'react-router-dom';

const Login = () => (
  <>
    <h1>Login</h1>
    <Link to="/register">register</Link>
  </>
);

const AuthPage = () => <Login />;

export default AuthPage;
