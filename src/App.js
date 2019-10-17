import React from 'react';
import { Switch, Route } from 'react-router-dom';
import AuthPage from './pages/AuthPage/AuthPage';
import AddTaskModal from './components/AddTaskModal/AddTaskModal';
// import ProtectedComponent from './hoc/ProtectedComponent';

function App() {
  return (
    <Switch>
      <Route exact path="/" component={AuthPage} />
      <Route path="/planning" component={AddTaskModal} />
    </Switch>
  );
}

export default App;
