import React, { Component, createRef } from 'react';
import PropTypes from 'prop-types';
import Icon from '../Icon/Icon';
import styles from './AddTaskModal.module.css';

class AddTaskModal extends Component {
  backdropRef = createRef;

  componentDidMount() {
    window.addEventListener('keydown', this.handleKeyPress);
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.handleKeyPress);
  }

  handleKeyPress = event => {
    if (event.code !== 'Escape') {
      return;
    }
    console.log('close');
    this.props.closeModal();
  };

  handleBackdropClick = event => {
    if (event.currentTarget !== event.target) {
      return;
    }
    console.log('close');
    this.props.closeModal();
  };

  render() {
    const { closeModal } = this.props;
    return (
      <div
        className={styles.backdrop}
        ref={this.backdropRef}
        role="button"
        tabIndex={0}
        onClick={this.handleBackdropClick}
        onKeyDown={this.handleKeyPress}
      >
        <div className={styles.modal}>
          <div className={styles.imgConteiner}>
            <Icon icon="GiftBox" className={styles.icon} />
          </div>
          <form
            className={styles.form}
            onSubmit={e => {
              e.preventDefault();
              // onChange();
            }}
          >
            <label htmlFor="taskName">
              <input type="text" id="taskName" className={styles.input} placeholder="Додай собі завдання" />
            </label>
            <button type="submit" onClick={closeModal} className={styles.btn} aria-label="Save"></button>
          </form>
        </div>
      </div>
    );
  }
}

AddTaskModal.propTypes = {
  closeModal: PropTypes.func
};

export default AddTaskModal;
