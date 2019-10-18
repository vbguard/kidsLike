import React from 'react';
import PropTypes from 'prop-types';
import styles from './Card.module.css';
import pic6 from '../../assets/images/tasksImage/pic-6.png';

const Card = ({ title = '' }) => (
  <div className={styles.Card}>
    <div className={styles.pic}>
      <img
        // srcset="pic-6.png 320w,
        // pic-6@2x.png 768w,
        // pic-6@3x.pgn 1280w"
        src={pic6} alt="img" />
    </div>
    <div className={styles.pic_footer}>
      <h2 className={styles.title}>{title}</h2>
    </div>
  </div>
);

Card.defaultProps = {
  title: 'Прибрати у шафi'
};

Card.propTypes = {
  title: PropTypes.string
};

export default Card;
