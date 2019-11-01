import React from 'react';
import PropTypes from 'prop-types';
import useScreenWidth from '../../utils/utils';
import styles from './AddTasks.module.css';

const AddTasks = ({ openModal }) => {
  const screenWidth = useScreenWidth();
  return (
    <div className={styles.conteiner}>
      {screenWidth > 768 && <p className={styles.text}>Хочеш отримати більше призів - додай завдання : </p>}
      <button type="button" onClick={openModal} className={styles.btn}>
        +
      </button>
    </div>
  );
};

AddTasks.propTypes = {
  openModal: PropTypes.func
};

export default AddTasks;
