import React, { Component } from 'react';
import styles from './CardToggle.module.css';

// import CardTogleOff from './CardTogleOff/CardTogleOff';
// import CardTogleOn from './CardTogleOn/CardTogleOn';
const checkbox = [styles.checkbox];
const span = [styles.span];

class CardTogle extends Component {
  state = { isTogleOn: true };

  toggle = () => {
    this.setState(state => ({ isTogleOn: !state.isTogleOn }));
  };

  render() {
    const { isTogleOn } = this.state;
    return (
      <label>
        <input type="checkbox" className={checkbox} checked={isTogleOn} onClick={this.toggle} />
        <span className={span} />
      </label>
    );
  }
}

export default CardTogle;
