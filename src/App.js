import React from 'react';
import { Switch, Route } from 'react-router-dom';

import AuthPage from './pages/AuthPage/AuthPage';
import DaySelect from './components/DaySelect/DaySelect';
import CardTogle from './components/CardTogle/CardTogle';
// import ProtectedComponent from './hoc/ProtectedComponent';

function App() {
  return (
    <Switch>
      <Route exact path="/" component={AuthPage} />
      <Route path="/daySelect" component={DaySelect} />
      <Route path="/cardTogle" render={props => <CardTogle {...props} isTogleOn="true" />} />
    </Switch>
  );
}

export default App;
