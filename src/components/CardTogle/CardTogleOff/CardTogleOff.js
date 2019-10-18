import React from 'react';
import styles from './CardTogleOff.module.css';

const span = [styles.span];
const circleOff = [styles.circleOff];

const CardTogleOff = () => (
  <>
    <div className={span}>
      <p className={circleOff}>!</p>
    </div>
  </>
);

export default CardTogleOff;
