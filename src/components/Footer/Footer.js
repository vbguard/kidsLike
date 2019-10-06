import React from 'react';
import css from './Footer.module.css';
// import icon from '../Icon/Icon';

const Footer = () => (
  <footer>
    <a href="*" className={css.KidsLike}>
      KidsLike <i className={css.icon}>{/* TODO: icon */}</i>
    </a>
    <span className={css.text}> | Робимо життя батьків і дітей ізі | 2019</span>
  </footer>
);

export default Footer;
