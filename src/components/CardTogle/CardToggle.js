import React from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';
import { connect } from 'react-redux';
import notyf from '../../helpers/notyf';
import * as opr from '../../redux/dashboard/operations';
import styles from './CardToggle.module.css';

moment.locale('uk');
const time = moment().format('LT');

const checkbox = [styles.checkbox];
const toggle = [styles.toggle];

const CardToggle = ({ checked, onClick, taskId, currentDay, activeDay }) => {
  const circle = checked ? styles.circleOn : styles.circleOff;
  return (
    <label className={toggle}>
      <input
        type="checkbox"
        checked={checked}
        className={checkbox}
        onChange={() =>
          time <= '20:00' && currentDay === activeDay ? onClick(taskId, { isDone: !checked }) : notyf.toggleError()
        }
        role="button"
      />
      <span className={circle}>!</span>
    </label>
  );
};

CardToggle.propTypes = {
  taskId: PropTypes.string,
  checked: PropTypes.bool,
  onClick: PropTypes.func,
  currentDay: PropTypes.number,
  activeDay: PropTypes.number
};

const mapStateToProps = state => ({
  currentDay: state.dashboard.currentDay,
  activeDay: state.dashboard.activeDay
});

const mapDispatchToProps = dispatch => ({
  onClick: (id, data) => dispatch(opr.default.tasksUpdate(id, data))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CardToggle);
