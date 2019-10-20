import React from 'react';
import { Switch, Route } from 'react-router-dom';
import AuthPage from './pages/AuthPage/AuthPage';
import DashboardPage from './pages/DashboardPage/DashboardPage';
import PlanningPage from './pages/PlanningPage/PlanningPage';
import Register from './components/Register/Register';
import Login from './components/Login/Login';
import Header from './components/Header/Header';
import ContactsPage from './pages/ContactsPage/ContactsPage';
import Footer from './components/Footer/Footer';
// import ProtectedComponent from './hoc/ProtectedComponent';

function App() {
  return (
    <>
      <Header />
      <Switch>
        <Route exact path="/" component={AuthPage} />
        <Route path="/login" component={Login} />
        <Route path="/register" component={Register} />
        <Route path="/dashboard" component={DashboardPage} />
        <Route path="/planning" component={PlanningPage} />
        <Route path="/contacts" component={ContactsPage} />
      </Switch>
    </>
  );
}

export default App;
