import React from 'react';
import PropTypes from 'prop-types';
import styles from './Card.module.css';
import CardToggle from '../CardTogle/CardToggle';
import DaySelect from '../DaySelect/DaySelect';
import defaultImage from '../../assets/images/tasksImage/pic-3@2x.png';

const Card = ({ cardTitle, imageUrl, isPlanning, taskId, isDone }) => (
  <div className={styles.Card_container}>
    <div className={styles.Card_list}>
      <div className={styles.pic}>
        <img src={imageUrl} alt="imageTitle" />
      </div>
      <div className={styles.pic_footer}>
        <h2 className={styles.title}>{cardTitle}</h2>
        {isPlanning ? <DaySelect taskId={taskId} /> : <CardToggle taskId={taskId} checked={isDone} />}
      </div>
    </div>
  </div>
);

Card.propTypes = {
  cardTitle: PropTypes.string,
  imageUrl: PropTypes.string,
  isPlanning: PropTypes.bool,
  taskId: PropTypes.string.isRequired,
  isDone: PropTypes.bool
};

Card.defaultProps = {
  cardTitle: 'Прибрати у шафі',
  imageUrl: defaultImage,
  isPlanning: 'false'
};

export default Card;
