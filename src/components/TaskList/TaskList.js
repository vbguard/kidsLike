import React from 'react';
import PropTypes from 'prop-types';
import Card from '../Card/Card';
import styles from './TaskList.module.css';

const TaskList = ({ tasks }) => (
  <div className={styles.container}>
    <ul className={styles.list}>
      {tasks.map(({ id, image, title }) => (
        <li key={id} className={styles.listItem}>
          <img src={image} alt={title} />
          <p>{title}</p>
        </li>
      ))}
    </ul>
  </div>
);

TaskList.propTypes = {
  tasks: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      image: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired
    }).isRequired
  ).isRequired
};

export default TaskList;
