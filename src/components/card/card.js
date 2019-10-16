import React from 'react';
import PropTypes from 'prop-types';
import styles from './card.module.css';

const Card = ({ image, title }) => (
    <div className={styles.card}>
        <div className={styles.pic}>
            <img src={image} alt="img" />
        </div>
        <h2 className={styles.title}>{title}</h2>
    </div>
);

Card.propTypes = {
    image: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
}

// class Toggle extends Component {
//     state = { on: false };

//     toggle = () => {
//         this.setState(prevState => ({ on: !prevState.on }))
//     }

//     render() {
//         const { on } = this.state;

//         return (
//             <div>
//                 <button onClick={this.toggle}></button>
//             </div>
//         )
//     }
// }

export default Card;