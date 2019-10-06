import React from 'react';
import { Link } from 'react-router-dom';
import css from './Footer.module.css';
import icon from '../Icon/Icon';

const Footer = () => (
  <footer>
    <Link to="/" className={css.KidsLike}>
      KidsLike
    </Link>
    <i className={css.icon}>{icon.Logo}</i>

    <span className={css.text}> | Робимо життя батьків і дітей ізі | 2019</span>
  </footer>
);

export default Footer;
