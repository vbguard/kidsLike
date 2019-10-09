import React from 'react';
import { Switch, Route } from 'react-router-dom';
// import ProtectedComponent from './hoc/ProtectedComponent';

function App() {
  return (
    <Switch>
      <Route path="/" render={() => <h1>WORK</h1>} />
    </Switch>
  );
}

export default App;
