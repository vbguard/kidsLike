import React from 'react';
import { Switch, Route } from 'react-router-dom';
import AuthPage from './pages/AuthPage/AuthPage';
import Header from './components/Header/Header';
// import ProtectedComponent from './hoc/ProtectedComponent';

function App() {
  return (
    <>
      <Header />
      <Switch>
        <Route path="/auth" components={<AuthPage />} />
      </Switch>
    </>
  );
}

export default App;
