import React from 'react';
import { screenWidth } from '../../utils/var';
import styles from './AddTasks.module.css';

const AddTasks = () => (
  <div className={styles.conteiner}>
    {screenWidth > 768 && <p className={styles.text}>Хочеш отримати більше призів - додай завдання :)</p>}
    <button type="button" className={styles.btn}>
      +
    </button>
  </div>
);

export default AddTasks;
