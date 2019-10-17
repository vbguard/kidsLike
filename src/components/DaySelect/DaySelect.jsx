import React, { useState } from 'react';
import styles from './DaySelect.module.css';
import DayOne from './DayOne';

const stylesDay = [styles.week];

const DaySelect = () => {
  const [daySelected, setDaySelected] = useState({
    mon: false,
    tue: false,
    wed: false,
    thu: false,
    fri: false,
    sat: false,
    sun: false
  });

  const handlerOnChange = day => {
    setDaySelected({ ...daySelected, ...day });
  };
  return (
    <div className={stylesDay}>
      <DayOne daytitle="Пн" day="mon" checked={daySelected.mon} onChange={handlerOnChange} />
      <DayOne daytitle="Вт" day="tue" checked={daySelected.tue} onChange={handlerOnChange} />
      <DayOne daytitle="Ср" day="wed" checked={daySelected.wed} onChange={handlerOnChange} />
      <DayOne daytitle="Чт" day="thu" checked={daySelected.thu} onChange={handlerOnChange} />
      <DayOne daytitle="Пт" day="fri" checked={daySelected.fri} onChange={handlerOnChange} />
      <DayOne daytitle="Сб" day="sat" checked={daySelected.sat} onChange={handlerOnChange} />
      <DayOne daytitle="Вс" day="sun" checked={daySelected.sun} onChange={handlerOnChange} />
    </div>
  );
};

export default DaySelect;
