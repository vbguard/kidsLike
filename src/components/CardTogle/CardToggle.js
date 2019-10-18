import React, { Component } from 'react';
import styles from './CardToggle.module.css';

// import CardTogleOff from './CardTogleOff/CardTogleOff';
// import CardTogleOn from './CardTogleOn/CardTogleOn';
const checkbox = [styles.checkbox];
const circle = [styles.circle];
const toggle = [styles.toggle];

class CardTogle extends Component {
  state = { isTogleOn: true };

  toggle = () => {
    this.setState(state => ({ isTogleOn: !state.isTogleOn }));
  };

  render() {
    const { isTogleOn } = this.state;
    return (
      <label className={toggle}>
        <input type="checkbox" className={checkbox} checked={isTogleOn} onClick={this.toggle} />
        {isTogleOn === true && <span className={circle} />}
        {isTogleOn === false && <span className={circle}>!</span>}
      </label>
    );
  }
}

export default CardTogle;
