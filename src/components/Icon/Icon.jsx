<<<<<<< HEAD
import React from './node_modules/react';
import * as Icons from '../../assets/icons';
=======
import React from 'react';
import PropTypes from 'prop-types';
import Icons from '../../assets';
>>>>>>> dev

const Icon = ({ icon, ...rest }) => {
  const Svg = Icons[icon];

  return <Svg {...rest} />;
<<<<<<< HEAD
=======
};

Icon.propTypes = {
  icon: PropTypes.string.isRequired
>>>>>>> dev
};

export default Icon;

// import Icon from 'components/Icon/Icon';

// <Icon icon="Logo" className={s.iconStyle} />
// <Icon icon="ArrowDropDown" className={s.iconStyle} />
// <Icon icon="CheckboxOut" className={s.iconStyle} />
// <Icon icon="GiftBox" className={s.iconStyle} />
// <Icon icon="Checkbox" className={s.iconStyle} />
// <Icon icon="Close" className={s.iconStyle} />
// <Icon icon="Burger" className={s.iconStyle} />
