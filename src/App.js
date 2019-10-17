import React from 'react';
import { Switch, Route } from 'react-router-dom';
import AuthPage from './pages/AuthPage/AuthPage';
import DashboardPage from './pages/DashboardPage/DashboardPage';
import PlanningPage from './pages/PlanningPage/PlanningPage';
import Footer from './components/Footer/Footer';
import Register from './components/Register/Register';
import Login from './components/Login/Login';
// import ProtectedComponent from './hoc/ProtectedComponent';

function App() {
  return (
    <>
      <Switch>
        <Route exact strict path="/" component={AuthPage} />
        <Route path="/login" component={Login} />
        <Route path="/register" component={Register} />
        <Route path="/dashboard" component={DashboardPage} />
        <Route path="/planning" component={PlanningPage} />
      </Switch>
      <Footer />
    </>
  );
}

export default App;
