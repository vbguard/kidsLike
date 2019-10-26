import React from 'react';
import PropTypes from 'prop-types';
import Icon from '../Icon/Icon';
import styles from './Prizes.module.css';
import kinder from '../../assets/images/kinder.jpg';
import macdonalds from '../../assets/images/macdonalds.jpg';
import { prizesStyles } from '../../utils/var';

const Prizes = ({ isPlanning }) => (
  <div style={isPlanning ? prizesStyles : {}} className={styles.prizeConteiner}>
    <div className={styles.prize_1}>
      <Icon icon="GiftBox" className={styles.icon} />
      <p className={styles.text}>15 балів</p>
      <img src={kinder} width="24" height="33" alt="kinder" className={styles.image} />
    </div>
    <div className={styles.prize_2}>
      <Icon icon="GiftBox" className={styles.icon} />
      <p className={styles.text}>25 балів</p>
      <img src={macdonalds} width="31" height="24" alt="macdonalds" className={styles.image} />
    </div>
  </div>
);

Prizes.propTypes = {
  isPlanning: PropTypes.bool
};

Prizes.defaultProps = {
  isPlanning: false
};

export default Prizes;
