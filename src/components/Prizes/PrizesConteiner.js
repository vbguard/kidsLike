import React from 'react';
//  import PropTypes from 'prop-types';
import styles from './Prizes.module.css';
import Prizes from './Prizes';

const screenWidth = window.innerWidth;
// const css = {
//   display: 'flex',
//   flexDirection: 'column',
//   width: '210px',
//   backgroundColor: '#fdf8ed',
//   borderRadius: '5px',
//   padding: '20px'
// };

const PrizesConteiner = () => (
  <div>
    <h3 className={styles.title}>Призи</h3>
    {screenWidth >= 1280 && <Prizes />}
  </div>
);

export default PrizesConteiner;
