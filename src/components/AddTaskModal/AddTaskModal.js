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

  state = {
    value: ''
  };

  handleChange = event => {
    this.setState({
      value: event.target.value
    });
  };

  handleSubmit = event => {
    event.preventDefault();
    const { onSubmit } = this.props;

    onSubmit({ ...this.state });
    this.setState({ value: '' });
  };

  handleKeyPress = event => {
    if (event.code !== 'Escape') {
      return;
    }
    const { closeModal } = this.props;

    console.log('close');
    closeModal();
  };

  handleBackdropClick = event => {
    if (event.currentTarget !== event.target) {
      return;
    }
    const { closeModal } = this.props;

    console.log('close');
    closeModal();
  };

  render() {
    const { value } = this.state;
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
          <form className={styles.form} onSubmit={this.handleSubmit}>
            <label htmlFor="taskName">
              <input
                type="text"
                name="value"
                value={value}
                id="taskName"
                onChange={this.handleChange}
                className={styles.input}
                placeholder="Додай собі завдання"
              />
            </label>
            <button type="submit" className={styles.btn} aria-label="Save"></button>
          </form>
        </div>
      </div>
    );
  }
}

AddTaskModal.propTypes = {
  closeModal: PropTypes.func,
  onSubmit: PropTypes.func
};

export default AddTaskModal;
