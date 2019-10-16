import React from 'react';
import { Switch, Route } from 'react-router-dom';
import AuthPage from './pages/AuthPage/AuthPage';
import Card from './components/Card/Card';
// import ProtectedComponent from './hoc/ProtectedComponent';

function App() {
  return (
    <Switch>
      <Route exact path="/" component={AuthPage} />
      <Route path="/card" component={Card} />
    </Switch>
  );
}

export default App;
