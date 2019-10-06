import React from 'react';
// import { Switch, Route } from 'react-router-dom';
import AuthPage from './pages/AuthPage/AuthPage';
// import ProtectedComponent from './hoc/ProtectedComponent';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <>
      <AuthPage />
      <Footer />
    </>
  );
}

export default App;

/* <Switch>
      <Route exact path="/" components={AuthPage} />
      <Route path="/footer" components={Footer} />
    </Switch> */
