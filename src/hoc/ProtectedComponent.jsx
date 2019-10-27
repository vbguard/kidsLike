import React from 'react';
import PropTypes from 'prop-types';
import { Route, Redirect } from 'react-router-dom';
import { getToken } from '../utils/storage';

const ProtectedComponent = ({ component: Component, ...rest }) => (
  <>
    <Route {...rest}>{getToken() ? <Component /> : <Redirect to="/login" />}</Route>
  </>
);

ProtectedComponent.propTypes = {
  component: PropTypes.func
};

export default ProtectedComponent;
