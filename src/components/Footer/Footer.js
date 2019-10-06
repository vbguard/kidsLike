import React from 'react';
import { Link } from 'react-router-dom';
import css from './Footer.module.css';
import Icon from '../Icon/Icon';

const Footer = () => (
  <footer className={css.footer}>
    <Link to="/" className={css.KidsLike}>
      KidsLike <Icon icon="Logo" className={css.icon} />
    </Link>
    <span className={(css.text, css.borders)}>Робимо життя батьків і дітей ізі</span>
    <span className={css.text}>2019</span>
  </footer>
);

export default Footer;
