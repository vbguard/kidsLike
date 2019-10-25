import React from 'react';
import PropTypes from 'prop-types';
import styles from './CurrentDayTitle.module.css';

const CurrentDayTitle = ({ date, dayTitle }) => (
  <div className={styles.conteiner}>
    <p className={styles.text}>Мої завдання: </p>
    <p className={styles.selectedDay}>{`${dayTitle} ${date}`} </p>
  </div>
);

CurrentDayTitle.propTypes = {
  date: PropTypes.string,
  dayTitle: PropTypes.string
};

export default CurrentDayTitle;
