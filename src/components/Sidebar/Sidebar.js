import React from 'react';
import DaysNav from '../DaysNav/DaysNav';
import PrizesConteiner from '../Prizes/PrizesConteiner';
import styles from './Sidebar.module.css';

const Sidebar = () => (
  <div className={styles.sidebar}>
    <DaysNav />
    <PrizesConteiner />
  </div>
);

export default Sidebar;
