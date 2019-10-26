import React, { useState } from 'react';
import styles from './DaySelect.module.css';
import DayOne from './DayOne';

const stylesWeek = [styles.week];
const stylesButton = [styles.stylesButton];

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

  const [isPlaningDay, setIsPlaningDay] = useState({ planing: true });

  const handlerOnChange = day => {
    setDaySelected({ ...daySelected, ...day });
  };

  const handlerOnClick = () => {
    setIsPlaningDay({ planing: !isPlaningDay.planing });
  };

  return (
    <>
      {isPlaningDay.planing ? (
        <>
          <div className={stylesWeek}>
            <DayOne daytitle="Пн" day="mon" checked={daySelected.mon} onChange={handlerOnChange} />
            <DayOne daytitle="Вт" day="tue" checked={daySelected.tue} onChange={handlerOnChange} />
            <DayOne daytitle="Ср" day="wed" checked={daySelected.wed} onChange={handlerOnChange} />
            <DayOne daytitle="Чт" day="thu" checked={daySelected.thu} onChange={handlerOnChange} />
            <DayOne daytitle="Пт" day="fri" checked={daySelected.fri} onChange={handlerOnChange} />
            <DayOne daytitle="Сб" day="sat" checked={daySelected.sat} onChange={handlerOnChange} />
            <DayOne daytitle="Вс" day="sun" checked={daySelected.sun} onChange={handlerOnChange} />
          </div>
          <button className={stylesButton} type="button" onClick={handlerOnClick}>
            +
          </button>
        </>
      ) : (
        <button className={stylesButton} type="button" onClick={handlerOnClick}>
          +
        </button>
      )}
    </>
  );
};

export default DaySelect;
