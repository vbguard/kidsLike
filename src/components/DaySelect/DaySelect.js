import React from 'react';
// import PropTypes from 'prop-types';
import styles from './DaySelect.module.css';
// import Icon from '../Icon/Icon';
import DayOne from './DayOne';

const stylesDay = [styles.week];

const DaySelect = () => (
  <div className={stylesDay}>
    <DayOne checked={false} />
    <DayOne day="Вт" checked={false} />
    <DayOne day="Ср" />
    <DayOne day="Чт" checked={false} />
    <DayOne day="Пт" checked={false} />
    <DayOne day="Сб" checked={false} />
    <DayOne day="Нд" checked={false} />
  </div>
);

export default DaySelect;
