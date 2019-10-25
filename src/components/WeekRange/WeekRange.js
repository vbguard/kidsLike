import React from 'react';
import PropTypes from 'prop-types';
import styles from './WeekRange.module.css';

const WeekRange = ({ weekRange }) => <p className={styles.text}>{`Тиждень: ${weekRange}`}</p>;

WeekRange.propTypes = {
  weekRange: PropTypes.string
};

export default WeekRange;
