import React from 'react';
import { Switch, Route } from 'react-router-dom';
import AuthPage from './pages/AuthPage/AuthPage';
import LoginPage from './pages/LoginPage/LoginPage';
// import ProtectedComponent from './hoc/ProtectedComponent';

function App() {
  return (
    <Switch>
      <Route exact path="/" component={AuthPage} />
      <Route path="/login" component={LoginPage} />
    </Switch>
  );
}

export default App;
