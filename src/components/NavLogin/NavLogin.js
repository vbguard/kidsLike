import React from 'react';
import { Link } from 'react-router-dom';
import styles from './NavLogin.module.css';
import image from '../../assets/images/avatar/avatart.jpg';
import imageSec from '../../assets/images/avatar/avatart@2x.jpg';
import imageThird from '../../assets/images/avatar/avatart@3x.jpg';

// {
//   /* <svg
//       width="24"
//       height="24"
//       xmlns="http://www.w3.org/2000/svg"
//       fillRule="evenodd"
//       clipRule="evenodd"
//       className={styles.icon}
//     >
//       <path d="M12 11.293l10.293-10.293.707.707-10.293 10.293 10.293 10.293-.707.707-10.293-10.293-10.293 10.293-.707-.707 10.293-10.293-10.293-10.293.707-.707 10.293 10.293z" />
//     </svg> */
// }

const NavLogin = () => (
  <Link to="*" className={styles.user}>
    <span className={styles.container}>
      <img className={styles.img} srcSet={(imageSec, imageThird)} sizes="16px" src={image} alt="avatar" height="16" />
      Ваня
      <svg
        height="32px"
        id="Layer_1"
        version="1.1"
        viewBox="0 0 32 32"
        width="32px"
        xmlSpace="preserve"
        xmlns="http://www.w3.org/2000/svg"
        className={styles.burger}
      >
        <path d="M4,10h24c1.104,0,2-0.896,2-2s-0.896-2-2-2H4C2.896,6,2,6.896,2,8S2.896,10,4,10z M28,14H4c-1.104,0-2,0.896-2,2  s0.896,2,2,2h24c1.104,0,2-0.896,2-2S29.104,14,28,14z M28,22H4c-1.104,0-2,0.896-2,2s0.896,2,2,2h24c1.104,0,2-0.896,2-2  S29.104,22,28,22z" />
      </svg>
    </span>
  </Link>
);

export default NavLogin;
