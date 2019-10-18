import React from 'react';
import PropTypes from 'prop-types';
import Icon from '../Icon/Icon';
import styles from './AddTaskModal.module.css';

const AddTaskModal = ({ onChange }) => (
  <div
    className={styles.backdrop}
    onClick={e => {
      e.preventDefault();
      onChange();
    }}
    onKeyDown={() => {}}
    role="button"
    tabIndex="0"
  >
    <div className={styles.modal}>
      <div className={styles.imgConteiner}>
        <Icon icon="GiftBox" className={styles.icon} />
      </div>
      <form
        className={styles.form}
        onSubmit={e => {
          e.preventDefault();
          onChange();
        }}
      >
        <label htmlFor="taskName">
          <input type="text" id="taskName" className={styles.input} placeholder="Додай собі завдання" />
        </label>
        <button type="submit" className={styles.btn} aria-label="Save"></button>
      </form>
    </div>
  </div>
);

AddTaskModal.propTypes = {
  onChange: PropTypes.func
};

export default AddTaskModal;
