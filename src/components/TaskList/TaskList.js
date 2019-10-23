import React from 'react';
import PropTypes from 'prop-types';
import Card from '../Card/Card';
import styles from './TaskList.module.css';

const TaskList = ({ tasks, isPlanning }) => {
  console.log('tasks', tasks);
  return (
    <div className={styles.container}>
      <ul className={styles.list}>
        {tasks.map(task => (
          <li key={task._id} className={styles.listItem}>
            <Card task={task} isPlanning={isPlanning} />
          </li>
        ))}
      </ul>
    </div>
  );
};

TaskList.propTypes = {
  isPlanning: PropTypes.bool,
  tasks: PropTypes.arrayOf(
    PropTypes.shape({
      _id: PropTypes.number.isRequired,
      imageUrl: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired
    }).isRequired
  ).isRequired
};

TaskList.defaultProps = {
  isPlanning: false
};

export default TaskList;
