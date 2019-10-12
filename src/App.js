import React from 'react';
import { Switch, Route } from 'react-router-dom';
import AuthPage from './pages/AuthPage/AuthPage';
import DaySelect from './components/DaySelect/DaySelect';

// import ProtectedComponent from './hoc/ProtectedComponent';

function App() {
  return (
    <Switch>
      <Route exact path="/" component={AuthPage} />
      <Route path="/daySelect" component={DaySelect} />
    </Switch>
  );
}

export default App;
