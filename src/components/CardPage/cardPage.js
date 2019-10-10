import React from 'react';
import { Link, withRouter } from 'react-router-dom';
//import PropTypes from 'prop-types';
import styles from './cardPage.module.css';

const CardPage = ({ items = [] }) => (
    <div className={cardpage.container}>
        <ul className={styles.cardpage}>
            {items.map(item => (
                <li key={item.id} className={styles.carditem}>
                    <Link to={{ pathname: `/?../${item.id}`, state: { from: '/' } }}>
                        <div className={styles.descr}>
                            <img src={item.image} alt="img-cleaning" />
                            <p>{item.descr}</p>
                        </div>
                    </Link>
                </li>
            ))}
        </ul>
    </div>
);
// CardPage.propTypes = {
//     items: PropTypes.arrayOf(
//         PropTypes.shape({
//             id: PropTypes.string.isRequired,
//         }).isRequired,
//     ).isRequired,
// };

export default withRouter(CardPage);