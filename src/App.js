import React from 'react';
import { Switch, Route } from 'react-router-dom';
import AuthPage from './pages/AuthPage/AuthPage';
import DashboardPage from './pages/DashboardPage/DashboardPage';
import PlanningPage from './pages/PlanningPage/PlanningPage';
// import ProtectedComponent from './hoc/ProtectedComponent';

function App() {
  return (
    <Switch>
      <Route path="/" exact component={AuthPage} />
      <Route path="/dashboard" component={DashboardPage} />
      <Route path="/planning" component={PlanningPage} />
    </Switch>
  );
}

export default App;
