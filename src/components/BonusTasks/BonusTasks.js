import React from 'react';
import styles from './BonusTasks.module.css';

const BonusTasks = () => (
  <div className={styles.bonusConteiner}>
    <p className={styles.text}>Хочеш отримати більше призів - додай завдання :)</p>
    <button type="button" className={styles.btn}>
      +
    </button>
  </div>
);

export default BonusTasks;
