import React from 'react';
import { Switch, Route } from 'react-router-dom';
import AuthPage from './pages/AuthPage/AuthPage';
// import Pa from './components/Papa/Papa';
// import ProtectedComponent from './hoc/ProtectedComponent';

function App() {
  return (
    <Switch>
      <Route path="/" components={<AuthPage />} />
      {/* <Route path="/about" components={<Pa />} /> */}
    </Switch>
  );
}

export default App;
