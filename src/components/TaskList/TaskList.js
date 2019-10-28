import React from 'react';
import PropTypes from 'prop-types';
import Card from '../Card/Card';
import styles from './TaskList.module.css';

const TaskList = ({ tasks, isPlanning, checkedDays, planning }) => (
  <div className={styles.container}>
    <ul className={styles.list}>
      {tasks &&
        tasks.map(task => (
          <li key={task._id} className={styles.listItem}>
            <Card {...task} isPlanning={isPlanning} taskId={task._id} planning={planning} checkedDays={checkedDays} />
          </li>
        ))}
    </ul>
  </div>
);

TaskList.propTypes = {
  isPlanning: PropTypes.bool,
  tasks: PropTypes.arrayOf(),
  checkedDays: PropTypes.func,
  planning: PropTypes.array
};

TaskList.defaultProps = {
  isPlanning: false
};

export default TaskList;
