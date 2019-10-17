import React from 'react';
import styles from './CardTogleOn.module.css';

const toggle = [styles.toggle];

const circleOn = [styles.circleOn];

const CardTogle = () => (
  <>
    <div className={toggle}>
      <p className={circleOn}></p>
    </div>
  </>
);

export default CardTogle;
