import React from 'react';
import { Link } from 'react-router-dom';
import css from './Footer.module.css';
import Icon from '../Icon/Icon';

const Footer = () => {
  // const {screenWidth} = window;
  const a = 1;
  return (
    <footer className={css.footer}>
      <Link to="/" className={css.KidsLike}>
        KidsLike <Icon icon="Logo" className={css.icon} />
      </Link>
      <span className={(css.text, css.borders)}>
        Робимо життя батьків і дітей ізі{' '}
        <span role="img" aria-label="smile">
          😄
        </span>
      </span>
      <span className={css.text}>2019{a}</span>
    </footer>
  );
};
export default Footer;
