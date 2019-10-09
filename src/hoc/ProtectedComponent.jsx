import React from 'react';
import PropTypes from 'prop-types';
import { Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

const ProtectedComponent = ({ component: Component, ...rest }) => (
  <Route {...rest} render={props => (token ? <Component {...props} /> : <Redirect to="/login" />)} />
);

const mapStateToProps = state => ({});

ProtectedComponent.propTypes = {
  component: PropTypes.func
};

export default connect(mapStateToProps)(ProtectedComponent);
