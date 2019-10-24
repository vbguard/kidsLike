import React from 'react';
import PropTypes from 'prop-types';
import DaysNav from '../DaysNav/DaysNav';
import PrizesConteiner from '../Prizes/PrizesConteiner';
import styles from './Sidebar.module.css';

const Sidebar = ({ handleClick }) => (
  <div className={styles.sidebar}>
    <DaysNav onClick={handleClick} />
    <PrizesConteiner />
  </div>
);

Sidebar.propTypes = {
  handleClick: PropTypes.func
};

export default Sidebar;
