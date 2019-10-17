import React from 'react';
import Icon from '../Icon/Icon';
import styles from './AddTaskModal.module.css';

const AddTaskModal = () => (
  <div className={styles.backdrop}>
    <div className={styles.modal}>
      <div className={styles.imgConteiner}>
        <Icon icon="GiftBox" className={styles.icon} />
      </div>
      <form className={styles.form}>
        <label htmlFor="taskName">
          <input type="text" id="taskName" className={styles.input} placeholder="Додай собі завдання" />
        </label>
        <button type="submit" className={styles.btn}></button>
      </form>
    </div>
    as
  </div>
);

export default AddTaskModal;
