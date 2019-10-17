import React from 'react';
import { Switch, Route } from 'react-router-dom';
import AuthPage from './pages/AuthPage/AuthPage';
<<<<<<< HEAD
import Header from './components/Header/Header';
import TaskList from './components/TaskList/TaskList';
=======
import DashboardPage from './pages/DashboardPage/DashboardPage';
import PlanningPage from './pages/PlanningPage/PlanningPage';
import Register from './components/Register/Register';
import Login from './components/Login/Login';
>>>>>>> dev
// import ProtectedComponent from './hoc/ProtectedComponent';
import taskImage from './assets/images/tasksImage/pic-6.png';

const cards = [
  { id: 1, image: taskImage, title: 'попилососити' },
  { id: 2, image: taskImage, title: 'попилососити' },
  { id: 3, image: taskImage, title: 'попилососити' },
  { id: 4, image: taskImage, title: 'попилососити' },
  { id: 5, image: taskImage, title: 'попилососити' },
  { id: 6, image: taskImage, title: 'попилососити' },
  { id: 6, image: taskImage, title: 'попилососити' }
  // { id: 6, image: taskImage, title: 'попилососити' }
];

function App() {
  return (
    <>
<<<<<<< HEAD
      <Header />
      <TaskList items={cards} />
      <Switch>
        <Route path="/auth" components={<AuthPage />} />
=======
      <Switch>
        <Route exact strict path="/" component={AuthPage} />
        <Route path="/login" component={Login} />
        <Route path="/register" component={Register} />
        <Route path="/dashboard" component={DashboardPage} />
        <Route path="/planning" component={PlanningPage} />
>>>>>>> dev
      </Switch>
    </>
  );
}

export default App;
