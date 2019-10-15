import React, { useState } from 'react';
// import PropTypes from 'prop-types';
import styles from './DaySelect.module.css';
// import Icon from '../Icon/Icon';
import DayOne from './DayOne';

const stylesDay = [styles.week];

const DaySelect = () => {
  const [daySelected, setDaySelected] = useState({
    mon: false,
    thu: false
  });

  return (
    <div className={stylesDay}>
      <DayOne checked={daySelected.mon} onChange={setDaySelected} />
      <DayOne day="Вт" checked={daySelected.thu} onChange={setDaySelected} />
      <DayOne day="Ср" />
      <DayOne day="Чт" />
      <DayOne day="Пт" />
      <DayOne day="Сб" />
      <DayOne day="Нд" />
    </div>
  );
};

export default DaySelect;
