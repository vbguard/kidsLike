import React from 'react';
//import PropTypes from 'prop-types';
import styles from './cards.module.css';

const CardPage = ({ image, description }) => (
    <div className={styles.descr}>
        <img src={image} alt="image-cleaning" />
        <p>{description}</p>
    </div>
);

// PetPage.propTypes = {
//     image: PropTypes.string.isRequired,
//     description: PropTypes.string.isRequired,
// };

export default CardPage;