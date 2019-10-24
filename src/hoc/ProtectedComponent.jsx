import React from 'react';
import PropTypes from 'prop-types';
import { Route, Redirect } from 'react-router-dom';
import storage from '../utils/storage';

const ProtectedComponent = ({ component: Component, ...rest }) => (
  <Route {...rest} render={props => (storage.getToken() ? <Component {...props} /> : <Redirect to="/login" />)} />
);

ProtectedComponent.propTypes = {
  component: PropTypes.func
};

export default ProtectedComponent;
