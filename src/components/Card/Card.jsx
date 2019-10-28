import React from 'react';
import PropTypes from 'prop-types';
import styles from './Card.module.css';
import CardToggle from '../CardTogle/CardToggle';
import DaySelect from '../DaySelect/DaySelect';

const Card = ({ cardTitle, imageUrl, isPlanning, taskId, isDone, checkedDays, planning }) => (
  <div className={styles.Card_container}>
    <div className={styles.imageWrap}>
      <img src={imageUrl} className={styles.image} alt="imageTitle" />
    </div>
    <div className={styles.pic_footer}>
      <h2 className={styles.title}>{cardTitle}</h2>
      {isPlanning ? (
        <DaySelect taskId={taskId} checkedDays={checkedDays} planning={planning} />
      ) : (
        <CardToggle taskId={taskId} checked={isDone} />
      )}
    </div>
  </div>
);

Card.propTypes = {
  cardTitle: PropTypes.string,
  imageUrl: PropTypes.string,
  isPlanning: PropTypes.bool,
  taskId: PropTypes.string.isRequired,
  isDone: PropTypes.bool,
  checkedDays: PropTypes.func,
  planning: PropTypes.array
};

Card.defaultProps = {
  cardTitle: 'Прибрати у шафі',
  isPlanning: 'false'
};

export default Card;
