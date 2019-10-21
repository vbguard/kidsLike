import React from 'react';
import PropTypes from 'prop-types';
import styles from './Card.module.css';
import CardTogle from '../CardTogle/CardToggle';

const Card = ({ cardTitle, imageUrl }) => (
  <div className={styles.Card_container}>
    <div className={styles.Card_list}>
      <div className={styles.pic}>
        <img src={imageUrl} alt="imageTitle" />
      </div>
      <div className={styles.pic_footer}>
        <h2 className={styles.title}>{cardTitle}</h2>
        <CardTogle />
      </div>
    </div>
  </div>
);

Card.propTypes = {
  cardTitle: PropTypes.string,
  imageUrl: PropTypes.string
};

export default Card;
