import React from 'react';
// import PropTypes from 'prop-types';
import styles from './DaySelect.module.css';
// import Icon from '../Icon/Icon';
import DayOne from './DayOne';

const stylesDay = [styles.week];

const DaySelect = () => (
  <div className={stylesDay}>
    <DayOne />
    <DayOne day="Вт" />
    <DayOne day="Ср" />
    <DayOne day="Чт" />
    <DayOne day="Пт" />
    <DayOne day="Сб" />
    <DayOne day="Нд" />
  </div>
);

export default DaySelect;
