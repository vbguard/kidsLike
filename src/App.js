import React from 'react';
import { Switch, Route } from 'react-router-dom';
import AuthPage from './pages/AuthPage/AuthPage';
import DashboardPage from './pages/DashboardPage/DashboardPage';
// import ProtectedComponent from './hoc/ProtectedComponent';

function App() {
  return (
    <Switch>
      <Route path="/" exact component={AuthPage} />
      <Route path="/dashboard" component={DashboardPage} />
    </Switch>
  );
}

export default App;
