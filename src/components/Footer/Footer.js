import React from 'react';
import { Link } from 'react-router-dom';
import css from './Footer.module.css';
import Icon from '../Icon/Icon';

const Footer = () => (
  <footer className={css.footer}>
    <Link to="/" className={css.KidsLike}>
      KidsLike
    </Link>
    <Icon icon="Logo" className={css.icon} />

    <span className={css.text}> | Робимо життя батьків і дітей ізі | 2019</span>
  </footer>
);

export default Footer;
