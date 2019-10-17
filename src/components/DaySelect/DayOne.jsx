import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import styles from './DayOne.module.css';
import CheckedIcon from '../../assets/icons/check_box-24px.svg';
import boxIcon from '../../assets/icons/check_box_outline_blank-24px.svg';

const label = [styles.label];
const checkboxs = [styles.checkboxs];
const days = [styles.days];

const Checkbox = styled.span`
  &::before {
    content: '.';
    display: inline-block;
    background-image: ${props => (props.checked ? `url(${CheckedIcon})` : `url(${boxIcon})`)};
    width: 24px;
    height: 24px;
    color: var(--azure);
    transition: 0.4s;
  }
`;

const DayOne = ({ daytitle, day, checked, onChange }) => (
  <label className={label}>
    <input
      type="checkbox"
      className={checkboxs}
      id="sw1"
      checked={checked}
      onChange={e => {
        e.preventDefault();
        onChange({ [day]: !checked });
      }}
    />
    <Checkbox checked={checked} />

    <span className={days}>{daytitle}</span>
  </label>
);

DayOne.propTypes = {
  day: PropTypes.string,
  daytitle: PropTypes.string,
  checked: PropTypes.bool,
  onChange: PropTypes.func
};

export default DayOne;
