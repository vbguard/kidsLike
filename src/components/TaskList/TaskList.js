import React from 'react';
import PropTypes from 'prop-types';
import Card from '../Card/Card';
import styles from './TaskList.module.css';

const TaskList = ({ tasks, isPlanning }) => {
  console.log('tasks', tasks);
  return (
    <div className={styles.container}>
      <ul className={styles.list}>
        {tasks &&
          tasks.map(task => (
            <li key={task._id} className={styles.listItem}>
              <Card {...task.task} isPlanning={isPlanning} taskId={task._id} />
            </li>
          ))}
      </ul>
    </div>
  );
};

TaskList.propTypes = {
  isPlanning: PropTypes.bool,
  tasks: PropTypes.shape().isRequired
};

TaskList.defaultProps = {
  isPlanning: false
};

export default TaskList;
