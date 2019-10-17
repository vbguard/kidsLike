import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import styles from './DayOne.module.css';
import CheckedIcon from '../../assets/icons/check_box-24px.svg';
import boxIcon from '../../assets/icons/check_box_outline_blank-24px.svg';

// const stylesSelectDay = [styles.selectday];
const label = [styles.label];
const checkboxs = [styles.checkboxs];
// const fake = [styles.fake];
const days = [styles.days];

const Checkbox = styled.span`
  &::before {
    content: '';
    display: inline-block;
    background-image: ${props => (props.checked ? `url(${CheckedIcon})` : `url(${boxIcon})`)};
    width: 24px;
    height: 24px;
    z-index: 2;
    transition: 0.4s;
  }
`;

const DayOne = ({ day, checked, onChange }) => (
  <label className={label}>
    <input
      type="checkbox"
      className={checkboxs}
      id="sw1"
      checked={checked}
      onChange={e => {
        e.preventDefault();

        onChange({ mon: !checked });
      }}
    />
    <Checkbox checked={checked} />

    <span className={days}>{day.title}</span>
  </label>
);

DayOne.propTypes = {
  day: PropTypes.string,
  checked: PropTypes.bool,
  onChange: PropTypes.func
};

export default DayOne;
