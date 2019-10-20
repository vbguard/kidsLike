import React from 'react';
//  import PropTypes from 'prop-types';
import styles from './Prizes.module.css';
import Prizes from './Prizes';

const screenWidth = window.innerWidth;

const PrizesConteiner = () => (
  <div>
    <h3 className={styles.title}>Призи</h3>
    {screenWidth >= 1280 && <Prizes />}
  </div>
);

export default PrizesConteiner;
