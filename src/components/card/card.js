import React from 'react';
import PropTypes from 'prop-types';
import styles from './card.module.css';
import { componentFromProp } from 'recompose';

const Card = ({ image, title, Toggle }) => (
    <div className={styles.task}>
        <div className={styles.box}>
            <div className={styles.pic}>
                <img src={image} alt="img" />
            </div>
        </div>
        <h2 className={styles.title}>{title}</h2>
        <Toggle />
    </div>
);

Card.propTypes = {
    img: PropTypes.string.isRequired,
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