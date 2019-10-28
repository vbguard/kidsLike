/* eslint-disable no-restricted-syntax */
import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import styles from './DaySelect.module.css';
import DayOne from './DayOne';

const stylesWeek = [styles.week];
const stylesButton = [styles.stylesButton];

const DaySelect = ({ checkedDays, taskId, planning }) => {
  const [daySelected, setDaySelected] = useState({
    mon: false,
    tue: false,
    wed: false,
    thu: false,
    fri: false,
    sat: false,
    sun: false
  });

  useEffect(() => {
    planning.forEach(task => {
      if (task.taskId === taskId) {
        task.selectedDays.forEach(day => {
          for (const dayName in day) {
            if (dayName !== 'date') {
              setDaySelected({ ...daySelected, [dayName]: day[dayName] });
            }
          }
        });
      }
    });
  }, []);

  const [isPlaningDay, setIsPlaningDay] = useState({ planing: false });

  const handlerOnChange = day => {
    setDaySelected({ ...daySelected, ...day });
  };

  const handlerOnClick = () => {
    if (isPlaningDay.planing) {
      checkedDays({ daySelected, taskId });
    }
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

DaySelect.propTypes = {
  checkedDays: PropTypes.func,
  taskId: PropTypes.string,
  planning: PropTypes.array
};

export default DaySelect;
