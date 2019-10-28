import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import * as opr from '../../redux/dashboard/operations';
import styles from './CardToggle.module.css';
const checkbox = [styles.checkbox];
const toggle = [styles.toggle];

const CardToggle = ({ checked, onClick, taskId }) => {
  const circle = checked ? styles.circleOn : styles.circleOff;
  return (
    <label className={toggle}>
      <input
        type="checkbox"
        checked={checked}
        className={checkbox}
        onChange={() => {
          onClick(taskId, { isDone: !checked });
        }}
        role="button"
      />
      <span className={circle}>!</span>
    </label>
  );
};

CardToggle.propTypes = {
  taskId: PropTypes.string,
  checked: PropTypes.bool,
  onClick: PropTypes.func
};

const mapDispatchToProps = dispatch => ({
  onClick: (id, data) => dispatch(opr.default.tasksUpdate(id, data))
});

export default connect(
  null,
  mapDispatchToProps
)(CardToggle);
