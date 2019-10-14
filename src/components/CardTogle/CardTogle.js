import React from 'react';
import PropTypes from 'prop-types';

import CardTogleOff from './CardTogleOff/CardTogleOff';
import CardTogleOn from './CardTogleOn/CardTogleOn';

const CardTogle = props => {
  const { isTogleOn } = props;
  if (isTogleOn) {
    return <CardTogleOn />;
  }
  return <CardTogleOff />;
};

CardTogle.defaultProps = { isTogleOn: false };
CardTogle.propTypes = { isTogleOn: PropTypes.bool };

export default CardTogle;
