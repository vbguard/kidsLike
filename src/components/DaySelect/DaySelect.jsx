import React, { useState } from 'react';
// import PropTypes from 'prop-types';
import styles from './DaySelect.module.css';
// import Icon from '../Icon/Icon';
import DayOne from './DayOne';
// import { defaultProps } from 'recompose';

const stylesDay = [styles.week];

const DaySelect = () => {
  const [daySelected, setDaySelected] = useState({
    mon: true,
    thu: false
  });

  const handlerOnChange = day => {
    setDaySelected({ ...daySelected, ...day });
  };
  return (
    <div className={stylesDay}>
      <DayOne day={{ title: 'Пн', second: 'mon' }} checked={daySelected.mon} onChange={handlerOnChange} />
      <DayOne day={{ title: 'Вт', second: 'mon' }} checked={daySelected.thu} onChange={handlerOnChange} />
    </div>
  );
};

export default DaySelect;
