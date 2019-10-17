import React from 'react';
import { Switch, Route } from 'react-router-dom';
import AuthPage from './pages/AuthPage/AuthPage';
import Header from './components/Header/Header';
import TaskList from './components/TaskList/TaskList';
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
      <Header />
      <TaskList items={cards} />
      <Switch>
        <Route path="/auth" components={<AuthPage />} />
      </Switch>
    </>
  );
}

export default App;
