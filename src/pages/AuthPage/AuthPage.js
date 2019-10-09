import React from 'react';
import { Switch, Route, Link } from 'react-router-dom';

const Login = () => (
  <>
    <h1>Login</h1>
    <Link to="/register">register</Link>
  </>
);

const AuthPage = () => (
  <Switch>
    <Route path="/" render={() => <Login />} />
    <Route path="/register" render={() => <h1>Register</h1>} />
  </Switch>
);

export default AuthPage;
