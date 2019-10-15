import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import styles from './DayOne.module.css';
import checkedIcon from '../../assets/icons/check_box-24px.svg';
import boxIcon from '../../assets/icons/check_box_outline_blank-24px.svg';

const label = [styles.label];
const checkboxs = [styles.checkboxs];

const days = [styles.days];

const Chekbox = styled.span`
  &::before {
    content: '';
    position: absolute;
    background-image: ${props => (props.checked ? `url(${checkedIcon})` : `url(${boxIcon})`)};
    width: 24px;
    height: 24px;
    transition: 0.4s;
  }
`;

const DayOne = ({ day, checked, onChange }) => (
  <label className={label}>
    <input
      type="checkbox"
      className={checkboxs}
      checked={checked}
      id="sw1"
      onChange={e => {
        e.preventDefault();
        console.log(e.target.checked);
        onChange(state => ({ ...state, mon: e.target.checked }));
      }}
    />
    <Chekbox checked={checked} />
    <span className={days}>{day}</span>
  </label>
);
DayOne.propTypes = { day: PropTypes.string, checked: PropTypes.bool, onChange: PropTypes.func };
DayOne.defaultProps = { day: 'Пн' };
export default DayOne;
