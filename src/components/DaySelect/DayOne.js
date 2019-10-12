import React from 'react';
import PropTypes from 'prop-types';
import Icon from '../Icon/Icon';
import styles from './DayOne.module.css';

const stylesDay = [styles.day];
const checkboxImage = [styles.checkboxImage];

const DayOne = ({ day, checked }) => {
  if (checked) {
    return (
      <div className={stylesDay}>
        <Icon icon="Checkbox" className={checkboxImage} />
        <span>{day}</span>
      </div>
    );
  }
  return (
    <div className={stylesDay}>
      <Icon icon="CheckboxOut" className={checkboxImage} />
      <span>{day}</span>
    </div>
  );
};

DayOne.propTypes = {
  day: PropTypes.string,
  checked: PropTypes.bool
};

DayOne.defaultProps = {
  day: 'Пн',
  checked: true
};
export default DayOne;
