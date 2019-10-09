import React from 'react';
import { Switch, Route } from 'react-router-dom';
import AuthPage from './pages/AuthPage/AuthPage';
// import ProtectedComponent from './hoc/ProtectedComponent';

function App() {
  return (
    <Switch>
      <Route path="/" components={<AuthPage />} />
    </Switch>
  );
}

export default App;
