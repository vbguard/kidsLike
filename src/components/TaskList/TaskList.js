import React from 'react';
import PropTypes from 'prop-types';
import Card from '../Card/Card';
import styles from './TaskList.module.css';

const TaskList = ({ tasks, isPlanning }) => (
  <div className={styles.container}>
    <ul style={isPlanning ? { height: 'auto' } : { height: '290px', marginBottom: '50px' }} className={styles.list}>
      {tasks &&
        tasks.map(task => (
          <li key={task._id} className={styles.listItem}>
            <Card {...task} isPlanning={isPlanning} taskId={task._id} />
          </li>
        ))}
    </ul>
  </div>
);

TaskList.propTypes = {
  isPlanning: PropTypes.bool,
  tasks: PropTypes.arrayOf()
};

TaskList.defaultProps = {
  isPlanning: false
};

export default TaskList;
