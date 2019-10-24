import React from 'react';
import PropTypes from 'prop-types';
import DaysNav from './DaysNav';
import styles from './DaysNav.module.css';

const DaysNavConteiner = ({ handleClick }) => (
  <div className={styles.navConteiner}>
    <DaysNav onClick={handleClick} />
  </div>
);

DaysNavConteiner.propTypes = {
  handleClick: PropTypes.func
};

export default DaysNavConteiner;
