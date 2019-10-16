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

  return (
    <div className={stylesDay}>
      <DayOne checked={daySelected.mon} onChange={setDaySelected} />
      <DayOne day="Вт" checked={daySelected.thu} onChange={setDaySelected} />
    </div>
  );
};

export default DaySelect;
