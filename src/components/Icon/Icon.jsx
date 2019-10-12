import React from './node_modules/react';
import * as Icons from '../../assets/icons';

const Icon = ({ icon, ...rest }) => {
  const Svg = Icons[icon];

  return <Svg {...rest} />;
};

export default Icon;
