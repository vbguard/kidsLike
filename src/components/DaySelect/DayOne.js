import React from 'react';
import PropTypes from 'prop-types';
import styles from './DayOne.module.css';

const stylesSelectDay = [styles.selectday];
const label = [styles.label];
const checkboxs = [styles.checkboxs];
const fake = [styles.fake];
const days = [styles.days];

const DayOne = ({ day }) => (
  <div className={stylesSelectDay}>
    <label className={label}>
      <input type="checkbox" className={checkboxs} id="sw1" />
      <span className={fake}></span>
      <span className={days}>{day}</span>
    </label>
  </div>
);

DayOne.propTypes = {
  day: PropTypes.string
};

DayOne.defaultProps = {
  day: 'Пн'
};
export default DayOne;
