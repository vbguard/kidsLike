import React from 'react';
import { Switch, Route } from 'react-router-dom';
import AuthPage from './pages/AuthPage/AuthPage';
import DashboardPage from './pages/DashboardPage/DashboardPage';
import PlanningPage from './pages/PlanningPage/PlanningPage';
import Register from './components/Register/Register';
import Login from './components/Login/Login';
import Header from './components/Header/Header';
import ContactsPage from './pages/ContactsPage/ContactsPage';
// import storage from './utils/storage';
import ProtectedComponent from './hoc/ProtectedComponent';

function App() {
  // const token = storage.getToken();
  return (
    <>
      <Header />
      <Switch>
        <Route exact path="/" component={AuthPage} />
        <Route path="/login" component={Login} />
        <Route path="/register" component={Register} />
        <Route path="/dashboard" component={DashboardPage} />
        <Route path="/planning" component={PlanningPage} />
        {/* <ProtectedComponent path="/dashboard" component={DashboardPage} /> */}
        {/* <ProtectedComponent path="/planning" component={PlanningPage} /> */}
        <ProtectedComponent path="/contacts" component={ContactsPage} />
        {/* <ProtectedComponent path="*" /> */}
      </Switch>
    </>
  );
}

export default App;
