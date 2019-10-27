import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { taskUpdateSuccess } from '../../redux/dashboard/actions';
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
    const { onClick, taskId } = this.props;
    const circle = isTogleOn ? styles.circleOn : styles.circleOff;
    return (
      <label className={toggle}>
        <input
          type="checkbox"
          checked={isTogleOn}
          className={checkbox}
          onChange={this.toggle}
          role="button"
          onClick={() => onClick(taskId)}
        />
        <span className={circle}>!</span>
      </label>
    );
  }
}

CardTogle.propTypes = {
  taskId: PropTypes.string,
  onClick: PropTypes.func
};

const mapDispatchToProps = dispatch => ({
  onClick: id => dispatch(taskUpdateSuccess(id))
});

export default connect(
  null,
  mapDispatchToProps
)(CardTogle);
