import React from 'react';
import PropTypes from 'prop-types';
import styles from './Card.module.css';
import CardToggle from '../CardTogle/CardToggle';

const Card = ({ title, imageUrl }) => (
  <div className={styles.Card_container}>
    <div className={styles.Card_list}>
      <div className={styles.pic}>
        <img src={imageUrl} alt={`${title}`} />
      </div>
      <div className={styles.pic_footer}>
        <h2 className={styles.title}>{title}</h2>
        <CardToggle />
      </div>
    </div>
  </div>
);

Card.propTypes = {
  title: PropTypes.string,
  imageUrl: PropTypes.string
};

export default Card;
