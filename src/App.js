import React from 'react';
import { Switch, Route } from 'react-router-dom';

import AuthPage from './pages/AuthPage/AuthPage';
import DaySelect from './components/DaySelect/DaySelect';
import CardTogle from './components/CardTogle/CardTogle';
import DashboardPage from './pages/DashboardPage/DashboardPage';
import PlanningPage from './pages/PlanningPage/PlanningPage';
import Register from './components/Register/Register';
import Login from './components/Login/Login';
// import ProtectedComponent from './hoc/ProtectedComponent';

function App() {
  return (
    <Switch>
      <Route exact path="/" component={AuthPage} />
      <Route path="/daySelect" component={DaySelect} />
      <Route path="/cardTogle" render={props => <CardTogle {...props} isTogleOn="true" />} />
      <Route path="/login" component={Login} />
      <Route path="/register" component={Register} />
      <Route path="/dashboard" component={DashboardPage} />
      <Route path="/planning" component={PlanningPage} />
    </Switch>
  );
}

export default App;
