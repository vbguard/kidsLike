import React from 'react';
import useScreenWidth from '../../utils/utils';
import Prizes from './Prizes';
import styles from './Prizes.module.css';

const PrizesConteiner = () => {
  const screenWidth = useScreenWidth();
  return (
    <div>
      <h3 className={styles.title}>Призи</h3>
      {screenWidth >= 1280 && <Prizes />}
    </div>
  );
};

export default PrizesConteiner;
