import React, { Component } from 'react';
import styles from './CardToggle.module.css';

const checkbox = [styles.checkbox];
const toggle = [styles.toggle];

class CardTogle extends Component {
  state = { isTogleOn: false };

  toggle = () => {
    this.setState(state => ({ isTogleOn: !state.isTogleOn }));
  };

  render() {
    const { isTogleOn } = this.state;
    const circle = isTogleOn ? styles.circleOn : styles.circleOff;
    return (
      <label className={toggle}>
        <input type="checkbox" className={checkbox} checked={isTogleOn} onClick={this.toggle} />
        {/* {isTogleOn === true && <span className={circle} />}
        {isTogleOn === false && <span className={circle}>!</span>} */}
        <span className={circle}>!</span>
      </label>
    );
  }
}

export default CardTogle;
