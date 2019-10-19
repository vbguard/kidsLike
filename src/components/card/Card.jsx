import React from 'react';
import PropTypes from 'prop-types';
import styles from './Card.module.css';
import CardTogle from '../CardTogle/CardTogle';
// import pic6 from '../../assets/images/tasksImage/pic-6@2x.png';

// const small = '300.png';
// const medium = '768.png';
// const large = '1280.png';

// const ResponsiveImage = () => (
//   <img
//     src={small}
//     srcSet={`${small} 300w,
//     ${medium} 768w,
//     ${large} 1280w`}
//     alt="img-for-choose"
//   />
// );

const Card = ({ title }) => (
  <div className={styles.Card}>
    <div className={styles.pic}>{/* <ResponsiveImage picture={small} /> */}</div>
    <div className={styles.pic_footer_container}>
      <h2 className={styles.title}>{title}</h2>
      <CardTogle />
    </div>
  </div>
);

Card.defaultProps = {
  title: 'Прибрати у шафi'
};

Card.propTypes = {
  title: PropTypes.string
};

export default Card;
